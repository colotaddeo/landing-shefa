"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import PageSection from "@/components/PageSection";
import styles from "./EcosystemMap.module.css";

const CX = 627;
const CY = 597;
const RING2_R = 270;

// 9 visible stop positions on ring 2: clockwise from left (180°) to right (0°)
// Position 9 is off-screen (invisible transit slot)
const SPOKE_ANGLES = [180, 158, 136, 114, 92, 70, 48, 26, 0];
const NODES = [
  ...SPOKE_ANGLES.map((deg, i) => {
    const rad = (deg * Math.PI) / 180;
    const yOffset = i === 4 ? -30 : 0; // spot at ~90° raised slightly
    return {
      x: Math.round(CX + RING2_R * Math.cos(rad)),
      y: Math.round(CY - RING2_R * Math.sin(rad)) + yOffset,
    };
  }),
  { x: -400, y: 597 }, // position 9:  off-screen (invisible transit)
  { x: -400, y: 597 }, // position 10: off-screen (invisible transit)
  { x: -400, y: 597 }, // position 11: off-screen (invisible transit)
];

// Starting node index for each pill (0–8 visible, 9–11 off-screen)
// 12 pills × 12 positions — pills 7, 10, 11 start off-screen
const PILL_START_NODES = [4, 5, 7, 8, 6, 2, 1, 9, 3, 0, 10, 11];

function spokeEnd(deg: number, r = 476): [number, number] {
  const rad = (deg * Math.PI) / 180;
  return [
    Math.round(CX + r * Math.cos(rad)),
    Math.round(CY - r * Math.sin(rad)),
  ];
}

const SPOKES: { x2: number; y2: number; stroke: string; opacity: number }[] = [
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(0)[0],   y2: spokeEnd(0)[1]   }) },
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(180)[0], y2: spokeEnd(180)[1] }) },
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(158)[0], y2: spokeEnd(158)[1] }) },
  { stroke: "#30BCDB", opacity: 0.13, ...({ x2: spokeEnd(136)[0], y2: spokeEnd(136)[1] }) },
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(114)[0], y2: spokeEnd(114)[1] }) },
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(92)[0],  y2: spokeEnd(92)[1]  }) },
  { stroke: "#30BCDB", opacity: 0.13, ...({ x2: spokeEnd(70)[0],  y2: spokeEnd(70)[1]  }) },
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(48)[0],  y2: spokeEnd(48)[1]  }) },
  { stroke: "#2a2d35", opacity: 1,    ...({ x2: spokeEnd(26)[0],  y2: spokeEnd(26)[1]  }) },
];

/* ── Orbital pill icons (position-agnostic) ───────────────────── */
const PILL_ICONS: ReactNode[] = [
  (<>
    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
    <path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>
  </>),
  (<>
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
  </>),
  (<>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
    <line x1="3" x2="21" y1="6" y2="6"/>
    <path d="M16 10a4 4 0 0 1-8 0"/>
  </>),
  (<>
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
  </>),
  (<>
    <path d="M3 11l1.5-4.5A2 2 0 0 1 6.4 5h11.2a2 2 0 0 1 1.9 1.5L21 11"/>
    <path d="M1 11h22v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6z"/>
    <circle cx="7" cy="18" r="2"/>
    <circle cx="17" cy="18" r="2"/>
  </>),
  (<>
    <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42Z"/>
    <circle cx="7.5" cy="7.5" r="1.5"/>
  </>),
  (<>
    <path d="m4 4 7.07 17 2.51-7.39L21 11.07z"/>
  </>),
  (<>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="15" cy="5" r="1"/>
    <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
  </>),
  (<>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </>),
];

const PILL_IMAGES: { imageSrc?: string; imageSrcLight?: string; extraWidth?: number }[] = [
  {}, {}, {}, {}, {}, {}, {}, {}, {},
  { imageSrc: "/logos/workplace.png" },
  { imageSrc: "/logos/Logo_EndeavorE.png" },
  { imageSrc: "/logos/arcap.png", imageSrcLight: "/logos/arcap para lightmode.png", extraWidth: 16 },
];

