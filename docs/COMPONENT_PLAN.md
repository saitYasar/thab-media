# Komponent Planı

> ThaB Media — Açık Hava Reklam Alanı Kiralama / Medya Planlama

---

## 1. Genel Component Stratejisi

### Yeniden Kullanılabilir Komponent Yaklaşımı

- Her UI öğesi mümkünse tek bir komponent dosyasında tanımlanır
- Props ile konfigürasyon: variant, size, color, layout
- Komponentler çeviri metnini prop veya hook olarak alır — hardcode yasak
- Aynı görsel kalıp birden fazla yerde kullanılıyorsa → ortak komponent

### Section Bazlı Yapı

- Ana sayfanın her bölümü ayrı bir section komponent dosyası
- Section komponentleri `components/sections/` altında
- Her section kendi verisi + düzeni + responsivliği ile bağımsız çalışır
- Sayfalar, section'ları sırayla compose eder

### Mobile-First Komponent Mantığı

- Tüm komponentler önce mobil için tasarlanır, sonra breakpoint ile genişler
- Tailwind responsive prefix'leri: varsayılan mobil, `md:` tablet, `lg:` masaüstü
- Touch hedefleri: minimum 44x44px
- Taşma yok: `overflow-hidden` ve `min-w-0` kuralları uygulanır

### i18n-Ready Komponent Mantığı

- Komponent içinde hiçbir kullanıcıya görünür metin hardcode edilmez
- Metin `dictionary` objesinden veya çeviri hook'undan gelir
- Layout sabit genişlikte değil — padding/flex bazlı, FR uzun metin için esnek
- Butonlar, kartlar, nav öğeleri uzun çeviriyle kırılmaz

### SEO-Friendly Komponent Mantığı

- Varsayılan: Server Component (HTML sunucu tarafında render)
- Semantik HTML etiketleri: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Başlık hiyerarşisi korunur (H1 > H2 > H3)
- Her `next/image` için anlamlı alt text
- JSON-LD yapılandırılmış veri server tarafında inject edilir

---

## 2. Önerilen Dosya Yapısı

```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx              — Locale-aware layout (header, footer, font)
│   │   ├── page.tsx                — Ana sayfa
│   │   ├── hizmetler/
│   │   │   ├── page.tsx            — Hizmetler genel
│   │   │   └── [slug]/page.tsx     — Hizmet detay
│   │   ├── lokasyonlar/page.tsx
│   │   ├── referanslar/page.tsx
│   │   ├── hakkimizda/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── iletisim/page.tsx
│   │   ├── kvkk/page.tsx
│   │   ├── gizlilik-politikasi/page.tsx
│   │   └── cerez-politikasi/page.tsx
│   ├── layout.tsx                  — Root layout (html, body)
│   └── not-found.tsx               — 404 sayfası
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── LanguageSwitcher.tsx
│   │   ├── Footer.tsx
│   │   ├── StickyMobileCTA.tsx
│   │   └── WhatsAppFloatingButton.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesPreviewSection.tsx
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── LocationsPreviewSection.tsx
│   │   ├── HowItWorksSection.tsx
│   │   ├── ReferencesSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── FinalCTASection.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Section.tsx
│   │   ├── Container.tsx
│   │   ├── Badge.tsx
│   │   ├── Card.tsx
│   │   ├── StatCard.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── ImageFrame.tsx
│   │   └── LogoPlaceholder.tsx
│   ├── forms/
│   │   ├── ContactForm.tsx
│   │   ├── FormInput.tsx
│   │   ├── FormTextarea.tsx
│   │   ├── FormSelect.tsx
│   │   ├── ConsentCheckbox.tsx
│   │   ├── SubmitButton.tsx
│   │   ├── FormSuccessMessage.tsx
│   │   └── FormErrorMessage.tsx
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGrid.tsx
│   │   ├── ServiceDetailHero.tsx
│   │   ├── ServiceBenefits.tsx
│   │   ├── ServiceUseCases.tsx
│   │   ├── ServiceFAQ.tsx
│   │   └── ServiceCTA.tsx
│   ├── locations/
│   │   ├── LocationCard.tsx
│   │   ├── LocationGrid.tsx
│   │   ├── LocationMapPlaceholder.tsx
│   │   └── LocationCTA.tsx
│   └── seo/
│       ├── JsonLd.tsx
│       └── Breadcrumbs.tsx
├── lib/
│   ├── i18n/
│   │   ├── index.ts                — getDictionary(), getLocale() helper
│   │   ├── config.ts               — locale listesi, varsayılan locale
│   │   └── dictionaries/
│   │       ├── tr.json
│   │       ├── en.json
│   │       └── fr.json
│   ├── constants.ts                — Site-wide sabitler
│   └── utils.ts                    — Yardımcı fonksiyonlar
├── data/
│   ├── services.ts                 — Hizmet verileri (slug, içerik)
│   ├── mockStats.ts                — Mock istatistikler
│   ├── mockTestimonials.ts         — Mock testimonial'lar
│   ├── mockLogos.ts                — Mock müşteri logoları
│   └── locations.ts                — Lokasyon verileri
├── types/
│   ├── index.ts                    — Genel tipler
│   ├── service.ts                  — ServiceContent interface
│   ├── location.ts                 — LocationContent interface
│   └── blog.ts                     — BlogPost interface
```

