# İçerik Yapısı ve Çeviri Anahtar Stratejisi

> ThaB Media — Açık Hava Reklam Alanı Kiralama / Medya Planlama

---

## 1. İçerik Stratejisi

### Ana Hedef

Ziyaretçinin "Bu firmadan teklif isteyeyim" kararına ulaşmasını sağlamak.

### Kullanıcı Neyi Hızlı Anlamalı?

1. ThaB Media ne iş yapıyor? → Açık hava reklam alanı kiralama ve medya planlama
2. Hangi reklam formatlarını sunuyor? → Billboard, raket, metro, dijital ekran, vb.
3. Neden bu firmayı seçmeliyim? → Değer önerileri (hız, kapsam, profesyonellik)
4. Nasıl iletişime geçerim? → Form, telefon, WhatsApp — her yerde erişilebilir

### Dönüşüm Hedefi

- Birincil: Teklif talebi formu doldurma
- İkincil: Telefon araması veya WhatsApp mesajı
- Üçüncül: Blog aracılığıyla organik SEO trafiği → dönüşüm

### Güven Öğeleri

- Müşteri referans logoları (varsa)
- İstatistikler: yıl, lokasyon, erişim (varsa gerçek veri)
- Testimonial'lar (varsa gerçek müşteri izni)
- Profesyonel lokasyon fotoğrafları
- KVKK uyumlu yasal sayfalar
- Fiziksel adres ve iletişim bilgileri

### SEO İçerik Yaklaşımı

- Her hizmet formatı için ayrı sayfa (long-tail anahtar kelime)
- Eğitici blog yazıları (Mecra360 benzeri "X Nedir?" formatı)
- Lokasyona özel sayfalar (coğrafi SEO)
- Tüm sayfalarda lokalize metadata
- Yapılandırılmış veri (JSON-LD) her sayfada

---

## 2. Sayfa Yapısı

| Sayfa | Amaç | SEO Önceliği |
|-------|------|--------------|
| Ana Sayfa | Genel tanıtım + dönüşüm | Yüksek |
| Hizmetler (genel) | Tüm formatların özeti | Yüksek |
| Hizmet Detay (x8) | Her format için ayrı SEO sayfası | Çok Yüksek |
| Lokasyonlar | Coğrafi kapsam | Yüksek |
| Referanslar | Sosyal kanıt | Orta |
| Hakkımızda | Firma hikayesi, güven | Orta |
| Blog (liste) | İçerik hub'ı | Yüksek |
| Blog (yazı) | Eğitici içerik, long-tail SEO | Çok Yüksek |
| İletişim | Form + bilgiler | Orta |
| KVKK | Yasal zorunluluk | Düşük |
| Gizlilik Politikası | Yasal zorunluluk | Düşük |
| Çerez Politikası | Yasal zorunluluk | Düşük |

---

## 3. URL Yapısı

### Türkçe (varsayılan — prefix yok)

| Sayfa | URL |
|-------|-----|
| Ana Sayfa | `/` |
| Hizmetler | `/hizmetler/` |
| Billboard | `/hizmetler/billboard/` |
| Raket Reklam | `/hizmetler/raket-reklam/` |
| Metro Reklam | `/hizmetler/metro-reklam/` |
| Lightbox | `/hizmetler/lightbox/` |
| Pole Banner | `/hizmetler/pole-banner/` |
| Dijital Ekran | `/hizmetler/dijital-ekran/` |
| Otobüs Reklam | `/hizmetler/otobus-reklam/` |
| Megalight | `/hizmetler/megalight/` |
| Lokasyonlar | `/lokasyonlar/` |
| Referanslar | `/referanslar/` |
| Hakkımızda | `/hakkimizda/` |
| Blog | `/blog/` |
| Blog Yazısı | `/blog/[slug]/` |
| İletişim | `/iletisim/` |
| KVKK | `/kvkk/` |
| Gizlilik | `/gizlilik-politikasi/` |
| Çerez | `/cerez-politikasi/` |

### İngilizce (/en)

