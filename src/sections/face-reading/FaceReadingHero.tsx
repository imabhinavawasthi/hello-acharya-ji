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

export function FaceReadingHero() {
    const { t } = useLanguage();

    return (
        <section className="relative flex min-h-[90vh] items-center justify-center px-4 sm:px-6 pt-24 pb-8 md:pt-32 overflow-hidden">
            {/* Background Base Aura */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[100vw] h-[100vw] max-w-[1000px] max-h-[1000px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen"
                />
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

                    <motion.div variants={itemVariants} className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-primary backdrop-blur-sm shadow-[0_0_15px_rgba(250,204,21,0.15)]">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {t.hero.subtitle.split(" - ")[1] || "Aura & Face Reading"}
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] lg:leading-[1.1]">
                        <span className="block text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                            {t.faceReading.hero.title}
                        </span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="mb-8 max-w-[32rem] text-base sm:text-lg text-muted-foreground font-medium tracking-wide">
                        {t.faceReading.hero.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
                        <a href="#topmate" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto overflow-hidden rounded-xl">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <GlowButton className="text-base sm:text-lg px-8 py-3.5 sm:py-4 w-full">
                                    {t.faceReading.hero.cta}
                                </GlowButton>
                            </motion.div>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Right Column: Face Analytics Visualization */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="relative flex justify-center items-center lg:justify-end z-20 mt-6 lg:mt-0 lg:ml-[-10%]"
                >
                    {/* Ring Container Array */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-screen scale-[0.8] sm:scale-100">
                        {/* Faint Contours */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full border-[0.5px] border-primary/20 border-dashed opacity-30"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-primary/10 opacity-40"
                        />
                    </div>

                    {/* Central Glowing Orb localized behind image */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-0 max-w-xs sm:max-w-sm mx-auto aspect-square rounded-full bg-primary/20 blur-[80px] mix-blend-screen"
                    />

                    {/* CSS floating wrapper for Image */}
                    <div className="relative z-10 w-full max-w-[280px] sm:max-w-sm md:max-w-md xl:max-w-xl aspect-[4/5] drop-shadow-[0_20px_40px_rgba(250,204,21,0.15)] animate-float will-change-transform rounded-2xl overflow-hidden group">
                        <Image
                            src="/ankit.png"
                            alt="Face Reading Portrait"
                            fill
                            priority
                            className="object-contain object-bottom"
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 40vw"
                        />

                        {/* Subtle Horizontal Scan Line Layered explicitly spanning the container frame */}
                        <motion.div
                            animate={{ y: ["-20%", "120%"] }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear",
                                repeatDelay: 1
                            }}
                            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_rgba(250,204,21,0.6)] mix-blend-screen opacity-50 z-20 pointer-events-none"
                            style={{ top: "0" }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
