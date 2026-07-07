import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin Girişi | Jaune Vaste",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-ivory px-4 py-16">
      <div className="w-full max-w-sm rounded-card bg-white p-8 shadow-lift">
        <Link href="/" className="flex items-baseline gap-1">
          <span className="font-display text-xl font-bold text-primary">Jaune</span>
          <span className="font-display text-xl font-bold text-primary-soft">Vaste</span>
        </Link>
        <h1 className="mt-6 font-display text-2xl font-bold text-ink">Admin Girişi</h1>
        <p className="mt-1 text-sm text-muted">
          Devam etmek için e-posta ve şifrenizi girin.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
