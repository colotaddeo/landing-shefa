import type { Metadata, Viewport } from "next";
import { Inter, DM_Serif_Display, Kalam } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import JsonLd from "@/components/JsonLd";

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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#11141c" },
    { media: "(prefers-color-scheme: light)", color: "#f4f5f7" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://shefa.holdings"),
  title: {
    default: "SHEFA Holdings — Retail · Blockchain · AI",
    template: "%s — SHEFA Holdings",
  },
  description:
    "SHEFA Holdings is a synergistic ecosystem of startups combining retail tech, real-world asset tokenization, and artificial intelligence. Backed by IRSA & Endeavor.",
  keywords: [
    "SHEFA Holdings",
    "retail tech",
    "blockchain",
    "AI",
    "tokenization",
    "venture capital",
    "Endeavor",
    "IRSA",
    "LATAM startups",
    "retail innovation",
    "real world assets",
    "fintech",
    "e-commerce",
    "BoulderTech",
    "APPA",
    "Tucán",
    "Avenida",
    "TurismoCity",
    "IceLabs",
  ],
  authors: [{ name: "SHEFA Holdings" }],
  creator: "SHEFA Holdings",
  publisher: "SHEFA Holdings",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_ES",
    siteName: "SHEFA Holdings",
    title: "SHEFA Holdings — Retail · Blockchain · AI",
    description:
      "A synergistic ecosystem of startups combining retail tech, real-world asset tokenization, and artificial intelligence.",
    url: "https://shefa.holdings",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SHEFA Holdings — Retail, Blockchain & AI Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHEFA Holdings — Retail · Blockchain · AI",
    description:
      "A synergistic ecosystem of startups combining retail tech, real-world asset tokenization, and artificial intelligence.",
    images: ["/og-image.jpg"],
    creator: "@shefa_holdings",
  },
  alternates: {
    canonical: "https://shefa.holdings",
    languages: {
      "en-US": "https://shefa.holdings",
      "es-ES": "https://shefa.holdings",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#30BCDB",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSerif.variable} ${kalam.variable}`} suppressHydrationWarning>
      <body className="bg-shefa-dark text-shefa-text antialiased font-sans">
        <ThemeProvider>
          <LanguageProvider>
            <JsonLd />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
