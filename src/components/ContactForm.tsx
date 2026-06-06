"use client";

import { useState, useRef } from "react";
import { sendContactEmail } from "@/app/contact/actions";
import { useLang } from "@/context/LanguageContext";
import PageSection from "@/components/PageSection";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactForm() {
  const { t, lang } = useLang();
  const contact = t.contact;
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [showPrivacy, setShowPrivacy] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setStatus("loading");
    const result = await sendContactEmail(formData);
    if (result.success) {
      setStatus("success");
      formRef.current?.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />

      <main className="min-h-[calc(100vh-80px)] flex flex-col items-center py-24">
        <PageSection className="flex flex-col items-center gap-10">
          <h1 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] text-center">
            {contact.h2}
          </h1>
          <p className="text-[16px] text-shefa-muted font-light leading-[1.9] max-w-[640px] text-center">
            {contact.desc}
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-[600px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[11px] tracking-[2px] uppercase text-shefa-muted">
                {contact.nameLabel}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="bg-transparent border-b border-shefa-border py-3 text-shefa-text placeholder:text-shefa-muted/40 focus:outline-none focus:border-shefa-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="company" className="text-[11px] tracking-[2px] uppercase text-shefa-muted">
                {contact.companyLabel}
              </label>
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="bg-transparent border-b border-shefa-border py-3 text-shefa-text placeholder:text-shefa-muted/40 focus:outline-none focus:border-shefa-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-[11px] tracking-[2px] uppercase text-shefa-muted">
                {contact.emailLabel}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="bg-transparent border-b border-shefa-border py-3 text-shefa-text placeholder:text-shefa-muted/40 focus:outline-none focus:border-shefa-accent transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-[11px] tracking-[2px] uppercase text-shefa-muted">
                {contact.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="bg-transparent border-b border-shefa-border py-3 text-shefa-text placeholder:text-shefa-muted/40 focus:outline-none focus:border-shefa-accent transition-colors resize-none"
              />
            </div>

            <div className="flex items-start gap-2">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                required
                className="mt-1 accent-shefa-accent h-4 w-4"
              />
              <span className="text-[13px] text-shefa-muted leading-[1.6]">
                {contact.privacyLabel.split("{{link}}")[0]}
                <button
                  type="button"
                  onClick={() => setShowPrivacy(true)}
                  className="underline text-shefa-accent hover:text-shefa-hover transition-colors"
                >
                  {contact.privacyLink}
                </button>
                {contact.privacyLabel.split("{{link}}")[1]}
              </span>
            </div>

            <div className="flex items-center justify-between gap-6 pt-2">
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="text-[13px] tracking-[2px] uppercase text-shefa-accent border-b border-shefa-accent pb-px hover:text-shefa-hover hover:border-shefa-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "..." : contact.submit}
              </button>

              {status === "success" && (
                <span className="text-[13px] text-emerald-400">{contact.success}</span>
              )}
              {status === "error" && (
                <span className="text-[13px] text-red-400">{contact.error}</span>
              )}
            </div>
          </form>
        </PageSection>
      </main>
      <Footer />

      {/* Privacy Popup */}
      {showPrivacy && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6"
          onClick={() => setShowPrivacy(false)}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="relative bg-shefa-card border border-shefa-border max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPrivacy(false)}
              aria-label="Close"
              className="absolute top-5 right-5 text-shefa-muted hover:text-shefa-text transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="prose prose-invert max-w-none">
              <h2 className="font-serif text-[24px] mb-6">{contact.privacyTitle}</h2>
              <div className="text-shefa-muted text-[14px] leading-[1.9] whitespace-pre-wrap">
                {contact.privacyText}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
