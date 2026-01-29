"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Database, Bot, Cloud, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

export function ServicesPreviewCard() {
    // Simplified view of the services 
    const categories = [
        { icon: Monitor, label: "Web Systems", count: 18 },
        { icon: Cpu, label: "Automation", count: 15 },
        { icon: Bot, label: "AI Integration", count: 13 },
        { icon: Database, label: "Data Tools", count: 14 },
        { icon: Cloud, label: "Cloud Infra", count: 11 },
        { icon: LinkIcon, label: "API Systems", count: 9 },
    ];

    return (
        <Link href="/services" className="block cursor-pointer">
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2 }}
                className="w-[400px] h-auto bg-background/95 dark:bg-black/90 backdrop-blur-xl border border-violet-500/30 rounded-2xl p-6 shadow-[0_0_60px_rgba(124,58,237,0.4)] overflow-hidden hover:border-violet-500/50 transition-colors"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6 border-b border-border pb-4">
                    <div>
                        <div className="text-foreground font-bold text-lg">Capability Map</div>
                        <div className="text-muted-foreground text-xs">Live Database • 111+ Services</div>
                    </div>
                    <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                        <div className="w-2 h-2 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                    </div>
                </div>

                {/* Grid Preview */}
                <div className="grid grid-cols-2 gap-3">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg bg-muted/50 border border-border">
                            <cat.icon className="w-4 h-4 text-violet-600 dark:text-violet-500" />
                            <div>
                                <div className="text-foreground/80 text-xs font-medium">{cat.label}</div>
                                <div className="text-muted-foreground text-[10px]">{cat.count}+ modules</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-border flex justify-between items-center text-[10px] text-muted-foreground font-mono">
                    <span>/services</span>
                    <span>Click to explore full index &rarr;</span>
                </div>
            </motion.div>
        </Link>
    );
}
