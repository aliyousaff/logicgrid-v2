import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Engagement() {
    return (
        <section id="engage" className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-6 mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Engagement Models</h2>
                    <p className="text-zinc-500 text-lg">If it touches revenue or operations, we build it.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">

                    {/* Launch Build */}
                    <Card className="bg-black border-zinc-800 flex flex-col hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all h-full">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Launch Build</CardTitle>
                            <CardDescription className="text-zinc-500">Best for high-trust web systems</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="text-3xl font-bold text-white">Project Basis</div>
                            <ul className="space-y-3">
                                {["Strategy + Positioning", "Copywriting", "Design + Build", "Tracking Setup", "Deployment"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <Check className="w-4 h-4 text-violet-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="pt-8">
                            <Button variant="outline" className="w-full border-zinc-800 bg-transparent text-white hover:bg-zinc-900 h-12" asChild>
                                <Link href="#contact">Request a Quote</Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Systems Retainer (Dominant) */}
                    <Card className="bg-zinc-900/40 border-violet-500/30 shadow-[0_0_60px_-10px_rgba(139,92,246,0.15)] relative flex flex-col transform md:-translate-y-6 md:scale-105 z-10 h-full">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-violet-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                            MOST POPULAR
                        </div>
                        <CardHeader className="pt-8 pb-4">
                            <CardTitle className="text-2xl text-violet-300">Systems Retainer</CardTitle>
                            <CardDescription className="text-zinc-500">Ongoing improvements + automation</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="text-4xl font-bold text-white">Monthly</div>
                            <div className="w-full h-px bg-zinc-800/50" />
                            <ul className="space-y-4">
                                {["Monthly Iterations", "New Pages & Flows", "Automation Updates", "Performance Audits", "Conversion Upgrades"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-zinc-300 font-medium">
                                        <div className="p-0.5 rounded-full bg-violet-500/20 text-violet-400">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="pt-8">
                            <Button className="w-full bg-violet-600 text-white hover:bg-violet-500 font-bold h-12 shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]" asChild>
                                <Link href="#contact">Discuss Retainer <ArrowRight className="ml-2 w-4 h-4" /></Link>
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Automation Project */}
                    <Card className="bg-black border-zinc-800 flex flex-col hover:border-zinc-700 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all h-full">
                        <CardHeader>
                            <CardTitle className="text-xl text-white">Automation Project</CardTitle>
                            <CardDescription className="text-zinc-500">Internal workflows & AI systems</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1 space-y-6">
                            <div className="text-3xl font-bold text-white">Scoped Build</div>
                            <ul className="space-y-3">
                                {["Defined Scope", "Custom Integrations", "Internal Tools", "AI Systems", "Documentation Included"].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-zinc-400 text-sm">
                                        <Check className="w-4 h-4 text-violet-600" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter className="pt-8">
                            <Button variant="outline" className="w-full border-zinc-800 bg-transparent text-white hover:bg-zinc-900 h-12" asChild>
                                <Link href="#contact">Plan an Automation</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}
