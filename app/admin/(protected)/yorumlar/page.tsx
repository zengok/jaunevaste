import { getAllReviewsAdmin, getAllProductsAdmin } from "@/lib/cms";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { toggleReviewPublished, deleteReview } from "./actions";

export default async function AdminReviewsPage() {
  const [reviews, products] = await Promise.all([
    getAllReviewsAdmin(),
    getAllProductsAdmin(),
  ]);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">Müşteri Yorumları</h1>
      <p className="mt-1 text-sm text-ink/55">{reviews.length} yorum</p>

      <div className="mt-6 overflow-x-auto rounded-card bg-white shadow-soft">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/8 text-xs font-bold uppercase tracking-wider text-ink/45">
              <th className="px-5 py-3">Kullanıcı</th>
              <th className="px-5 py-3">Ürün</th>
              <th className="px-5 py-3">Puan</th>
              <th className="px-5 py-3">Yorum</th>
              <th className="px-5 py-3">Durum</th>
              <th className="px-5 py-3" />
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
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                        review.published
                          ? "bg-green-100 text-green-800"
                          : "bg-ink/8 text-ink/60"
                      }`}
                    >
                      {review.published ? "Yayında" : "Gizli"}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right">
                    <form
                      action={toggleReviewPublished.bind(null, review.id, !review.published)}
                      className="inline"
                    >
                      <button type="submit" className="text-xs font-bold text-gold hover:underline">
                        {review.published ? "Gizle" : "Yayınla"}
                      </button>
                    </form>
                    <form action={deleteReview.bind(null, review.id)} className="ml-3 inline">
                      <ConfirmSubmitButton
                        confirmMessage="Bu yorumu kalıcı olarak silmek istediğinize emin misiniz?"
                        className="text-xs font-bold text-red-600 hover:underline"
                      >
                        Sil
                      </ConfirmSubmitButton>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink/45">
        Yayından gizlenen yorumlar sitede ve ürün detay sayfalarında
        görünmez ama veritabanında saklanır. Silme işlemi kalıcıdır.
      </p>
    </div>
  );
}
