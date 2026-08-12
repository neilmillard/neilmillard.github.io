import GlossaryComponent from "@/app/components/GlossaryComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Glossary | Neil Millard",
  description: "A plain-English glossary of DevOps, cloud and platform engineering terms, compiled by Neil Millard to help teams speak the same technical language.",
};

export default function Glossary() {
    return <GlossaryComponent />
}
