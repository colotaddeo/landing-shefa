import type { Metadata } from "next";
import { Inter, DM_Serif_Display, Kalam } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-kalam",
});

export const metadata: Metadata = {
  title: "SHEFA — Retail · Blockchain · AI",
  description:
    "A synergistic ecosystem of startups combining retail tech, real-world asset tokenization, and artificial intelligence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${kalam.variable}`}>
      <body className="bg-shefa-dark text-shefa-text antialiased font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
