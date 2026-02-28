"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function OneOnOneHero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-16 text-center overflow-hidden">
            {/* Background Minimal Ripple Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] rounded-full bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-primary/10 via-primary/5 to-transparent blur-[80px]"
                />
            </div>

            {/* Vertical Light Beam */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="w-32 md:w-48 h-[150%] bg-gradient-to-b from-transparent via-primary/30 to-transparent blur-[60px] transform -rotate-12"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl flex flex-col items-center relative z-10"
            >
                {/* Spiritual Greeting */}
                <div className="mb-4 text-sm sm:text-base font-serif text-primary/80 tracking-widest uppercase animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    राधे राधे 🙏
                </div>

                <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-background/50 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    {t.oneOnOne.hero.subtitle.split(" ")[0]} 1:1 Session
                </div>

                <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        {t.oneOnOne.hero.title}
                    </span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl font-medium tracking-wide">
                    {t.oneOnOne.hero.subtitle}
                </p>

                <a href="#topmate" target="_blank" rel="noopener noreferrer">
                    <GlowButton className="text-xl px-10 py-5">
                        {t.oneOnOne.hero.cta}
                    </GlowButton>
                </a>
            </motion.div>
        </section >
    );
}
