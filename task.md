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
- [x] **Design system v2 — premium rebrand**: ana marka rengi Royal Plum
      (`primary` #2E1A47) olacak şekilde tüm renk paleti yenilendi (ivory
      zemin, soft mauve section arka planları, Champagne Gold yalnızca
      rozet/yıldızlarda, Berry Wine parfüm koleksiyonuna özel, Sage doğal
      seri vurgusu). ~40 dosyada CTA butonları, nav, badge'ler, form
      focus durumları, admin panel durum renkleri (başarı/hata) gözden
      geçirildi; placeholder ürün/hero SVG'leri de yeni palete göre
      yeniden üretildi. Detaylar `app/globals.css` içindeki token
      yorumlarında.
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

## Faz 4 — Admin Panel ⚙️ İlerliyor (Auth + veritabanı + ürün/yorum CRUD tamam)

- [x] Giriş / kimlik doğrulama: e-posta + şifre (scrypt hash, env tabanlı)
      + zorunlu 2FA/TOTP (RFC 6238, `lib/admin/totp.ts`, harici bağımlılık yok)
- [x] Oturum yönetimi: HMAC imzalı, httpOnly/secure/sameSite cookie,
      8 saatlik oturum süresi sınırı (`lib/admin/auth.ts`)
- [x] Brute-force koruması: bellek-içi rate limiting (şifre + TOTP adımları
      ayrı ayrı sınırlı — `lib/admin/rateLimit.ts`, MVP/tek-process kapsamlı)
- [x] Giriş logları: başarılı/başarısız denemeler yerel dosyaya yazılıyor
      (`lib/admin/log.ts` — prodüksiyonda Sentry/Logtail ile değiştirilmeli)
- [x] Route koruması iki katmanlı: `proxy.ts` (Edge, hızlı ön kontrol) +
      `app/admin/(protected)/layout.tsx` (Node, asıl imza/süre doğrulaması) —
      uçtan uca test edildi: yetkisiz erişim, hatalı şifre, hatalı TOTP,
      kurcalanmış (tampered) cookie, çıkış sonrası erişim — hepsi reddediliyor
- [x] **Veritabanı entegrasyonu**: Prisma + SQLite (`prisma/schema.prisma`,
      `lib/db.ts`). Payload CMS/Strapi yerine bilinçli olarak bu tercih
      edildi — Payload/Strapi kendi admin arayüzü ve auth sistemini
      dayatıyor, bu da az önce kurulan özel 2FA'lı admin paneliyle
      çakışırdı; ayrıca Next.js 16 çok yeni olduğu için uyumluluk riski
      taşıyordu. Prisma + SQLite mevcut admin panelini koruyarak gerçek
      CRUD'u mümkün kıldı. **Prodüksiyonda PostgreSQL'e geçiş**: sadece
      `prisma/schema.prisma`'da `provider = "postgresql"`, `@prisma/adapter-pg`
      kurulumu ve `lib/db.ts` + `prisma.config.ts`'teki adapter değişikliği
      gerekiyor — model/sorgu kodu değişmiyor.
- [x] `data/products.ts`, `data/reviews.ts`, `data/blog.ts` içeriği
      `prisma/seed.ts` ile veritabanına aktarıldı (idempotent, upsert)
- [x] Dashboard: toplam/yayında/taslak ürün, çok satan, kategori, yorum,
      blog yazısı sayıları + son yorumlar + SEO uyarı özeti
- [x] **Ürün yönetimi**: tam CRUD — oluştur, düzenle, sil, yayında/taslak
      toggle (`app/admin/(protected)/urunler/`, zod ile form doğrulama,
      silme işleminde tarayıcı onay diyaloğu). Playwright ile uçtan uca
      test edildi: oluşturma → anında public sitede görünür, düzenleme →
      değişiklik public sitede yansıyor, taslağa alma → public sayfa 404
      veriyor, silme → onay istemeden gerçekleşmiyor.
- [x] **Müşteri yorumları yönetimi**: yayınla/gizle toggle + silme (onaylı),
      gizlenen yorum public sitede ve ürün detayında anında kayboluyor
      (test edildi)
- [x] Kategori yönetimi ekranı (salt okunur tablo: ürün sayısı, aktif/yakında
      durumu) — kategoriler bilinçli olarak DB'ye taşınmadı, bkz. aşağıdaki not
- [x] SEO yönetimi ekranı: her ürün için otomatik denetim (başlık/açıklama
      uzunluğu, eksik alt text, eksik barkod, eksik SSS, eksik doğrulanmış
      puan — `lib/admin/seoAudit.ts`)
