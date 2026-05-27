export interface CompanyData {
  slug: string;
  name: string;
  logo?: string;
  logoHeight?: string;
  tagline: string;
  tags: string[];
  isNew?: boolean;
  meta: {
    founded: string;
    stage: string;
    hq: string;
    website?: string;
  };
  metrics: Array<{ num: string; label: string }>;
  about: string;
  features: Array<{ title: string; desc: string }>;
  milestones: Array<{ year: string; event: string }>;
  synergies: Array<{ name: string; desc: string }>;
}

export const COMPANIES: CompanyData[] = [
  {
    slug: "appa",
    name: "APPA",
    logo: "/logos/appa.png",
    tagline: "Argentina's largest retail loyalty super-app",
    tags: ["RETAIL", "FINTECH"],
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
    about:
      "APPA started as the official loyalty app for IRSA's shopping centers. Today it has evolved into a comprehensive lifestyle platform connecting over 3 million users with exclusive benefits, cashback rewards, and integrated financial services. With a presence across all 16 of IRSA's premium malls and a growing fintech vertical, APPA is positioned to become Argentina's definitive retail financial super-app.",
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
    logo: "/logos/bouldertech.png",
    logoHeight: "h-7",
    tagline: "Blockchain infrastructure for the real economy",
    tags: ["WEB3", "TOKENIZATION"],
    isNew: true,
    meta: {
      founded: "2021",
      stage: "Series A",
      hq: "Buenos Aires, Argentina",
      website: "bouldertech.fi",
    },
    metrics: [
      { num: "$50M+", label: "Tokenized Assets" },
      { num: "12",    label: "Active Issuances" },
      { num: "3",     label: "Closed Rounds" },
      { num: "ISO 27001", label: "Certified" },
    ],
    about:
      "BoulderTech builds Latin America's most robust tokenization platform. It enables investment funds, companies, and banks to issue, manage, and transfer tokenized financial assets with full regulatory compliance. From private debt to real estate, BoulderTech democratizes access to markets previously reserved for large institutional investors.",
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
    logo: "/logos/tucan.png",
    tagline: "The e-commerce SaaS powering Argentine retail",
    tags: ["RETAIL", "LOGISTICS"],
    meta: {
      founded: "2016",
      stage: "Growth",
      hq: "Buenos Aires, Argentina",
    },
    metrics: [
      { num: "1.2M",  label: "Deliveries / Year" },
      { num: "+8K",   label: "Active Brands" },
      { num: "3K+",   label: "Merchants" },
      { num: "98.2%", label: "On-Time Delivery" },
    ],
    about:
      "Tucán is the all-in-one platform for brands and retailers looking to grow in the digital channel. It combines a world-class e-commerce SaaS with proprietary last-mile logistics, performance marketing solutions, and integrated analytics tools. With 1.2 million deliveries per year and over 8,000 active brands, Tucán is the operational backbone of its clients' e-commerce.",
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
    logo: "/logos/turismocity.png",
    tagline: "LATAM's leading travel metasearch platform",
    tags: ["TRAVEL", "METASEARCH"],
    meta: {
      founded: "2011",
      stage: "Mature",
      hq: "Buenos Aires, Argentina",
      website: "turismocity.com",
    },
    metrics: [
      { num: "+10M", label: "Monthly Searches" },
      { num: "200+", label: "Airlines" },
      { num: "+1M",  label: "Hotels" },
      { num: "15",   label: "Countries" },
    ],
    about:
      "TurismoCity is the largest Spanish-language flight and hotel price comparison platform in Latin America. With over 10 million monthly searches, it compares real-time fares from 200+ airlines and over one million properties across 15 countries. Its asset-light metasearch model generates revenue without managing inventory, delivering exceptional margins at scale.",
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
    logo: "/logos/avenida.png",
    logoHeight: "h-9",
    tagline: "Marketplace as a Service for banks and enterprise",
    tags: ["RETAIL", "MARKETPLACE"],
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
      "Avenida transforms banks, fintechs, and enterprise companies into e-commerce operators with its white-label marketplace platform. Instead of building from scratch, clients launch fully customized marketplaces with immediate access to 7,500+ pre-onboarded sellers. With $200M+ in GMV processed, Avenida has become the B2B marketplace standard in Latin America.",
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
    logo: "/logos/icelabs.png",
    tagline: "The most innovative consumer group in ice cream",
    tags: ["FOOD", "CONSUMER"],
    isNew: true,
    meta: {
      founded: "2018",
      stage: "Expansion",
      hq: "Buenos Aires, Argentina",
    },
    metrics: [
      { num: "+1.5K", label: "Selling Points" },
      { num: "3",     label: "Brands" },
      { num: "2",     label: "Countries" },
      { num: "+30%",  label: "YoY Growth" },
    ],
    about:
      "IceLabs is SHEFA's consumer-goods arm: an industrial ice cream producer with three highly recognized brands. Chocorisimo dominates the kiosk channel nationwide, Persicco leads the premium segment with artisan-quality recipes, and Guapaletas is capturing the fast-growing artisan paleta format. With over 1,500 selling points in Argentina and Chile, IceLabs combines industrial scale with consumer-loved brands.",
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
