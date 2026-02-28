import { Metadata } from "next";
import { KundaliCheckingClient } from "@/components/KundaliCheckingClient";

// Server Component for SEO Metadata Injection
export const metadata: Metadata = {
    title: "Kundali Checking | Hello Acharya Ji",
    description: "अचarya अंकित शुक्ल द्वारा विस्तृत कुंडली विश्लेषण।",
    openGraph: {
        title: "Kundali Checking | Hello Acharya Ji",
        description: "अचarya अंकित शुक्ल द्वारा विस्तृत कुंडली विश्लेषण।",
        locale: "hi_IN",
        type: "website",
    },
};

export default function KundaliCheckingPage() {
    return <KundaliCheckingClient />;
}
