"use client";

import React from "react";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { CallbackSection } from "@/sections/CallbackSection";
import { TestimonialsSection } from "@/sections/TestimonialsSection";
import { PanchangSection } from "@/sections/PanchangSection";
import { CtaSection } from "@/sections/CtaSection";

export function HomeClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CallbackSection />
            <TestimonialsSection />
            <PanchangSection />
            <CtaSection />
        </div>
    );
}
