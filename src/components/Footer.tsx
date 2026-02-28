"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="mt-auto border-t border-primary/10 bg-background/50 px-6 py-12 backdrop-blur-md text-center">
            <div className="mx-auto max-w-7xl flex flex-col items-center gap-4">
                <h2 className="text-2xl font-bold tracking-widest text-primary">
                    {t.footer.brand}
                </h2>
                <p className="text-muted-foreground text-sm max-w-md">
                    {t.footer.tagline}
                </p>
                <div className="mt-8 border-t border-primary/10 pt-8 w-full flex flex-col items-center gap-2">
                    {/* Subtle Spiritual Footer Line */}
                    <p className="mb-2 text-sm font-serif text-primary/60 tracking-widest drop-shadow-[0_0_8px_rgba(250,204,21,0.2)]">
                        राधे राधे 🙏 | आध्यात्मिक मार्गदर्शन
                    </p>
                    <p className="text-xs text-muted-foreground">
                        {t.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
}
