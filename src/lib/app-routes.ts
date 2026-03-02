export const APP_ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  SERVICES: "/services",
  ABOUT: "/about",
  CONTACT: "/contact",
  LOGIN: "/login",
  PRODUCT_DETAILS: "/product/:id",
  ORDER_CONFIRMATION: "/order-confirmation",
  SERVICE_MARIAGE: "/services/mariage",
  SERVICE_FIANCAILLES: "/services/fiancailles",
  SERVICE_NAISSANCE: "/services/naissance",
  SERVICE_ANNIVERSAIRE: "/services/anniversaire",
} as const;

export const PRODUCT_ROUTE_PATTERNS = [APP_ROUTES.PRODUCT_DETAILS] as const;
