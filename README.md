# Jaune Vaste

Jaune Vaste kurumsal/marka web sitesi. Next.js (App Router) + TypeScript +
Tailwind CSS ile sıfırdan geliştirilmiştir.

## Geliştirme

```bash
npm install
npm run db:push    # SQLite şemasını oluşturur (prisma/dev.db)
npm run db:seed    # data/*.ts içindeki örnek içeriği veritabanına aktarır
npm run dev
```

http://localhost:3000 üzerinden açın.

## Proje Yapısı

```
app/            Next.js App Router sayfaları (rota bazlı)
  (site)/       Herkese açık sayfalar (Header/Footer/WhatsApp ile sarmalı)
  admin/
    login/      Admin girişi (e-posta+şifre → TOTP doğrulama, 2 adım)
    (protected)/ Oturum açmış admin için dashboard + ürün/kategori/yorum/SEO
                 yönetim ekranları (ürün ve yorum: tam CRUD)
components/
  layout/       Header, Footer, WhatsApp butonu
  sections/     Ana sayfa bölümleri (Hero, kategori grid, vb.)
  product/      Ürün kartı, filtre/katalog, yorum, SSS bileşenleri
  admin/        Admin panel kabuğu (sidebar), stat kartı, onaylı silme butonu
  ui/           Genel amaçlı UI bileşenleri (Button, Badge, Container)
  seo/          JSON-LD yapılandırılmış veri bileşeni
data/           Seed içerik (ürünler, yorumlar, blog) + statik taksonomi
                (kategoriler, satış noktaları — bkz. aşağıdaki not)
prisma/
  schema.prisma Veritabanı şeması (Product, Review, BlogPost, AdminAuditLog)
  seed.ts       data/*.ts içeriğini veritabanına aktarır (idempotent)
lib/
  db.ts         Prisma client (SQLite driver adapter; Postgres'e geçiş notu içerir)
  cms.ts        İçerik erişim katmanı — sayfalar hep buradan okur, hiçbir
                zaman doğrudan Prisma veya data/*.ts import etmez
  seo.ts        Sayfa metadata üretici
  schema.ts     JSON-LD şema üreticileri (Product, FAQ, Breadcrumb, ...)
  security.ts   Content-Security-Policy tanımı
  site.ts       Site geneli sabitler (isim, iletişim, sosyal linkler)
  types.ts      Paylaşılan TypeScript tipleri
  admin/
    auth.ts       Şifre/oturum/pending-token doğrulama (node:crypto, bağımlılıksız)
    totp.ts       RFC 6238 TOTP üretim/doğrulama (2FA)
    rateLimit.ts  Bellek-içi brute-force koruması (MVP)
    log.ts        Giriş denemesi loglama (yerel dosya, MVP)
    auditLog.ts   Admin içerik değişikliği denetim izi (DB tablosu)
    seoAudit.ts   Ürün bazlı otomatik SEO uyarı denetimi
proxy.ts        Next.js 16 "proxy" (middleware) — admin route'ları için
                hızlı ön kontrol (asıl doğrulama admin layout'unda)
```

**Neden kategoriler veritabanında değil?** `ProductCard` gibi bazı bileşenler
kategori bilgisini senkron/istemci tarafında okuyor; bunu DB'ye taşımak o
bileşenleri async yapmayı gerektirir ki bu Client Component sınırlarını
bozar. Kategoriler ayrıca sabit bir taksonomi (6 öğe, nadiren değişir), bu
yüzden bilinçli olarak `data/categories.ts` içinde statik kaldı.

## Veritabanı

Bu proje **Prisma + SQLite** kullanıyor (Payload CMS/Strapi değil — plan
başlangıçta bunları önermişti, ama ikisi de kendi admin arayüzü ve auth
sistemini dayatıyor; bu da az önce kurulan özel 2FA'lı admin paneliyle
çakışırdı, ayrıca Next.js 16 çok yeni olduğu için uyumluluk riski taşıyordu).

**Prodüksiyonda PostgreSQL'e geçmek için:**
1. `prisma/schema.prisma`: `provider = "postgresql"` yapın
2. `npm install @prisma/adapter-pg pg`
3. `lib/db.ts` ve `prisma.config.ts` içindeki adapter'ı `PrismaPg`'e çevirin

Model ve sorgu kodu (`lib/cms.ts`, admin action'ları) hiç değişmez.

```bash
npm run db:push    # Şemayı veritabanına uygula
npm run db:seed    # data/*.ts içeriğini veritabanına aktar (idempotent)
npm run db:studio  # Prisma Studio ile veritabanını görsel olarak incele
```

## Admin Paneli Kurulumu

Admin paneli `/admin` altında çalışır ve e-posta+şifre + zorunlu 2FA (TOTP)
ile korunur. Kimlik bilgilerini üretmek için:

```bash
node scripts/generate-admin-credentials.mjs "guclu-bir-sifre"
```

Çıktıyı `.env.local` dosyanıza kopyalayın (bkz. `.env.example`), TOTP secret'ı
bir authenticator uygulamasına (Google Authenticator, 1Password vb.) otpauth
URI'siyle veya Base32 secret'ı manuel girerek ekleyin.

Admin panelinde şu an **tam çalışan** özellikler: dashboard, ürün CRUD
(oluştur/düzenle/sil/yayınla-taslağa-al), yorum moderasyonu
(yayınla/gizle/sil), kategori ve SEO sağlık görünümleri (salt okunur).
Görsel/video yükleme ve sayfa içeriği (Hakkımızda, KVKK vb.) düzenleme henüz
yok — bkz. `task.md` Faz 4.

## Mevcut Durum ve Sonraki Adımlar

Bu sürüm; marka vitrini, ürün kataloğu, SEO altyapısı (sitemap, robots,
JSON-LD), temel güvenlik başlıkları ve veritabanı destekli bir admin paneli
içerir. Yayına almadan önce:

- `data/products.ts` (seed) içindeki görseller gerçek ürün fotoğraflarıyla
  değiştirilmeli (şu an SVG placeholder kullanılıyor); admin panelden her
  ürünün görsel yolu güncellenebilir.
- `lib/site.ts` içindeki iletişim bilgileri (telefon, WhatsApp, adres)
  güncellenmeli.
- Gerçek müşteri yorumları admin panelden eklenmeli/mevcut örnek yorumlar
  silinmeli (KVKK gereği maskelenmiş kullanıcı adlarıyla).
- Prodüksiyonda SQLite yerine PostgreSQL kullanılmalı (yukarıya bakın).
- `data/categories.ts` içindeki `seo.title` uzunlukları arama sonucu
  kesilmelerini önlemek için gözden geçirilmeli.

## Komutlar

```bash
npm run dev        # Geliştirme sunucusu
npm run build      # Prodüksiyon derlemesi
npm run lint       # ESLint
npm run db:push    # Veritabanı şemasını uygula
npm run db:seed    # Örnek içeriği veritabanına aktar
npm run db:studio  # Prisma Studio
```
