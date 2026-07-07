import { getReviews } from "@/lib/cms";
import { products } from "@/data/products";

export default async function AdminReviewsPage() {
  const reviews = await getReviews();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">Müşteri Yorumları</h1>
      <p className="mt-1 text-sm text-ink/55">{reviews.length} yorum</p>

      <div className="mt-6 overflow-x-auto rounded-card bg-white shadow-soft">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/8 text-xs font-bold uppercase tracking-wider text-ink/45">
              <th className="px-5 py-3">Kullanıcı</th>
              <th className="px-5 py-3">Ürün</th>
              <th className="px-5 py-3">Puan</th>
              <th className="px-5 py-3">Yorum</th>
              <th className="px-5 py-3">Kaynak</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review) => {
              const product = products.find((p) => p.slug === review.productSlug);
              return (
                <tr key={review.id} className="border-b border-ink/5 last:border-0 align-top">
                  <td className="px-5 py-3 font-semibold text-ink">{review.maskedName}</td>
                  <td className="px-5 py-3 text-ink/65">{product?.name ?? "Genel"}</td>
                  <td className="px-5 py-3 text-ink/65">{review.rating}/5</td>
                  <td className="max-w-sm px-5 py-3 text-ink/65">{review.text}</td>
                  <td className="px-5 py-3 text-ink/65">{review.source}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink/45">
        Bu görünüm salt okunurdur. Yorum onaylama/gizleme ve pazaryeri
        senkronizasyonu CMS entegrasyonu ile birlikte gelecek — bkz. task.md
        Faz 4.
      </p>
    </div>
  );
}
