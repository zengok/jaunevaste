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
          className="mt-1.5 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </label>
      <label className="block">
        <span className="text-sm font-semibold text-ink">Şifre</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          className="mt-1.5 w-full rounded-xl border border-hairline bg-ivory px-4 py-3 text-sm focus:border-primary focus:outline-none"
        />
      </label>

      {state.error && (
        <p role="alert" className="rounded-xl bg-error/10 px-4 py-3 text-sm text-error">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-soft transition-all hover:bg-primary-hover disabled:opacity-60"
      >
        {pending ? "Kontrol ediliyor..." : "Giriş Yap"}
      </button>
    </form>
  );
}
