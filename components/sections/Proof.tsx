import { Zap, ShieldCheck, Activity, Terminal } from "lucide-react";
import { DecipherText } from "@/components/ui/decipher-text";

// V4 Style items but with Benefit Copy
const items = [
    { label: "OUTCOME FOCUSED", benefit: "(We ship results)", icon: Zap },
    { label: "DATA DRIVEN", benefit: "(Decisions, not guesses)", icon: Activity },
    { label: "SECURE BY DESIGN", benefit: "(Sleep soundly)", icon: ShieldCheck },
    { label: "FULL CONTROL", benefit: "(Own your code)", icon: Terminal },
];

export function Proof() {
    return (
        <section className="border-y border-border bg-background/30 w-full overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:justify-between py-6 gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="flex items-center justify-center md:justify-start gap-3 group">
                            <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-500" />
                            <div className="flex flex-col text-left">
                                <DecipherText
                                    text={item.label}
                                    className="text-sm font-bold text-foreground tracking-wider font-mono cursor-default"
                                    revealDelay={i * 150} // Stagger effect nicely
                                />
                                <span className="text-[10px] text-muted-foreground font-mono">{item.benefit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
