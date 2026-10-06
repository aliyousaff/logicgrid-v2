# Free, direct Google Search Console connection

This replaces the GSC Wizard trial for recurring SEO reports. Google states that all Search Console API use is free, subject to usage limits: https://developers.google.com/webmaster-tools/pricing. The reader runs locally with Codex desktop's existing plan. No cloud compute, BigQuery export, paid connector, subscription or OpenAI API is needed. The owner explicitly prohibits additional purchases.

## One-time Google setup

Use the Google account that owns the `logicgridops.com` Domain property.

1. Open https://console.cloud.google.com/ and create a project named **LogicGrid SEO** (or reuse your own suitable project). This integration only uses a free API. If a screen asks you to add billing or start a paid trial, stop and share the screen; do not enter payment details.
2. Open **APIs & Services → Library**, search **Google Search Console API**, and click **Enable**. Direct API link: https://console.cloud.google.com/apis/library/searchconsole.googleapis.com.
3. Open **Google Auth Platform**. If setup is requested, choose **Get started**, name the app **LogicGrid SEO**, use your own email for support/contact and choose **External** audience for a personal Gmail account.
4. Under **Data Access**, add only `https://www.googleapis.com/auth/webmasters.readonly`. This is Search Console read access. The local reader does not modify properties, submit sitemaps or request indexing.
5. Under **Audience**, add your own account as a test user while setting up. For recurring use, change publishing status to **In production / Publish app** before the final authorization. This is a private utility for your own account, not a publicly distributed service. Google's personal-use exception does not require review, but an unverified-app screen can appear. Proceed only when the app name/client matches the project you created. Staying in Testing gives this scope a seven-day refresh token, requiring repeated sign-in.
6. Under **Clients → Create client**, choose **Desktop app** (not Web application). Name it **LogicGrid desktop SEO**, create it and download the client JSON.
7. Keep that file outside Git. Tell Codex only its local file path, not its contents. Codex will place it at `C:\Users\ALi\.codex\seo\logicgridops\client.json` and start the local sign-in. No service-account user needs to be added to Search Console.

Google's UI labels can vary. If the screen differs, share a screenshot of that screen without credential contents. We can finish the account steps in order.

## Connect from this computer

From `E:\Git Repos\logicgrid-v2`:

```powershell
npm run seo:gsc:setup
npm run seo:gsc:auth
```

Open the generated Google sign-in URL in the normal browser on this computer and authorize your owner account. The script listens only on `127.0.0.1` for up to ten minutes. It uses PKCE and verifies the callback state. Google returns to that local listener; do not copy the callback into chat. Tokens are saved privately at `C:\Users\ALi\.codex\seo\logicgridops\tokens.json`.

Then run:

```powershell
npm run seo:gsc
```

It confirms access to `sc-domain:logicgridops.com`, reads sitemap status, compares two 28-day performance periods, fetches the top 1,000 queries/pages and inspects the bare-domain homepage, WWW homepage and three service pages. Private reports go under `.seo-reports/direct-gsc/`. No requests go through GSC Wizard.

Search Console uses Pacific dates. The script probes Google's incomplete-data metadata and queries final data only. When Google provides no freshness marker it uses a clearly labelled three-day fallback. Google may omit anonymized queries and return only top rows. Empty data is not proof that no pages are indexed, and a stored URL Inspection report is not a live-page test.

## Security and continuing access

- The OAuth client and tokens live outside the repository. Don't paste them into chat, commit them, put them on the website or deploy them to Vercel. `GSC_OAUTH_CLIENT_FILE` and `GSC_OAUTH_TOKEN_FILE` support other private file locations.
- Use your own project/client. The consent scope is read only. Do not request Gmail, Drive or Cloud Platform permissions.
- The official `google-auth-library` handles token refresh. Google can still revoke/expire authorization; the script reports the needed sign-in rather than buying a replacement service.
- For a new checkout, install the helper's locked dependencies with `npm run seo:gsc:setup`. These are isolated from the website's production dependencies.
- This reader is prepared but **not connected** until your client is created, sign-in completes and a live property read passes. Offline tests cannot prove real account access.
- Codex's recurring tasks still need to be saved in Scheduled. Changing the prompts in Git does not edit an already saved task: if you saved the earlier version, replace its prompt with the updated file text.

## Sources

- Free API and quotas: https://developers.google.com/webmaster-tools/pricing and https://developers.google.com/webmaster-tools/limits
- Desktop OAuth/PKCE: https://developers.google.com/identity/protocols/oauth2/native-app
- Seven-day testing-token behavior: https://developers.google.com/identity/protocols/oauth2#expiration
- Personal-use verification exception: https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification#exceptions
- Official authentication library: https://github.com/googleapis/google-auth-library-nodejs
