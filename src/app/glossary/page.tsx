import type {Metadata} from "next";
import GlossaryComponent from "@/app/components/GlossaryComponent";

export const metadata: Metadata = {
  title: "DevOps Glossary | Neil Millard",
  description: "A plain-English glossary of DevOps, cloud and platform engineering terms, compiled by Neil Millard to help teams speak the same technical language.",
  alternates: {
    canonical: "/glossary/",
  },
};

export default function Glossary() {
    return <GlossaryComponent />
}
