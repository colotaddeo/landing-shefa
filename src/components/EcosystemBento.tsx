"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import styles from "./EcosystemBento.module.css";

export default function EcosystemBento() {
  const { t } = useLang();
  const { ecosystem } = t;

  return (
    <section
      aria-labelledby="ecosystem-heading"
      className="px-6 md:px-[60px] py-20"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Section header */}
        <div className="mb-10">
          <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-10">
            {ecosystem.eyebrow}
          </p>
          <h2
            id="ecosystem-heading"
            className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1]"
          >
            {ecosystem.h2a}{" "}
            <em className="italic text-[#22d3ee]">{ecosystem.h2b}</em>{" "}
            {ecosystem.h2c}{" "}
            <em className="italic text-[#22d3ee]">{ecosystem.h2d}</em>
          </h2>
        </div>

        {/* Bento grid */}
        <div className={styles.grid}>

          {/* ── 1. IRSA — Anchor Partner (col 1–2, row 1–2) ── */}
          <div className={`${styles.cell} ${styles.cellIrsa}`}>
            <div aria-hidden="true" className={styles.irsaGlow} />
            <div>
              <div className={styles.irsaLogoRow}>
                <img className={styles.logoLg} src="/logos/irsa.png" alt="IRSA" />
                <div>
                  <div className={styles.irsaName}>IRSA</div>
                  <div className={styles.irsaAnchor}>{ecosystem.irsa.anchor}</div>
                </div>
              </div>
              <div className={styles.reveal}>
                <p className={styles.irsaDescription}>{ecosystem.irsa.desc}</p>
              </div>
            </div>
            <div className={styles.irsaMetrics}>
              <div>
                <div className={styles.irsaMetricNum}>{ecosystem.irsa.stat1Num}</div>
                <div className={styles.irsaMetricLabel}>{ecosystem.irsa.stat1Label}</div>
              </div>
              <div>
                <div className={styles.irsaMetricNum}>{ecosystem.irsa.stat2Num}</div>
                <div className={styles.irsaMetricLabel}>{ecosystem.irsa.stat2Label}</div>
              </div>
            </div>
          </div>

          {/* ── 2. +4M Active Users (col 3, row 1) ── */}
          <div className={`${styles.cell} ${styles.cellActiveUsers}`}>
            <div className={styles.metricLabel}>{ecosystem.activeUsers.label}</div>
            <div>
              <div className={`${styles.metricNumber} ${styles.numLg}`}>+4M</div>
              <div className={styles.reveal}>
                <span className={styles.metricCaption}>{ecosystem.activeUsers.caption}</span>
              </div>
            </div>
          </div>

          {/* ── 3. Endeavor (col 4, row 1) ── */}
          <div className={`${styles.cell} ${styles.cellEndeavor}`}>
            <img className={styles.logoSm} src="/logos/endeavor.png" alt="Endeavor" />
            <div>
              <div className={styles.partnerName}>{ecosystem.endeavor.label}</div>
              <div className={styles.reveal}>
                <span className={styles.partnerTagline}>{ecosystem.endeavor.desc}</span>
              </div>
            </div>
          </div>

          {/* ── 4. ARCAP (col 3, row 2) ── */}
          <div className={`${styles.cell} ${styles.cellArcap}`}>
            <img className={styles.logoSm} src="/logos/arcap.png" alt="ARCAP" />
            <div>
              <div className={styles.partnerName}>{ecosystem.arcap.label}</div>
              <div className={styles.reveal}>
                <span className={styles.partnerTagline}>{ecosystem.arcap.desc}</span>
              </div>
            </div>
          </div>

          {/* ── 5. +8K Brands (col 4, row 2) ── */}
          <div className={`${styles.cell} ${styles.cellBrands}`}>
            <div className={styles.metricLabel}>{ecosystem.brands.label}</div>
            <div>
              <div className={styles.brandsNumber}>+8K</div>
              <div className={styles.reveal}>
                <span className={styles.metricCaption}>{ecosystem.brands.caption}</span>
              </div>
            </div>
          </div>

          {/* ── 6. Workplace (col 1, row 3) — CTA, links to portfolio ── */}
          <Link href="/portfolio" className={`${styles.cell} ${styles.cellWorkplace}`}>
            <div className={styles.workplaceTop}>
              <img className={styles.logoSm} src="/logos/workplace.png" alt="Workplace" />
              <span aria-hidden="true" className={styles.workplaceArrow}>↗</span>
            </div>
            <div>
              <div className={styles.partnerName}>{ecosystem.workplace.label}</div>
              <div className={styles.reveal}>
                <div className={styles.workplacePortfolio}>{ecosystem.workplace.cta}</div>
                <span className={styles.partnerTagline}>{ecosystem.workplace.desc}</span>
              </div>
            </div>
          </Link>

          {/* ── 7. 2.5M Monthly TXN (col 2, row 3) ── */}
          <div className={`${styles.cell} ${styles.cellMonthlyTxn}`}>
            <div className={styles.txnLabelRow}>
              <span className={styles.metricLabel}>{ecosystem.monthlyTxn.label}</span>
              <span aria-hidden="true" className={styles.txnDot} />
            </div>
            <div className={styles.txnNumber}>2.5M</div>
          </div>

          {/* ── 8. 3K+ Merchants (col 3–4, row 3) — wide cell ── */}
          <div className={`${styles.cell} ${styles.cellMerchants}`}>
            <div className={styles.metricLabel}>{ecosystem.merchants.label}</div>
            <div>
              <div className={`${styles.metricNumber} ${styles.numMd}`}>3K+</div>
              <div className={styles.reveal}>
                <span className={styles.metricCaption}>{ecosystem.merchants.caption}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
