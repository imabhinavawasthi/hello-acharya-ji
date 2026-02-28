"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function PanchangSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-background/50">
            <div className="mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.panchangSection.title}
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded bg-primary mb-6"></div>
                    <p className="text-lg text-muted-foreground">
                        {t.panchangSection.description}
                    </p>
                </motion.div>

                <div className="relative mx-auto mt-10 max-w-md">
                    {/* Subtle rotating circle behind */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-4 rounded-full border border-dashed border-primary/20 opacity-50"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -inset-8 rounded-full border border-dotted border-primary/10 opacity-30"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative rounded-2xl border border-primary/30 bg-card/60 p-12 backdrop-blur-md shadow-[0_0_30px_rgba(250,204,21,0.1)] flex items-center justify-center"
                    >
                        <span className="text-2xl font-bold text-primary animate-pulse">
                            {t.panchangSection.wip}
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
