import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";

import "./globals.css";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "TransAI",
  description: "TransAI leverages advanced AI technology to provide seamless and accurate translation services, bridging language barriers and enhancing communication across cultures.",
};

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-instrument-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${sans.className} antialiased`}>
        <div>
          <Header />

          <main className="pt-navigation-height bg-page-gradient relative">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
