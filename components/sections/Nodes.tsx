import { Badge } from "@/components/ui/badge";
import { Monitor, Cpu, Bot, ArrowUpRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServicesPreviewCard } from "@/components/services/ServicesPreviewCard";

export function Nodes() {
    return (
        <section id="nodes" className="py-24 bg-black relative overflow-hidden">
            {/* Ambient glow - Dark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-start md:items-center text-left md:text-center mb-24 space-y-6">
                    <Badge variant="outline" className="border-violet-500/20 text-violet-400 bg-violet-500/10 rounded px-3 py-1 text-xs font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(139,92,246,0.2)]">CORE_NODES</Badge>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">System Architecture</h2>
                    <p className="text-zinc-400 max-w-[700px] text-xl font-normal leading-relaxed">
                        Three pillars of modern digital operations.
                    </p>
                </div>

                {/* Bento Grid layout */}
                <div className="grid md:grid-cols-2 gap-8 h-auto md:h-[640px]">

                    {/* Main Large Tile (Conversion Web Systems) */}
                    <div className="group relative p-10 md:p-14 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 flex flex-col justify-between overflow-hidden">

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-violet-500 shadow-lg">
                                    <Monitor className="w-8 h-8" />
                                </div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors tracking-tight">Conversion Web Systems</h3>

                            {/* Outcome Led */}
                            <p className="text-violet-400 font-medium text-lg mb-6">Websites that bring customers — not just traffic.</p>

                            <p className="text-zinc-500 leading-relaxed mb-8 max-w-lg text-sm font-mono border-l-2 border-zinc-800 pl-4">
                                Next.js 14 architecture, SEO optimized structure, and custom conversion flows.
                            </p>
                        </div>

                        <div className="relative z-10 mt-12 md:mt-0">
                            <div className="w-full h-px bg-zinc-900 mb-6" />
                            <div className="flex items-center text-sm font-bold text-zinc-300 group-hover:translate-x-1 transition-transform tracking-wide cursor-pointer uppercase">
                                Explore Web Systems <ArrowUpRight className="ml-2 w-4 h-4 text-violet-500" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8">
                        {/* Automation Tile */}
                        <div className="group relative p-10 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 flex-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                                    <Cpu className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors tracking-tight">Process Automation</h3>

                            {/* Outcome Led */}
                            <p className="text-violet-400 text-sm mb-4">Remove manual work and stop losing leads to slow follow-up.</p>

                            <p className="text-zinc-500 text-xs font-mono leading-relaxed mb-6 border-l-2 border-zinc-800 pl-4">
                                CRM setup, email pipelines, payment routing, and operations workflows.
                            </p>
                        </div>

                        {/* AI Tile */}
                        <div className="group relative p-10 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-500 flex-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-400">
                                    <Bot className="w-6 h-6" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors tracking-tight">AI Integration</h3>

                            {/* Outcome Led */}
                            <p className="text-violet-400 text-sm mb-4">Turn your business knowledge into an internal assistant.</p>

                            <p className="text-zinc-500 text-xs font-mono leading-relaxed mb-6 border-l-2 border-zinc-800 pl-4">
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
