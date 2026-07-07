import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { RatingStars } from "@/components/product/RatingStars";
import { getCategory } from "@/data/categories";
import type { Product } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const cover = product.images[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-card bg-white shadow-soft transition-shadow hover:shadow-lift">
      <Link
        href={`/urunler/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-cream"
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {product.bestSeller && <Badge tone="gold">Çok Satan</Badge>}
          {product.isNew && <Badge tone="new">Yeni</Badge>}
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-5">
        {category && (
          <span className="text-xs font-bold uppercase tracking-widest text-cocoa">
            {category.name}
          </span>
        )}
        <h3 className="font-display text-lg font-bold text-ink">
          <Link href={`/urunler/${product.slug}`} className="hover:text-gold">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-ink/60">
          {product.shortBenefit}
        </p>
        {product.rating != null && (
          <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
        )}

        <div className="mt-auto flex flex-col gap-2 pt-3">
          <Link
            href={`/urunler/${product.slug}`}
            className="rounded-full bg-jaune-500 px-5 py-2.5 text-center text-sm font-bold text-ink transition-colors hover:bg-jaune-400"
          >
            Detayları İncele
          </Link>
          {product.marketplaceLinks[0] && (
            <a
              href={product.marketplaceLinks[0].url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="rounded-full border border-ink/10 px-5 py-2.5 text-center text-sm font-semibold text-ink/70 transition-colors hover:border-gold hover:text-gold"
            >
              {product.marketplaceLinks[0].platform}&apos;da Satın Al
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
