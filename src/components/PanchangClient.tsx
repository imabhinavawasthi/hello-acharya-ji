"use client";

import React from "react";
import { PanchangHero } from "@/sections/panchang/PanchangHero";
import { PanchangWIPCard } from "@/sections/panchang/PanchangWIPCard";
import { PanchangPreviews } from "@/sections/panchang/PanchangPreviews";
import { PanchangNotifyCta } from "@/sections/panchang/PanchangNotifyCta";

export function PanchangClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden min-h-screen">
            <PanchangHero />
            <div className="-mt-16 sm:-mt-24 relative z-20">
                <PanchangWIPCard />
            </div>
            <PanchangPreviews />
            <PanchangNotifyCta />
        </div>
    );
}
