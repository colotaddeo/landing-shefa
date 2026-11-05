"use client";

import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";
import styles from "./WorkplacePartner.module.css";

const WORKPLACE_URL = "https://www.workplaceirsa.com.ar/";

function CardIcon({ name }: { name: "spaces" | "experiences" | "events" }) {
  if (name === "spaces") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 20V8h6v12M10 20V4h10v16" strokeLinejoin="round" />
        <path d="M4 20h16" />
        <path d="M13 8h2M13 12h2M13 16h2M7 12h1.5M7 16h1.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "experiences") {
    return (
      <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <path d="M8.5 13.2c.9 1.5 2.1 2.2 3.5 2.2s2.6-.7 3.5-2.2" strokeLinecap="round" />
        <circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none" />
        <circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M8 3.5V7M16 3.5V7M4 10h16" strokeLinecap="round" />
    </svg>
  );
}

const ICONS = ["spaces", "experiences", "events"] as const;

// Texto con **negritas** -> resaltado en naranja (para las métricas).
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={styles.hl}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function ArrowIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function WorkplacePartner() {
  const { t } = useLang();
  const wp = t.workplacePartner;

  return (
    <>
      <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
      <section id="workplace" aria-labelledby="workplace-heading" className="scroll-mt-24 bg-shefa-dark py-28">
        <PageSection>
          <p className="mb-4 text-[11px] uppercase tracking-[0.28em] text-shefa-muted">
            {wp.eyebrow}
          </p>
          <a
            href={WORKPLACE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={`Workplace by IRSA — ${wp.line1} ${wp.line2Lead}${wp.line2Accent}${wp.line3}`}
            className={styles.stage}
          >
            <div className={styles.inner}>
              <div className={styles.layout}>
                <div>
                  <h2 id="workplace-heading" className={styles.display}>
                    <span className={styles.lead}>{wp.line1}</span>
                    <span>
                      {wp.line2Lead}
                      <span className={styles.accent}>{wp.line2Accent}</span>
                    </span>
                    <span className={styles.accent}>{wp.line3}</span>
                  </h2>
                  <p className={styles.kicker}>{wp.kicker}</p>
                  <p className={styles.body}>{wp.body}</p>
                </div>

                <div className={styles.cards}>
                  {wp.cards.map((card, i) => (
                    <article key={card.title} className={styles.card}>
                      <div className={styles.cardTop}>
                        <h3 className={styles.cardTitle}>{card.title}</h3>
                        <CardIcon name={ICONS[i]} />
                      </div>
                      <p className={styles.cardBody}>
                        <Rich text={card.body} />
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.panel} aria-hidden="true">
              <ArrowIcon />
            </div>
          </a>
        </PageSection>
      </section>
    </>
  );
}
