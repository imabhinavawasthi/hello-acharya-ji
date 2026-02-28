import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from 'nextjs-toploader';
import { LanguagePreferenceModal } from "@/components/LanguagePreferenceModal";
import { SpeedDial } from "@/components/SpeedDial";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hello Acharya Ji - Vedic Astrology & Face Reading",
  description: "Acharya Ankit Shukla (Premanand) - Expert in Vedic Astrology & Face Reading",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <NextTopLoader
          color="#eab308"
          height={2}
          showSpinner={false}
          shadow="0 0 10px #eab308,0 0 5px #eab308"
        />
        <LanguageProvider>
          <LanguagePreferenceModal />
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1 relative z-10">{children}</main>
          <Footer />
          <SpeedDial />
          <Toaster position="bottom-center" toastOptions={{ className: "dark:bg-card dark:border-primary/20" }} />
        </LanguageProvider>
      </body>
    </html>
  );
}
