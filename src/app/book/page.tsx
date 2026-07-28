import type {Metadata} from "next";
import BookComponent from "@/app/components/BookComponent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/book/",
  },
};

export default function Book() {
    return <BookComponent />
}
