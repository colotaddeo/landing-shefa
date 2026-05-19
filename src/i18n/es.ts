import type { Lang } from "./en";

export const es: Lang = {
  nav: {
    thesis:    "TESIS",
    formula:   "FÓRMULA",
    portfolio: "PORTFOLIO",
    team:      "EQUIPO",
    contact:   "CONTACTO",
    investors: "INVERSORES",
  },
  hero: {
    tag:  "RETAIL · BLOCKCHAIN · AI",
    h1a:  "Impulsamos el futuro donde",
    h1b:  "retail",
    h1c:  "y",
    h1d:  "tecnología",
    h1e:  "convergen",
    sub:  "Un ecosistema sinérgico de startups que combinan retail tech, tokenización de activos reales e inteligencia artificial para transformar la industria.",
    stats: [
      { num: "+4M",  label: "USUARIOS ACTIVOS" },
      { num: "+8K",  label: "MARCAS CONECTADAS" },
      { num: "2.5M", label: "TXN MENSUALES" },
      { num: "3K+",  label: "MERCHANTS" },
    ],
    network: [
      { name: "IRSA",      desc: "16 shoppings premium" },
      { name: "ENDEAVOR",  desc: "Red de alto impacto" },
      { name: "ARCAP",     desc: "+60 fondos referentes" },
      { name: "WORKPLACE", desc: "+50 startups en cowork" },
    ],
  },
  thesis: {
    tag:   "NUESTRA TESIS",
    h2:    "Tres pilares, un ecosistema",
    about: "SHEFA nace de <strong>10 años de historia compartida en Endeavor</strong> entre dos caminos paralelos: la infraestructura de retail y la tecnología blockchain. Hoy combinamos la solidez y escala del grupo <strong>IRSA & Cresud</strong> con la agilidad de un modelo pensado para identificar, invertir y potenciar compañías que transforman la experiencia del retail y las finanzas descentralizadas.",
    pillars: [
      {
        key:   "retail",
        title: "Retail tech",
        desc:  "Soluciones omnicanal que conectan marcas, consumidores y datos. Fidelización, e-commerce, logística y marketplaces.",
      },
      {
        key:   "blockchain",
        title: "Blockchain y tokenización",
        desc:  "Infraestructura para tokenizar activos reales, stablecoins propias y soluciones de pago integradas.",
        isNew: true,
      },
      {
        key:   "ai",
        title: "AI y agentes autónomos",
        desc:  "Agentes de IA que potencian la infraestructura retail-tech del grupo para automatizar y escalar operaciones.",
        isNew: true,
      },
    ],
  },
  formula: {
    tag:  "NUESTRA FÓRMULA",
    h2:   "Cómo multiplicamos valor",
    desc: "Una fórmula probada que combina selección estratégica, estructuras flexibles e involucramiento activo.",
    items: [
      {
        title: "Creamos ecosistema",
        desc:  "Seleccionamos compañías con negocios validados y potencial de generar sinergias entre sí y con nuestro network.",
      },
      {
        title: "Somos flexibles",
        desc:  "Revenue shares, opciones sobre futuras rondas o inversión directa, con tickets ajustados a cada estadío.",
      },
      {
        title: "Largo plazo",
        desc:  "Invertimos en modelos saludables, en break even o próximos, que construyan valor sostenido en el tiempo.",
      },
      {
        title: "Nos involucramos",
        desc:  "Rol activo en las compañías. Acompañamos operación diaria desde nuestro coworking compartido.",
      },
    ],
  },
  portfolio: {
    tag:  "PORTFOLIO",
    h2:   "Nuestras compañías",
    desc: "Un ecosistema de empresas complementarias que resuelven problemas clave del retail, fintech y Web3.",
    companies: [
      {
        initials: "A",
        name:     "APPA",
        desc:     "App de fidelización de shoppings. +3M usuarios registrados. Potencial fintech como super-app financiera.",
        tag:      "RETAIL · FINTECH",
        tagKey:   "retail",
      },
      {
        initials: "B",
        name:     "BoulderTech",
        desc:     "Infraestructura para tokenización de activos financieros y mercados privados.",
        tag:      "WEB3 · TOKENIZACIÓN",
        tagKey:   "blockchain",
        isNew:    true,
      },
      {
        initials: "T",
        name:     "Tucán",
        desc:     "SaaS de e-commerce, logística last-mile y marketing. 1.2M entregas/año.",
        tag:      "RETAIL · LOGÍSTICA",
        tagKey:   "retail",
      },
      {
        initials: "TC",
        name:     "TurismoCity",
        desc:     "Comparador de precios de viajes y metasearch regional líder en LATAM.",
        tag:      "TURISMO · TRAVEL",
        tagKey:   "travel",
      },
      {
        initials: "Av",
        name:     "Avenida",
        desc:     "Marketplace as a service para bancos y enterprise. +7500 sellers onboard.",
        tag:      "RETAIL · MARKETPLACE",
        tagKey:   "retail",
      },
      {
        initials: "IL",
        name:     "IceLabs",
        desc:     "Productor industrial de helados: Chocorisimo, Persicco y Guapaletas. +1500 puntos de venta.",
        tag:      "FOOD · CONSUMER",
        tagKey:   "food",
        isNew:    true,
      },
    ],
  },
  team: {
    tag:  "EQUIPO",
    h2:   "Liderazgo",
    desc: "Experiencia combinada en real estate, retail tech, blockchain y venture capital.",
    members: [
      { initials: "BE", name: "Ben Elsztain",    role: "MANAGING PARTNER",   colorKey: "accent" },
      { initials: "RS", name: "Ricardo Schulte",  role: "INVESTMENT OFFICER", colorKey: "retail" },
      { initials: "RB", name: "Rodrigo Benzaquen", role: "MANAGING PARTNER", colorKey: "blockchain", isNew: true },
    ],
  },
  cta: {
    h2:    "Sumate al futuro del retail",
    desc:  "Estamos a un mensaje de distancia para crear valor y transformar el futuro.",
    btn:   "CONTACTANOS",
    email: "rodrigo@bouldertech.fi",
  },
  footer: {
    copy:    "Shefa Holdings® 2026 — Todos los derechos reservados",
    privacy: "Políticas de privacidad",
  },
};
