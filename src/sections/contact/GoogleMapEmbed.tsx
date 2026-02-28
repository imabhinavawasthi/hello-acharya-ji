"use client";

import React from "react";
import { motion } from "framer-motion";

export function GoogleMapEmbed() {
    return (
        <section className="relative py-12 px-6">
            <div className="mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded-3xl border border-primary/20 shadow-[0_10px_40px_rgba(250,204,21,0.05)] bg-card/30"
                >
                    <div className="absolute inset-0 z-0 bg-primary/5 animate-pulse" />

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114251.48805218413!2d80.24523318260846!3d26.447413695277563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(80%) contrast(90%)" }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="relative z-10"
                        title="Office Location Map"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
