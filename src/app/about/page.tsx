import type {Metadata} from "next";
import AboutComponent from "@/app/components/AboutComponent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/about/",
  },
};

export default function About() {
    return <AboutComponent />
}
