"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function PanchangPreviews() {
    const { t } = useLanguage();

    return (
        <section className="relative py-20 px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl font-bold tracking-tight text-foreground/80 mb-4 flex items-center justify-center gap-3">
                        <span className="h-[1px] w-12 bg-primary/30"></span>
                        {t.panchang.previews.title}
                        <span className="h-[1px] w-12 bg-primary/30"></span>
                    </h2>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                    {t.panchang.previews.items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-card/30 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-card/40 hover:border-primary/30"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="flex flex-col h-full pl-4">
                                <h3 className="mb-3 text-xl font-bold text-foreground">
                                    {item.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed flex-1">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
