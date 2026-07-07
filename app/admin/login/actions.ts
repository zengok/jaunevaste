"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import {
  PENDING_COOKIE,
  SESSION_COOKIE,
  checkAdminCredentials,
  createPendingToken,
  createSessionToken,
  verifyPendingToken,
} from "@/lib/admin/auth";
import { verifyTotpCode } from "@/lib/admin/totp";
import { isRateLimited } from "@/lib/admin/rateLimit";
import { logLoginAttempt } from "@/lib/admin/log";

async function requestIp(): Promise<string> {
  const h = await headers();
  return h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
}

export interface LoginState {
  error?: string;
}

export async function loginWithPassword(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");
  const ip = await requestIp();

  if (isRateLimited(`login:${ip}`, { limit: 8, windowMs: 10 * 60 * 1000 })) {
    return { error: "Çok fazla deneme yapıldı. Lütfen birkaç dakika sonra tekrar deneyin." };
  }

  const valid = checkAdminCredentials(email, password);
  await logLoginAttempt({
    timestamp: new Date().toISOString(),
    email,
    success: valid,
    stage: "password",
    ip,
  });

  if (!valid) {
    return { error: "E-posta veya şifre hatalı." };
  }

  const store = await cookies();
  store.set(PENDING_COOKIE, createPendingToken(email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 5 * 60,
  });

  redirect("/admin/login/verify");
}

export async function verifyTotpAndLogin(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const code = String(formData.get("code") ?? "");
  const ip = await requestIp();

  if (isRateLimited(`totp:${ip}`, { limit: 10, windowMs: 10 * 60 * 1000 })) {
    return { error: "Çok fazla deneme yapıldı. Lütfen birkaç dakika sonra tekrar deneyin." };
  }

  const store = await cookies();
  const pending = verifyPendingToken(store.get(PENDING_COOKIE)?.value);
  if (!pending) {
    redirect("/admin/login");
  }

  const secret = process.env.ADMIN_TOTP_SECRET;
  const valid = Boolean(secret) && verifyTotpCode(secret!, code);

  await logLoginAttempt({
    timestamp: new Date().toISOString(),
    email: pending.sub,
    success: valid,
    stage: "totp",
    ip,
  });

  if (!valid) {
    return { error: "Doğrulama kodu hatalı veya süresi dolmuş." };
  }

  store.delete(PENDING_COOKIE);
  store.set(SESSION_COOKIE, createSessionToken(pending.sub), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 8 * 60 * 60,
  });

  redirect("/admin");
}

export async function logout() {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  store.delete(PENDING_COOKIE);
  redirect("/admin/login");
}
