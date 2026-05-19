"use client";

import { useLang } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  const { hero } = t;

  return (
    <section className="px-6 md:px-[60px] pt-[100px] pb-32">
      <div className="max-w-[1200px] mx-auto relative">

        {/* Bubbles — right side, vertical stack */}
        <div className="hidden md:flex flex-col gap-4 absolute top-0 right-0">
          {hero.network.map((item) => (
            <div key={item.name} className="relative group flex items-center justify-end">
              {/* Tooltip — appears to the left */}
              <div className="absolute right-full mr-4 pointer-events-none text-right
                              opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0
                              transition-all duration-200 ease-out whitespace-nowrap z-10">
                <div className="text-[10px] tracking-[2.5px] text-shefa-text uppercase font-medium mb-0.5">
                  {item.name}
                </div>
                <div className="text-[10px] text-shefa-muted font-light">
                  {item.desc}
                </div>
              </div>

              {/* Bubble */}
              <div className="w-[68px] h-[68px] rounded-full border border-shefa-border bg-shefa-card
                              flex items-center justify-center overflow-hidden cursor-default
                              transition-all duration-300
                              group-hover:border-shefa-accent/60 group-hover:shadow-[0_0_16px_rgba(201,165,92,0.15)]">
                <img
                  src={`/logos/${item.name.toLowerCase()}.png`}
                  alt={item.name}
                  className="w-10 h-10 object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-serif text-[clamp(52px,8vw,110px)] leading-[1.05] tracking-[-1px] max-w-[900px] mb-16">
          {hero.h1a}{" "}
          <em className="italic text-shefa-accent">{hero.h1b}</em>{" "}
          {hero.h1c}{" "}
          <em className="italic text-shefa-accent">{hero.h1d}</em>{" "}
          {hero.h1e}
        </h1>

        <p className="text-[16px] text-shefa-muted font-light leading-[1.9] max-w-[540px] mb-20">
          {hero.sub}
        </p>

        {/* Financial chart divider */}
        <div className="w-full mb-12 overflow-hidden">
          <svg viewBox="0 0 1200 52" className="w-full h-[52px]" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#30BCDB" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#30BCDB" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M0,42 L55,42 L85,18 L115,34 L155,6 L190,28 L225,14 L260,36 L298,7 L332,26 L368,4 L402,22 L438,13 L472,39 L508,19 L544,31 L578,9 L614,27 L650,17 L684,36 L720,5 L756,23 L790,13 L826,40 L862,19 L898,9 L932,28 L966,15 L1002,40 L1042,21 L1082,5 L1122,27 L1162,13 L1200,21 L1200,52 L0,52 Z"
              fill="url(#chartFill)"
            />
            <polyline
              points="0,42 55,42 85,18 115,34 155,6 190,28 225,14 260,36 298,7 332,26 368,4 402,22 438,13 472,39 508,19 544,31 578,9 614,27 650,17 684,36 720,5 756,23 790,13 826,40 862,19 898,9 932,28 966,15 1002,40 1042,21 1082,5 1122,27 1162,13 1200,21"
              fill="none"
              stroke="#30BCDB"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {hero.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-[48px] leading-none text-shefa-text mb-2">{s.num}</div>
              <div className="text-[11px] text-shefa-muted tracking-[2px] uppercase">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
