"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Discovery & Arch",
        desc: "We prioritize understanding your ecosystem before writing code. We map your current infrastructure and design the optimized future state.",
        detail: "Audit · Blueprinting · Tech Selection"
    },
    {
        title: "Development",
        desc: "Rapid execution using our pre-built component library and core engines to reduce time-to-market by 40%.",
        detail: "Frontend · API Layer · Database"
    },
    {
        title: "Integration",
        desc: "We don't build in isolation. We connect the new build deeply into your existing tools (CRM, Payment, ERP) for seamless data flow.",
        detail: "Webhooks · Auth · Data Sync"
    },
    {
        title: "Deployment",
        desc: "Live launch is just the beginning. We perform full load testing, SEO checks, and performance validation before flipping the switch.",
        detail: "Vercel · CI/CD · Latency Tests"
    },
    {
        title: "Handover",
        desc: "You aren't locked in. We train your internal team and hand over the keys, documentation, and full source code.",
        detail: "Documentation · Source Code · Support"
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-zinc-950 border-t border-border relative overflow-hidden transition-colors duration-300 min-h-[900px] flex items-center justify-center">
            {/* Custom 3D CSS - Injected locally for the variant */}
            <style jsx global>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .rotate-x-12 { transform: rotateX(20deg) rotateY(-15deg); }
            `}</style>

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-background to-background pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-32">

                {/* Text Content */}
                <div className="md:w-1/2 space-y-10">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                            Execution Protocol
                        </h2>
                        <p className="text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                            A vertical slice of our production methodology. <br />
                            <span className="text-violet-500">Interact to uncage the details.</span>
                        </p>
                    </div>
                </div>

                {/* Holographic Stack */}
                <div className="md:w-1/2 relative h-[600px] w-full max-w-[500px] perspective-1000 group">
                    <motion.div
                        className="stack-container relative w-full h-full transform-style-3d rotate-x-12 transition-all duration-700 ease-out"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "-100px" }}
                    >
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                custom={i}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 0,
                                        z: -100,
                                        rotateX: 0
                                    },
                                    visible: (i) => ({
                                        opacity: 1,
                                        y: i * 90, // Increased spacing to prevent overlap blocking
                                        z: -i * 40,
                                        rotateX: 0,
                                        transition: {
                                            delay: i * 0.1,
                                            type: "spring",
                                            stiffness: 60
                                        }
                                    })
                                }}
                                className={cn(
                                    "group/card absolute inset-x-0 h-[120px] rounded-xl border border-white/10 bg-zinc-900/80 backdrop-blur-md shadow-2xl flex flex-col justify-center px-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer overflow-hidden",
                                    "hover:bg-zinc-950 hover:border-violet-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.5)]"
                                )}
                                style={{
                                    zIndex: steps.length - i, // Default stack order
                                    transformStyle: 'preserve-3d',
                                    height: '110px', // Explicit base height
                                }}
                                whileHover={{
                                    y: i * 90 - 60, // Lift significantly
                                    height: '240px', // EXPAND CARD HEIGHT
                                    scale: 1.15,
                                    zIndex: 100, // FORCE TO FRONT
                                    translateZ: "100px", // Pull forward
                                }}
                            >
                                {/* Active State Background Glow */}
                                <div className="absolute inset-0 bg-violet-900/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="flex items-start gap-6 transform-style-3d translate-z-[20px] pt-4">
                                    <div className="text-2xl font-mono font-bold text-violet-500/50 group-hover/card:text-violet-400 transition-colors">0{i + 1}</div>
                                    <div className="flex-1 space-y-4">

                                        {/* Header Row */}
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-foreground tracking-tight group-hover/card:text-violet-100 transition-colors">{step.title}</h3>
                                            <div className="h-2 w-2 rounded-full bg-violet-500/20 group-hover/card:bg-violet-400 group-hover/card:shadow-[0_0_10px_rgba(124,58,237,1)] transition-all" />
                                        </div>

                                        {/* Hidden Description - REVEALS ON HOVER */}
                                        <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 delay-100 flex flex-col gap-4">
                                            <p className="text-sm text-zinc-300 leading-relaxed">
                                                {step.desc}
                                            </p>
                                            <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-violet-300">
                                                <span className="uppercase tracking-widest text-violet-500/50">Details:</span>
                                                {step.detail}
                                            </div>
                                        </div>

                                        {/* Collapsed State Subtitle (Fades out on hover) */}
                                        <p className="text-sm text-muted-foreground line-clamp-1 group-hover/card:hidden absolute top-[50px]">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Floor Reflection */}
                    <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80%] h-40 bg-violet-900/20 blur-[80px] rounded-full pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
