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
});
