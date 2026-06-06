"use client";

import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";
import styles from "./Team.module.css";

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
      <section id="team" className="py-36">
        <PageSection>
        <div className="text-center mb-20">
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] mb-6">{team.h2}</h2>
          <p className="text-[16px] text-shefa-muted font-light leading-[1.9]">{team.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.members.map((m) => (
            <a key={m.name} href={m.linkedin} target="_blank" rel="noopener noreferrer" className={`bg-shefa-dark border border-shefa-border flex flex-col overflow-hidden no-underline ${styles.card}`}>
              <div className={styles.inner}>
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
                  {m.bio && <p className="text-[12px] text-shefa-muted leading-[1.7] mt-3">{m.bio}</p>}
                </div>
              </div>
              <div className={styles.overlay}>
                <svg className={styles.linkedinIcon} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
            </a>
          ))}
        </div>
        </PageSection>
      </section>
    </>
  );
}
