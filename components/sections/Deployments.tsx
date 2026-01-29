import { Badge } from "@/components/ui/badge";
import { Monitor, BarChart, Zap, GitMerge } from "lucide-react";

const cases = [
    {
        title: "Master the Screen \nBefore It Masters You",
        desc: "A production-ready digital product system combining content delivery, checkout flow, analytics instrumentation, and a RAG-based conversational layer. Designed to handle user education, objection resolution, and continuous interaction without manual intervention.",
        modules: "RAG System · Conversion Flow · Analytics · Payments · Automation",
        icon: Monitor,
        gradient: "from-violet-900/20 to-indigo-900/20"
    },
    {
        title: "Sharjah Quotes",
        desc: "A high-intent quote acquisition system built to capture, route, and structure inbound inquiries with minimal friction. Optimized for speed, clarity, and clean operational handoff in demand-driven environments.",
        modules: "Lead Capture · Routing Logic · Event Tracking · Notifications",
        icon: Zap,
        gradient: "from-zinc-900 to-zinc-800"
    },
    {
        title: "Bookkeeping \nOperations Dashboard",
        desc: "A centralized operations dashboard built to manage intake, workflows, and reporting from a single interface. Designed to support structured service delivery and scalable back-office operations.",
        modules: "Dashboards · Workflow Automation · Client Ops · Data Structuring",
        icon: BarChart,
        gradient: "from-indigo-900/20 to-blue-900/20"
    },
    {
        title: "Automated Client \nAcquisition System",
        desc: "A modular acquisition system designed to capture inbound demand, qualify leads, and route them into downstream workflows without manual intervention. Built to integrate traffic sources, conversion touchpoints, and follow-up logic into a single pipeline.",
        modules: "Traffic Intake · Lead Qualification · Routing Logic · CRM Sync · Automation",
        icon: GitMerge,
        gradient: "from-fuchsia-900/20 to-purple-900/20"
    }
];

export function Deployments() {
    return (
        <section id="deployments" className="py-24 bg-background border-t border-border transition-colors duration-300">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-20">
                    <Badge variant="outline" className="border-violet-500/20 text-violet-600 dark:text-violet-400 bg-violet-500/10 tracking-wider">DEPLOYMENT_LOG</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">Production Deployments</h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl">
                        Client-grade systems designed, built, and deployed for live operational environments.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cases.map((item, i) => (
                        <div key={i} className="group relative p-8 rounded-2xl border border-border bg-card hover:border-violet-500/30 hover:shadow-[0_0_30px_rgba(124,58,237,0.15)] transition-all duration-300 flex flex-col">
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 dark:opacity-50 rounded-2xl`} />
                            <div className="relative z-10 flex flex-col items-start gap-4 flex-1">
                                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-violet-600 dark:text-violet-500 shadow-md shrink-0">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div className="flex flex-col h-full">
                                    <h3 className="text-lg font-bold text-foreground mb-3 leading-tight whitespace-pre-line min-h-[3.5rem]">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                                        {item.desc}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-border/50 w-full">
                                        <div className="text-[10px] uppercase text-violet-600 dark:text-violet-400 font-bold tracking-wider opacity-80">
                                            {item.modules}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