---

## 3. Layout Components

### Header

| Özellik | Değer |
|---------|-------|
| Amaç | Site geneli üst navigasyon, marka, CTA, dil seçici |
| Tip | Server Component (statik navigasyon) |
| Props | `locale: string`, `dictionary: Dictionary` |
| i18n Keys | `common.navigation.*`, `common.cta.getQuote` |
| Responsive | Masaüstü: tam menü + CTA. Mobil: logo + mini CTA + hamburger |
| Erişilebilirlik | `<header>`, `<nav aria-label>`, skip-to-content link |

### MobileMenu

| Özellik | Değer |
|---------|-------|
| Amaç | Hamburger menü açıldığında overlay/slide-in panel |
| Tip | **Client Component** (toggle state, animasyon) |
| Props | `isOpen: boolean`, `onClose()`, `dictionary`, `locale` |
| i18n Keys | `common.navigation.*`, hizmet dropdown etiketleri |
| Responsive | Yalnızca mobilde (lg altı) render edilir |
| Erişilebilirlik | `aria-expanded`, focus trap, Escape ile kapatma |

### LanguageSwitcher

| Özellik | Değer |
|---------|-------|
| Amaç | TR / EN / FR arası geçiş |
| Tip | **Client Component** (navigation, aktif state) |
| Props | `currentLocale: string`, `currentPath: string` |
| i18n Keys | — (Dil kodları sabit: TR, EN, FR) |
| Responsive | Masaüstü: header'da. Mobil: MobileMenu içinde |
| Erişilebilirlik | `aria-label="Dil seçici"`, aktif dil `aria-current` |

### Footer

| Özellik | Değer |
|---------|-------|
| Amaç | Site geneli alt bölüm — navigasyon, iletişim, yasal |
| Tip | Server Component |
| Props | `locale: string`, `dictionary: Dictionary` |
| i18n Keys | `footer.*`, `common.navigation.*` |
| Responsive | 4 sütun masaüstü → yığılmış mobil |
| Erişilebilirlik | `<footer>`, navigasyon `<nav aria-label>` |

### StickyMobileCTA

| Özellik | Değer |
|---------|-------|
| Amaç | Mobilde alt kısma sabit CTA barı (opsiyonel) |
| Tip | Server Component (CSS ile sticky) |
| Props | `dictionary` |
| i18n Keys | `common.cta.getQuote` |
| Responsive | Yalnızca mobilde (md altı) görünür |
| Erişilebilirlik | Link veya buton semantiği |

### WhatsAppFloatingButton

| Özellik | Değer |
|---------|-------|
| Amaç | Sağ alt köşede sabit WhatsApp butonu |
| Tip | Server Component (sadece bir link) |
| Props | `phoneNumber: string` |
| i18n Keys | — (ikon bazlı, `aria-label` lokalize) |
| Responsive | Yalnızca mobilde görünür (md altı) |
| Erişilebilirlik | `aria-label="WhatsApp ile iletişim"` |

---

## 4. Homepage Section Components

### HeroSection

| Özellik | Değer |
|---------|-------|
| Amaç | İlk izlenim, değer önerisi, birincil dönüşüm |
| Tip | Server Component |
| Veri | `dictionary.home.hero` |
| i18n Keys | `home.hero.title`, `.subtitle`, `.ctaPrimary`, `.ctaSecondary` |
| Mock Data | Yok (metin çeviri dosyasından) |
| SEO | H1 etiketi, alt text (arka plan görseli) |
| Mobil | Tek sütun, küçülen başlık, butonlar yığılır |

