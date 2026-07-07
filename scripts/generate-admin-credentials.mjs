#!/usr/bin/env node
/**
 * Admin panel için .env.local değerlerini üretir:
 *   node scripts/generate-admin-credentials.mjs "guclu-bir-sifre"
 *
 * Çıktıdaki ADMIN_TOTP_SECRET'i bir authenticator uygulamasına (Google
 * Authenticator, 1Password, Authy vb.) otpauth:// URI'sini QR koda
 * çevirerek veya manuel olarak Base32 secret'ı girerek ekleyin.
 */
import { randomBytes, scryptSync } from "node:crypto";

const password = process.argv[2];
if (!password) {
  console.error('Kullanım: node scripts/generate-admin-credentials.mjs "sifre"');
  process.exit(1);
}

function hashPassword(pw) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(pw, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
function base32Encode(buffer) {
  let bits = "";
  for (const byte of buffer) bits += byte.toString(2).padStart(8, "0");
  let output = "";
  for (let i = 0; i + 5 <= bits.length; i += 5) {
    output += BASE32_ALPHABET[parseInt(bits.slice(i, i + 5), 2)];
  }
  return output;
}

const passwordHash = hashPassword(password);
const totpSecret = base32Encode(randomBytes(20));
const sessionSecret = randomBytes(32).toString("hex");

console.log("\n# .env.local dosyasına ekleyin:\n");
console.log(`ADMIN_EMAIL=admin@jaunevaste.com`);
console.log(`ADMIN_PASSWORD_HASH=${passwordHash}`);
console.log(`ADMIN_TOTP_SECRET=${totpSecret}`);
console.log(`ADMIN_SESSION_SECRET=${sessionSecret}`);
console.log(
  `\n# Authenticator uygulamasına eklemek için otpauth URI (issuer: Jaune Vaste):\n`
);
console.log(
  `otpauth://totp/Jaune%20Vaste%20Admin?secret=${totpSecret}&issuer=Jaune%20Vaste&digits=6&period=30`
);
