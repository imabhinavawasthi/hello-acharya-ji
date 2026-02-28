"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function CtaSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="mx-auto max-w-4xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl border border-primary/20 bg-primary/5 p-12 md:p-16 backdrop-blur-sm"
                >
                    <h2 className="mb-8 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                        {t.ctaBanner.title}
                    </h2>

                    <a href="#topmate" target="_blank" rel="noopener noreferrer">
                        <GlowButton className="text-lg px-10 py-4 shadow-[0_0_30px_5px_rgba(250,204,21,0.3)]">
                            {t.ctaBanner.button}
                        </GlowButton>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
