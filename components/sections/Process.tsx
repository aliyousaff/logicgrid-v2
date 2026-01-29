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
        <section id="process" className="py-24 bg-zinc-950 border-t border-border relative overflow-hidden transition-colors duration-300 min-h-[800px] flex items-center justify-center perspective-1000">
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
                <div className="md:w-1/2 relative h-[500px] w-full max-w-[400px] perspective-[1200px] group">
                    <div className="relative w-full h-full transform-style-3d rotate-x-12 rotate-y-[-10deg] group-hover:rotate-x-0 group-hover:rotate-y-0 transition-all duration-700 ease-out">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={cn(
                                    "absolute inset-x-0 h-[100px] rounded-xl border border-white/10 bg-zinc-900/40 backdrop-blur-md shadow-2xl flex items-center px-6 transition-all duration-500 ease-out cursor-pointer hover:bg-violet-900/20 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(124,58,237,0.3)]",
                                    "origin-center"
                                )}
                                style={{
                                    top: i * 70, // Stacked offset
                                    zIndex: steps.length - i,
                                    transform: `translateZ(${-i * 20}px)`, // Depth spacing
                                }}
                                whileHover={{
                                    y: -30, // Lift up
                                    scale: 1.05,
                                    zIndex: 50,
                                    translateZ: "50px", // Pull forward
                                    backgroundColor: "rgba(9, 9, 11, 0.95)" // Make opaque
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

                                {/* Projected Details (Visible on specific hover via generic css or just imply it) */}
                                <div className="absolute -bottom-8 left-6 text-[10px] font-mono text-zinc-500 opacity-0 hover:opacity-100 transition-opacity whitespace-nowrap">
                                    &gt; {step.detail}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Fake Shadow */}
                    <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-3/4 h-20 bg-black/40 blur-3xl rounded-full" />
                </div>
            </div>
        </section>
    );
}
