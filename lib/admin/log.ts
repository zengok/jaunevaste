import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

/**
 * Admin giriş denemesi loglama (plan: "Giriş logları").
 *
 * MVP kapsamı: yerel dosya sistemine JSON-lines olarak yazar. Bu yalnızca
 * geleneksel/konteyner hosting için uygundur; serverless (Vercel gibi)
 * ortamlarda dosya sistemi kalıcı olmadığından bu, Sentry/Logtail gibi
 * harici bir log servisiyle değiştirilmeli (bkz. task.md Faz 5).
 */
const LOG_DIR = path.join(process.cwd(), "logs");
const LOG_FILE = path.join(LOG_DIR, "admin-login.log");

export interface LoginLogEntry {
  timestamp: string;
  email: string;
  success: boolean;
  stage: "password" | "totp";
  ip: string;
}

export async function logLoginAttempt(entry: LoginLogEntry): Promise<void> {
  try {
    await mkdir(LOG_DIR, { recursive: true });
    await appendFile(LOG_FILE, `${JSON.stringify(entry)}\n`, "utf8");
  } catch {
    // Loglama başarısız olsa bile giriş akışını bloke etmemeli.
  }
}
