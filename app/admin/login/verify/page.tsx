import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PENDING_COOKIE, verifyPendingToken } from "@/lib/admin/auth";
import { VerifyForm } from "./VerifyForm";

export const metadata: Metadata = {
  title: "Doğrulama | Jaune Vaste Admin",
  robots: { index: false, follow: false },
};

export default async function VerifyPage() {
  const store = await cookies();
  const pending = verifyPendingToken(store.get(PENDING_COOKIE)?.value);
  if (!pending) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-ivory px-4 py-16">
      <div className="w-full max-w-sm rounded-card bg-white p-8 shadow-lift">
        <h1 className="font-display text-2xl font-bold text-ink">
          İki Adımlı Doğrulama
        </h1>
        <p className="mt-1 text-sm text-ink/55">
          Authenticator uygulamanızdaki 6 haneli kodu girin.
        </p>
        <div className="mt-6">
          <VerifyForm />
        </div>
      </div>
    </div>
  );
}
