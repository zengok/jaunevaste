import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/product/ProductCard";
import { ReviewCard } from "@/components/product/ReviewCard";
import { RatingStars } from "@/components/product/RatingStars";
import { FAQAccordion } from "@/components/product/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  getProductBySlug,
  getPublishedProducts,
  getRelatedProducts,
  getReviewsForProduct,
} from "@/lib/cms";
import { getCategory } from "@/data/categories";

export async function generateStaticParams() {
  const products = await getPublishedProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: `/urunler/${product.slug}`,
    image: product.images[0]?.src,
  });
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-card bg-white p-6 shadow-soft sm:p-8">
      <h2 className="font-display text-xl font-bold text-ink">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const [related, reviews] = await Promise.all([
    getRelatedProducts(product, 3),
    getReviewsForProduct(product.slug),
  ]);
  const category = getCategory(product.category);
  const cover = product.images[0];

  return (
    <>
      <JsonLd data={productSchema(product)} />
      {product.faqs.length > 0 && <JsonLd data={faqSchema(product.faqs)} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Ürünlerimiz", path: "/urunler" },
          ...(category
            ? [{ name: category.name, path: `/kategori/${category.slug}` }]
            : []),
          { name: product.name, path: `/urunler/${product.slug}` },
        ])}
      />

      <section className="bg-soft py-10 sm:py-16">
        <Container>
          <nav aria-label="breadcrumb" className="mb-6 text-sm text-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary">Anasayfa</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/urunler" className="hover:text-primary">Ürünlerimiz</Link>
              </li>
              {category && (
                <>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href={`/kategori/${category.slug}`} className="hover:text-primary">
                      {category.name}
                    </Link>
                  </li>
                </>
              )}
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-ink" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2">
            {/* Görsel galeri */}
            <div className="relative aspect-square overflow-hidden rounded-card bg-white shadow-soft">
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute left-4 top-4 flex flex-col gap-2">
                {product.bestSeller && <Badge tone="gold">Çok Satan</Badge>}
                {product.isNew && <Badge tone="new">Yeni</Badge>}
              </div>
            </div>

            {/* Ürün bilgisi */}
            <div className="flex flex-col">
              {category && (
                <span className="text-xs font-bold uppercase tracking-widest text-primary-soft">
                  {category.name}
                </span>
              )}
              <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-3 text-lg text-muted">{product.shortBenefit}</p>
              {product.rating != null && (
                <div className="mt-3">
                  <RatingStars
                    rating={product.rating}
                    reviewCount={product.reviewCount}
                  />
                </div>
              )}

              <ul className="mt-6 space-y-2.5">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-sm text-muted">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary-soft"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3">
                {product.marketplaceLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="rounded-full bg-primary px-6 py-3.5 text-center text-base font-bold text-white shadow-soft transition-all hover:bg-primary-hover hover:shadow-lift"
                  >
                    {link.platform}&apos;da Satın Al
                  </a>
                ))}
                <Link
                  href="/satis-noktalari"
                  className="rounded-full border border-hairline px-6 py-3.5 text-center text-base font-semibold text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  Tüm Satış Noktalarını Gör
                </Link>
              </div>

              <dl className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-white/70 p-5 text-sm">
                <div>
                  <dt className="font-bold text-muted">SKU</dt>
                  <dd className="mt-1 font-semibold text-ink">{product.sku}</dd>
                </div>
                <div>
                  <dt className="font-bold text-muted">ÜTS Kaydı</dt>
                  <dd className="mt-1 font-semibold text-ink">
                    {product.utsRegistered ? (
                      <Link href="/uts-bilgilendirme" className="text-primary hover:underline">
                        Kayıtlı ürün ✓
                      </Link>
                    ) : (
                      "Bilgi için iletişime geçin"
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-6 lg:grid-cols-2">
          <InfoBlock title="Ürün Açıklaması">
            <p className="text-sm leading-relaxed text-muted">
              {product.description}
            </p>
          </InfoBlock>
          <InfoBlock title="Nasıl Kullanılır?">
            <p className="text-sm leading-relaxed text-muted">{product.usage}</p>
            <h3 className="mt-5 text-sm font-bold text-ink">Kimler için uygun?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {product.suitableFor}
            </p>
          </InfoBlock>
          {product.ingredients && product.ingredients.length > 0 && (
            <InfoBlock title="İçerik Bilgisi">
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient) => (
                  <Badge key={ingredient} tone="soft">
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </InfoBlock>
          )}
          {product.warnings && product.warnings.length > 0 && (
            <InfoBlock title="Uyarılar">
              <ul className="space-y-2 text-sm leading-relaxed text-muted">
                {product.warnings.map((warning) => (
                  <li key={warning} className="flex items-start gap-2">
                    <span className="text-primary-soft" aria-hidden="true">•</span>
                    {warning}
                  </li>
                ))}
              </ul>
            </InfoBlock>
          )}
        </Container>
      </section>

      {reviews.length > 0 && (
        <section className="bg-soft py-12 sm:py-16">
          <Container>
            <h2 className="mb-8 font-display text-2xl font-bold text-ink">
              Müşteri Yorumları
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {product.faqs.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container className="max-w-3xl">
            <h2 className="mb-8 font-display text-2xl font-bold text-ink">
              Sık Sorulan Sorular
            </h2>
            <FAQAccordion faqs={product.faqs} />
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <Container>
            <h2 className="mb-8 font-display text-2xl font-bold text-ink">
              Benzer Ürünler
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
