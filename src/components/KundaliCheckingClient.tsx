"use client";

import React from "react";
import { KundaliHero } from "@/sections/kundali-checking/KundaliHero";
import { WhatIsKundali } from "@/sections/kundali-checking/WhatIsKundali";
import { KundaliInsights } from "@/sections/kundali-checking/KundaliInsights";
import { WhyAcharyaKundali } from "@/sections/kundali-checking/WhyAcharyaKundali";
import { KundaliProcess } from "@/sections/kundali-checking/KundaliProcess";
import { KundaliCta } from "@/sections/kundali-checking/KundaliCta";

export function KundaliCheckingClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <KundaliHero />
            <WhatIsKundali />
            <KundaliInsights />
            <WhyAcharyaKundali />
            <KundaliProcess />
            <KundaliCta />
        </div>
    );
}
