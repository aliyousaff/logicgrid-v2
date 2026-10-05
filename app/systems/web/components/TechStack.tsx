import { Badge } from "@/components/ui/badge";

const tech = [
    { name: "Next.js 14", type: "Framework" },
    { name: "React SC", type: "UI Library" },
    { name: "Tailwind", type: "Styling" },
    { name: "Framer Motion", type: "Animation" },
    { name: "TypeScript", type: "Safety" },
    { name: "PostHog", type: "Analytics" },
    { name: "Vercel Edge", type: "Infrastructure" },
    { name: "Radix UI", type: "Accessibility" }
];

export function TechStack() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tech.map((t) => (
                <div key={t.name} className="p-4 bg-muted/30 border border-border/50 rounded-xl flex flex-col items-start gap-2 hover:border-violet-500/30 transition-colors">
                    <span className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{t.type}</span>
                    <span className="font-bold text-foreground">{t.name}</span>
                </div>
            ))}
        </div>
    );
}
