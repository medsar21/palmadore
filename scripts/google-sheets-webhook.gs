/**
 * Webhook Google Apps Script pour les formulaires Palmador.
 * Deploiement Web App:
 * - Executer en tant que: Moi
 * - Qui a acces: Tout le monde
 */

const SHEET_ID = "1z9j4qIZCEo8Oc8E_iuFb6oIi6t3ojiC_uDwK0tTw3iA";
const SHEET_NAME = "palmador commande";

function doGet() {
  return jsonResponse_({ status: "ok", message: "Webhook Palmador actif" });
}

function doPost(e) {
  const lock = LockService.getScriptLock();

  try {
    const data = parseRequestData_(e);

    const missing = [];
    ["fullName", "email", "phone", "message"].forEach(function (key) {
      if (!data[key] || String(data[key]).trim() === "") {
        missing.push(key);
      }
    });

    if (missing.length > 0) {
      return jsonResponse_({
        status: "error",
        message: "Champs obligatoires manquants: " + missing.join(", "),
      });
    }

    lock.waitLock(15000);

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ensureSheet_(ss);
    ensureHeaders_(sheet);

    sheet.appendRow([
      new Date(),
      String(data.fullName).trim(),
      String(data.email).trim(),
      String(data.phone).trim(),
      String(data.message).trim(),
    ]);

    return jsonResponse_({ status: "success", message: "Message enregistre avec succes" });
  } catch (error) {
    const message = error && error.message ? error.message : String(error);
    return jsonResponse_({ status: "error", message: message });
  } finally {
    try {
      lock.releaseLock();
    } catch (_) {}
  }
}

function parseRequestData_(e) {
  if (!e) {
    throw new Error("Aucun objet event recu");
  }

  if (e.parameter && Object.keys(e.parameter).length > 0) {
    return {
      fullName: firstString_(e.parameter.fullName),
      email: firstString_(e.parameter.email),
      phone: firstString_(e.parameter.phone),
      message: firstString_(e.parameter.message),
    };
  }

  if (e.postData && e.postData.contents) {
    const raw = String(e.postData.contents || "").trim();
    if (!raw) {
      throw new Error("Le corps de la requete est vide");
    }

    let obj;
    try {
      obj = JSON.parse(raw);
    } catch (_) {
      throw new Error("Le corps JSON est invalide");
    }

    return {
      fullName: firstString_(obj.fullName),
      email: firstString_(obj.email),
      phone: firstString_(obj.phone),
      message: firstString_(obj.message),
    };
  }

  throw new Error("Aucune donnee recue");
}

function ensureSheet_(ss) {
  const existing = ss.getSheetByName(SHEET_NAME);
  if (existing) {
    return existing;
  }

  const created = ss.insertSheet(SHEET_NAME);
  return created;
}

function ensureHeaders_(sheet) {
  const headers = [
    "Date / Heure",
    "Nom complet",
    "Email professionnel",
    "Telephone",
    "Message",
  ];

  const firstRow = sheet.getRange(1, 1, 1, headers.length).getValues()[0];
  const isEmpty = firstRow.every(function (v) {
    return String(v || "").trim() === "";
  });
  const isDifferent = firstRow.some(function (v, i) {
    return String(v || "").trim() !== headers[i];
  });

  if (sheet.getLastRow() === 0 || isEmpty || isDifferent) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
    sheet.getRange(1, 1, 1, headers.length).setHorizontalAlignment("center");
    sheet.setFrozenRows(1);
  }
}

function firstString_(val) {
  if (val === undefined || val === null) return "";
  if (Array.isArray(val)) return String(val[0] || "").trim();
  return String(val).trim();
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj) + "\n").setMimeType(ContentService.MimeType.JSON);
}
