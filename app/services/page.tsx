import { ServiceSearch } from "@/components/services/ServiceSearch";
import { ServiceCTA } from "@/components/sections/services/ServiceCTA";
import { Badge } from "@/components/ui/badge";

import { Navigation } from "@/components/sections/Navigation";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background transition-colors duration-300">
            <Navigation />
            <div className="pt-24">
                {/* Hero Section */}
                <section className="relative px-4 pb-8 pt-6 md:pt-10 text-center overflow-hidden">
                    {/* Background Fx */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-violet-500/10 dark:bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

                    <div className="relative z-10 container max-w-4xl mx-auto space-y-8">
                        <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 tracking-widest uppercase px-3 py-1">
                            CAPABILITY_MAP_V1.0
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                            All the Ways We Can <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400">Improve Your Business</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Whether you need a small operational fix or a complete infrastructure overhaul, we cover the entire spectrum.
                        </p>
                    </div>
                </section>

                {/* Search & List Section */}
                <section className="px-4 pb-32">
                    <div className="container mx-auto">
                        <ServiceSearch />
                    </div>
                </section>

                <ServiceCTA />
            </div>
        </main>
    );
}
