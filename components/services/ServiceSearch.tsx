"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronUp, Zap, Code2, X } from "lucide-react";
import { SERVICE_DATA, ServiceDetail } from "./ServiceData";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ServiceSearch() {
    const [query, setQuery] = useState("");
    const [openCategories, setOpenCategories] = useState<string[]>(SERVICE_DATA.map(c => c.id));
    const [activeService, setActiveService] = useState<ServiceDetail | null>(null); // Unified state for Hover (Desktop) & Tap (Mobile)
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile to switch behavior
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleCategory = (id: string) => {
        setOpenCategories(prev =>
            prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
        );
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isMobile) {
            setMousePos({ x: e.clientX, y: e.clientY });
        }
    };

    const handleServiceInteraction = (service: ServiceDetail) => {
        if (isMobile) {
            // On mobile: Tap to toggle
            if (activeService?.name === service.name) {
                setActiveService(null);
            } else {
                setActiveService(service);
            }
        } else {
            // On desktop: Mouse enter sets it
            setActiveService(service);
        }
    };

    // Filter logic
    const filteredData = SERVICE_DATA.map(category => {
        if (!query) return category;
        const categoryMatches = category.title.toLowerCase().includes(query.toLowerCase());
        const matchingServices = category.services.filter(service =>
            service.name.toLowerCase().includes(query.toLowerCase())
        );

        if (categoryMatches) return category;
        if (matchingServices.length > 0) {
            return { ...category, services: matchingServices };
        }
        return null;
    }).filter(Boolean);

    return (
        <div className="w-full max-w-5xl mx-auto relative" onMouseMove={handleMouseMove}>

            {/* Floating Card (Desktop) or Bottom Sheet (Mobile) */}
            <AnimatePresence>
                {activeService && (
                    <motion.div
                        initial={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.9, y: 10 }}
                        animate={isMobile ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }}
                        exit={isMobile ? { y: "100%" } : { opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        style={!isMobile ? {
                            position: 'fixed',
                            left: mousePos.x + 20,
                            top: mousePos.y + 20,
                            pointerEvents: 'none',
                            zIndex: 100
                        } : {
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            zIndex: 100
                        }}
                        className={`
                bg-background/95 dark:bg-black/90 backdrop-blur-xl border border-violet-500/30 shadow-[0_0_50px_rgba(124,58,237,0.3)] overflow-hidden
                ${isMobile ? 'w-full rounded-t-2xl p-6 pb-8 border-b-0' : 'hidden lg:block w-[320px] rounded-xl p-5'}
            `}
                    >
                        {!isMobile && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-indigo-500" />}

                        <div className="flex justify-between items-start mb-4">
                            <h4 className="text-foreground font-bold text-lg leading-tight pr-4">{activeService.name}</h4>
                            {isMobile && (
                                <button onClick={() => setActiveService(null)} className="text-muted-foreground p-1">
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        <div className="space-y-4">
                            <div className="bg-muted/50 p-4 rounded-lg border border-border">
                                <div className="flex items-center gap-2 mb-2">
                                    <Zap className="w-3 h-3 text-amber-500 dark:text-amber-400" />
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Benefit</span>
                                </div>
                                <p className="text-foreground/90 text-sm leading-snug">{activeService.benefit}</p>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-lg border border-border">
                                <div className="flex items-center gap-2 mb-2">
                                    <Code2 className="w-3 h-3 text-violet-600 dark:text-violet-400" />
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">How We Build It</span>
                                </div>
                                <p className="text-muted-foreground text-xs font-mono leading-snug">{activeService.technical}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Search Input Section */}
            <div className="relative mb-20 max-w-2xl mx-auto z-10">
                <div className="absolute inset-0 bg-violet-600/20 blur-3xl rounded-full" />
                <div className="relative flex items-center">
                    <Search className="absolute left-6 w-5 h-5 text-violet-500" />
                    <Input
                        type="text"
                        placeholder="Find your solution... (e.g. 'CRM', 'Dashboard', 'Speed')"
                        className="w-full bg-background/80 dark:bg-zinc-950/80 border-violet-500/30 h-16 pl-14 text-lg text-foreground placeholder:text-muted-foreground rounded-full shadow-[0_0_30px_rgba(124,58,237,0.15)] focus-visible:ring-violet-500 focus-visible:border-violet-500 transition-all hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <p className="text-center text-muted-foreground mt-4 text-sm font-medium">
                    Searching {SERVICE_DATA.reduce((acc, c) => acc + c.services.length, 0)}+ capabilities across {SERVICE_DATA.length} domains
                </p>
            </div>

            {/* Results List */}
            <div className="space-y-6">
                <AnimatePresence>
                    {filteredData.map((category) => (
                        category && (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="border border-border bg-card/50 rounded-2xl overflow-hidden hover:border-violet-500/20 transition-colors"
                            >
                                <div
                                    onClick={() => toggleCategory(category.id)}
                                    className="flex items-center justify-between p-6 cursor-pointer bg-muted/20 hover:bg-muted/40 transition-colors"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center text-violet-500 shadow-md">
                                            <category.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-foreground tracking-tight">{category.title}</h3>
                                            <p className="text-sm text-muted-foreground hidden md:block">{category.description}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Badge variant="secondary" className="bg-muted text-muted-foreground hover:bg-zinc-200 dark:hover:bg-zinc-800 border-border">
                                            {category.services.length} Capabilities
                                        </Badge>
                                        {openCategories.includes(category.id) ? (
                                            <ChevronUp className="w-5 h-5 text-muted-foreground" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                                        )}
                                    </div>
                                </div>

                                {openCategories.includes(category.id) && (
                                    <div className="p-6 pt-0 border-t border-border/50">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-8 pt-6">
                                            {category.services.map((service, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`flex items-start gap-3 group relative py-3 md:py-2 cursor-pointer ${activeService?.name === service.name ? "bg-foreground/5 rounded px-2 -mx-2" : ""}`}
                                                    onMouseEnter={() => !isMobile && setActiveService(service)}
                                                    onMouseLeave={() => !isMobile && setActiveService(null)}
                                                    onClick={(e) => {
                                                        if (isMobile) {
                                                            e.stopPropagation();
                                                            handleServiceInteraction(service);
                                                        }
                                                    }}
                                                >
                                                    <div className={`mt-1.5 w-1.5 h-1.5 rounded-full transition-colors ${activeService?.name === service.name ? "bg-violet-500" : "bg-zinc-300 dark:bg-zinc-700 group-hover:bg-violet-500"}`} />
                                                    <div className="flex flex-col">
                                                        <span className={`text-sm font-medium leading-relaxed transition-colors border-b border-transparent ${activeService?.name === service.name ? "text-foreground" : "text-muted-foreground group-hover:text-foreground group-hover:border-violet-500/50"}`}>
                                                            {service.name}
                                                        </span>
                                                        {/* Mobile Hint - only active one shows details inline if bottom sheet is not preferred, but we are doing bottom sheet */}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>

                {filteredData.length === 0 && (
                    <div className="text-center py-20">
                        <div className="text-muted-foreground text-lg">No specific service found for &quot;{query}&quot;.</div>
                        <div className="text-muted-foreground/80 text-sm mt-2">But we probably still build it. Systems can be shaped to solve anything.</div>
                    </div>
                )}
            </div>

        </div>
    );
}
