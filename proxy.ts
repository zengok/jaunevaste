import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE } from "@/lib/admin/constants";

/**
 * Admin route'ları için hızlı ön kontrol.
 *
 * Burada yalnızca session cookie'sinin VARLIĞI kontrol edilir; imza/süre
 * doğrulaması (node:crypto) burada değil, app/admin/(protected)/layout.tsx
 * içinde yapılır — çünkü proxy varsayılan olarak Edge runtime'da çalışır ve
 * Edge runtime `node:crypto`'yu güvenilir şekilde desteklemez. Asıl
 * yetkilendirme kapısı bu yüzden layout'tadır; bu proxy sadece çerezi
 * olmayan istekleri erken adımda login sayfasına yönlendiren bir UX
 * optimizasyonudur.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const hasSessionCookie = request.cookies.has(SESSION_COOKIE);
  if (!hasSessionCookie) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