| Sayfa | URL |
|-------|-----|
| Homepage | `/en/` |
| Services | `/en/services/` |
| Billboard | `/en/services/billboard/` |
| Bus Stop Ads | `/en/services/bus-stop-ads/` |
| Metro Ads | `/en/services/metro-ads/` |
| Lightbox | `/en/services/lightbox/` |
| Pole Banner | `/en/services/pole-banner/` |
| Digital Screens | `/en/services/digital-screens/` |
| Bus Ads | `/en/services/bus-ads/` |
| Megalight | `/en/services/megalight/` |
| Locations | `/en/locations/` |
| References | `/en/references/` |
| About | `/en/about/` |
| Blog | `/en/blog/` |
| Blog Post | `/en/blog/[slug]/` |
| Contact | `/en/contact/` |
| Privacy | `/en/privacy-policy/` |
| Cookies | `/en/cookie-policy/` |

### Fransızca (/fr)

| Sayfa | URL |
|-------|-----|
| Accueil | `/fr/` |
| Services | `/fr/services/` |
| Billboard | `/fr/services/billboard/` |
| Publicité Abribus | `/fr/services/publicite-abribus/` |
| Publicité Métro | `/fr/services/publicite-metro/` |
| Lightbox | `/fr/services/lightbox/` |
| Pole Banner | `/fr/services/pole-banner/` |
| Écrans Numériques | `/fr/services/ecrans-numeriques/` |
| Publicité Bus | `/fr/services/publicite-bus/` |
| Megalight | `/fr/services/megalight/` |
| Emplacements | `/fr/emplacements/` |
| Références | `/fr/references/` |
| À propos | `/fr/a-propos/` |
| Blog | `/fr/blog/` |
| Blog Article | `/fr/blog/[slug]/` |
| Contact | `/fr/contact/` |
| Confidentialité | `/fr/politique-de-confidentialite/` |
| Cookies | `/fr/politique-de-cookies/` |

---

## 4. Ana Sayfa İçerik Bölümleri

### Hero

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Başlık (H1) | Güçlü değer önerisi cümlesi | `home.hero.title` |
| Alt başlık | Açıklayıcı kısa paragraf | `home.hero.subtitle` |
| Birincil CTA | "Ücretsiz Teklif Alın" | `home.hero.ctaPrimary` |
| İkincil CTA | "Hizmetlerimizi Keşfedin" | `home.hero.ctaSecondary` |
| Arka plan | Görsel veya gradyan | — (tasarım) |

### İstatistik Barı (Koşullu — gerçek veri veya mock)

| Alan | Örnek | Çeviri Anahtarı |
|------|-------|-----------------|
| Stat 1 etiketi | "Lokasyon" | `home.stats.locations.label` |
| Stat 1 değer | "150+" | `home.stats.locations.value` |
| Stat 2 etiketi | "Yıllık Deneyim" | `home.stats.experience.label` |
| Stat 2 değer | "10+" | `home.stats.experience.value` |
| Stat 3 etiketi | "Aylık Erişim" | `home.stats.reach.label` |
| Stat 3 değer | "5M+" | `home.stats.reach.value` |
| Stat 4 etiketi | "Mutlu Müşteri" | `home.stats.clients.label` |
| Stat 4 değer | "50+" | `home.stats.clients.value` |

> Mock data olarak kullanılabilir — kod içinde `{/* MOCK DATA */}` işaretli olmalı.

### Hizmetler Önizleme

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Bölüm başlığı (H2) | "Hizmetlerimiz" | `home.services.title` |
| Bölüm açıklaması | Kısa intro paragraf | `home.services.description` |
| Kart başlığı | Hizmet adı | `services.[slug].title` |
| Kart açıklaması | Kısa özet | `services.[slug].shortDescription` |
| Kart linki | "Detayları İncele" | `common.cta.viewDetails` |
| Alt CTA | "Tüm Hizmetlerimiz" | `home.services.ctaAll` |

### Neden Biz?

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Bölüm başlığı (H2) | "Neden ThaB Media?" | `home.whyUs.title` |
| Değer 1 başlık | Ör: "Premium Lokasyonlar" | `home.whyUs.items.0.title` |
| Değer 1 açıklama | Kısa açıklama | `home.whyUs.items.0.description` |
| Değer 2 başlık | Ör: "Hızlı Çözüm" | `home.whyUs.items.1.title` |
| Değer 2 açıklama | Kısa açıklama | `home.whyUs.items.1.description` |
| Değer 3 başlık | Ör: "Profesyonel Ekip" | `home.whyUs.items.2.title` |
| Değer 3 açıklama | Kısa açıklama | `home.whyUs.items.2.description` |