### StatsSection

| Özellik | Değer |
|---------|-------|
| Amaç | Hızlı güven sinyali — sayısal veriler |
| Tip | Server Component |
| Veri | `dictionary.home.stats` + `data/mockStats.ts` |
| i18n Keys | `home.stats.[key].label`, `home.stats.[key].value` |
| Mock Data | **Evet** — tüm rakamlar mock, `{/* MOCK DATA */}` işaretli |
| SEO | Semantik liste veya grid, dekoratif (H etiketi gereksiz) |
| Mobil | 2x2 grid |

### ServicesPreviewSection

| Özellik | Değer |
|---------|-------|
| Amaç | Hizmet formatlarının kartlı önizlemesi |
| Tip | Server Component |
| Veri | `data/services.ts` + `dictionary.services.[slug]` |
| i18n Keys | `home.services.title`, `.description`, `services.[slug].title`, `common.cta.viewDetails` |
| Mock Data | Yok (hizmet listesi varsayım olarak onaylı) |
| SEO | H2 bölüm başlığı, H3 kart başlıkları, link'ler hizmet sayfalarına |
| Mobil | Tek sütun yığılmış kartlar |

### WhyChooseUsSection

| Özellik | Değer |
|---------|-------|
| Amaç | 3 değer önerisi ile farklılaşma |
| Tip | Server Component |
| Veri | `dictionary.home.whyUs` |
| i18n Keys | `home.whyUs.title`, `.items.[n].title`, `.items.[n].description` |
| Mock Data | Yok (metin çeviri dosyasından — içerik taslak olabilir) |
| SEO | H2 bölüm başlığı |
| Mobil | Tek sütun yığılmış |

### LocationsPreviewSection

| Özellik | Değer |
|---------|-------|
| Amaç | Coğrafi kapsam önizlemesi |
| Tip | Server Component |
| Veri | `data/locations.ts` + `dictionary.home.locations` |
| i18n Keys | `home.locations.title`, `.description`, `.cta` |
| Mock Data | Lokasyon verisi henüz onaylanmamış — koşullu render |
| SEO | H2 bölüm başlığı, lokasyon link'leri |
| Mobil | Tek sütun kartlar veya kaydırılabilir |

### HowItWorksSection

| Özellik | Değer |
|---------|-------|
| Amaç | 3 adımlı süreç açıklaması |
| Tip | Server Component |
| Veri | `dictionary.home.howItWorks` |
| i18n Keys | `home.howItWorks.title`, `.steps.[n].title`, `.steps.[n].description` |
| Mock Data | Yok |
| SEO | H2 bölüm başlığı, sıralı liste semantiği (`<ol>`) |
| Mobil | Dikey liste |

### ReferencesSection

| Özellik | Değer |
|---------|-------|
| Amaç | Müşteri logoları ile sosyal kanıt |
| Tip | Server Component |
| Veri | `data/mockLogos.ts` (veya gerçek logolar) |
| i18n Keys | `home.references.title` |
| Mock Data | **Evet** — generic placeholder kutular, gerçek marka logosu kullanılmaz |
| SEO | Alt text her logo için, dekoratif bölüm |
| Mobil | 2-3 sütun grid veya kaydırılabilir |

### FAQSection

| Özellik | Değer |
|---------|-------|
| Amaç | Sık sorulan sorular — güven + SEO |
| Tip | **Client Component** (accordion toggle) |
| Veri | `dictionary.home.faq` |
| i18n Keys | `home.faq.title`, `.items.[n].question`, `.items.[n].answer` |
| Mock Data | Yok (içerik çeviri dosyasından) |
| SEO | H2 başlık, `<details>`/`<summary>` veya aria-expanded, FAQ schema (JSON-LD) |
| Mobil | Tam genişlik accordion |

### FinalCTASection

| Özellik | Değer |
|---------|-------|
| Amaç | Son dönüşüm fırsatı — koyu arka plan, güçlü CTA |
| Tip | Server Component |
| Veri | `dictionary.home.finalCta` |
| i18n Keys | `home.finalCta.title`, `.description`, `.button` |
| Mock Data | Yok |
| SEO | H2 başlık |
| Mobil | Tam genişlik, buton w-full |

---

## 5. Service Components

### ServiceCard

