import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import EcosystemBento from "@/components/EcosystemBento";
import Thesis from "@/components/Thesis";
import VsSection from "@/components/VsSection";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <EcosystemBento />
        <Thesis />
        <VsSection />
        <Portfolio />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
