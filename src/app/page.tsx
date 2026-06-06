import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EcosystemMap from "@/components/EcosystemMap";
import Thesis from "@/components/Thesis";
import VsSection from "@/components/VsSection";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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
      <Portfolio />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