- [x] Admin içerik değişiklikleri denetim izi (`AdminAuditLog` tablosu,
      `lib/admin/auditLog.ts`) — kayıt altına alınıyor ama henüz admin
      arayüzünde görüntülenmiyor (küçük bir sonraki adım)
- [x] `noindex` — tüm `/admin/*` sayfaları arama motorlarından gizli
- [ ] **Kategori düzenleme** — kategoriler (6 sabit taksonomi öğesi) bilinçli
      olarak veritabanına taşınmadı çünkü `ProductCard` gibi bazı bileşenler
      bunları senkron/istemci tarafında okuyor; DB'ye taşımak o bileşenleri
      async yapmayı gerektirir ki bu client component sınırlarını bozar.
      Düşük öncelik: kategoriler nadiren değişir.
- [ ] Rol bazlı yetkilendirme — şu an tek admin rolü var (payload'da `role`
      alanı hazır ama çoklu kullanıcı/rol yönetimi ileri bir adım)
- [ ] Ürün formunda FAQ (SSS) düzenleme — mevcut FAQ'lar korunuyor ama
      formdan eklenip çıkarılamıyor (dinamik liste UI'ı ayrı bir iş)
- [ ] Görsel/video yönetimi (dosya yükleme, WebP/AVIF dönüşümü) — form şu an
      yalnızca elle girilen bir görsel yolunu kabul ediyor, gerçek upload yok
- [ ] Sayfa yönetimi (Hakkımızda, KVKK vb. içeriklerin admin'den düzenlenmesi)

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
- [x] Admin paneli auth: e-posta+şifre + zorunlu 2FA/TOTP, imzalı oturum
      cookie'si, brute-force rate limiting, giriş logları (bkz. Faz 4)
- [ ] Cloudflare WAF / DDoS koruması — hosting sağlayıcısı seçimi ve
      Cloudflare kurulumu henüz yapılmadı
- [ ] Prodüksiyon rate limiting — şu an bellek-içi/tek-process (MVP); çoklu
      instance için Cloudflare Rate Limiting veya Upstash Redis gerekiyor
- [ ] Rol bazlı erişim — henüz tek admin rolü var, CMS/DB entegrasyonu sonrası
- [ ] Dosya yükleme / MIME type doğrulama (admin panel görsel yükleme
      özelliğiyle birlikte gelecek)
- [x] Admin giriş logları (yerel dosya, MVP) + admin içerik işlem logları
      (`AdminAuditLog` DB tablosu — ürün/yorum oluşturma, düzenleme, silme,
      yayın durumu değişiklikleri kaydediliyor; henüz arayüzde gösterilmiyor)
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
- [x] Admin panel auth testleri (Playwright ile uçtan uca doğrulandı: yetkisiz
      erişim engelleme, hatalı şifre, hatalı TOTP, kurcalanmış cookie, logout)
- [x] Admin panel CRUD testleri (Playwright ile uçtan uca doğrulandı: ürün
      oluşturma/düzenleme/yayın durumu/silme, yorum yayınla/gizle — hepsi
      public sitede doğru anda doğru şekilde yansıyor)
- [ ] Canlı yayın (production deployment)

---

## İçerik / Veri Eksikleri (Genel)

- [ ] `lib/site.ts` içindeki telefon, WhatsApp numarası ve adres bilgileri
      hâlâ placeholder (`+90 000 000 00 00` vb.) — gerçek bilgilerle
      değiştirilmeli
- [ ] Yorumlar şu an örnek/yer tutucu içerik (`data/reviews.ts` yalnızca ilk
      seed kaynağı; gerçek veri artık veritabanında ve admin panelden
      yönetiliyor) — gerçek, KVKK uyumlu (maskelenmiş) pazaryeri yorumlarıyla
      değiştirilmeli (admin panelden tek tek silinip gerçekleriyle
      değiştirilebilir)
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
| Faz 4 — Admin Panel | ⚙️ Auth (2FA dahil) + Prisma/SQLite veritabanı + ürün ve yorum tam CRUD + dashboard/kategori/SEO ekranları tamam; görsel yükleme, rol yönetimi, sayfa yönetimi bekliyor |
| Faz 5 — SEO ve Güvenlik | ⚙️ Temel SEO + header güvenliği + admin auth güvenliği tamam, WAF/backup/hata takibi eksik |
| Faz 6 — Yayına Alma | ❌ Yapılmadı |
