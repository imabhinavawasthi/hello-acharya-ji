"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/GlowButton";

export function ContactDirectCta() {
    return (
        <section className="relative py-16 px-6 z-20">
            <div className="mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl border border-primary/20 bg-background/80 p-8 md:p-12 backdrop-blur-xl shadow-[0_10px_40px_rgba(250,204,21,0.05)] text-center"
                >
                    {/* Subtle Glow Behind CTA */}
                    <div className="absolute top-0 right-0 h-64 w-64 -translate-y-12 translate-x-12 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                            {/* Fallback to text if translation hasn't been updated yet */}
                            परामर्श बुक करें
                        </h2>

                        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                            अपनी व्यक्तिगत समस्याओं के समाधान और मार्गदर्शन के लिए सीधे आचार्य जी से संपर्क करें।
                            (Connect directly with Acharya Ji for solutions and guidance to your personal problems.)
                        </p>

                        <div className="mt-4">
                            <a href="#topmate" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                                <GlowButton className="w-full py-4 text-lg">
                                    अभी परामर्श बुक करें
                                </GlowButton>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
