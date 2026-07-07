# Jaune Vaste

Jaune Vaste kurumsal/marka web sitesi. Next.js (App Router) + TypeScript +
Tailwind CSS ile sıfırdan geliştirilmiştir.

## Geliştirme

```bash
npm install
npm run dev
```

http://localhost:3000 üzerinden açın.

## Proje Yapısı

```
app/            Next.js App Router sayfaları (rota bazlı)
components/
  layout/       Header, Footer, WhatsApp butonu
  sections/     Ana sayfa bölümleri (Hero, kategori grid, vb.)
  product/      Ürün kartı, filtre/katalog, yorum, SSS bileşenleri
  ui/           Genel amaçlı UI bileşenleri (Button, Badge, Container)
  seo/          JSON-LD yapılandırılmış veri bileşeni
data/           Seed içerik (ürünler, kategoriler, yorumlar, blog)
lib/
  cms.ts        İçerik erişim katmanı — ileride CMS entegrasyonunda
                yalnızca bu dosya değişecek, sayfa kodu değişmeyecek
  seo.ts        Sayfa metadata üretici
  schema.ts     JSON-LD şema üreticileri (Product, FAQ, Breadcrumb, ...)
  security.ts   Content-Security-Policy tanımı
  site.ts       Site geneli sabitler (isim, iletişim, sosyal linkler)
  types.ts      Paylaşılan TypeScript tipleri
proxy.ts        Next.js 16 "proxy" (middleware) — admin paneli için hazır
```

## Mevcut Durum ve Sonraki Adımlar

Bu sürüm; marka vitrini, ürün kataloğu, SEO altyapısı (sitemap, robots,
JSON-LD) ve temel güvenlik başlıklarını içerir. Yayına almadan önce:

- `data/products.ts` içindeki görseller gerçek ürün fotoğraflarıyla
  değiştirilmeli (şu an SVG placeholder kullanılıyor).
- `lib/site.ts` içindeki iletişim bilgileri (telefon, WhatsApp, adres)
  güncellenmeli.
- Gerçek müşteri yorumları, KVKK'ya uygun şekilde `data/reviews.ts`'e
  eklenmeli.
- Admin panel / CMS entegrasyonu (Payload CMS veya Strapi) `lib/cms.ts`
  üzerinden bağlanmalı.
- `data/categories.ts` içindeki `seo.title` uzunlukları arama sonucu
  kesilmelerini önlemek için gözden geçirilmeli.

## Komutlar

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Prodüksiyon derlemesi
npm run lint     # ESLint
```
