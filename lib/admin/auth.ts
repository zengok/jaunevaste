import { randomBytes, scryptSync, timingSafeEqual, createHmac } from "node:crypto";
import { PENDING_COOKIE, SESSION_COOKIE } from "@/lib/admin/constants";

/**
 * Admin panel kimlik doğrulama katmanı.
 *
 * MVP kapsamı: tek admin hesabı, ortam değişkenleriyle yapılandırılır
 * (henüz kullanıcı veritabanı yok — bkz. task.md Faz 4). Oturum,
 * bağımlılık eklemeden Node'un yerleşik `crypto` modülüyle imzalanmış
 * bir cookie olarak tutulur: `base64url(payload).base64url(hmac)`.
 *
 * Çoklu kullanıcı / rol yönetimi CMS entegrasyonu ile birlikte gelecek;
 * bu yüzden oturum payload'ı şimdiden bir `role` alanı taşır.
 *
 * Bu dosya node:crypto kullandığı için Edge runtime'da (proxy.ts) import
 * EDİLMEMELİDİR — cookie adı sabitleri için lib/admin/constants.ts kullanın.
 */

export { SESSION_COOKIE, PENDING_COOKIE };

const SESSION_TTL_SECONDS = 8 * 60 * 60; // 8 saat — plan: "oturum süresi sınırı"
const PENDING_TTL_SECONDS = 5 * 60; // şifre doğru, 2FA kodu bekleniyor

export interface SessionPayload {
  sub: string; // admin e-posta
  role: "admin";
  iat: number;
  exp: number;
}

interface PendingPayload {
  sub: string;
  iat: number;
  exp: number;
}

function getSessionSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET tanımlı değil. .env.example dosyasına bakın."
    );
  }
  return secret;
}

function base64url(input: Buffer | string) {
  return Buffer.from(input).toString("base64url");
}

function sign(payload: string): string {
  return createHmac("sha256", getSessionSecret()).update(payload).digest("base64url");
}

function encodeToken<T>(payload: T): string {
  const encoded = base64url(JSON.stringify(payload));
  return `${encoded}.${sign(encoded)}`;
}

function decodeToken<T extends { exp: number }>(token: string | undefined | null): T | null {
  if (!token) return null;
  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const expected = sign(encoded);
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as T;
    if (typeof payload.exp !== "number" || payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

export function createSessionToken(email: string): string {
  const now = Math.floor(Date.now() / 1000);
  return encodeToken<SessionPayload>({
    sub: email,
    role: "admin",
    iat: now,
    exp: now + SESSION_TTL_SECONDS,
  });
}

export function verifySessionToken(token: string | undefined | null): SessionPayload | null {
  return decodeToken<SessionPayload>(token);
}

/** Şifre doğru, 2FA kodu bekleniyor — kısa ömürlü ara token. */
export function createPendingToken(email: string): string {
  const now = Math.floor(Date.now() / 1000);
  return encodeToken<PendingPayload>({ sub: email, iat: now, exp: now + PENDING_TTL_SECONDS });
}

export function verifyPendingToken(token: string | undefined | null): PendingPayload | null {
  return decodeToken<PendingPayload>(token);
}

/** Ortam değişkeninde saklanan `salt:hash` formatını doğrular. */
export function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const stored = Buffer.from(hash, "hex");
  return candidate.length === stored.length && timingSafeEqual(candidate, stored);
}

/** `scripts/generate-admin-credentials.mjs` tarafından kullanılır. */
export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

export function checkAdminCredentials(email: string, password: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminHash = process.env.ADMIN_PASSWORD_HASH;
  if (!adminEmail || !adminHash) return false;
  // E-posta karşılaştırması sabit zamanlı olmak zorunda değil (gizli değil),
  // ancak şifre karşılaştırması her zaman verifyPassword üzerinden yapılır.
  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) return false;
  return verifyPassword(password, adminHash);
}
