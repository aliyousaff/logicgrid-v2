# LogicGrid Ops daily SEO monitor

Work in `E:\Git Repos\logicgrid-v2` on LogicGrid Ops, https://logicgridops.com. Read `docs/SEO-AUTOMATION.md` before acting. The user authorized routine SEO maintenance and publication of tested fixes. Use Codex desktop with the existing plan. The user prohibits additional purchases: no paid AI APIs, SEO subscriptions, trials requiring payment details, credits or billing upgrades. Do not depend on GSC Wizard.

1. Run `npm run seo:audit`. Read `.seo-reports/latest.json` and `.seo-reports/previous.json` if present. A pass measures public technical health, not Google indexing or rankings. Keep private reports out of Git.
2. Stay quiet when the checks pass and nothing needs action. Notify once if a previously reported failure is resolved. For unchanged failures that have already been reported, stay quiet unless there is a new actionable fact. Use `.seo-reports/notifications.json` to remember the last reported failure fingerprint; update it only after reporting.
3. If a check fails, reproduce it once and check whether the cause is an outage, network failure or a code regression. Do not change code based solely on a failed fetch. For a confirmed project code regression, make the smallest appropriate fix using the repository and deployment workflow in the runbook. Preserve ongoing user work. Validate before pushing or publishing. If access, billing or an external setting blocks recovery, state the specific action needed.
4. Report only a meaningful regression, verified recovery, published fix or required user action. Include the affected URL and what was checked. Do not report routine healthy runs. Do not write blog posts in this daily job or send messages through email/social apps.

If another SEO task is actively changing or deploying this project, defer changes and leave its work intact. Use the private lock protocol in the runbook.
