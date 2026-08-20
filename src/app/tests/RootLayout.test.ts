import { readFileSync } from "fs";
import { join } from "path";

describe("RootLayout head markup", () => {
  const layoutSource = readFileSync(
    join(__dirname, "../layout.tsx"),
    "utf-8"
  );

  test("does not hardcode a <title> tag in the head", () => {
    // Next's Metadata API already renders <title> from `export const metadata`
    // (and each page's own metadata/generateMetadata). A hardcoded <title> in
    // the layout's JSX head renders alongside it, producing two <title> tags
    // per page.
    expect(layoutSource).not.toMatch(/<title>/);
  });

  test("still exports metadata with a site-wide default title", () => {
    expect(layoutSource).toMatch(/export const metadata: Metadata = {/);
    expect(layoutSource).toMatch(/title:\s*"Neil Millard"/);
  });

  test("uses the GoogleAnalytics component for the GA4 measurement ID", () => {
    // G-C5CKFSXQSX is a GA4 measurement ID, not a GTM container ID (GTM-XXXXXXX).
    // The GoogleTagManager component loads gtm.js, which never calls
    // gtag('js', ...) / gtag('config', ...) for a GA4 ID — that's the mismatch
    // Google's compliance warning flagged. GoogleAnalytics loads gtag.js and
    // calls gtag('config', gaId) directly, which is the supported method.
    expect(layoutSource).toMatch(
      /import\s*{\s*GoogleAnalytics\s*}\s*from\s*"@next\/third-parties\/google"/
    );
    expect(layoutSource).toMatch(/<GoogleAnalytics gaId="G-C5CKFSXQSX"\s*\/>/);
    expect(layoutSource).not.toMatch(/GoogleTagManager/);
  });
});
