import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import type { Category } from "@/lib/types";

const categoryIcons: Record<string, string> = {
  "dudak-bakimi": "💄",
  "tirnak-bakimi": "💅",
  "kisisel-bakim": "🧴",
  "roll-on": "✨",
  "kulak-tikaci": "😴",
  parfum: "🌸",
};

export function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Kategoriler"
          title="İhtiyacına göre keşfet"
          description="Dudak bakımından kulak tıkacına, günlük rutinin her adımı için tasarlanmış ürünler."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const inner = (
              <>
                <span className="text-4xl" aria-hidden="true">
                  {categoryIcons[category.slug] ?? "🌿"}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{category.tagline}</p>
                </div>
                {category.comingSoon && (
                  <Badge tone={category.slug === "parfum" ? "berry" : "ink"}>
                    Yakında
                  </Badge>
                )}
              </>
            );
            const cardClass =
              "flex h-full flex-col items-start gap-4 rounded-card bg-white p-6 shadow-soft transition-all sm:p-8";

            return category.comingSoon ? (
              <div key={category.slug} className={`${cardClass} opacity-75`}>
                {inner}
              </div>
            ) : (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className={`${cardClass} group hover:-translate-y-1 hover:shadow-lift`}
              >
                {inner}
                <span className="mt-auto text-sm font-bold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ürünleri gör →
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
