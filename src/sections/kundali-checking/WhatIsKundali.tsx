"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatIsKundali() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-card/20">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/60 p-10 md:p-14 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(250,204,21,0.03)]"
                >
                    {/* Subtle cosmic glow */}
                    <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {t.kundaliChecking.whatIs.title}
                        </h2>
                        <div className="mx-auto mb-10 h-1 w-20 rounded bg-primary"></div>

                        <p className="mb-8 text-xl text-muted-foreground leading-relaxed font-medium">
                            {t.kundaliChecking.whatIs.description}
                        </p>

                        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/10 bg-primary/5 p-8 mt-10">
                            <p className="text-foreground italic text-lg leading-relaxed">
                                &quot;{t.kundaliChecking.whatIs.spiritual}&quot;
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
