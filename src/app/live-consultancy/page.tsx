import { Metadata } from "next";
import { LiveConsultancyClient } from "@/components/LiveConsultancyClient";

export const metadata: Metadata = {
    title: "Live Astrology Session | Hello Acharya Ji",
    description: "आचार्य जी के साथ सामूहिक लाइव परामर्श सत्र और प्रश्नोत्तर समाधान।",
    openGraph: {
        title: "Live Astrology Session | Hello Acharya Ji",
        description: "आचार्य जी के साथ सामूहिक लाइव परामर्श सत्र और प्रश्नोत्तर समाधान।",
        locale: "hi_IN",
        type: "website",
    },
};

export default function LiveConsultancyPage() {
    return <LiveConsultancyClient />;
}