### Lokasyonlar Önizleme

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Bölüm başlığı (H2) | "Reklam Lokasyonlarımız" | `home.locations.title` |
| Bölüm açıklaması | Kısa intro | `home.locations.description` |
| CTA | "Tüm Lokasyonları Görün" | `home.locations.cta` |

### Nasıl Çalışır?

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Bölüm başlığı (H2) | "Nasıl Çalışır?" | `home.howItWorks.title` |
| Adım 1 başlık | "Danışma" | `home.howItWorks.steps.0.title` |
| Adım 1 açıklama | Süreç açıklaması | `home.howItWorks.steps.0.description` |
| Adım 2 başlık | "Lokasyon Seçimi" | `home.howItWorks.steps.1.title` |
| Adım 2 açıklama | Süreç açıklaması | `home.howItWorks.steps.1.description` |
| Adım 3 başlık | "Kampanya Başlatma" | `home.howItWorks.steps.2.title` |
| Adım 3 açıklama | Süreç açıklaması | `home.howItWorks.steps.2.description` |

### Referanslar / Mock Referanslar

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Bölüm başlığı (H2) | "Güvenilen Markalar" | `home.references.title` |
| Logo alt text | Marka adı | `home.references.items.[n].alt` |

> Mock: Generic placeholder kutular. Gerçek logo yoksa bölüm gizlenebilir.

### SSS (FAQ)

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Bölüm başlığı (H2) | "Sık Sorulan Sorular" | `home.faq.title` |
| Soru [n] | Soru metni | `home.faq.items.[n].question` |
| Cevap [n] | Cevap metni | `home.faq.items.[n].answer` |

### Son CTA Bölümü

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Başlık (H2) | "Markanızı Milyonlara Ulaştırın" | `home.finalCta.title` |
| Alt metin | Teşvik cümlesi | `home.finalCta.description` |
| CTA butonu | "Hemen İletişime Geçin" | `home.finalCta.button` |

### Footer

| Alan | İçerik Türü | Çeviri Anahtarı |
|------|-------------|-----------------|
| Şirket açıklaması | Kısa tanıtım | `footer.description` |
| Navigasyon başlığı | "Sayfalar" | `footer.nav.title` |
| Hizmetler başlığı | "Hizmetlerimiz" | `footer.services.title` |
| İletişim başlığı | "İletişim" | `footer.contact.title` |
| Adres | Fiziksel adres | `footer.contact.address` |
| Telefon etiketi | "Telefon" | `footer.contact.phoneLabel` |
| E-posta etiketi | "E-posta" | `footer.contact.emailLabel` |
| Telif hakkı | "© {year} ThaB Media..." | `footer.copyright` |
| KVKK linki | "KVKK Politikası" | `footer.legal.kvkk` |
| Gizlilik linki | "Gizlilik Politikası" | `footer.legal.privacy` |
| Çerez linki | "Çerez Politikası" | `footer.legal.cookies` |

---

## 5. Translation Key Strategy

### Anahtar İsimlendirme Kuralları

- **camelCase** kullanılır
- **Hiyerarşik yapı:** `bölüm.altBölüm.alan`
- **Tekrarlanan metinler** `common.*` altında
- **Sayfaya özel metinler** `sayfaAdı.*` altında
- **Hizmetler** `services.[slug].*` altında

### Anahtar Hiyerarşisi

