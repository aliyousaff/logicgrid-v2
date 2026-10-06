import { readFile, mkdir, writeFile, rename } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { OAuth2Client } from "google-auth-library";

export const scope = "https://www.googleapis.com/auth/webmasters.readonly";
export const property = "sc-domain:logicgridops.com";
export const privateDirectory = path.join(os.homedir(), ".codex", "seo", "logicgridops");
export const clientFile = process.env.GSC_OAUTH_CLIENT_FILE || path.join(privateDirectory, "client.json");
export const tokenFile = process.env.GSC_OAUTH_TOKEN_FILE || path.join(privateDirectory, "tokens.json");

export async function readPrivateJson(file, label) {
  try { return JSON.parse(await readFile(file, "utf8")); }
  catch { throw new Error(`${label} is missing or invalid. Follow docs/FREE-SEARCH-CONSOLE.md. File: ${file}`); }
}

export async function loadClient(redirectUri) {
  const json = await readPrivateJson(clientFile, "Google Desktop OAuth client");
  const config = json.installed;
  if (!config || typeof config.client_id !== "string" || !config.client_id.endsWith(".apps.googleusercontent.com") || typeof config.client_secret !== "string") {
    throw new Error("Create a Desktop app OAuth client and download its JSON. A service-account or Web app JSON is not supported.");
  }
  const client = new OAuth2Client({ clientId: config.client_id, clientSecret: config.client_secret, redirectUri });
  client.logicgridClientId = config.client_id;
  return client;
}

export async function writePrivateJson(file, data) {
  await mkdir(path.dirname(file), { recursive: true, mode: 0o700 });
  const temporary = `${file}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(data, null, 2)}\n`, { mode: 0o600 });
  await rename(temporary, file);
}

export async function authorizedClient() {
  const client = await loadClient();
  const saved = await readPrivateJson(tokenFile, "Google authorization");
  if (!saved.refresh_token || saved.clientId !== client.logicgridClientId) {
    throw new Error("Run npm run seo:gsc:auth to authorize this OAuth client with offline access.");
  }
  client.setCredentials({ refresh_token: saved.refresh_token, access_token: saved.access_token, expiry_date: saved.expiry_date, scope: saved.scope, token_type: saved.token_type });
  return client;
}

// Google/library errors can include request headers or token payloads. Never dump them.
export function safeError(error) {
  if (error instanceof Error && !error.response && !error.config && !error.cause) return error.message;
  const status = error?.response?.status;
  const code = error?.response?.data?.error;
  if (code === "invalid_grant" || status === 401) return "Google authorization expired or was revoked. Run npm run seo:gsc:auth again. For recurring access, check the OAuth app's publishing status.";
  if (status === 403) return "Google refused access. Confirm Search Console API is enabled and the signed-in account owns logicgridops.com. No billing upgrade is required for this API.";
  if (status === 429) return "Google API quota was reached. Wait before retrying; do not purchase capacity.";
  return "Google request failed. Check network connectivity and authorization. Credentials and request headers were omitted from this error.";
}
