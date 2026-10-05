import { Logo } from "@/components/ui/logo";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border mt-auto">
            <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
                            <Logo className="size-6 mr-1" />
                            <span className="text-foreground">LogicGrid <span className="text-muted-foreground">Ops</span></span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Building the digital infrastructure for modern businesses. Fast systems, automated workflows, and clear revenue paths.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground tracking-wide text-sm uppercase">Services</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/services" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Capability Map</a></li>
                            <li><a href="/systems/web" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Website Development</a></li>
                            <li><a href="/systems/automation" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Process Automation</a></li>
                            <li><a href="/systems/ai" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">AI Integration</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground tracking-wide text-sm uppercase">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/#process" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Our Process</a></li>
                            <li><a href="/work/younis-b-azeem" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Website case study</a></li>
                            <li><a href="/#contact" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Contact</a></li>
                            <li><a href="/legal/privacy" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="/legal/terms" className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Connect Column */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-foreground tracking-wide text-sm uppercase">Connect</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="mailto:growth@logicgridops.com" className="flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                    growth@logicgridops.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:finance@logicgridops.com" className="flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                    finance@logicgridops.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto:partnerships@logicgridops.com" className="flex items-center gap-2 hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                                    partnerships@logicgridops.com
                                </a>
                            </li>
                            {/* Add social links here if/when user provides them */}
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} LogicGrid Ops. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="/legal/privacy" className="hover:text-foreground transition-colors">Privacy</a>
                        <a href="/legal/terms" className="hover:text-foreground transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
