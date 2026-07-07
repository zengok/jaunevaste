import { NextResponse } from "next/server";

/**
 * Faz 4'te admin panel eklendiğinde bu proxy (middleware); oturum doğrulama,
 * rol bazlı erişim kontrolü ve IP kısıtlama kurallarıyla genişletilecek.
 * Şu an admin route'u bulunmadığı için no-op geçiş yapar.
 */
export function proxy() {
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
