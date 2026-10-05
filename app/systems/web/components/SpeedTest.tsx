"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Gauge, Play, RotateCcw } from "lucide-react";

export function SpeedTest() {
    const [isRunning, setIsRunning] = useState(false);
    const [standardProgress, setStandardProgress] = useState(0);
    const [logicInfoProgress, setLogicInfoProgress] = useState(0);

    const runTest = () => {
        setIsRunning(true);
        setStandardProgress(0);
        setLogicInfoProgress(0);

        // LogicGrid: Instant (0.3s)
        setTimeout(() => setLogicInfoProgress(100), 100);

        // Standard: Slow (3s) with stutters
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 10;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setIsRunning(false);
            }
            setStandardProgress(progress);
        }, 200);
    };

    return (
        <div className="p-8 rounded-3xl bg-card border border-border shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
                <div className="space-y-1">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-violet-500" /> Latency Diagnostic
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">COMPARATIVE RUNTIME ANALYSIS</p>
                </div>
                <Button
                    onClick={runTest}
                    disabled={isRunning}
                    variant="outline"
                    size="sm"
                    className="border-violet-500/30 hover:bg-violet-500/10"
                >
                    {isRunning ? <span className="animate-pulse">RUNNING...</span> : <span className="flex items-center gap-2"><Play className="w-4 h-4" /> RUN TEST</span>}
                </Button>
            </div>

            <div className="space-y-8">
                {/* Standard Site */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Standard WordPress/Wix</span>
                        <span className="text-red-500 font-mono">{isRunning && standardProgress < 100 ? "LOADING..." : standardProgress === 100 ? "2.8s" : "IDLE"}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-red-500/70"
                            initial={{ width: "0%" }}
                            animate={{ width: `${standardProgress}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                </div>

                {/* LogicGrid Site */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">LogicGrid System</span>
                        <span className="text-green-500 font-mono font-bold">{logicInfoProgress === 100 ? "0.1s" : "IDLE"}</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-violet-600 shadow-[0_0_15px_#7c3aed]"
                            initial={{ width: "0%" }}
                            animate={{ width: `${logicInfoProgress}%` }}
                            transition={{ duration: 0.3, ease: "circOut" }}
                        />
                    </div>
                </div>
            </div>

            {logicInfoProgress === 100 && standardProgress < 100 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-background/80 backdrop-blur-sm px-6 py-3 rounded-full border border-green-500/30 text-green-500 font-bold shadow-2xl transform scale-125">
                        28x FASTER
                    </div>
                </div>
            )}
        </div>
    );
}
