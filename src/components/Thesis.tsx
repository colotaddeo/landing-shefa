"use client";

import { useLang } from "@/context/LanguageContext";

const PHOTOS: Record<string, string> = {
  "Ben Elsztain":      "/team/ben-elsztain.png",
  "Rodrigo Benzaquen": "/team/rodrigo-benzaquen.png",
};

const MILESTONES = [
  { key: "retail",     date: "Early 2023", founder: "Ben Elsztain",      cx: 220,  cy: 193 },
  { key: "blockchain", date: "Mid 2023",   founder: "Rodrigo Benzaquen", cx: 580,  cy: 148 },
  { key: "ai",         date: "Late 2025",  founder: "",                  cx: 1000, cy: 60  },
];

const CURVE = "M 0,200 C 80,200 160,199 220,193 C 340,182 460,162 580,148 C 710,132 800,98 920,74 C 980,62 1060,50 1200,44";
const FILL  = CURVE + " L 1200,220 L 0,220 Z";

export default function Thesis() {
  const { t } = useLang();
  const { thesis } = t;

  return (
    <section id="thesis" className="px-6 md:px-[60px] py-36">
      <div className="max-w-[1200px] mx-auto">
      <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-10">{thesis.tag}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1]">{thesis.h2}</h2>
        <p
          className="text-[16px] text-shefa-muted font-light leading-[1.9] self-end"
          dangerouslySetInnerHTML={{ __html: thesis.about }}
        />
      </div>

      {/* Timeline — desktop */}
      <div className="hidden md:block relative">
        <svg viewBox="0 0 1200 220" className="w-full overflow-visible">
          <defs>
            <linearGradient id="thesisFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#30BCDB" stopOpacity="0.07" />
              <stop offset="100%" stopColor="#30BCDB" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path d={FILL} fill="url(#thesisFill)" />
          <path d={CURVE} fill="none" stroke="#30BCDB" strokeWidth="1.5" strokeOpacity="0.35" />

          {MILESTONES.map((m) => (
            <g key={m.key}>
              <line
                x1={m.cx} y1={m.cy + 9}
                x2={m.cx} y2={220}
                stroke="#1e2a30"
                strokeWidth="1"
                strokeDasharray="3 4"
              />
              <circle cx={m.cx} cy={m.cy} r="7"   fill="none" stroke="#30BCDB" strokeWidth="1" strokeOpacity="0.3" />
              <circle cx={m.cx} cy={m.cy} r="3.5"  fill="#30BCDB" fillOpacity="0.85" />
              {m.key === "retail" && (
                <text
                  x={m.cx}
                  y={m.cy - 18}
                  textAnchor="middle"
                  fill="#30BCDB"
                  fontSize="9"
                  letterSpacing="1.5"
                  fontFamily="sans-serif"
                  opacity="0.9"
                >
                  SHEFA Launch
                </text>
              )}
              {m.key === "blockchain" && (
                <text
                  x={m.cx}
                  y={m.cy - 28}
                  textAnchor="middle"
                  fill="#30BCDB"
                  fontSize="9"
                  letterSpacing="1.5"
                  fontFamily="sans-serif"
                  opacity="0.9"
                >
                  <tspan x={m.cx} dy="0">Investment in</tspan>
                  <tspan x={m.cx} dy="13">BoulderTech</tspan>
                </text>
              )}
            </g>
          ))}
        </svg>

        {/* Labels below each milestone */}
        <div className="relative mt-6">
          {MILESTONES.map((m, i) => {
            const pillar = thesis.pillars[i];
            return (
              <div
                key={m.key}
                className="absolute top-0"
                style={{ left: `${(m.cx / 1200) * 100}%`, transform: "translateX(-50%)" }}
              >
                <p className="text-[10px] tracking-[2px] text-shefa-accent uppercase mb-1 whitespace-nowrap">
                  {m.date}
                </p>
                {m.founder && (
                  <div className="relative mb-2">
                    {PHOTOS[m.founder] && (
                      <img
                        src={PHOTOS[m.founder]}
                        alt={m.founder}
                        className="absolute w-10 h-10 rounded-full object-cover object-top opacity-80"
                        style={{ top: "-10px", right: "calc(100% + 14px)", transform: "rotate(-2deg)" }}
                      />
                    )}
                    <p className="text-[11px] text-shefa-muted font-light whitespace-nowrap">
                      {m.founder}
                    </p>
                  </div>
                )}
                <p className="text-[13px] text-shefa-text font-light tracking-[0.5px] mb-1 whitespace-nowrap">
                  {pillar.title}
                </p>
                <p className="text-[12px] text-shefa-muted font-light leading-[1.7] w-[180px]">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="h-[160px]" />
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden divide-y divide-shefa-border">
        {thesis.pillars.map((p, i) => (
          <div key={p.key} className="py-8">
            <p className="text-[10px] tracking-[2px] text-shefa-accent uppercase mb-2">
              {MILESTONES[i].date}
            </p>
            {MILESTONES[i].founder && (
              <p className="text-[11px] text-shefa-muted mb-3">{MILESTONES[i].founder}</p>
            )}
            <h3 className="text-[16px] font-light mb-2">{p.title}</h3>
            <p className="text-[13px] text-shefa-muted font-light leading-[1.8]">{p.desc}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
