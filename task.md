# Jaune Vaste — Proje Görev Listesi

Bu liste, `jaunevaste_proje_plani.pdf` içindeki 18 bölümlük plana göre
hazırlanmıştır. Tamamlanan maddeler `[x]`, bekleyenler `[ ]` ile işaretlidir.
Faz sırası plandaki (bölüm 16) sırayla aynıdır.

---

## Faz 0 — Eski Site Acil Temizliği

> Bu faz, eski jaunevaste.com sitesinin hosting/WordPress erişimini
> gerektirir. Bu oturumda yalnızca boş GitHub reposu üzerinde çalışıldığı
> için bu maddelerin hiçbiri yapılamadı — hosting/DNS/Search Console
> erişimi sağlandığında ayrıca ele alınmalı.

- [ ] Mevcut sitenin tam yedeği alınacak
- [ ] WordPress admin kullanıcıları kontrol edilecek, şüpheli hesaplar silinecek
- [ ] Tema/plugin dosyaları zararlı kod için taranacak
- [ ] Spam/casino/yabancı dil içerik kaynağı tespit edilip temizlenecek
- [ ] `comment.php` gibi şüpheli URL'ler 410 (Gone) yapılacak
- [ ] Google Search Console'dan kaldırma talebi + yeniden indeksleme
- [ ] DNS ve hosting şifreleri değiştirilecek
- [ ] Yeni site yayına alınana kadar eski site ayrı/izole tutulacak

---

## Faz 1 — Temel Kurulum ✅ Tamamlandı

- [x] Next.js (App Router) + TypeScript projesi kuruldu
- [x] Tailwind CSS yapılandırıldı
- [x] Jaune Vaste design system eklendi (`app/globals.css`): marka renkleri,
      tipografi (Manrope + Playfair Display), radius/gölge tokenları
- [x] Repo klasör düzeni oluşturuldu (`app/`, `components/`, `data/`, `lib/`)
- [x] GitHub'a ilk commit + branch push edildi
- [ ] Ayrı staging/deployment ortamı açılacak (Vercel/Cloudflare Pages) —
      henüz hiçbir yere deploy edilmedi, sadece bu konteynerde `npm run dev`
      ile çalıştırıldı

---

## Faz 2 — Marka ve Ana Sayfa ✅ Tamamlandı

