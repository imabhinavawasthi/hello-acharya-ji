"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function KundaliProcess() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.kundaliChecking.process.title}
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
                </motion.div>

                <div className="relative">
                    {/* Connector line (Desktop) */}
                    <div className="hidden lg:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

                    <div className="grid gap-12 lg:grid-cols-4">
                        {t.kundaliChecking.process.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Number Circle */}
                                <div className="relative z-10 mb-8 flex h-20 w-20 items-center justify-center rounded-full border-[4px] border-background bg-card shadow-[0_0_20px_rgba(250,204,21,0.15)] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(250,204,21,0.3)]">
                                    <div className="absolute inset-0 rounded-full border border-primary/20 scale-125 transition-transform duration-300 group-hover:scale-150 group-hover:opacity-0" />
                                    <span className="text-3xl font-extrabold text-primary">
                                        {index + 1}
                                    </span>
                                </div>

                                <h3 className="mb-4 text-xl font-bold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
