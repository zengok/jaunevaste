export function RatingStars({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount?: number;
}) {
  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} üzerinden 5 puan`}>
      <div className="flex" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`h-4 w-4 ${star <= Math.round(rating) ? "text-jaune-500" : "text-ink/15"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.28 3.95a1 1 0 0 0 .95.69h4.15c.97 0 1.37 1.24.59 1.81l-3.36 2.44a1 1 0 0 0-.36 1.12l1.28 3.95c.3.92-.75 1.69-1.54 1.12l-3.35-2.44a1 1 0 0 0-1.18 0l-3.35 2.44c-.79.57-1.84-.2-1.54-1.12l1.28-3.95a1 1 0 0 0-.36-1.12L2.08 9.38c-.78-.57-.38-1.81.59-1.81h4.15a1 1 0 0 0 .95-.69l1.28-3.95Z" />
          </svg>
        ))}
      </div>
      <span className="text-sm font-semibold text-ink">{rating.toFixed(1)}</span>
      {reviewCount != null && (
        <span className="text-sm text-ink/50">({reviewCount} yorum)</span>
      )}
    </div>
  );
}
