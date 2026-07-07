import path from "node:path";
import { defineConfig } from "prisma/config";

/**
 * Prisma 7 CLI yapılandırması (migrate/db push/studio için).
 * Uygulama çalışma zamanındaki bağlantı lib/db.ts içindedir; bu dosya
 * yalnızca `npx prisma ...` komutları içindir.
 */
export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: `file:${path.join("prisma", "dev.db")}`,
  },
  migrations: {
    seed: "tsx prisma/seed.ts",
  },
});
