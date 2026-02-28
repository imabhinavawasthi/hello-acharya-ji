"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function KundaliInsights() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
                        {t.kundaliChecking.insights.title}
                    </h2>
                    <div className="mx-auto h-1 w-24 rounded bg-primary"></div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {t.kundaliChecking.insights.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col rounded-2xl border border-primary/10 bg-card/40 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(250,204,21,0.1)]"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                {/* Abstract golden star/chart icon */}
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-xl font-bold text-foreground">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed flex-1">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
