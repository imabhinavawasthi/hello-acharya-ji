"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, Language } from '@/constants/content';

type LanguageContextType = {
    language: Language;
    toggleLanguage: () => void;
    setLanguageDirectly: (lang: Language) => void;
    t: typeof content.hi;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>('hi');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Avoid hydration mismatch by waiting for mount
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
        // Optional: detect browser language or local storage here
        const savedLang = localStorage.getItem('hello-acharya-ji-lang') as Language;
        if (savedLang === 'hi' || savedLang === 'en') {
            setLanguage(savedLang);
        }
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLang = prev === 'hi' ? 'en' : 'hi';
            localStorage.setItem('hello-acharya-ji-lang', newLang);
            return newLang;
        });
    };

    const setLanguageDirectly = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('hello-acharya-ji-lang', lang);
    }

    const t = content[language];

    if (!mounted) {
        // Return with default 'hi' language initially for SSR
        return (
            <LanguageContext.Provider value={{ language: 'hi', toggleLanguage, setLanguageDirectly, t: content.hi }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, setLanguageDirectly, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
