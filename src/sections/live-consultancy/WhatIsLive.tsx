"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatIsLive() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-card/20 border-y border-primary/5">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/60 p-10 md:p-14 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(250,204,21,0.04)]"
                >
                    {/* Subtle cosmic glow */}
                    <div className="absolute top-0 right-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 h-96 w-96 translate-y-1/2 -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />

                    <div className="relative z-10">
                        <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {t.liveConsultancy.whatIs.title}
                        </h2>
                        <div className="mx-auto mb-10 h-1 w-20 rounded bg-primary"></div>

                        <p className="mb-8 text-xl text-muted-foreground leading-relaxed font-medium">
                            {t.liveConsultancy.whatIs.description}
                        </p>

                        <div className="mx-auto max-w-2xl rounded-2xl border border-primary/10 bg-primary/5 p-8 mt-10">
                            <p className="text-foreground italic text-lg leading-relaxed flex items-center justify-center gap-3">
                                <span className="text-primary text-2xl">✧</span>
                                &quot;{t.liveConsultancy.whatIs.community}&quot;
                                <span className="text-primary text-2xl">✧</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
