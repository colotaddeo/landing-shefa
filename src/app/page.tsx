import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Thesis from "@/components/Thesis";
import Formula from "@/components/Formula";
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
        <Thesis />
        <Formula />
        <Portfolio />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
