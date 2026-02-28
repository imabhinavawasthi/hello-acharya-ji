"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
    title: string;
    description: string;
    ctaText: string;
    href: string;
    icon?: React.ReactNode;
    delay?: number;
}

export function ServiceCard({ title, description, ctaText, href, icon, delay = 0 }: ServiceCardProps) {
    return (
        <Link href={href} className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-3xl h-full">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, scale: 1.02, rotateX: 2, rotateY: -2 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay, type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-card/60 p-8 md:p-10 backdrop-blur-xl transition-all duration-500 hover:border-primary/50 group-hover:shadow-[0_15px_40px_-5px_rgba(250,204,21,0.25)] cursor-pointer"
            >
                {/* Subtle Cosmic Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                {/* Animated Golden Border Box via inset glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl ring-1 ring-inset ring-primary/50 shadow-[inset_0_0_20px_rgba(250,204,21,0.1)]" />

                <div className="relative z-10 flex flex-1 flex-col h-full pointer-events-none">
                    {icon && (
                        <div className="mb-6 h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_15px_rgba(250,204,21,0.1)]">
                            {icon}
                        </div>
                    )}

                    <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors relative inline-block w-fit">
                        {title}
                        {/* Golden animated underline under title on hover */}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </h3>

                    <p className="mb-8 flex-1 text-muted-foreground group-hover:text-foreground/90 transition-colors leading-relaxed">
                        {description}
                    </p>

                    <div className="mt-auto pt-6 border-t border-primary/10 group-hover:border-primary/30 transition-colors">
                        <span className="inline-flex items-center text-sm font-semibold text-primary transition-transform group-hover:translate-x-1 duration-300">
                            {ctaText}
                            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
