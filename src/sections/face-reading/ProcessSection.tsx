"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function ProcessSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.faceReading.process.title}
                    </h2>
                    <div className="mx-auto h-1 w-16 rounded bg-primary"></div>
                </motion.div>

                <div className="relative">
                    {/* Connector line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-[10%] right-[10%] h-[2px] bg-primary/20" />

                    <div className="grid gap-12 md:grid-cols-3">
                        {t.faceReading.process.steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                {/* Number Circle */}
                                <div className="z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border-[4px] border-background bg-card shadow-[0_0_20px_rgba(250,204,21,0.2)] transition-transform duration-300 group-hover:scale-110">
                                    <span className="text-3xl font-extrabold text-primary">
                                        {index + 1}
                                    </span>
                                </div>

                                <h3 className="mb-3 text-xl font-bold text-foreground">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground">
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
