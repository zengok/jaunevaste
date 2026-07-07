"use client";

import { useActionState } from "react";
import type { Product } from "@/lib/types";
import { categories } from "@/data/categories";
import { createProduct, updateProduct, type ProductFormState } from "./actions";

const initialState: ProductFormState = {};

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-ink">{label}</span>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1 text-xs font-semibold text-error">{error}</p>}
    </label>
  );
}

const inputClass =
  "w-full rounded-xl border border-hairline bg-ivory px-4 py-2.5 text-sm focus:border-primary focus:outline-none";

export function ProductForm({ product }: { product?: Product }) {
  const isEdit = Boolean(product);
  const action = isEdit ? updateProduct.bind(null, product!.id) : createProduct;
  const [state, formAction, pending] = useActionState(action, initialState);

  const fe = state.fieldErrors ?? {};

  return (
    <form action={formAction} className="space-y-8">
      {state.error && (
        <p role="alert" className="rounded-xl bg-error/10 px-4 py-3 text-sm text-error">
          {state.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ürün Adı" error={fe.name}>
          <input name="name" required defaultValue={product?.name} className={inputClass} />
        </Field>
        <Field label="Slug (URL)" error={fe.slug}>
          <input
            name="slug"
            required
            readOnly={isEdit}
            defaultValue={product?.slug}
            className={`${inputClass} ${isEdit ? "opacity-60" : ""}`}
          />
        </Field>
        <Field label="Kategori" error={fe.category}>
          <select name="category" required defaultValue={product?.category} className={inputClass}>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="SKU" error={fe.sku}>
          <input name="sku" required defaultValue={product?.sku} className={inputClass} />
        </Field>
        <Field label="Barkod (opsiyonel)" error={fe.barcode}>
          <input name="barcode" defaultValue={product?.barcode} className={inputClass} />
        </Field>
        <Field label="Fiyat (TRY, opsiyonel)" error={fe.price}>
          <input
            name="price"
            type="number"
            step="0.01"
            min={0}
            defaultValue={product?.price}
            className={inputClass}
          />
        </Field>
        <Field label="Stok (opsiyonel)" error={fe.stock}>
          <input
            name="stock"
            type="number"
            min={0}
            defaultValue={product?.stock}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Kısa Fayda Cümlesi" error={fe.shortBenefit}>
        <input name="shortBenefit" required defaultValue={product?.shortBenefit} className={inputClass} />
      </Field>

      <Field label="Ürün Açıklaması" error={fe.description}>
        <textarea
          name="description"
          required
          rows={4}
          defaultValue={product?.description}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nasıl Kullanılır?" error={fe.usage}>
          <textarea name="usage" required rows={3} defaultValue={product?.usage} className={inputClass} />
        </Field>
        <Field label="Kimler İçin Uygun?" error={fe.suitableFor}>
          <textarea
            name="suitableFor"
            required
            rows={3}
            defaultValue={product?.suitableFor}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Faydalar (her satıra bir madde)">
          <textarea
            name="benefits"
            rows={5}
            defaultValue={product?.benefits.join("\n")}
            className={inputClass}
          />
        </Field>
        <Field label="İçerik (her satıra bir madde, opsiyonel)">
          <textarea
            name="ingredients"
            rows={5}
            defaultValue={product?.ingredients?.join("\n")}
            className={inputClass}
          />
        </Field>
        <Field label="Uyarılar (her satıra bir madde, opsiyonel)">
          <textarea
            name="warnings"
            rows={5}
            defaultValue={product?.warnings?.join("\n")}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Görsel Yolu" error={fe.imageSrc}>
          <input
            name="imageSrc"
            required
            defaultValue={product?.images[0]?.src}
            placeholder="/images/products/urun-adi.svg"
            className={inputClass}
          />
        </Field>
        <Field label="Görsel Alt Text" error={fe.imageAlt}>
          <input
            name="imageAlt"
            required
            defaultValue={product?.images[0]?.alt}
            className={inputClass}
          />
        </Field>
      </div>
      <p className="-mt-4 text-xs text-muted">
        Görsel dosyasının kendisi buradan yüklenmez — dosyayı önce
        public/images/products/ altına koyup yolunu buraya yazın. Görsel
        yükleme özelliği ayrı bir admin geliştirmesi olarak planlandı (bkz.
        task.md Faz 4).
      </p>

      <Field label="Video URL (opsiyonel)">
        <input name="video" defaultValue={product?.video} className={inputClass} />
      </Field>

      <Field label="Pazaryeri Linkleri (her satıra: Platform|URL)">
        <textarea
          name="marketplaceLinks"
          rows={2}
          placeholder="Trendyol|https://www.trendyol.com/..."
          defaultValue={product?.marketplaceLinks.map((l) => `${l.platform}|${l.url}`).join("\n")}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="SEO Başlığı" error={fe.seoTitle}>
          <input name="seoTitle" required defaultValue={product?.seo.title} className={inputClass} />
        </Field>
        <Field label="SEO Açıklaması" error={fe.seoDescription}>
          <textarea
            name="seoDescription"
            required
            rows={2}
            defaultValue={product?.seo.description}
            className={inputClass}
          />
        </Field>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[
          { name: "utsRegistered", label: "ÜTS Kayıtlı", checked: product?.utsRegistered },
          { name: "bestSeller", label: "Çok Satan", checked: product?.bestSeller },
          { name: "isNew", label: "Yeni Ürün", checked: product?.isNew },
          { name: "published", label: "Yayında", checked: product?.published ?? true },
          {
            name: "ecommerceEnabled",
            label: "E-ticaret Aktif",
            checked: product?.ecommerceEnabled,
          },
        ].map((flag) => (
          <label
            key={flag.name}
            className="flex items-center gap-2 rounded-xl border border-hairline bg-ivory px-4 py-2.5 text-sm font-semibold text-ink"
          >
            <input
              type="checkbox"
              name={flag.name}
              defaultChecked={flag.checked}
              className="h-4 w-4 accent-gold"
            />
            {flag.label}
          </label>
        ))}
      </div>

      <p className="text-xs text-muted">
        Not: Puan/yorum sayısı bu formdan yönetilmez — yalnızca doğrulanmış
        gerçek pazaryeri verisiyle veritabanına elle işlenmelidir (sahte veri
        girilmemesi ilkesi, bkz. task.md).
      </p>

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-primary-hover disabled:opacity-60"
      >
        {pending ? "Kaydediliyor..." : isEdit ? "Değişiklikleri Kaydet" : "Ürünü Oluştur"}
      </button>
    </form>
  );
}
