"use client";

import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";

const PILLS = [
  { label: "Clicks",   icon: <path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/> },
  { label: "Data",     icon: <><line x1="18" x2="18" y1="20" y2="10"/><line x1="12" x2="12" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="14"/></> },
  { label: "Money",    icon: <><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></> },
  { label: "Fidelity", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="m16 11 2 2 4-4"/></> },
];

export default function Thesis() {
  const { t } = useLang();
  const { thesis } = t;

  return (
    <section id="value" className="pt-20 pb-36 bg-shefa-dark">
      <PageSection>

        <div className="text-center mb-0">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] italic font-light text-shefa-text mb-2">
            {thesis.diagram.headline}
          </h2>
          <p className="text-[16px] md:text-[18px] text-shefa-muted font-light leading-[1.55] max-w-[680px] mx-auto">
            {thesis.diagram.subheadline}
          </p>
        </div>

        <div className="relative w-full overflow-x-auto hidden md:block">
          <svg
            viewBox="0 0 1100 480"
            className="w-full min-w-[800px] h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="thesisPillGlow" x="-30%" y="-70%" width="160%" height="240%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#30BCDB" floodOpacity="0.5" />
              </filter>
              <filter id="marketplaceShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#AAB8C4" floodOpacity="0.65" />
              </filter>
              <linearGradient id="redGlowDown" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#AAB8C4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#AAB8C4" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="redGlowUp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#AAB8C4" stopOpacity="0" />
                <stop offset="100%" stopColor="#AAB8C4" stopOpacity="0.35" />
              </linearGradient>
              <linearGradient id="cyanGlowDown" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#AAB8C4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#AAB8C4" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cyanGlowUp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#AAB8C4" stopOpacity="0" />
                <stop offset="100%" stopColor="#AAB8C4" stopOpacity="0.35" />
              </linearGradient>
              <clipPath id="pills-left-clip">
                <rect x="222" y="0" width="10000" height="480" />
              </clipPath>
            </defs>

            {/* Cables grises: Cliente -> Marketplace */}
            <rect x="120" y="190" width="340" height="2" fill="#AAB8C4" />
            <rect x="120" y="250" width="340" height="2" fill="#AAB8C4" />
            <rect x="120" y="192" width="340" height="28" fill="url(#cyanGlowDown)" />
            <rect x="120" y="222" width="340" height="28" fill="url(#cyanGlowUp)" />

            {/* Cables Marketplace -> Retailer */}
            <rect x="640" y="190" width="340" height="2" fill="#AAB8C4" />
            <rect x="640" y="250" width="340" height="2" fill="#AAB8C4" />
            <rect x="640" y="192" width="340" height="28" fill="url(#redGlowDown)" />
            <rect x="640" y="222" width="340" height="28" fill="url(#redGlowUp)" />

            {/* Canal curvo TUCÁN — fondo tipo Last Mile */}
            <path
              d="M120 200 C120 350 980 350 980 200 L980 240 C980 416 120 416 120 240 Z"
              fill="rgba(48,188,219,0.06)"
              stroke="rgba(48,188,219,0.40)"
              strokeWidth="1"
            />

            {/* Arco TUCÁN superior — glow base */}
            <path d="M120 200 C120 350 980 350 980 200" fill="none" stroke="#30BCDB" strokeWidth="14" strokeOpacity="0.12" />
            <path d="M120 200 C120 350 980 350 980 200" fill="none" stroke="#30BCDB" strokeWidth="6" strokeOpacity="0.22" />
            {/* Arco TUCÁN superior — línea principal */}
            <path d="M120 200 C120 350 980 350 980 200" fill="none" stroke="#30BCDB" strokeWidth="2" />
            {/* Arco TUCÁN inferior — glow base */}
            <path d="M120 240 C120 416 980 416 980 240" fill="none" stroke="#30BCDB" strokeWidth="14" strokeOpacity="0.12" />
            <path d="M120 240 C120 416 980 416 980 240" fill="none" stroke="#30BCDB" strokeWidth="6" strokeOpacity="0.22" />
            {/* Arco TUCÁN inferior — línea principal */}
            <path d="M120 240 C120 416 980 416 980 240" fill="none" stroke="#30BCDB" strokeWidth="2" />

            {/* Pills individuales — salen del centro del Cliente, viajan al centro del Marketplace */}
            {PILLS.map((pill, i) => {
              const stagger = i * 1.25;
              return (
                <g key={`in-${pill.label}`} filter="url(#thesisPillGlow)">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="linear"
                    path="M120,206 L550,206"
                  />
                  <animate
                    attributeName="opacity"
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="discrete"
                    keyTimes="0;0.95;1"
                    values="1;0;0"
                  />
                  <rect x="0" y="0" width="88" height="28" rx="2" style={{ fill: "var(--shefa-dark)", stroke: "var(--shefa-border)" }} strokeWidth="1" />
                  <rect x="5" y="4" width="20" height="20" rx="4" fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1" />
                  <svg x="8.5" y="7.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#30BCDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pill.icon}
                  </svg>
                  <text x="57" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" style={{ fill: "var(--shefa-text)" }} dominantBaseline="middle">{pill.label === "Money" ? thesis.diagram.pillMoney : pill.label === "Fidelity" ? thesis.diagram.pillFidelity : pill.label}</text>
                </g>
              );
            })}

            {/* Pills del eje derecho — solo Money */}
            {PILLS.filter((p) => p.label === "Money").map((pill, i) => {
              const stagger = i * 1.25;
              return (
                <g key={`out-${pill.label}`} filter="url(#thesisPillGlow)">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="linear"
                    path="M550,206 L980,206"
                  />
                  <animate
                    attributeName="opacity"
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="discrete"
                    keyTimes="0;0.95;1"
                    values="1;0;0"
                  />
                  <rect x="0" y="0" width="88" height="28" rx="2" style={{ fill: "var(--shefa-dark)", stroke: "var(--shefa-border)" }} strokeWidth="1" />
                  <rect x="5" y="4" width="20" height="20" rx="4" fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1" />
                  <svg x="8.5" y="7.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#30BCDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pill.icon}
                  </svg>
                  <text x="57" y="14" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" style={{ fill: "var(--shefa-text)" }} dominantBaseline="middle">{thesis.diagram.pillMoney}</text>
                </g>
              );
            })}

            {/* Pills del arco inferior — Cliente → Retailer siguiendo la curva */}
            {PILLS.map((pill, i) => {
              const stagger = i * 1.25;
              return (
                <g key={`arc-${pill.label}`} filter="url(#thesisPillGlow)">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="linear"
                    rotate="auto"
                    path="M120,220 C120,383 980,383 980,220"
                  />
                  <animate
                    attributeName="opacity"
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="discrete"
                    keyTimes="0;0.95;1"
                    values="1;0;0"
                  />
                  <rect x="-44" y="-14" width="88" height="28" rx="2" style={{ fill: "var(--shefa-dark)", stroke: "var(--shefa-border)" }} strokeWidth="1" />
                  <rect x="-39" y="-10" width="20" height="20" rx="4" fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1" />
                  <svg x="-35.5" y="-6.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#30BCDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pill.icon}
                  </svg>
                  <text x="13" y="0" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9.5" style={{ fill: "var(--shefa-text)" }} dominantBaseline="middle">{pill.label === "Money" ? thesis.diagram.pillMoney : pill.label === "Fidelity" ? thesis.diagram.pillFidelity : pill.label}</text>
                </g>
              );
            })}

            {/* Marketplace fill — rendered AFTER pills so it covers them while they pass through */}
            <rect x="460" y="170" width="180" height="100" rx="2" filter="url(#marketplaceShadow)" style={{ fill: "var(--shefa-dark)" }} />

            {/* Nodo Cliente — pinta encima de las pills cuando están detrás del círculo */}
            <g>
              <rect
                x="18"
                y="120"
                width="204"
                height="200"
                rx="100"
                style={{ fill: "var(--shefa-dark)" }}
                stroke="var(--shefa-border)"
                strokeWidth="3"
              />
              <text
                x="120"
                y="220"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "var(--shefa-text)", textTransform: "uppercase", letterSpacing: "0.07em" }}
                fontSize="14"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {thesis.diagram.cliente}
              </text>
            </g>

            {/* Nodo Retailer */}
            <g>
              <rect
                x="878"
                y="120"
                width="204"
                height="200"
                rx="100"
                style={{ fill: "var(--shefa-dark)" }}
                stroke="var(--shefa-border)"
                strokeWidth="3"
              />
              <text
                x="980"
                y="220"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "var(--shefa-text)", textTransform: "uppercase", letterSpacing: "0.07em" }}
                fontSize="14"
                fontWeight="600"
                fontFamily="Inter, sans-serif"
              >
                {thesis.diagram.retailer}
              </text>
            </g>

            {/* Marketplace border + text — rendered AFTER pills so they appear on top */}
            <g>
              <text
                x="550"
                y="220"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "var(--shefa-text)" }}
                fontSize="13"
                fontFamily="Inter, sans-serif"
                fontWeight="600"
              >
                {thesis.diagram.marketplace}
              </text>
            </g>
          </svg>
        </div>

        {/* ── Mobile vertical diagram ─────────────────────────────────────── */}
        <div className="relative w-full md:hidden">
          <svg
            viewBox="0 0 380 800"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="thesisPillGlowM" x="-40%" y="-40%" width="180%" height="180%">
                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#30BCDB" floodOpacity="0.5" />
              </filter>
              <filter id="marketplaceShadowM" x="-40%" y="-100%" width="180%" height="300%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#AAB8C4" floodOpacity="0.65" />
              </filter>
            </defs>

            {/* Gray cables: Cliente → Marketplace */}
            <rect x="165" y="180" width="2" height="190" fill="#AAB8C4" />
            <rect x="213" y="180" width="2" height="190" fill="#AAB8C4" />
            <rect x="167" y="180" width="46" height="190" fill="rgba(170,184,196,0.15)" />

            {/* Gray cables: Marketplace → Retailer */}
            <rect x="165" y="440" width="2" height="180" fill="#AAB8C4" />
            <rect x="213" y="440" width="2" height="180" fill="#AAB8C4" />
            <rect x="167" y="440" width="46" height="180" fill="rgba(170,184,196,0.15)" />

            {/* TUCÁN arc channel fill (LEFT side) — extends into ovals so they mask the caps */}
            <path
              d="M155,100 C5,100 5,700 155,700 L195,700 C45,700 45,100 195,100 Z"
              fill="rgba(48,188,219,0.06)"
              stroke="rgba(48,188,219,0.40)"
              strokeWidth="1"
            />
            {/* TUCÁN arc outer line + glow */}
            <path d="M155,100 C5,100 5,700 155,700" fill="none" stroke="#30BCDB" strokeWidth="14" strokeOpacity="0.12" />
            <path d="M155,100 C5,100 5,700 155,700" fill="none" stroke="#30BCDB" strokeWidth="6" strokeOpacity="0.22" />
            <path d="M155,100 C5,100 5,700 155,700" fill="none" stroke="#30BCDB" strokeWidth="2" />
            {/* TUCÁN arc inner line + glow */}
            <path d="M195,100 C45,100 45,700 195,700" fill="none" stroke="#30BCDB" strokeWidth="14" strokeOpacity="0.12" />
            <path d="M195,100 C45,100 45,700 195,700" fill="none" stroke="#30BCDB" strokeWidth="6" strokeOpacity="0.22" />
            <path d="M195,100 C45,100 45,700 195,700" fill="none" stroke="#30BCDB" strokeWidth="2" />

            {/* Pills top cable: Client → Marketplace */}
            {PILLS.map((pill, i) => {
              const stagger = i * 1.25;
              return (
                <g key={`m-in-${pill.label}`} filter="url(#thesisPillGlowM)">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="linear"
                    path="M189,100 L189,405"
                  />
                  <animate
                    attributeName="opacity"
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="discrete"
                    keyTimes="0;0.95;1"
                    values="1;0;0"
                  />
                  <rect x="-15" y="-15" width="30" height="30" rx="4" style={{ fill: "var(--shefa-dark)", stroke: "var(--shefa-border)" }} strokeWidth="1" />
                  <rect x="-10" y="-10" width="20" height="20" rx="4" fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1" />
                  <svg x="-6.5" y="-6.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#30BCDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pill.icon}
                  </svg>
                </g>
              );
            })}

            {/* Pills bottom cable: Marketplace → Retailer (Money only) */}
            {PILLS.filter((p) => p.label === "Money").map((pill, i) => {
              const stagger = i * 1.25;
              return (
                <g key={`m-out-${pill.label}`} filter="url(#thesisPillGlowM)">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="linear"
                    path="M189,405 L189,700"
                  />
                  <animate
                    attributeName="opacity"
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="discrete"
                    keyTimes="0;0.95;1"
                    values="1;0;0"
                  />
                  <rect x="-15" y="-15" width="30" height="30" rx="4" style={{ fill: "var(--shefa-dark)", stroke: "var(--shefa-border)" }} strokeWidth="1" />
                  <rect x="-10" y="-10" width="20" height="20" rx="4" fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1" />
                  <svg x="-6.5" y="-6.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#30BCDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pill.icon}
                  </svg>
                </g>
              );
            })}

            {/* Arc pills: Client → Retailer (left bypass) — 8 instances for higher frequency */}
            {Array.from({ length: 8 }, (_, i) => ({ ...PILLS[i % PILLS.length], idx: i })).map((pill, i) => {
              const stagger = i * 0.625;
              return (
                <g key={`m-arc-${pill.idx}`} filter="url(#thesisPillGlowM)">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="linear"
                    path="M190,100 C24,100 24,700 190,700"
                  />
                  <animate
                    attributeName="opacity"
                    dur="5s"
                    repeatCount="indefinite"
                    begin={`${stagger}s`}
                    calcMode="discrete"
                    keyTimes="0;0.95;1"
                    values="1;0;0"
                  />
                  <rect x="-15" y="-15" width="30" height="30" rx="4" style={{ fill: "var(--shefa-dark)", stroke: "var(--shefa-border)" }} strokeWidth="1" />
                  <rect x="-10" y="-10" width="20" height="20" rx="4" fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1" />
                  <svg x="-6.5" y="-6.5" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#30BCDB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {pill.icon}
                  </svg>
                </g>
              );
            })}

            {/* Marketplace fill */}
            <rect x="100" y="370" width="180" height="70" rx="2"
              filter="url(#marketplaceShadowM)"
              style={{ fill: "var(--shefa-dark)" }}
            />

            {/* Client oval */}
            <g>
              <rect x="88" y="20" width="204" height="160" rx="80"
                style={{ fill: "var(--shefa-dark)" }}
                stroke="var(--shefa-border)"
                strokeWidth="3"
              />
              <text x="190" y="100"
                textAnchor="middle" dominantBaseline="middle"
                style={{ fill: "var(--shefa-text)", textTransform: "uppercase", letterSpacing: "0.07em" }}
                fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif"
              >
                {thesis.diagram.cliente}
              </text>
            </g>

            {/* Retailer oval */}
            <g>
              <rect x="88" y="620" width="204" height="160" rx="80"
                style={{ fill: "var(--shefa-dark)" }}
                stroke="var(--shefa-border)"
                strokeWidth="3"
              />
              <text x="190" y="700"
                textAnchor="middle" dominantBaseline="middle"
                style={{ fill: "var(--shefa-text)", textTransform: "uppercase", letterSpacing: "0.07em" }}
                fontSize="14" fontWeight="600" fontFamily="Inter, sans-serif"
              >
                {thesis.diagram.retailer}
              </text>
            </g>

            {/* Marketplace border + text */}
            <g>
              <rect x="100" y="370" width="180" height="70" rx="2"
                fill="none"
                stroke="var(--shefa-border)"
                strokeWidth="1"
              />
              <text x="190" y="405"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fill: "var(--shefa-text)" }}
                fontSize="13" fontFamily="Inter, sans-serif" fontWeight="600"
              >
                {thesis.diagram.marketplace}
              </text>
            </g>
          </svg>
        </div>

      </PageSection>
    </section>
  );
}
