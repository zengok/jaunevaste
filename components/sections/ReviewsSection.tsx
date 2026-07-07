import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ReviewCard } from "@/components/product/ReviewCard";
import type { Review } from "@/lib/types";

export function ReviewsSection({ reviews }: { reviews: Review[] }) {
  if (reviews.length === 0) return null;
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Müşteri Yorumları"
          title="Kullananlar ne diyor?"
          description="Gerçek kullanıcı deneyimleri; kişisel veriler KVKK gereği maskelenerek paylaşılır."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <ButtonLink href="/yorumlar" variant="outline">
            Tüm Yorumları Oku
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
