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

  // Legacy blog post ids (YYYY-MM-DD-slug, matching a file in _posts) found 404ing
  // under their old Jekyll permalink in GA4 (property 375234701) — the original
  // single-day sample plus the follow-up 30-day pull.
  const legacyPostIds = [
    "2016-10-05-what-is-cloud-computing",
    "2017-04-29-aws-limits",
    "2017-06-17-version-control-and-bundles",
    "2019-01-25-four-steps-automate",
    "2019-02-08-four-steps-data",
    "2022-06-12-what-is-a-devops-engineer",
    "2022-10-23-platform-engineering-is-not-devops",
    "2024-08-14-DevOps-and-CI-CD",
    "2016-10-11-automation-puppet-code-and-schedules",
    "2022-12-04-what-fish-teach-us-about-async",
    "2022-07-03-freelance-what-is-stopping-you",
    "2019-01-11-four-steps-intro",
    "2022-08-28-optimised-technologist-delivery",
    "2017-03-31-docker-swarm",
    "2022-07-17-multi-cloud-is-bad",
    "2022-07-31-workspace-offline-and-online",
    "2017-06-25-saving-money-in-aws",
    "2022-07-09-developer-experience",
    "2022-09-11-where-to-start-with-cloud-security",
    "2022-11-06-devops-and-hybrid-cloud",
    "2023-02-05-what-is-gitops",
    "2019-02-01-four-steps-scale",
    "2015-12-30-what-does-a-devops-engineer-do",
    "2016-01-15-heartbeat-networks-on-aws",
    "2016-03-23-are-lawyers-deprecated",
    "2016-05-28-what-does-devops-or-the-ops-team-do",
    "2016-09-24-rs_tag-for-rightscale-rl10",
    "2017-02-11-getting-authenticated-with-mongo",
    "2017-02-18-security-groups",
    "2017-02-25-do-you-have-fun-at-work",
    "2017-03-18-persistent-data-docker-and-cloud",
    "2017-08-19-what-is-devops",
    "2017-09-16-what-does-immutable-mean",
    "2018-09-15-devops-getting-servers-to-build-themselves-in-aws",
    "2019-01-18-four-steps-design",
    "2020-11-09-What-is-a-digital-platform",
    "2022-06-19-i-am-a-squirrel",
    "2022-06-25-my-name-is",
    "2022-08-07-run-your-own-serverless",
    "2022-11-13-lift-and-shift",
    "2022-11-20-sre-and-canary",
    "2023-01-29-azure-outage",
    "2023-02-19-staying-technical",
    "2023-03-05-no1mistakecontrating",
    "2023-03-12-leaping-into-contracting",
    "2023-04-02-3cs-cashflow",
    "2023-04-09-3cs-contracts",
    "2023-04-16-3cs-confidence",
    "2023-04-30-setting-up-cloudfront",
    "2023-05-14-coaching",
    "2024-03-23-Anatomy-of-a-live-deployment",
    "2016-01-20-scaling-up-or-scaling-out-aws-choices",
    "2017-04-08-hashicorp-nomad",
    "2021-03-24-where-do-containers-live",
    "2022-08-21-learning-devops",
    "2023-03-26-3cs-compliance",
  ];

  function legacyPathForms(id: string): string[] {
    const [y, m, d, ...slugParts] = id.split("-");
    const slug = slugParts.join("-");
    const base = `/${y}/${m}/${d}/${slug}`;
    return [`${base}.html`, base, `${base}/`];
  }

  test("covers every legacy post id with no duplicate ids", () => {
    expect(new Set(legacyPostIds).size).toBe(legacyPostIds.length);
  });

  test.each(legacyPostIds)("every URL form of %s post redirects with a 301 to the post", (id) => {
    expect(fs.existsSync(path.join(postsDir, `${id}.md`))).toBe(true);

    for (const from of legacyPathForms(id)) {
      const rule = rules.find(([source]) => source === from);
      expect(rule).toBeDefined();
      expect(rule?.[1]).toBe(`/blog/${id}/`);
      expect(rule?.[2]).toBe("301");
    }
  });

  test.each(["/tags", "/tags/"])("%s redirects to the blog listing with a 301", (from) => {
    const rule = rules.find(([source]) => source === from);
    expect(rule).toBeDefined();
    expect(rule?.[1]).toBe("/blog/newest/");
    expect(rule?.[2]).toBe("301");
  });
});
