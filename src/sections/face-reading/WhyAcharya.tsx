"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

export function WhyAcharya() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-card/10">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-2 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative order-1 lg:order-1 h-[400px] sm:h-[500px] lg:h-[600px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-primary/20 bg-background/50 flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.15)] group"
                    >
                        {/* Glow backing */}
                        <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10 z-10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 pointer-events-none"></div>

                        <Image
                            src="/ankit-poster.jpg"
                            alt="Acharya Ankit Shukla Ji"
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="order-2 lg:order-2 space-y-6"
                    >
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {t.faceReading.whyAcharya.title}
                        </h2>
                        <div className="h-1 w-16 rounded bg-primary"></div>

                        <div className="relative rounded-2xl border border-primary/10 bg-background/40 p-8 backdrop-blur-sm mt-8 space-y-6">
                            <QuoteIcon className="absolute right-6 top-6 h-12 w-12 text-primary/10" />
                            <p className="text-lg text-foreground font-medium relative z-10">
                                {t.faceReading.whyAcharya.experience}
                            </p>
                            <p className="text-muted-foreground relative z-10">
                                {t.faceReading.whyAcharya.tone}
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

function QuoteIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
    );
}
