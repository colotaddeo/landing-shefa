import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SHEFA Holdings. We invest in and accelerate companies transforming retail, blockchain, and AI across Latin America.",
  openGraph: {
    title: "Contact — SHEFA Holdings",
    description:
      "Get in touch with SHEFA Holdings. We invest in and accelerate companies transforming retail, blockchain, and AI across Latin America.",
    url: "https://shefa.holdings/contact/",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact SHEFA Holdings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact — SHEFA Holdings",
    description:
      "Get in touch with SHEFA Holdings. We invest in and accelerate companies transforming retail, blockchain, and AI across Latin America.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://shefa.holdings/contact/",
  },
};

export default function ContactPage() {
  return <ContactForm />;
}
