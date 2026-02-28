"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function PanchangWIPCard() {
    const { t } = useLanguage();

    return (
        <section className="relative py-12 px-6 z-20">
            <div className="mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    {/* Main Floating Card */}
                    <motion.div
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative overflow-hidden rounded-3xl border border-primary/30 bg-background/70 p-10 md:p-12 text-center backdrop-blur-xl shadow-[0_20px_50px_rgba(250,204,21,0.05)]"
                    >
                        {/* Inner Glow */}
                        <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

                        <div className="relative z-10 flex flex-col items-center justify-center">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                                {/* Spiritual Time/Hourglass icon */}
                                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>

                            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                {t.panchang.wip.title}
                            </h2>

                            <div className="mb-6 h-1 w-16 rounded bg-primary opacity-50"></div>

                            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                                {t.panchang.wip.description}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
