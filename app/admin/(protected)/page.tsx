import Link from "next/link";
import { StatCard } from "@/components/admin/StatCard";
import {
  getAllProductsAdmin,
  getBlogPosts,
  getCategories,
  getReviews,
} from "@/lib/cms";
import { auditProducts } from "@/lib/admin/seoAudit";

export default async function AdminDashboardPage() {
  const [products, categories, reviews, posts] = await Promise.all([
    getAllProductsAdmin(),
    getCategories(),
    getReviews(),
    getBlogPosts(),
  ]);

  const published = products.filter((p) => p.published);
  const drafts = products.filter((p) => !p.published);
  const bestSellers = products.filter((p) => p.bestSeller);
  const audits = auditProducts(products).filter((a) => a.warnings.length > 0);
  const recentReviews = [...reviews].slice(-5).reverse();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">Dashboard</h1>
      <p className="mt-1 text-sm text-muted">
        Jaune Vaste içerik durumuna genel bakış.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard label="Toplam Ürün" value={products.length} />
        <StatCard label="Yayında" value={published.length} hint={`${drafts.length} taslak`} />
        <StatCard label="Çok Satan" value={bestSellers.length} />
        <StatCard label="Kategori" value={categories.length} />
        <StatCard label="Yorum" value={reviews.length} />
        <StatCard label="Bakım Rehberi Yazısı" value={posts.length} hint="Hedef: 12" />
        <StatCard
          label="SEO Uyarısı Olan Ürün"
          value={audits.length}
          hint={audits.length > 0 ? "Detay için SEO sekmesine bakın" : "Sorun yok"}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-card bg-white p-6 shadow-soft">
          <h2 className="font-display text-lg font-bold text-ink">Son Yorumlar</h2>
          <ul className="mt-4 space-y-3">
            {recentReviews.map((review) => (
              <li key={review.id} className="border-b border-hairline pb-3 text-sm last:border-0">
                <p className="font-semibold text-ink">{review.maskedName} · {review.rating}/5</p>
                <p className="mt-0.5 text-muted">{review.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/admin/yorumlar" className="mt-4 inline-block text-sm font-bold text-primary">
            Tüm yorumları gör →
          </Link>
        </div>

        <div className="rounded-card bg-white p-6 shadow-soft">
          <h2 className="font-display text-lg font-bold text-ink">SEO Uyarıları</h2>
          {audits.length === 0 ? (
            <p className="mt-4 text-sm text-muted">Aktif bir SEO uyarısı yok.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {audits.slice(0, 5).map(({ product, warnings }) => (
                <li key={product.id} className="border-b border-hairline pb-3 text-sm last:border-0">
                  <p className="font-semibold text-ink">{product.name}</p>
                  <p className="mt-0.5 text-muted">{warnings.length} uyarı</p>
                </li>
              ))}
            </ul>
          )}
          <Link href="/admin/seo" className="mt-4 inline-block text-sm font-bold text-primary">
            Tüm SEO detaylarını gör →
          </Link>
        </div>
      </div>
    </div>
  );
}
