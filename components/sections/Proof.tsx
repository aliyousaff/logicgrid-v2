import { Zap, ShieldCheck, Activity, Terminal } from "lucide-react";

// V4 Style items but with Benefit Copy
const items = [
    { label: "OUTCOME FOCUSED", benefit: "(We ship results)", icon: Zap },
    { label: "DATA DRIVEN", benefit: "(Decisions, not guesses)", icon: Activity },
    { label: "SECURE BY DESIGN", benefit: "(Sleep soundly)", icon: ShieldCheck },
    { label: "FULL CONTROL", benefit: "(Own your code)", icon: Terminal },
];

export function Proof() {
    return (
        <section className="border-y border-border bg-muted/30 w-full overflow-hidden transition-colors duration-300">
            <div className="container px-4 md:px-6">
                <div className="flex flex-wrap items-center justify-center md:justify-between py-6 gap-6 md:gap-0">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 group">
                            <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-500" />
                            <div className="flex flex-col">
                                <span className="text-sm font-bold text-foreground/80 tracking-wider font-mono">{item.label}</span>
                                <span className="text-[10px] text-muted-foreground font-mono">{item.benefit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
