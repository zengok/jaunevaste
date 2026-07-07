import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductByIdAdmin } from "@/lib/cms";
import { ProductForm } from "../../ProductForm";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductByIdAdmin(id);
  if (!product) notFound();

  return (
    <div>
      <Link href="/admin/urunler" className="text-sm font-semibold text-primary-soft hover:text-primary">
        ← Ürünler
      </Link>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink">{product.name} — Düzenle</h1>
      <div className="mt-6 max-w-3xl rounded-card bg-white p-6 shadow-soft sm:p-8">
        <ProductForm product={product} />
      </div>
    </div>
  );
}
