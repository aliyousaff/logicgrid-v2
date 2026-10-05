import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { pageMetadata, schemaJson, SITE_URL } from "@/lib/seo";

const description = "How LogicGrid Ops built Younis B. Azeem's author website with editable publications, portraits, a contact form and newsletter signup.";
export const metadata = pageMetadata("Younis B. Azeem Website Case Study", description, "/work/younis-b-azeem");

export default function YounisCaseStudy() {
  return <main className="min-h-screen bg-background text-foreground">
    <Navigation />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson({
      "@context": "https://schema.org", "@type": "Article", headline: "Younis B. Azeem: an editable author website",
      description, url: `${SITE_URL}/work/younis-b-azeem`, author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
    }) }} />
    <article className="container max-w-4xl px-4 md:px-6 py-16 md:py-24">
      <p className="text-violet-600 dark:text-violet-400 text-sm uppercase tracking-widest mb-5">Website case study</p>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">Younis B. Azeem: an editable author website</h1>
      <p className="text-xl text-muted-foreground leading-relaxed mt-7">A writer needed a clean home for his biography and published essays, with a way for readers to contact him and subscribe to future work. LogicGrid Ops built and deployed the website, then configured an editor so he could manage its content.</p>
      <a href="https://younisbazeem.com/" target="_blank" rel="noopener noreferrer" className="inline-block mt-7 text-violet-600 dark:text-violet-400 font-semibold">Visit the live website ↗</a>
      <div className="space-y-12 mt-16">
        <section>
          <h2 className="text-2xl font-semibold mb-5">The website</h2>
          <p className="text-muted-foreground leading-relaxed">The site includes a biography page, a published-work collection and a contact page. Essay cards link to the original publications in a new tab. Optional awards and nominations have their own italic line. The home and contact portraits are prepared from the supplied TIFF files as high resolution masters, with responsive images delivered to visitors.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-5">Editing without a developer</h2>
          <p className="text-muted-foreground leading-relaxed">Pages CMS lets the owner update the biography, publications, image descriptions, portraits, social links and page settings. Content saves are committed to GitHub, and Cloudflare Pages rebuilds the website. The owner can publish an essay entry or replace a photo through the editor.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-5">Contact and newsletter connections</h2>
          <p className="text-muted-foreground leading-relaxed">The contact form collects a name, email, subject and message, then sends the enquiry through Cloudflare’s email service. The newsletter form connects to Kit through a server-side API. After a successful signup, the form animates into a receipt that explains the confirmation-email step. These integrations sit within the website’s visual style.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-5">Deployment and handover</h2>
          <p className="text-muted-foreground leading-relaxed">The website uses Astro, GitHub and Cloudflare Pages, with Pages CMS for editing and Kit for the newsletter. It includes canonical page URLs, an XML sitemap, responsive images and image descriptions. The handover identifies the platforms used to manage the website, domain, content and subscriptions.</p>
        </section>
        <section className="border-t border-border pt-10">
          <h2 className="text-2xl font-semibold mb-5">Planning a website for your business?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">The same approach can be scoped around your service pages, project portfolio and enquiry workflow. We agree on the content, integrations and ongoing responsibilities before building.</p>
          <div className="flex flex-wrap gap-6"><Link href="/systems/web" className="text-violet-600 dark:text-violet-400">Explore website development →</Link><Link href="/#contact" className="text-violet-600 dark:text-violet-400">Discuss your project →</Link></div>
        </section>
      </div>
    </article>
    <Footer />
  </main>;
}
