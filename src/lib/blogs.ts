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
        date: data.date,
      };
    }
  }).filter(n => n.title); // chop the null values

  return blogs.sort((a, b) =>
    sortOrder === "newest"
    ? new Date(b.date).getTime() - new Date(a.date).getTime()
    : new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

// Function to replace Jekyll-style image includes with JSX interpolation
function replaceImageIncludes(content: string): string {
  // Regular expression to match {% include image.html ... %} tags
  const includeRegex = /{% include image\.html\s+(.*?)%}/gs;

  // First, replace Jekyll-style image includes
  let processedContent = content.replace(includeRegex, (match, params) => {
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
  const markdownImageRegex = /!\[(.*?)\]\((\/public\/img\/[^)]+)\)/g;
  processedContent = processedContent.replace(markdownImageRegex, (match, alt, imgPath) => {
    const newImgPath = imgPath.replace('/public/img', '/img');
    return `![${alt}](${newImgPath})`;
  });

  return processedContent;
}

export async function getBlogPost(id: string) {
  const filePath = path.join(POSTS_DIR, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContents);

  // Replace Jekyll-style image includes with JSX interpolation
  const processedContent = replaceImageIncludes(content);

  return {
    id,
    title: data.title,
    date: data.date,
    content: processedContent,
  };
}

export function getAdjacentBlogPosts(id: string) {
  const blogs = getAllBlogPosts("oldest");
  const index = blogs.findIndex((blog) => blog.id === id);

  const previous = index > 0 ? blogs[index - 1] : null;
  const next = index < blogs.length - 1 ? blogs[index + 1] : null;

  return {previous, next};
}
