import { Metadata } from "next";
import { OneOnOneClient } from "@/components/OneOnOneClient";

export const metadata: Metadata = {
    title: "Private Astrology Consultation | Hello Acharya Ji",
    description: "व्यक्तिगत मार्गदर्शन और आपकी समस्याओं के लिए आचार्य जी द्वारा 1:1 परामर्श।",
    openGraph: {
        title: "Private Astrology Consultation | Hello Acharya Ji",
        description: "व्यक्तिगत मार्गदर्शन और आपकी समस्याओं के लिए आचार्य जी द्वारा 1:1 परामर्श।",
        locale: "hi_IN",
        type: "website",
    },
};

export default function OneOnOnePage() {
    return <OneOnOneClient />;
}
