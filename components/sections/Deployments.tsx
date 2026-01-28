import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, BarChart, Zap, LayoutTemplate, GitMerge, Bot } from "lucide-react";

// V2 Specific Case Studies (Industry + Outcome + Constraint)
const cases = [
    {
        title: "Service Business Website Rebuild",
        jargon: "Next.js SSR + Headless CMS",
        benefit: "Faster mobile load + clear quote flow",
        desc: "Complete overhaul for a high-volume service provider. 2-week build time.",
        icon: LayoutTemplate,
        gradient: "from-violet-900/20 to-indigo-900/20"
    },
    {
        title: "Client Intake Automation",
        jargon: "Webhook Architecture",
        benefit: "Removed manual data entry",
        desc: "Automated onboarding pipeline. Saves 20 hours of admin work per week.",
        icon: Zap,
        gradient: "from-zinc-900 to-zinc-800"
    },
    {
        title: "Internal Knowledge Search",
        jargon: "Vector RAG Database",
        benefit: "Staff can find SOPs instantly",
        desc: "Internal AI tool trained on company PDFs. Reduced training time by 40%.",
        icon: Bot,
        gradient: "from-indigo-900/20 to-blue-900/20"
    },
    {
        title: "Revenue Dashboard",
        jargon: "Real-time Metrics",
        benefit: "One view of Stripe + Ads + CRM",
        desc: "Custom operational view for founders to see profit without logging into 5 apps.",
        icon: BarChart,
        gradient: "from-fuchsia-900/20 to-purple-900/20"
    }
];

export function Deployments() {
    return (
        <section id="deployments" className="py-24 bg-black">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <Badge variant="outline" className="border-violet-500/20 text-violet-400 bg-violet-500/10 tracking-wider">DEPLOYMENT_LOG</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Selected Deployments</h2>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl">
                        Recent systems engineered and launched into production.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, i) => (
                        <div key={i} className="group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 rounded-2xl`} />
                            <div className="relative z-10 flex flex-col items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-black border border-zinc-800 flex items-center justify-center text-violet-500 shadow-md">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-3 leading-tight">{item.title}</h3>
                                    <div className="flex flex-col gap-0.5 mb-3">
                                        <span className="text-[10px] uppercase text-zinc-600 font-bold tracking-wider">{item.jargon}</span>
                                        <span className="text-xs text-violet-400 font-medium font-mono">&lt;{item.benefit}&gt;</span>
                                    </div>
                                    <p className="text-zinc-500 text-sm leading-snug">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
