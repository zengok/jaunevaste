import type { Metadata } from "next";
import { site } from "@/lib/site";

interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
}

/**
 * Sayfa bazlı Metadata üretimi.
 * Canonical URL, Open Graph ve Twitter kartlarını tek noktadan yönetir.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
}: PageSeo): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      ...(image ? { images: [{ url: `${site.url}${image}` }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
