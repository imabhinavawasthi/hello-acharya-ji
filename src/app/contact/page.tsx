import { Metadata } from "next";
import { ContactClient } from "@/components/ContactClient";

export const metadata: Metadata = {
    title: "Contact | Hello Acharya Ji",
    description: "संपर्क करें — आचार्य अंकित शुक्ल, फेस रीडिंग एवं ज्योतिष परामर्श।",
    openGraph: {
        title: "Contact | Hello Acharya Ji",
        description: "संपर्क करें — आचार्य अंकित शुक्ल, फेस रीडिंग एवं ज्योतिष परामर्श।",
        locale: "hi_IN",
        type: "website",
    },
};

export default function ContactPage() {
    return <ContactClient />;
}
