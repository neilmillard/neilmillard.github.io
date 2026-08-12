import BookComponent from "@/app/components/BookComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who Moved My Servers? | Book by Neil Millard",
  description: "Who Moved My Servers? by Neil Millard is a guide to surviving and thriving through cloud migration and DevOps transformation. Available in paperback and Kindle.",
};

export default function Book() {
    return <BookComponent />
}
