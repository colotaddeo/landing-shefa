import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EcosystemMap from "@/components/EcosystemMap";
import Thesis from "@/components/Thesis";
import VsSection from "@/components/VsSection";
import WorkplacePartner from "@/components/WorkplacePartner";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  applicationName: "SHEFA Holdings",
  category: "business",
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
};

function SectionDivider() {
  return <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />;
}

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <SectionDivider />
      <EcosystemMap />
      <SectionDivider />
      <Thesis />
      <VsSection />
      <WorkplacePartner />
      <Portfolio />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
