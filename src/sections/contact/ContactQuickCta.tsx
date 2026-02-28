"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";

export function ContactQuickCta() {
    const { t } = useLanguage();

    return (
        <section className="relative py-20 px-6 overflow-hidden">
            <div className="mx-auto max-w-3xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-primary/20 bg-primary/5 p-12 backdrop-blur-sm"
                >
                    <h2 className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl text-foreground">
                        {t.contact.cta.headline}
                    </h2>

                    <a href="#topmate" target="_blank" rel="noopener noreferrer">
                        <GlowButton className="text-lg px-8 py-4">
                            {t.contact.cta.button}
                        </GlowButton>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
