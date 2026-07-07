import { categories } from "@/data/categories";
import { salesPoints } from "@/data/sales-points";
import { prisma } from "@/lib/db";
import type {
  BlogPost,
  CategorySlug,
  MarketplaceLink,
  Product,
  ProductFAQ,
  ProductImage,
  Review,
  ReviewSource,
} from "@/lib/types";
import type { Product as ProductRow, Review as ReviewRow, BlogPost as BlogPostRow } from "@prisma/client";

/**
 * İçerik erişim katmanı.
 *
 * Ürünler, yorumlar ve blog yazıları artık Prisma/SQLite üzerinden okunuyor
 * (bkz. prisma/schema.prisma, lib/db.ts). Kategoriler ve satış noktaları
 * sabit taksonomi oldukları için bilerek data/*.ts içinde statik kaldı
 * (bkz. task.md Faz 4).
 *
 * Prodüksiyonda PostgreSQL'e geçmek istendiğinde bu dosyanın hiçbir
 * fonksiyon imzası değişmez — yalnızca lib/db.ts'teki adapter değişir.
 */

function mapProduct(row: ProductRow): Product {
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    category: row.category as CategorySlug,
    shortBenefit: row.shortBenefit,
    description: row.description,
    usage: row.usage,
    suitableFor: row.suitableFor,
    benefits: row.benefits as unknown as string[],
    ingredients: (row.ingredients as unknown as string[] | null) ?? undefined,
    warnings: (row.warnings as unknown as string[] | null) ?? undefined,
    sku: row.sku,
    barcode: row.barcode ?? undefined,
    utsRegistered: row.utsRegistered,
    images: row.images as unknown as ProductImage[],
    video: row.video ?? undefined,
    rating: row.rating ?? undefined,
    reviewCount: row.reviewCount ?? undefined,
    bestSeller: row.bestSeller,
    isNew: row.isNew,
    marketplaceLinks: row.marketplaceLinks as unknown as MarketplaceLink[],
    faqs: row.faqs as unknown as ProductFAQ[],
    seo: { title: row.seoTitle, description: row.seoDescription },
    price: row.price ?? undefined,
    currency: row.currency as "TRY",
    stock: row.stock ?? undefined,
    ecommerceEnabled: row.ecommerceEnabled,
    published: row.published,
  };
}

function mapReview(row: ReviewRow): Review {
  return {
    id: row.id,
    productSlug: row.productSlug ?? undefined,
    maskedName: row.maskedName,
    rating: row.rating,
    text: row.text,
    source: row.source as ReviewSource,
    date: row.date ?? undefined,
    published: row.published,
  };
}

function mapBlogPost(row: BlogPostRow): BlogPost {
  return {
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    date: row.date,
    readingMinutes: row.readingMinutes,
    sections: row.sections as unknown as BlogPost["sections"],
    seo: { title: row.seoTitle, description: row.seoDescription },
  };
}

export async function getPublishedProducts(): Promise<Product[]> {
  const rows = await prisma.product.findMany({ where: { published: true } });
  return rows.map(mapProduct);
}

/** Admin panel için: taslaklar dahil tüm ürünler. */
export async function getAllProductsAdmin(): Promise<Product[]> {
  const rows = await prisma.product.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  const row = await prisma.product.findFirst({ where: { slug, published: true } });
  return row ? mapProduct(row) : undefined;
}

/** Admin panel için: taslak dahil tek ürün (slug ile). */
export async function getProductBySlugAdmin(slug: string): Promise<Product | undefined> {
  const row = await prisma.product.findUnique({ where: { slug } });
  return row ? mapProduct(row) : undefined;
}

/** Admin panel için: taslak dahil tek ürün (id ile — düzenleme formunda kullanılır). */
export async function getProductByIdAdmin(id: string): Promise<Product | undefined> {
  const row = await prisma.product.findUnique({ where: { id } });
  return row ? mapProduct(row) : undefined;
}

export async function getProductsByCategory(category: CategorySlug): Promise<Product[]> {
  const rows = await prisma.product.findMany({ where: { category, published: true } });
  return rows.map(mapProduct);
}

export async function getBestSellers(limit = 4): Promise<Product[]> {
  const rows = await prisma.product.findMany({
    where: { published: true, bestSeller: true },
    take: limit,
  });
  return rows.map(mapProduct);
}

export async function getRelatedProducts(product: Product, limit = 3): Promise<Product[]> {
  const published = await getPublishedProducts();
  const sameCategory = published.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );
  const others = published.filter(
    (p) => p.category !== product.category && p.slug !== product.slug
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export async function getCategories() {
  return [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export async function getReviews(): Promise<Review[]> {
  const rows = await prisma.review.findMany({
    where: { published: true },
    orderBy: { createdAt: "asc" },
  });
  return rows.map(mapReview);
}

/** Admin panel için: onaylanmamış/gizli yorumlar dahil tümü. */
export async function getAllReviewsAdmin(): Promise<Review[]> {
  const rows = await prisma.review.findMany({ orderBy: { createdAt: "desc" } });
  return rows.map(mapReview);
}

export async function getReviewsForProduct(slug: string): Promise<Review[]> {
  const rows = await prisma.review.findMany({
    where: { productSlug: slug, published: true },
  });
  return rows.map(mapReview);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const rows = await prisma.blogPost.findMany({ orderBy: { date: "desc" } });
  return rows.map(mapBlogPost);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const row = await prisma.blogPost.findUnique({ where: { slug } });
  return row ? mapBlogPost(row) : undefined;
}

export async function getSalesPoints() {
  return salesPoints;
}
