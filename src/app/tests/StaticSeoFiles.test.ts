import fs from "fs";
import path from "path";
import {describe, test, expect} from "@jest/globals";

const publicDir = path.join(__dirname, "../../../public");

describe("robots.txt", () => {
  const content = fs.readFileSync(path.join(publicDir, "robots.txt"), "utf-8");

  test("allows all crawlers by default", () => {
    expect(content).toMatch(/User-agent: \*[\s\S]*?Allow: \//);
  });

  test("explicitly allows known AI crawlers", () => {
    for (const bot of ["GPTBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "CCBot", "PerplexityBot"]) {
      expect(content).toContain(`User-agent: ${bot}`);
    }
  });

  test("does not disallow any AI crawler", () => {
    expect(content).not.toMatch(/Disallow/);
  });
});

describe("llms.txt", () => {
  const content = fs.readFileSync(path.join(publicDir, "llms.txt"), "utf-8");

  test("starts with an H1 title", () => {
    expect(content.split("\n")[0]).toMatch(/^# /);
  });

  test("links to key site pages", () => {
    for (const href of ["/about/", "/blog/", "/devops/", "/contact/"]) {
      expect(content).toContain(href);
    }
  });
});
