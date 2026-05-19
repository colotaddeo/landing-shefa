"use client";

import { useLang } from "@/context/LanguageContext";

export default function CTA() {
  const { t } = useLang();
  const { cta } = t;

  return (
    <section id="contact" className="border-t border-shefa-border px-6 md:px-[60px] py-36">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
        <h2 className="font-serif text-[clamp(36px,4vw,64px)] leading-[1.1]">{cta.h2}</h2>
        <div className="flex flex-col gap-6 justify-end">
          <p className="text-[16px] text-shefa-muted font-light leading-[1.9]">{cta.desc}</p>
          <a
            href={`mailto:${cta.email}`}
            className="text-[13px] tracking-[2px] uppercase text-shefa-accent border-b border-shefa-accent pb-px w-fit hover:text-shefa-hover hover:border-shefa-hover transition-colors"
          >
            {cta.btn} →
          </a>
        </div>
      </div>
    </section>
  );
}
