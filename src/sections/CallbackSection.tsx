"use client";

import React from "react";
import { motion } from "framer-motion";
import { GlowButton } from "@/components/GlowButton";

export function CallbackSection() {
    return (
        <section className="relative py-24 px-6">
            <div className="mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 p-8 md:p-12 text-center backdrop-blur-xl shadow-[0_0_50px_rgba(250,204,21,0.1)]"
                >
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl text-foreground">
                        परामर्श हेतु संपर्क करें
                    </h2>

                    <p className="mb-8 text-lg text-muted-foreground max-w-xl mx-auto">
                        अपनी व्यक्तिगत समस्याओं के त्वरित समाधान और सटीक मार्गदर्शन के लिए आचार्य जी से सीधे जुड़े।
                    </p>

                    <div className="mx-auto max-w-md">
                        <a href="#topmate" target="_blank" rel="noopener noreferrer" className="block w-full">
                            <GlowButton className="w-full py-4 text-lg font-bold">
                                अभी परामर्श बुक करें
                            </GlowButton>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
