"use client";

import { useLang } from "@/context/LanguageContext";

const PHOTOS: Record<string, string> = {
  "Ben Elsztain":      "/team/ben-elsztain.png",
  "Rodrigo Benzaquen": "/team/rodrigo-benzaquen.png",
  "Ricardo Schulte":   "/team/ricardo-schulte.avif",
};

export default function Team() {
  const { t } = useLang();
  const { team } = t;

  return (
    <>
      <div className="h-px bg-shefa-border max-w-[1200px] mx-auto" />
      <section id="team" className="px-6 md:px-[60px] py-36">
        <div className="max-w-[1200px] mx-auto">
        <p className="text-[11px] tracking-[4px] text-shefa-muted uppercase mb-10">{team.tag}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1]">{team.h2}</h2>
          <p className="text-[16px] text-shefa-muted font-light leading-[1.9] self-end">{team.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.members.map((m) => (
            <div key={m.name} className="bg-shefa-dark border border-shefa-border flex flex-col overflow-hidden">
              <div className="flex justify-center pt-8 pb-4">
                {PHOTOS[m.name] ? (
                  <img
                    src={PHOTOS[m.name]}
                    alt={m.name}
                    className="w-36 h-36 rounded-full object-cover object-top opacity-90"
                  />
                ) : (
                  <div className="w-36 h-36 rounded-full bg-shefa-border flex items-center justify-center">
                    <span className="font-serif text-[48px] text-shefa-muted">{m.initials}</span>
                  </div>
                )}
              </div>
              <div className="px-6 py-5 text-center">
                <p className="font-serif text-[22px] leading-tight mb-1">{m.name}</p>
                <p className="text-[10px] tracking-[2px] text-shefa-accent uppercase">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}
