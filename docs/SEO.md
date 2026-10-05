# LogicGrid Ops SEO setup

The canonical website is https://logicgridops.com. Titles, descriptions, canonical URLs, social previews and Organization/Service structured data are defined in `lib/seo.ts` and the page modules. Service pages describe websites, business automation and AI integration for clients in Pakistan and overseas without claiming a physical office or guaranteed rankings.

## Google Search Console

1. Add the Domain property `logicgridops.com` in the owner's Google account.
2. In Namecheap → Domain List → Manage → Advanced DNS, add Google's verification string as a TXT record at host `@`. Keep the domain's other records.
3. Once the TXT record is visible in DNS, click Verify in Search Console.
4. In Sitemaps, submit `https://logicgridops.com/sitemap.xml`.
5. Use URL Inspection for the home page and the three service pages. Inspect the live URL and request indexing if eligible. Submitting a sitemap or requesting indexing does not guarantee inclusion or a ranking.
6. Review the Pages and Performance reports as data becomes available. Compare impressions, clicks, queries and enquiry quality over time.

The optional `GOOGLE_SITE_VERIFICATION` environment variable supports an HTML verification tag for a URL-prefix property. It does not replace DNS verification for a Domain property.

## Published URLs

- `/`: main business website
- `/services`: service directory
- `/systems/web`: website development
- `/systems/automation`: business automation and CRM integration
- `/systems/ai`: AI integration and knowledge assistants
- `/work/younis-b-azeem`: factual case study of the delivered author website
- `/legal/privacy` and `/legal/terms`: legal information

The sitemap lists canonical content pages. Service-directory search parameters are filters, not additional landing pages. `/api/` is excluded from crawling in robots.txt. robots.txt is not an access-control mechanism.

## Continuing work

- Add case studies as projects are delivered, using real screenshots with permission, clear scope and verified outcomes. Do not publish invented clients, testimonials or performance numbers.
- Use Search Console query data and client conversations to choose additional useful service pages. Add location pages only where the business genuinely serves a distinct market and has relevant content.
- Keep the service descriptions and project evidence current. Link to relevant service pages from professional profiles and legitimate business listings.
- Establish a baseline for genuine enquiries and, when analytics is configured, record successful enquiries without sending submitted personal information to analytics tools.

## Source and deployment

The starting source was recovered from the live Vercel deployment because GitHub master was older than production. The recovery commit is separate from the SEO changes. The Vercel project is `logicgrid-v2`, and its canonical domain is `logicgridops.com`.
