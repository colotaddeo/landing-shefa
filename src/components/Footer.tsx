"use client";

import Image from "next/image";
import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";

export default function Footer() {
  const { t } = useLang();
  const { footer } = t;

  return (
    <footer className="border-t border-shefa-border">
      <PageSection className="flex flex-col md:flex-row justify-between items-center gap-3 py-6">
        <Image src="/logoshefa.png" alt="SHEFA" width={80} height={24} className="h-6 w-auto object-contain" />
        <span className="text-[11px] text-shefa-muted tracking-[1px]">{footer.copy}</span>
      </PageSection>
    </footer>
  );
}
