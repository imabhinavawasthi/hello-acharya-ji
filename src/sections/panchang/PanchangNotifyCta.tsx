"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function PanchangNotifyCta() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="mx-auto max-w-2xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="rounded-3xl border border-primary/10 bg-card/20 p-10 backdrop-blur-sm"
                >
                    <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                        {t.panchang.cta.headline}
                    </h2>

                    <p className="mb-8 text-muted-foreground text-sm uppercase tracking-widest">
                        {t.panchang.hero.title}
                    </p>

                    <a href="#topmate" target="_blank" rel="noopener noreferrer">
                        <GlowButton className="text-lg px-8 py-4">
                            {t.panchang.cta.button}
                        </GlowButton>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
