import { site } from "@/lib/site";
import type { BlogPost, Product, ProductFAQ } from "@/lib/types";

/**
 * JSON-LD yapılandırılmış veri üreticileri.
 * Google Rich Results uyumlu Organization, Product, Breadcrumb ve FAQ şemaları.
 *
 * Not: Review / AggregateRating şeması yalnızca doğrulanabilir gerçek
 * yorum verisi mevcut olduğunda üretilir (Google spam politikaları gereği).
 */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.svg`,
    sameAs: [site.social.instagram, site.social.trendyol],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: site.email,
      availableLanguage: "Turkish",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "tr-TR",
  };
}

export function productSchema(product: Product) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.shortBenefit,
    sku: product.sku,
    ...(product.barcode ? { gtin13: product.barcode } : {}),
    image: product.images.map((img) => `${site.url}${img.src}`),
    brand: {
      "@type": "Brand",
      name: site.name,
    },
    url: `${site.url}/urunler/${product.slug}`,
  };

  // E-ticaret fazında fiyat/stok bilgisi ile Offer eklenecek
  if (product.ecommerceEnabled && product.price != null) {
    schema.offers = {
      "@type": "Offer",
      price: product.price,
      priceCurrency: product.currency,
      availability:
        (product.stock ?? 0) > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: `${site.url}/urunler/${product.slug}`,
    };
  }

  // Yalnızca doğrulanmış gerçek veriler girildiğinde puan şeması üretilir
  if (product.rating != null && product.reviewCount != null) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    };
  }

  return schema;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: ProductFAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    inLanguage: "tr-TR",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/logo.svg`,
      },
    },
    mainEntityOfPage: `${site.url}/bakim-rehberi/${post.slug}`,
  };
}
