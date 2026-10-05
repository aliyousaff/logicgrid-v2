import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { schemaJson, serviceSchema } from "@/lib/seo";

interface Props {
  path: string;
  title: string;
  introduction: string;
  sections: { heading: string; text: string; items?: string[] }[];
  questions: { question: string; answer: string }[];
}

export function ServiceDetail({ path, title, introduction, sections, questions }: Props) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson(serviceSchema(title, introduction, path)) }} />
      <div className="container max-w-5xl px-4 md:px-6 py-16 md:py-24">
        <Link href="/services" className="text-sm text-violet-600 dark:text-violet-400">← All services</Link>
        <header className="mt-10 mb-16 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-5">LogicGrid Ops services</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{title}</h1>
          <p className="text-lg md:text-xl text-muted-foreground mt-6 leading-relaxed">{introduction}</p>
          <Link href="/#contact" className="inline-block mt-8 rounded-full bg-violet-600 text-white px-7 py-3 font-semibold hover:bg-violet-500">Discuss your project</Link>
        </header>
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.heading} className="border-t border-border pt-10">
              <h2 className="text-2xl md:text-3xl font-semibold mb-5">{section.heading}</h2>
              <p className="max-w-3xl text-muted-foreground leading-relaxed">{section.text}</p>
              {section.items && <ul className="grid sm:grid-cols-2 gap-4 mt-6">
                {section.items.map((item) => <li key={item} className="rounded-xl border border-border bg-card p-5 leading-relaxed">{item}</li>)}
              </ul>}
            </section>
          ))}
          <section className="border-t border-border pt-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Questions before you start</h2>
            <div className="space-y-4">
              {questions.map(({ question, answer }) => <details key={question} className="rounded-xl border border-border p-5">
                <summary className="font-medium cursor-pointer">{question}</summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{answer}</p>
              </details>)}
            </div>
          </section>
          <section className="rounded-2xl border border-violet-500/30 bg-violet-500/5 p-8">
            <h2 className="text-2xl font-semibold mb-4">Start with the problem you want to solve</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">Tell us what your business does, the tools you already use and where work gets stuck. We will discuss the scope, dependencies and handover before a build begins. Projects can be delivered remotely for clients in Pakistan and overseas.</p>
            <Link href="/#contact" className="text-violet-600 dark:text-violet-400 font-semibold">Request a scoped proposal →</Link>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
