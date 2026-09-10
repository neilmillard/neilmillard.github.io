import type {Metadata} from "next";
import AboutComponent from "@/app/components/AboutComponent";

export const metadata: Metadata = {
  title: "About Neil Millard | DevOps Speaker & Author",
  description: "Neil Millard is a DevOps speaker, author and consultant with 20+ years in cloud, automation and platform engineering, from startups to enterprise clients.",
  alternates: {
    canonical: "/about/",
  },
};

export default function About() {
    return <AboutComponent />
}
