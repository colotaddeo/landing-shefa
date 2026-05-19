"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";

export default function Nav() {
  const { t, lang, setLang } = useLang();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-[60px] py-5 border-b border-shefa-border bg-shefa-dark">
      <Image src="/shefa-logo.png" alt="SHEFA" height={36} width={36} className="rounded-lg" />

      <ul className="hidden md:flex gap-10 list-none">
        {[
          ["#thesis",    t.nav.thesis],
          ["#formula",   t.nav.formula],
          ["#portfolio", t.nav.portfolio],
          ["#team",      t.nav.team],
          ["#contact",   t.nav.contact],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[11px] text-shefa-muted tracking-[2px] uppercase hover:text-shefa-text transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <div className="flex text-[11px] tracking-[1.5px] gap-3">
          {(["en", "es"] as const).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`transition-colors ${
                lang === l ? "text-shefa-accent" : "text-shefa-muted hover:text-shefa-text"
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <a
          href="#contact"
          className="text-[11px] tracking-[2px] uppercase text-shefa-accent border-b border-shefa-accent pb-px hover:text-shefa-hover hover:border-shefa-hover transition-colors"
        >
          {t.nav.investors}
        </a>
      </div>
    </nav>
  );
}
