"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Activity, CheckCircle2, ChevronRight, Terminal } from "lucide-react";
import { useState } from "react";

const steps = [
    {
        id: "01",
        title: "Discovery & Arch",
        desc: "We map your current infrastructure and design the optimized future state.",
        terminal: "> GENERATING_BLUEPRINT... DONE"
    },
    {
        id: "02",
        title: "Development",
        desc: "Rapid execution using our pre-built component library and core engines.",
        terminal: "> COMPILING_CORE_MODULES... DONE"
    },
    {
        id: "03",
        title: "Integration",
        desc: "Connecting the new build to your existing tools (CRM, Payment, ERP).",
        terminal: "> SYNCING_EXTERNAL_APIS... 200 OK"
    },
    {
        id: "04",
        title: "Deployment",
        desc: "Live launch with full testing, SEO checks, and performance validation.",
        terminal: "> INITIATING_LAUNCH_SEQUENCE... SUCCESS"
    },
    {
        id: "05",
        title: "Handover",
        desc: "Training your team and handing over the keys. You own the code.",
        terminal: "> TRANSFERRING_ROOT_ACCESS... COMPLETE"
    }
];

export function Process() {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section id="process" className="py-24 bg-background border-t border-border relative overflow-hidden transition-colors duration-300">
            {/* Circuit Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center mb-24 gap-6">
                    <div className="space-y-6 flex flex-col items-center">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">Execution Stream</h2>
                        <div className="flex items-center gap-2 text-violet-600 dark:text-violet-500">
                            <Activity className="w-5 h-5 animate-pulse" />
                            <p className="text-xl font-medium">Live System Pipeline</p>
                        </div>
                    </div>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Main pipeline line */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-zinc-800 md:left-[50%] md:-translate-x-1/2" />

                    {/* Active pulse line */}
                    <motion.div
                        className="absolute left-[27px] top-0 w-[2px] bg-gradient-to-b from-violet-600 via-fuchsia-500 to-violet-600 md:left-[50%] md:-translate-x-1/2 z-0"
                        initial={{ height: "0%" }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 2, ease: "linear" }}
                    />

                    <div className="space-y-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className={cn(
                                    "relative flex flex-col md:flex-row items-start md:items-center gap-8 group"
                                )}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.15 }}
                                onMouseEnter={() => setActiveStep(i)}
                                onMouseLeave={() => setActiveStep(null)}
                            >
                                {/* Center Node (The "Connector") */}
                                <div className="absolute left-0 md:left-[50%] md:-translate-x-1/2 w-14 h-14 rounded-full bg-background border-4 border-zinc-200 dark:border-zinc-800 flex items-center justify-center z-10 group-hover:border-violet-500 transition-colors duration-300 shadow-[0_0_0_4px_rgba(255,255,255,1)] dark:shadow-[0_0_0_4px_rgba(9,9,11,1)]">
                                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${activeStep === i ? "bg-violet-500 scale-150 shadow-[0_0_15px_rgba(124,58,237,1)]" : "bg-zinc-400 dark:bg-zinc-600"}`} />
                                </div>

                                {/* Content Card (Alternating) */}
                                <div className={cn(
                                    "ml-20 md:ml-0 md:w-1/2 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 group-hover:bg-card group-hover:border-violet-500/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.1)]",
                                    i % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12 md:order-last"
                                )}>
                                    <div className={cn("flex items-center gap-3 mb-2", i % 2 === 0 ? "md:justify-end" : "md:justify-start")}>
                                        <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 px-2 py-0.5 rounded bg-violet-500/10">STEP {step.id}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-violet-500 transition-colors">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                                </div>

                                {/* Terminal Output (The "Action") */}
                                <div className={cn(
                                    "ml-20 md:ml-0 md:w-1/2 hidden md:flex items-center text-xs font-mono text-zinc-500 min-h-[56px]",
                                    i % 2 === 0 ? "md:justify-start pl-12" : "md:justify-end pr-12 md:text-right md:order-first"
                                )}>
                                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 transition-opacity duration-300 ${activeStep === i ? "opacity-100" : "opacity-0"}`}>
                                        <Terminal className="w-3 h-3 text-green-500" />
                                        <span className="text-green-400 typing-effect">
                                            {step.terminal}
                                        </span>
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
