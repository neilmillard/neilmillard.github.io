import AboutComponent from "@/app/components/AboutComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Neil Millard | DevOps Speaker & Author",
  description: "Neil Millard is a DevOps speaker, author and consultant with 20+ years in cloud, automation and platform engineering, from startups to enterprise clients.",
};

export default function About() {
    return <AboutComponent />
}
