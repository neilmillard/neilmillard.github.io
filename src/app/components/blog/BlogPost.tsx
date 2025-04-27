import Markdown from "markdown-to-jsx";
import {Fragment} from "react";
import ImageWrapper from "@/app/components/ImageWrapper";

export type BlogPostProps = {
  title: string;
  date: string;
  content: string;
};

export type BlogPostShort = {
  id: string;
  title: string;
  date: string
}

export default function BlogPost({ title, date, content }: BlogPostProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-xs font-bold">{title}</h1>
      <p className="text-gray-500 text-sm">{date}</p>
      <div className="mt-4 text-lg">
        <article className="prose">
          <Markdown options={{
            wrapper: Fragment,
            overrides: {
              ImageWrapper: {
                component: ImageWrapper
              }
            }
          }}>
            {content}
          </Markdown>
        </article>
      </div>
    </div>
  );
}

