import { BlueprintHero } from "./components/BlueprintHero";
import { SpeedTest } from "./components/SpeedTest";
import { UserFlowMap } from "./components/UserFlowMap";
import { TechStack } from "./components/TechStack";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Navigation } from "@/components/sections/Navigation";
import { Footer } from "@/components/sections/Footer";
import { pageMetadata, schemaJson, serviceSchema } from "@/lib/seo";

export const metadata = pageMetadata("Business Website Development", "Business websites, landing pages, editable content and enquiry forms from LogicGrid Ops. Website development for clients in Pakistan and worldwide.", "/systems/web");

export default function ConversionWebSystemsPage() {
    return (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navigation />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schemaJson(serviceSchema("Business website development", "Business websites, landing pages, editable content and enquiry flows for clients in Pakistan and worldwide.", "/systems/web")) }} />

            {/* 1. HERO: The Living Blueprint */}
            <BlueprintHero />

            {/* 2. THE PROBLEM: Latency Leaks (Speed Test) */}
            <section className="py-24 border-t border-border/40 relative">
                <div className="container px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <Badge variant="outline" className="border-red-500/20 text-red-600 dark:text-red-400 bg-red-500/10">THE BOTTLENECK</Badge>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Latency Kills Conversion.</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Slow pages and unclear next steps can interrupt an enquiry. We build responsive business websites and landing pages with clear services, useful project content and a direct way to get in touch.
                            </p>
                            <ul className="space-y-3 pt-4">
                                {["Render-Blocking Scripts", "Unoptimized Images", "Generic Animation Lags"].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <SpeedTest />
                    </div>
                </div>
            </section>

            {/* 3. THE SOLUTION: User Flow Map */}
            <section className="py-24 bg-muted/20 border-y border-border/40">
                <div className="container px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10">THE ARCHITECTURE</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frictionless Path to Value</h2>
                        <p className="text-lg text-muted-foreground">
                            A granular view of how we engineer the perfect user journey, removing every possible drop-off point.
                        </p>
                    </div>
                    <UserFlowMap />
                </div>
            </section>

            {/* 4. THE ARSENAL: Tech Stack */}
            <section className="py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">System Specifications</h2>
                            <p className="text-muted-foreground max-w-md">
                                The modern stack chosen for durability and scale.
                            </p>
                        </div>
                        <Link href="/#contact">
                            <Button size="lg" className="rounded-full bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20">
                                Initialize Build <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </Link>
                    </div>
                    <TechStack />
                </div>
            </section>
            <section className="py-20 border-t border-border">
                <div className="container px-4 md:px-6 max-w-4xl space-y-6">
                    <h2 className="text-3xl font-semibold">Content your team can manage</h2>
                    <p className="text-muted-foreground leading-relaxed">The build can include an editable project gallery, service pages, enquiry forms and newsletter integration. We agree on the pages, content, integrations and handover before starting. LogicGrid Ops works remotely with businesses in Pakistan and overseas, with domain and service accounts kept under the agreed ownership.</p>
                    <h2 className="text-3xl font-semibold pt-6">See a completed website</h2>
                    <p className="text-muted-foreground leading-relaxed">For writer Younis B. Azeem, we built an editable author website with published work, high quality portraits, a contact form and newsletter signup. The case study explains the delivered features and how the owner manages the site.</p>
                    <Link href="/work/younis-b-azeem" className="inline-block text-violet-600 dark:text-violet-400 font-semibold">Read the Younis B. Azeem case study →</Link>
                    <div className="pt-6"><Link href="/#contact" className="inline-block rounded-full bg-violet-600 hover:bg-violet-500 text-white px-7 py-3 font-semibold">Discuss your website</Link></div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
