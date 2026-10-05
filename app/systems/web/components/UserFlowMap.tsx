"use client";

import { motion } from "framer-motion";

export function UserFlowMap() {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] bg-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden flex items-center justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* 
                HYBRID ARCHITECTURE:
                - SVG for the connecting line (scales to width, consistent stroke)
                - HTML for Nodes & Labels (perfect circles, exact positioning)
            */}

            <svg className="w-full h-full absolute inset-0 pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="none">
                {/* Standard Path (High Friction) - Red Dotted */}
                <path
                    d="M 40 200 Q 220 100 400 200 T 760 250"
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.4"
                    vectorEffect="non-scaling-stroke"
                />

                {/* LogicGrid Path (Frictionless) - Expanding Beam */}
                <motion.path
                    d="M 40 200 L 760 200"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0.5 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </svg>

            {/* Nodes & Labels Layer - Absolute Positioning (5%, 35%, 65%, 95%) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">

                {/* SYSTEM 1: AD CLICK (5%) */}
                <div className="absolute top-1/2 left-[5%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {/* Node */}
                    <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-500 mb-20 md:mb-24" />
                    {/* Label */}
                    <Badge label="1. AD CLICK" />
                </div>

                {/* SYSTEM 2: INSTANT LOAD (35%) */}
                <div className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {/* Node */}
                    <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-500 mb-20 md:mb-24" />
                    <Badge label="2. INSTANT LOAD" />
                </div>

                {/* SYSTEM 3: CLEAR OFFER (65%) */}
                <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {/* Node */}
                    <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-zinc-500 mb-20 md:mb-24" />
                    <Badge label="3. CLEAR OFFER" />
                </div>

                {/* SYSTEM 4: CONVERSION (95%) */}
                <div className="absolute top-1/2 left-[95%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    {/* Pulse Node */}
                    <div className="relative mb-20 md:mb-24">
                        <motion.div
                            className="absolute inset-0 rounded-full bg-emerald-500"
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: [1, 2, 1], opacity: [0.8, 0, 0.8] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                        />
                        <div className="w-4 h-4 relative rounded-full bg-zinc-900 border-2 border-emerald-500 z-10" />
                        <div className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-white z-20" />
                    </div>
                    <Badge label="4. CONVERSION" highlight />
                </div>
            </div>

        </div>
    );
}

function Badge({ label, highlight }: { label: string, highlight?: boolean }) {
    return (
        <div className={`px-3 py-1.5 backdrop-blur-md border rounded text-[10px] md:text-xs font-mono font-medium tracking-tight whitespace-nowrap ${highlight
                ? 'bg-green-500/10 border-green-500 text-green-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                : 'bg-zinc-900/80 border-zinc-800 text-muted-foreground'
            }`}>
            {label}
        </div>
    )
}
