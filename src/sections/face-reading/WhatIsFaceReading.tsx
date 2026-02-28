"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatIsFaceReading() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-card/20">
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl border border-primary/20 bg-background/50 p-8 md:p-14 backdrop-blur-xl shadow-[0_0_40px_rgba(250,204,21,0.05)]"
                >
                    {/* Subtle cosmic glow */}
                    <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/10 blur-[80px]" />

                    <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        {t.faceReading.whatIs.title}
                    </h2>
                    <div className="mb-8 h-1 w-16 rounded bg-primary"></div>

                    <p className="mb-8 text-lg text-muted-foreground leading-relaxed font-medium">
                        {t.faceReading.whatIs.description}
                    </p>

                    <ul className="grid gap-4 sm:grid-cols-2 mb-8">
                        {t.faceReading.whatIs.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-muted-foreground">{benefit}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="rounded-2xl border border-primary/10 bg-primary/5 p-6 border-l-4 border-l-primary">
                        <p className="text-foreground italic">
                            &quot;{t.faceReading.whatIs.spiritual}&quot;
                        </p>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
