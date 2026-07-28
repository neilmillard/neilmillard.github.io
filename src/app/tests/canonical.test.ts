import {describe, expect, test} from "@jest/globals";
import {metadata as rootMetadata} from "@/app/layout";
import {metadata as aboutMetadata} from "@/app/about/page";
import {metadata as blogNewestMetadata} from "@/app/blog/newest/page";
import {metadata as blogOldestMetadata} from "@/app/blog/oldest/page";
import {metadata as bookMetadata} from "@/app/book/page";
import {metadata as clockMetadata} from "@/app/clock/page";
import {metadata as contactMetadata} from "@/app/contact/page";
import {metadata as deploysMetadata} from "@/app/deploys/page";
import {metadata as devopsMetadata} from "@/app/devops/page";
import {metadata as glossaryMetadata} from "@/app/glossary/page";
import {metadata as privacyMetadata} from "@/app/privacy/page";
import {metadata as termsMetadata} from "@/app/terms/page";
import {generateMetadata as generateBlogPostMetadata} from "@/app/blog/[id]/page";
import {SITE_URL} from "@/lib/site";

describe("canonical tags", () => {
  test("root layout sets a metadataBase matching the site origin and canonicalizes the home page", () => {
    expect(rootMetadata.metadataBase?.toString()).toBe(`${SITE_URL}/`);
    expect(rootMetadata.alternates?.canonical).toBe("/");
  });

  test.each([
    ["about", aboutMetadata, "/about/"],
    ["blog/newest", blogNewestMetadata, "/blog/newest/"],
    ["blog/oldest", blogOldestMetadata, "/blog/oldest/"],
    ["book", bookMetadata, "/book/"],
    ["clock", clockMetadata, "/clock/"],
    ["contact", contactMetadata, "/contact/"],
    ["deploys", deploysMetadata, "/deploys/"],
    ["devops", devopsMetadata, "/devops/"],
    ["glossary", glossaryMetadata, "/glossary/"],
    ["privacy", privacyMetadata, "/privacy/"],
    ["terms", termsMetadata, "/terms/"],
  ])("%s page declares a trailing-slash canonical URL", (_name, metadata, expected) => {
    expect(metadata.alternates?.canonical).toBe(expected);
  });

  test("blog post pages declare a canonical URL matching their id", async () => {
    const metadata = await generateBlogPostMetadata({params: Promise.resolve({id: "some-post"})});
    expect(metadata.alternates?.canonical).toBe("/blog/some-post/");
  });
});
