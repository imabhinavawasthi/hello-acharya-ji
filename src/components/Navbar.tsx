"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";
import { GlowButton } from "./GlowButton";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const { t } = useLanguage();
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: "/", label: t.navbar.home },
        { href: "/face-reading", label: t.navbar.faceReading },
        { href: "/kundali-checking", label: t.navbar.kundali },
        { href: "/one-on-one-meeting", label: t.navbar.oneOnOne },
        { href: "/live-consultancy", label: t.navbar.live },
        { href: "/panchang", label: t.navbar.panchang },
        { href: "/contact", label: t.navbar.contact },
    ];

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${scrolled
                ? "border-b border-primary/10 bg-background/80 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                <div className="flex items-center gap-2">
                    <Link href="/" className="relative group flex items-center gap-2.5 sm:gap-3" aria-label="Hello Acharya Ji Home">
                        {/* Phone Icon Badge */}
                        <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary shadow-[0_0_10px_rgba(250,204,21,0.15)] transition-all group-hover:scale-105 group-hover:bg-primary/20 shrink-0">
                            <Phone size={18} className="fill-primary/20 sm:w-5 sm:h-5" />
                        </div>

                        {/* Stacked Typography */}
                        <div className="flex flex-col justify-center">
                            <span className="text-[10px] sm:text-xs text-primary/90 font-medium tracking-wide mb-0.5 opacity-80 group-hover:opacity-100 transition-opacity">
                                {t.navbar.brand === "Hello Acharya Ji" ? "Radhe Radhe 🙏" : "राधे राधे 🙏"}
                            </span>
                            {/* Desktop Full Text */}
                            <span className="hidden sm:block bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-xl md:text-2xl font-bold text-transparent tracking-wide transition-all group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] font-serif whitespace-nowrap">
                                {t.navbar.brand}
                            </span>
                            {/* Mobile Truncated Text */}
                            <span className="block sm:hidden bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-lg font-bold text-transparent tracking-wide transition-all group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] font-serif whitespace-nowrap">
                                {t.navbar.brand === "Hello Acharya Ji" ? "Acharya Ji" : "आचार्य जी"}
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex gap-6 text-[15px] font-medium">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.href} className="relative group">
                                    <Link
                                        href={link.href}
                                        className={`transition-colors duration-300 hover:text-primary cursor-pointer ${isActive ? "text-primary" : "text-foreground/90"
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                    <div
                                        className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    />
                                </li>
                            );
                        })}
                    </ul>

                    <div className="flex items-center gap-4 border-l border-primary/20 pl-6">
                        <LanguageToggle />
                        <a href="#topmate" target="_blank" rel="noopener noreferrer">
                            <GlowButton className="px-6 py-2 text-sm shadow-none">{t.navbar.bookNow}</GlowButton>
                        </a>
                    </div>
                </div>

                {/* Mobile Hamburger Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    <LanguageToggle />
                    <button
                        className="text-foreground p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Slide-in */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden overflow-y-auto max-h-[calc(100vh-80px)] border-b border-primary/10 bg-background/95 backdrop-blur-xl absolute top-full left-0 right-0 shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                    >
                        <div className="flex flex-col px-6 py-6 pb-8 gap-6">
                            <ul className="flex flex-col gap-4">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className={`text-lg font-medium transition-colors cursor-pointer block ${isActive ? "text-primary border-l-2 border-primary pl-4" : "text-foreground/80 hover:text-primary pl-4 border-l-2 border-transparent"
                                                    }`}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="pt-4 border-t border-primary/10">
                                <a href="#topmate" target="_blank" rel="noopener noreferrer" className="block">
                                    <GlowButton className="w-full text-center text-sm py-3.5">
                                        {t.navbar.bookNow}
                                    </GlowButton>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
