"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ServicesPreviewCard } from "@/components/services/ServicesPreviewCard";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";



const RollingText = ({ isSolution, problem, solution, delay = 0, className, isMobile }: { isSolution: boolean, problem: string, solution: string, delay?: number, className?: string, isMobile: boolean }) => (
    <motion.div
        layout={!isMobile}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn("relative inline-flex h-[1.1em] overflow-hidden align-bottom", className)}
    >
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={isSolution ? "sol" : "prob"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
                className={cn("block leading-[1.1] min-w-max", isSolution ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 font-bold" : "text-muted-foreground")}
            >
                {isSolution ? solution : problem}
            </motion.div>
        </AnimatePresence>
    </motion.div>
);

export function Hero() {
    const [isSolution, setIsSolution] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const interval = setInterval(() => {
            setIsSolution(prev => !prev);
        }, 3000); // 3s cycle

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center pt-8 pb-32 md:pt-12 md:pb-48 overflow-visible bg-background z-20">
            {/* Background w/ Gradient Fog & Grid */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Blunt Clarity Copy */}
                    <div className="text-left space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge variant="outline" className="border-violet-500/20 bg-violet-500/10 text-violet-600 dark:text-violet-400 px-3 py-1 text-xs tracking-wider mb-4 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                                <span className="mr-2 h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-violet-500 animate-pulse"></span>
                                SYSTEM_STATUS: OPERATIONAL
                            </Badge>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
                        >
                            We <RollingText isSolution={isSolution} problem="Fix" solution="Build" isMobile={isMobile} /> <br />
                            <RollingText isSolution={isSolution} problem="Slow" solution="Fast" isMobile={isMobile} /> <RollingText isSolution={isSolution} problem="Websites," solution="Engines," isMobile={isMobile} /> <br />
                            <RollingText isSolution={isSolution} problem="Broken" solution="Automated" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" isMobile={isMobile} /> <RollingText isSolution={isSolution} problem="Lead Flow," solution="Pipelines," className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" isMobile={isMobile} /> <br />
                            and <br />
                            <RollingText isSolution={isSolution} problem="Manual" solution="Autonomous" isMobile={isMobile} /> <RollingText isSolution={isSolution} problem="Operations." solution="Ops." isMobile={isMobile} />
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <p className="max-w-[600px] text-muted-foreground md:text-xl font-medium leading-relaxed">
                                LogicGrid Ops <span className="relative inline-block px-1">
                                    <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent font-bold">builds fast websites</span>
                                    <span className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-[linear-gradient(90deg,transparent_40%,#d946ef_48%,#ffffff_50%,#d946ef_52%,transparent_60%)] bg-[length:250%_100%] animate-electric mix-blend-screen pointer-events-none block rounded-full"></span>
                                </span> that convert — and automation that removes repetitive work — so your business runs clean and predictable.
                            </p>

                            <ul className="space-y-2">
                                {[
                                    "Get more qualified leads from your website",
                                    "Automate follow-ups, routing, and internal tasks",
                                    "Build a system you fully own and can scale"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center">
                                            <Check className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-4 pt-4"
                        >
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <Button className="relative overflow-hidden bg-violet-600 text-white hover:bg-violet-500 h-12 px-8 text-base shadow-[0_0_20px_rgba(124,58,237,0.3)] font-semibold transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] group" asChild>
                                    <a href="/#contact">
                                        <span className="relative z-10 flex items-center justify-center">Start a Build <ArrowRight className="ml-2 h-4 w-4" /></span>
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                                    </a>
                                </Button>

                                <div className="relative group/svc w-full sm:w-auto">
                                    <Button className="w-full sm:w-auto bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700 h-12 px-8 text-base font-medium border border-zinc-200 dark:border-zinc-700" asChild>
                                        <Link href="/services">See Services</Link>
                                    </Button>
                                    {/* HOver Preview */}
                                    <div className="absolute top-full left-0 pt-4 md:top-1/2 md:-translate-y-1/2 md:left-full md:pt-0 md:pl-4 opacity-0 group-hover/svc:opacity-100 pointer-events-auto transition-opacity duration-300 z-50">
                                        <ServicesPreviewCard />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Console with Credibility Strip */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur-xl opacity-20"></div>
                        <div className="relative rounded-2xl border border-border bg-background/80 backdrop-blur-xl shadow-2xl overflow-hidden">
                            {/* Window Header */}
                            <div className="h-10 border-b border-border bg-muted/50 flex items-center px-4 justify-between">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                                    <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                                </div>
                                <div className="text-[10px] font-mono text-muted-foreground font-medium">logic_core_v2.1</div>
                            </div>

                            {/* Dashboard Content - Credibility Claims */}
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-card border border-border hover:border-violet-500/30 transition-colors">
                                        <div className="text-[10px] uppercase text-muted-foreground font-bold mb-2">Build Standard</div>
                                        <div className="text-foreground font-semibold text-sm leading-snug">Conversion-first builds</div>
                                        <div className="text-[10px] text-muted-foreground pt-1 mt-1 border-t border-border">Generates inquiries</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card border border-border hover:border-violet-500/30 transition-colors">
                                        <div className="text-[10px] uppercase text-muted-foreground font-bold mb-2">Performance</div>
                                        <div className="text-foreground font-semibold text-sm leading-snug">Performance-grade delivery</div>
                                        <div className="text-[10px] text-muted-foreground pt-1 mt-1 border-t border-border">Fast & SEO-ready</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card border border-border hover:border-violet-500/30 transition-colors">
                                        <div className="text-[10px] uppercase text-muted-foreground font-bold mb-2">Stack</div>
                                        <div className="text-foreground font-semibold text-sm leading-snug">Automation-ready foundation</div>
                                        <div className="text-[10px] text-muted-foreground pt-1 mt-1 border-t border-border">Ops workflows</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-card border border-border hover:border-violet-500/30 transition-colors">
                                        <div className="text-[10px] uppercase text-muted-foreground font-bold mb-2">Contract</div>
                                        <div className="text-foreground font-semibold text-sm leading-snug">Clean handover</div>
                                        <div className="text-[10px] text-muted-foreground pt-1 mt-1 border-t border-border">Full ownership</div>
                                    </div>
                                </div>

                                {/* Terminal Output - Preserved for "Pipeline" vibe but cleaned up */}
                                <div className="rounded-xl bg-zinc-950 p-4 font-mono text-xs shadow-inner border border-zinc-900">
                                    <div className="flex items-center justify-between text-zinc-500 mb-2 border-b border-zinc-900 pb-2">
                                        <span>PIPELINE STATUS</span>
                                        <span className="text-emerald-500">ACTIVE</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-zinc-400">
                                            <span className="text-violet-500">●</span>
                                            <span>Traffic Acquisition</span>
                                            <span className="text-zinc-600 ml-2">// Converting visitors</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-zinc-400">
                                            <span className="text-violet-500">●</span>
                                            <span>Lead Capture</span>
                                            <span className="text-zinc-600 ml-2">// Routing to CRM</span>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-zinc-900 text-zinc-500">
                                            &gt; Syncing database state... SUCCESS <br />
                                            <span className="animate-pulse">&gt; Ready for input...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div >
            </div >
        </section >
    );
}
