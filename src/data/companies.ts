export interface CompanyData {
  slug: string;
  name: string;
  logo?: string;
  logoLight?: string;
  logoHeight?: string;
  tagline: string;
  taglineEs?: string;
  tags: string[];
  tagsEs?: string[];
  isNew?: boolean;
  meta: {
    founded: string;
    stage: string;
    hq: string;
    website?: string;
  };
  metrics: Array<{ num: string; label: string }>;
  metricsEs?: Array<{ num: string; label: string }>;
  about: string;
  aboutEs?: string;
  features: Array<{ title: string; desc: string }>;
  milestones: Array<{ year: string; event: string }>;
  synergies: Array<{ name: string; desc: string }>;
  layoutVersion?: "v1" | "v2";
  banner?: string;
  bannerLight?: string;
  bannerObjectPosition?: string;
  founderImage?: string;
  founderImage2?: string;
  founderLayoutSquare?: boolean;
  founderImageTall?: boolean;
  founderName?: string | string[];
  founderBio?: string;
  founderBioEs?: string;
  socialLinks?: Array<{ platform: "instagram" | "linkedin" | "twitter" | "web" | "youtube" | "facebook"; url: string; label?: string }>;
  productImages?: string[];
  accentColor?: string;
}

export const COMPANIES: CompanyData[] = [
  {
    slug: "appa",
    name: "APPA",
    accentColor: "#4EBE9F",
    logo: "/logos/appa.png",
    tagline: "Customer Fidelity Platform for Shopping Malls",
    taglineEs: "Plataforma de Fidelización para Centros Comerciales",
    tags: ["RETAIL", "FINTECH", "FIDELITY"],
    tagsEs: ["RETAIL", "FINTECH", "FIDELIZACIÓN"],
    layoutVersion: "v2",
    banner: "/portfolio-recursos/appa/banner.png",
    bannerLight: "/portfolio-recursos/appa/bannerLightMode.png",
    founderImage: "/portfolio-recursos/appa/founder.png",
    founderLayoutSquare: true,
    founderName: "Ben Elsztain",
    founderBio: "Founder and CEO of ¡appa!. Visionary with experience identifying opportunities, building teams, and forging connections with the entrepreneurial ecosystem to drive new businesses.",
    founderBioEs: "Fundador y CEO de ¡appa!. Visionario, con experiencia detectando oportunidades, formando equipos y generando vínculos con el ecosistema emprendedor para impulsar nuevos negocios.",
    socialLinks: [
      { platform: "web",       url: "https://www.weareappa.com/" },
      { platform: "instagram", url: "https://www.instagram.com/appa.arg/" },
      { platform: "linkedin",  url: "https://www.linkedin.com/company/appa-arg/" },
      { platform: "youtube",   url: "https://www.youtube.com/@weareappa" },
      { platform: "facebook",  url: "https://www.facebook.com/appa.arg/" },
    ],
    meta: {
      founded: "2015",
      stage: "Growth",
      hq: "Buenos Aires, Argentina",
      website: "appa.com.ar",
    },
    metrics: [
      { num: "+3M",   label: "Registered Users" },
      { num: "16",    label: "Shopping Centers" },
      { num: "+2.8M", label: "Transactions/mo" },
      { num: "4.6★",  label: "App Store Rating" },
    ],
    metricsEs: [
      { num: "+3M",   label: "Usuarios Registrados" },
      { num: "16",    label: "Centros Comerciales" },
      { num: "+2.8M", label: "Transacciones/mes" },
      { num: "4.6★",  label: "Rating App Store" },
    ],
    about:
      "¡Appa! is the loyalty platform of the shopping-center ecosystem, digitizing the relationship between malls, brands, and visitors. Through the app, users access gift cards, parking payments, space reservations, corporate benefits and, more recently, fintech services with in-store POS. With over 3 million registered users and around 550,000 monthly transactions, ¡Appa! has built one of the most valuable, segmented audiences in the country. It ranks among Argentina's most-downloaded consumption apps.",
    aboutEs:
      "¡Appa! es la plataforma de fidelización del ecosistema de centros comerciales, que digitaliza la relación entre shoppings, marcas y visitantes. A través de la app, los usuarios acceden a gift cards, pago de estacionamiento, reserva de espacios, beneficios corporativos y, más recientemente, servicios fintech con POS para locales. Con más de 3 millones de usuarios registrados y unas 550.000 transacciones mensuales, ¡Appa! consolidó una de las audiencias más valiosas y segmentadas del país. Es una de las apps de consumo más descargadas de la Argentina.",
    features: [
      {
        title: "Points & Cashback",
        desc: "A unified rewards system connecting users with brands and services across IRSA's shopping ecosystem — earn on every purchase, redeem anywhere.",
      },
      {
        title: "Digital Wallet",
        desc: "Mobile payments, peer-to-peer transfers, and benefits management in a single app. Coming soon: proprietary stablecoin integration via BoulderTech.",
      },
      {
        title: "AI Personalization",
        desc: "Recommendation engine powered by real-time purchase behavior data to deliver hyper-personalized offers and maximize retention.",
      },
    ],
    milestones: [
      { year: "2015", event: "Launch across IRSA's shopping center network" },
      { year: "2019", event: "Native mobile payments integration" },
      { year: "2022", event: "Surpassed 2 million registered users" },
      { year: "2024", event: "Strategic pivot toward fintech super-app" },
    ],
    synergies: [
      { name: "BoulderTech", desc: "Tokenization of loyalty points to create a transferable on-chain digital asset." },
      { name: "Tucán",       desc: "APPA's 3M users receive personalized push offers from Tucán's merchant network." },
      { name: "Avenida",     desc: "APPA's user base serves as a direct acquisition channel for Avenida's marketplace." },
    ],
  },

  {
    slug: "bouldertech",
    name: "BoulderTech",
    accentColor: "#245BFF",
    logo: "/logos/bouldertech.png",
    logoHeight: "h-7",
    banner: "/portfolio-recursos/bouldertech/banner.png",
    tagline: "Sovereign AI infrastructure",
    taglineEs: "Infraestructura de IA soberana",
    tags: ["WEB3", "AI AGENTS"],
    tagsEs: ["WEB3", "AGENTES DE IA"],
    isNew: true,
    layoutVersion: "v2",
    founderImage: "/portfolio-recursos/bouldertech/founder.png",
    founderLayoutSquare: true,
    founderImageTall: true,
    founderName: "Rodrigo Benzaquen",
    founderBio: "First IT employee at Mercado Libre, where he led the entire infrastructure and datacenter operations, supporting the company's growth from startup to unicorn. Cryptocurrency and blockchain expert.",
    founderBioEs: "Primer empleado IT en Mercado Libre donde lideró toda la infraestructura y operaciones de datacenters, acompañando el crecimiento de la empresa desde startup hasta unicornio. Experto en cryptomonedas y blockchain.",
    socialLinks: [
      { platform: "web",      url: "https://bouldertech.fi/" },
      { platform: "twitter",  url: "https://x.com/_BoulderTech" },
      { platform: "linkedin", url: "https://www.linkedin.com/company/bouldertechfi/" },
    ],
    meta: {
      founded: "2021",
      stage: "Series A",
      hq: "Buenos Aires, Argentina",
      website: "bouldertech.fi",
    },
    metrics: [
      { num: "AI Agents", label: "Own your data" },
      { num: "12",    label: "Active Issuances" },
      { num: "3",     label: "Closed Rounds" },
      { num: "ISO 27001", label: "Certified" },
    ],
    metricsEs: [
      { num: "Agentes IA", label: "Own your data" },
      { num: "12",    label: "Emisiones Activas" },
      { num: "3",     label: "Rondas Cerradas" },
      { num: "ISO 27001", label: "Certificado" },
    ],
    about:
      "BoulderTech is a sovereign AI infrastructure company that operates its own private datacenter with dedicated GPUs and self-hosted language models. Rather than relying on cloud APIs with per-token costs and data crossing borders, it deploys the full stack —from physical hardware to agent orchestration— within the client's environment. Its OpenClaw platform manages production AI agents at high concurrency, while its Data Lakehouse system connects existing databases and transforms them into AI-ready assets in minutes. Built for regulated industries and enterprises that need genuine data sovereignty, predictable latency, and fixed cost at scale.",
    aboutEs:
      "BoulderTech es una empresa de infraestructura de IA soberana que opera su propio datacenter privado con GPUs dedicadas y modelos de lenguaje self-hosted. En lugar de depender de APIs cloud con costos por token y datos que cruzan fronteras, despliega la pila completa —desde el hardware físico hasta la orquestación de agentes— en el entorno del cliente. Su plataforma OpenClaw gestiona agentes de IA en producción con alta concurrencia, mientras que su sistema de Data Lakehouse conecta bases de datos existentes y las transforma en activos listos para IA en minutos. Está orientada a industrias reguladas y empresas que necesitan soberanía de datos real, latencia predecible y costo fijo a escala.",
    features: [
      {
        title: "Real-World Asset Tokenization",
        desc: "End-to-end infrastructure for tokenizing any financial asset — private debt, equity, real estate, and structured products.",
      },
      {
        title: "Compliance & KYC/AML",
        desc: "Built-in regulatory compliance layer with automated KYC/AML workflows for all platform participants, across multiple jurisdictions.",
      },
      {
        title: "Audited Smart Contracts",
        desc: "Battle-tested, third-party audited smart contracts on major EVM-compatible chains with multi-sig governance and upgradeable proxies.",
      },
    ],
    milestones: [
      { year: "2021", event: "Founded by Rodrigo Benzaquen" },
      { year: "2022", event: "First tokenized issuance on mainnet" },
      { year: "2023", event: "ISO 27001 security certification" },
      { year: "2024", event: "Series A fundraising round" },
    ],
    synergies: [
      { name: "APPA",    desc: "Tokenization of APPA's loyalty points to create a liquid, on-chain digital asset." },
      { name: "Avenida", desc: "On-chain payment rails for Avenida's marketplace transactions and instant settlement." },
      { name: "Tucán",   desc: "Tokenized financing instruments for Tucán's merchant network." },
    ],
  },

  {
    slug: "tucan",
    name: "Tucán",
    accentColor: "#FF6B35",
    logo: "/logos/tucan.png",
    logoLight: "/logos/logotucan lightmode.png",
    tagline: "Last-mile logistics & e-commerce for Argentine Retail",
    taglineEs: "Logística last-mile & e-commerce para el Retail Argentino",
    tags: ["RETAIL", "LOGISTICS", "LAST-MILE"],
    tagsEs: ["RETAIL", "LOGÍSTICA", "ÚLTIMA MILLA"],
    layoutVersion: "v2",
    banner: "/portfolio-recursos/tucán/banner2.jpeg",
    founderImage: "/portfolio-recursos/tucán/founder.png",
    founderName: ["Agustín Perrotta", "Facundo Caldora"],
    founderBio: "Agustín Perrotta and Facundo Caldora are the co-founders of Tucán, an AI-powered retail technology startup. Both hold degrees in Computer Engineering from the University of Buenos Aires and combine entrepreneurial, technical, and academic expertise to build technology that transforms the shopping experience.",
    founderBioEs: "Agustín Perrotta y Facundo Caldora son los cofundadores de Tucán, una startup de inteligencia artificial aplicada al retail. Ambos son ingenieros en informática graduados de la UBA y combinan experiencia emprendedora, técnica y académica para desarrollar tecnología que transforma la experiencia de compra.",

    socialLinks: [
      { platform: "web",       url: "https://www.tucan.la/" },
      { platform: "instagram", url: "https://www.instagram.com/tucan.la/" },
      { platform: "linkedin",  url: "https://www.linkedin.com/company/tucanla/" },
    ],
    meta: {
      founded: "2016",
      stage: "Growth",
      hq: "Buenos Aires, Argentina",
    },
    metrics: [
      { num: "1M",    label: "Deliveries / Year" },
      { num: "+8K",   label: "Active Brands" },
      { num: "3K+",   label: "Merchants" },
      { num: "98.2%", label: "On-Time Delivery" },
    ],
    metricsEs: [
      { num: "1M",    label: "Entregas / Año" },
      { num: "+8K",   label: "Marcas Activas" },
      { num: "3K+",   label: "Comercios" },
      { num: "98.2%", label: "Entregas a Tiempo" },
    ],
    about:
      "Tucán is a SaaS platform for e-commerce, logistics, and marketing that lets restaurant chains sell through their own digital channels. Its end-to-end white-label solution manages orders and payments, ensures sub-45-minute deliveries, and reduces dependence on third-party marketplaces that compress margins. It operates in Argentina, Peru, and Chile, with clients such as Rapanui, Tea Connection, and Grido, and has processed over 2.5 million orders in the last three years.",
    aboutEs:
      "Tucán es una plataforma SaaS de e-commerce, logística y marketing que permite a las cadenas gastronómicas vender a través de sus propios canales digitales. Su solución white-label end-to-end gestiona pedidos y pagos, garantiza entregas en menos de 45 minutos y reduce la dependencia de los marketplaces de terceros que comprimen los márgenes. Opera en Argentina, Perú y Chile, con clientes como Rapanui, Tea Connection y Grido, y procesó más de 2,5 millones de pedidos en los últimos tres años.",
    features: [
      {
        title: "Omnichannel E-Commerce SaaS",
        desc: "Full-featured storefront builder with native integrations for Argentina's major marketplaces, payment gateways, and ERP systems.",
      },
      {
        title: "Proprietary Last-Mile Logistics",
        desc: "In-house delivery network covering major Argentine cities with a 98.2% on-time delivery rate and real-time tracking.",
      },
      {
        title: "Marketing & Analytics",
        desc: "Performance marketing automation and a unified analytics dashboard for data-driven decisions across every channel.",
      },
    ],
    milestones: [
      { year: "2016", event: "Founded — e-commerce SaaS launch" },
      { year: "2019", event: "Proprietary last-mile logistics network launch" },
      { year: "2021", event: "Crossed 1 million deliveries per year" },
      { year: "2023", event: "Regional expansion to neighboring markets" },
    ],
    synergies: [
      { name: "APPA",    desc: "Merchant offers and promotions pushed directly to APPA's 3M users." },
      { name: "Avenida", desc: "Tucán provides fulfillment and last-mile logistics for Avenida's marketplace sellers." },
      { name: "IceLabs", desc: "Distribution and e-commerce infrastructure for IceLabs' product lines." },
    ],
  },

  {
    slug: "turismocity",
    name: "TurismoCity",
    accentColor: "#00AEEF",
    logo: "/logos/turismocity.png",
    banner: "/portfolio-recursos/turismocity/banner.png",
    tagline: "Flight, Hotel & Travel Assistance Metasearch Engine",
    taglineEs: "Metabuscador de Vuelos, Hoteles & Asistencia al Viajero",
    tags: ["TRAVEL", "METASEARCH"],
    tagsEs: ["VIAJES", "METABÚSQUEDA"],
    layoutVersion: "v2",
    founderImage: "/portfolio-recursos/turismocity/founders.png",
    founderName: ["Andrés Malenky", "Julián Gurfinkiel", "Martín Levy"],
    founderBio: "Andrés Malenky, Julián Gurfinkiel, and Martín Levy are the co-founders of Turismocity, one of Latin America's leading travel search and comparison platforms. Combining expertise in entrepreneurship, e-commerce, marketing, technology, and business development, they built a company that transformed the way millions of users discover flights, hotels, and travel services.",
    founderBioEs: "Andrés Malenky, Julián Gurfinkiel y Martín Levy son los cofundadores de Turismocity, una de las plataformas de búsqueda y comparación de viajes líderes de Latinoamérica. Con una combinación de experiencia en emprendimiento, e-commerce, marketing, tecnología y desarrollo de negocios, construyeron una compañía que transformó la forma en que millones de usuarios encuentran vuelos, hoteles y servicios turísticos.",
    socialLinks: [
      { platform: "web",       url: "https://www.turismocity.com.ar/" },
      { platform: "linkedin",  url: "https://www.linkedin.com/company/turismocity/" },
      { platform: "instagram", url: "https://www.instagram.com/turismocity_ar/" },
    ],
    meta: {
      founded: "2011",
      stage: "Mature",
      hq: "Buenos Aires, Argentina",
      website: "turismocity.com",
    },
    metrics: [
      { num: "+22M", label: "Clicks / Year" },
      { num: "200+", label: "Airlines" },
      { num: "+1M",  label: "Hotels" },
      { num: "15",   label: "Countries" },
    ],
    about:
      "Turismocity is Latin America's leading travel metasearch, simplifying planning by letting users compare flight, hotel, and package prices in a single search. It is the third most-searched travel brand in the region and the second in flight sales in Argentina. Through its platform it originates more than US$350 million in annual travel sales, combining packages, hotels, and traveler assistance with its core metasearch business.",
    aboutEs:
      "Turismocity es el principal metabuscador de viajes de América Latina, que simplifica la planificación al permitir comparar precios de vuelos, hoteles y paquetes en una sola búsqueda. Es la tercera marca de viajes más buscada de la región y la segunda en venta de vuelos en la Argentina. A través de su plataforma origina más de US$350 millones en ventas de viajes al año, sumando paquetes, hoteles y asistencia al viajero a su negocio de metabúsqueda.",
    features: [
      {
        title: "Real-Time Flight Comparison",
        desc: "Aggregates fares from 200+ airlines and OTAs in real time, with price-drop alerts and flexible date search tools.",
      },
      {
        title: "Hotel & Accommodation",
        desc: "1M+ properties across LATAM with verified reviews, advanced filters, and instant booking confirmation.",
      },
      {
        title: "Packages & Experiences",
        desc: "Curated travel packages and unique local experiences for the rapidly growing LATAM middle-class traveler segment.",
      },
    ],
    milestones: [
      { year: "2011", event: "Founded in Buenos Aires" },
      { year: "2015", event: "Became #1 travel metasearch in Argentina" },
      { year: "2018", event: "Regional expansion across LATAM" },
      { year: "2022", event: "Surpassed 10M monthly active users" },
    ],
    synergies: [
      { name: "APPA",    desc: "APPA users earn loyalty points on every TurismoCity booking." },
      { name: "Avenida", desc: "TurismoCity travel products distributed through Avenida's bank marketplace clients." },
    ],
  },

  {
    slug: "avenida",
    name: "Avenida",
    accentColor: "#3E63DD",
    logo: "/logos/avenida.png",
    logoLight: "/logos/avenidaparalightmode.png",
    banner: "/portfolio-recursos/avenidamas/banner.png",
    logoHeight: "h-9",
    tagline: "Marketplace Whitelabel as a Service",
    taglineEs: "Marketplace Whitelabel como Servicio",
    tags: ["RETAIL", "MARKETPLACE"],
    tagsEs: ["RETAIL", "MARKETPLACE"],
    layoutVersion: "v2",
    founderImage: "/portfolio-recursos/avenidamas/founder.jpeg",
    founderLayoutSquare: true,
    founderName: "Daniel Jejcic",
    founderBio: "Founder & CEO of Avenida+, a platform that enables banks and fintechs across Latin America to launch their own marketplaces and embedded commerce ecosystems, with 15+ years building companies at the intersection of fintech and e-commerce. Co-creator of AI In Latam, the leading event series on artificial intelligence in the region.",
    founderBioEs: "Founder & CEO de Avenida+, plataforma que permite a bancos y fintechs de Latinoamérica lanzar sus propios marketplaces y ecosistemas de comercio embebido, con más de 15 años construyendo empresas en la intersección del fintech y el e-commerce. Co-creador de AI In Latam, la serie de eventos líderes sobre inteligencia artificial en la región.",
    socialLinks: [
      { platform: "web",      url: "https://avenidamas.com/" },
      { platform: "linkedin", url: "https://www.linkedin.com/company/avenidamas/" },
    ],
    meta: {
      founded: "2013",
      stage: "Growth",
      hq: "Buenos Aires, Argentina",
      website: "avenida.com",
    },
    metrics: [
      { num: "+7.5K",  label: "Onboarded Sellers" },
      { num: "15",     label: "Enterprise Clients" },
      { num: "$200M+", label: "GMV Processed" },
      { num: "99.5%",  label: "Platform Uptime" },
    ],
    about:
      "Avenida+ is a B2B marketplace-as-a-service solution that lets banks and corporations build and manage their own marketplace, turning loyalty programs into monetizable digital ecosystems. It features over 6,500 integrated sellers and a catalog of more than 100,000 products, spanning traditional categories and specialized segments. It powers portals for five banks in Argentina, through which over 40,000 buyers transact, and is advancing its regional expansion into Mexico, Colombia, and Panama.",
    aboutEs:
      "Avenida+ es una solución B2B de marketplace as a service que permite a bancos y corporaciones crear y gestionar su propio marketplace, transformando los programas de fidelización en ecosistemas digitales monetizables. Cuenta con más de 6.500 vendedores integrados y un catálogo de más de 100.000 productos, desde categorías tradicionales hasta segmentos especializados. Opera portales para cinco bancos en la Argentina, por los que transaccionan más de 40.000 compradores, y avanza en su expansión regional hacia México, Colombia y Panamá.",
    features: [
      {
        title: "White-Label Marketplace Platform",
        desc: "Fully configurable marketplace engine with custom branding, category management, seller workflows, and deep API integrations.",
      },
      {
        title: "Pre-Onboarded Seller Network",
        desc: "Instant access to 7,500+ verified sellers across all major product categories — go live in weeks, not months.",
      },
      {
        title: "Integrated Checkout & Payments",
        desc: "PCI-compliant checkout supporting all major Argentine payment methods, installments, digital wallets, and on-chain settlement.",
      },
    ],
    milestones: [
      { year: "2013", event: "Founded — marketplace platform v1" },
      { year: "2017", event: "First major bank as enterprise client" },
      { year: "2020", event: "Crossed $100M cumulative GMV" },
      { year: "2023", event: "Crossed $200M cumulative GMV" },
    ],
    synergies: [
      { name: "Tucán",       desc: "Tucán provides end-to-end fulfillment and last-mile logistics for Avenida's sellers." },
      { name: "APPA",        desc: "APPA's 3M users become instant buyers in Avenida-powered bank marketplaces." },
      { name: "BoulderTech", desc: "On-chain payment infrastructure and instant settlement for Avenida's checkout." },
    ],
  },

  {
    slug: "icelabs",
    name: "IceLabs",
    accentColor: "#00C5F9",
    logo: "/logos/icelabs.png",
    logoLight: "/logos/icelabs-lightmode.png",
    banner: "/portfolio-recursos/icelabs/banner.png",
    bannerObjectPosition: "center 20%",
    tagline: "Ice Cream & Chocolate Manufacturer and Distributor",
    taglineEs: "Fabricante & Distribuidor de Helados y Chocolate",
    tags: ["FOOD", "CONSUMER"],
    tagsEs: ["ALIMENTOS", "CONSUMO"],
    isNew: true,
    layoutVersion: "v2",
    founderImage: "/portfolio-recursos/icelabs/founder.png",
    founderLayoutSquare: true,
    founderName: "Esteban Wolf",
    founderBio: "Esteban Wolf is an Argentine businessman and entrepreneur, CEO of Chocorísimo, Persicco, Guapaletas, and Abuela Goye. Primarily shaped by hands-on business experience, he complemented his background with executive studies at IAE Business School.",
    founderBioEs: "Esteban Wolf es un empresario y emprendedor argentino, CEO de Chocorísimo, Persicco, Guapaletas y Abuela Goye. Formado principalmente en la práctica empresarial, complementó su experiencia con estudios ejecutivos en el IAE Business School.",
    socialLinks: [
      { platform: "web",      url: "https://guapaletas.com/",                        label: "Guapaletas" },
      { platform: "web",      url: "https://persicco.com.ar/",                       label: "Persicco" },
      { platform: "web",      url: "https://www.chocorisimo.com/",                   label: "Chocorísimo" },
      { platform: "instagram", url: "https://www.instagram.com/abuela_goye",         label: "Abuela Goye" },
    ],
    meta: {
      founded: "2018",
      stage: "Expansion",
      hq: "Buenos Aires, Argentina",
    },
    metrics: [
      { num: "5",     label: "Own Brands" },
      { num: "3",     label: "Brands" },
      { num: "2",     label: "Countries" },
      { num: "+30%",  label: "YoY Growth" },
    ],
    about:
      "IceLabs is an ice cream platform born from the evolution of Chocorisimo, combining a high-capacity certified production plant with a portfolio of complementary brands. After consolidating its industrial strength —including B2B agreements such as ALSEA through Burger King— it acquired two iconic Argentine brands, Guapaletas and Persicco, on exceptionally favorable terms. Today it integrates a mass-market family brand, a premium one, and an innovation-driven one, with a multichannel strategy to consolidate a fragmented market.",
    aboutEs:
      "Icelabs es una plataforma heladera nacida de la evolución de Chocorisimo, que combina una planta de producción certificada de alta capacidad con un portfolio de marcas complementarias. Tras consolidar su fortaleza industrial —incluyendo acuerdos B2B como el de ALSEA a través de Burger King—, adquirió dos marcas icónicas argentinas, Guapaletas y Persicco, en condiciones excepcionalmente favorables. Hoy integra una marca masiva y familiar, una premium y una orientada a la innovación, con una estrategia multicanal para consolidar un mercado fragmentado.",
    features: [
      {
        title: "Chocorisimo",
        desc: "The iconic chocolate-covered ice cream bar present in over 800 kiosks and convenience stores — a beloved Argentine staple since the 1990s.",
      },
      {
        title: "Persicco",
        desc: "Premium artisan-quality ice cream and pastry with flagship stores in Buenos Aires' most iconic neighborhoods and malls.",
      },
      {
        title: "Guapaletas",
        desc: "Fresh, artisan paletas (popsicles) in bold, seasonal flavors — the fastest-growing format in the Argentine and Chilean markets.",
      },
    ],
    milestones: [
      { year: "2018", event: "Acquisition of Chocorisimo" },
      { year: "2020", event: "Persicco brand expansion and new flagship stores" },
      { year: "2022", event: "Entry into Chile with Guapaletas" },
      { year: "2024", event: "New industrial production facility" },
    ],
    synergies: [
      { name: "Tucán",  desc: "E-commerce and last-mile distribution infrastructure for IceLabs' product lines." },
      { name: "APPA",   desc: "Loyalty points redeemable for IceLabs products at IRSA shopping center locations." },
    ],
  },
];

export function getCompany(slug: string): CompanyData | undefined {
  return COMPANIES.find((c) => c.slug === slug);
}
