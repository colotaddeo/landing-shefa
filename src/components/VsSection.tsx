"use client";

import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";
import styles from "./VsSection.module.css";

export default function VsSection() {
  const { t } = useLang();
  const { vs } = t;

  return (
    <>
      <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
      <section id="vs" className="relative overflow-hidden bg-shefa-dark py-32">
        <div className={`absolute inset-0 pointer-events-none ${styles.dotGrid}`} />
        <div className="absolute pointer-events-none hidden md:block" style={{ top: "-5%", left: "-5%", width: 500, height: 500, background: "rgba(255,128,148,0.12)", filter: "blur(120px)", borderRadius: "50%" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-5%", right: "-5%", width: 500, height: 500, background: "rgba(48,188,219,0.12)", filter: "blur(120px)", borderRadius: "50%" }} />

        <PageSection className="relative">
          {/* Header */}
          <div className="text-center mb-12">
<h2 className="font-serif italic font-light text-[clamp(36px,4vw,56px)] leading-[1.1] text-shefa-text mb-5">
              {vs.title}
            </h2>
            <p className="text-[16px] text-shefa-muted max-w-[640px] mx-auto leading-relaxed tracking-[0.05em]">
              {vs.subtitle}
            </p>
          </div>

          {/* Comparison table */}
          <div className={styles.table}>
            {/* Column headers */}
            <div className={styles.headerRow}>
              <div className={styles.labelCell} />
              <div className={`${styles.vcCell}`} data-label={vs.col1}>
                {vs.col1}
              </div>
              <div className={`${styles.shefaCell}`} data-label={vs.col2}>
                {vs.col2}
              </div>
            </div>

            {/* Data rows */}
            {vs.rows.map((row, i) => (
              <div key={i} className={`${styles.dataRow}${i % 2 === 0 ? ` ${styles.rowEven}` : ""}`}>
                <div className={styles.labelCell}>{row.label}</div>
                <div className={styles.vcCell} data-label={vs.col1} dangerouslySetInnerHTML={{ __html: row.vc }} />
                <div className={styles.shefaCell} data-label={vs.col2} dangerouslySetInnerHTML={{ __html: row.shefa }} />
              </div>
            ))}
          </div>
        </PageSection>
      </section>
    </>
  );
}
