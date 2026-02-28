"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "./GlowButton";

export function LanguagePreferenceModal() {
    const { setLanguageDirectly } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [detectedLang, setDetectedLang] = useState<"hi" | "en">("hi");

    useEffect(() => {
        // Run only once on mount
        const savedLang = localStorage.getItem("hello-acharya-ji-lang");

        if (!savedLang) {
            // No language set, we must show modal
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsOpen(true);

            // Lock body scroll
            document.body.style.overflow = "hidden";

            // Optional enhancement: detect browser language
            if (navigator.language.toLowerCase().startsWith("en")) {
                setDetectedLang("en");
            }
        }
    }, []);

    const handleSelect = (selectedLang: "hi" | "en") => {
        // Save to local storage
        localStorage.setItem("hello-acharya-ji-lang", selectedLang);

        // Update global context
        setLanguageDirectly(selectedLang);

        // Restore scroll and close modal
        document.body.style.overflow = "unset";
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-background/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.4, type: "spring", stiffness: 300, damping: 25 }}
                        className="relative z-10 w-full max-w-sm overflow-hidden rounded-3xl border border-primary/20 bg-card/60 p-8 shadow-[0_20px_60px_-15px_rgba(250,204,21,0.2)] backdrop-blur-xl"
                    >
                        {/* Glow ambient background behind the card */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />

                        <div className="relative z-20 flex flex-col items-center text-center">
                            {/* Sacred Modal Greeting */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="mb-4 text-base font-serif text-primary/90 tracking-widest drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                            >
                                राधे राधे 🙏
                            </motion.div>

                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-foreground">
                                अपनी पसंदीदा भाषा चुनें
                            </h2>
                            <p className="mb-8 text-sm text-muted-foreground">
                                Select your preferred language
                            </p>

                            <div className="flex w-full flex-col gap-4">
                                <GlowButton
                                    onClick={() => handleSelect("hi")}
                                    className={`w-full py-4 text-lg ${detectedLang === "hi" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
                                >
                                    हिंदी
                                </GlowButton>

                                <GlowButton
                                    onClick={() => handleSelect("en")}
                                    className={`w-full py-4 text-lg bg-card border border-primary/20 hover:bg-primary/10 text-foreground ${detectedLang === "en" ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""}`}
                                >
                                    English
                                </GlowButton>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
