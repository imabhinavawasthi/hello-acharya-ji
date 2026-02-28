"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function KundaliHero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-16 text-center overflow-hidden">
            {/* Background Spiritual Aura Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
                />
            </div>

            {/* Subtle Zodiac Rings & Orbiting Dots */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mt-10">
                {/* Main fixed ring */}
                <div className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-primary/20 mix-blend-screen" />

                {/* Dashed rotating ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[580px] h-[580px] md:w-[780px] md:h-[780px] rounded-full border border-dashed border-primary/30"
                />

                {/* Orbit System 1 */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
                >
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(250,204,21,1)] absolute -top-1.5 left-1/2 -translate-x-1/2" />
                </motion.div>

                {/* Orbit System 2 */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[450px] h-[450px] md:w-[600px] md:h-[600px] rounded-full border border-primary/10"
                >
                    <div className="w-2 h-2 rounded-full bg-white/70 shadow-[0_0_10px_rgba(255,255,255,0.8)] absolute top-1/2 -left-1 -translate-y-1/2" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/80 shadow-[0_0_8px_rgba(250,204,21,0.6)] absolute bottom-10 right-10" />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-4xl flex flex-col items-center relative z-10"
            >
                {/* Spiritual Greeting */}
                <div className="mb-4 text-sm sm:text-base font-serif text-primary/80 tracking-widest uppercase animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    राधे राधे 🙏
                </div>

                <div className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-semibold text-primary backdrop-blur-md shadow-[0_0_20px_rgba(250,204,21,0.15)]">
                    ✨ संपूर्ण वैदिक विश्लेषण
                </div>

                <h1 className="mb-8 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block text-foreground drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        {t.kundaliChecking.hero.title}
                    </span>
                </h1>

                <p className="mb-12 max-w-2xl text-xl text-muted-foreground sm:text-2xl font-medium tracking-wide leading-relaxed">
                    {t.kundaliChecking.hero.subtitle}
                </p>

                <a href="#topmate" target="_blank" rel="noopener noreferrer">
                    <GlowButton className="text-xl px-10 py-5">
                        {t.kundaliChecking.hero.cta}
                    </GlowButton>
                </a>
            </motion.div>
        </section>
    );
}