| Özellik | Değer |
|---------|-------|
| Amaç | Hizmet önizleme kartı (ana sayfa + genel hizmetler sayfası) |
| Tip | Server Component |
| Props | `title`, `description`, `slug`, `locale`, `image?` |
| Responsive | Grid içinde esnek, mobilde tam genişlik |

### ServiceGrid

| Özellik | Değer |
|---------|-------|
| Amaç | ServiceCard'ları grid düzeninde gösterir |
| Tip | Server Component |
| Props | `services: ServiceContent[]`, `locale`, `dictionary` |
| Responsive | 3-4 sütun masaüstü, 2 tablet, 1 mobil |

### ServiceDetailHero

| Özellik | Değer |
|---------|-------|
| Amaç | Hizmet detay sayfası üst bölüm (H1 + açıklama) |
| Tip | Server Component |
| Props | `title`, `longDescription`, `image?` |
| SEO | Sayfanın H1'i burada |

### ServiceBenefits

| Özellik | Değer |
|---------|-------|
| Amaç | Avantaj listesi (ikon + metin) |
| Tip | Server Component |
| Props | `benefits: string[]` |
| Responsive | 2 sütun masaüstü, 1 sütun mobil |

### ServiceUseCases

| Özellik | Değer |
|---------|-------|
| Amaç | "Bu format şunlar için idealdir" listesi |
| Tip | Server Component |
| Props | `useCases: string[]`, `idealSectors: string[]` |

### ServiceFAQ

| Özellik | Değer |
|---------|-------|
| Amaç | Hizmete özel SSS (accordion) |
| Tip | **Client Component** (accordion toggle) |
| Props | `faq: { question, answer }[]` |
| SEO | FAQ schema (JSON-LD) |

### ServiceCTA

| Özellik | Değer |
|---------|-------|
| Amaç | Hizmet sayfası alt CTA bloğu |
| Tip | Server Component |
| Props | `ctaText: string`, `locale` |

---

## 6. Location Components

### LocationCard

| Özellik | Değer |
|---------|-------|
| Amaç | Şehir/bölge önizleme kartı |
| Tip | Server Component |
| Props | `name`, `description`, `availableFormats`, `image?`, `slug` |
| Responsive | Grid içinde esnek |

### LocationGrid

| Özellik | Değer |
|---------|-------|
| Amaç | LocationCard'ları grid düzeninde gösterir |
| Tip | Server Component |
| Props | `locations: LocationContent[]`, `locale` |
| Responsive | 2-3 sütun masaüstü, 1 mobil |

### LocationMapPlaceholder

| Özellik | Değer |
|---------|-------|
| Amaç | İnteraktif harita hazır olana kadar placeholder |
| Tip | Server Component |
| Props | `message: string` |
| Not | "Harita yakında eklenecek" mesajı gösterir |

### LocationCTA

| Özellik | Değer |
|---------|-------|
| Amaç | Lokasyona özel CTA |
| Tip | Server Component |
| Props | `ctaText: string`, `locale` |

---

## 7. Form Components

### ContactForm

| Özellik | Değer |
|---------|-------|
| Amaç | İletişim / teklif talebi formu — tüm alanları birleştirir |
| Tip | **Client Component** (state, validation, submit) |
| Props | `dictionary`, `locale`, `services: string[]` |
| i18n Keys | `contact.form.*` |
| Not | Server action veya API route ile gönderim |

### FormInput

| Özellik | Değer |
|---------|-------|
| Amaç | Yeniden kullanılabilir text/email/tel input |
| Tip | **Client Component** (controlled input) |
| Props | `label`, `placeholder`, `type`, `name`, `error?`, `required?` |
| Erişilebilirlik | `<label>` ile ilişkili, `aria-invalid`, `aria-describedby` |

### FormTextarea

| Özellik | Değer |
|---------|-------|
| Amaç | Çok satırlı metin alanı |
| Tip | **Client Component** |
| Props | `label`, `placeholder`, `name`, `error?`, `rows?` |

### FormSelect

| Özellik | Değer |
|---------|-------|
| Amaç | Hizmet seçim dropdown'u |
| Tip | **Client Component** |
| Props | `label`, `placeholder`, `name`, `options: {value, label}[]`, `error?` |

### ConsentCheckbox

| Özellik | Değer |
|---------|-------|
| Amaç | KVKK onay kutusu |
| Tip | **Client Component** |
| Props | `label`, `name`, `error?`, `required` |
| i18n Keys | `contact.form.consent.label` |

### SubmitButton

