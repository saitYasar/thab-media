# Proje Denetim Raporu

> ThaB Media — Uygulama Öncesi Teknik Denetim
> Tarih: 2026-06-27

---

## 1. Mevcut Proje Özeti

Proje şu anda "coming soon" (yapım aşamasında) durumunda. Tek sayfalık bir placeholder uygulaması aktif. Next.js 16, React 19, Tailwind CSS 4 ve TypeScript kurulumu tamamlanmış, varsayılan yapılandırma ile çalışır durumda. Uygulama kodu `src/app/` altında minimal düzeyde — yalnızca root layout ve tek bir sayfa mevcut.

**Durumu:** Sıfırdan inşa edilmeye hazır — mevcut kod tamamen değiştirilecek.

---

## 2. Mevcut Teknoloji Yığını

| Paket | Versiyon | Not |
|-------|----------|-----|
| Next.js | 16.2.9 | En güncel App Router |
| React | 19.2.4 | React 19 (async components, use hook) |
| React DOM | 19.2.4 | |
| TypeScript | ^5 | Strict mode aktif |
| Tailwind CSS | ^4 | PostCSS plugin olarak (`@tailwindcss/postcss`) |
| ESLint | ^9 | Flat config (`eslint.config.mjs`) |
| eslint-config-next | 16.2.9 | Core Web Vitals + TypeScript kuralları |

**Yüklü olmayan:**
- shadcn/ui — yok
- framer-motion — yok
- Herhangi bir animasyon kütüphanesi — yok
- i18n kütüphanesi (next-intl, next-i18n-router, vb.) — yok
- Form kütüphanesi (react-hook-form, zod, vb.) — yok
- İkon kütüphanesi (lucide, heroicons, vb.) — yok

---

## 3. Mevcut Dosya Yapısı

```
thab-media/
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts                  — Boş yapılandırma
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── docs/
│   ├── COMPONENT_PLAN.md
│   ├── CONTENT_STRUCTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── PROJECT_DECISIONS.md
│   ├── REFERENCE_ANALYSIS.md
│   └── TODO.md
├── public/
│   └── logo.svg                    — Tek asset
├── src/
│   └── app/
│       ├── favicon.ico             — Varsayılan favicon
│       ├── globals.css             — Tailwind import + Geist font token
│       ├── layout.tsx              — Root layout (Geist font, TR lang)
│       └── page.tsx                — Coming soon sayfası
└── node_modules/
    └── next/dist/docs/             — Next.js 16 resmi dokümantasyonu
```

**Eksik yapılar (planlanan ama henüz yok):**
- `src/app/[locale]/` — locale-based routing
- `src/components/` — hiçbir komponent yok
- `src/lib/` — yardımcı fonksiyonlar yok
- `src/lib/i18n/` — çeviri sistemi yok
- `src/data/` — veri dosyaları yok
- `src/types/` — tip tanımları yok
- `proxy.ts` — locale routing için gerekli
- `public/images/` — site görselleri yok

---

## 4. Mevcut Assetler

| Asset | Konum | Detay |
|-------|-------|-------|
| Logo (SVG) | `public/logo.svg` | 647x360 viewBox, #112866 (koyu lacivert) + #FF0A0A (kırmızı) |
| Favicon | `src/app/favicon.ico` | Varsayılan Next.js favicon (değiştirilmeli) |

