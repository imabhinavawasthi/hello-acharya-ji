"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyAcharyaKundali() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-card/10 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-16 lg:grid-cols-2 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                {t.kundaliChecking.whyAcharya.title}
                            </h2>
                            <div className="mt-6 h-1 w-20 rounded bg-primary"></div>
                        </div>

                        <div className="relative rounded-3xl border border-primary/20 bg-background/50 p-10 backdrop-blur-md shadow-[0_0_40px_rgba(250,204,21,0.05)]">
                            {/* Subtle accent line */}
                            <div className="absolute top-0 bottom-0 left-0 w-1 rounded-l-3xl bg-primary"></div>

                            <p className="text-xl text-foreground font-medium mb-6 leading-relaxed">
                                {t.kundaliChecking.whyAcharya.experience}
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.kundaliChecking.whyAcharya.tone}
                            </p>
                        </div>
                    </motion.div>

                    {/* Decorative Cosmic Chart Side Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="relative h-[500px] w-full flex items-center justify-center lg:justify-end"
                    >
                        <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]">
                            {/* Outer Glow */}
                            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px]"></div>

                            {/* Inner Decorative Vedic Chart Silhouette */}
                            <div className="absolute inset-0 border-[2px] border-primary/30 rotate-45 flex items-center justify-center">
                                <div className="absolute w-[141%] h-[2px] bg-primary/30 rotate-45"></div>
                                <div className="absolute w-[141%] h-[2px] bg-primary/30 -rotate-45"></div>

                                {/* Center point */}
                                <div className="h-4 w-4 bg-primary shadow-[0_0_15px_rgba(250,204,21,1)] rounded-full z-10"></div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
