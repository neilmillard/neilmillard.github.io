import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {BlogPostShort} from "@/app/components/blog/BlogPost";

const POSTS_DIR = path.join(process.cwd(), "_posts");

export function getAllBlogPosts(sortOrder: "newest" | "oldest" = "newest"): BlogPostShort[] {
  const files = fs.readdirSync(POSTS_DIR);
  const today = new Date();

  const blogs:BlogPostShort[] =  files.map((file) => {
    const filePath = path.join(POSTS_DIR, file);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);

    if (new Date(data.date) > today){
      return { id: "",
        title: null,
        date: null,
      };
    } else {
      return {
        id: file.replace(/\.md$/, ""),
        title: data.title,
        date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
      };
    }
  }).filter(n => n.title); // chop the null values

  return blogs.sort((a, b) =>
    sortOrder === "newest"
    ? new Date(b.date).getTime() - new Date(a.date).getTime()
    : new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

// Function to replace leftover Jekyll `{{site.data...}}` tokens that never got interpolated
// after the migration away from Jekyll (the `_data` files backing them no longer exist).
export function replaceSiteDataTokens(content: string): string {
  return content
    .replace(/{{\s*site\.data\.slack\.invite\s*}}/g, '/contact/')
    .replace(/{{\s*site\.data\.youtube\.channel\s*}}/g, 'https://www.youtube.com/channel/UCAaoh3jk1qtvD3ALPp48_8w/');
}

// Function to replace leftover Jekyll `{{ site.url }}` tokens: legacy YYYY/MM/DD/slug.html
// permalinks -> current /blog/<id>/ routes, /public/img paths -> /img, and any remaining
// bare token -> the site root.
export function replaceLegacySiteUrls(content: string): string {
  return content
    .replace(
      /{{\s*site\.url\s*}}\/(\d{4})\/(\d{2})\/(\d{2})\/([\w-]+)\.html/g,
      (_match, year, month, day, slug) => `/blog/${year}-${month}-${day}-${slug}/`
    )
    .replace(/{{\s*site\.url\s*}}\/public\/img\//g, '/img/')
    .replace(/{{\s*site\.url\s*}}/g, '/');
}

// Function to replace leftover Jekyll `{% include ... %}` tags whose _includes source files
// were deleted in the migration away from Jekyll, with the HTML they used to render.
export function replaceJekyllIncludes(content: string): string {
  return content
    .replace(
      /{%\s*include\s+book_info\.html\s*%}/g,
      '<div><p>Read <a href="/book/">Who Moved My Servers</a>. Available from Amazon in ' +
      '<a href="https://amzn.to/2HxjFXf">Paperback</a> and <a href="https://amzn.to/2RbKKig">Kindle</a> now.</p></div>'
    )
    .replace(
      /{%\s*include\s+youtube\.html\s+ref="([^"]+)"\s*%}/g,
      (_match, ref) => `<iframe width="560" height="315" src="https://www.youtube.com/embed/${ref}" frameborder="0" allowfullscreen></iframe>`
    );
}

// Function to replace Jekyll's `{% highlight lang %}...{% endhighlight %}` code blocks
// (the highlighter that rendered them was dropped in the migration away from Jekyll)
// with standard Markdown fenced code blocks.
export function replaceHighlightTags(content: string): string {
  return content
    .replace(/{%\s*highlight\s+(\w+)\s*%}\n?/g, '```$1\n')
    .replace(/\n?{%\s*endhighlight\s*%}/g, '\n```');
}

// Function to replace Jekyll-style image includes with JSX interpolation and process Markdown
function replaceImageIncludes(content: string): string {
  // Regular expression to match {% include image.html ... %} tags
  const includeRegex = /{% include image\.html([\s\S]+?)%}/g;

  // First, replace Jekyll-style image includes
  let processedContent = content.replace(includeRegex, (_match, params) => {
    // Extract parameters from the include tag
    const imgMatch = params.match(/img="([^"]+)"/);
    const captionMatch = params.match(/caption="([^"]+)"/);
    const urlMatch = params.match(/url="([^"]+)"/);
    const titleMatch = params.match(/title="([^"]+)"/);

    // Get parameter values or set to undefined if not present
    let img = imgMatch ? imgMatch[1] : undefined;
    const caption = captionMatch ? captionMatch[1] : undefined;
    const url = urlMatch ? urlMatch[1] : undefined;
    const title = titleMatch ? titleMatch[1] : undefined;

    // Update image path from /public/img to /img
    if (img && img.startsWith('/public/img')) {
      img = img.replace('/public/img', '/img');
    }

    // Create JSX for the ImageWrapper component
    return `<ImageWrapper img="${img}" ${caption ? `caption="${caption}"` : ''} ${url ? `url="${url}"` : ''} ${title ? `title="${title}"` : ''} />`;
  });

  // Also replace standard Markdown image syntax
  const markdownImageRegex = /!\[(.*?)]\((\/public\/img\/[^)]+)\)/g;
  processedContent = processedContent.replace(markdownImageRegex, (_match, alt, imgPath) => {
    const newImgPath = imgPath.replace('/public/img', '/img');
    return `![${alt}](${newImgPath})`;
  });

  // Convert underlined headers (===== or ----- style) to standard Markdown headers (# style)
  // This regex looks for a line of text followed by a line of equals signs (h1) or dashes (h2)
  // The regex is more flexible to handle various formatting cases
  const h1HeaderRegex = /^([^\n=]+)\n=+\s*$/gm;
  processedContent = processedContent.replace(h1HeaderRegex, (_match, title) => {
    return `# ${title.trim()}`;
  });

  const h2HeaderRegex = /^([^\n-]+)\n-+\s*$/gm;
  processedContent = processedContent.replace(h2HeaderRegex, (_match, title) => {
    return `## ${title.trim()}`;
  });

  // Additional regex to handle headers that might have different formatting
  // This handles cases where there might be multiple newlines or other variations
  const h1HeaderRegex2 = /^([^\n=]+)\n+={3,}\s*$/gm;
  processedContent = processedContent.replace(h1HeaderRegex2, (_match, title) => {
    return `# ${title.trim()}`;
  });

  const h2HeaderRegex2 = /^([^\n-]+)\n+-{3,}\s*$/gm;
  processedContent = processedContent.replace(h2HeaderRegex2, (_match, title) => {
    return `## ${title.trim()}`;
  });

  return processedContent;
}

export async function getBlogPost(id: string) {
  const filePath = path.join(POSTS_DIR, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  // Replace Jekyll-style image includes with JSX interpolation
  const processedContent = replaceImageIncludes(
    replaceHighlightTags(replaceJekyllIncludes(replaceLegacySiteUrls(replaceSiteDataTokens(content))))
  );

  return {
    id,
    title: data.title,
    date: data.date instanceof Date ? data.date.toISOString().split('T')[0] : data.date,
    content: processedContent,
    image: data.image ?? null,
  };
}

export function getAdjacentBlogPosts(id: string) {
  const blogs = getAllBlogPosts("oldest");
  const index = blogs.findIndex((blog) => blog.id === id);

  const previous = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;

  return {previous, next};
}
