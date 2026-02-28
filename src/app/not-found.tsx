"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { GlowButton } from "@/components/GlowButton";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
    const { language } = useLanguage();

    const title = language === "hi" ? "पृष्ठ नहीं मिला" : "Page Not Found";
    const desc = language === "hi" ? "आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है।" : "The page you reflect looking for does not exist.";
    const back = language === "hi" ? "मुख्य पृष्ठ पर लौटें" : "Return to Home";

    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-8xl font-bold text-primary opacity-20">404</h1>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">{title}</h2>
                <p className="mt-4 mb-8 text-muted-foreground max-w-md mx-auto">{desc}</p>
                <Link href="/">
                    <GlowButton>{back}</GlowButton>
                </Link>
            </motion.div>
        </div>
    );
}
