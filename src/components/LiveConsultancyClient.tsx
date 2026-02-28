"use client";

import React from "react";
import { LiveHero } from "@/sections/live-consultancy/LiveHero";
import { WhatIsLive } from "@/sections/live-consultancy/WhatIsLive";
import { LiveBenefits } from "@/sections/live-consultancy/LiveBenefits";
import { LiveProcess } from "@/sections/live-consultancy/LiveProcess";
import { LiveCta } from "@/sections/live-consultancy/LiveCta";

export function LiveConsultancyClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <LiveHero />
            <WhatIsLive />
            <LiveBenefits />
            <LiveProcess />
            <LiveCta />
        </div>
    );
}
