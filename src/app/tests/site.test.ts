import {describe, expect, test} from "@jest/globals";
import {SITE_URL, canonicalUrl} from "@/lib/site";

describe("canonicalUrl", () => {
  test("builds an absolute URL from the site origin", () => {
    expect(SITE_URL).toBe("https://www.neilmillard.com");
    expect(canonicalUrl("/terms/")).toBe("https://www.neilmillard.com/terms/");
    expect(canonicalUrl("/")).toBe("https://www.neilmillard.com/");
  });
});
