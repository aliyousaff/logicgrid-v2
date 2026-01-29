"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Monitor, Cpu, Bot, Database, Cloud, Link as LinkIcon, ArrowRight, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";

const components: { title: string; href: string; description: string; icon: LucideIcon }[] = [
    {
        title: "Web Systems",
        href: "/services?q=web",
        description: "High-performance websites & conversion flows.",
        icon: Monitor,
    },
    {
        title: "Automation",
        href: "/services?q=automation",
        description: "Remove manual work with smart workflows.",
        icon: Cpu,
    },
    {
        title: "AI Integration",
        href: "/services?q=ai",
        description: "RAG systems & internal assistants.",
        icon: Bot,
    },
    {
        title: "Data Tools",
        href: "/services?q=data",
        description: "Custom dashboards & BI portals.",
        icon: Database,
    },
];

export function Navigation() {
    return (
        <div className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md transition-colors duration-300">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight mr-6">
                    <div className="size-3 bg-violet-600 rounded-sm shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
                    <span className="text-foreground">LogicGrid <span className="text-muted-foreground">HQ</span></span>
                </Link>

                <div className="hidden md:flex items-center flex-1">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:text-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent h-9 px-4 py-2 transition-colors">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 border border-border backdrop-blur-xl">
                                        {components.map((component) => (
                                            <li key={component.title}>
                                                <Link href={component.href} legacyBehavior passHref>
                                                    <NavigationMenuLink asChild>
                                                        <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground group">
                                                            <div className="flex items-center gap-2 text-sm font-medium leading-none text-foreground group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                                                                <component.icon className="w-4 h-4" />
                                                                {component.title}
                                                            </div>
                                                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-foreground/80">
                                                                {component.description}
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="col-span-2 pt-2 mt-2 border-t border-border">
                                            <Link href="/services" legacyBehavior passHref>
                                                <NavigationMenuLink asChild>
                                                    <a className="flex items-center justify-center w-full p-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors">
                                                        View Full Capability Map <ArrowRight className="w-3 h-3 ml-2" />
                                                    </a>
                                                </NavigationMenuLink>
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <nav className="flex items-center gap-6 ml-4 text-sm font-medium text-muted-foreground">
                        <Link href="/#nodes" className="hover:text-foreground transition-colors">Nodes</Link>
                        <Link href="/#process" className="hover:text-foreground transition-colors">Process</Link>
                        <Link href="/#deployments" className="hover:text-foreground transition-colors">Deployments</Link>
                        <Link href="/#engage" className="hover:text-foreground transition-colors">Engage</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="#contact" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Contact
                    </Link>
                    <ModeToggle />
                    <Button className="bg-violet-600 text-white hover:bg-violet-500 font-semibold rounded-full px-6 shadow-[0_0_15px_rgba(124,58,237,0.4)] transition-all hover:shadow-[0_0_25px_rgba(124,58,237,0.6)]" asChild>
                        <Link href="#contact">Start a Build</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
