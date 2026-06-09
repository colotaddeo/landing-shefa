"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";

/*
 * JsonLd renders both Organization and WebSite schema structured data.
 * "use client" to access the active language from context but defer injection
 * to the client so it does not compete with server-side <head> hydration.
 */

export default function JsonLd() {
  const { lang } = useLang();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent layout shifts by not rendering until client mount
  if (!mounted) return null;

  const isEs = lang === "es";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SHEFA Holdings",
    alternateName: "SHEFA",
    url: "https://shefa.holdings",
    logo: "https://shefa.holdings/logoshefa.png",
    description: isEs
      ? "Ecosistema sinérgico de startups que combinan tecnología retail, tokenización de activos del mundo real e inteligencia artificial."
      : "A synergistic ecosystem of startups combining retail tech, real-world asset tokenization, and artificial intelligence.",
    sameAs: [
      "https://www.linkedin.com/company/shefa-holdings",
    ],
    areaServed: {
      "@type": "Continent",
      name: "Latin America",
    },
    employee: [
      {
        "@type": "Person",
        name: "Ben Elsztain",
        jobTitle: "Managing Partner",
        url: "https://www.linkedin.com/in/ben-elsztain-a23537ba/",
      },
      {
        "@type": "Person",
        name: "Ricardo Schulte",
        jobTitle: "Investment Officer",
        url: "https://www.linkedin.com/in/ricardoschulte/",
      },
      {
        "@type": "Person",
        name: "Rodrigo Benzaquen",
        jobTitle: "Managing Partner",
        url: "https://www.linkedin.com/in/rbenzaquen/",
      },
    ],
    memberOf: [
      {
        "@type": "Organization",
        name: "Endeavor",
        url: "https://endeavor.org",
      },
      {
        "@type": "Organization",
        name: "ARCAP",
        url: "https://www.arcap.com.ar",
      },
    ],
    knowsAbout: [
      "Retail Technology",
      "Blockchain",
      "AI",
      "Tokenization",
      "Venture Capital",
      "E-commerce",
      "Last Mile Logistics",
    ],
    subOrganization: [
      {
        "@type": "Organization",
        name: "APPA",
        url: "https://www.weareappa.com/",
      },
      {
        "@type": "Organization",
        name: "BoulderTech",
        url: "https://bouldertech.fi/",
      },
      {
        "@type": "Organization",
        name: "Tucán",
        url: "https://www.tucan.la/",
      },
      {
        "@type": "Organization",
        name: "TurismoCity",
        url: "https://www.turismocity.com.ar/",
      },
      {
        "@type": "Organization",
        name: "Avenida",
        url: "https://avenidamas.com/",
      },
      {
        "@type": "Organization",
        name: "IceLabs",
        url: "https://guapaletas.com/",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SHEFA Holdings",
    url: "https://shefa.holdings",
    inLanguage: isEs ? "es-ES" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://shefa.holdings/portfolio/{search_term_string}/",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
