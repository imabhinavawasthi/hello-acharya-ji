import { Metadata } from "next";
import { HomeClient } from "@/components/HomeClient";

// Server Component for SEO Metadata Injection
export const metadata: Metadata = {
  title: "Hello Acharya Ji | Face Reading Expert",
  description: "Spiritual astrology consultation by Acharya Ankit Shukla (Premanand)",
  openGraph: {
    title: "Hello Acharya Ji | Face Reading Expert",
    description: "Spiritual astrology consultation by Acharya Ankit Shukla (Premanand)",
    locale: "hi_IN",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}
