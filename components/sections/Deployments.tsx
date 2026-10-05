"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Bot, Quote, LayoutDashboard, Workflow, ArrowRight, Check, ScanLine } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Case Studies Data
const cases = [
    {
        id: "01",
        title: "Master the Screen",
        subtitle: "Before It Masters You",
        desc: "A production-ready digital product system combining content delivery, checkout flow, analytics instrumentation, and a RAG-based conversational layer trained on proprietary material.",
        specs: "Designed to handle user education, objection resolution, and continuous interaction without manual intervention.",
        modules: ["RAG System", "Conversion Flow", "Analytics", "Payments", "Automation"],
        icon: Bot,
        gradient: "from-violet-500/80 to-indigo-500/80",
        tech_font: "font-mono"
    },
    {
        id: "02",
        title: "Sharjah Quotes",
        subtitle: "High-Intent Acquisition",
        desc: "A high-intent quote acquisition system built to capture, route, and structure inbound inquiries with minimal friction.",
        specs: "Optimized for speed, clarity, and clean operational handoff in demand-driven environments.",
        modules: ["Lead Capture", "Routing Logic", "Event Tracking", "Notifications"],
        icon: Quote,
        gradient: "from-amber-500/80 to-orange-500/80",
        tech_font: "font-mono"
    },
    {
        id: "03",
        title: "Bookkeeping Ops",
        subtitle: "Centralized Dashboard",
        desc: "A centralized operations dashboard built to manage intake, workflows, and reporting from a single interface.",
        specs: "Designed to support structured service delivery and scalable back-office operations.",
        modules: ["Dashboards", "Workflow Automation", "Client Ops", "Data Structuring"],
        icon: LayoutDashboard,
        gradient: "from-emerald-500/80 to-cyan-500/80",
        tech_font: "font-mono"
    },
    {
        id: "04",
        title: "Auto Acquisition",
        subtitle: "Modular Pipeline",
        desc: "A modular acquisition system designed to capture inbound demand, qualify leads, and route them into downstream workflows without manual intervention.",
        specs: "Built to integrate traffic sources, conversion touchpoints, and follow-up logic into a single, automation-ready pipeline.",
        modules: ["Traffic Intake", "Lead Qualification", "Routing Logic", "CRM Sync"],
        icon: Workflow,
        gradient: "from-blue-500/80 to-sky-500/80",
        tech_font: "font-mono"
    }
];

export function Deployments() {
    return (
        <section id="deployments" className="py-24 bg-background border-t border-border overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 tracking-wider">
                        DEPLOYMENT_LOG
                    </Badge>
                    <div className="space-y-4 max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            Production Deployments
                        </h2>
                        <p className="text-muted-foreground text-lg md:text-xl">
                            Client-grade systems designed, built, and deployed for live operational environments.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, i) => (
                        <DeploymentCard key={i} item={item} />
                    ))}
                </div>
                <Link href="/work/younis-b-azeem" className="block mt-8 rounded-2xl border border-border bg-card p-7 md:p-10 hover:border-violet-500/50 transition-colors">
                    <p className="text-sm text-violet-600 dark:text-violet-400 mb-3">Website case study</p>
                    <h3 className="text-2xl font-semibold mb-3">Younis B. Azeem</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-3xl">An editable author website with published work, portraits, a contact form and newsletter signup. See the live site and the features delivered.</p>
                    <span className="inline-flex items-center mt-5 font-medium text-violet-600 dark:text-violet-400">Read the case study <ArrowRight className="ml-2 w-4 h-4" /></span>
                </Link>
            </div>
        </section>
    );
}

