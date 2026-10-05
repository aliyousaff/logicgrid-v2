"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function BlueprintHero() {
    // Animation variants for drawing lines
    const draw: any = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i: number) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.2, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay: i * 0.2, duration: 0.01 }
            }
        })
    };

    return (
        <section className="h-screen min-h-[800px] w-full relative bg-background flex flex-col items-center justify-center overflow-hidden">

            {/* Background Grid - Static */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

            {/* HERO TEXT CONTENT */}
            <div className="relative z-20 text-center space-y-6 max-w-4xl px-4 mt-[-100px]">
                <Badge variant="outline" className="border-violet-500/50 text-violet-400 bg-violet-500/10 font-mono tracking-widest uppercase">
                    SYSTEM_ID: WEB_CONVERSION_01
                </Badge>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                    Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-500">Interfaces</span>
                    <br /> for Demand Capture
                </h1>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    We engineer low-latency conversion environments designed to process human attention into structured data.
                </p>
            </div>

            {/* THE LIVING BLUEPRINT (SVG OVERLAY) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center opacity-40 md:opacity-100">
                <svg width="100%" height="100%" viewBox="0 0 1200 800" className="w-full h-full max-w-[1200px] max-h-[800px]">

                    {/* 1. CENTRAL NODE (The Interface) */}
                    <g transform="translate(600, 400)">
                        <motion.circle cx="0" cy="0" r="80" stroke="#8b5cf6" strokeWidth="1" fill="none"
                            variants={draw} initial="hidden" animate="visible" custom={1} />
                        <motion.circle cx="0" cy="0" r="120" stroke="#8b5cf6" strokeWidth="1" strokeDasharray="4 4" fill="none"
                            variants={draw} initial="hidden" animate="visible" custom={1.5} />
                    </g>

                    {/* 2. LEFT NODE (Data/Analytics) */}
                    <g transform="translate(200, 400)">
                        <motion.rect x="-60" y="-60" width="120" height="120" stroke="#3b82f6" strokeWidth="1" fill="none"
                            variants={draw} initial="hidden" animate="visible" custom={2} />
                        <foreignObject x="-60" y="-85" width="120" height="20">
                            <div className="text-[10px] text-blue-500 font-mono text-center">ANALYTICS_MODULE</div>
                        </foreignObject>
                    </g>

                    {/* 3. RIGHT NODE (Infrastructure) */}
                    <g transform="translate(1000, 400)">
                        <motion.rect x="-60" y="-60" width="120" height="120" stroke="#10b981" strokeWidth="1" fill="none"
                            variants={draw} initial="hidden" animate="visible" custom={3} />
                        <foreignObject x="-60" y="-85" width="120" height="20">
                            <div className="text-[10px] text-green-500 font-mono text-center">INFRA_CORE</div>
                        </foreignObject>
                    </g>

                    {/* CONNECTOR LINES */}
                    <motion.path d="M 320 400 L 520 400" stroke="#3f3f46" strokeWidth="2"
                        variants={draw} initial="hidden" animate="visible" custom={4} />

                    <motion.path d="M 680 400 L 940 400" stroke="#3f3f46" strokeWidth="2"
                        variants={draw} initial="hidden" animate="visible" custom={4} />

                    {/* DECORATIVE CROSSHAIRS */}
                    <motion.path d="M 600 100 L 600 200" stroke="#27272a" strokeWidth="1"
                        variants={draw} initial="hidden" animate="visible" custom={5} />
                    <motion.path d="M 600 600 L 600 700" stroke="#27272a" strokeWidth="1"
                        variants={draw} initial="hidden" animate="visible" custom={5} />

                </svg>
            </div>

            {/* STATUS INDICATOR (Bottom) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-mono text-green-500 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/20"
            >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                SYSTEM ONLINE
            </motion.div>

        </section>
    );
}
