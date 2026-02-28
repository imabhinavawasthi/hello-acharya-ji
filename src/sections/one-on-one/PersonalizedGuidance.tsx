"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function PersonalizedGuidance() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-card/20">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {t.oneOnOne.guidance.title}
                        </h2>
                        <div className="h-1 w-16 rounded bg-primary"></div>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            {t.oneOnOne.guidance.description}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative rounded-3xl border border-primary/20 bg-background/50 p-10 backdrop-blur-md shadow-[0_0_30px_rgba(250,204,21,0.05)] overflow-hidden"
                    >
                        {/* Subtle glow */}
                        <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-[60px]"></div>

                        <div className="relative z-10 flex flex-col gap-6">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </div>
                            <p className="text-xl text-foreground font-medium italic">
                                &quot;{t.oneOnOne.guidance.highlight}&quot;
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
