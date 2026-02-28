"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function FaceReadingBenefits() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.faceReading.benefits.title}
                    </h2>
                    <div className="mx-auto h-1 w-16 rounded bg-primary"></div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {t.faceReading.benefits.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col items-center text-center overflow-hidden rounded-2xl border border-primary/10 bg-card/30 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(250,204,21,0.1)]"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                {/* Abstract golden sun/star icon placeholder */}
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
