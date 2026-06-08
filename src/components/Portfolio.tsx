"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { useLang } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { COMPANIES } from "@/data/companies";
import styles from "./Portfolio.module.css";

const LOGOS_LIGHT: Record<string, string> = {
  "Avenida": "/logos/avenidaparalightmode.png",
  "IceLabs": "/logos/icelabs-lightmode.png",
  "Tucán":   "/logos/logotucan lightmode.png",
};

const LOGO_CARD_HEIGHT: Record<string, string> = {
  "Avenida": "36px",
  "TurismoCity": "52px",
};

const TIMING = [
  { enterEnd: 0.12, exitStart: 0.70 },
  { enterEnd: 0.16, exitStart: 0.73 },
  { enterEnd: 0.20, exitStart: 0.76 },
  { enterEnd: 0.24, exitStart: 0.79 },
  { enterEnd: 0.28, exitStart: 0.82 },
  { enterEnd: 0.32, exitStart: 0.85 },
];

const easeOut = (t: number) => 1 - Math.pow(1 - t, 2.5);
const easeIn  = (t: number) => Math.pow(t, 2.2);

const isNumericMetric = (val: string) =>
  /^[+$€]?[\d,.]+[MKB%+]?$/.test(val.trim());

export default function Portfolio() {
  const { t, lang } = useLang();
  const { portfolio } = t;
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs   = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth <= 768) return; // mobile uses static layout

      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const scrollable = section.offsetHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / scrollable));

      TIMING.forEach(({ enterEnd, exitStart }, i) => {
        const card = cardRefs.current[i];
        if (!card) return;

        let ty: number;
        let opacity: number;

        if (p <= enterEnd) {
          const e = easeOut(p / enterEnd);
          ty = (1 - e) * 110;
          opacity = e;
        } else if (p <= exitStart) {
          ty = 0;
          opacity = 1;
        } else {
          const t = (p - exitStart) / (1 - exitStart);
          ty = -easeIn(t) * 110;
          opacity = 1;
        }

        card.style.transform = `translateY(${ty}vh)`;
        card.style.opacity   = String(Math.max(0, Math.min(1, opacity)));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
      <section id="portfolio" className={styles.section} ref={sectionRef}>
        <div className={styles.sticky}>
          <h2 className={styles.bgTitle}>
            {portfolio.mobileTitle.split(" ")[0]}<br />{portfolio.mobileTitle.split(" ")[1]}
          </h2>

          <h2 className="md:hidden font-serif italic font-light text-[clamp(32px,8vw,48px)] leading-[1.1] text-shefa-text text-center mb-8">
            {portfolio.mobileTitle}
          </h2>

          <div className={styles.cardsWrapper}>
            {COMPANIES.map((company, i) => {
              const logoSrc =
                theme === "light" && LOGOS_LIGHT[company.name]
                  ? LOGOS_LIGHT[company.name]
                  : company.logo;
              const isEs = lang === "es";
              const displayTagline = isEs && company.taglineEs ? company.taglineEs : company.tagline;
              const displayTags = isEs && company.tagsEs ? company.tagsEs : company.tags;
              const displayMetrics = isEs && company.metricsEs ? company.metricsEs : company.metrics;
              const metric = displayMetrics[0];
              const numericMetric = isNumericMetric(metric.num);

              return (
                <Link
                  key={company.slug}
                  href={`/portfolio/${company.slug}`}
                  className={styles.card}
                  ref={(el) => { cardRefs.current[i] = el; }}
                >
                  <div className={styles.cardLogo}>
                    {logoSrc ? (
                      <img
                        src={logoSrc}
                        alt={company.name}
                        className={styles.logoImg}
                        style={LOGO_CARD_HEIGHT[company.name] ? { maxHeight: LOGO_CARD_HEIGHT[company.name] } : undefined}
                      />
                    ) : (
                      <span className={styles.logoFallback}>{company.name}</span>
                    )}
                  </div>

                  <p className={styles.cardTagline}>{displayTagline}</p>

                  <div className={styles.cardMetric}>
                    <span className={numericMetric ? styles.metricNum : styles.metricNumText}>
                      {metric.num}
                    </span>
                    <span className={styles.metricLabel}>{metric.label}</span>
                  </div>

                  <div className={styles.cardTags}>
                    {displayTags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.cardArrow} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
