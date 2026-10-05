"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";

interface DecipherTextProps {
    text: string;
    className?: string;
    revealDelay?: number; // Delay before starting the scramble (for staggered effects)
}

export function DecipherText({ text, className, revealDelay = 0 }: DecipherTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-10px" });

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        const steps = 20; // Slower, more steps
        const duration = 1500; // 1.5s total duration
        const intervalTime = duration / steps;

        let step = 0;

        const interval = setInterval(() => {
            if (step >= steps) {
                clearInterval(interval);
                setDisplayText(text);
                setIsScrambling(false);
                return;
            }

            const scrambled = text
                .split("")
                .map((char, index) => {
                    // Lock in characters from left to right as we progress
                    if (index < (step / steps) * text.length) {
                        return text[index];
                    }
                    if (char === " ") return " ";
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayText(scrambled);
            step++;
        }, intervalTime);
    };

    // Trigger on scroll into view
    useEffect(() => {
        if (isInView) {
            // Optional start delay
            const timeout = setTimeout(() => {
                scramble();
            }, revealDelay);
            return () => clearTimeout(timeout);
        }
    }, [isInView]);

    return (
        <motion.span
            ref={ref}
            className={className}
            onMouseEnter={scramble} // Re-trigger on hover
            suppressHydrationWarning
        >
            {displayText}
        </motion.span>
    );
}
