"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Monitor, BarChart, Search, Database } from "lucide-react";

export function ExplodingHero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Transform values for the "Explosion"
    // The layers will separate vertically
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -350]); // Top Layer (UI) -> Goes Up significantly
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Analytics -> Up
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);   // SEO -> Slight Down
    const y4 = useTransform(scrollYProgress, [0, 1], [0, 250]);  // CMS/Infra -> Goes Down significantly

    // Opacity fade for background elements
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="h-[200vh] relative bg-background">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden perspective-[1200px]">

                {/* Background Glow */}
                <motion.div style={{ opacity }} className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />
                </motion.div>

                {/* Hero Text */}
                <motion.div style={{ opacity }} className="relative z-10 text-center space-y-6 max-w-4xl px-4 mb-24 md:mb-12">
                    <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10">SYSTEM_ID: WEB_CONVERSION_01</Badge>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                        Precision Interfaces <br /> for <span className="text-violet-600 dark:text-violet-400">Demand Capture</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        We don't build websites. We engineer low-latency conversion environments designed to process human attention into structured data.
                    </p>
                    <div className="text-xs text-muted-foreground font-mono animate-pulse pt-8 uppercase tracking-widest">
                        Scroll to Deconstruct System
                    </div>
                </motion.div>

                {/* The Stack (3D Layers) */}
                <div className="relative w-[300px] md:w-[600px] h-[400px] perspective-[1200px] [transform-style:preserve-3d]">

                    {/* Layer 1: UI/UX (Top) */}
                    <motion.div style={{ y: y1, rotateX: 20 }} className="absolute inset-0 bg-card border border-violet-500/30 rounded-xl shadow-2xl flex flex-col items-center justify-center z-40 backdrop-blur-sm bg-opacity-80">
                        <Monitor className="w-12 h-12 text-violet-500 mb-4" />
                        <h3 className="text-2xl font-bold text-foreground">Interface Layer</h3>
                        <p className="text-sm text-muted-foreground">Optimistic UI • 0ms Latency</p>
                    </motion.div>

                    {/* Layer 2: Analytics */}
                    <motion.div style={{ y: y2, rotateX: 20, scale: 0.95 }} className="absolute inset-0 bg-zinc-900/90 border border-blue-500/20 rounded-xl shadow-xl flex flex-col items-center justify-center z-30 transform translate-z-[-50px]">
                        <BarChart className="w-10 h-10 text-blue-500 mb-4" />
                        <h3 className="text-xl font-bold text-foreground">Analytics Layer</h3>
                        <p className="text-sm text-muted-foreground">PostHog • Event Telemetry</p>
                    </motion.div>

                    {/* Layer 3: SEO/Structure */}
                    <motion.div style={{ y: y3, rotateX: 20, scale: 0.9 }} className="absolute inset-0 bg-zinc-900/90 border border-green-500/20 rounded-xl shadow-xl flex flex-col items-center justify-center z-20 transform translate-z-[-100px]">
                        <Search className="w-10 h-10 text-green-500 mb-4" />
                        <h3 className="text-xl font-bold text-foreground">Semantic Layer</h3>
                        <p className="text-sm text-muted-foreground">JSON-LD • Meta Structure</p>
                    </motion.div>

                    {/* Layer 4: Infrastructure (Bottom) */}
                    <motion.div style={{ y: y4, rotateX: 20, scale: 0.85 }} className="absolute inset-0 bg-zinc-950 border border-zinc-800 rounded-xl shadow-xl flex flex-col items-center justify-center z-10 transform translate-z-[-150px]">
                        <Database className="w-10 h-10 text-zinc-500 mb-4" />
                        <h3 className="text-xl font-bold text-foreground">Core Infrastructure</h3>
                        <p className="text-sm text-muted-foreground">Next.js 14 • Edge CDN</p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
