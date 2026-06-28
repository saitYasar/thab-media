# Tasarım Sistemi

> ThaB Media — Açık Hava Reklam Alanı Kiralama / Medya Planlama

---

## 1. Genel Tasarım Yönü

**Hedeflenen his:**
- Premium ama aşırı lüks değil
- Kurumsal ama sıkıcı değil
- Modern, net, güven veren
- Dönüşüm odaklı — her bölüm ziyaretçiyi teklif talebine yönlendirir

**Sektöre uygun görsel dil:**
- Şehir, sokak, ulaşım ve açık alan görselleri
- Reklam panolarının gerçek kullanım fotoğrafları (mevcut olduğunda)
- Cömert beyaz alan — içerik nefes almalı
- Kartlı düzenler, ince gölgeler, yumuşak köşeler
- Playfair Display başlıklar rakiplerden anında farklılaşma sağlar (tamamı sans-serif kullanıyor)

**Kaçınılacak:**
- Aşırı parlak/neon renkler
- Karanlık tema (varsayılan olarak değil)
- Aşırı animasyon veya hareket
- Sıkışık, boşluksuz düzenler
- Lüks otel veya moda markası görünümü

---

## 2. Renk Sistemi

### Temel Renkler (Logo dosyasından doğrulanmış)

| Token | Değer | Kullanım |
|-------|-------|----------|
| `primary` | #112866 | Başlıklar, marka öğeleri, header, footer arka planı |
| `accent` | #FF0A0A | CTA butonları, vurgular, hover efektleri, dikkat çekici öğeler |

### Arka Plan Renkleri

| Token | Değer | Kullanım |
|-------|-------|----------|
| `bg-default` | #FFFFFF | Ana sayfa arka planı |
| `bg-subtle` | #F8F9FC | Alternatif bölüm arka planları (her diğer section) |
| `bg-muted` | #F1F3F8 | Kart arka planları, input alanları |
| `bg-dark` | #112866 | Footer, koyu CTA bölümleri, header |

### Metin Renkleri

| Token | Değer | Kullanım |
|-------|-------|----------|
| `text-primary` | #1A1A2E | Gövde metni, paragraflar |
| `text-heading` | #112866 | Başlıklar (H1-H3) |
| `text-muted` | #64748B | Alt metin, açıklama, tarihler |
| `text-inverse` | #FFFFFF | Koyu arka plan üzerindeki metin |

### Kenarlık ve Ayırıcı

| Token | Değer | Kullanım |
|-------|-------|----------|
| `border-default` | #E2E8F0 | Kart kenarlıkları, bölücüler |
| `border-focus` | #112866 | Focus state kenarlıkları |

### CTA / Aksiyon Renkleri

| Token | Değer | Kullanım |
|-------|-------|----------|
| `cta-bg` | #FF0A0A | Birincil CTA buton arka planı |
| `cta-hover` | #E00909 | CTA hover state (kontrol edilecek — %10 koyulaştırma) |
| `cta-text` | #FFFFFF | CTA buton metni |
| `cta-secondary-border` | #112866 | İkincil buton kenarlığı |

### Kurallar

