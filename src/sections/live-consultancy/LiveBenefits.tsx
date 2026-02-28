"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function LiveBenefits() {
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
                        {t.liveConsultancy.benefits.title}
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {t.liveConsultancy.benefits.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card/40 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-[0_15px_40px_rgba(250,204,21,0.12)] text-center flex flex-col items-center"
                        >
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                                {/* Abstract community/light icon */}
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-foreground">
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