**Eksik assetler:**
- Lokasyon/uygulama fotoğrafları
- og:image görseli
- İkon sprite veya SVG ikonlar
- Marka favicon (logo.svg'den türetilecek — mevcut metadata bunu yapıyor)

---

## 5. Mevcut Styling Yapısı

### globals.css

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

**Durum:**
- Tailwind CSS 4 `@import "tailwindcss"` söz dizimi kullanılıyor (v3'teki `@tailwind base/components/utilities` yerine)
- `@theme inline` bloğu Tailwind 4'ün tema token sistemi
- Geist font değişkenleri tanımlı — bunlar **Playfair Display + Inter** ile değiştirilecek
- Hiçbir custom renk, spacing veya token henüz tanımlanmamış
- PostCSS config: `@tailwindcss/postcss` plugin aktif

### Tailwind 4 Farklılıkları (v3'e göre)

- `tailwind.config.js` dosyası YOK — konfigürasyon CSS içinde `@theme` ile yapılıyor
- Plugin sistemi değişmiş
- Utility class'lar doğrudan CSS dosyasında genişletilebilir

---

## 6. Mevcut Routing Yapısı

### Aktif Route'lar

| Route | Dosya | İçerik |
|-------|-------|--------|
| `/` | `src/app/page.tsx` | Coming soon sayfası |

### Root Layout (`src/app/layout.tsx`)

- `<html lang="tr">` — Türkçe sabit
- Geist Sans fontu yüklü (next/font)
- metadata: "ThaB Media | Yapım Aşamasında", robots: noindex/nofollow
- favicon: `/logo.svg`
- body: min-h-dvh, flex, bg-[#f8f9fc]

### Yok Olanlar

- `[locale]` dinamik segment — yok
- `proxy.ts` (Next.js 16'da middleware yerine) — yok
- `not-found.tsx` — yok
- Herhangi bir nested route — yok

---

## 7. Mevcut i18n Durumu

**Hiçbir i18n altyapısı kurulu değil.**

- Dil algılama yok
- Locale routing yok
- `proxy.ts` yok
- Dictionary/çeviri dosyaları yok
- Tüm metin hardcoded Türkçe

### Gerekli i18n Kurulumu (Next.js 16 dokümantasyonuna göre)

Next.js 16'nın resmi i18n rehberi şu yapıyı öneriyor:

1. **`proxy.ts`** (eski `middleware.ts` yerine — Next.js 16'da rename edilmiş):
   - `export function proxy(request)` — locale algılar, yönlendirir
   - `export const config = { matcher: [...] }`

2. **`app/[lang]/` klasörü** — tüm sayfalar bu segment altında

3. **Dictionary pattern:**
   - `getDictionary(locale)` async fonksiyonu
   - `hasLocale(locale)` type guard
   - `import('server-only')` ile sadece sunucu tarafı

4. **`generateStaticParams`** ile static locale generation

5. **`PageProps<'/[lang]'>`** ve `LayoutProps<'/[lang]'>`** — Next.js 16 global type helper'ları

---

## 8. Mevcut SEO Durumu

| Alan | Durum | Not |
|------|-------|-----|
| title | "ThaB Media \| Yapım Aşamasında" | Geçici — değişecek |
| description | Mevcut | Geçici — değişecek |
| robots | `noindex, nofollow` | Coming soon için doğru — lansmanda kaldırılacak |
| favicon | `/logo.svg` | Çalışıyor |
| og:tags | Yok | Eklenecek |
| hreflang | Yok | Eklenecek |
| JSON-LD | Yok | Eklenecek |
| sitemap | Yok | Eklenecek |
| robots.txt | Yok | Eklenecek |
| canonical | Yok | Eklenecek |

---

## 9. Mevcut npm Script'leri

| Script | Komut | Not |
|--------|-------|-----|
| `dev` | `next dev` | Geliştirme sunucusu |
| `build` | `next build` | Production build |
| `start` | `next start` | Production sunucusu |
| `lint` | `eslint` | ESLint flat config ile |

**Eksik script'ler (opsiyonel):**
- `type-check` (`tsc --noEmit`) — TypeScript kontrolü
- `format` (prettier) — henüz prettier yok

---

## 10. Uygulama Öncesi Riskler

| # | Risk | Etki | Önlem |
|---|------|------|-------|
| 1 | **Next.js 16 proxy.ts konvansiyonu** | Planlama dokümanlarında `middleware.ts` referansı var — Next.js 16'da bu `proxy.ts` olarak rename edilmiş | Uygulama sırasında `proxy.ts` kullanılmalı, `middleware.ts` değil |
| 2 | **Tailwind CSS 4 konfigürasyonu** | `tailwind.config.js` yok — tema token'ları CSS içinde `@theme` bloğunda tanımlanır | Renk, font, spacing token'ları `globals.css` içinde `@theme` ile ayarlanacak |
| 3 | **PageProps/LayoutProps type helper'ları** | Next.js 16, global `PageProps<'/[lang]'>` ve `LayoutProps<'/[lang]'>` tipler sunuyor | `params` erişimi `await params` ile yapılmalı (async) |
| 4 | **Geist font kaldırılacak** | Mevcut layout Geist kullanıyor — Playfair Display + Inter ile değiştirilecek | Font değişimi globals.css'deki `@theme` token'ını da etkiler |
| 5 | **`server-only` paketi** | i18n dictionary'nin sadece sunucuda çalışması için gerekli | `npm install server-only` gerekecek |
| 6 | **Default locale prefix-free routing** | TR için `/` (prefix yok), EN için `/en`, FR için `/fr` — proxy.ts'de özel mantık gerekir | Proxy'de TR locale'e redirect ETMEMELİ, sadece EN/FR prefix kontrolü |
| 7 | **favicon.ico** | Mevcut varsayılan favicon logo.svg'den türetilmeli | Gerçek .ico dosyası oluşturulmalı veya metadata API ile çözülmeli |
| 8 | **Body'deki inline renkler** | Mevcut layout'ta `bg-[#f8f9fc]`, `text-[#192652]` gibi rastgele değerler | Design system token'ları ile değiştirilecek |
| 9 | **Mevcut coming soon sayfası** | Hardcoded Türkçe metin, inline MailIcon SVG | Tamamen yeniden yazılacak |
| 10 | **`node_modules/next/dist/docs/` kontrol zorunluluğu** | AGENTS.md kuralı: "Read the relevant guide in `node_modules/next/dist/docs/` before writing any code" | Her yeni API/konvansiyon için önce Next.js 16 dokümanı okunmalı |

---

## 11. Önerilen İlk Uygulama Adımı

**Adım 1: i18n Altyapısı + Font/Tema Kurulumu**

Bu adım diğer tüm adımların temelidir. Sıra:

1. `proxy.ts` oluştur — locale algılama ve yönlendirme
2. `src/app/[locale]/layout.tsx` oluştur — `<html lang={locale}>`, font yükleme
3. `src/app/[locale]/page.tsx` oluştur — geçici "merhaba" sayfası
4. `src/lib/i18n/config.ts` — locale listesi, varsayılan locale
5. `src/lib/i18n/dictionaries.ts` — `getDictionary()`, `hasLocale()`
6. `src/lib/i18n/dictionaries/tr.json`, `en.json`, `fr.json` — minimal başlangıç anahtarları
7. `globals.css` güncelle — Geist → Playfair Display + Inter font token'ları, marka renkleri
8. Mevcut `src/app/layout.tsx` ve `src/app/page.tsx` refactor — ya kaldır ya [locale] altına taşı

**Neden bu sıra:**
- i18n olmadan hiçbir komponent yazılamaz (hardcode yasağı)
- Font olmadan tasarım sistemi uygulanamaz
- Tema token'ları olmadan tutarlı stil verilmez
- Bu üç altyapı hazır olduğunda komponent geliştirmeye geçilebilir

---

## 12. Henüz Değiştirilmemesi Gerekenler

| Dosya/Yapı | Neden Dokunulmamalı |
|------------|---------------------|
| `package.json` dependencies | Paket yükleme ayrı bir adım olarak yapılmalı (gereklilik netleşince) |
| `eslint.config.mjs` | Çalışıyor, şimdilik müdahale gereksiz |
| `postcss.config.mjs` | Tailwind 4 PostCSS plugin çalışıyor |
| `tsconfig.json` | Yapılandırma uygun — `paths: @/*` zaten `./src/*` |
| `next.config.ts` | i18n konfigürasyonu eklenebilir ama önce proxy.ts |
| `public/logo.svg` | Onaylı, değişmeyecek |
| `docs/*.md` | Planlama belgeleri — referans olarak korunacak |
| `CLAUDE.md` / `AGENTS.md` | Çalışma kuralları — değiştirilmeyecek |

---

## Özet

Proje temiz bir Next.js 16 kurulumu üzerinde minimal coming-soon sayfası ile duruyor. Altyapı (framework, TypeScript, Tailwind, ESLint) hazır. Uygulama kodunun tamamı sıfırdan yazılacak.

**Kritik bulgu:** Next.js 16'da `middleware.ts` **deprecated** — yerine `proxy.ts` kullanılıyor. Planlama dokümanlarındaki middleware referansları proxy olarak uygulanmalı.

**İlk adım:** i18n routing (proxy.ts + [locale] segment + dictionary) + font/tema token kurulumu.
