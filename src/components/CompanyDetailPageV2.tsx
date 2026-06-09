"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLang } from "@/context/LanguageContext";
import type { CompanyData } from "@/data/companies";
import styles from "./CompanyDetailPageV2.module.css";

const PLATFORM_LABEL: Record<string, string> = {
  instagram: "Instagram",
  linkedin:  "LinkedIn",
  twitter:   "Twitter / X",
  web:       "Sitio web",
  youtube:   "YouTube",
  facebook:  "Facebook",
};

export default function CompanyDetailPageV2({ company, prevSlug, nextSlug }: { company: CompanyData; prevSlug: string; nextSlug: string }) {
  const { t, lang } = useLang();
  const { theme } = useTheme();
  const logoSrc = (theme === "light" && company.logoLight) ? company.logoLight : company.logo;
  const bannerSrc = (theme === "light" && company.bannerLight) ? company.bannerLight : company.banner;
  const aboutText = lang === "es" && company.aboutEs ? company.aboutEs : company.about;
  const displayTags = lang === "es" && company.tagsEs ? company.tagsEs : company.tags;
  const displayTagline = lang === "es" && company.taglineEs ? company.taglineEs : company.tagline;
  const founderBioText = lang === "es" && company.founderBioEs ? company.founderBioEs : company.founderBio;

  return (
    <>
      <Nav />

      {/* ── Navegación fija anterior / siguiente ───────────────── */}
      <Link
        href={`/portfolio/${prevSlug}`}
        className={styles.navArrow}
        style={{ left: "18px" }}
        aria-label="Empresa anterior"
      >
        <span className={styles.navArrowCircle}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </Link>
      <Link
        href={`/portfolio/${nextSlug}`}
        className={styles.navArrow}
        style={{ right: "18px" }}
        aria-label="Empresa siguiente"
      >
        <span className={styles.navArrowCircle}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </Link>

      <main className="bg-shefa-dark text-shefa-text" style={company.accentColor ? { "--company-accent": company.accentColor } as React.CSSProperties : undefined}>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative w-full overflow-hidden" style={{ height: "clamp(480px, 65vh, 680px)" }}>
          {bannerSrc ? (
            <Image
              src={bannerSrc}
              alt={company.name}
              fill
              className="object-cover"
              style={{ objectPosition: company.bannerObjectPosition ?? "center" }}
              priority
              unoptimized={bannerSrc.endsWith(".svg")}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-shefa-card to-shefa-dark" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-shefa-dark via-shefa-dark/55 to-shefa-dark/10" />

          {/* breadcrumb — top */}
          <div className="absolute top-0 left-0 right-0 z-10 max-w-[1200px] mx-auto px-6 md:px-[60px] pt-8">
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-[11px] tracking-[3px] text-white/70 uppercase hover:text-white transition-colors"
            >
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
                <path d="M1 5h12M1 5l4-4M1 5l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t.portfolioDetail.link}
            </Link>
          </div>

          {/* logo + tagline — bottom */}
          <div className="absolute bottom-0 left-0 right-0 z-10 max-w-[1200px] mx-auto px-6 md:px-[60px] pb-16">
            <div className={styles.heroCard}>
              {company.tags && company.tags.length > 0 && (
                <div className={styles.heroTags}>
                  {displayTags.map((tag) => (
                    <span key={tag} className={styles.heroTag}>{tag}</span>
                  ))}
                </div>
              )}
              {logoSrc ? (
                <div className="mb-5">
                  {/* Visually hidden h1 for SEO when logo replaces text heading */}
                  <h1 className="sr-only">{company.name}</h1>
                  <Image
                    src={logoSrc}
                    alt={`${company.name} logo`}
                    width={200}
                    height={60}
                    className="object-contain h-12 md:h-14 w-auto"
                  />
                </div>
              ) : (
                <h1 className="font-serif text-[clamp(32px,5vw,56px)] text-shefa-text mb-4">{company.name}</h1>
              )}
              <p className="text-shefa-text text-[clamp(16px,2vw,20px)] max-w-lg leading-snug">
                {displayTagline}
              </p>
            </div>
          </div>
        </section>


        <div className="max-w-[1200px] mx-auto px-6 md:px-[60px]">

          {/* ── ABOUT ────────────────────────────────────────────────── */}
          <section className="py-20 md:py-24 border-t border-shefa-border grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
            <div className="pt-1">
              <p className="text-[11px] uppercase tracking-[0.14em] text-shefa-muted">{t.portfolioDetail.about}</p>
            </div>
            <div>
              <p className="text-shefa-text text-[clamp(16px,1.5vw,19px)] leading-[1.85]">{aboutText}</p>
              {company.socialLinks && company.socialLinks.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-10">
                  {company.socialLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {link.label ?? PLATFORM_LABEL[link.platform] ?? link.platform}
                      <span className="opacity-50">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* ── FOUNDER / EQUIPO ─────────────────────────────────────── */}
          {(company.founderImage || company.founderName) && (
            <section className="py-20 md:py-24 border-t border-shefa-border">

              {company.founderLayoutSquare ? (
                /* ── Layout horizontal alineado con about: label izq, foto+texto der ── */
                <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
                  <div className="pt-1">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-shefa-muted">{Array.isArray(company.founderName) ? t.portfolioDetail.founders : t.portfolioDetail.founder}</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                    {company.founderImage && (
                      <div className="shrink-0 w-full md:w-[280px] lg:w-[320px]">
                        <div className={styles.founderImgSquare} style={company.founderImageTall ? { aspectRatio: "3/4" } : undefined}>
                          <Image
                            src={company.founderImage}
                            alt={Array.isArray(company.founderName) ? company.founderName.join(" & ") : (company.founderName ?? "Equipo")}
                            fill
                            className="object-cover"
                            unoptimized={company.founderImage.endsWith(".svg")}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      {company.founderName && (
                        Array.isArray(company.founderName) ? (
                          <div className="flex flex-col gap-1 mb-4">
                            {company.founderName.map((name, i) => (
                              <p key={i} className="font-serif text-[clamp(22px,3vw,34px)] text-shefa-text leading-tight">
                                {name}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <p className="font-serif text-[clamp(22px,3vw,34px)] text-shefa-text leading-tight mb-4">
                            {company.founderName}
                          </p>
                        )
                      )}
                      {founderBioText && (
                        <p className="text-shefa-muted text-[15px] leading-[1.8]">{founderBioText}</p>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <>
                <p className="text-[11px] uppercase tracking-[0.14em] text-shefa-muted mb-10 md:mb-12">{Array.isArray(company.founderName) ? t.portfolioDetail.founders : t.portfolioDetail.founder}</p>
                <div className="flex flex-col gap-8">
                  {company.founderImage && (
                    company.founderImage2 ? (
                      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                        <div className="shrink-0 flex flex-col gap-4 w-full md:w-[240px]">
                          <div className={styles.founderImgSquare}>
                            <Image
                              src={company.founderImage}
                              alt={Array.isArray(company.founderName) ? company.founderName[0] : (company.founderName ?? "Founder")}
                              fill
                              className="object-cover object-top"
                              unoptimized={company.founderImage.endsWith(".svg")}
                            />
                          </div>
                          <div className={styles.founderImgSquare}>
                            <Image
                              src={company.founderImage2}
                              alt={Array.isArray(company.founderName) ? (company.founderName[1] ?? "") : ""}
                              fill
                              className="object-cover object-top"
                              unoptimized={company.founderImage2.endsWith(".svg")}
                            />
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          {company.founderName && (
                            Array.isArray(company.founderName) ? (
                              <div className="flex flex-col gap-1 mb-4">
                                {company.founderName.map((name, i) => (
                                  <p key={i} className="font-serif text-[clamp(22px,3vw,34px)] text-shefa-text leading-tight">
                                    {name}
                                  </p>
                                ))}
                              </div>
                            ) : (
                              <p className="font-serif text-[clamp(22px,3vw,34px)] text-shefa-text leading-tight mb-4">
                                {company.founderName}
                              </p>
                            )
                          )}
                          {founderBioText && (
                            <p className="text-shefa-muted text-[15px] leading-[1.8]">{founderBioText}</p>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className={styles.founderImg}>
                        <Image
                          src={company.founderImage}
                          alt={Array.isArray(company.founderName) ? company.founderName.join(" & ") : (company.founderName ?? "Equipo")}
                          fill
                          className="object-cover object-top"
                          unoptimized={company.founderImage.endsWith(".svg")}
                        />
                      </div>
                    )
                  )}
                  {!company.founderImage2 && <div>
                    {company.founderName && (
                      Array.isArray(company.founderName) ? (
                        <div className="flex flex-col gap-1 mb-4">
                          {company.founderName.map((name, i) => (
                            <p key={i} className="font-serif text-[clamp(22px,3vw,34px)] text-shefa-text leading-tight">
                              {name}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="font-serif text-[clamp(22px,3vw,34px)] text-shefa-text leading-tight mb-4">
                          {company.founderName}
                        </p>
                      )
                    )}
                    {founderBioText && (
                      <p className="text-shefa-muted text-[15px] leading-[1.8]">{founderBioText}</p>
                    )}
                  </div>}
                </div>
                </>
              )}
            </section>
          )}

          {/* ── FOTOS DE PRODUCTO ────────────────────────────────────── */}
          {company.productImages && company.productImages.length > 0 && (
            <section className="py-20 md:py-24 border-t border-shefa-border">
              <p className="text-[11px] uppercase tracking-[0.14em] text-shefa-muted mb-10">{t.portfolioDetail.product}</p>
              {company.productImages.length === 1 ? (
                <div className={styles.productImg}>
                  <Image
                    src={company.productImages[0]}
                    alt={`${company.name} producto`}
                    fill
                    className="object-cover"
                    unoptimized={company.productImages[0].endsWith(".svg")}
                  />
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-5">
                  {company.productImages.map((src, i) => (
                    <div key={i} className={styles.productImg}>
                      <Image
                        src={src}
                        alt={`${company.name} producto ${i + 1}`}
                        fill
                        className="object-cover"
                        unoptimized={src.endsWith(".svg")}
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* ── CTA ──────────────────────────────────────────────────── */}
          <section className="py-24 md:py-32 border-t border-shefa-border">
            <h2 className="font-serif text-[clamp(30px,4.5vw,52px)] text-shefa-text leading-tight mb-10 max-w-2xl">
              {t.portfolioDetail.ctaH2}
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 text-shefa-accent text-xs uppercase tracking-[0.14em] hover:opacity-70 transition-opacity"
            >
              {t.portfolioDetail.ctaBtn}
              <span className="text-base leading-none">→</span>
            </a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}
