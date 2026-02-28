"use client";

import React from "react";
import { ContactHero } from "@/sections/contact/ContactHero";
import { ContactDirectCta } from "@/sections/contact/ContactDirectCta";
import { OfficeLocations } from "@/sections/contact/OfficeLocations";
import { GoogleMapEmbed } from "@/sections/contact/GoogleMapEmbed";
import { ContactQuickCta } from "@/sections/contact/ContactQuickCta";

export function ContactClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden min-h-screen">
            <ContactHero />
            <div className="-mt-16 sm:-mt-24 relative z-20">
                <ContactDirectCta />
            </div>
            <OfficeLocations />
            <GoogleMapEmbed />
            <ContactQuickCta />
        </div>
    );
}
