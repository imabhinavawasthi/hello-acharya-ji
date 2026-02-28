"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ServiceCard } from "@/components/ServiceCard";
import { Eye, ScrollText, Users, RadioTower } from "lucide-react";

const routeMap: Record<string, string> = {
    "face-reading": "/face-reading",
    "kundali": "/kundali-checking",
    "one-on-one": "/one-on-one-meeting",
    "live-consultancy": "/live-consultancy"
};

const iconMap: Record<string, React.ReactNode> = {
    "face-reading": <Eye className="h-6 w-6" />,
    "kundali": <ScrollText className="h-6 w-6" />,
    "one-on-one": <Users className="h-6 w-6" />,
    "live-consultancy": <RadioTower className="h-6 w-6" />
};

export function ServicesSection() {
    const { t } = useLanguage();

    return (
        <section className="relative py-24 px-6 bg-background/50">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground mb-4">
                        {t.services.title}
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded bg-primary"></div>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">
                    {t.services.items.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            description={service.description}
                            ctaText={t.services.cta}
                            href={routeMap[service.id] || "/"}
                            icon={iconMap[service.id]}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
