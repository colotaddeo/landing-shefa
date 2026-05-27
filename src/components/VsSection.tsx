"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/context/LanguageContext";
import styles from "./VsSection.module.css";

export default function VsSection() {
  const { t } = useLang();
  const { vs } = t;

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  // ── Mobile detection ─────────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // ── Placeholder during mount ──────────────────────────────────────────────
  if (isMobile === null) {
    return (
      <>
        <div className="h-px bg-shefa-border" />
        <section id="formula" className="bg-shefa-dark" style={{ height: "100vh" }} />
      </>
    );
  }

  // ── MOBILE: vertical stack ────────────────────────────────────────────────
  if (isMobile) {
    return (
      <>
        <div className="h-px bg-shefa-border" />
        <section id="formula" className="relative px-6 py-24 bg-shefa-dark overflow-hidden">
          <div className={`absolute inset-0 pointer-events-none ${styles.dotGrid}`} />
          <div className="absolute pointer-events-none" style={{ top: "-5%", left: "-5%", width: 400, height: 400, background: "rgba(255,128,148,0.12)", filter: "blur(100px)", borderRadius: "50%" }} />
          <div className="absolute pointer-events-none" style={{ bottom: "-5%", right: "-5%", width: 400, height: 400, background: "rgba(48,188,219,0.12)", filter: "blur(100px)", borderRadius: "50%" }} />

          <div className="relative">
            <h2 className="font-serif italic font-light text-[clamp(32px,8vw,52px)] leading-[1.05] text-center mb-8">
              {vs.s1h2a}{" "}<span style={{ color: "#ff8094" }}>{vs.s1h2b}</span>
              {vs.s1h2c ? <>{" "}{vs.s1h2c}</> : null}
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-16">
              {vs.barriers.map((item, i) => (
                <div key={i} className="p-4 rounded-sm flex flex-col gap-2"
                  style={{ background: "rgba(15,15,22,0.9)", border: "1px solid rgba(48,188,219,0.15)", borderTop: "1px solid rgba(48,188,219,0.35)" }}>
                  <span className="text-[10px] tracking-[2px] font-mono" style={{ color: "rgba(48,188,219,0.45)" }}>{item.n}</span>
                  <h4 className="text-[12px] font-medium text-shefa-text">{item.title}</h4>
                  <p className="text-[11px] text-shefa-muted font-light leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-14">
              <div className="h-px flex-1 bg-shefa-border" />
              <span className="text-[11px] tracking-[0.32em] text-shefa-muted uppercase">VS</span>
              <div className="h-px flex-1 bg-shefa-border" />
            </div>

            <h2 className="font-serif text-[clamp(32px,8vw,52px)] leading-[1.05] text-center mb-8">
              {vs.s2h2a}{" "}<em className="italic" style={{ color: "#30BCDB" }}>{vs.s2h2b}</em>
              {vs.s2h2c ? <>{" "}{vs.s2h2c}</> : null}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {vs.advantages.map((item, i) => (
                <div key={i} className="p-4 rounded-sm flex flex-col gap-2"
                  style={{ background: "rgba(48,188,219,0.04)", border: "1px solid rgba(48,188,219,0.4)", boxShadow: "0 20px 40px -20px rgba(48,188,219,0.2)" }}>
                  <span className="text-[10px] tracking-[2px] font-mono" style={{ color: "rgba(48,188,219,0.6)" }}>{item.n}</span>
                  <h4 className="text-[12px] font-medium text-shefa-text">{item.title}</h4>
                  <p className="text-[11px] text-shefa-muted font-light leading-[1.7]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  // ── DESKTOP: static two-column layout ─────────────────────────────────────
  return (
    <>
      <div className="h-px bg-shefa-border" />
      <section
        id="formula"
        className="relative overflow-hidden bg-shefa-dark py-28"
      >
        {/* Dot-grid — static, below everything */}
        <div
          className={`absolute pointer-events-none ${styles.dotGrid}`}
          style={{ inset: "-10% -20%" }}
        />

        {/* Glows */}
        <div className="absolute pointer-events-none" style={{ top: "-5%", left: "-5%", width: 500, height: 500, background: "rgba(255,128,148,0.15)", filter: "blur(120px)", borderRadius: "50%" }} />
        <div className="absolute pointer-events-none" style={{ bottom: "-5%", right: "-5%", width: 500, height: 500, background: "rgba(48,188,219,0.15)", filter: "blur(120px)", borderRadius: "50%" }} />

        <div className="relative max-w-[1100px] mx-auto px-[60px]">
          {/* Eyebrow VS */}
          <div className="flex items-center justify-center gap-5 mb-14">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-[11px] tracking-[0.32em] text-shefa-muted uppercase select-none">VS</span>
            <div className="h-px flex-1 max-w-[120px]" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-2 gap-8">
            {/* ── Left column: Barriers ── */}
            <div>
              <h2 className="font-serif italic font-light text-[clamp(28px,3.2vw,48px)] leading-[1.05] text-center mb-10">
                {vs.s1h2a}{" "}
                <span style={{ color: "#ff8094" }}>{vs.s1h2b}</span>
                {vs.s1h2c ? <>{" "}{vs.s1h2c}</> : null}
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {vs.barriers.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-sm flex flex-col gap-2"
                    style={{
                      background:     "rgba(15,15,22,0.8)",
                      border:         "1px solid rgba(48,188,219,0.15)",
                      borderTop:      "1px solid rgba(48,188,219,0.35)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <span className="text-[10px] tracking-[2px] font-mono" style={{ color: "rgba(48,188,219,0.45)" }}>{item.n}</span>
                    <h4 className="text-[13px] font-medium tracking-[0.3px] text-shefa-text">{item.title}</h4>
                    <p className="text-[12px] text-shefa-muted font-light leading-[1.75]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right column: Shefa advantages ── */}
            <div>
              <h2 className="font-serif text-[clamp(28px,3.2vw,48px)] leading-[1.05] text-center mb-10">
                {vs.s2h2a}{" "}
                <em className="italic" style={{ color: "#30BCDB" }}>{vs.s2h2b}</em>
                {vs.s2h2c ? <>{" "}{vs.s2h2c}</> : null}
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {vs.advantages.map((item, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-sm flex flex-col gap-3"
                    style={{
                      background: "rgba(48,188,219,0.04)",
                      border:     "1px solid rgba(48,188,219,0.45)",
                      boxShadow:  "0 30px 60px -30px rgba(48,188,219,0.25)",
                    }}
                  >
                    <span className="text-[10px] tracking-[2px] font-mono" style={{ color: "rgba(48,188,219,0.6)" }}>{item.n}</span>
                    <h4 className="text-[14px] font-medium tracking-[0.3px] text-shefa-text">{item.title}</h4>
                    <p className="text-[13px] text-shefa-muted font-light leading-[1.8]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
