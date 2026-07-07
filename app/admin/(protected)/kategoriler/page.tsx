import { getCategories, getAllProductsAdmin } from "@/lib/cms";

export default async function AdminCategoriesPage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getAllProductsAdmin(),
  ]);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">Kategoriler</h1>
      <p className="mt-1 text-sm text-ink/55">{categories.length} kategori</p>

      <div className="mt-6 overflow-x-auto rounded-card bg-white shadow-soft">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead>
            <tr className="border-b border-ink/8 text-xs font-bold uppercase tracking-wider text-ink/45">
              <th className="px-5 py-3">Kategori</th>
              <th className="px-5 py-3">Slug</th>
              <th className="px-5 py-3">Ürün Sayısı</th>
              <th className="px-5 py-3">Durum</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => {
              const count = products.filter((p) => p.category === category.slug).length;
              return (
                <tr key={category.slug} className="border-b border-ink/5 last:border-0">
                  <td className="px-5 py-3 font-semibold text-ink">{category.name}</td>
                  <td className="px-5 py-3 font-mono text-xs text-ink/55">{category.slug}</td>
                  <td className="px-5 py-3 text-ink/65">{count}</td>
                  <td className="px-5 py-3">
                    {category.comingSoon ? (
                      <span className="rounded-full bg-ink/8 px-2.5 py-1 text-xs font-bold text-ink/60">
                        Yakında
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-100 px-2.5 py-1 text-xs font-bold text-green-800">
                        Aktif
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink/45">
        Bu görünüm salt okunurdur. Kategori ekleme/düzenleme CMS entegrasyonu
        ile birlikte gelecek — bkz. task.md Faz 4.
      </p>
    </div>
  );
}