- Rastgele renk kullanımı yasaktır. Yalnızca yukarıdaki token'lar kullanılır.
- Yeni bir renk gerekiyorsa önce bu belgeye eklenmeli.
- Kontrast oranı: Metin/arka plan minimum WCAG AA (4.5:1 normal metin, 3:1 büyük metin).
- Accent renk (#FF0A0A) büyük alanlarda (tam sayfa arka plan gibi) kullanılmaz — yalnızca vurgu ve CTA öğeleri için.

---

## 3. Tipografi Sistemi

### Font Ailesi

| Rol | Font | Yükleme |
|-----|------|---------|
| Başlıklar | Playfair Display | next/font (Google Fonts) |
| Gövde | Inter | next/font (Google Fonts) |

### Playfair Display Kullanım Kuralları

- **Kullanılacak:** H1, H2, H3, hero metni, bölüm başlıkları, pull quote'lar
- **Kullanılmayacak:** Navigasyon, buton metni, form etiketleri, küçük metin, footer linkleri, tablo içeriği, badge/etiket metni
- **Minimum boyut:** 18px (bunun altında okunabilirlik düşer)
- **Ağırlıklar:** Regular (400), Bold (700)
- **Stil:** Asla italic kullanılmaz (okunabilirlik sorunu yaratır)

### Inter Kullanım Kuralları

- **Kullanılacak:** Gövde metni, navigasyon, butonlar, form etiketleri, açıklamalar, footer, tablo, listeler
- **Ağırlıklar:** Regular (400), Medium (500), Semi-Bold (600)
- **Minimum boyut:** 14px masaüstü, 16px mobil

### Masaüstü Font Scale

| Seviye | Boyut | Satır Yüksekliği | Ağırlık | Font |
|--------|-------|-------------------|---------|------|
| H1 | 48-56px | 1.2 | Bold (700) | Playfair Display |
| H2 | 36-40px | 1.25 | Bold (700) | Playfair Display |
| H3 | 28-32px | 1.3 | Regular (400) | Playfair Display |
| H4 | 22-24px | 1.35 | Semi-Bold (600) | Inter |
| Body Large | 18px | 1.6 | Regular (400) | Inter |
| Body | 16px | 1.6 | Regular (400) | Inter |
| Body Small | 14px | 1.5 | Regular (400) | Inter |
| Caption | 12px | 1.4 | Medium (500) | Inter |

### Mobil Font Scale

| Seviye | Boyut | Satır Yüksekliği |
|--------|-------|-------------------|
| H1 | 32-36px | 1.2 |
| H2 | 26-28px | 1.25 |
| H3 | 22-24px | 1.3 |
| H4 | 18-20px | 1.35 |
| Body | 16px | 1.6 |
| Body Small | 14px | 1.5 |

### Başlık Hiyerarşisi Kuralları

- Her sayfada yalnızca bir H1
- H1 → H2 → H3 sırası atlanmaz
- Section başlıkları H2
- Alt bölüm başlıkları H3
- H4 yalnızca kart başlıkları veya küçük alt bölümler için

### Türkçe / İngilizce / Fransızca Metin Uzunluğu

- Fransızca metin Türkçe'den ortalama %20-30 daha uzundur
- İngilizce metin Türkçe ile benzer uzunluktadır
- Başlıklar: `max-width` yerine doğal akış kullanılmalı
- Tek satır başlık zorunlu tutulmamalı — 2 satıra sarkması kabul edilebilir
- Buton metinleri: padding ile genişleyen yapı, sabit genişlik yasak

---

## 4. Layout ve Spacing

### Container Genişlikleri

| Tip | Değer | Kullanım |
|-----|-------|----------|
| `max-w-7xl` | 1280px | Ana içerik container'ı |
| `max-w-6xl` | 1152px | Metin ağırlıklı bölümler |
| `max-w-4xl` | 896px | Blog yazısı, dar içerik |
| `max-w-3xl` | 768px | Form, tek sütun içerik |

### Section Padding

| Ortam | Dikey Padding | Yatay Padding |
|-------|---------------|---------------|
| Masaüstü | 80-120px (py-20 ~ py-30) | 24-32px (px-6 ~ px-8) |
| Tablet | 60-80px (py-16 ~ py-20) | 16-24px (px-4 ~ px-6) |
| Mobil | 48-64px (py-12 ~ py-16) | 16px (px-4) |

### 8px Grid Sistemi

Tüm spacing değerleri 8'in katları olmalıdır:
- 4px (istisna: ince ayar)
- 8px, 16px, 24px, 32px, 40px, 48px, 56px, 64px, 80px, 96px, 120px

Tailwind karşılığı: `space-1` (4px), `space-2` (8px), `space-3` (12px), `space-4` (16px), vb.

### Grid Kuralları

| Kullanım | Masaüstü | Tablet | Mobil |
|----------|----------|--------|-------|
| Hizmet kartları | 3-4 sütun | 2 sütun | 1 sütun |
| Değer önerisi | 3 sütun | 3 sütun | 1 sütun |
| İstatistik barı | 4 sütun | 2x2 | 2x2 |
| Müşteri logoları | 5-6 sütun | 3-4 sütun | 2-3 sütun |
| Blog kartları | 3 sütun | 2 sütun | 1 sütun |

### Responsive Davranış

- **Mobil öncelikli:** Tüm stiller önce mobil için yazılır, sonra büyütülür
- **Kırılma noktaları:** sm(640), md(768), lg(1024), xl(1280)
- **Taşma yasağı:** Hiçbir bölüm yatay scroll oluşturmamalı
- **Uzun çeviri metni:** Grid öğeleri `min-width: 0` ile taşma önlenir

### Uzun Çeviri Metni Davranışı

- Kartlar: `min-height` yerine `auto` — içerik uzarsa kart da uzar
- Grid: Tüm öğeler eşit yüksekliğe zorlanmaz, `align-items: start` tercih edilir
- Navigasyon: Uzun etiketlerde metin kesilmez, menü genişler veya satır atlar (mobilde)
- Butonlar: `width: auto`, `padding` bazlı genişleme

---

## 5. Button Sistemi

### Birincil CTA Butonu

```
Arka plan: #FF0A0A (accent)
Metin: #FFFFFF
Border-radius: 8px
Padding: 12px 28px (masaüstü), 14px 24px (mobil)
Font: Inter Semi-Bold 600, 16px
Hover: %10 koyulaşma + subtle scale(1.02)
Focus: 2px outline offset, primary renk
Active: scale(0.98)
```

### İkincil Buton

```
Arka plan: transparent
Metin: #112866 (primary)
Border: 2px solid #112866
Border-radius: 8px
Padding: 12px 28px
Font: Inter Semi-Bold 600, 16px
Hover: bg-primary, text-white
Focus: 2px outline offset
```

### Ghost / Outline Buton

```
Arka plan: transparent
Metin: #112866 veya #FFFFFF (bağlama göre)
Border: 1px solid current-color
Border-radius: 8px
Padding: 10px 20px
Font: Inter Medium 500, 14-16px
Hover: hafif arka plan dolgusu
```

### Mobil Sticky CTA

- Sayfanın altına sabitlenmiş tam genişlik CTA barı (isteğe bağlı)
- Veya sağ alt WhatsApp floating butonu (her zaman)
- `position: fixed; bottom: 0; z-index: 50`
- Yalnızca mobilde görünür (md altı)

### Hover / Focus States

- Tüm etkileşimli öğeler focus-visible outline'a sahip olmalı
- Hover geçişi: `transition-all duration-200`
- Disabled state: opacity 0.5, cursor-not-allowed

### Buton Metin Kırılma Kuralları (i18n)

- Butonlar sabit genişlikte OLMAMALI (`width: auto`)
- Padding bazlı genişleme: metin uzarsa buton da genişler
- Tek satır buton metni tercih edilir ama zorunlu değil
- Mobilde tam genişlik buton (`w-full`) gerekiyorsa metin ortalanır
- Fransızca CTA metni test edilmeli: "Demander un devis gratuit" > "Teklif Alın"

---

## 6. Card Sistemi

### Genel Kart Kuralları

```
Arka plan: #FFFFFF
Border: 1px solid #E2E8F0
Border-radius: 12px
Padding: 24px (masaüstü), 20px (mobil)
Gölge: shadow-sm (varsayılan), shadow-md (hover)
Geçiş: transition-shadow duration-200
```

### Hizmet Kartları

- Üst: Görsel veya ikon (sabit oran, aspect-ratio 16/9 veya 4/3)
- Orta: Başlık (H3, Playfair Display) + kısa açıklama (Inter)
- Alt: "Detay" veya "İncele" linki
- Grid: 3-4 sütun masaüstü, 1 sütun mobil
- Yükseklik: Esnek — içerik uzarsa kart uzar

### Lokasyon Kartları

- Üst: Lokasyon görseli (aspect-ratio 16/9)
- Alt: Şehir/bölge adı + kısa açıklama
- Hover: Hafif gölge artışı + görsel zoom (scale 1.03)

### İstatistik Kartları

- Sayı: Playfair Display, Bold, büyük (36-48px)
- Etiket: Inter, Regular, muted renk
- Düzen: 4 sütun masaüstü, 2x2 mobil
- Arka plan: Transparent veya bg-subtle
- Kenarlık: Yalnızca sağ kenarlık (son hariç) veya kenarlıksız

### Testimonial / Mock Testimonial Kartları

- Üst: Tırnak ikonu veya görsel (opsiyonel)
- Orta: Yorum metni (Inter, italic veya regular, body-large)
- Alt: İsim + Unvan (mock ise "Örnek Müşteri — Placeholder" gibi etiket)
- Arka plan: bg-subtle veya beyaz + kenarlık
- Max-width: 640px (tek kart ise ortalanmış)

### Görsel Kart Kuralları

- Tüm görseller `next/image` ile, responsive
- aspect-ratio zorunlu (görseller kart boyutunu belirlememeli)
- Yükleme: lazy (ekran dışı), eager (ekran üstü)
- Fallback: Gri placeholder arka plan (görsel yoksa)

### Esnek Yükseklik Kuralları (i18n)

- Kartlar `height: auto` olmalı — Fransızca metin uzarsa kart uzar
- Grid içinde kartlar `align-items: stretch` OLMAMALI — `align-items: start` kullanılmalı
- Veya `stretch` ile birlikte kartlar `min-height` olmadan bırakılmalı
- Testimonial kartlarında uzun metin için `line-clamp` kullanılabilir (maks. 4-5 satır)

---

## 7. Header ve Navigation

### Masaüstü Header

```
Position: sticky top-0
Arka plan: #FFFFFF (scroll sonrası: hafif shadow eklenir)
Yükseklik: 72-80px
Z-index: 50
İçerik: Logo (sol) | Ana menü (orta) | Telefon + Dil Seçici + CTA (sağ)
```

### Mobil Header

```
Position: sticky top-0
Arka plan: #FFFFFF
Yükseklik: 60-64px
İçerik: Logo (sol) | CTA butonu (küçük) + Hamburger ikonu (sağ)
```

### Sticky Davranış

- Scroll'da header sabit kalır
- Scroll yönüne göre gizle/göster opsiyonel (aşağı scroll = gizle, yukarı = göster)
- Shadow ekleme: scroll > 10px sonrası `shadow-sm`

### CTA Görünürlüğü

- "Teklif Alın" butonu header'da her zaman görünür
- Masaüstü: Tam metin + buton
- Mobil: Küçük boyut ama görünür (veya hamburger menü içinde)

### Hamburger / Mobil Menü

- Sağ üst köşede hamburger ikonu
- Açıldığında: Tam ekran overlay veya slide-in panel (sağdan)
- İçerik: Tüm menü öğeleri + alt menü (hizmetler) + dil seçici + iletişim bilgisi
- Kapatma: X ikonu veya overlay tıklama

### Dil Değiştirici Konumu

- Masaüstü: Header sağ tarafında, CTA'dan önce, küçük boyut (TR / EN / FR)
- Mobil: Hamburger menü içinde, alt kısımda
- Bayrak kullanılmaz — dil kodu veya dil adı ile
- Mevcut dil vurgulanır (bold veya altı çizili)
- Dil değiştiğinde aynı sayfanın diğer dildeki karşılığına yönlendirme

### Uzun Navigasyon Etiketi Yönetimi

- Nav öğeleri sabit genişlikte değil — padding bazlı
- Fransızca etiketler daha uzun olabilir ("Nos services" vs "Hizmetlerimiz")
- Taşma durumunda: Masaüstünde spacing azaltılır, mobilde zaten hamburger
- Dropdown başlıkları tek satırda kalmak zorunda değil

---

## 8. Section Kuralları

### Hero

- Tam genişlik, min-height: 70-80vh (masaüstü), auto (mobil)
- Başlık: H1, Playfair Display, 48-56px masaüstü / 32-36px mobil
- Alt başlık: Inter, 18-20px, text-muted
- CTA'lar: Birincil (kırmızı, dolgu) + İkincil (outline)
- Arka plan: Subtle gradyan veya yarı saydam görsel overlay
- Görsel: Sağ tarafta veya arka planda (mobilde altına kayar)
- i18n: Başlık 2 satıra sarkabilir, layout flex/grid ile esnek

### İstatistik Barı

- 4 adet rakam/etiket çifti
- Yalnızca doğrulanmış verilerle VEYA mock data etiketli
- Düzen: 4 sütun masaüstü, 2x2 mobil
- Arka plan: bg-subtle veya primary (koyu varyant)
- Rakamlar: Playfair Display, Bold, büyük
- Etiketler: Inter, Regular, küçük

### Hizmetler (Services)

- Section başlığı: H2
- 3-4 hizmet kartı grid
- Her kart: İkon/görsel + başlık + kısa açıklama + link
- CTA altında: "Tüm Hizmetlerimizi Görün" linki
- Mobil: Tek sütun yığılmış

### Lokasyonlar (Locations)

- Harita veya coğrafi vitrin
- Şehir/bölge kartları
- "Tüm Lokasyonlar" CTA'sı
- Varsa gerçek fotoğraf, yoksa bölüm gizlenir

### Neden Biz? (Why Choose Us)

- 3 sütun değer önerisi
- Her biri: İkon + başlık + kısa açıklama
- İkon: Basit line-icon veya minimal SVG
- Mobil: Tek sütun yığılmış

### Nasıl Çalışır? (How It Works)

- 3 adımlı süreç: Numara + Başlık + Açıklama
- Görsel bağlantı: Adımlar arası çizgi veya ok (masaüstü)
- Mobil: Dikey liste

### Referanslar / Mock Referanslar

- Logo grid/carousel
- Masaüstü: 5-6 sütun
- Mobil: 2-3 sütun, kaydırılabilir
- Mock: Gri placeholder kutular, "Marka A", "Marka B"
- Gerçek: Onaylanmış müşteri logoları

### SSS (FAQ)

- Açılır-kapanır (accordion) yapı
- Başlık: H3 veya güçlü metin
- İçerik: Düz metin, linkler mümkün
- i18n: Tüm soru-cevaplar çevrilebilir yapıda

### Son CTA Bölümü

- Tam genişlik, koyu arka plan (primary)
- Başlık: Playfair Display, beyaz, büyük
- Alt metin: Inter, text-inverse, muted
- Buton: Accent renk CTA (beyaz arka plan üzerinde kırmızı veya tersi)
- Mobil: Padding azaltılmış, buton tam genişlik

### Footer

- Arka plan: primary (#112866) veya çok koyu lacivert
- Metin: text-inverse (#FFFFFF) ve muted beyaz (opacity 0.7)
- Yapı: 4 sütun masaüstü → yığılmış mobil
- İçerik: Logo, navigasyon, iletişim, yasal bağlantılar, sosyal medya
- Alt: Telif hakkı (dinamik yıl) + geliştirici kredisi
- Dil değiştirici: Footer'da da tekrar (mobil erişilebilirlik)

---

## 9. Mobil Öncelikli Kurallar

### Dokunma Hedefleri

- Minimum boyut: 44x44px (Apple HIG / WCAG)
- Butonlar, linkler, menü öğeleri, form inputları
- Elemanlar arası minimum 8px boşluk

### Okunabilir Tipografi

- Gövde metin minimum: 16px (iOS zoom sorununu önler)
- Satır yüksekliği: 1.6 (gövde), 1.2-1.3 (başlıklar)
- Paragraf genişliği: max-width 65-75 karakter (okunabilirlik)

### Form Input Boyutları

- Yükseklik: minimum 48px
- Font: 16px (iOS auto-zoom önleme)
- Padding: 12px 16px
- Label: Input üstünde, 14px, Inter Medium
- Hata mesajı: Input altında, 14px, kırmızı

### Sabit / Floating WhatsApp CTA

- Konum: Sağ alt köşe (fixed)
- Boyut: 56px daire
- İkon: WhatsApp logosu, beyaz, yeşil daire arka plan (#25D366)
- Z-index: 40 (header altında)
- Yalnızca mobilde (md altı) gösterilir
- Scroll sırasında her zaman görünür

### Yatay Taşma Önleme

- `overflow-x: hidden` body'de
- Görseller: `max-width: 100%`
- Tablolar: `overflow-x: auto` wrapper
- Grid öğeleri: `min-width: 0`
- Metin: `word-break: break-word` (uzun kelimeler için)

### Küçük Ekranlarda İçerik Önceliği

1. Hero + CTA (en önemli)
2. Hizmetler kısa özeti
3. Neden biz / değer önerisi
4. İletişim bilgisi + WhatsApp
5. Footer navigasyon

### Mobil QA: Türkçe, İngilizce, Fransızca

- Her sayfa üç dilde de mobilde test edilmeli
- Özellikle kontrol edilecek:
  - Hero başlık sarması (FR çok uzun olabilir)
  - Nav menü öğeleri (hamburger içinde)
  - CTA buton genişlikleri
  - Kart başlık uzunlukları
  - Form label'ları
  - Footer link sarması

---

## 10. SEO ve Erişilebilirlik Görsel Kuralları

### Semantik Bölümler

- `<header>`: Site header
- `<nav>`: Ana navigasyon, footer navigasyon
- `<main>`: Sayfa ana içeriği
- `<section>`: Her mantıksal bölüm
- `<article>`: Blog yazıları
- `<footer>`: Site footer
- `<aside>`: Yan içerik (varsa)

### Görsel Alt Text

- Her `<img>` ve `next/image` için zorunlu
- Format: "[Açıklama] | ThaB Media"
- Dekoratif görseller: `alt=""` (boş string, kaldırılmaz)
- İkon: `aria-label` veya `aria-hidden="true"`

### Başlık Hiyerarşisi

- Sayfa başına tek H1
- H2 → H3 sırası atlanmaz
- Section başlıkları H2
- Kart başlıkları H3 veya H4

### Okunabilir Kontrast

- Normal metin: minimum 4.5:1 kontrast oranı
- Büyük metin (18px+ veya 14px bold+): minimum 3:1
- CTA butonları: Beyaz metin (#FFF) üzerinde #FF0A0A = 4.0:1 (sınırda — kontrol edilecek, gerekirse buton metnini bold yaparak 3:1 large text kuralı)
- Koyu arka plan üzerinde beyaz metin: #112866 üzerinde #FFF = yeterli

### Focus States

- Tüm etkileşimli öğeler `focus-visible` outline'a sahip olmalı
- Outline: 2px solid, offset 2px, primary renk
- Asla `outline: none` kullanılmaz (keyboard navigasyon erişilebilirliği)

### Görsel İçinde Metin Yasağı

- SEO metni görsel içine gömülmez
- Metin her zaman HTML olarak render edilir
- İstisna: Logo (SVG olarak, alt text ile)
- Dekoratif metin overlay'leri: Arka plandaki metin CSS ile, erişilebilir değilse aria-hidden

### Lokalize Metadata Görsel Etkileri

- og:image: Dil bazlı farklı olabilir (marka adı + dil bazlı slogan)
- Favicon: Tüm dillerde aynı
- Structured data: Her locale için ayrı JSON-LD

---

## 11. Animasyon Kuralları

### Genel İlke

- İnce ve amaca yönelik — dikkat dağıtıcı değil
- Kullanıcıya geri bildirim sağlamak veya görsel akışı yönlendirmek için
- Asla geciktirme veya engelleyici animasyon

### Section Reveal (Scroll Animasyonu)

- Efekt: Fade-in + hafif yukarı kayma (translateY 20px → 0)
- Süre: 400-600ms
- Easing: ease-out
- Tetikleme: Viewport'a %20 girdiğinde
- Bir kez: Tekrar etmez (bir kez tetiklenir)

### Buton / Kart Hover

- Buton: `transform: scale(1.02)`, `transition: 200ms`
- Kart: `box-shadow` artışı, `transition: 200ms`
- Link: Altı çizgi animasyonu veya renk geçişi

### Reduced Motion

- `@media (prefers-reduced-motion: reduce)` desteği zorunlu
- Reduced motion'da: Tüm animasyonlar devre dışı veya anında tamamlanır
- Scroll reveal: Animasyon olmadan anında görünür
- Hover efektleri: Yalnızca renk değişimi (hareket yok)

### Yasak Animasyonlar

- Otomatik kaydıran slider/carousel (kullanıcı kontrolü olmadan)
- Paralax scroll efektleri
- Büyük ölçekli zoom/scale animasyonları
- Yanıp sönen (flash/blink) öğeler
- Sayfa geçiş animasyonları (SPA transition)

---

## 12. Mock Data Görsel Kullanımı

### İstatistikler

- Düzen ve tipografi testi için mock rakamlar kullanılabilir
- Örnek: "150+ Lokasyon", "10+ Yıl", "5M+ Görüntülenme"
- Görselde `[MOCK]` etiketi veya soluk watermark ile işaretlenmeli (geliştirme sırasında)
- Kod içinde: `{/* MOCK DATA */}` yorumu zorunlu

### Müşteri Logoları

- Gerçek marka logoları kullanılmaz (onay olmadan)
- Generic placeholder: Gri kutular (#E2E8F0 arka plan) + "Marka A", "Marka B" metni
- Veya: Basit geometrik şekiller (daire/kare) + nötr isimlendirme
- Boyut: Gerçek bir logo carousel/grid boyutunu temsil etmeli

### Testimonial'lar

- Açıkça kurgusal:
  - İsim: "Örnek Müşteri" veya "A. Yılmaz (Placeholder)"
  - Şirket: "Örnek Firma"
  - Yorum: Gerçekçi ama uydurma olduğu belli olan metin
- Asla gerçek kişi veya firma adı atfedilmez

### Fotoğraflar

- Lokasyon/uygulama fotoğrafı yoksa: Düz renk placeholder veya stock-free kentsel görseller
- Her placeholder görsel alt text'inde: "Placeholder görsel — gerçek fotoğraf ile değiştirilecek"

### Lansman Öncesi

- Tüm mock data gerçek veri ile değiştirilir veya bölüm kaldırılır
- `docs/TODO.md` kontrol listesi takip edilir
- Production'da hiçbir mock öğe görünür şekilde bırakılmaz

---

## 13. i18n Tasarım Kuralları

### Temel İlke

Hiçbir kullanıcıya görünür metin doğrudan komponent JSX'ine yazılmaz. Tüm metin çeviri dosyasından/sözlükten gelmelidir.

### Düzen Esnekliği

| Öğe | Kural |
|-----|-------|
| Butonlar | `width: auto`, padding bazlı genişleme |
| Kartlar | `height: auto`, içerikle uzar |
| Nav öğeleri | Flex wrap veya esnek spacing |
| Hero başlık | Satır sayısı sınırlanmaz, doğal akış |
| Tablo hücreleri | `white-space: normal`, wrap izni |
| Badge/etiketler | `max-width` yok, doğal genişlik |

### Test Referansları

| Metin | TR | EN | FR |
|-------|----|----|-----|
| CTA | Teklif Alın | Get a Quote | Demander un devis |
| Nav | Hizmetlerimiz | Our Services | Nos services |
| Hero alt | Markanızı milyonlara ulaştırın | Reach millions with your brand | Atteignez des millions avec votre marque |
| Form | Mesajınızı yazın | Write your message | Écrivez votre message |

> FR metinler genellikle en uzundur — tasarım FR ile test edildiğinde TR ve EN de sorunsuz çalışır.

### Dil Değiştirici Tasarımı

- Boyut: Küçük, dikkat çekmeyen (header'ın ana odağı CTA olmalı)
- Format: "TR | EN | FR" — aktif dil vurgulanmış (bold veya alt çizgi)
- Mobilde: Hamburger menü içinde, açık ve erişilebilir
- Tıklandığında: Aynı sayfanın ilgili locale versiyonuna yönlendirir

### Lokalize Edilmesi Gereken Her Şey

- Sayfa başlıkları ve metinleri
- Navigasyon etiketleri
- CTA buton metinleri
- Form etiketleri + placeholder + hata mesajları
- Metadata (title, description, og:tags)
- Hizmet adları ve açıklamaları
- SSS soru-cevapları
- Footer metinleri ve linkleri
- 404 ve hata sayfası metinleri
- Yapılandırılmış veri (JSON-LD) metin alanları
- Alt text'ler (erişilebilirlik)

---

## 14. Implementation Notes for Claude

### Genel Kurallar

- Yeniden kullanılabilir UI komponentleri oluştur (Button, Card, Section, Container)
- Aşırı mühendislik yapma — basit tut
- İhtiyaç olmadan paket yükleme
- Tailwind class'larını tutarlı kullan — her seferinde farklı stiller değil
- Semantik token/class kullan — rastgele tek kullanımlık stiller yerine

### Tailwind Tutarlılığı

- Renk: Daima token'lardan (`text-primary`, `bg-accent` gibi custom sınıflar veya doğrudan değerler)
- Spacing: 8px grid'e sadık kal
- Border-radius: `rounded-lg` (8px) veya `rounded-xl` (12px) — karışık değerler kullanma
- Shadow: `shadow-sm`, `shadow-md` — tutarlı hiyerarşi
- Transition: `transition-all duration-200` — standart

### Komponent Yapısı

- Her komponent tek sorumluluk
- Props ile konfigürasyon (variant, size, vb.)
- Çeviri metinleri prop olarak veya hook ile alınır — hardcode değil
- Responsive: Tailwind responsive prefix ile (sm:, md:, lg:)

### Kodlamaya Başlama Koşulu

**Bu tasarım sistemi onaylanmadan kodlama başlamaz.**

Onay sonrası sıra:
1. Tailwind tema konfigürasyonu (renkler, fontlar, spacing)
2. Base komponentler (Button, Card, Container, Section)
3. Layout komponentleri (Header, Footer, Navigation)
4. Sayfa bölümleri (Hero, Services, vb.)
5. Sayfalar (Homepage → Hizmetler → İletişim → ...)
