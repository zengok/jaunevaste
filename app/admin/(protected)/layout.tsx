import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/admin/auth";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function ProtectedAdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const store = await cookies();
  const session = verifySessionToken(store.get(SESSION_COOKIE)?.value);

  if (!session) {
    redirect("/admin/login");
  }

  return <AdminShell email={session.sub}>{children}</AdminShell>;
}
