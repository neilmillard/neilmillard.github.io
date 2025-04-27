import Link from "next/link";
import {BlogPostShort} from "@/app/components/blog/BlogPost";

export function BlogNav(props: { previous: BlogPostShort | null, next: BlogPostShort | null }) {
  return <div className={"w-[83%] mx-auto mt-6 grid grid-cols-3 text-blue-500"}>
    <div className={"text-left"}>
      {props.previous ? (
        <Link href={`/blog/${props.previous.id}`} className={"hover:underline"}>
          &lt;- {props.previous.title}
        </Link>
      ) : <div/>}
    </div>
    <div className={"text-center"}>
      <Link href={"/blog/"}>Blog</Link>
    </div>
    <div className={"text-right"}>
      {props.next ? (
        <Link href={`/blog/${props.next.id}`} className="hover:underline">
          {props.next.title} -&gt;
        </Link>
      ) : <div/>}
    </div>
  </div>;
}
