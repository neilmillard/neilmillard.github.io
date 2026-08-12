import type {Metadata} from "next";
import {getAdjacentBlogPosts, getAllBlogPosts, getBlogPost} from "@/lib/blogs";
import {buildMetaDescription} from "@/lib/seo";
import BlogPost, {BlogPostShort} from "@/app/components/blog/BlogPost";
import {BlogNav} from "@/app/components/blog/BlogNav";
import ContactForm from "@/app/components/ContactForm";

const CONTACT_API_URL = "/api/contact";

const BLOG_CONTACT_FRAMING: Record<string, string> = {
  "2026-06-28-do-you-really-need-kubernetes":
    "ECS or Kubernetes — still not sure which fits your team? Tell me about your setup and I'll give you an honest answer.",
};

export async function generateMetadata({ params, }: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const {id} = await params;
  const blog = await getBlogPost(id);
  return {
    title: `${blog.title} | Neil Millard`,
    description: buildMetaDescription(blog.content),
  };
}

export default async function BlogPage({ params, }: {
  params: Promise<{ id: string }>
}) {
  const {id} = await params
  const blog = await getBlogPost(id);
  const {previous, next} = getAdjacentBlogPosts(id);
  const framingQuestion = BLOG_CONTACT_FRAMING[id];

  return (
    <div className={"max-w-2x1 mx-auto pt-6"}>
      <BlogNav previous={previous} next={next}/>

      <BlogPost title={blog.title} date={blog.date} content={blog.content} image={blog.image}/>

      <BlogNav previous={previous} next={next}/>

      {framingQuestion && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-center mb-2">{framingQuestion}</h2>
          <ContactForm apiUrl={CONTACT_API_URL}/>
        </div>
      )}
    </div>
  );
}

export async function generateStaticParams() {
  const blogs = getAllBlogPosts();
  return blogs.map((blog: BlogPostShort) => ({id: blog.id}));
}
