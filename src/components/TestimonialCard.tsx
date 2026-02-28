"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    text: string;
    location: string;
    delay?: number;
}

export function TestimonialCard({ name, text, location, delay = 0 }: TestimonialCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className="relative flex flex-col rounded-2xl border border-primary/10 bg-card/30 p-8 backdrop-blur-sm"
        >
            <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/20" />

            <div className="mb-6 flex-1 text-lg italic text-muted-foreground">
                &quot;{text}&quot;
            </div>

            <div className="mt-auto flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-xl font-bold text-primary">
                    {name.charAt(0)}
                </div>
                <div>
                    <div className="font-semibold text-foreground">{name}</div>
                    <div className="text-sm text-muted-foreground">{location}</div>
                </div>
            </div>
        </motion.div>
    );
}
