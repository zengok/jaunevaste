import path from "node:path";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

/**
 * SQLite ile çalışan Prisma client (Prisma 7: bağlantı artık şema
 * dosyasında değil, bir "driver adapter" üzerinden kuruluyor).
 *
 * Prodüksiyonda PostgreSQL'e geçmek için:
 *  1. prisma/schema.prisma içinde `provider = "postgresql"` yapın
 *  2. `npm install @prisma/adapter-pg pg`
 *  3. Aşağıdaki adapter'ı `new PrismaPg({ connectionString: process.env.DATABASE_URL })` ile değiştirin
 *  4. Aynı değişikliği prisma.config.ts içinde de yapın
 *
 * Next.js dev modunda hot-reload sırasında yeni PrismaClient
 * instance'larının birikmesini önlemek için global singleton kullanılır.
 */
const DB_PATH = path.join(process.cwd(), "prisma", "dev.db");

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  const adapter = new PrismaBetterSqlite3({ url: `file:${DB_PATH}` });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
