"use client";

import React from "react";
import { FaceReadingHero } from "@/sections/face-reading/FaceReadingHero";
import { WhatIsFaceReading } from "@/sections/face-reading/WhatIsFaceReading";
import { FaceReadingBenefits } from "@/sections/face-reading/FaceReadingBenefits";
import { WhyAcharya } from "@/sections/face-reading/WhyAcharya";
import { ProcessSection } from "@/sections/face-reading/ProcessSection";
import { FaceReadingCta } from "@/sections/face-reading/FaceReadingCta";

export function FaceReadingClient() {
    return (
        <div className="flex flex-col w-full overflow-x-hidden">
            <FaceReadingHero />
            <WhatIsFaceReading />
            <FaceReadingBenefits />
            <WhyAcharya />
            <ProcessSection />
            <FaceReadingCta />
        </div>
    );
}
