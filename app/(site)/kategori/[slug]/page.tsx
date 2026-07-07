import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ProductCard } from "@/components/product/ProductCard";
import { Badge } from "@/components/ui/Badge";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/cms";
import { categories } from "@/data/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.seo.title,
    description: category.seo.description,
    path: `/kategori/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const products = await getProductsByCategory(category.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Ürünlerimiz", path: "/urunler" },
          { name: category.name, path: `/kategori/${category.slug}` },
        ])}
      />
      <section className="bg-soft py-12 sm:py-16">
        <Container>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {category.name}
            </h1>
            {category.comingSoon && (
              <Badge tone={category.slug === "parfum" ? "berry" : "ink"}>
                Yakında
              </Badge>
            )}
          </div>
          <p className="mt-3 max-w-2xl text-base text-muted">
            {category.description}
          </p>
        </Container>
      </section>
      <section className="py-10 sm:py-14">
        <Container>
          {products.length === 0 ? (
            <div className="rounded-card bg-white p-12 text-center shadow-soft">
              <p className="font-display text-xl font-bold text-ink">
                {category.comingSoon
                  ? "Bu koleksiyon çok yakında sizlerle."
                  : "Bu kategoride henüz ürün bulunmuyor."}
              </p>
              <p className="mt-2 text-sm text-muted">
                Yeniliklerden haberdar olmak için bizi Instagram üzerinden takip
                edebilirsiniz.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