| Özellik | Değer |
|---------|-------|
| Amaç | Form gönderim butonu (loading state) |
| Tip | **Client Component** |
| Props | `label`, `isLoading?`, `disabled?` |

### FormSuccessMessage

| Özellik | Değer |
|---------|-------|
| Amaç | Başarılı gönderim sonrası mesaj |
| Tip | Server veya Client Component |
| Props | `message: string` |
| i18n Keys | `contact.form.success` |

### FormErrorMessage

| Özellik | Değer |
|---------|-------|
| Amaç | Gönderim hatası mesajı |
| Tip | Server veya Client Component |
| Props | `message: string` |
| i18n Keys | `contact.form.error` |

---

## 8. UI Components

### Button

| Özellik | Değer |
|---------|-------|
| Amaç | Tüm site genelinde kullanılan buton |
| Tip | Server Component (link olarak) veya Client (onClick) |
| Props | `variant: "primary" | "secondary" | "ghost"`, `size: "sm" | "md" | "lg"`, `href?`, `onClick?`, `children`, `fullWidth?` |
| Responsive | Padding bazlı genişleme, mobilde `fullWidth` opsiyonu |

### Section

| Özellik | Değer |
|---------|-------|
| Amaç | Her sayfa bölümünü saran wrapper (padding, arka plan) |
| Tip | Server Component |
| Props | `bg?: "default" | "subtle" | "dark"`, `className?`, `id?`, `children` |
| Render | `<section>` etiketi |

### Container

| Özellik | Değer |
|---------|-------|
| Amaç | İçerik genişlik sınırlayıcı |
| Tip | Server Component |
| Props | `size?: "sm" | "md" | "lg" | "xl"`, `children` |
| Değerler | sm=768px, md=896px, lg=1152px, xl=1280px |

### Badge

| Özellik | Değer |
|---------|-------|
| Amaç | Küçük etiket/rozet (kategori, durum) |
| Tip | Server Component |
| Props | `variant?: "primary" | "muted"`, `children` |

### Card

| Özellik | Değer |
|---------|-------|
| Amaç | Genel kart wrapper (kenarlık, gölge, radius) |
| Tip | Server Component |
| Props | `className?`, `hover?`, `children` |
| Responsive | Esnek yükseklik, FR metin için kırılmaz |

### StatCard

| Özellik | Değer |
|---------|-------|
| Amaç | İstatistik kartı (büyük rakam + etiket) |
| Tip | Server Component |
| Props | `value: string`, `label: string` |
| Font | Değer: Playfair Display Bold, Etiket: Inter Regular |

### SectionHeader

| Özellik | Değer |
|---------|-------|
| Amaç | Bölüm başlığı + isteğe bağlı alt açıklama |
| Tip | Server Component |
| Props | `title: string`, `description?: string`, `centered?: boolean`, `as?: "h2" | "h3"` |
| Font | Başlık: Playfair Display, Açıklama: Inter |

### ImageFrame

| Özellik | Değer |
|---------|-------|
| Amaç | next/image sarmalayıcı (aspect ratio, radius, fallback) |
| Tip | Server Component |
| Props | `src`, `alt`, `aspectRatio?: string`, `priority?` |
| Fallback | Görsel yoksa gri placeholder arka plan |

### LogoPlaceholder

| Özellik | Değer |
|---------|-------|
| Amaç | Mock müşteri logosu kutusu |
| Tip | Server Component |
| Props | `name?: string` |
| Görsel | Gri kutu + marka placeholder ismi |

---

## 9. SEO Components / Helpers

### JsonLd

| Özellik | Değer |
|---------|-------|
| Amaç | JSON-LD yapılandırılmış veri inject eden komponent |
| Tip | Server Component |
| Props | `data: object` (Organization, Service, BlogPosting, LocalBusiness, FAQ, BreadcrumbList) |
| Render | `<script type="application/ld+json">` |

### Breadcrumbs

| Özellik | Değer |
|---------|-------|
| Amaç | Sayfa breadcrumb navigasyonu |
| Tip | Server Component |
| Props | `items: { label, href }[]` |
| SEO | BreadcrumbList schema ile birlikte |
| Erişilebilirlik | `<nav aria-label="Breadcrumb">`, `<ol>` |

### Metadata Helper (fonksiyon, komponent değil)

