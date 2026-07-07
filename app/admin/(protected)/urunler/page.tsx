import Link from "next/link";
import { getAllProductsAdmin } from "@/lib/cms";
import { getCategory } from "@/data/categories";
import { auditProduct } from "@/lib/admin/seoAudit";
import { ConfirmSubmitButton } from "@/components/admin/ConfirmSubmitButton";
import { deleteProduct, toggleProductField } from "./actions";

export default async function AdminProductsPage() {
  const products = await getAllProductsAdmin();

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-ink">Ürünler</h1>
          <p className="mt-1 text-sm text-ink/55">{products.length} ürün</p>
        </div>
        <Link
          href="/admin/urunler/yeni"
          className="rounded-full bg-jaune-500 px-5 py-2.5 text-sm font-bold text-ink shadow-soft hover:bg-jaune-400"
        >
          + Yeni Ürün
        </Link>
      </div>

      <div className="mt-6 overflow-x-auto rounded-card bg-white shadow-soft">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/8 text-xs font-bold uppercase tracking-wider text-ink/45">
              <th className="px-5 py-3">Ürün</th>
              <th className="px-5 py-3">Kategori</th>
              <th className="px-5 py-3">SKU</th>
              <th className="px-5 py-3">Durum</th>
              <th className="px-5 py-3">SEO</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const category = getCategory(product.category);
              const warnings = auditProduct(product);
              return (
                <tr key={product.id} className="border-b border-ink/5 last:border-0">
                  <td className="px-5 py-3 font-semibold text-ink">{product.name}</td>
                  <td className="px-5 py-3 text-ink/65">{category?.name ?? "—"}</td>
                  <td className="px-5 py-3 text-ink/65">{product.sku}</td>
                  <td className="px-5 py-3">
                    <form
                      action={toggleProductField.bind(null, product.id, "published", !product.published)}
                    >
                      <button
                        type="submit"
                        className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                          product.published
                            ? "bg-green-100 text-green-800"
                            : "bg-ink/8 text-ink/60"
                        }`}
                        title="Durumu değiştirmek için tıklayın"
                      >
                        {product.published ? "Yayında" : "Taslak"}
                      </button>
                    </form>
                  </td>
                  <td className="px-5 py-3">
                    {warnings.length === 0 ? (
                      <span className="text-xs font-semibold text-green-700">Sorun yok</span>
                    ) : (
                      <span className="text-xs font-semibold text-amber-700">
                        {warnings.length} uyarı
                      </span>
                    )}
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right">
                    <Link
                      href={`/admin/urunler/${product.id}/duzenle`}
                      className="text-xs font-bold text-gold hover:underline"
                    >
                      Düzenle
                    </Link>
                    <Link
                      href={`/urunler/${product.slug}`}
                      target="_blank"
                      className="ml-3 text-xs font-bold text-ink/50 hover:underline"
                    >
                      Sitede gör ↗
                    </Link>
                    <form action={deleteProduct.bind(null, product.id)} className="ml-3 inline">
                      <ConfirmSubmitButton
                        confirmMessage={`"${product.name}" ürününü kalıcı olarak silmek istediğinize emin misiniz?`}
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
    </div>
  );
}
