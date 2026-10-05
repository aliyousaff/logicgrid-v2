"use client";

import { Badge } from "@/components/ui/badge";
import { Monitor, Cpu, Bot, ArrowUpRight, ArrowRight, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServicesPreviewCard } from "@/components/services/ServicesPreviewCard";
import { motion } from "framer-motion";

export function Nodes() {
    return (
        <section id="nodes" className="py-24 bg-background relative overflow-hidden">
            {/* Ambient glow - Dark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* --- SCHEMATIC GATE (Opening Doors) --- */}
            <div className="absolute inset-0 z-30 pointer-events-none" aria-hidden="true">
                {/* Left Door */}
                <motion.div
                    initial={{ x: "0%" }}
                    whileInView={{ x: "-100%" }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // Custom cubic bezier for "heavy door" feel
                    viewport={{ once: true, amount: 0.4 }} // Triggers when section is 20% locally visible
                    className="absolute top-0 left-0 w-1/2 h-full bg-background border-r border-violet-500/30 flex items-center justify-end pr-8"
                >
                    <div className="w-2 h-16 bg-violet-500/20 rounded-full" />
                </motion.div>

                {/* Right Door */}
                <motion.div
                    initial={{ x: "0%" }}
                    whileInView={{ x: "100%" }}
                    transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="absolute top-0 right-0 w-1/2 h-full bg-background border-l border-violet-500/30 flex items-center justify-start pl-8"
                >
                    <div className="w-2 h-16 bg-violet-500/20 rounded-full" />
                </motion.div>

                {/* Center Lock Icon (Fades out) */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1.0, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-background border border-violet-500/50 p-4 rounded-full text-violet-500"
                >
                    <LockKeyhole className="w-6 h-6" />
                </motion.div>
            </div>


            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-start md:items-center text-left md:text-center mb-24 space-y-6">
                    <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 rounded px-3 py-1 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(139,92,246,0.2)]">CORE_NODES</Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground">System Architecture</h2>
                    <p className="text-muted-foreground max-w-[700px] text-xl font-normal leading-relaxed">
                        Three pillars of modern digital operations.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid md:grid-cols-2 gap-8 h-auto md:h-[640px]">

                    {/* Main Large Tile (Conversion Web Systems) */}
                    <div className="group relative p-10 md:p-14 rounded-3xl bg-card border border-border hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default">

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 bg-muted border border-border rounded-2xl flex items-center justify-center text-violet-600 dark:text-violet-500 shadow-lg">
                                    <Monitor className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors tracking-tight">Conversion Web Systems</h3>

                            {/* Outcome Led */}
                            <p className="text-violet-600 dark:text-violet-400 font-medium text-lg mb-6">Websites that bring customers — not just traffic.</p>

                            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm font-mono border-l-2 border-border pl-4">
                                Responsive business websites, SEO foundations, editable content and enquiry flows.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 md:mt-0">
                            <div className="w-full h-px bg-border mb-6" />
                            <Link href="/systems/web" className="flex items-center text-sm font-bold text-muted-foreground group-hover:translate-x-1 transition-transform tracking-wide uppercase">
                                Explore Web Systems <ArrowUpRight className="ml-2 w-4 h-4 text-violet-600 dark:text-violet-500 opacity-50" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Automation Tile */}
                        <div className="group relative p-10 rounded-3xl bg-card border border-border hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 flex-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-muted border border-border rounded-xl flex items-center justify-center text-muted-foreground">
                                    <Cpu className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors tracking-tight">Process Automation</h3>

                            {/* Outcome Led */}
                            <p className="text-violet-600 dark:text-violet-400 text-sm mb-4">Remove manual work and stop losing leads to slow follow-up.</p>

                            <p className="text-muted-foreground text-xs font-mono leading-relaxed mb-6 border-l-2 border-border pl-4">
                                CRM setup, email pipelines, payment routing, and operations workflows.
                            </p>
                        </div>

                        {/* AI Tile */}
                        <div className="group relative p-10 rounded-3xl bg-card border border-border hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 flex-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-muted border border-border rounded-xl flex items-center justify-center text-muted-foreground">
                                    <Bot className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors tracking-tight">AI Integration</h3>

                            {/* Outcome Led */}
                            <p className="text-violet-600 dark:text-violet-400 text-sm mb-4">Turn your business knowledge into an internal assistant.</p>

                            <p className="text-muted-foreground text-xs font-mono leading-relaxed mb-6 border-l-2 border-border pl-4">
                                RAG systems, support automation, and internal search engines.
                            </p>
                        </div>
                    </div>

                </div>

                {/* See All Services Button with Preview */}
                <div className="flex justify-center mt-20 relative group/btn">
                    <Link href="/services" className="relative z-10">
                        <Button className="relative overflow-hidden bg-violet-600 border border-violet-500 text-white hover:bg-white hover:text-black hover:border-white h-14 px-8 text-lg font-medium shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all rounded-full flex items-center gap-3 group">
                            <span className="relative z-10 flex items-center gap-3">See All Services <ArrowRight className="w-4 h-4" /></span>
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        </Button>
                    </Link>

                    {/* Popup Card on Hover */}
                    <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 opacity-0 group-hover/btn:opacity-100 pointer-events-auto transition-opacity duration-300 z-50">
                        <ServicesPreviewCard />
                    </div>
                </div>
            </div>
        </section>
    );
}
