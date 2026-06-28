@AGENTS.md

# ThaB Media — Project Working Guide

## Project Overview

- **Project:** ThaB Media corporate website
- **Business:** Outdoor advertising space rental / media planning / media buying
- **Stack:** Next.js 16, Tailwind CSS 4, TypeScript
- **Languages:** Turkish (default), English, French — URL: / (tr), /en, /fr
- **Fonts:** Playfair Display (headings), Inter (body)
- **Brand colors:** Dark navy (#112866), Red (#FF0A0A) — from logo
- **Main goal:** Visitors request an offer or contact the company

## Planning Documents

Read these before major design or implementation work:

- `docs/REFERENCE_ANALYSIS.md` — competitor analysis, design direction, SEO strategy
- `docs/PROJECT_DECISIONS.md` — confirmed decisions, assumptions, mock data rules, phase scope
- `docs/TODO.md` — launch checklist, mock data replacement QA

## Behavior Rules

### Before Coding

1. Read the planning documents listed above before starting any significant work.
2. Explain your plan before writing code. Do not write large amounts of code without approval.
3. Work in small steps. One component, one section, or one page at a time.

### Content and Data

4. Do not invent real business facts (founding year, location count, client names, reach numbers, testimonials, guarantees).
5. Mock data is allowed ONLY for layout/design development. Every mock value must be labeled with `{/* MOCK DATA */}` or `// TODO: Replace with real data` in code.
6. Do not use mock data in: SEO metadata, structured data (JSON-LD), legal pages, or production copy.
7. Generic placeholder brand names or neutral logo boxes for client logos — never use real brand logos unless confirmed.

### Design and Competitors

8. Do not copy competitor layouts, text, images, animations, or brand identity.
9. Use reference websites only for structural and strategic inspiration.
10. Mobile-first design. Every component must work on mobile before desktop.
11. Premium, modern, trustworthy feel — Playfair Display for elegance, Inter for clarity.

### SEO

12. Semantic HTML always. One H1 per page. Correct heading hierarchy (H1 > H2 > H3).
13. Every image must have a descriptive alt text. Format: "[Description] | ThaB Media"
14. Metadata on every page (title, description, og:tags).
15. Structured data (JSON-LD) where appropriate: LocalBusiness, Service, BreadcrumbList.
16. Clean URL structure: `/hizmetler/billboard-reklam/` — Turkish transliterated, lowercase, hyphens.
17. Service pages and location pages are core SEO assets — treat them with care.

### Multilingual / i18n

18. Do not hardcode user-facing text directly inside components.
19. All visible copy must be structured for translation (translation files or dictionary pattern).
20. Organize translations by locale: `tr`, `en`, `fr`.
21. Navigation labels, CTA texts, form labels, metadata, service names, FAQ, footer links — all must support three languages.
22. SEO metadata must be localized per language (title, description, og:tags, hreflang alternates).
23. Do not duplicate pages manually — use locale-based routing.
24. Design must be flexible for longer translated text (especially French). Buttons, cards, navigation, and headings must not break with longer translations.
25. Initial content is written in Turkish first. English and French start as placeholders.
26. Do not use machine translation as final production copy without human review.

### Code Quality

27. Keep components reusable, clean, and readable.
28. Use TypeScript properly — no `any` types, proper interfaces.
29. Avoid unnecessary packages. Prefer built-in Next.js features.
30. Use next/font for font loading, next/image for images.
31. Run `npm run lint` and `npm run build` after implementation tasks when relevant.
32. Follow Next.js 16 conventions — check `node_modules/next/dist/docs/` for current APIs.

### After Each Task

33. Summarize:
    - Changed files
    - What was implemented
    - What still needs review or next steps

## File Structure Convention

```
src/
  app/
    [locale]/
      layout.tsx            — Locale-aware root layout
      page.tsx              — Homepage
      hizmetler/            — TR service routes
        page.tsx
        [slug]/page.tsx
      lokasyonlar/page.tsx
      referanslar/page.tsx
      hakkimizda/page.tsx
      blog/
        page.tsx
        [slug]/page.tsx
      iletisim/page.tsx
    layout.tsx              — Root layout (fonts, global structure)
  components/
    ui/                     — Reusable UI primitives (Button, Card, etc.)
    layout/                 — Header, Footer, Navigation
    sections/               — Homepage sections (Hero, Services, Stats, etc.)
  lib/
    constants.ts            — Site-wide constants, mock data
    utils.ts                — Utility functions
    i18n/
      index.ts              — i18n configuration and helpers
      dictionaries/
        tr.json             — Turkish translations
        en.json             — English translations
        fr.json             — French translations
public/
  logo.svg                  — Company logo
  images/                   — Site images
docs/
  REFERENCE_ANALYSIS.md
  PROJECT_DECISIONS.md
  TODO.md
```

### i18n URL Mapping

| Locale | Prefix | Example |
|--------|--------|---------|
| tr (default) | / | /hizmetler/billboard/ |
| en | /en | /en/services/billboard/ |
| fr | /fr | /fr/services/billboard/ |

## Key Reminders

- The website must feel premium, modern, and conversion-focused.
- Every page should have a clear path to "Teklif Alın" / "Get a Quote" / "Demander un devis".
- WhatsApp floating button on mobile.
- Sticky header with CTA button and language switcher.
- No page without a conversion opportunity.
- All user-facing text goes through translation system — never hardcode strings in components.
- Test layouts with French text (typically 20-30% longer than English).
