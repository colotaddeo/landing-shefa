"use client";

import Link from "next/link";
import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";

export default function CTA() {
  const { t } = useLang();
  const { cta } = t;

  return (
    <section id="contact" className="py-24">
      <PageSection className="flex flex-col items-center text-center gap-10">
        <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1]">{cta.h2}</h2>
        <p className="text-[16px] text-shefa-muted font-light leading-[1.9] max-w-[640px]">{cta.desc}</p>
        <Link
          href="/contact/"
          className="text-[13px] tracking-[2px] uppercase text-shefa-accent border-b border-shefa-accent pb-px hover:text-shefa-hover hover:border-shefa-hover transition-colors"
        >
          {cta.btn} →
        </Link>
      </PageSection>
    </section>
  );
}
