export const SITE_URL = "https://neilmillard.com";

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
