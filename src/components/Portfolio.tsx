"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import { COMPANIES } from "@/data/companies";

const LOGOS: Record<string, string> = {
  "APPA":         "/logos/appa.png",
  "BoulderTech":  "/logos/bouldertech.png",
  "Tucán":        "/logos/tucan.png",
  "TurismoCity":  "/logos/turismocity.png",
  "Avenida":      "/logos/avenida.png",
  "IceLabs":      "/logos/icelabs.png",
};

const LOGO_HEIGHT: Record<string, string> = {
  "BoulderTech": "h-7",
  "Avenida":     "h-9",
};

/** Map display name → slug */
const NAME_TO_SLUG: Record<string, string> = Object.fromEntries(
  COMPANIES.map((c) => [c.name, c.slug])
);
// Handle accented variant used in i18n ("Tucán")
NAME_TO_SLUG["Tucán"] = "tucan";

export default function Portfolio() {
  const { t } = useLang();
  const { portfolio } = t;

  return (
    <>
      <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
      <section id="portfolio" className="px-6 md:px-[60px] py-36">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-10">{portfolio.tag}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1]">{portfolio.h2}</h2>
            <p className="text-[16px] text-shefa-muted font-light leading-[1.9] self-end">{portfolio.desc}</p>
          </div>

          <div className="divide-y divide-shefa-border">
            {portfolio.companies.map((c) => {
              const slug = NAME_TO_SLUG[c.name];
              const row = (
                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 md:gap-8 py-8 items-baseline group">
                  <span className="flex items-center group-hover:opacity-80 transition-opacity">
                    {LOGOS[c.name]
                      ? <img src={LOGOS[c.name]} alt={c.name} className={`${LOGO_HEIGHT[c.name] ?? "h-14"} w-auto object-contain`} />
                      : <span className="font-serif text-[28px] leading-none">{c.name}</span>
                    }
                  </span>
                  <p className="text-[14px] text-shefa-muted font-light leading-[1.8]">{c.desc}</p>
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <span className="text-[11px] text-shefa-muted tracking-[2px] uppercase">{c.tag}</span>
                    {slug && (
                      <span className="text-[11px] tracking-[1.5px] text-shefa-accent uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                        Ver →
                      </span>
                    )}
                  </div>
                </div>
              );

              return slug ? (
                <Link key={c.name} href={`/portfolio/${slug}`} className="block hover:bg-shefa-card transition-colors -mx-4 px-4 rounded-sm">
                  {row}
                </Link>
              ) : (
                <div key={c.name}>{row}</div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
