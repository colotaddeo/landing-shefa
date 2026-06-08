import type { Lang } from "./en";

export const es: Lang = {
  nav: {
    ecosystem: "ECOSISTEMA",
    value:     "VALOR",
    vs:        "VS. FONDO PRIVADO",
    portfolio: "PORTFOLIO",
    team:      "EQUIPO",
    contact:   "CONTACTO",
    investors: "Contacto",
  },
  hero: {
    videoId: "D1pDcu5Nmys",
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
    diagram: {
      headline:      "Devolvemos el control a los retailers",
      subheadline:   "Cuando un usuario compra online, la plataforma intermedia el contacto entre él y la marca. Conoce qué buscó, qué le interesa, qué compró. El comercio queda ciego a esta información.",
      cliente:         "Cliente",
      retailer:        "Retailer",
      clienteLabel:    "CLIENTE",
      retailerLabel:   "RETAILER",
      marketplace:     "Grandes Plataformas",
      intermediario:   "intermediario",
      conIntermediario:"con intermediario",
      conTucan:        "con TUCÁN",
      tucanLabel:      "TUCÁN · directo · ~5%",
      pillMoney:       "Dinero",
      pillFidelity:    "Fidelización",
    },
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
  vs: {
      eyebrow: "ESTRUCTURA SHEFA",
      title: "¿Por qué Shefa es una Holding y no un fondo? ¿Y por qué hará oferta pública?",
      subtitle: "Creación de valor en el largo plazo alineada con retorno para inversores",
      col1: "Fondo VC",
      col2: "SHEFA Holding",
      rows: [
        {
          label: "Accesibilidad para inversores",
          vc: "Ticket alto, acceso restringido, pocas ventanas de entrada",
          shefa: "A partir de 1 acción, ticket accesible",
        },
        {
          label: "Deployment de fondos",
          vc: "<em>Spray and Pray</em>",
          shefa: "Empresas cuidadosamente elegidas, profundamente acompañadas",
        },
        {
          label: "Formato de inversión",
          vc: "SAFE, en el marco de rondas con 3ros",
          shefa: "Acuerdos ad-hoc, con protective provisions",
        },
        {
          label: "Involucramiento en los negocios",
          vc: "Presión para alcanzar exits",
          shefa: "Incrementar Net Asset Value",
        },
        {
          label: "Estructura de liquidez",
          vc: "Sujeta a plazo predefinido (7 a 10 años)",
          shefa: "Permanente, vía listing de la holding",
        },
      ],
    },
  portfolio: {
    tag:         "PORTFOLIO",
    h2:          "Nuestro Portfolio",
    mobileTitle: "Nuestro Portfolio",
    desc: "Somos un vehículo enfocado en invertir y potenciar compañías que transforman el retail combinando la solidez del Grupo IRSA & Cresud con la agilidad de un modelo emprendedor.",
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
  ecosystem: {
      eyebrow:    "ECOSISTEMA",
      subtitle:   "Somos un vehículo de inversión enfocado en respaldar y acelerar empresas que están transformando el retail, combinando la fortaleza del Grupo IRSA con la agilidad de un modelo empresarial.",
      h2a:        "La ",
      h2b:        "masa crítica",
      h2c:        " que potencia el ",
      h2d:        "retail",
      irsa: {
        anchor: "Socio Ancla",
        desc:   "IRSA posee y opera 16 shoppings premium en Argentina. Las startups de SHEFA se integran directamente al ecosistema físico de IRSA.",
        stat1Num: "+16",
        stat1Label: "Shoppings Premium",
        stat2Num: "4M+",
        stat2Label: "Visitantes Anuales",
      },
      activeUsers: {
        label:   "USUARIOS ACTIVOS",
        caption: "Entre APPA y Tucán, el ecosistema SHEFA alcanza más de 4 millones de usuarios activos mensuales.",
      },
      endeavor: {
        label: "Endeavor Global",
        desc:  "SHEFA es una startup Endeavor-growing, respaldada por una red global de emprendedores y mentores.",
      },
      arcap: {
        label: "ARCAP VC",
        desc:  "Parte del portfolio de ARCAP — una red de +60 fondos de venture capital referentes en Argentina.",
      },
      brands: {
        label:   "MARCAS CONECTADAS",
        caption: "La plataforma de Tucán conecta más de 8.000 marcas con sus consumidores finales a través de marketing integrado.",
      },
      workplace: {
        label: "Workplace Cowork",
        cta:   "Ver Nuestro Portfolio",
        desc:  "La base de SHEFA — una comunidad vibrante de +50 startups en Buenos Aires.",
      },
      monthlyTxn: {
        label: "TRANSACCIONES MENSUALES",
      },
      merchants: {
        label:   "MERCHANTS",
        caption: "La logística y la infraestructura de checkout de Tucán soporta más de 3.000 merchants a nivel nacional.",
      },
      partnersEyebrow: "SOCIOS ESTRATÉGICOS",
      netTitle: "Nuestro Network Único",
      net1Num: "16",       net1Label: "Shoppings Premium",
      net2Num: "+1.500",   net2Label: "Locales",
      net3Num: "+700",     net3Label: "Marcas locales e internacionales",
      net4Num: ">2.300M",  net4Label: "Ventas anuales (USD)",
      net5Num: "+6M",      net5Label: "Visitas / mes",
      net6Num: ">40K",     net6Label: "Autos / día",
      net7Num: ">6M",      net7Label: "Tickets / año",
    cap1Label: "Publicidad",          cap1Desc: "Campañas activadas con data de tráfico real en malls.",
    cap2Label: "Ecommerce Omnicanal", cap2Desc: "Click \u0026 collect, retiro en tienda y entregas coordinadas.",
    cap3Label: "Cobros",              cap3Desc: "Terminales y medios de pago integrados al ecosistema.",
    cap4Label: "Última Milla",        cap4Desc: "Logística de distribución desde locales al consumidor final.",
    cap5Label: "Pagos y créditos",    cap5Desc: "Financiamiento y billeteras para shoppers y marcas.",
    cap6Label: "Fidelización",        cap6Desc: "Programas de puntos y retención activa de clientes.",
    map: {
      hubLabel: "SHEFA",
      arcEcosystem: "ECOSISTEMA",
      arcBusiness: "OPORTUNIDADES DE NEGOCIO",
      comingSoon: "PRÓXIMAMENTE",
      pillLabels: [
        "56M tickets / año",
        "16 shoppings IRSA",
        "1.500 locales",
        "\u003e6M visitas / mes",
        "40k autos / día",
        "\u003c700 marcas",
        "22M clicks / año",
        "1M órdenes / año",
        "4M usuarios ABC1 activos",
        "Cofundadores de Workplace by IRSA",
        "Miembros de Endeavor",
        "Miembros de ARCAP",
      ],
      iconLabels: [
        "Fidelización",
        "Última milla",
        "Pagos",
        "Créditos",
        "Cobros",
        "Ecommerce Omnicanal",
        "Publicidad",
        "Economía Circular",
        "Seguros",
      ],
    },
  },
    team: {
      tag:  "EQUIPO",
      h2:   "Liderazgo",
      desc: "Experiencia combinada en real estate, retail tech, blockchain y venture capital.",
      members: [
        { initials: "BE", name: "Ben Elsztain",    role: "MANAGING PARTNER",   colorKey: "accent",      linkedin: "https://www.linkedin.com/in/ben-elsztain-a23537ba/" },
        { initials: "RS", name: "Ricardo Schulte",  role: "INVESTMENT OFFICER", colorKey: "retail",     linkedin: "https://www.linkedin.com/in/ricardoschulte/" },
        { initials: "RB", name: "Rodrigo Benzaquen", role: "MANAGING PARTNER", colorKey: "blockchain", isNew: true, linkedin: "https://www.linkedin.com/in/rbenzaquen/" },
      ],
    },
   cta: {
     h2:    "Sumate al futuro del retail",
     desc:  "Estamos a un mensaje de distancia para crear valor y transformar el futuro.",
     btn:   "CONTACTANOS",
     email: "rodrigo@bouldertech.fi",
   },
   contact: {
     h2:          "Contactanos",
     desc:        "Estamos a un mensaje de distancia para crear valor y transformar el futuro.",
     nameLabel:   "Nombre completo",
     companyLabel:"Empresa",
     emailLabel:  "Email",
     messageLabel:"Mensaje",
     submit:      "ENVIAR",
     success:     "Mensaje enviado con éxito",
     error:       "Hubo un error al enviar tu mensaje. Intentá de nuevo.",
     privacyLabel: "He leído y acepto la {{link}}.",
     privacyLink:  "Política de Privacidad",
     privacyTitle: "Políticas de Privacidad",
     privacyText: `Última actualización: 27 de junio de 2025

En Shefa, entendemos la importancia de proteger la privacidad y los datos personales de quienes visitan nuestro sitio web. Por eso, adoptamos medidas para garantizar que la información que recopilamos sea tratada de forma transparente, segura y conforme con la normativa aplicable.

1. ¿Quién es el responsable del tratamiento de los datos?

SHEFA Holding LLC, con domicilio en 3411 Silverside Road, Rodney Building # 104, Wilmington, Delaware, Estados Unidos, es la responsable del tratamiento de los datos personales recabados a través de este sitio web. Podés contactarnos por correo electrónico a: [email de contacto].

2. ¿Qué datos recopilamos?

En general, podés navegar por nuestro sitio sin necesidad de proporcionarnos datos personales. Sin embargo, podríamos recopilar: Datos de contacto (nombre y apellido, correo electrónico, empresa) cuando los usuarios nos escriben a través de formularios de contacto o vía email. Datos de navegación, como dirección IP, tipo de navegador, dispositivo o comportamiento de navegación, mediante cookies o herramientas de análisis. Dichos datos no son vinculados con el resto de tus datos personales.

3. ¿Con qué finalidad tratamos los datos?

Tratamos los datos personales únicamente para: Responder consultas enviadas a través del formulario o al correo institucional. Mantener contacto institucional con aliados, proveedores o potenciales interesados en nuestro ecosistema de empresas. Analizar el uso del sitio web y mejorar su funcionalidad.

4. ¿Cuál es la base legal para el tratamiento?

Dependiendo del caso, el tratamiento se basa en: Tu consentimiento, cuando completás voluntariamente un formulario o aceptás cookies. Nuestro interés legítimo, cuando analizamos el uso del sitio para mejorar su rendimiento.

5. ¿Compartimos tus datos?

No vendemos ni cedemos tus datos personales. Sin embargo, podríamos compartirlos con: Empresas del ecosistema Shefa, si la consulta se relaciona con alguna de ellas. Proveedores tecnológicos que prestan servicios de alojamiento web, seguridad o análisis (por ejemplo, Google Analytics), siempre bajo acuerdos de confidencialidad y con medidas de protección adecuadas.

6. Uso de cookies y tecnologías similares

Este sitio puede utilizar cookies propias o de terceros con fines técnicos o analíticos. Si no deseas instalar esas cookies puedes eliminarlas o bloquearlas desde tu navegador de internet.

7. Transferencias internacionales de datos

En caso de que alguno de nuestros proveedores tecnológicos almacene o procese datos fuera del país, nos aseguramos de que cumpla con garantías adecuadas de protección, ya sea a través de cláusulas contractuales tipo u otros mecanismos válidos. No obstante, al completar un formulario en nuestra web, prestas tu consentimiento para que transfiramos esos datos a Estados Unidos, país que no cuenta con nivel adecuado de protección de datos.

8. ¿Cuáles son tus derechos?

Como titular de tus datos, tenés derecho a: Acceder a los datos que tenemos sobre vos. Solicitar su rectificación, actualización o supresión. Oponerte al tratamiento o solicitar la limitación de este. Retirar tu consentimiento en cualquier momento (sin que esto afecte la legalidad del tratamiento previo). Para ejercer tus derechos, podés escribirnos a: [email de contacto]. El responsable de Shefa deberá comprobar tu identidad previo a ejecutar tu solicitud, para evitar brindarle tus datos a terceros no autorizados.

9. ¿Por cuánto tiempo conservamos los datos?

Conservaremos tus datos únicamente durante el tiempo necesario para cumplir con las finalidades informadas o mientras exista una relación institucional activa. Luego serán eliminados o anonimizados de manera segura.

10. Cambios en esta política

Nos reservamos el derecho de modificar esta Política de Privacidad para adaptarla a cambios normativos o mejoras en nuestros procesos. Te recomendamos revisarla periódicamente. Las modificaciones entrarán en vigor desde su publicación en este sitio.`,
   },
   portfolioDetail: {
      ctaH2:    "¿Te interesa invertir en la próxima generación de innovadores del retail?",
      ctaBtn:   "Contactanos",
      ctaEmail: "rodrigo@bouldertech.fi",
      link:     "Volver",
      about:    "Sobre la empresa",
      founder:  "Fundador",
      founders: "Fundadores",
      product:  "Producto",
   },
   footer: {
    copy:    "Shefa Holdings® 2026 — Todos los derechos reservados",
    privacy: "Políticas de privacidad",
  },
};
