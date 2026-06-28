# Proje Kararları

> ThaB Media - Web Sitesi Projesi

---

## Onaylanmış Kararlar

Aşağıdakiler doğrudan onaylanmış, kesin kararlardır:

| Karar | Detay |
|-------|-------|
| Firma adı | ThaB Media |
| Logo | Hazır — public/logo.svg |
| Marka renkleri | Koyu lacivert (#112866), kırmızı (#FF0A0A) — logo dosyasından |
| Başlık fontu | Playfair Display |
| Gövde fontu | Inter |
| Dil | Çok dilli: Türkçe (varsayılan), İngilizce, Fransızca |
| SEO önemi | Çok yüksek |
| Mobil/masaüstü | Her ikisinde mükemmel görünüm |
| Ana hedef | Ziyaretçilerin teklif talep etmesi / iletişime geçmesi |
| Platform | Next.js 16, Tailwind CSS 4, TypeScript |
| Referans kullanımı | Yalnızca ilham — kopyalama yok |
| İş modeli yönü | Medya Atak benzeri — medya planlama ve açık hava reklam alanı kiralama |
| Blog/içerik stratejisi | Mecra360 benzeri eğitici SEO içerikleri |
| E-posta | info@thabmedia.com.tr |

---

## Medya Atak Benzeri Varsayımlar

> Aşağıdaki kararlar Medya Atak'ın iş modeli referans alınarak yapılmıştır.
> "Varsayım" olarak işaretlenmiştir ve doğrulanması gerekir.

### Şirket Konumlandırması (Varsayım)

ThaB Media, Medya Atak gibi bir **medya planlama ve satın alma ajansı** olarak konumlandırılacak:
- Açık hava reklam alanı kiralama
- Medya planlama danışmanlığı
- Farklı format ve lokasyonlarda reklam çözümleri sunma

### Hizmet Kapsamı (Varsayım)

**Ana Hizmetler — Açık Hava Reklamcılığı:**

| # | Hizmet | Açıklama |
|---|--------|----------|
| 1 | Billboard | Geleneksel büyük format açık hava panoları |
| 2 | Raket / Durak Reklamları | Otobüs durağı panelleri, yol kenarı raket |
| 3 | Metro Reklam Alanları | Metro istasyonu, vagon içi ve koridor reklamları |
| 4 | Lightbox / CLP | Arka aydınlatmalı, vitrin tipi paneller |
| 5 | Elektrik Direkleri / Pole Banner | Direk üstü bayrak, banner uygulamaları |
| 6 | Dijital Ekran / Totem / DOOH | LED ekranlar, dijital totemler, programatik açık hava |
| 7 | Otobüs Reklamları | Superback, tam giydirme, iç mekan reklamları |
| 8 | Megalight | Büyük format aydınlatmalı yol kenarı panolar |

**İkincil Hizmet (Opsiyonel — Faz 2 veya hiç):**
- Kurumsal tasarım / kampanya desteği

### Sayfa Yapısı (Varsayım)

**URL Yapısı — Çok Dilli:**

| Dil | Prefix | Örnek |
|-----|--------|-------|
| Türkçe (varsayılan) | / | /hizmetler/billboard/ |
| İngilizce | /en | /en/services/billboard/ |
| Fransızca | /fr | /fr/services/billboard/ |

**Türkçe (varsayılan — prefix yok):**
```
/ ........................... Ana Sayfa
/hizmetler/ ................. Hizmetler genel sayfası
/hizmetler/billboard/ ....... Her format için ayrı sayfa
/hizmetler/raket-reklam/ .... "
/hizmetler/metro-reklam/ .... "
/hizmetler/lightbox/ ........ "
/hizmetler/pole-banner/ ..... "
/hizmetler/dijital-ekran/ ... "
/hizmetler/otobus-reklam/ ... "
/hizmetler/megalight/ ....... "
/lokasyonlar/ ............... Lokasyonlar sayfası
/referanslar/ ............... Müşteri referansları
/hakkimizda/ ................ Hakkımızda
/blog/ ...................... Blog listesi
/blog/[slug]/ ............... Blog yazısı
/iletisim/ .................. İletişim formu + bilgiler
```

**İngilizce (/en prefix):**
```
/en/ ........................ Homepage
/en/services/ ............... Services overview
/en/services/billboard/ ..... Service pages
/en/locations/ .............. Locations
/en/references/ ............. References
/en/about/ .................. About
/en/blog/ ................... Blog
/en/contact/ ................ Contact
```

**Fransızca (/fr prefix):**
```
/fr/ ........................ Page d'accueil
/fr/services/ ............... Services
/fr/services/billboard/ ..... Service pages
/fr/emplacements/ ........... Emplacements
/fr/references/ ............. Références
/fr/a-propos/ ............... À propos
/fr/blog/ ................... Blog
/fr/contact/ ................ Contact
```

### Navigasyon Yapısı (Varsayım)

**Header:**
- Logo (sol)
- Ana menü: Hizmetlerimiz (dropdown) | Lokasyonlar | Referanslar | Hakkımızda | Blog | İletişim
- Sağ: Telefon + "Teklif Alın" butonu

**Hizmetlerimiz Dropdown:**
- Billboard
- Raket / Durak Reklamları
- Metro Reklam Alanları
- Lightbox / CLP
- Elektrik Direkleri / Pole Banner
- Dijital Ekran / Totem / DOOH
- Otobüs Reklamları
- Megalight

### Blog İçerik Planı (Varsayım — Mecra360 İlhamı)

**Lansman İçin Hedef: 5-8 başlangıç yazısı**

| Yazı Başlığı (Örnek) | Format | Hedef Anahtar Kelime |
|-----------------------|--------|---------------------|
| Billboard Reklamları Nedir? | Tanım/Açıklama | billboard reklam |
| Açık Hava Reklamcılığı Neden Önemlidir? | Değer Vurgulama | açık hava reklamcılığı |
| Dijital Açık Hava (DOOH) Reklamcılığı Nedir? | Tanım/Açıklama | dooh reklam |
| Metro Reklam Alanları: Kapsamlı Rehber | Rehber | metro reklam |
| Otobüs Giydirme Nedir? Avantajları Nelerdir? | Tanım + Avantaj | otobüs giydirme |
| Açık Hava Reklam Türleri Karşılaştırması | Karşılaştırma | açık hava reklam türleri |
| Medya Planlama Nedir? | Tanım/Açıklama | medya planlama |
| Billboard Kiralama Rehberi | Rehber/How-to | billboard kiralama |

---

## Netleşmeyen Konular

> Bu konular uygulama öncesi yanıtlanmalıdır. Yanıtlanana kadar ilgili bölümler ya yer tutucu ile gösterilecek ya da tamamen dahil edilmeyecektir.

### Kritik (Lansman İçin Gerekli)

| # | Konu | Etki |
|---|------|------|
| 1 | Hangi şehir/bölgelerde faaliyet gösteriliyor? | Lokasyonlar sayfası, coğrafi SEO |
| 2 | İletişim kanalları (telefon, WhatsApp numarası?) | Header, footer, mobil floating buton |
| 3 | Fiziksel adres var mı? | Footer, iletişim sayfası, LocalBusiness schema |
| 4 | KVKK / gizlilik politikası metni hazır mı? | Yasal zorunluluk |
| 5 | Deploy ortamı (Vercel, VPS, başka?) | Teknik yapılandırma |

### Önemli (İçerik Kalitesi İçin)

| # | Konu | Etki |
|---|------|------|
| 6 | Profesyonel lokasyon/uygulama fotoğrafları var mı? | Görsel kalite, güvenilirlik |
| 7 | Müşteri referans logoları gösterilebilir mi? | Sosyal kanıt |
| 8 | Kuruluş yılı ve deneyim süresi | Hakkımızda, güven sinyali |
| 9 | Türkçe metin/kopya kim hazırlayacak? | İçerik üretimi süreci |
| 10 | Hizmet kapsamı listesi doğru mu? | Menü, sayfalar, SEO |

### İkincil (Faz 2 Olabilir)

| # | Konu | Etki |
|---|------|------|
| 11 | CRM / analitik entegrasyonu | Teknik entegrasyon |
| 12 | Blog lansmanda mı başlayacak? | İçerik hazırlığı takvimi |
| 13 | Google Business Profile mevcut mu? | Yerel SEO |

---

## Mock Data Kullanımı

> Tasarım ve geliştirme sürecinde görsel denge, düzen testi ve komponent tasarımı amacıyla
> aşağıdaki alanlarda mock (yer tutucu) veri kullanılmasına izin verilmiştir.

### Mock Data Kullanılabilecek Alanlar

| Alan | Mock Kullanımı | Kural |
|------|----------------|-------|
| Sektör deneyimi (yıl) | Evet — düzen/tasarım için | Gerçekçi ama abartısız bir değer (ör: "10+ Yıl") |
| Lokasyon sayısı | Evet — istatistik barı tasarımı için | Gerçekçi aralık (ör: "150+ Lokasyon") |
| Müşteri/marka logoları | Evet — grid/carousel tasarımı için | Generic placeholder isimler veya nötr logo kutuları |
| Aylık/yıllık erişim | Evet — istatistik barı tasarımı için | Gerçekçi sayı (ör: "5M+ Görüntülenme") |
| Müşteri yorumları | Evet — testimonial bölümü tasarımı için | Açıkça kurgusal, gerçek kişi adı kullanılmaz |
| Garanti müdahale süresi | Evet — değer önerisi kartı tasarımı için | Gerçekçi süre (ör: "24 Saat İçinde Dönüş") |

### Mock Data Kuralları

1. **Etiketleme:** Kod içinde her mock değer `{/* MOCK DATA */}` veya `// TODO: Replace with real data` yorumu ile işaretlenmelidir.
2. **Görsel amaç:** Mock veriler yalnızca düzen, görsel denge ve komponent tasarımını test etmek içindir.
3. **Gerçekçilik:** Değerler gerçekçi ve sektöre uygun olmalı, abartılı veya yanıltıcı olmamalıdır.
4. **Müşteri logoları:** Gerçek marka logoları kullanılmaz. Generic placeholder isimler (ör: "Marka A", "Marka B") veya nötr gri kutular kullanılır.
5. **Testimonial'lar:** Açıkça kurgusal olmalı, gerçek kişi/şirket adı atfedilmemelidir. "Örnek Müşteri" veya "Placeholder Yorum" gibi net etiketler.
6. **Yasaklı alanlar:** Mock data aşağıdaki yerlerde KESİNLİKLE kullanılmaz:
   - SEO metadata (title, description, og:tags)
   - Yapılandırılmış veri (JSON-LD, schema.org)
   - Yasal sayfalar (KVKK, gizlilik politikası)
   - Gerçek vaka çalışmaları
   - Üretim (production) ortamında nihai kopya olarak

### Lansman Öncesi Zorunlu Değişim

Tüm mock data lansmandan önce aşağıdaki şekilde ele alınmalıdır:
- **Gerçek veri mevcutsa:** Mock değer gerçek veri ile değiştirilir
- **Gerçek veri mevcut değilse:** İlgili bölüm tamamen kaldırılır veya gizlenir
- **Hiçbir mock veri production'da görünür şekilde bırakılmaz**

---

## Uydurulmaması Gereken Bilgiler (Production)

> Aşağıdaki bilgiler production ortamında KESİNLİKLE uydurulmayacak, gerçek veri olmadan canlı sitede gösterilmeyecektir.
> (Development/tasarım sürecinde mock data olarak kullanılabilir — yukarıdaki kurallara tabi.)

| Bilgi Türü | Neden |
|-------------|-------|
| Müşteri logoları (gerçek markalar) | İzinsiz logo kullanımı hukuki sorun yaratır |
| İstatistikler (lokasyon sayısı, erişim, müşteri sayısı) | Yanıltıcı bilgi güvenilirliği zedeler |
| Kuruluş yılı / deneyim süresi | Doğrulanamaz bilgi |
| Testimonial / müşteri yorumları (gerçek kişi atfı) | Uydurma yorum etik dışı |
| Garanti süreleri (ör: "2 saat müdahale") | Karşılanamaz vaatler sorun yaratır |
| Spesifik fiyat bilgileri | Piyasa koşullarına bağlı, hatalı olabilir |
| Sertifika / ödül | Doğrulanmamış iddia |

**Production'da bu bilgiler mevcut değilse:**
- İlgili bölüm tamamen kaldırılır
- Veya "Yakında" gibi bir ifade ile geçici olarak gizlenir
- "Referanslar" sayfası müşteri logosu yoksa "Projelerimiz" veya "Çalışma Alanlarımız" olarak yeniden düşünülür

---

## İlk Faz Kapsamı

### Faz 1 — Lansman (MVP)

**Dahil:**
- Ana Sayfa (hero, hizmetler, değer önerisi, CTA, footer)
- Hizmetler genel sayfası
- Her hizmet formatı için alt sayfa (8 sayfa)
- Hakkımızda sayfası
- İletişim sayfası (form + bilgiler)
- KVKK / Gizlilik Politikası
- Responsive tasarım (mobil + masaüstü)
- Temel SEO (meta tags, schema, sitemap, robots.txt)
- Google Analytics / Tag Manager entegrasyonu
- i18n altyapısı (locale routing, çeviri dosya yapısı)
- Türkçe içerik (tam)
- İngilizce ve Fransızca yapı + placeholder içerik
- Dil değiştirici (language switcher)
- hreflang etiketleri ve locale-specific metadata

**Koşullu (veri varsa):**
- Müşteri logoları bölümü
- İstatistik barı
- Lokasyonlar sayfası (fotoğraf/veri varsa)

**Faz 2 — Lansman Sonrası:**
- Blog sistemi + ilk 5-8 yazı
- İngilizce ve Fransızca çevirilerin finalize edilmesi
- Referanslar sayfası (vaka çalışmaları)
- Lokasyonlar detay (interaktif harita, filtre)
- Kurumsal tasarım hizmeti sayfası (opsiyonel)
- Dark mode (düşük öncelik)

---

## Çok Dilli / i18n Kararları

### Onaylanmış

| Karar | Detay |
|-------|-------|
| Desteklenen diller | Türkçe (tr), İngilizce (en), Fransızca (fr) |
| Varsayılan dil | Türkçe (tr) |
| URL yapısı | / (tr), /en (en), /fr (fr) |
| İçerik önceliği | Türkçe ilk yazılır, EN/FR planlanır |
| Makine çevirisi | Production'da nihai kopya olarak kullanılmaz (incelenmeden) |

### i18n Kuralları

1. Kullanıcıya görünür metin doğrudan komponent içine hardcode edilmez.
2. Tüm görünür kopya çevrilebilir yapıda organize edilir.
3. Çeviri dosyaları locale bazlı ayrılır: `tr`, `en`, `fr`
4. İlk içerik Türkçe yazılır, İngilizce ve Fransızca placeholder olarak planlanır.
5. SEO metadata her dil için ayrı lokalize edilir (title, description, og:tags).
6. Her locale kendi canonical URL'ine ve hreflang alternate etiketlerine sahip olur.
7. Framework locale-based routing destekliyorsa sayfalar manuel çoğaltılmaz.
8. Tasarım uzun çeviri metinlerine karşı esnek olmalı (özellikle Fransızca).
9. Butonlar, kartlar, navigasyon ve bölüm başlıkları uzun çeviri ile kırılmamalı.

### Lokalize Edilmesi Gereken Alanlar

- Navigasyon etiketleri
- CTA metinleri
- Form etiketleri ve hata mesajları
- Metadata (title, description, og:tags)
- Hizmet adları ve açıklamaları
- SSS içeriği
- Footer bağlantıları ve metinleri
- Blog içerikleri
- Hakkımızda sayfası
- 404 ve hata sayfaları

### Dil Değiştirici (Language Switcher)

- Header'da görünür bir dil seçici olmalı
- Mevcut sayfanın diğer dildeki karşılığına yönlendirmeli
- Bayrak yerine dil kodu veya dil adı tercih edilir (TR / EN / FR)

---

## Teknik Kararlar

| Karar | Seçim | Gerekçe |
|-------|-------|---------|
| Framework | Next.js 16 (App Router) | Zaten kurulu, SSR/SSG desteği, SEO |
| Styling | Tailwind CSS 4 | Zaten kurulu, hızlı geliştirme |
| Dil | TypeScript | Zaten kurulu, tip güvenliği |
| i18n | Next.js internationalization (App Router) | Built-in locale routing desteği |
| Font yükleme | next/font (Google Fonts) | Performans, layout shift önleme |
| Görseller | next/image + WebP/AVIF | Performans, responsive |
| Form | Server action veya API route | İletişim formu gönderimi |
| SEO | Next.js metadata API + JSON-LD | Yapılandırılmış veri |
| Deploy | Varsayım: Vercel | Netleştirilmeli |
| Analytics | Google Analytics 4 | Standart |

---

## Sonraki Adım

1. "Netleşmeyen Konular" bölümündeki kritik soruların yanıtlanması
2. Yanıtlara göre hizmet kapsamı ve sayfa yapısının kesinleştirilmesi
3. Tasarım sistemi kurulumu ve geliştirmeye başlanması
