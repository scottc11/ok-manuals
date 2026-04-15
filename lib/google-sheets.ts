import { google } from "googleapis";

export function getGoogleSheetsClient() {
  let privateKey: string | undefined;
  if (process.env.GOOGLE_PRIVATE_KEY_BASE64) {
    privateKey = Buffer.from(process.env.GOOGLE_PRIVATE_KEY_BASE64, "base64").toString();
  } else if (process.env.GOOGLE_PRIVATE_KEY) {
    privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n").replace(/\\\\/g, "\\");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: privateKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

export async function getCountryFromIP(ip: string): Promise<string> {
  try {
    if (ip === "unknown" || ip.startsWith("127.") || ip.startsWith("192.168.") || ip.startsWith("10.")) {
      return "Local";
    }
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.status === "success" && data.country) {
      return data.country;
    }
    return "Unknown";
  } catch {
    return "Unknown";
  }
}
