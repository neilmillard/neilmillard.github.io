import type {Metadata} from "next";
import BookComponent from "@/app/components/BookComponent";

export const metadata: Metadata = {
  title: "Who Moved My Servers? | Book by Neil Millard",
  description: "Who Moved My Servers? by Neil Millard is a guide to surviving and thriving through cloud migration and DevOps transformation. Available in paperback and Kindle.",
  alternates: {
    canonical: "/book/",
  },
};

export default function Book() {
    return <BookComponent />
}
