"use client";

// V4 Process Steps
const steps = [
    {
        title: "Discovery & Arch",
        desc: "We map your current infrastructure and design the optimized future state."
    },
    {
        title: "Development",
        desc: "Rapid execution using our pre-built component library and core engines."
    },
    {
        title: "Integration",
        desc: "Connecting the new build to your existing tools (CRM, Payment, ERP)."
    },
    {
        title: "Deployment",
        desc: "Live launch with full testing, SEO checks, and performance validation."
    },
    {
        title: "Handover",
        desc: "Training your team and handing over the keys. You own the code."
    }
];

export function Process() {
    return (
        <section id="process" className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Execution Protocol</h2>
                        <p className="text-xl text-violet-500 font-medium max-w-2xl">From concept to console in 5 steps.</p>
                    </div>
                </div>

                <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:border-l-0 md:border-t md:grid md:grid-cols-5 md:gap-0">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pl-12 pb-20 md:pl-0 md:pt-16 md:pb-0 group">
                            {/* Timeline Dot & Line */}
                            <div className="absolute left-[-5px] top-0 md:top-[-5px] md:left-0 w-[11px] h-[11px] rounded-full bg-black border-2 border-zinc-700 group-hover:bg-violet-500 group-hover:border-violet-500 transition-colors duration-300 z-10 box-content shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>

                            {/* Mobile connecting line fix */}
                            <div className="absolute left-[0px] top-0 bottom-0 w-px bg-zinc-800 md:hidden block"></div>

                            <div className="space-y-8 md:pr-10">
                                <span className="inline-block text-[10px] font-bold text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-full font-mono group-hover:text-violet-400 group-hover:border-violet-500/30 transition-colors">
                                    PHASE / 0{i + 1}
                                </span>

                                <div>
                                    <h3 className="text-2xl font-bold text-zinc-300 mb-4 group-hover:text-white transition-colors tracking-tight">{step.title}</h3>
                                    <p className="text-base text-zinc-500 leading-relaxed font-medium max-w-[240px] border-l-2 border-zinc-800 pl-6 md:border-0 md:pl-0 group-hover:text-zinc-400 transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