/* ── Icon-pill metadata (position + icon, no label) ────────────── */
const ICON_PILL_META = [
  { x: 547,  y: 92,  disabled: false },
  { x: 235,  y: 236, disabled: false },
  { x: 330,  y: 119, disabled: false },
  { x: 115,  y: 403, disabled: true },
  { x: 922,  y: 275, disabled: false },
  { x: 764,  y: 141, disabled: false },
  { x: 1023, y: 568, disabled: false },
  { x: 49,   y: 568, disabled: true },
  { x: 994,  y: 405, disabled: true },
];

const ICON_PILL_ICONS: ReactNode[] = [
  (<>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="m16 11 2 2 4-4"/>
  </>),
  (<>
    <circle cx="18.5" cy="17.5" r="3.5"/>
    <circle cx="5.5" cy="17.5" r="3.5"/>
    <circle cx="15" cy="5" r="1"/>
    <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
  </>),
  (<>
    <rect width="20" height="12" x="2" y="6" rx="2"/>
    <path d="M6 12h.01M18 12h.01"/>
  </>),
  (<>
    <circle cx="12" cy="12" r="10"/>
    <path d="M16 8h-6a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2H8"/>
    <path d="M12 18V6"/>
  </>),
  (<>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/>
    <path d="M16 8H8"/>
    <path d="M16 12H8"/>
    <path d="M12 16H8"/>
  </>),
  (<>
    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/>
    <path d="M2 7h20"/>
  </>),
  (<>
    <path d="m3 11 19-9-9 19-2-8-8-2z"/>
    <path d="M11 13 9 21"/>
  </>),
  (<>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </>),
  (<>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </>),
];

function iconPillW(label: string, large = false) {
  const iconBox = large ? 28 : 25;
  const gap = large ? 10 : 8;
  const pad = 14;
  const charW = large ? 8.6 : 7.5;
  return Math.round(pad + iconBox + gap + label.length * charW + pad);
}

