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
        <section id="process" className="py-24 bg-zinc-950 border-t border-border relative overflow-hidden transition-colors duration-300 min-h-[900px] flex items-center justify-center">
            {/* Custom 3D CSS - Injected locally for the variant */}
            <style jsx global>{`
                .perspective-1000 { perspective: 1000px; }
                .transform-style-3d { transform-style: preserve-3d; }
                .rotate-x-12 { transform: rotateX(20deg) rotateY(-15deg); } /* Steeper angle for drama */
                .group:hover .stack-container { transform: rotateX(10deg) rotateY(-5deg); } /* Less rotation on hover */
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
                            <span className="text-violet-500">Stacked for efficiency. Unstacked for clarity.</span>
                        </p>
                    </div>
                    <div className="hidden md:block pl-6 border-l-2 border-violet-500/20">
                        <p className="text-sm text-zinc-500 max-w-xs italic">
                            Hover over any layer to isolate that phase and view deliverables.
                        </p>
                    </div>
                </div>

                {/* Holographic Stack */}
                <div className="md:w-1/2 relative h-[600px] w-full max-w-[450px] perspective-1000 group">
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
                                        y: i * 80, // Spread out vertically
                                        z: -i * 30, // Stack depth
                                        rotateX: 0,
                                        transition: {
                                            delay: i * 0.15,
                                            type: "spring",
                                            stiffness: 50
                                        }
                                    })
                                }}
                                className={cn(
                                    "group/card absolute inset-x-0 h-[110px] rounded-xl border border-white/10 bg-zinc-900/60 backdrop-blur-md shadow-2xl flex items-center px-8 transition-all duration-500 ease-out cursor-pointer",
                                    "hover:bg-zinc-900 hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(124,58,237,0.4)]"
                                )}
                                style={{
                                    zIndex: steps.length - i,
                                    transformStyle: 'preserve-3d'
                                }}
                                whileHover={{
                                    y: i * 80 - 40, // Lift up significantly relative to its position
                                    scale: 1.1,
                                    zIndex: 50,
                                    translateZ: "80px", // Pull forward towards user
                                }}
                            >
                                {/* Glass Shimmer Animation */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-transparent rounded-xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-center justify-between w-full transform-style-3d">
                                    <div className="flex items-center gap-6 transform-style-3d translate-z-[20px]">
                                        <div className="text-xl font-mono font-bold text-violet-500/80">0{i + 1}</div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground tracking-tight">{step.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-1">{step.desc}</p>
                                        </div>
                                    </div>

                                    <div className="opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                        <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_15px_rgba(124,58,237,1)]" />
                                    </div>
                                </div>

                                {/* Projected Details - "Shadow Projection" Effect */}
                                <div className="absolute -bottom-10 left-8 px-4 py-1.5 rounded-full bg-black/80 border border-violet-500/30 text-[11px] font-mono text-violet-300 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0 shadow-lg pointer-events-none">
                                    &gt; {step.detail}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Floor Shadow */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-950/30 blur-[60px] rounded-full transform rotate-x-60 pointer-events-none"
                    />
                </div>
            </div>
        </section>
    );
}
