import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — SHEFA",
  description: "Get in touch with SHEFA Holdings.",
};

export default function ContactPage() {
  return <ContactForm />;
}
