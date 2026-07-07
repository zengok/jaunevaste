"use client";

import { useActionState } from "react";
import { verifyTotpAndLogin, type LoginState } from "../actions";

const initialState: LoginState = {};

export function VerifyForm() {
  const [state, formAction, pending] = useActionState(verifyTotpAndLogin, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <label className="block">
        <span className="text-sm font-semibold text-ink">Doğrulama Kodu</span>
        <input
          type="text"
          name="code"
          inputMode="numeric"
          pattern="[0-9]{6}"
          maxLength={6}
          required
          autoFocus
          placeholder="123456"
          className="mt-1.5 w-full rounded-xl border border-ink/10 bg-ivory px-4 py-3 text-center text-lg tracking-[0.5em] focus:border-gold focus:outline-none"
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
        {pending ? "Doğrulanıyor..." : "Doğrula ve Giriş Yap"}
      </button>
    </form>
  );
}
