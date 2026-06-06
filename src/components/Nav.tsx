"use client";

import Image from "next/image";
import Link from "next/link";
import PageSection from "@/components/PageSection";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";

export default function Nav() {
  const { t, lang, setLang } = useLang();
  const { theme, toggle } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    ["#ecosystem", t.nav.ecosystem],
    ["#value",     t.nav.value],
    ["#vs",        t.nav.vs],
    ["#portfolio", t.nav.portfolio],
    ["#team",      t.nav.team],
    ["#contact",   t.nav.contact],
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-shefa-border bg-shefa-dark">
      <PageSection className="flex items-center justify-between py-5">
        <Link href="/">
          <Image src="/shefa-logo.png" alt="SHEFA" height={36} width={36} className="rounded-lg" />
        </Link>

        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map(([href, label]) => (
            <li key={href}>
              <a
                href={isHome ? href : `/${href}`}
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
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="text-shefa-muted hover:text-shefa-text transition-colors"
          >
            {theme === "dark" ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <Link
            href="/contact"
            className="text-[11px] tracking-[2px] uppercase text-shefa-accent border-b border-shefa-accent pb-px hover:text-shefa-hover hover:border-shefa-hover transition-colors"
          >
            {t.nav.investors}
          </Link>
        </div>
      </PageSection>
    </nav>
  );
}
