"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedBackground() {
    const [particles, setParticles] = useState<{ id: number; r: number; x: number; y: number; d: number }[]>([]);

    useEffect(() => {
        // Generate particles on client side to avoid hydration mismatch
        // Reduced to 50 to ensure Lighthouse > 85 on mobile
        const newParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            r: Math.random() * 2 + 0.5, // radius
            x: Math.random() * 100, // viewport x
            y: Math.random() * 100, // viewport y
            d: Math.random() * 15 + 15, // duration (slower, smoother)
        }));
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setParticles(newParticles);
    }, []);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050510]">
            {/* Soft Central Spiritual Glow */}
            <div className="absolute top-[20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px] opacity-70 mix-blend-screen" />

            {/* Corner Ambience */}
            <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-amber-900/10 blur-[100px]" />
            <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-orange-900/10 blur-[120px]" />

            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-primary/40 shadow-[0_0_8px_2px_rgba(250,204,21,0.3)]"
                    style={{
                        width: p.r * 2,
                        height: p.r * 2,
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        willChange: "transform, opacity",
                    }}
                    animate={{
                        y: ["0%", "-40%", "0%"],
                        opacity: [0.05, 0.4, 0.05],
                    }}
                    transition={{
                        duration: p.d,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
}
