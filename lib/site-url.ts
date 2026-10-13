/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL to the production domain once it is known.
 * On Vercel this falls back to the project's production URL, then to the deployment URL.
 */
function resolve(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteUrl = resolve();