- [x] Hero alanı (başlık, alt metin, "Ürünleri Keşfet" / "Çok Satanları Gör" CTA'ları)
- [x] Kategori kartları (6 kategori, "Parfüm" için "Yakında" rozeti)
- [x] Çok satan ürünler bölümü
- [x] Müşteri yorumları (sosyal kanıt) bölümü
- [x] Marka güven blokları (ÜTS şeffaflığı, güvenli kanallar, hızlı iletişim)
- [x] Bakım rehberi (blog) önizleme kartları
- [x] Mobil uyumluluk (responsive hero, kart grid'leri, sticky WhatsApp butonu)
- [ ] Gerçek ürün/kompozisyon fotoğrafları — şu an SVG placeholder kullanılıyor
- [ ] Ürün/kullanım videoları — henüz eklenmedi

---

## Faz 3 — Ürün Kataloğu ⚙️ Büyük Ölçüde Tamamlandı

- [x] Kategori sayfaları (`/kategori/[slug]`)
- [x] Ürün listeleme sayfası: arama kutusu, kategori filtresi (mobilde
      yatay kaydırılabilir chip listesi), sıralama (çok satan/yeni/A-Z)
- [x] Ürün detay sayfası şablonu: galeri, faydalar, kullanım, kimler için
      uygun, içerik/uyarı kartları, SSS akordeonu, benzer ürünler
- [x] SEO uyumlu ürün URL'leri (`/urunler/[slug]`)
- [x] Product / FAQ / Breadcrumb JSON-LD şemaları
- [x] Ürün veri modelinde e-ticaret alanları hazır (fiyat, stok, SKU,
      barkod, `ecommerceEnabled`) — şu an hepsi pasif/tanıtım modunda
- [ ] Gerçek ürün fotoğrafları ve galeri görselleri (şu an 1 adet SVG
      placeholder / ürün)
- [ ] Ürün kullanım videoları
- [ ] Gerçek marketplace linkleri — şu an tüm ürünler aynı genel Trendyol
      mağaza linkine gidiyor, ürün bazlı linkler eklenmeli
- [ ] Gerçek barkod / ÜTS numaraları — `utsRegistered: true` işaretli ama
      gerçek barkod alanı boş
- [ ] Gerçek rating/yorum sayısı — `rating`/`reviewCount` alanları
      doğrulanabilir veri olmadığı için boş bırakıldı (bilerek; sahte veri
      girilmedi)
- [ ] Mobilde alttan açılan filtre paneli (şu an üstte chip listesi var,
      plandaki "bottom sheet" filtre paneli değil)

---

## Faz 4 — Admin Panel ❌ Yapılmadı

- [ ] Giriş / kimlik doğrulama (e-posta+şifre, 2FA/OTP)
- [ ] Rol bazlı yetkilendirme
- [ ] Dashboard (ürün sayısı, taslaklar, son yorumlar, SEO uyarıları)
- [ ] Ürün yönetimi ekranı
- [ ] Kategori yönetimi ekranı
- [ ] Müşteri yorumları yönetimi ekranı
- [ ] Görsel/video yönetimi (WebP/AVIF dönüşümü dahil)
- [ ] Sayfa yönetimi (Hakkımızda, KVKK vb. içeriklerin admin'den düzenlenmesi)
- [ ] SEO yönetimi (sitemap/robots kontrolü, eksik meta/alt text uyarıları)
- [ ] CMS/veritabanı entegrasyonu (Payload CMS veya Strapi + PostgreSQL) —
      şu an tüm içerik `data/*.ts` dosyalarında statik seed veri olarak
      duruyor; `lib/cms.ts` bu geçişe hazır şekilde soyutlandı ama henüz
      gerçek bir CMS'e bağlı değil

---

## Faz 5 — SEO ve Güvenlik ⚙️ Kısmen Tamamlandı

### SEO
- [x] `sitemap.xml` (statik sayfalar, kategoriler, ürünler, blog yazıları)
- [x] `robots.txt` (eski sitedeki `comment.php` / `wp-*` gibi spam
      kalıplarını önleyici disallow kuralları dahil)
- [x] Canonical URL'ler (`lib/seo.ts` üzerinden her sayfada)
- [x] Organization, WebSite, Product, FAQ, Breadcrumb, Article JSON-LD
- [x] Türkçe, anlaşılır URL yapısı
- [ ] Eski siteden 301 yönlendirme haritası — eski site URL envanteri
      çıkarılmadığı için henüz yapılamadı
- [ ] Review/AggregateRating schema — gerçek yorum verisi girilene kadar
      bilerek pasif bırakıldı
- [ ] Google Search Console'a sitemap gönderimi (Faz 6 ile birlikte)
- [ ] Görsellere gerçek alt text — şu an placeholder SVG'lerin alt
      text'leri var ama gerçek ürün fotoğrafı geldiğinde güncellenmeli

### İçerik SEO
- [x] 4 bakım rehberi (blog) yazısı yayında (lip balm, tırnak bakım
      rutini, roll-on içerik seçimi, ÜTS nedir)
- [ ] Kalan 8 blog yazısı (plandaki 12 yazının 4'ü tamam) — dudak
      çatlaması, SPF, tırnak eti bakımı, güvenilir marka nasıl anlaşılır,
      günlük bakım çantası, parfüm notaları, parfüm kalıcılığı, parfüm seçimi

### Güvenlik
- [x] Güvenlik başlıkları: HSTS, X-Frame-Options, X-Content-Type-Options,
      Referrer-Policy, Permissions-Policy, Content-Security-Policy
      (`next.config.ts` + `lib/security.ts`)
- [x] Admin paneli için `proxy.ts` (middleware) iskeleti hazır
- [ ] Cloudflare WAF / DDoS koruması — hosting sağlayıcısı seçimi ve
      Cloudflare kurulumu henüz yapılmadı
- [ ] Rate limiting
- [ ] 2FA / rol bazlı erişim (admin panel olmadığı için henüz uygulanamıyor)
- [ ] Dosya yükleme / MIME type doğrulama (admin panel görsel yükleme
      özelliğiyle birlikte gelecek)
- [ ] Admin işlem logları
- [ ] Günlük otomatik yedek + haftalık dış yedek
- [ ] Sentry / Logtail hata takibi entegrasyonu
- [ ] Bağımlılık güncelleme (Dependabot vb.) otomasyonu

---

## Faz 6 — Yayına Alma ❌ Yapılmadı

- [ ] Eski URL → yeni URL yönlendirme planının uygulanması
- [ ] Eski sitedeki spam URL'lerin temizlenmesi (Faz 0 ile bağlantılı)
- [ ] Search Console'a sitemap gönderimi
- [ ] Lighthouse testi (Performance/SEO/Accessibility/Best Practices 90+)
- [ ] Kapsamlı mobil test (gerçek cihazlarda)
- [ ] Form testleri (iletişim formu şu an `mailto:` ile çalışıyor;
      gerçek bir backend/API endpoint'e bağlanmadı)
- [ ] Admin panel testleri (admin panel henüz yok)
- [ ] Canlı yayın (production deployment)

---

## İçerik / Veri Eksikleri (Genel)

- [ ] `lib/site.ts` içindeki telefon, WhatsApp numarası ve adres bilgileri
      hâlâ placeholder (`+90 000 000 00 00` vb.) — gerçek bilgilerle
      değiştirilmeli
- [ ] `data/reviews.ts` içindeki yorumlar örnek/yer tutucu içerik —
      gerçek, KVKK uyumlu (maskelenmiş) pazaryeri yorumlarıyla değiştirilmeli
- [ ] `data/sales-points.ts` içinde Hepsiburada linki eksik (TODO olarak
      işaretli)
- [ ] Gerçek ürün fotoğrafları/videoları (bkz. Faz 2 ve Faz 3)
- [ ] Mesafeli Satış Sözleşmesi ve Ön Bilgilendirme Formu sayfaları —
      plana göre yalnızca e-ticaret fazında aktif edilecek, bu yüzden
      şimdilik bilerek oluşturulmadı

---

## Özet

| Faz | Durum |
|---|---|
| Faz 0 — Eski Site Temizliği | ❌ Yapılmadı (hosting erişimi gerekiyor) |
| Faz 1 — Temel Kurulum | ✅ Tamamlandı (deployment hariç) |
| Faz 2 — Marka ve Ana Sayfa | ✅ Tamamlandı (gerçek görsel/video hariç) |
| Faz 3 — Ürün Kataloğu | ⚙️ Büyük ölçüde tamamlandı (gerçek içerik hariç) |
| Faz 4 — Admin Panel | ❌ Yapılmadı |
| Faz 5 — SEO ve Güvenlik | ⚙️ Temel SEO + header güvenliği tamam, WAF/backup/hata takibi eksik |
| Faz 6 — Yayına Alma | ❌ Yapılmadı |
