import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getPublishedProducts, getBlogPosts, getCategories } from "@/lib/cms";

const staticPaths = [
  "",
  "/hakkimizda",
  "/urunler",
  "/yorumlar",
  "/satis-noktalari",
  "/iletisim",
  "/bakim-rehberi",
  "/kvkk",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/kullanim-sartlari",
  "/urun-guvenligi",
  "/uts-bilgilendirme",
  "/iade-ve-degisim",
  "/teslimat-bilgileri",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const [products, categories, blogPosts] = await Promise.all([
    getPublishedProducts(),
    getCategories(),
    getBlogPosts(),
  ]);

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority: path === "" ? 1 : 0.7,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories
    .filter((c) => !c.comingSoon)
    .map((c) => ({
      url: `${site.url}/kategori/${c.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${site.url}/urunler/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.url}/bakim-rehberi/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries, ...blogEntries];
}
