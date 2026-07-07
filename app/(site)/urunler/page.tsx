import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProductCatalog } from "@/components/product/ProductCatalog";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getPublishedProducts } from "@/lib/cms";

export const metadata: Metadata = buildMetadata({
  title: "Ürünlerimiz | Dudak, Tırnak ve Kişisel Bakım",
  description:
    "Jaune Vaste ürün kataloğu: lip balm, tırnak bakım yağı, roll-on, kulak tıkacı ve daha fazlası. Kategoriye göre filtreleyin, size uygun ürünü keşfedin.",
  path: "/urunler",
});

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getPublishedProducts(),
    getCategories(),
  ]);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Ürünlerimiz", path: "/urunler" },
        ])}
      />
      <section className="bg-cream py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Ürünlerimiz
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink/65">
            Günlük bakım rutininizin her adımı için tasarlanmış Jaune Vaste
            ürünlerini keşfedin. Kategoriye göre filtreleyin veya arama yapın.
          </p>
        </Container>
      </section>
      <section className="py-10 sm:py-14">
        <Container>
          <ProductCatalog products={products} categories={categories} />
        </Container>
      </section>
    </>
  );
}