```
common.
├── navigation.
│   ├── home
│   ├── services
│   ├── locations
│   ├── references
│   ├── about
│   ├── blog
│   └── contact
├── cta.
│   ├── getQuote
│   ├── contactUs
│   ├── viewDetails
│   ├── learnMore
│   ├── viewAll
│   └── sendMessage
├── form.
│   ├── required
│   ├── invalidEmail
│   ├── invalidPhone
│   ├── success
│   └── error
└── meta.
    ├── siteName
    └── siteDescription

home.
├── hero.
│   ├── title
│   ├── subtitle
│   ├── ctaPrimary
│   └── ctaSecondary
├── stats.
│   ├── locations.label / .value
│   ├── experience.label / .value
│   ├── reach.label / .value
│   └── clients.label / .value
├── services.
│   ├── title
│   ├── description
│   └── ctaAll
├── whyUs.
│   ├── title
│   └── items.[n].title / .description
├── locations.
│   ├── title
│   ├── description
│   └── cta
├── howItWorks.
│   ├── title
│   └── steps.[n].title / .description
├── references.
│   └── title
├── faq.
│   ├── title
│   └── items.[n].question / .answer
├── finalCta.
│   ├── title
│   ├── description
│   └── button
└── blog.
    ├── title
    └── viewAll

services.
├── overview.
│   ├── title
│   └── description
└── [slug].
    ├── title
    ├── shortDescription
    ├── longDescription
    ├── benefits.[n]
    ├── useCases.[n]
    ├── idealSectors.[n]
    ├── cta
    ├── faq.[n].question / .answer
    └── seo.title / .description

locations.
├── title
├── description
└── [slug].
    ├── name
    ├── description
    ├── availableFormats.[n]
    └── seo.title / .description

about.
├── title
├── subtitle
├── story
├── mission
├── vision
└── seo.title / .description

contact.
├── title
├── subtitle
├── form.
│   ├── name.label / .placeholder
│   ├── company.label / .placeholder
│   ├── phone.label / .placeholder
│   ├── email.label / .placeholder
│   ├── service.label / .placeholder
│   ├── message.label / .placeholder
│   ├── consent.label
│   ├── submit
│   ├── success
│   └── error
└── seo.title / .description

blog.
├── title
├── description
├── readMore
├── categories.[slug]
└── seo.title / .description

footer.
├── description
├── nav.title
├── services.title
├── contact.title / .address / .phoneLabel / .emailLabel
├── copyright
└── legal.kvkk / .privacy / .cookies

seo.
├── home.title / .description / .ogTitle / .ogDescription
├── services.title / .description
├── locations.title / .description
├── references.title / .description
├── about.title / .description
├── blog.title / .description
└── contact.title / .description
```

---

## 6. Dictionary Dosya Yapısı

### Dosya Konumu

```
src/lib/i18n/
├── index.ts                 — i18n yapılandırması, getDictionary() helper
└── dictionaries/
    ├── tr.json              — Türkçe (birincil, tam içerik)
    ├── en.json              — İngilizce (placeholder → final çeviri)
    └── fr.json              — Fransızca (placeholder → final çeviri)
```

### Örnek tr.json Yapısı (kısaltılmış)

```json
{
  "common": {
    "navigation": {
      "home": "Ana Sayfa",
      "services": "Hizmetlerimiz",
      "locations": "Lokasyonlar",
      "references": "Referanslar",
      "about": "Hakkımızda",
      "blog": "Blog",
      "contact": "İletişim"
    },
    "cta": {
      "getQuote": "Teklif Alın",
      "contactUs": "İletişime Geçin",
      "viewDetails": "Detayları İncele",
      "learnMore": "Daha Fazla",
      "viewAll": "Tümünü Görün",
      "sendMessage": "Mesaj Gönder"
    }
  },
  "home": {
    "hero": {
      "title": "...",
      "subtitle": "...",
      "ctaPrimary": "Ücretsiz Teklif Alın",
      "ctaSecondary": "Hizmetlerimizi Keşfedin"
    }
  }
}
```

### Örnek en.json Yapısı (placeholder)

```json
{
  "common": {
    "navigation": {
      "home": "Home",
      "services": "Our Services",
      "locations": "Locations",
      "references": "References",
      "about": "About Us",
      "blog": "Blog",
      "contact": "Contact"
    },
    "cta": {
      "getQuote": "Get a Quote",
      "contactUs": "Contact Us",
      "viewDetails": "View Details",
      "learnMore": "Learn More",
      "viewAll": "View All",
      "sendMessage": "Send Message"
    }
  },
  "home": {
    "hero": {
      "title": "...",
      "subtitle": "...",
      "ctaPrimary": "Get a Free Quote",
      "ctaSecondary": "Explore Our Services"
    }
  }
}
```

### Örnek fr.json Yapısı (placeholder)

```json
{
  "common": {
    "navigation": {
      "home": "Accueil",
      "services": "Nos Services",
      "locations": "Emplacements",
      "references": "Références",
      "about": "À propos",
      "blog": "Blog",
      "contact": "Contact"
    },
    "cta": {
      "getQuote": "Demander un devis",
      "contactUs": "Contactez-nous",
      "viewDetails": "Voir les détails",
      "learnMore": "En savoir plus",
      "viewAll": "Voir tout",
      "sendMessage": "Envoyer le message"
    }
  },
  "home": {
    "hero": {
      "title": "...",
      "subtitle": "...",
      "ctaPrimary": "Demander un devis gratuit",
      "ctaSecondary": "Découvrir nos services"
    }
  }
}
```

### Kurallar