- `lib/seo.ts` içinde `generateMetadata()` yardımcı fonksiyonu
- Next.js `generateMetadata()` export'u ile kullanılır
- title, description, og:*, hreflang alternates üretir
- Her locale için ayrı canonical URL

### hreflang Stratejisi

- Her sayfa `<head>` içinde tüm locale alternatifleri
- `x-default` Türkçe'ye yönlendirir
- Next.js metadata API ile otomatik inject

### Sitemap

- `app/sitemap.ts` ile dinamik XML sitemap
- Tüm locale varyasyonları dahil
- Hizmet sayfaları, lokasyonlar, blog yazıları

---

## 10. Data Strategy

### Hizmet Verileri — `src/data/services.ts`

- Her hizmetin tr/en/fr slug mapping'i burada
- İçerik çeviri dosyasından gelir, slug ve yapısal veri burada
- 8 hizmet: billboard, raket-reklam, metro-reklam, lightbox, pole-banner, dijital-ekran, otobus-reklam, megalight

### Mock İstatistikler — `src/data/mockStats.ts`

- Dosya adı "mock" ile başlar — niyeti belli
- Her değer `// TODO: Replace with real data` ile işaretli
- Lansman öncesi gerçek veri ile değiştirilir veya kaldırılır

### Mock Testimonial'lar — `src/data/mockTestimonials.ts`

- Açıkça kurgusal testimonial'lar
- Gerçek kişi/marka adı kullanılmaz
- Generic isimler: "Örnek Müşteri", "Örnek Firma"

### Mock Logolar — `src/data/mockLogos.ts`

- Generic placeholder kutular
- Gerçek marka logosu kullanılmaz
- "Marka A", "Marka B" gibi nötr isimler

### Lokasyonlar — `src/data/locations.ts`

- Şehir/bölge verileri (henüz onaylanmamış — koşullu kullanım)
- Gerçek veri geldiğinde doldurulacak yapı

### Kural: Ayrım

| Dosya tipi | Örnek | Anlam |
|-----------|-------|-------|
| `mock*.ts` | mockStats.ts | Açıkça geçici, değiştirilecek |
| Yapısal veri | services.ts, locations.ts | Slug, routing, veri yapısı |
| Çeviri içerikleri | dictionaries/tr.json | Kullanıcıya görünen metinler |

- Gerçek iş verileri asla mock dosyalarla karıştırılmaz
- Mock dosyalar SEO metadata veya JSON-LD'de kullanılmaz

---

## 11. i18n Integration Strategy

### Dictionary Kullanımı

- Server Component: `getDictionary(locale)` async fonksiyonu
- Client Component: Dictionary prop olarak aktarılır (context veya prop drilling)
- Hiçbir komponent doğrudan JSON dosyasını import etmez

### Çeviri Anahtarı Erişim Kalıbı

- Sayfa seviyesinde `getDictionary(locale)` çağrılır
- Alt komponentlere ilgili dictionary bölümü prop olarak geçirilir
- Örnek: `<HeroSection dictionary={dict.home.hero} />`

### Hardcoded Metin Yasağı

- Komponent JSX'inde Türkçe, İngilizce veya Fransızca metin YAZILMAZ
- Tek istisna: Marka adı "ThaB Media" (değişmez)
- `aria-label` değerleri bile lokalize edilir

### Uzun Fransızca Metin QA

- Geliştirme sırasında FR dictionary'e uzun test metinleri yazılarak layout test edilir
- Özellikle: butonlar, nav, hero başlık, kart başlıkları
- `docs/DESIGN_SYSTEM.md`'deki FR test referansları kullanılır

### Lokalize Route / Slug Stratejisi

- `[locale]` segment ile routing: `/hizmetler/` vs `/en/services/`
- Hizmet slug'ları dile göre farklı olabilir
- Slug mapping `src/data/services.ts` içinde tanımlı
- `middleware.ts` ile locale detection ve redirect

---

## 12. Server vs Client Component Kuralları

### Varsayılan: Server Component

Aşağıdakiler Server Component olarak kalır:
- Tüm section komponentleri (Hero, Stats, Services, vb.)
- Layout komponentleri (Header, Footer)
- UI primitives (Button as link, Card, Container, Section)
- SEO komponentleri (JsonLd, Breadcrumbs)
- Sayfa dosyaları (page.tsx)

### Client Component Gereken Durumlar

