import { RatingStars } from "@/components/product/RatingStars";
import type { Review } from "@/lib/types";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col gap-3 rounded-card bg-white p-6 shadow-soft">
      <RatingStars rating={review.rating} />
      <blockquote className="flex-1 text-sm leading-relaxed text-muted">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="flex items-center justify-between text-xs">
        <span className="font-bold text-ink">{review.maskedName}</span>
        <span className="rounded-full bg-soft px-3 py-1 font-semibold text-primary-soft">
          {review.source === "Manuel" ? "Doğrulanmış Yorum" : `Kaynak: ${review.source}`}
        </span>
      </figcaption>
    </figure>
  );
}
