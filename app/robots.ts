import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Eski siteden kalan şüpheli/spam URL kalıpları önleyici olarak engellenir
      disallow: ["/wp-admin/", "/wp-content/", "/wp-includes/", "/comment.php", "/*.php$"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
