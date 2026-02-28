"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { TestimonialCard } from "@/components/TestimonialCard";

export function TestimonialsSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 overflow-hidden">
            {/* Decorative starfield background continuation */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.testimonials.title}
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                    {t.testimonials.items.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            text={testimonial.text}
                            location={testimonial.location}
                            delay={index * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
