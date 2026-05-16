import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CLINIC_NAME, TAGLINE } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: CLINIC_NAME,
    template: `%s | ${CLINIC_NAME}`,
  },
  description: `${TAGLINE}. Expert physiotherapy in Indiranagar, Bengaluru. Book your appointment online — same-day slots available.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans bg-background text-gray-800 antialiased">
        {/* Demo banner */}
        <div className="bg-primary text-white text-center text-xs py-2 px-4">
          ✦ Demo &mdash; This is a sample portal. Your clinic&apos;s name and details will replace this content.
        </div>
        <Header />
        <main>{children}</main>
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
