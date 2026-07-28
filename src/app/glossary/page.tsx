import type {Metadata} from "next";
import GlossaryComponent from "@/app/components/GlossaryComponent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/glossary/",
  },
};

export default function Glossary() {
    return <GlossaryComponent />
}
