export const en = {
  nav: {
    thesis:    "THESIS",
    formula:   "APPROACH",
    portfolio: "PORTFOLIO",
    team:      "TEAM",
    contact:   "CONTACT",
    investors: "INVESTORS",
  },
  hero: {
    tag:      "RETAIL · BLOCKCHAIN · AI",
    h1a:      "Driving the future where",
    h1b:      "retail",
    h1c:      "and",
    h1d:      "technology",
    h1e:      "converge",
    sub:      "A synergistic ecosystem of startups combining retail tech, real-world asset tokenization, and artificial intelligence to transform the industry.",
    stats: [
      { num: "+4M",  label: "ACTIVE USERS" },
      { num: "+8K",  label: "CONNECTED BRANDS" },
      { num: "2.5M", label: "MONTHLY TXN" },
      { num: "3K+",  label: "MERCHANTS" },
    ],
    network: [
      { name: "IRSA",      desc: "16 premium malls" },
      { name: "ENDEAVOR",  desc: "High-impact network" },
      { name: "ARCAP",     desc: "+60 leading VC funds" },
      { name: "WORKPLACE", desc: "+50 startups in cowork" },
    ],
  },
  thesis: {
    tag:   "OUR THESIS",
    h2:    "Three pillars, one ecosystem",
    about: "SHEFA was born from <strong>10 years of shared history at Endeavor</strong> between two parallel paths: retail infrastructure and blockchain technology. Today we combine the strength and scale of the <strong>IRSA & Cresud group</strong> with the agility of a model built to identify, invest in, and empower companies transforming the retail experience and decentralized finance.",
    pillars: [
      {
        key:   "retail",
        title: "Retail tech",
        desc:  "Omnichannel solutions connecting brands, consumers, and data. Loyalty, e-commerce, logistics, and marketplaces.",
      },
      {
        key:   "blockchain",
        title: "Blockchain & tokenization",
        desc:  "Infrastructure for tokenizing real-world assets, proprietary stablecoins, and integrated payment solutions.",
        isNew: true,
      },
      {
        key:   "ai",
        title: "AI & autonomous agents",
        desc:  "AI agents that leverage the group's retail-tech infrastructure to automate and scale operations.",
        isNew: true,
      },
    ],
  },
  formula: {
    tag:  "OUR APPROACH",
    h2:   "How we multiply value",
    desc: "A proven formula combining strategic selection, flexible deal structures, and active involvement.",
    items: [
      {
        title: "Ecosystem building",
        desc:  "We select companies with validated businesses and potential to generate synergies with each other and our network.",
      },
      {
        title: "Flexible structures",
        desc:  "Revenue shares, options on future rounds, or direct investment, with ticket sizes tailored to each stage.",
      },
      {
        title: "Long-term vision",
        desc:  "We invest in healthy models at or near break-even that can build sustained value over time.",
      },
      {
        title: "Hands-on involvement",
        desc:  "Active role in portfolio companies. We support daily operations from our shared coworking space.",
      },
    ],
  },
  portfolio: {
    tag:  "PORTFOLIO",
    h2:   "Our companies",
    desc: "A complementary ecosystem solving key challenges across retail, fintech, and Web3.",
    companies: [
      {
        initials: "A",
        name:     "APPA",
        desc:     "Shopping center loyalty app. +3M registered users. Fintech super-app potential with digital payments and stablecoin.",
        tag:      "RETAIL · FINTECH",
        tagKey:   "retail",
      },
      {
        initials: "B",
        name:     "BoulderTech",
        desc:     "Infrastructure for tokenization of financial assets and private-market instruments.",
        tag:      "WEB3 · TOKENIZATION",
        tagKey:   "blockchain",
        isNew:    true,
      },
      {
        initials: "T",
        name:     "Tucán",
        desc:     "E-commerce SaaS, last-mile logistics, and marketing infrastructure. 1.2M deliveries/year.",
        tag:      "RETAIL · LOGISTICS",
        tagKey:   "retail",
      },
      {
        initials: "TC",
        name:     "TurismoCity",
        desc:     "Regional travel price comparison and metasearch platform. Top tourism retailer in LATAM.",
        tag:      "TRAVEL · METASEARCH",
        tagKey:   "travel",
      },
      {
        initials: "Av",
        name:     "Avenida",
        desc:     "Marketplace as a service for banks and enterprise clients. +7,500 sellers onboard.",
        tag:      "RETAIL · MARKETPLACE",
        tagKey:   "retail",
      },
      {
        initials: "IL",
        name:     "IceLabs",
        desc:     "Industrial ice cream producer: Chocorisimo, Persicco & Guapaletas. +1,500 selling points across Argentina & Chile.",
        tag:      "FOOD · CONSUMER",
        tagKey:   "food",
        isNew:    true,
      },
    ],
  },
  team: {
    tag:  "TEAM",
    h2:   "Leadership",
    desc: "Combined experience in real estate, retail tech, blockchain, and venture capital.",
    members: [
      { initials: "BE", name: "Ben Elsztain",    role: "MANAGING PARTNER",   colorKey: "accent" },
      { initials: "RS", name: "Ricardo Schulte",  role: "INVESTMENT OFFICER", colorKey: "retail" },
      { initials: "RB", name: "Rodrigo Benzaquen", role: "MANAGING PARTNER", colorKey: "blockchain", isNew: true },
    ],
  },
  cta: {
    h2:     "Join the future of retail",
    desc:   "We're one message away from creating value and transforming the future together.",
    btn:    "GET IN TOUCH",
    email:  "rodrigo@bouldertech.fi",
  },
  footer: {
    copy:    "Shefa Holdings® 2026 — All rights reserved",
    privacy: "Privacy policy",
  },
};

type Stringified<T> = T extends string ? string : T extends readonly (infer U)[] ? Stringified<U>[] : { [K in keyof T]: Stringified<T[K]> };
export type Lang = Stringified<typeof en>;
