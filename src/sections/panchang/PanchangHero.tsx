"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function PanchangHero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex flex-col items-center justify-end px-6 pt-32 pb-12 text-center overflow-hidden min-h-[40vh]">
            {/* Background Upward Moving Gradient Haze */}
            <div className="absolute inset-x-0 bottom-0 h-[60%] w-full bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-50 blur-[40px] animate-float transition-all ease-in-out z-0" />

            {/* Subtle Ticking Celestial Time Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 top-20">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="h-[400px] w-[400px] md:h-[600px] md:w-[600px] rounded-full border border-dashed border-primary/20 mix-blend-screen"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
                    className="absolute h-[380px] w-[380px] md:h-[580px] md:w-[580px] rounded-full border border-dotted border-primary/30 mix-blend-screen opacity-50"
                />
                {/* Center Glow Node */}
                <div className="absolute h-1 w-1 rounded-full bg-primary shadow-[0_0_20px_rgba(250,204,21,1)]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl flex flex-col items-center relative z-10"
            >
                {/* Spiritual Greeting */}
                <div className="mb-3 text-sm sm:text-base font-serif text-primary/80 tracking-widest uppercase animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    राधे राधे 🙏
                </div>

                <div className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                    ✧ Coming Soon ✧
                </div>

                <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    {t.panchang.hero.title}
                </h1>

                <p className="max-w-xl text-lg text-muted-foreground font-medium tracking-wide">
                    {t.panchang.hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
}
