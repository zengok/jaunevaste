import Link from "next/link";
import { ProductForm } from "../ProductForm";

export default function NewProductPage() {
  return (
    <div>
      <Link href="/admin/urunler" className="text-sm font-semibold text-cocoa hover:text-gold">
        ← Ürünler
      </Link>
      <h1 className="mt-3 font-display text-2xl font-bold text-ink">Yeni Ürün</h1>
      <div className="mt-6 max-w-3xl rounded-card bg-white p-6 shadow-soft sm:p-8">
        <ProductForm />
      </div>
    </div>
  );
}
