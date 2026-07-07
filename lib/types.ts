export type CategorySlug =
  | "dudak-bakimi"
  | "tirnak-bakimi"
  | "kisisel-bakim"
  | "roll-on"
  | "kulak-tikaci"
  | "parfum";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  sortOrder: number;
  /** "Yakında" etiketi ile gösterilen, henüz ürünü olmayan kategoriler */
  comingSoon?: boolean;
  seo: {
    title: string;
    description: string;
  };
}

export type MarketplacePlatform =
  | "Trendyol"
  | "Hepsiburada"
  | "Gratis"
  | "Amazon";

export interface MarketplaceLink {
  platform: MarketplacePlatform;
  url: string;
}

export interface ProductImage {
  src: string;
  alt: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  /** Ürün kartlarında görünen kısa fayda cümlesi */
  shortBenefit: string;
  description: string;
  benefits: string[];
  usage: string;
  suitableFor: string;
  ingredients?: string[];
  warnings?: string[];
  sku: string;
  barcode?: string;
  /** ÜTS (Ürün Takip Sistemi) kaydı bilgilendirmesi */
  utsRegistered: boolean;
  images: ProductImage[];
  video?: string;
  /**
   * Puan/yorum verileri yalnızca doğrulanabilir gerçek verilerle doldurulmalı.
   * Boş bırakıldığında arayüzde ve schema çıktısında gösterilmez.
   */
  rating?: number;
  reviewCount?: number;
  bestSeller?: boolean;
  isNew?: boolean;
  marketplaceLinks: MarketplaceLink[];
  faqs: ProductFAQ[];
  seo: {
    title: string;
    description: string;
  };
  /* --- E-ticaret fazı için hazır alanlar (şu an pasif) --- */
  price?: number;
  currency: "TRY";
  stock?: number;
  ecommerceEnabled: boolean;
  published: boolean;
}

export type ReviewSource = "Trendyol" | "Hepsiburada" | "Gratis" | "Manuel";

export interface Review {
  id: string;
  /** Bağlı olduğu ürün; genel marka yorumu ise boş */
  productSlug?: string;
  /** KVKK gereği maskelenmiş kullanıcı adı, ör. "A*** Y***" */
  maskedName: string;
  rating: number;
  text: string;
  source: ReviewSource;
  date?: string;
  /** Admin panelinden onaylanıp yayına alınmış mı (moderasyon). */
  published: boolean;
}

export interface SalesPoint {
  name: string;
  type: "online" | "magaza";
  url?: string;
  description: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingMinutes: number;
  sections: BlogSection[];
  seo: {
    title: string;
    description: string;
  };
}
