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

describe("_redirects", () => {
  const postsDir = path.join(__dirname, "../../../_posts");
  const content = fs.readFileSync(path.join(publicDir, "_redirects"), "utf-8");
  const rules = content
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => line.split(/\s+/));

  const legacyPaths = [
    "/2016/10/05/what-is-cloud-computing.html",
    "/2017/04/29/aws-limits/",
    "/2017/06/17/version-control-and-bundles.html",
    "/2019/01/25/four-steps-automate.html",
    "/2019/02/08/four-steps-data",
    "/2022/06/12/what-is-a-devops-engineer.html",
    "/2022/10/23/platform-engineering-is-not-devops.html",
    "/2024/08/14/DevOps-and-CI-CD.html",
    "/2016/10/11/automation-puppet-code-and-schedules",
    "/2022/12/04/what-fish-teach-us-about-async",
  ];

  test.each(legacyPaths)("redirects %s with a 301", (from) => {
    const rule = rules.find(([source]) => source === from);
    expect(rule).toBeDefined();
    expect(rule?.[2]).toBe("301");
  });

  test.each(legacyPaths)("%s redirects to a blog post that exists", (from) => {
    const rule = rules.find(([source]) => source === from);
    const to = rule?.[1] ?? "";
    const id = to.replace(/^\/blog\//, "").replace(/\/$/, "");
    expect(fs.existsSync(path.join(postsDir, `${id}.md`))).toBe(true);
  });
});