| Komponent | Neden Client? |
|-----------|---------------|
| MobileMenu | Açma/kapama toggle state |
| LanguageSwitcher | Navigation + aktif state |
| FAQSection | Accordion toggle |
| ServiceFAQ | Accordion toggle |
| ContactForm | Form state, validation, submit |
| FormInput, FormTextarea, FormSelect | Controlled input state |
| ConsentCheckbox | Controlled checkbox |
| SubmitButton | Loading state |

### Kurallar

1. `"use client"` direktifi yalnızca gerçekten gerektiğinde eklenir
2. Client boundary mümkün olduğunca dar tutulur (tüm sayfa değil, sadece etkileşimli parça)
3. Server Component içinden Client Component'e veri prop olarak aktarılır
4. Client Component'ler SEO-kritik içerik render etmez (H1, meta, JSON-LD sunucuda)
5. Event listener gerektirmeyen butonlar `<a>` (link) olarak Server Component kalır

---

## 13. Implementation Order

Güvenli ve aşamalı uygulama sırası:

| # | Adım | Detay |
|---|------|-------|
| 1 | Mevcut yapı kontrolü | `package.json`, `next.config.ts`, mevcut dosyalar |
| 2 | i18n routing ve dictionary kurulumu | `[locale]` route, `getDictionary()`, tr/en/fr.json |
| 3 | Font ve tema token kurulumu | Playfair Display + Inter (next/font), Tailwind renk/spacing |
| 4 | Root layout | `app/layout.tsx`, `app/[locale]/layout.tsx` (font, html lang) |
| 5 | UI primitives | Button, Container, Section, SectionHeader, Card |
| 6 | Layout komponentleri | Header, Footer, MobileMenu, LanguageSwitcher |
| 7 | Ana sayfa section'ları (tek tek) | Hero → Services → WhyUs → HowItWorks → FinalCTA |
| 8 | Mock data dosyaları | mockStats, mockLogos, mockTestimonials |
| 9 | Koşullu section'lar | Stats, References, Locations (mock verilere bağlı) |
| 10 | İletişim formu | ContactForm + alt komponentler |
| 11 | Hizmet sayfaları | ServiceDetail, ServiceGrid, alt komponentler |
| 12 | Diğer sayfalar | Hakkımızda, Referanslar, Lokasyonlar |
| 13 | SEO metadata | generateMetadata, JSON-LD, sitemap, robots |
| 14 | WhatsApp + Sticky CTA | Floating butonlar |
| 15 | Lint / TypeCheck / Build | `npm run lint && npm run build` |
| 16 | Mobil QA (3 dil) | TR, EN, FR ile layout kontrolü |

---

## 14. Riskler / Dikkat Edilecekler

| Risk | Önlem |
|------|-------|
| Hardcoded Türkçe metin | Her PR'da kontrol: komponent içinde string var mı? |
| FR metin ile kırılan layout | Geliştirme sırasında FR uzun metin ile test |
| Mock istatistiklerin production'a sızması | `MOCK DATA` yorumları + TODO.md checklist |
| Çok fazla Client Component | Varsayılan Server, yalnızca etkileşim gerekince Client |
| Tutarsız spacing/renkler | Tailwind token'ları, rastgele değer yasağı |
| Zayıf görsel alt text | Format: "[Açıklama] | ThaB Media" — boş alt yasak |
| Eksik metadata | Her sayfa `generateMetadata` export etmeli |
| CTA aşırı yüklemesi | Viewport başına tek birincil CTA kuralı |
| Başlık hiyerarşisi bozulması | H1 tek, H2 → H3 sırası atlanmaz |
| Büyük bundle size | Gereksiz paket yükleme yasağı, dynamic import |

---

## 15. Kodlama Öncesi Onay Listesi

Aşağıdaki maddeler onaylanmadan kodlamaya başlanmaz:

- [ ] Komponent listesi ve sorumlulukları onaylandı
- [ ] Dosya yapısı onaylandı
- [ ] i18n yaklaşımı (dictionary + locale routing) onaylandı
- [ ] Mock data izolasyonu (`src/data/mock*.ts`) onaylandı
- [ ] Ana sayfa bölüm sırası onaylandı
- [ ] SEO yapısı (metadata, JSON-LD, hreflang) onaylandı
- [ ] Server vs Client Component ayrımı onaylandı
- [ ] Uygulama sırası onaylandı
- [ ] Design system token'ları (renk, font, spacing) onaylandı

> Onay alındıktan sonra Implementation Order (Bölüm 13) sırasıyla ilerlenecek.
