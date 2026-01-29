export function Footer() {
    return (
        <footer className="py-12 bg-background border-t border-border transition-colors duration-300">
            <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 font-semibold text-lg">
                    <div className="size-3 bg-violet-600 rounded-sm shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    <span className="text-foreground">LogicGrid HQ</span>
                </div>

                <div className="text-sm text-muted-foreground">
                    Prefer email? <a href="mailto:hello@logicgridhq.com" className="text-violet-600 dark:text-violet-500 hover:text-violet-500 dark:hover:text-violet-400 hover:underline transition-colors">hello@logicgridhq.com</a>
                </div>

                <div className="text-xs text-muted-foreground">
                    © {new Date().getFullYear()} LogicGrid HQ.
                </div>
            </div>
        </footer>
    );
}
