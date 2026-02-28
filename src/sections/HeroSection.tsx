"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";
import Image from "next/image";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const greetingVariants: Variants = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function HeroSection() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-[90vh] items-center justify-center px-4 sm:px-6 pt-24 pb-8 md:pt-32 overflow-hidden">
            {/* Deep Space Background gradient already handled by globals.css body */}

            {/* Layer 2: Subtle Animated Starfield (CSS pure) */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-screen scale-150">
                <div className="w-full h-[200%] absolute top-0 left-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent bg-[length:24px_24px] animate-star-drift" />
            </div>

            {/* Layer 2.1: Rotating faint zodiac wheel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] pointer-events-none opacity-[0.05] animate-spin-slower z-0">
                <Image src="/assets/zodiac-wheel.svg" alt="" fill className="object-contain" />
            </div>

            <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-center relative z-10">

                {/* Left Column: Typography & CTAs */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-20"
                >
                    {/* Spiritual Greeting */}
                    <motion.div variants={greetingVariants} className="mb-3 text-sm sm:text-base font-serif text-primary/80 tracking-widest uppercase">
                        राधे राधे 🙏
                    </motion.div>

                    <motion.div variants={itemVariants} className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary shadow-[0_0_15px_rgba(250,204,21,0.2)]">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {t.hero.subtitle.split(" - ")[1] || "Expert Astrologer"}
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] lg:leading-[1.1]">
                        <span className="block text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">{t.hero.title}</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mb-8 max-w-[32rem] text-base sm:text-lg text-muted-foreground font-medium tracking-wide">
                        {t.hero.subtitle.split(" - ")[0]}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                        <a href="#topmate" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto overflow-hidden rounded-xl">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <GlowButton className="text-base sm:text-lg px-8 py-3.5 sm:py-4 w-full">
                                    {t.hero.cta}
                                </GlowButton>
                            </motion.div>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Floating Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative flex justify-center items-center lg:justify-end z-20 mt-6 lg:mt-0 lg:ml-[-10%]"
                >
                    {/* Glowing Backdrop for Image */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 max-w-sm sm:max-w-md mx-auto aspect-square rounded-full bg-primary/20 blur-[80px] mix-blend-screen"
                    />

                    {/* CSS floating wrapper for performant loop */}
                    <div className="relative z-10 w-full max-w-[280px] sm:max-w-sm md:max-w-md xl:max-w-xl aspect-[4/5] drop-shadow-[0_20px_40px_rgba(250,204,21,0.15)] animate-float will-change-transform">
                        <Image
                            src="/ankit.png"
                            alt="Acharya Ankit Shukla (Premanand)"
                            fill
                            priority
                            className="object-contain object-bottom"
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
