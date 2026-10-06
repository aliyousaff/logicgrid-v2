import { createServer } from "node:http";
import { randomBytes, timingSafeEqual } from "node:crypto";
import { loadClient, scope, tokenFile, writePrivateJson, safeError } from "./common.mjs";

let server;
let timer;
try {
  // Read and validate the client before opening a listener.
  await loadClient();
  let accept;
  let reject;
  const callback = new Promise((resolve, fail) => { accept = resolve; reject = fail; });
  const state = randomBytes(32).toString("hex");
  let consumed = false;
  server = createServer((request, response) => {
    const url = new URL(request.url, "http://127.0.0.1");
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.setHeader("cache-control", "no-store");
    if (url.pathname !== "/oauth2callback" || request.method !== "GET") { response.writeHead(404); response.end("Not found"); return; }
    const returnedState = Buffer.from(url.searchParams.get("state") || "");
    const expectedState = Buffer.from(state);
    if (consumed || returnedState.length !== expectedState.length || !timingSafeEqual(returnedState, expectedState)) {
      response.writeHead(400); response.end("Invalid authorization response. Return to the local task."); return;
    }
    consumed = true;
    if (url.searchParams.has("error") || !url.searchParams.get("code")) {
      response.writeHead(400); response.end("Authorization was not completed."); reject(new Error("Google sign-in was declined or incomplete.")); return;
    }
    response.end("Google returned your authorization. Return to Codex for the final connection result. You can close this tab.");
    accept(url.searchParams.get("code"));
  });
  await new Promise((resolve, rejectListen) => { server.once("error", rejectListen); server.listen(0, "127.0.0.1", resolve); });
  const client = await loadClient(`http://127.0.0.1:${server.address().port}/oauth2callback`);
  const { codeVerifier, codeChallenge } = await client.generateCodeVerifierAsync();
  const url = client.generateAuthUrl({ access_type: "offline", prompt: "consent", scope: [scope], state, code_challenge: codeChallenge, code_challenge_method: "S256" });
  console.log("Open this fresh Google sign-in URL in your browser on this computer. Choose the account that owns logicgridops.com. Do not paste the callback URL or tokens into chat.");
  console.log(url);
  timer = setTimeout(() => reject(new Error("Sign-in timed out after ten minutes. Run npm run seo:gsc:auth to generate a fresh URL.")), 600000);
  const code = await callback;
  clearTimeout(timer);
  const { tokens } = await client.getToken({ code, codeVerifier });
  if (!tokens.refresh_token) throw new Error("Google did not return offline access. Run the sign-in again and approve Search Console read access.");
  if (tokens.scope && !tokens.scope.split(" ").includes(scope)) throw new Error("Search Console read access was not granted. Repeat sign-in and approve that permission.");
  await writePrivateJson(tokenFile, { ...tokens, clientId: client.logicgridClientId });
  console.log("Authorization saved privately. Run npm run seo:gsc to verify property access. No subscription was created.");
} catch (error) {
  console.error(safeError(error)); process.exitCode = 1;
} finally {
  clearTimeout(timer);
  server?.close();
}