- TR dosyası daima tam ve güncel olmalı (kaynak dosya)
- EN ve FR başlangıçta placeholder olabilir, lansman öncesi tamamlanmalı
- Anahtar adları diller arasında birebir aynı olmalı
- Eksik anahtar durumunda TR'ye fallback yapılır
- Makine çevirisi nihai kopya olarak kullanılmaz — insan incelemesi zorunlu

---

## 7. SEO Content Structure

### Her Sayfa İçin Zorunlu SEO Alanları

| Alan | Açıklama | Çeviri Anahtarı |
|------|----------|-----------------|
| title | Sayfa başlığı (50-60 karakter) | `seo.[page].title` |
| description | Meta açıklama (150-160 karakter) | `seo.[page].description` |
| og:title | Open Graph başlığı | `seo.[page].ogTitle` |
| og:description | Open Graph açıklaması | `seo.[page].ogDescription` |
| canonical | Canonical URL (locale bazlı) | Otomatik (URL'den) |
| hreflang | Alternatif dil bağlantıları | Otomatik (routing'den) |

### Hizmet Sayfaları SEO

| Hizmet | TR Title Örneği | EN Title Örneği |
|--------|-----------------|-----------------|
| Billboard | "Billboard Reklam \| ThaB Media" | "Billboard Advertising \| ThaB Media" |
| Raket | "Raket Reklam - Durak Reklamları \| ThaB Media" | "Bus Stop Advertising \| ThaB Media" |
| Metro | "Metro Reklam Alanları \| ThaB Media" | "Metro Advertising Spaces \| ThaB Media" |
| Lightbox | "Lightbox Reklam \| ThaB Media" | "Lightbox Advertising \| ThaB Media" |
| Pole Banner | "Pole Banner - Direk Reklamları \| ThaB Media" | "Pole Banner Advertising \| ThaB Media" |
| Dijital Ekran | "Dijital Ekran ve DOOH Reklam \| ThaB Media" | "Digital Screen & DOOH Advertising \| ThaB Media" |
| Otobüs | "Otobüs Reklamları \| ThaB Media" | "Bus Advertising \| ThaB Media" |
| Megalight | "Megalight Reklam \| ThaB Media" | "Megalight Advertising \| ThaB Media" |

### Blog Yazıları SEO

- Title: "[Yazı Başlığı] | ThaB Media Blog"
- Description: İlk 150 karakter özet veya custom meta
- og:image: Yazıya özel kapak görseli
- Structured data: BlogPosting schema (author, datePublished, dateModified)

### Yapılandırılmış Veri (JSON-LD)

| Sayfa | Schema Tipi |
|-------|-------------|
| Ana Sayfa | Organization, WebSite |
| Hizmet Sayfaları | Service |
| İletişim | LocalBusiness |
| Blog Yazıları | BlogPosting |
| Tüm Sayfalar | BreadcrumbList |

### hreflang Stratejisi

Her sayfa `<head>` içinde:
```html
<link rel="alternate" hreflang="tr" href="https://thabmedia.com.tr/hizmetler/billboard/" />
<link rel="alternate" hreflang="en" href="https://thabmedia.com.tr/en/services/billboard/" />
<link rel="alternate" hreflang="fr" href="https://thabmedia.com.tr/fr/services/billboard/" />
<link rel="alternate" hreflang="x-default" href="https://thabmedia.com.tr/hizmetler/billboard/" />
```

---

## 8. Service Content Model

Her hizmet sayfası aşağıdaki içerik yapısını takip eder:

### Veri Modeli

```typescript
interface ServiceContent {
  slug: string;                    // URL slug (locale bazlı)
  title: string;                   // H1 başlık
  shortDescription: string;        // Ana sayfada kart açıklaması (1-2 cümle)
  longDescription: string;         // Hizmet sayfasında detaylı açıklama (2-3 paragraf)
  benefits: string[];              // 3-5 avantaj maddesi
  useCases: string[];              // "Bu format şunlar için idealdir:" listesi
  idealSectors: string[];          // Hedef sektörler (perakende, finans, FMCG, vb.)
  cta: string;                     // Sayfaya özel CTA metni
  faq: { question: string; answer: string }[];  // 3-5 SSS
  seo: {
    title: string;                 // Meta title
    description: string;           // Meta description
  };
}
```

### Hizmet Listesi ve Slug Mapping

| # | Hizmet (TR) | TR Slug | EN Slug | FR Slug |
|---|-------------|---------|---------|---------|
| 1 | Billboard | billboard | billboard | billboard |
| 2 | Raket / Durak Reklamları | raket-reklam | bus-stop-ads | publicite-abribus |
| 3 | Metro Reklam Alanları | metro-reklam | metro-ads | publicite-metro |
| 4 | Lightbox / CLP | lightbox | lightbox | lightbox |
| 5 | Elektrik Direkleri / Pole Banner | pole-banner | pole-banner | pole-banner |
| 6 | Dijital Ekran / Totem / DOOH | dijital-ekran | digital-screens | ecrans-numeriques |
| 7 | Otobüs Reklamları | otobus-reklam | bus-ads | publicite-bus |
| 8 | Megalight | megalight | megalight | megalight |

### Örnek İçerik Yapısı: Billboard

```
title: "Billboard Reklam"
shortDescription: "Şehrin en görünür noktalarında büyük format açık hava panoları ile markanızı öne çıkarın."
longDescription: [2-3 paragraf detaylı açıklama]
benefits:
  - "Geniş kitleye yüksek görünürlük"
  - "7/24 kesintisiz marka teşhiri"
  - "Coğrafi hedefleme imkanı"
  - "Yüksek etki gücü — büyük format, net mesaj"
useCases:
  - "Yeni ürün/marka lansmanları"
  - "Bölgesel kampanyalar"
  - "Kurumsal bilinirlik artışı"
idealSectors:
  - "Perakende"
  - "Finans ve bankacılık"
  - "Telekomünikasyon"
  - "FMCG"
cta: "Billboard Reklam İçin Teklif Alın"
faq:
  - question: "Billboard reklam süresi ne kadardır?"
    answer: "..."
  - question: "Billboard reklam fiyatları nasıl belirlenir?"
    answer: "..."
  - question: "Hangi şehirlerde billboard alanı mevcut?"
    answer: "..."
seo:
  title: "Billboard Reklam | ThaB Media"
  description: "Şehrin en stratejik noktalarında billboard reklam alanları. ..."
```

> Not: İçerik örnekleri taslak niteliğindedir. Final kopya onaydan geçmelidir.

---

## 9. Location Content Model

### Veri Modeli

```typescript
interface LocationContent {
  slug: string;                    // URL slug
  name: string;                    // Şehir/bölge adı
  description: string;             // Kısa tanıtım (1-2 paragraf)
  availableFormats: string[];      // Mevcut reklam formatları
  highlights: string[];            // Öne çıkan özellikler (trafik, demografi, vb.)
  mapNote: string;                 // "Harita yakında eklenecek" placeholder notu
  cta: string;                     // Lokasyona özel CTA
  seo: {
    title: string;
    description: string;
  };
}
```

### Örnek Yapı (Varsayım — şehir/bölge onaylanmamış)

```
name: "[Şehir Adı]"
description: "[Şehir]'in en yoğun noktalarında açık hava reklam alanları..."
availableFormats: ["Billboard", "Raket", "Dijital Ekran", "Otobüs"]
highlights:
  - "Günlük yüksek yaya/araç trafiği"
  - "Alışveriş ve iş merkezlerine yakın konumlar"
mapNote: "İnteraktif harita yakında eklenecektir."
cta: "[Şehir] Lokasyonları İçin Teklif Alın"
seo:
  title: "[Şehir] Açık Hava Reklam Alanları | ThaB Media"
  description: "[Şehir]'de billboard, dijital ekran ve raket reklam alanları..."
```

> Not: Hangi şehirlerde faaliyet gösterildiği henüz onaylanmamıştır. Sayfa yapısı hazır tutulacak, içerik veri geldiğinde doldurulacaktır.

---

## 10. Blog İçerik Stratejisi

### İlham: Mecra360 Modeli

Eğitici, SEO odaklı, hizmet sayfalarını destekleyen içerikler.

### Blog Kategorileri

| Kategori | Çeviri Anahtarı | Açıklama |
|----------|-----------------|----------|
| Açık Hava Reklamcılığı | `blog.categories.outdoor` | Sektör bilgisi, formatlar |
| Dijital Reklam / DOOH | `blog.categories.dooh` | Dijital açık hava trendleri |
| Medya Planlama | `blog.categories.mediaPlanning` | Strateji, bütçeleme |
| Sektör Trendleri | `blog.categories.trends` | Yıllık trendler, istatistikler |

### Önerilen Başlangıç Yazıları

| # | Başlık (TR) | Format | Hedef Keyword | Desteklediği Hizmet |
|---|-------------|--------|---------------|---------------------|
| 1 | Billboard Reklamları Nedir? | Tanım | billboard reklam | Billboard |
| 2 | Açık Hava Reklamcılığı Neden Önemlidir? | Değer | açık hava reklamcılığı | Genel |
| 3 | Dijital Açık Hava (DOOH) Reklamcılığı Nedir? | Tanım | dooh reklam | Dijital Ekran |
| 4 | Metro Reklam Alanları: Kapsamlı Rehber | Rehber | metro reklam | Metro |
| 5 | Otobüs Giydirme Nedir? Avantajları Nelerdir? | Tanım+Avantaj | otobüs giydirme | Otobüs |
| 6 | Açık Hava Reklam Türleri Karşılaştırması | Karşılaştırma | açık hava reklam türleri | Genel |
| 7 | Medya Planlama Nedir? | Tanım | medya planlama | Genel |
| 8 | Billboard Kiralama Rehberi | How-to | billboard kiralama | Billboard |

### Blog Yazısı İçerik Modeli

```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;              // 150-200 karakter özet (elle yazılır, otomatik kesilmez)
  content: string;              // Markdown veya rich text
  category: string[];           // 1-3 kategori
  author: string;               // Yazar adı (veya "ThaB Media Ekibi")
  publishedAt: string;          // ISO tarih
  updatedAt?: string;
  coverImage: string;           // Kapak görseli
  seo: {
    title: string;
    description: string;
  };
}
```

### Blog i18n Stratejisi

- İlk aşamada yalnızca Türkçe blog yazıları
- EN/FR çevirileri Faz 2 veya seçici çeviri (en önemli 3-4 yazı)
- URL slug'ları dile göre farklı olabilir: `/blog/billboard-nedir/` vs `/en/blog/what-is-billboard/`

---

## 11. Form İçerik Yapısı

### İletişim / Teklif Formu Alanları

| Alan | Tip | Zorunlu | Çeviri Anahtarı (label) | Çeviri Anahtarı (placeholder) |
|------|-----|---------|-------------------------|-------------------------------|
| Ad Soyad | text | Evet | `contact.form.name.label` | `contact.form.name.placeholder` |
| Firma | text | Hayır | `contact.form.company.label` | `contact.form.company.placeholder` |
| Telefon | tel | Evet | `contact.form.phone.label` | `contact.form.phone.placeholder` |
| E-posta | email | Evet | `contact.form.email.label` | `contact.form.email.placeholder` |
| İlgilenilen Hizmet | select | Hayır | `contact.form.service.label` | `contact.form.service.placeholder` |
| Mesaj | textarea | Hayır | `contact.form.message.label` | `contact.form.message.placeholder` |
| KVKK Onayı | checkbox | Evet | `contact.form.consent.label` | — |
| Gönder | button | — | `contact.form.submit` | — |

### Hizmet Seçenekleri (Select)

Çeviri anahtarı: `contact.form.service.options.[n]`

- Billboard
- Raket / Durak Reklamları
- Metro Reklam Alanları
- Lightbox / CLP
- Pole Banner
- Dijital Ekran / DOOH
- Otobüs Reklamları
- Megalight
- Diğer

### Doğrulama Mesajları

| Durum | Çeviri Anahtarı | TR Örnek |
|-------|-----------------|----------|
| Zorunlu alan | `common.form.required` | "Bu alan zorunludur" |
| Geçersiz e-posta | `common.form.invalidEmail` | "Geçerli bir e-posta adresi girin" |
| Geçersiz telefon | `common.form.invalidPhone` | "Geçerli bir telefon numarası girin" |
| KVKK onay gerekli | `contact.form.consent.required` | "Devam etmek için onay vermeniz gerekiyor" |

### Başarı / Hata Mesajları

| Durum | Çeviri Anahtarı | TR Örnek |
|-------|-----------------|----------|
| Başarılı gönderim | `contact.form.success` | "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız." |
| Hata | `contact.form.error` | "Bir hata oluştu. Lütfen daha sonra tekrar deneyin." |

---

## 12. Mock Data İçerik Kuralları

### Mock Kullanılabilecek Alanlar

| Alan | Örnek Mock Değer | Kural |
|------|------------------|-------|
| Lokasyon sayısı | "150+ Lokasyon" | Gerçekçi, abartısız |
| Deneyim yılı | "10+ Yıl" | Gerçekçi aralık |
| Aylık erişim | "5M+ Görüntülenme" | Sektöre uygun |
| Müşteri sayısı | "50+ Müşteri" | Gerçekçi |
| Müşteri logoları | "Marka A", "Marka B" (gri kutular) | Gerçek marka adı kullanılmaz |
| Testimonial'lar | "Örnek Müşteri — Placeholder Yorum" | Açıkça kurgusal |
| Garanti süresi | "24 Saat İçinde Dönüş" | Gerçekçi vaat |

### İçerik İçinde İşaretleme

Kod içinde her mock metin şu yorum ile işaretlenir:
```tsx
{/* MOCK DATA */}
<p>150+ Lokasyonda Hizmet</p>

// veya
// TODO: Replace with real data
const stats = { locations: "150+" };
```

### Çeviri Dosyalarında İşaretleme

Mock değerler çeviri dosyasında değer sonuna `[MOCK]` eklenerek işaretlenebilir:
```json
{
  "home": {
    "stats": {
      "locations": { "value": "150+", "label": "Lokasyon" }
    }
  }
}
```
> Alternatif: Ayrı bir `mockData.ts` dosyasında tutulup, gerçek veri geldiğinde değiştirilir.

### Kesinlikle Mock Olmayacak Alanlar

- SEO metadata (title, description, og:tags)
- JSON-LD yapılandırılmış veri
- Yasal sayfalar (KVKK, gizlilik, çerez)
- Gerçek vaka çalışması olarak sunulan içerik
- Production'da nihai kopya

### Lansman Öncesi

Tüm mock içerik `docs/TODO.md` kontrol listesine göre gerçek veri ile değiştirilir veya kaldırılır.

---

## 13. i18n QA Kontrol Listesi

### Kod Kalitesi

- [ ] Komponent içinde hardcoded kullanıcıya görünür string yok
- [ ] Tüm metin çeviri dosyasından/sözlükten geliyor
- [ ] Eksik anahtar durumunda TR'ye fallback çalışıyor
- [ ] Çeviri dosyalarında tüm anahtarlar tr/en/fr arasında senkron

### Metadata ve SEO

- [ ] Her sayfa için lokalize title/description mevcut
- [ ] hreflang etiketleri doğru sayfayı gösteriyor
- [ ] Canonical URL her locale için doğru
- [ ] og:title ve og:description lokalize
- [ ] JSON-LD içindeki metin alanları lokalize
- [ ] XML sitemap tüm dil varyasyonlarını içeriyor

### Navigasyon ve Dil Değiştirici

- [ ] Dil değiştirici tüm sayfalarda çalışıyor
- [ ] Değiştirici aynı sayfanın doğru locale versiyonuna yönlendiriyor
- [ ] Aktif dil görsel olarak vurgulanıyor
- [ ] Mobil menüde dil değiştirici erişilebilir

### Layout ve Metin Uzunluğu

- [ ] Fransızca uzun metin ile hero başlık kırılmıyor
- [ ] CTA butonları FR metinle taşmıyor
- [ ] Navigasyon etiketleri FR ile düzgün görünüyor
- [ ] Kart başlıkları 3 dilde de düzgün
- [ ] Form label'ları uzun FR metin ile düzgün
- [ ] Footer linkleri FR ile düzgün wrap oluyor
- [ ] İstatistik barı etiketleri taşmıyor

### Form ve Doğrulama

- [ ] Form etiketleri lokalize
- [ ] Placeholder metinler lokalize
- [ ] Doğrulama hata mesajları aktif dilde
- [ ] Başarı/hata mesajları lokalize
- [ ] Hizmet seçenekleri (select) lokalize
- [ ] KVKK onay metni lokalize

### Yasal ve Footer

- [ ] KVKK / Privacy / Cookie sayfaları her dilde mevcut
- [ ] Footer yasal linkleri doğru sayfalara yönlendiriyor
- [ ] Telif hakkı metni lokalize

### Test Yöntemi

Her sayfa üç dilde tarayıcıda açılarak kontrol edilmelidir:
1. `/` (TR)
2. `/en/` (EN)
3. `/fr/` (FR)

Özellikle FR ile test kritiktir — en uzun metinlerin layout'u bozup bozmadığı kontrol edilmelidir.
