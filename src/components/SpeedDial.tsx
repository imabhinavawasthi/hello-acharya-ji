"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Phone, CalendarCheck, PhoneCall, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function SpeedDial() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();
    const dialRef = useRef<HTMLDivElement>(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dialRef.current && !dialRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const toggleDial = () => setIsOpen((prev) => !prev);

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.05,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0, scale: 0.8 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        },
        exit: {
            y: 10,
            opacity: 0,
            scale: 0.9,
            transition: { duration: 0.2 }
        }
    };

    return (
        <div ref={dialRef} className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10 flex flex-col items-end gap-4">
            {/* Expanded Actions */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col items-end gap-4 mb-2"
                    >
                        {/* Action 1: Book Consultation */}
                        <motion.a
                            variants={itemVariants}
                            href="#topmate"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 cursor-pointer"
                        >
                            <span className="bg-background/90 text-foreground px-4 py-2 rounded-xl text-sm font-medium shadow-lg border border-primary/20 backdrop-blur-md opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 xl:opacity-100 xl:translate-x-0">
                                {t.speedDial.bookConsultation}
                            </span>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-primary/30 shadow-[0_0_15px_rgba(250,204,21,0.15)] text-primary hover:bg-primary/10 hover:scale-110 active:scale-95 transition-all">
                                <CalendarCheck size={20} />
                            </div>
                        </motion.a>

                        {/* Action 2: Call Now */}
                        <motion.a
                            variants={itemVariants}
                            href={`tel:${t.speedDial.phoneNumber}`}
                            className="group flex items-center gap-3 cursor-pointer"
                        >
                            <span className="bg-background/90 text-foreground px-4 py-2 rounded-xl text-sm font-medium shadow-lg border border-primary/20 backdrop-blur-md opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 xl:opacity-100 xl:translate-x-0">
                                {t.speedDial.callNow}
                            </span>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.15)] text-green-500 hover:bg-green-500/10 hover:scale-110 active:scale-95 transition-all">
                                <PhoneCall size={20} />
                            </div>
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                onClick={toggleDial}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                aria-expanded={isOpen}
                className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black shadow-[0_4px_20px_rgba(250,204,21,0.4)] hover:shadow-[0_4px_30px_rgba(250,204,21,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 z-10"
            >
                {/* Soft pulse glow ring behind */}
                <span className="absolute inset-0 rounded-full animate-ping opacity-20 bg-primary"></span>

                <AnimatePresence mode="popLayout">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="phone"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Phone size={28} className="fill-black/20" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
