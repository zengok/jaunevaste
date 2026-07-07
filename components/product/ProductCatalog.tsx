"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import type { Category, Product } from "@/lib/types";

type SortOption = "onerilen" | "cok-satan" | "yeni" | "ad";

export function ProductCatalog({
  products,
  categories,
  initialCategory,
}: {
  products: Product[];
  categories: Category[];
  initialCategory?: string;
}) {
  const [category, setCategory] = useState<string>(initialCategory ?? "");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOption>("onerilen");

  const filtered = useMemo(() => {
    let list = products;
    if (category) list = list.filter((p) => p.category === category);
    if (query.trim()) {
      const q = query.trim().toLocaleLowerCase("tr");
      list = list.filter(
        (p) =>
          p.name.toLocaleLowerCase("tr").includes(q) ||
          p.shortBenefit.toLocaleLowerCase("tr").includes(q)
      );
    }
    const sorted = [...list];
    if (sort === "cok-satan") {
      sorted.sort((a, b) => Number(b.bestSeller ?? false) - Number(a.bestSeller ?? false));
    } else if (sort === "yeni") {
      sorted.sort((a, b) => Number(b.isNew ?? false) - Number(a.isNew ?? false));
    } else if (sort === "ad") {
      sorted.sort((a, b) => a.name.localeCompare(b.name, "tr"));
    }
    return sorted;
  }, [products, category, query, sort]);

  const selectableCategories = categories.filter((c) => !c.comingSoon);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4">
        {/* Arama ve sıralama */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative flex-1">
            <span className="sr-only">Ürün ara</span>
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"
              />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ürün ara: lip balm, tırnak yağı..."
              className="w-full rounded-full border border-hairline bg-white py-3 pl-12 pr-5 text-sm text-ink placeholder:text-muted focus:border-primary focus:outline-none"
            />
          </label>
          <label>
            <span className="sr-only">Sıralama</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="w-full rounded-full border border-hairline bg-white px-5 py-3 text-sm font-semibold text-ink focus:border-primary focus:outline-none sm:w-auto"
            >
              <option value="onerilen">Önerilen Sıralama</option>
              <option value="cok-satan">Çok Satanlar</option>
              <option value="yeni">Yeni Eklenenler</option>
              <option value="ad">İsme Göre (A-Z)</option>
            </select>
          </label>
        </div>

        {/* Kategori filtresi: mobilde yatay kaydırılabilir chip listesi */}
        <div
          className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
          role="group"
          aria-label="Kategori filtresi"
        >
          <button
            type="button"
            onClick={() => setCategory("")}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === ""
                ? "bg-primary text-white"
                : "bg-white text-muted shadow-soft hover:text-ink"
            }`}
          >
            Tümü
          </button>
          {selectableCategories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setCategory(category === c.slug ? "" : c.slug)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === c.slug
                  ? "bg-primary text-white"
                  : "bg-white text-muted shadow-soft hover:text-ink"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="rounded-card bg-white p-10 text-center text-muted shadow-soft">
          Aramanızla eşleşen ürün bulunamadı. Farklı bir kelime deneyin veya
          filtreleri temizleyin.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
