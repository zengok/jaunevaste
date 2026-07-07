import type { Prisma } from "@prisma/client";
import { prisma } from "../lib/db";
import { products } from "../data/products";
import { reviews } from "../data/reviews";
import { blogPosts } from "../data/blog";

const toJson = (value: unknown) => value as Prisma.InputJsonValue;

/**
 * data/*.ts içindeki seed içeriğini veritabanına aktarır.
 * Çalıştırma: npx prisma db seed  (veya: npx tsx prisma/seed.ts)
 *
 * Idempotent'tir — upsert kullanır, tekrar çalıştırmak veriyi kopyalamaz.
 * Kategoriler ve satış noktaları bilerek DB'ye taşınmadı (bkz. task.md
 * Faz 4 — sabit taksonomi olduğu için data/*.ts içinde statik kaldı).
 */
async function main() {
  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      create: {
        id: product.id,
        slug: product.slug,
        name: product.name,
        category: product.category,
        shortBenefit: product.shortBenefit,
        description: product.description,
        usage: product.usage,
        suitableFor: product.suitableFor,
        benefits: toJson(product.benefits),
        ingredients: product.ingredients ? toJson(product.ingredients) : undefined,
        warnings: product.warnings ? toJson(product.warnings) : undefined,
        sku: product.sku,
        barcode: product.barcode,
        utsRegistered: product.utsRegistered,
        images: toJson(product.images),
        video: product.video,
        rating: product.rating,
        reviewCount: product.reviewCount,
        bestSeller: product.bestSeller ?? false,
        isNew: product.isNew ?? false,
        marketplaceLinks: toJson(product.marketplaceLinks),
        faqs: toJson(product.faqs),
        seoTitle: product.seo.title,
        seoDescription: product.seo.description,
        price: product.price,
        currency: product.currency,
        stock: product.stock,
        ecommerceEnabled: product.ecommerceEnabled,
        published: product.published,
      },
      update: {},
    });
  }
  console.log(`✔ ${products.length} ürün seed edildi.`);

  for (const review of reviews) {
    await prisma.review.upsert({
      where: { id: review.id },
      create: {
        id: review.id,
        productSlug: review.productSlug,
        maskedName: review.maskedName,
        rating: review.rating,
        text: review.text,
        source: review.source,
        date: review.date,
        published: true,
      },
      update: {},
    });
  }
  console.log(`✔ ${reviews.length} yorum seed edildi.`);

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        category: post.category,
        date: post.date,
        readingMinutes: post.readingMinutes,
        sections: toJson(post.sections),
        seoTitle: post.seo.title,
        seoDescription: post.seo.description,
      },
      update: {},
    });
  }
  console.log(`✔ ${blogPosts.length} blog yazısı seed edildi.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
