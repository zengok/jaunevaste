import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { reviews } from "@/data/reviews";
import { blogPosts } from "@/data/blog";
import { salesPoints } from "@/data/sales-points";
import type { CategorySlug, Product, Review } from "@/lib/types";

/**
 * İçerik erişim katmanı.
 *
 * Şu an yerel seed verisinden besleniyor; Payload CMS / Strapi
 * entegrasyonu yapıldığında yalnızca bu dosyadaki fonksiyonların
 * içi API çağrılarıyla değiştirilecek — sayfa ve bileşen kodu
 * hiç değişmeyecek.
 */

export async function getPublishedProducts(): Promise<Product[]> {
  return products.filter((p) => p.published);
}

export async function getProductBySlug(
  slug: string
): Promise<Product | undefined> {
  return products.find((p) => p.slug === slug && p.published);
}

export async function getProductsByCategory(
  category: CategorySlug
): Promise<Product[]> {
  return products.filter((p) => p.category === category && p.published);
}

export async function getBestSellers(limit = 4): Promise<Product[]> {
  const published = await getPublishedProducts();
  return published.filter((p) => p.bestSeller).slice(0, limit);
}

export async function getRelatedProducts(
  product: Product,
  limit = 3
): Promise<Product[]> {
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
  return reviews;
}

export async function getReviewsForProduct(slug: string): Promise<Review[]> {
  return reviews.filter((r) => r.productSlug === slug);
}

export async function getBlogPosts() {
  return blogPosts;
}

export async function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}

export async function getSalesPoints() {
  return salesPoints;
}
