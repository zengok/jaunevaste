import { getAllProductsAdmin } from "@/lib/cms";
import { auditProducts } from "@/lib/admin/seoAudit";

export default async function AdminSeoPage() {
  const products = await getAllProductsAdmin();
  const audits = auditProducts(products);
  const withWarnings = audits.filter((a) => a.warnings.length > 0);
  const totalWarnings = withWarnings.reduce((sum, a) => sum + a.warnings.length, 0);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-ink">SEO Sağlığı</h1>
      <p className="mt-1 text-sm text-ink/55">
        {withWarnings.length} üründe toplam {totalWarnings} uyarı.
      </p>

      {withWarnings.length === 0 ? (
        <div className="mt-6 rounded-card bg-white p-8 text-center shadow-soft">
          <p className="font-display text-lg font-bold text-ink">
            Aktif bir SEO uyarısı yok 🎉
          </p>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {withWarnings.map(({ product, warnings }) => (
            <div key={product.id} className="rounded-card bg-white p-5 shadow-soft">
              <h2 className="font-display text-base font-bold text-ink">{product.name}</h2>
              <ul className="mt-2 space-y-1.5">
                {warnings.map((warning) => (
                  <li key={warning.code} className="flex items-start gap-2 text-sm text-amber-800">
                    <span aria-hidden="true">⚠</span>
                    {warning.message}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <p className="mt-6 text-xs text-ink/45">
        Bu denetim yalnızca temel kuralları (başlık/açıklama uzunluğu, alt
        text, barkod, SSS) kapsar. Kapsamlı SEO denetimi (broken link, index
        durumu vb.) için Search Console entegrasyonu gereklidir — bkz.
        task.md Faz 5.
      </p>
    </div>
  );
}
