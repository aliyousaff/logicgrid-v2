import { ServiceSearch } from "@/components/services/ServiceSearch";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { Badge } from "@/components/ui/badge";

import { Navigation } from "@/components/sections/Navigation";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Website Development, Automation & AI Services", "Explore business website development, workflow automation and AI integration services from LogicGrid Ops for clients in Pakistan and worldwide.", "/services");

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-24">
                {/* Hero Section */}
                <section className="relative px-4 pb-8 pt-6 md:pt-10 text-center overflow-hidden">
                    {/* Background Fx */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-600/10 dark:bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 container max-w-4xl mx-auto space-y-8">
                        <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 tracking-widest uppercase px-3 py-1">
                            CAPABILITY_MAP_V1.0
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                            Websites, Automation & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">AI Integrations</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Build a business website, connect your workflows or put AI to work with your own information. We work with businesses in Pakistan and internationally.
                        </p>
                    </div>
                </section>

                {/* Search & List Section */}
                <section className="px-4 pb-32">
                    <div className="container mx-auto">
                        <div className="grid md:grid-cols-3 gap-6 my-12">
                            {[
                                { href: "/systems/web", title: "Website Development", text: "Business websites, landing pages, editable content and enquiry flows." },
                                { href: "/systems/automation", title: "Business Automation", text: "Connect forms, CRMs, email and internal tasks with practical workflows." },
                                { href: "/systems/ai", title: "AI Integrations", text: "Knowledge assistants, document retrieval and AI connected to your tools." },
                            ].map((service) => (
                                <Link key={service.href} href={service.href} className="rounded-2xl border border-border bg-card p-6 hover:border-violet-500/50 transition-colors">
                                    <h2 className="font-semibold text-xl mb-3">{service.title}</h2>
                                    <p className="text-muted-foreground leading-relaxed">{service.text}</p>
                                    <span className="inline-block mt-5 text-violet-600 dark:text-violet-400 text-sm">Explore the service →</span>
                                </Link>
                            ))}
                        </div>
                        <ServiceSearch />
                    </div>
                </section>

                <ServiceCTA />
            </div>
            <Footer />
        </main>
    );
}
