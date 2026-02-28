"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContactHero() {
    const { t } = useLanguage();

    return (
        <section className="relative px-6 pt-32 pb-16 text-center overflow-hidden min-h-[40vh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-4xl relative z-10"
            >
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    {t.contact.hero.title}
                </h1>

                <div className="mx-auto h-1 w-24 rounded bg-primary mb-8"></div>

                <p className="mx-auto max-w-2xl text-lg text-muted-foreground font-medium tracking-wide">
                    {t.contact.hero.subtitle}
                </p>
            </motion.div>
        </section>
    );
}
