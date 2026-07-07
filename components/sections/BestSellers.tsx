import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/lib/types";

export function BestSellers({ products }: { products: Product[] }) {
  if (products.length === 0) return null;
  return (
    <section id="cok-satanlar" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Çok Satanlar"
          title="En çok tercih edilen ürünler"
          description="Pazaryerlerinde binlerce kullanıcının günlük rutinine giren Jaune Vaste ürünleri."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/urunler" variant="secondary">
            Tüm Ürünleri Gör
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
