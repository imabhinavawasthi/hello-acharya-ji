"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, Phone } from "lucide-react";

export function OfficeLocations() {
    const { t } = useLanguage();

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const itemAnim = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="relative py-20 px-6 bg-background/50">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.contact.offices.title}
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {t.contact.offices.items.map((office, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemAnim}
                            className="group relative overflow-hidden rounded-3xl border border-primary/20 bg-card/40 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-card/60 hover:shadow-[0_15px_30px_-5px_rgba(250,204,21,0.1)]"
                        >
                            <div className="absolute top-0 right-0 h-32 w-32 -translate-y-16 translate-x-16 rounded-full bg-primary/10 blur-[40px] transition-all duration-300 group-hover:bg-primary/20 pointer-events-none" />

                            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-foreground">
                                {office.name}
                            </h3>

                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                {office.address}
                            </p>

                            {office.phone && (
                                <div className="flex items-center gap-3 text-primary font-medium mt-auto">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                                        <Phone className="h-4 w-4" />
                                    </span>
                                    {office.phone}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
