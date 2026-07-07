/**
 * Güvenlik yapılandırma yardımcıları.
 *
 * Content-Security-Policy şu an next.config.ts içinde değil burada
 * derleniyor çünkü admin panel (Faz 4) eklendiğinde nonce tabanlı script-src
 * kullanılacak; o zamana kadar JSON-LD script etiketleri (bkz.
 * components/seo/JsonLd.tsx) inline çalıştığı için 'unsafe-inline' zorunlu.
 * Admin panel entegrasyonunda bu politika nonce ile sıkılaştırılmalı.
 */
export function buildContentSecurityPolicy() {
  // React geliştirme modunda call stack'leri yeniden oluşturmak için eval()
  // kullanır; bu yalnızca "next dev" sırasında gereklidir, production'da
  // React eval() kullanmaz.
  const scriptSrc =
    process.env.NODE_ENV === "development"
      ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
      : "script-src 'self' 'unsafe-inline'";

  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self' data:",
    "connect-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' mailto:",
  ].join("; ");
}
