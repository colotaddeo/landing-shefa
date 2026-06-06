"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { en, type Lang } from "@/i18n/en";
import { es } from "@/i18n/es";

type LangCode = "en" | "es";

interface LanguageContextValue {
  lang: LangCode;
  t: Lang;
  setLang: (l: LangCode) => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("en");

  useEffect(() => {
    // Leer preferencia guardada después de hidratar para evitar errores de SSR
    try {
      let detected: LangCode | null = null;
      const saved = localStorage.getItem("shefa-lang");
      if (saved === "es" || saved === "en") {
        detected = saved as LangCode;
      }
      // Si no hay preferencia guardada, usar el idioma del navegador
      if (!detected) {
        const browserLang = navigator.language?.toLowerCase();
        if (browserLang?.startsWith("es")) detected = "es";
      }
      if (detected) setLangState(detected);
    } catch {
      // localStorage puede no estar disponible
    }
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    try {
      localStorage.setItem("shefa-lang", l);
    } catch {
      // ignore
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: lang === "en" ? en : es, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
