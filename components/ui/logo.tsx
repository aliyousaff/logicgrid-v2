import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
    return (
        <div className={cn("relative grid grid-cols-2 gap-0.5 p-0.5 size-6", className)}>
            {/* Top Left - Inactive */}
            <div className="bg-muted-foreground/30 rounded-[1px]" />
            {/* Top Right - Active */}
            <div className="bg-violet-600 shadow-[0_0_8px_rgba(124,58,237,0.6)] rounded-[1px]" />
            {/* Bottom Left - Inactive */}
            <div className="bg-muted-foreground/30 rounded-[1px]" />
            {/* Bottom Right - Inactive */}
            <div className="bg-muted-foreground/30 rounded-[1px]" />
        </div>
    );
}
