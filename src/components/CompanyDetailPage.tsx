"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LanguageContext";
import type { CompanyData } from "@/data/companies";

const ACCENT_BY_TAG: Record<string, string> = {
  FINTECH:      "text-shefa-accent border-shefa-accent",
  "WEB3":       "text-purple-400 border-purple-400",
  TOKENIZATION: "text-purple-400 border-purple-400",
  FOOD:         "text-orange-400 border-orange-400",
  CONSUMER:     "text-orange-400 border-orange-400",
  TRAVEL:       "text-emerald-400 border-emerald-400",
  METASEARCH:   "text-emerald-400 border-emerald-400",
  RETAIL:       "text-shefa-accent border-shefa-accent",
  LOGISTICS:    "text-shefa-accent border-shefa-accent",
  MARKETPLACE:  "text-shefa-accent border-shefa-accent",
};

export default function CompanyDetailPage({ company }: { company: CompanyData }) {
  const { lang } = useLang();
  const { theme } = useTheme();
  const logoSrc = (theme === "light" && company.logoLight) ? company.logoLight : company.logo;
  const displayTags = (lang === "es" && company.tagsEs) ? company.tagsEs : company.tags;
  const displayTagline = (lang === "es" && company.taglineEs) ? company.taglineEs : company.tagline;
  const displayMetrics = (lang === "es" && company.metricsEs) ? company.metricsEs : company.metrics;
  const primaryAccent = ACCENT_BY_TAG[displayTags[0]] ?? "text-shefa-accent border-shefa-accent";

  return (
    <>
      <Nav />
      <main className="bg-shefa-dark text-shefa-text">

        {/* ── HERO ────────────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] pt-16 pb-20 max-w-[1200px] mx-auto">

          {/* Breadcrumb */}
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-shefa-muted uppercase hover:text-shefa-text transition-colors mb-14"
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M1 5h12M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Portfolio
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {displayTags.map((tag) => (
              <span
                key={tag}
                className={`text-[10px] tracking-[3px] uppercase border px-2.5 py-1 ${ACCENT_BY_TAG[tag] ?? "text-shefa-muted border-shefa-border"}`}
              >
                {tag}
              </span>
            ))}
            {company.isNew && (
              <span className="text-[10px] tracking-[3px] uppercase border border-shefa-accent/40 text-shefa-accent/70 px-2.5 py-1">
                NEW
              </span>
            )}
          </div>

          {/* Logo / Name */}
          <div className="mb-6">
            {logoSrc ? (
              <img
                src={logoSrc}
                alt={company.name}
                className={`${company.logoHeight ?? "h-16"} w-auto object-contain`}
              />
            ) : (
              <h1 className="font-serif text-[clamp(48px,6vw,80px)] leading-[1]">{company.name}</h1>
            )}
          </div>

          {/* Tagline */}
          <p className="text-[clamp(18px,2.2vw,26px)] text-shefa-muted font-light leading-[1.5] max-w-[620px] mb-10">
            {displayTagline}
          </p>

          {/* Meta row */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {[
              { label: "Founded",  val: company.meta.founded  },
              { label: "Stage",    val: company.meta.stage    },
              { label: "HQ",       val: company.meta.hq       },
              ...(company.meta.website ? [{ label: "Web", val: company.meta.website }] : []),
            ].map(({ label, val }) => (
              <div key={label} className="flex items-baseline gap-2">
                <span className="text-[10px] tracking-[2.5px] text-shefa-muted uppercase">{label}</span>
                <span className="text-[13px] text-shefa-text">{val}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />

        {/* ── METRICS ─────────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] py-14 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-shefa-border">
            {displayMetrics.map((m) => (
              <div key={m.label} className="md:px-10 first:pl-0 last:pr-0">
                <p className={`font-serif text-[clamp(32px,3.5vw,48px)] leading-none mb-2 ${primaryAccent.split(" ")[0]}`}>
                  {m.num}
                </p>
                <p className="text-[11px] tracking-[2.5px] text-shefa-muted uppercase">{m.label}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />

        {/* ── ABOUT ───────────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] py-24 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-4">About</p>
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.15]">
                What is<br />{company.name}?
              </h2>
            </div>
            <p className="text-[16px] text-shefa-muted font-light leading-[1.9] self-center">
              {company.about}
            </p>
          </div>
        </section>

        <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />

        {/* ── FEATURES ────────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] py-24 max-w-[1200px] mx-auto">
          <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-4">What we build</p>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.15] mb-14 max-w-md">
            Core products & capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-shefa-border">
            {company.features.map((f, i) => (
              <div key={i} className="bg-shefa-dark p-8 md:p-10">
                <div className={`w-8 h-px mb-6 ${primaryAccent.split(" ")[0].replace("text-", "bg-")}`} />
                <h3 className="text-[15px] font-medium mb-4 leading-snug">{f.title}</h3>
                <p className="text-[13px] text-shefa-muted font-light leading-[1.8]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />

        {/* ── MILESTONES ──────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] py-24 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-4">History</p>
              <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.15]">
                Key<br />milestones
              </h2>
            </div>
            <div className="divide-y divide-shefa-border">
              {company.milestones.map((m, i) => (
                <div key={i} className="grid grid-cols-[80px_1fr] gap-6 py-6 items-baseline group">
                  <span className={`font-serif text-[22px] leading-none ${primaryAccent.split(" ")[0]} group-hover:opacity-80 transition-opacity`}>
                    {m.year}
                  </span>
                  <span className="text-[14px] text-shefa-muted font-light leading-[1.7]">{m.event}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />

        {/* ── SYNERGIES ───────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] py-24 max-w-[1200px] mx-auto">
          <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-4">Ecosystem</p>
          <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.15] mb-14 max-w-md">
            Synergies within SHEFA
          </h2>
          <div className="divide-y divide-shefa-border">
            {company.synergies.map((s, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 items-baseline group">
                <span className="text-[13px] font-medium tracking-[1px] group-hover:text-shefa-accent transition-colors">
                  {s.name}
                </span>
                <p className="text-[14px] text-shefa-muted font-light leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section className="px-6 md:px-[60px] py-24 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <h2 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.2]">
              Interested in {company.name}?
            </h2>
            <div className="md:text-right">
              <p className="text-[14px] text-shefa-muted font-light leading-[1.8] mb-6">
                Reach out to learn more about this company and investment opportunities within the SHEFA ecosystem.
              </p>
              <a
                href="/contact"
                className="inline-block text-[11px] tracking-[2px] uppercase text-shefa-accent border-b border-shefa-accent pb-px hover:text-shefa-hover hover:border-shefa-hover transition-colors"
              >
                Get in touch →
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
