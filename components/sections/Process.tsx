"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScanLine, Crosshair } from "lucide-react";

const steps = [
    {
        title: "DISCOVERY_ARCH",
        desc: "We map your current infrastructure and design the optimized future state."
    },
    {
        title: "DEVELOPMENT_CORE",
        desc: "Rapid execution using our pre-built component library and core engines."
    },
    {
        title: "SYSTEM_INTEGRATION",
        desc: "Connecting the new build to your existing tools (CRM, Payment, ERP)."
    },
    {
        title: "DEPLOYMENT_LIVE",
        desc: "Live launch with full testing, SEO checks, and performance validation."
    },
    {
        title: "HANDOVER_OWNERSHIP",
        desc: "Training your team and handing over the keys. You own the code."
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-black border-t border-zinc-900 relative overflow-hidden">
            {/* Grid Blueprint Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="mb-20 text-center space-y-4">
                    <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-white uppercase">
                        &lt;Execution_Protocol /&gt;
                    </h2>
                    <p className="text-zinc-500 font-mono text-sm max-w-xl mx-auto">
                        SYSTEM_STATUS: <span className="text-green-500">OPERATIONAL</span> // RENDER_MODE: BLUEPRINT
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-4">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            className="relative group h-[400px] border border-zinc-800 bg-black/50 overflow-hidden cursor-crosshair"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {/* Static Wireframe State */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-50 group-hover:opacity-10 dark:opacity-50 transition-opacity duration-500">
                                <div className="space-y-2">
                                    <div className="text-xs font-mono text-zinc-600">0{i + 1} // INIT</div>
                                    <h3 className="text-lg font-bold text-zinc-400 font-mono tracking-tighter">{step.title}</h3>
                                </div>
                                <div className="w-full h-[1px] bg-zinc-800" />
                                <div className="w-8 h-8 border border-zinc-800 rounded-full flex items-center justify-center">
                                    <Crosshair className="w-4 h-4 text-zinc-700" />
                                </div>
                            </div>

                            {/* Scanning Effect Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-violet-950/90 flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                {/* Scanner Line */}
                                <motion.div
                                    className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] z-20"
                                    initial={{ top: "-10%" }}
                                    whileHover={{ top: "110%" }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                />

                                <div className="space-y-4 relative z-10">
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs font-mono text-cyan-400">0{i + 1} // ACTIVE</div>
                                        <ScanLine className="w-4 h-4 text-cyan-400 animate-pulse" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white font-mono tracking-tight">{step.title}</h3>
                                    <p className="text-sm text-zinc-300 font-mono leading-relaxed border-l-2 border-cyan-500/50 pl-3">
                                        {step.desc}
                                    </p>
                                </div>

                                <div className="space-y-2 relative z-10">
                                    <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                                        <span>RENDER_TIME</span>
                                        <span>0.00ms</span>
                                    </div>
                                    <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                                        <div className="h-full bg-cyan-500 w-[80%] animate-pulse" />
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
