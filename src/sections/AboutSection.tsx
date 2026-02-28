"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function AboutSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center"
                >
                    {/* Left Column: Premium Poster Image */}
                    <div className="relative w-full aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] rounded-tr-2xl rounded-bl-2xl overflow-hidden border border-primary/20 shadow-[0_20px_50px_rgba(250,204,21,0.15)] group xl:-ml-6">
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-60" />
                        <Image
                            src="/ankit-poster.jpg"
                            alt="Acharya Ankit Shukla Poster"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                    {/* Right Column: Text & Stats */}
                    <div className="relative z-20 space-y-8">
                        {/* Decorative glow behind text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/5 blur-[80px] pointer-events-none"></div>

                        <div className="relative">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-6">
                                {t.about.title}
                            </h2>
                            <div className="h-1 w-24 rounded bg-primary mb-8"></div>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {t.about.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4 border-t border-primary/10">
                            <div className="flex flex-col rounded-2xl border border-primary/10 bg-card/30 p-6 text-center backdrop-blur-sm transition-all hover:bg-card/50 hover:border-primary/30">
                                <span className="text-4xl font-extrabold text-primary mb-2">15+</span>
                                <span className="text-sm font-semibold tracking-wide text-foreground/80">{t.about.experience.replace("15+ ", "")}</span>
                            </div>
                            <div className="flex flex-col rounded-2xl border border-primary/10 bg-card/30 p-6 text-center backdrop-blur-sm transition-all hover:bg-card/50 hover:border-primary/30">
                                <span className="text-4xl font-extrabold text-primary mb-2">10k+</span>
                                <span className="text-sm font-semibold tracking-wide text-foreground/80">{t.about.consultations.replace("10,000+ ", "")}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
