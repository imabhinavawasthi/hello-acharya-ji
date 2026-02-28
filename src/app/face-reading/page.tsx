import { Metadata } from "next";
import { FaceReadingClient } from "@/components/FaceReadingClient";

// Server Component for SEO Metadata Injection
export const metadata: Metadata = {
    title: "Face Reading Consultation | Hello Acharya Ji",
    description: "अचarya अंकित शुक्ल द्वारा आध्यात्मिक फेस रीडिंग परामर्श।",
    openGraph: {
        title: "Face Reading Consultation | Hello Acharya Ji",
        description: "अचarya अंकित शुक्ल द्वारा आध्यात्मिक फेस रीडिंग परामर्श।",
        locale: "hi_IN",
        type: "website",
    },
};

export default function FaceReadingPage() {
    return <FaceReadingClient />;
}
