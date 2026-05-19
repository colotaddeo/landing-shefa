"use client";

import { useLang } from "@/context/LanguageContext";

export default function Formula() {
  const { t } = useLang();
  const { formula } = t;

  return (
    <>
      <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
      <section id="formula" className="px-6 md:px-[60px] py-36">
        <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-10">{formula.tag}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1]">{formula.h2}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {formula.items.map((item, i) => (
            <div
              key={item.title}
              className="relative bg-shefa-dark px-10 pt-10 pb-12 flex flex-col justify-end min-h-[300px] overflow-hidden"
            >
              <span
                className="absolute inset-0 pl-10 font-serif leading-[0.85] select-none flex items-center justify-start z-0"
                style={{ fontSize: "clamp(160px, 18vw, 260px)", color: "rgba(48,188,219,0.13)" }}
              >
                {i + 1}
              </span>
              <div className="relative z-10">
                <h4 className="text-[17px] font-light tracking-[0.5px] mb-3">{item.title}</h4>
                <p className="text-[14px] text-shefa-muted font-light leading-[1.8]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
