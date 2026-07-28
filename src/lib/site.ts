export const SITE_URL = "https://www.neilmillard.com";

export function canonicalUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
