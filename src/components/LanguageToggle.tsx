"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-primary/30 bg-background/50 px-3 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-primary/10 hover:text-primary"
            aria-label="Toggle language"
        >
            <Globe className="h-4 w-4 text-primary" />
            <span>{language === "hi" ? "EN" : "HI"}</span>
        </button>
    );
}
