"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function LiveHero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-[85vh] flex-col items-center justify-center px-6 pt-32 pb-16 text-center overflow-hidden">
            {/* Community / Group Expanding Ripple Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 mt-10">
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 2, 3],
                            opacity: [0.6, 0.2, 0],
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            delay: i * 4,
                            ease: "easeOut",
                        }}
                        className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-primary/30 mix-blend-screen"
                    />
                ))}
                <div className="absolute w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] rounded-full bg-primary/10 blur-[150px] mix-blend-screen" />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="max-w-4xl flex flex-col items-center relative z-10"
            >
                {/* Spiritual Greeting */}
                <div className="mb-4 text-sm sm:text-base font-serif text-primary/80 tracking-widest uppercase animate-in fade-in slide-in-from-bottom-2 duration-1000">
                    राधे राधे 🙏
                </div>

                <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-background/50 px-5 py-2 text-sm font-medium text-primary backdrop-blur-sm shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                    ✨ {t.liveConsultancy.whatIs.community.split(" ")[0]} Community Session
                </div>

                <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    <span className="block text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                        {t.liveConsultancy.hero.title}
                    </span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg text-muted-foreground sm:text-xl font-medium tracking-wide">
                    {t.liveConsultancy.hero.subtitle}
                </p>

                <a href="#topmate" target="_blank" rel="noopener noreferrer">
                    <GlowButton className="text-xl px-10 py-5">
                        {t.liveConsultancy.hero.cta}
                    </GlowButton>
                </a>
            </motion.div>
        </section>
    );
}
