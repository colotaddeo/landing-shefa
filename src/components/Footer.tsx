"use client";

import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  const { footer } = t;

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-3 px-6 md:px-[60px] py-6 border-t border-shefa-border">
      <span className="font-serif text-[15px] text-shefa-text tracking-[1px]">SHEFA</span>
      <span className="text-[11px] text-shefa-muted tracking-[1px]">{footer.copy}</span>
      <a href="#" className="text-[11px] text-shefa-muted tracking-[1px] hover:text-shefa-text transition-colors">
        {footer.privacy}
      </a>
    </footer>
  );
}
