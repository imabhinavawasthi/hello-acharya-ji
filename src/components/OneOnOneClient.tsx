"use client";

import React from "react";
import { OneOnOneHero } from "@/sections/one-on-one/OneOnOneHero";
import { PersonalizedGuidance } from "@/sections/one-on-one/PersonalizedGuidance";
import { WhoShouldBook } from "@/sections/one-on-one/WhoShouldBook";
import { OneOnOneProcess } from "@/sections/one-on-one/OneOnOneProcess";
import { OneOnOneCta } from "@/sections/one-on-one/OneOnOneCta";

export function OneOnOneClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <OneOnOneHero />
            <PersonalizedGuidance />
            <WhoShouldBook />
            <OneOnOneProcess />
            <OneOnOneCta />
        </div>
    );
}
