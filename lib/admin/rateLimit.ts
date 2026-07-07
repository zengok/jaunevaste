/**
 * Basit bellek-içi rate limiter.
 *
 * MVP kapsamı: tek process içinde çalışır, sunucu yeniden başlatıldığında
 * veya birden fazla instance'ta (serverless/otoscale) sıfırlanır/paylaşılmaz.
 * Prodüksiyonda bunun yerine Cloudflare Rate Limiting veya Upstash Redis
 * gibi paylaşımlı bir katman kullanılmalı (bkz. task.md Faz 5).
 */
interface Bucket {
  count: number;
  resetAt: number;
}

const buckets = new Map<string, Bucket>();

export function isRateLimited(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  bucket.count += 1;
  return bucket.count > limit;
}
