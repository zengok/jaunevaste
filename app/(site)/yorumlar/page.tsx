import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ReviewCard } from "@/components/product/ReviewCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getReviews } from "@/lib/cms";

export const metadata: Metadata = buildMetadata({
  title: "Müşteri Yorumları",
  description:
    "Jaune Vaste kullanıcılarının gerçek deneyimleri. Lip balm, tırnak bakımı ve roll-on ürünleri hakkında müşteri yorumları ve değerlendirmeler.",
  path: "/yorumlar",
});

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Müşteri Yorumları", path: "/yorumlar" },
        ])}
      />
      <section className="bg-cream py-12 sm:py-16">
        <Container>
          <h1 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Müşteri Yorumları
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink/65">
            Kullanıcılarımızın gerçek deneyimleri. Kişisel veriler, KVKK
            kapsamında kullanıcı adları maskelenerek paylaşılmaktadır.
          </p>
        </Container>
      </section>
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <p className="mt-10 rounded-2xl bg-white p-5 text-center text-xs text-ink/50 shadow-soft">
            Yorumlar; resmi satış kanallarımızdaki gerçek müşteri
            değerlendirmelerinden, kişisel veriler maskelenerek ve kaynak
            belirtilerek derlenmektedir.
          </p>
        </Container>
      </section>
    </>
  );
}
