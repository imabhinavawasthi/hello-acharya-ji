import { Metadata } from "next";
import { PanchangClient } from "@/components/PanchangClient";

export const metadata: Metadata = {
    title: "Panchang | Hello Acharya Ji",
    description: "दैनिक पंचांग और शुभ मुहूर्त जानकारी — जल्द आ रहा है।",
    openGraph: {
        title: "Panchang | Hello Acharya Ji",
        description: "दैनिक पंचांग और शुभ मुहूर्त जानकारी — जल्द आ रहा है।",
        locale: "hi_IN",
        type: "website",
    },
};

export default function PanchangPage() {
    return <PanchangClient />;
}
