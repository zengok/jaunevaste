"use client";

import { useActionState } from "react";
import { loginWithPassword, type LoginState } from "./actions";

const initialState: LoginState = {};

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginWithPassword, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-ink">E-posta</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="username"
          autoFocus
          className="mt-1.5 w-full rounded-xl border border-ink/10 bg-ivory px-4 py-3 text-sm focus:border-gold focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-ink">Şifre</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-xl border border-ink/10 bg-ivory px-4 py-3 text-sm focus:border-gold focus:outline-none"
        />
      </label>

      {state.error && (
        <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-jaune-500 px-6 py-3 text-sm font-bold text-ink shadow-soft transition-all hover:bg-jaune-400 disabled:opacity-60"
      >
        {pending ? "Kontrol ediliyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
