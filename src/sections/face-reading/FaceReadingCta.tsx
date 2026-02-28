"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function FaceReadingCta() {
    const { t } = useLanguage();

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
            </div>

            <div className="mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl border border-primary/20 bg-card/40 p-12 md:p-20 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                >
                    <h2 className="mb-10 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground drop-shadow-sm">
                        {t.faceReading.cta.title}
                    </h2>

                    <a href="#topmate" target="_blank" rel="noopener noreferrer">
                        <GlowButton className="text-xl px-12 py-5 shadow-[0_0_40px_10px_rgba(250,204,21,0.2)]">
                            {t.faceReading.cta.button}
                        </GlowButton>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