function DeploymentCard({ item }: { item: typeof cases[0] }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative h-[500px] w-full rounded-2xl overflow-hidden cursor-crosshair border border-border bg-background group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* --- STATE 1: BLUEPRINT (Wireframe) --- */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 p-8 flex flex-col justify-between select-none">

                {/* Header (Blueprint) */}
                <div className="space-y-4">
                    <div className="flex justify-between items-start opacity-50">
                        <span className="font-mono text-[10px] tracking-widest uppercase border border-foreground/20 px-2 py-0.5 rounded text-muted-foreground">
                            ID: {item.id}
                        </span>
                        <ScanLine className="w-4 h-4 text-muted-foreground animate-pulse" />
                    </div>

                    <div className="space-y-1 mt-4 opacity-60 grayscale">
                        <div className="w-10 h-10 rounded-none border border-foreground/30 flex items-center justify-center mb-4">
                            <item.icon className="w-5 h-5 text-foreground/50 stroke-[1.5]" />
                        </div>
                        <h3 className="font-mono text-lg font-bold text-foreground/70 uppercase tracking-tighter decoration-1 underline decoration-dotted underline-offset-4">
                            {item.title}
                        </h3>
                        <p className="font-mono text-xs text-muted-foreground/80 leading-relaxed max-w-[90%] mt-2">
                            {item.desc}
                        </p>
                    </div>
                </div>

                {/* Footer (Blueprint) */}
                <div className="opacity-40 space-y-4">
                    <div className="h-px w-full bg-dashed bg-gradient-to-r from-transparent via-foreground/30 to-transparent my-4" />
                    <div className="grid grid-cols-2 gap-2">
                        {item.modules.slice(0, 4).map((mod, k) => (
                            <div key={k} className="flex items-center gap-2 font-mono text-[9px] text-muted-foreground">
                                <span className="w-1 h-1 bg-foreground/50 rounded-none" />
                                {mod.toUpperCase()}
                            </div>
                        ))}
                    </div>
                    <div className="font-mono text-[9px] text-muted-foreground text-center pt-2 border-t border-dashed border-foreground/10">
                        [AWAITING_RENDER]
                    </div>
                </div>
            </div>


            {/* --- STATE 2: RENDERED (X-Ray Reveal) --- */}
            <motion.div
                className="absolute inset-0 z-10 bg-card dark:bg-zinc-900 border border-violet-500/20"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: isHovered ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-5 dark:opacity-10`} />
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-violet-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="absolute inset-0 p-8 flex flex-col justify-between h-full">
                    {/* Header (Rendered) */}
                    <div>
                        <div className="flex items-center justify-between mb-8">
                            <Badge variant="secondary" className="bg-foreground/5 text-foreground/70 backdrop-blur-sm border-0 font-mono text-[10px]">
                                PROD_V{item.id}.0
                            </Badge>
                            <div className={`w-2 h-2 rounded-full ${isHovered ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-zinc-500'}`} />
                        </div>

                        <div className="mb-6">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg mb-6 text-white`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground leading-tight tracking-tight mb-2">
                                {item.title}
                            </h3>
                            <p className="text-violet-600 dark:text-violet-400 font-medium text-sm">
                                {item.subtitle}
                            </p>
                        </div>

                        <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.specs}
                        </p>
                    </div>

                    {/* Footer (Rendered) */}
                    <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {item.modules.slice(0, 3).map((mod, k) => (
                                <span key={k} className="px-2 py-1 rounded-md bg-foreground/5 border border-foreground/10 text-[10px] font-medium text-foreground/80">
                                    {mod}
                                </span>
                            ))}
                            {item.modules.length > 3 && (
                                <span className="px-2 py-1 rounded-md bg-transparent text-[10px] font-medium text-muted-foreground">
                                    +{item.modules.length - 3}
                                </span>
                            )}
                        </div>

                        <div className="flex items-center text-sm font-bold text-foreground group/link">
                            Case Details
                            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                        </div>
                    </div>
                </div>

                {/* Scanner Bar (The "Laser") */}
                <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] z-20 h-full">
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-20 h-[500px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl" />
                </div>
            </motion.div>
        </div>
    );
}
