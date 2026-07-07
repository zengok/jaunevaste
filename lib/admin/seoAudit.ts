import type { Product } from "@/lib/types";

export interface SeoWarning {
  code: string;
  message: string;
}

const TITLE_MAX = 60;
const DESCRIPTION_MIN = 50;
const DESCRIPTION_MAX = 155;

/**
 * Ürün bazlı temel SEO sağlık kontrolü.
 * Plan bölüm 8/10: "SEO Yönetimi" — eksik meta/alt text/barkod uyarıları.
 */
export function auditProduct(product: Product): SeoWarning[] {
  const warnings: SeoWarning[] = [];

  if (product.seo.title.length > TITLE_MAX) {
    warnings.push({
      code: "title-too-long",
      message: `SEO başlığı ${product.seo.title.length} karakter (öneri: ${TITLE_MAX} altı).`,
    });
  }

  if (product.seo.description.length > DESCRIPTION_MAX) {
    warnings.push({
      code: "description-too-long",
      message: `SEO açıklaması ${product.seo.description.length} karakter (öneri: ${DESCRIPTION_MAX} altı).`,
    });
  } else if (product.seo.description.length < DESCRIPTION_MIN) {
    warnings.push({
      code: "description-too-short",
      message: `SEO açıklaması çok kısa (${product.seo.description.length} karakter).`,
    });
  }

  const missingAlt = product.images.filter((img) => !img.alt || img.alt.trim().length < 5);
  if (missingAlt.length > 0) {
    warnings.push({
      code: "missing-alt",
      message: `${missingAlt.length} görselde yeterli alt text yok.`,
    });
  }

  if (!product.barcode) {
    warnings.push({ code: "missing-barcode", message: "Barkod bilgisi girilmemiş." });
  }

  if (product.faqs.length === 0) {
    warnings.push({ code: "missing-faq", message: "SSS içeriği eklenmemiş." });
  }

  if (product.rating == null || product.reviewCount == null) {
    warnings.push({
      code: "missing-rating",
      message: "Doğrulanmış puan/yorum verisi yok (bilerek boş — sahte veri girilmemeli).",
    });
  }

  return warnings;
}

export function auditProducts(productList: Product[]) {
  return productList.map((product) => ({
    product,
    warnings: auditProduct(product),
  }));
}