export default function EcosystemMap() {
  const { t } = useLang();
  const { ecosystem } = t;
  const { theme } = useTheme();

  const map = ecosystem.map;

  // Build pill / icon-pill data from translations
  const pills = map.pillLabels.map((label, i) => ({
    label,
    icon: PILL_ICONS[i] ?? null,
    ...PILL_IMAGES[i],
  }));

  const iconPills = map.iconLabels.map((label, i) => ({
    label,
    ...ICON_PILL_META[i],
    icon: ICON_PILL_ICONS[i] ?? null,
  }));

  // Orbital animation
  const [step, setStep] = useState(0);
  const [exitingPill, setExitingPill] = useState(-1);
  const [enteringPill, setEnteringPill] = useState(-1);
  const stepRef = useRef(0);
  const wrapTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const enterTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      const cur = stepRef.current;
      const nxt = cur + 1;
      stepRef.current = nxt;

      // pill at pos 8 exits; pill at pos 11 enters at pos 0 — both fire simultaneously
      const exitIdx  = PILL_START_NODES.findIndex((s) => (s + cur) % 12 === 8);
      const enterIdx = PILL_START_NODES.findIndex((s) => (s + cur) % 12 === 11);

      setStep(nxt);

      if (exitIdx !== -1) {
        setExitingPill(exitIdx);
        if (wrapTimeoutRef.current) clearTimeout(wrapTimeoutRef.current);
        wrapTimeoutRef.current = setTimeout(() => setExitingPill(-1), 600);
      }

      if (enterIdx !== -1) {
        setEnteringPill(enterIdx);
        if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
        enterTimeoutRef.current = setTimeout(() => setEnteringPill(-1), 700);
      }
    }, 3000);

    return () => {
      clearInterval(id);
      if (wrapTimeoutRef.current) clearTimeout(wrapTimeoutRef.current);
      if (enterTimeoutRef.current) clearTimeout(enterTimeoutRef.current);
    };
  }, []);

  return (
    <section id="ecosystem" aria-labelledby="ecosystem-heading" className="py-28" style={{ scrollMarginTop: "120px" }}>
      <PageSection>

        {/* Section header */}
        <div className="text-center mb-0">
          <h2
            id="ecosystem-heading"
            className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.05] italic font-light text-shefa-text mb-2"
          >
            {ecosystem.h2a}
            <em className="not-italic">{ecosystem.h2b}</em>
            {ecosystem.h2c}
            <em className="not-italic">{ecosystem.h2d}</em>
          </h2>
          <p className="text-[16px] md:text-[18px] text-shefa-muted font-light leading-[1.55] max-w-[680px] mx-auto">
            {ecosystem.subtitle}
          </p>
        </div>

       {/* Orbital diagram */}
       <div className="mt-12">
            <svg
             viewBox="0 0 1280 687"
             width="100%"
             xmlns="http://www.w3.org/2000/svg"
             aria-hidden="true"
             style={{ display: "block", maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 88%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 88%, transparent 100%)" }}
           >
            <defs>
              <radialGradient id="eco-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#30BCDB" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#11141c" stopOpacity="0" />
              </radialGradient>
              <filter id="iconPillGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#30BCDB" floodOpacity="0.2" />
              </filter>
              <path id="ecosystem-arc" d="M 513 258 A 270 270 0 0 1 741 258" />
              <path id="business-arc" d="M 389 125 A 476 476 0 0 1 865 125" />
            </defs>

            {/* Radial glow */}
            <ellipse cx="628" cy="596" rx="300" ry="300" fill="url(#eco-glow)" />

            {/* Inner rings — static */}
            <circle className={styles.ring} cx={CX} cy={CY} r={RING2_R} fill="none" stroke="#2a2d35" strokeWidth="1" />
{/* Outer ring */}
            <circle className={styles.ring} cx={CX} cy={CY} r="476" fill="none" stroke="#2a2d35" strokeWidth="1" />

            {/* Radial spokes */}
            {SPOKES.map((s, i) => (
              <line
                key={i}
                className={s.stroke === "#2a2d35" ? styles.spoke : undefined}
                x1={CX} y1={CY} x2={s.x2} y2={s.y2}
                stroke={s.stroke}
                strokeOpacity={s.opacity}
                strokeWidth="1"
              />
            ))}

            {/* Sonar rings behind hub */}
            {[0, 1, 2].map((i) => (
              <circle
                key={`sonar-${i}`}
                className={styles.sonarRing}
                style={{ animationDelay: `${i * 1}s` }}
                cx="628" cy="598" r="72"
                fill="none" stroke="#30BCDB"
              />
            ))}

            {/* SHEFA hub */}
            <rect
              className={styles.hub}
              x="526" y="498" width="204" height="200" rx="100"
              fill="#191c24" stroke="#30BCDB" strokeWidth="1.5"
            />
            <image href="/logoshefa.png" x="592" y="533" width="71" height="76" />
            <text
              className={styles.hubText}
              x="628" y="651"
              textAnchor="middle"
              fontFamily="Inter, sans-serif"
              fontSize="28"
              fill="#e8eef0"
            >
              {map.hubLabel}
            </text>

            {/* Curved ECOSYSTEM label above hub */}
            <text
              fontFamily="Inter, sans-serif"
              fontSize="13"
              fill="#586470"
              letterSpacing="4"
            >
              <textPath
                href="#ecosystem-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                {map.arcEcosystem}
              </textPath>
            </text>

            {/* Curved BUSINESS OPPORTUNITIES label above outer ring */}
            <text
              fontFamily="Inter, sans-serif"
              fontSize="11"
              fill="#586470"
              letterSpacing="3"
            >
              <textPath
                href="#business-arc"
                startOffset="50%"
                textAnchor="middle"
              >
                {map.arcBusiness}
              </textPath>
            </text>

            {/* Animated metric pills */}
            {pills.map((p, i) => {
              const W = iconPillW(p.label) + (p.extraWidth ?? 0);
              const H = 41;
              const nodeIndex = exitingPill === i
                ? (PILL_START_NODES[i] + step - 1) % 12
                : (PILL_START_NODES[i] + step) % 12;
              const node = NODES[nodeIndex];
              const tx = node.x - W / 2;
              const ty = node.y - H / 2;
              const isExiting   = exitingPill  === i;
              const isEntering  = enteringPill === i;
              const isInvisible = nodeIndex >= 9 && !isExiting;
              const innerClass  = isExiting  ? styles.pillExit
                                : isEntering ? styles.pillEnter
                                : undefined;
              return (
                <g
                  key={`pill-${i}`}
                  className={isEntering ? styles.pillOuterNoTransition : styles.pillOuter}
                  style={{ transform: `translate(${tx}px, ${ty}px)`, opacity: isInvisible ? 0 : undefined }}
                >
                  <g
                    key={isEntering ? `enter-${step}` : `stable-${i}`}
                    className={innerClass}
                  >
                    <rect
                      className={styles.card}
                      x={0} y={0} width={W} height={H} rx="2"
                      fill="#191c24" stroke="#2a2d35" strokeWidth="1"
                    />
                    <rect
                      x={14} y={8} width="25" height="25" rx="6"
                      fill="rgba(48,188,219,0.08)" stroke="rgba(48,188,219,0.33)" strokeWidth="1"
                    />
                    {p.imageSrc ? (
                      <image
                        href={theme === "light" && p.imageSrcLight ? p.imageSrcLight : p.imageSrc}
                        x={15} y={9} width={23} height={23}
                        preserveAspectRatio="xMidYMid meet"
                      />
                    ) : (
                      <svg
                        x={18.5} y={12.5}
                        width="16" height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#30BCDB"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {p.icon}
                      </svg>
                    )}
                    <text
                      className={styles.cardTextPrimary}
                      x={47} y={26}
                      fontFamily="Inter, sans-serif"
                      fontSize="14"
                      fill="#e8eef0"
                    >
                      {p.label}
                    </text>
                  </g>
                </g>
              );
            })}

            {/* Icon pills */}
            {iconPills.map((p, i) => {
              const disabled = !!p.disabled;
              const W = disabled
                ? Math.max(iconPillW(p.label, true), iconPillW(map.comingSoon, true))
                : iconPillW(p.label, true);
              const H = 58;
              const iBoxW = 28;
              const iBoxH = 28;
              const iBoxX = p.x + 14;
              const iBoxY = p.y + (H - iBoxH) / 2;
              const iconSize = 18;
              const iconOffset = (iBoxW - iconSize) / 2;
              return (
                <g key={i}>
                  <rect
                    className={disabled ? styles.iconPillCardDisabled : styles.iconPillCard}
                    x={p.x} y={p.y} width={W} height={H} rx="2"
                    filter={disabled ? undefined : "url(#iconPillGlow)"}
                  />
                  <rect
                    className={disabled ? styles.iconPillIconBoxDisabled : styles.iconPillIconBox}
                    x={iBoxX} y={iBoxY} width={iBoxW} height={iBoxH} rx="6"
                  />
                  <svg
                    x={iBoxX + iconOffset} y={iBoxY + iconOffset}
                    width={iconSize} height={iconSize}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={disabled ? "#586470" : "#30BCDB"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {p.icon}
                  </svg>
                  <text
                    className={styles.iconPillText}
                    x={p.x + 14 + iBoxW + 10}
                    y={p.y + H / 2 + (disabled ? -9 : 0)}
                    dominantBaseline="central"
                    fontFamily="Inter, sans-serif"
                    fontSize="15"
                    fill={disabled ? "#586470" : "#e8eef0"}
                    letterSpacing="0.5"
                  >
                    {p.label}
                  </text>
                  {disabled && (
                    <text
                      x={p.x + 14 + iBoxW + 10}
                      y={p.y + H / 2 + 10}
                      dominantBaseline="central"
                      fontFamily="Inter, sans-serif"
                      fontSize="9"
                      fill="#586470"
                      letterSpacing="1.5"
                    >
                      {map.comingSoon}
                    </text>
                  )}
                </g>
              );
            })}

            </svg>
       </div>

      </PageSection>
    </section>
  );
}
