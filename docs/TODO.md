# TODO — ThaB Media Web Sitesi

---

## Mock Data Replacement Before Launch

> Lansman öncesi tüm mock/placeholder verilerin gerçek veri ile değiştirilmesi veya kaldırılması zorunludur.
> Hiçbir mock veri canlı (production) ortamında görünür şekilde bırakılamaz.

### QA Kontrol Listesi

- [ ] **İstatistikler:** Tüm mock istatistikleri (lokasyon sayısı, erişim rakamları, müşteri sayısı) doğrulanmış gerçek verilerle değiştir veya bölümü kaldır
- [ ] **Müşteri logoları:** Tüm placeholder/generic logo kutularını onaylanmış gerçek müşteri logolarıyla değiştir veya bölümü kaldır
- [ ] **Testimonial'lar:** Tüm kurgusal placeholder yorumları gerçek müşteri izinli testimonial'larla değiştir veya bölümü kaldır
- [ ] **Deneyim süresi / kuruluş yılı:** Mock yıl değerini gerçek kuruluş yılı ile değiştir veya ifadeyi kaldır
- [ ] **Lokasyon sayısı:** Mock lokasyon rakamını gerçek envanter sayısıyla değiştir veya istatistik barından çıkar
- [ ] **Erişim rakamları (aylık/yıllık):** Mock erişim değerini doğrulanmış veri ile değiştir veya kaldır
- [ ] **Müdahale/garanti süresi:** Mock garanti süresini gerçek hizmet taahhüdü ile değiştir veya değer önerisinden çıkar
- [ ] **Kod taraması:** `MOCK DATA`, `TODO: Replace with real data`, `placeholder` yorumlarını ara — hiçbiri production'da kalmamalı
- [ ] **SEO kontrolü:** Meta title, description, og:tags, JSON-LD içinde mock veri olmadığını doğrula
- [ ] **Yasal sayfalar:** KVKK, gizlilik politikası, çerez politikası metinlerinin gerçek ve güncel olduğunu doğrula

### Nasıl Taranır

```bash
# Kod içinde mock data yorumlarını bul
grep -r "MOCK DATA" src/
grep -r "TODO: Replace" src/
grep -r "placeholder" src/ --include="*.tsx" --include="*.ts"
```

---

## Multilingual / i18n Checklist

### Çeviri ve İçerik

- [ ] **Türkçe kopya finalizasyonu:** Tüm sayfalardaki Türkçe metnin doğru, tutarlı ve final olduğunu doğrula
- [ ] **İngilizce çeviri incelemesi:** Tüm İngilizce çevirilerin profesyonelce incelendiğini doğrula (makine çevirisi nihai kopya olamaz)
- [ ] **Fransızca çeviri incelemesi:** Tüm Fransızca çevirilerin profesyonelce incelendiğini doğrula (makine çevirisi nihai kopya olamaz)
- [ ] **Lokalize metadata:** Her dil için title, description ve og:tags'ın ayrı yazıldığını doğrula
- [ ] **Lokalize SSS:** SSS içeriğinin üç dilde de mevcut olduğunu doğrula
- [ ] **Lokalize hizmet sayfaları:** Tüm hizmet sayfa içeriklerinin üç dilde de tam olduğunu doğrula
- [ ] **Lokalize blog içerikleri:** Blog yazılarının çeviri stratejisini belirle (tümü mü, seçili mi?)

### Teknik QA

- [ ] **Dil değiştirici QA:** Her sayfada dil değiştiricinin doğru sayfaya yönlendirdiğini test et
- [ ] **Mobil layout QA (uzun metin):** İngilizce ve Fransızca metin ile buton, kart, navigasyon ve başlıkların kırılmadığını doğrula
- [ ] **hreflang etiketleri:** Her sayfada doğru hreflang alternate etiketlerinin olduğunu doğrula
- [ ] **Canonical URL'ler:** Her locale'in kendi canonical URL'ine sahip olduğunu doğrula
- [ ] **404 sayfası:** Tüm dillerde 404 sayfasının lokalize çalıştığını doğrula
- [ ] **Form validasyon mesajları:** Hata mesajlarının aktif dilde gösterildiğini test et
- [ ] **Sitemap:** Tüm dil varyasyonlarının XML sitemap'e dahil olduğunu doğrula
- [ ] **robots.txt:** Hiçbir locale'in yanlışlıkla block edilmediğini kontrol et

---

## Diğer Lansman Öncesi Görevler

- [ ] Tüm iletişim bilgilerinin (telefon, adres, e-posta) doğru olduğunu kontrol et
- [ ] robots.txt'den `noindex, nofollow` kaldırıldığını doğrula
- [ ] Google Analytics / Tag Manager entegrasyonunu test et
- [ ] Tüm formların doğru çalıştığını test et (iletişim, teklif)
- [ ] Mobil cihazlarda tüm sayfaları test et
- [ ] Core Web Vitals ölçümü yap (LCP, FID, CLS)
- [ ] Tüm görsellerin alt text'e sahip olduğunu doğrula
- [ ] 404 sayfasının düzgün çalıştığını kontrol et
- [ ] XML sitemap oluşturulduğunu ve erişilebilir olduğunu doğrula
- [ ] KVKK/gizlilik politikası sayfalarının var ve güncel olduğunu doğrula
- [ ] SSL sertifikasının aktif olduğunu kontrol et
- [ ] Favicon ve og:image'ların doğru ayarlandığını doğrula
