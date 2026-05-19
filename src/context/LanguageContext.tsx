"use client";

import { createContext, useContext, useState } from "react";
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

  const setLang = (l: LangCode) => {
    setLangState(l);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <LanguageContext.Provider value={{ lang, t: lang === "en" ? en : es, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
