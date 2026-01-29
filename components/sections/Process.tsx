"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Discovery & Arch",
        desc: "We map your current infrastructure and design the optimized future state.",
        detail: "Audit · Blueprinting · Tech Selection"
    },
    {
        title: "Development",
        desc: "Rapid execution using our pre-built component library and core engines.",
        detail: "Frontend · API Layer · Database"
    },
    {
        title: "Integration",
        desc: "Connecting the new build to your existing tools (CRM, Payment, ERP).",
        detail: "Webhooks · Auth · Data Sync"
    },
    {
        title: "Deployment",
        desc: "Live launch with full testing, SEO checks, and performance validation.",
        detail: "Vercel · CI/CD · Latency Tests"
    },
    {
        title: "Handover",
        desc: "Training your team and handing over the keys. You own the code.",
        detail: "Documentation · Source Code · Support"
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-zinc-950 border-t border-border relative overflow-hidden transition-colors duration-300 min-h-[800px] flex items-center justify-center">
            {/* Custom 3D CSS - Injected locally for the variant */}
            <style jsx global>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .rotate-x-12 { transform: rotateX(12deg) rotateY(-10deg); }
                .group:hover .group-hover\\:rotate-0 { transform: rotateX(0deg) rotateY(0deg); }
            `}</style>

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-background to-background pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-16 md:gap-24">

                {/* Text Content */}
                <div className="md:w-1/2 space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                            Execution Protocol
                        </h2>
                        <p className="text-xl text-muted-foreground font-medium max-w-lg leading-relaxed">
                            A vertical slice of our production methodology. <br />
                            <span className="text-violet-500">Stacked for efficiency.</span>
                        </p>
                    </div>
                    <div className="hidden md:block pl-6 border-l-2 border-violet-500/20">
                        <p className="text-sm text-zinc-500 max-w-xs italic">
                            Hover over the stack to inspect each phase of the deployment lifecycle.
                        </p>
                    </div>
                </div>

                {/* Holographic Stack */}
                <div className="md:w-1/2 relative h-[500px] w-full max-w-[400px] perspective-1000 group">
                    <div className="relative w-full h-full transform-style-3d rotate-x-12 transition-all duration-700 ease-out group-hover:rotate-0">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={cn(
                                    "absolute inset-x-0 h-[100px] rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md shadow-2xl flex items-center px-6 transition-all duration-500 ease-out cursor-pointer hover:bg-violet-900/20 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
                                    "origin-center"
                                )}
                                style={{
                                    top: i * 60, // Tighter stack
                                    zIndex: steps.length - i,
                                    transform: `translateZ(${-i * 30}px) translateY(${i * 5}px)`, // Depth spacing + Slight Y cascade
                                }}
                                whileHover={{
                                    y: -40, // Strong lift
                                    scale: 1.05,
                                    zIndex: 50,
                                    translateZ: "100px", // Pull way forward
                                    backgroundColor: "rgba(9, 9, 11, 0.95)", // Opaque on hover
                                    boxShadow: "0 20px 50px -12px rgba(124, 58, 237, 0.5)" // Glow
                                }}
                            >
                                {/* Glass Shimmer */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-xl pointer-events-none" />

                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center gap-4">
                                        <div className="text-lg font-mono font-bold text-violet-500/80">0{i + 1}</div>
                                        <div>
                                            <h3 className="text-lg font-bold text-foreground tracking-tight">{step.title}</h3>
                                            <p className="text-xs text-muted-foreground line-clamp-1">{step.desc}</p>
                                        </div>
                                    </div>

                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse shadow-[0_0_10px_rgba(124,58,237,1)]" />
                                    </div>
                                </div>

                                {/* Projected Details */}
                                <div className="absolute -bottom-8 left-6 text-[10px] font-mono text-zinc-500 opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                                    &gt; {step.detail}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Fake Shadow */}
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-black/40 blur-3xl rounded-full transform-style-3d translate-z-[-50px]" />
                </div>
            </div>
        </section>
    );
}
