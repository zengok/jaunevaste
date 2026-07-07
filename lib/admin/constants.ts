/**
 * Edge runtime'da da (proxy.ts) güvenle import edilebilecek sabitler.
 * node:crypto kullanan asıl doğrulama mantığı lib/admin/auth.ts içindedir.
 */
export const SESSION_COOKIE = "jv_admin_session";
export const PENDING_COOKIE = "jv_admin_pending";
