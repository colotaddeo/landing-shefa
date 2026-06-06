# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint via next lint
```

No test suite is configured (Playwright is installed as a dev dependency but no tests exist yet).

## Architecture

Single-page marketing site for SHEFA Holdings built with **Next.js 15 App Router**, **Tailwind CSS**, and **CSS Modules**.

### Page structure

`src/app/page.tsx` renders all sections in order: `Nav → Hero → EcosystemMap → Thesis → VsSection → Portfolio → Team → CTA → Footer`. Each section is a standalone component in `src/components/`.

The only secondary route is `src/app/portfolio/[slug]/page.tsx`, a statically generated detail page for each portfolio company. Slugs come from `src/data/companies.ts` via `generateStaticParams`.

### Data flow

- **Copy/text** lives entirely in `src/i18n/en.ts` and `src/i18n/es.ts`. Components never hardcode user-visible strings — they call `const { t } = useLang()` and destructure from `t`.
- **`LanguageContext`** (`src/context/LanguageContext.tsx`) holds the active `en | es` translation object and exposes `useLang()`. Switching language scrolls to top.
- **`ThemeContext`** (`src/context/ThemeContext.tsx`) persists `dark | light` in `localStorage` and sets `data-theme` on `<html>`. The CSS variable set in `globals.css` switches entirely based on `[data-theme="light"]`.
- **Portfolio company data** (metrics, milestones, synergies, features) lives in `src/data/companies.ts` as a typed `COMPANIES` array. `getCompany(slug)` is the single lookup helper used by the detail page.

### Styling conventions

- **Tailwind** for layout, spacing, and typography utilities.
- **CSS Modules** for component-specific rules that need pseudo-selectors, `@media (hover: hover)`, or `@keyframes` — see `Hero.module.css`, `EcosystemMap.module.css`, `VsSection.module.css`.
- **CSS variables** (`--shefa-*`) defined in `globals.css` are consumed via Tailwind's custom color tokens (`bg-shefa-dark`, `text-shefa-accent`, etc.) and directly in CSS Modules.
- **Fonts**: Inter (`--font-inter`, `font-sans`), DM Serif Display (`--font-dm-serif`, `font-serif`), Kalam (`--font-kalam`). All loaded via `next/font/google` in `layout.tsx`.
- Hover-reveal pattern (content hidden until `:hover`): wrap content in a `styles.reveal` div and use the `@media (hover: hover)` block in the module CSS to toggle `max-height` + `opacity`.

### Adding a new section

1. Create `src/components/MySection.tsx` (and optionally `MySection.module.css`).
2. Add all copy keys to both `src/i18n/en.ts` and `src/i18n/es.ts`.
3. Import and place in `src/app/page.tsx`.
