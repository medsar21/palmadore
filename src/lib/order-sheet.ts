import { PRODUCT_ROUTE_PATTERNS } from "@/lib/app-routes";

export type OrderSheetPayload = {
  timestamp: string;
  orderNumber: string;
  productId: number;
  productName: string;
  productUrl: string;
  productCategory: string;
  productPrice: string;
  quantity: number;
  isPersonalized: boolean;
  personalizationText: string;
  customerFullName: string;
  customerEmail: string;
  customerPhone: string;
  customerAddress: string;
  customerMessage: string;
};

export type ContactSheetPayload = {
  fullName: string;
  phone: string;
  message: string;
  email?: string;
  productUrl?: string;
  productName?: string;
};

export type ProductUrlSource = {
  id?: string | number | null;
  slug?: string | number | null;
  url?: string | null;
  name?: string | null;
};

let hasLoggedWebhookUrl = false;

const getGoogleSheetEndpoint = (): string => {
  const endpoint = (
    (import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL as string | undefined) ||
    (import.meta.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL as string | undefined) ||
    ""
  ).trim();

  if (!endpoint) {
    throw new Error("Configuration manquante: VITE_GOOGLE_SHEETS_WEBHOOK_URL");
  }

  return endpoint;
};

const getBrowserOrigin = (): string => {
  if (typeof window === "undefined" || !window.location?.origin) {
    return "";
  }

  return window.location.origin;
};

const toAbsoluteUrl = (value: string): string => {
  const raw = value.trim();
  if (!raw) return "";

  const origin = getBrowserOrigin();

  try {
    if (origin) {
      return new URL(raw, origin).toString();
    }

    return new URL(raw).toString();
  } catch {
    return "";
  }
};

const buildPathFromPattern = (pattern: string, product: ProductUrlSource): string => {
  let path = pattern;

  if (path.includes(":slug")) {
    const slug = String(product.slug ?? "").trim();
    if (!slug) return "";
    path = path.replace(":slug", encodeURIComponent(slug));
  }

  if (path.includes(":id")) {
    const id = String(product.id ?? "").trim();
    if (!id) return "";
    path = path.replace(":id", encodeURIComponent(id));
  }

  return path;
};

const getSafeExistingUrl = (): string => {
  if (typeof window === "undefined") return "";

  const origin = getBrowserOrigin();
  if (origin) return origin;

  const href = String(window.location.href || "").trim();
  if (href) return href;

  return "";
};

const isReachableStatus = (status: number): boolean => {
  return status >= 200 && status < 400;
};

const canOpenUrl = async (url: string): Promise<boolean> => {
  try {
    const headResponse = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      cache: "no-store",
    });

    if (isReachableStatus(headResponse.status)) {
      return true;
    }

    // Some hosts do not allow HEAD for SPA routes.
    if (headResponse.status === 405 || headResponse.status === 501) {
      const getResponse = await fetch(url, {
        method: "GET",
        redirect: "follow",
        cache: "no-store",
      });

      return isReachableStatus(getResponse.status);
    }

    return false;
  } catch {
    return false;
  }
};

const buildRouteCandidates = (product: ProductUrlSource): string[] => {
  const origin = getBrowserOrigin();
  if (!origin) return [];

  const urls = PRODUCT_ROUTE_PATTERNS
    .map((pattern) => buildPathFromPattern(pattern, product))
    .filter((path) => path.length > 0)
    .map((path) => toAbsoluteUrl(path))
    .filter((url) => url.length > 0);

  return Array.from(new Set(urls));
};

export const buildProductUrl = async (product: ProductUrlSource | null | undefined): Promise<string> => {
  if (!product) return "";

  const directUrl = toAbsoluteUrl(String(product.url || ""));
  if (directUrl) {
    return directUrl;
  }

  const routeCandidates = buildRouteCandidates(product);
  for (const candidateUrl of routeCandidates) {
    const reachable = await canOpenUrl(candidateUrl);
    if (reachable) {
      return candidateUrl;
    }
  }

  return getSafeExistingUrl();
};

const getProductName = (value: string | null | undefined): string => {
  const name = String(value || "").trim();
  return name || "Ouvrir le produit";
};

const postRecordToGoogleSheet = async (record: Record<string, string>): Promise<void> => {
  const endpoint = getGoogleSheetEndpoint();
  const payload = new URLSearchParams(record);

  if (import.meta.env.DEV && !hasLoggedWebhookUrl) {
    console.info("[GoogleSheets] endpoint:", endpoint);
    hasLoggedWebhookUrl = true;
  }

  if (import.meta.env.DEV) {
    console.info("[GoogleSheets] payload:", Object.fromEntries(payload.entries()));
  }

  let response: Response;
  try {
    response = await fetch(endpoint, {
      method: "POST",
      body: payload,
      redirect: "follow",
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Erreur reseau inconnue";
    throw new Error(`Echec reseau vers Google Sheets: ${message}`);
  }

  const responseText = await response.text().catch(() => "");
  if (import.meta.env.DEV) {
    console.info("[GoogleSheets] status:", response.status);
    console.info("[GoogleSheets] body:", responseText || "(empty)");
  }

  if (!response.ok) {
    throw new Error(
      `Google Sheets a retourne HTTP ${response.status}${responseText ? ` - ${responseText}` : ""}`,
    );
  }

  if (!responseText.trim()) {
    return;
  }

  try {
    const parsed = JSON.parse(responseText);
    const status = String(parsed?.status || "").toLowerCase();

    if (status && status !== "success" && status !== "ok") {
      throw new Error(parsed?.message || parsed?.error || "Erreur Google Sheets");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      return;
    }

    if (error instanceof Error) {
      throw error;
    }
  }
};

const toOrderMessageText = (payload: OrderSheetPayload): string => {
  const personalization = payload.isPersonalized
    ? `Oui (${payload.personalizationText || "sans texte"})`
    : "Non";
  const customerMsg = payload.customerMessage || "Aucun message client";

  return [
    `Commande: ${payload.orderNumber}`,
    `Date: ${payload.timestamp}`,
    `Produit: ${payload.productName} (ID ${payload.productId})`,
    `Categorie: ${payload.productCategory}`,
    `Prix: ${payload.productPrice}`,
    `Quantite: ${payload.quantity}`,
    `Personnalisation: ${personalization}`,
    `Adresse: ${payload.customerAddress}`,
    `Message client: ${customerMsg}`,
  ].join(" | ");
};

const toOrderRecord = (payload: OrderSheetPayload): Record<string, string> => {
  const productUrl = payload.productUrl.trim();
  if (!productUrl) {
    throw new Error("URL produit manquante: impossible d'envoyer la commande.");
  }

  return {
    fullName: payload.customerFullName,
    email: payload.customerEmail,
    phone: payload.customerPhone,
    productUrl,
    productName: getProductName(payload.productName),
    message: toOrderMessageText(payload),
  };
};

export const submitOrderToGoogleSheet = async (payload: OrderSheetPayload): Promise<void> => {
  await postRecordToGoogleSheet(toOrderRecord(payload));
};

export const submitContactToGoogleSheet = async (payload: ContactSheetPayload): Promise<void> => {
  const fallbackUrl = typeof window !== "undefined" ? window.location.href : "";
  const productUrl = String(payload.productUrl || fallbackUrl).trim();

  if (!productUrl) {
    throw new Error("URL produit manquante: impossible d'envoyer la demande.");
  }

  await postRecordToGoogleSheet({
    fullName: payload.fullName,
    email: payload.email || "contact@palmador.local",
    phone: payload.phone,
    productUrl,
    productName: getProductName(payload.productName),
    message: payload.message,
  });
};
