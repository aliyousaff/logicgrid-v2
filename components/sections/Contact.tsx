import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-black border-t border-zinc-900">
            <div className="container px-4 md:px-6 max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Context & Timeline */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <Badge variant="outline" className="border-violet-500/20 text-violet-400 bg-violet-500/10 rounded-sm px-3 py-1 text-xs font-mono tracking-widest uppercase mb-4">
                                INITIATE_PROTOCOL
                            </Badge>
                            <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">Start a Build</h2>
                            <p className="text-zinc-400 text-xl leading-relaxed max-w-md">
                                Tell us what you’re trying to achieve. We’ll respond with a clear plan: scope, timeline, and options.
                            </p>
                        </div>

                        {/* Timeline Card */}
                        <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8">
                            <div className="flex items-center gap-3 mb-8">
                                <MessageSquare className="w-5 h-5 text-violet-500" />
                                <h3 className="text-white font-bold text-lg">What happens next?</h3>
                            </div>

                            <div className="space-y-8 relative">
                                {/* Connecting Line */}
                                <div className="absolute left-[15px] top-2 bottom-6 w-px bg-zinc-800" />

                                <div className="relative flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold text-violet-500 z-10 shrink-0">
                                        01
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Review</h4>
                                        <p className="text-zinc-500 text-sm">We analyze your requirements and current setup.</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold text-violet-500 z-10 shrink-0">
                                        02
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Proposal</h4>
                                        <p className="text-zinc-500 text-sm">You get a clear roadmap with fixed pricing options.</p>
                                    </div>
                                </div>

                                <div className="relative flex gap-6">
                                    <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-bold text-violet-500 z-10 shrink-0">
                                        03
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Kickoff</h4>
                                        <p className="text-zinc-500 text-sm">We align on goals and start the build immediately.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Name</label>
                                    <Input id="name" placeholder="Full Name" className="bg-zinc-900/50 border-zinc-800 h-12 text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="website" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Business</label>
                                    <Input id="website" type="text" placeholder="Website (Optional)" className="bg-zinc-900/50 border-zinc-800 h-12 text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Email</label>
                                    <Input id="email" type="email" placeholder="work@company.com" className="bg-zinc-900/50 border-zinc-800 h-12 text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Phone</label>
                                    <Input id="phone" type="tel" placeholder="+1..." className="bg-zinc-900/50 border-zinc-800 h-12 text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Service Needed</label>
                                <div className="relative">
                                    <select id="service" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md h-12 px-3 text-zinc-100 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 appearance-none text-sm font-medium">
                                        <option>High-Performance Website</option>
                                        <option>System Automation</option>
                                        <option>AI Integration</option>
                                        <option>Systems Retainer</option>
                                        <option>Other</option>
                                    </select>
                                    {/* Custom arrow if needed, but native is fine for now if styled well */}
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L5 5L9 1" stroke="#52525B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="outcome" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Desired Outcome</label>
                                <Input id="outcome" placeholder="e.g. More leads, less admin, better data..." className="bg-zinc-900/50 border-zinc-800 h-12 text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="notes" className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Project Details</label>
                                <Textarea id="notes" placeholder="Tell us about the project..." className="bg-zinc-900/50 border-zinc-800 min-h-[140px] text-zinc-100 placeholder:text-zinc-600 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 resize-none p-4" />
                            </div>

                            <Button className="w-full bg-violet-600 text-white hover:bg-violet-500 font-bold h-12 text-base shadow-[0_0_20px_-5px_rgba(139,92,246,0.3)] transition-all hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.5)] mt-4">
                                Send Request <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
