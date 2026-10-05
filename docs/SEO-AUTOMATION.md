# LogicGrid Ops desktop SEO operations

## Setup status (2026-10-06)

These are prepared task prompts and a runnable checker. They are not proof that a schedule is active. Save the two tasks in Codex desktop's Scheduled view before relying on recurring execution. Local tasks need this computer on, the app running and the project available on disk. No OpenAI API key or GitHub AI runner is used.

Google Domain ownership has been verified by the owner, and the owner requested homepage indexing. Successful sitemap processing and current Google indexing have not yet been confirmed. GSC Wizard is installed, but access to its tools and the LogicGrid Ops property must be confirmed in a run before reporting Google metrics.

## Save once in Codex desktop

1. Add/open the project `E:\Git Repos\logicgrid-v2`. Choose this project for both tasks, not the Younis website project.
2. Open **Scheduled**, create a standalone recurring task named **LogicGrid SEO monitor**. Use the complete text from `prompts/seo-daily.md`. Run daily at **09:00 Asia/Karachi**.
3. Create **LogicGrid SEO improvements**, using the complete text from `prompts/seo-weekly.md`. Run every **Monday at 10:00 Asia/Karachi**.
4. Choose the local project execution option, so the tasks share private report state. Use the existing plan/model and the project's normal permission settings. Do not enable paid API usage or change global security settings.
5. Use **Run now** for each task and review its initial output. The technical checker has been tested separately, but this also verifies scheduled execution, connector availability and account access.

If the scheduling control is available as a tool in a future chat, use that tool to inspect/create the tasks and verify the saved state. Don't create duplicates. If GSC Wizard's tools aren't visible after connecting, reopen the chat/app and test property listing. Never paste OAuth callback URLs, API keys or browser cookies into task prompts.

## Files and private state

- `npm run seo:audit` checks the live canonical domain, all sitemap URLs (up to 200), metadata, indexability, JSON-LD, required core routes, WWW redirects, social image and true 404s. It returns exit code 1 on a failure and writes `.seo-reports/latest.json` and `previous.json`.
- `.seo-reports/` is ignored by Git. Keep technical snapshots, notification fingerprints and aggregate GSC reports here. Don't store submitted form details, credentials or OAuth codes.
- `seo/business-facts.json` is the factual baseline. It contains no verified business-result metrics or approved fixed prices.
- `seo/content-plan.json` is a topic queue, not keyword-volume evidence. Update publication dates only after live verification. New guides are capped at one per 14 days.
- A public technical pass does not measure actual Google inclusion, rankings, traffic, mobile rendering or enquiry delivery. Use URL Inspection/GSC for indexing, browser checks for rendering, and separately authorized form tests for delivery.

## Avoid overlapping edits

Use an exclusive `.seo-reports/operation.lock` file before making changes, recording task name, start time and process/session reference. Both tasks share this directory because they run in the local project. Create it atomically (for example, Node `fs.open` with `wx`). If it exists, inspect whether the other run is active. Defer mutations when active; don't delete an active lock. A stale lock can be cleared after checking that its run ended. Remove your own lock in cleanup. The read-only audit can still run while editing is deferred.

## Source and publishing workflow

Repository: `aliyousaff/logicgrid-v2`, primary branch `master`. Vercel: project `logicgrid-v2`, scope `aliyousaffs-projects`. The production domain is `logicgridops.com`.

1. Inspect `git status`, recent commits and remote `master` before editing. Fetch the remote. Never discard or include unrelated user changes. Use a separate `codex/seo-...` branch/worktree when the local checkout has ongoing work. Keep private task state in the main project directory.
2. Base edits on the current remote and deployed source. If production differs from Git, resolve that discrepancy before deploying; don't overwrite newer live work. Read any applicable repository instructions.
3. Review the diff. Run focused ESLint and TypeScript checks for changed code, and `npm run build` for website changes. Existing baseline lint errors are not an excuse to introduce new errors. Check altered pages on desktop and mobile for layout, metadata, working navigation and horizontal overflow. Don't send test enquiries or subscriptions without authorization for that test.
4. Commit only intended files. Merge/rebase with current remote safely, push `master` and verify the pushed commit. If there is a conflict with concurrent user work, preserve it and resolve from evidence or request the missing decision.
5. This Vercel project was not linked to GitHub automatic deployment at setup. Check its current deployment configuration; a successful Git push alone does not prove publication. Unless automatic deployment is now verified, run from the validated checkout:

   ```powershell
   vercel deploy --prod --yes --scope aliyousaffs-projects
   ```

   The existing `.vercel/project.json` identifies the project. In a fresh worktree link to the existing project first:

   ```powershell
   vercel link --yes --project logicgrid-v2 --scope aliyousaffs-projects
   ```

   Use the existing CLI authentication; never print token files or add them to Git. Confirm the linked project before deployment.
6. Wait for successful production deployment, inspect changed live URLs and run `npm run seo:audit`. If a release regresses, restore the last verified release through the existing project and report what happened. Avoid blanket resets or destructive rollback of unrelated work.
7. Save a concise private report with the commit and deployment result. Documentation/checker-only changes do not need a website rebuild or deployment.

## Operating limits

Google decides whether and when to crawl, index and rank pages. Tasks can maintain technical readiness, publish useful work and analyze actual data; they cannot guarantee rankings or clients. Connector access, Google ownership and any action needing a signed-in UI may occasionally require the owner. Don't silently purchase additional services. These desktop tasks use the existing plan's usage allowance and run only when its local execution requirements are met.
