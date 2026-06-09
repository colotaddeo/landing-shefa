"use client";

import { useState } from "react";
import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";

export default function Hero() {
  const { t, lang } = useLang();
  const { hero } = t;
  const videoSrc = lang === "es" ? "/videos/HERO%20-%20ES.mp4" : "/videos/HERO%20-%20EN.mp4";
  const [ready, setReady] = useState(false);

  return (
    <section className="pt-[60px] pb-32">
      <PageSection className="relative">

        <h1 className="font-serif text-[clamp(40px,6vw,88px)] leading-[1.05] tracking-[-1px] max-w-[1200px] mb-3 mx-auto text-center">
          {hero.h1a}<br />
          <em className="italic text-shefa-accent">{hero.h1b}</em>{" "}
          {hero.h1c}{" "}
          <em className="italic text-shefa-accent">{hero.h1d}</em>{" "}
          {hero.h1e}
        </h1>

        <p className="text-[16px] md:text-[18px] text-shefa-muted font-light leading-[1.55] max-w-[680px] mb-6 mx-auto text-center">
          {hero.sub}
        </p>

        {/* Financial chart divider */}
        <div className="w-full mb-6 overflow-hidden">
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
              points="0,42 55,42 85,18 115,34 155,6 190,28 225,14 260,36 298,7 332,26 368,4 402,22 438,13 472,39 508,19 544,31 578,9 614,27 650,17 684,36 720,5 756,23 790,13 826,40 862,19 898,9 932,28 966,15 1002,40 1042,21 1082,5 1122,27 1162,13 L1200,21"
              fill="none"
              stroke="#30BCDB"
              strokeWidth="1"
              strokeOpacity="0.25"
            />
          </svg>
        </div>

        {/* Video */}
        <div className="mb-20 relative" style={{ maxHeight: "700px", aspectRatio: "16/9" }}>
          {/* Glow border */}
          <div
            className="absolute -inset-0 rounded-xl"
            style={{
              border: "2px solid rgba(48,188,219,0.5)",
              boxShadow: "0 0 20px 4px rgba(48,188,219,0.25), 0 0 60px 8px rgba(48,188,219,0.1)",
              filter: "blur(0.5px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* Player */}
          <div className="relative z-10 rounded-xl overflow-hidden w-full h-full">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setReady(true)}
              className="w-full h-full object-cover"
              aria-label="SHEFA Holdings — Retail, Blockchain and AI ecosystem video"
            />
          </div>

          {/* Placeholder while video loads */}
          {!ready && (
            <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 pointer-events-none">
              <img src="/logoshefa.png" alt="" className="w-12 h-12" />
              <span className="text-4xl font-light tracking-[0.2em]" style={{ color: "var(--shefa-text)" }}>
                SHEFA
              </span>
            </div>
          )}
        </div>

      </PageSection>
    </section>
  );
}
