import type {Metadata} from "next";
import DeploysComponent from "@/app/components/DeploysComponent";

export const metadata: Metadata = {
  title: "Deployment Strategies | Neil Millard",
  description: "Learn effective deployment strategies with Neil Millard: blue-green, canary and rolling releases explained, with practical guidance for your projects.",
  alternates: {
    canonical: "/deploys/",
  },
};

export default function Deploys() {
    return <DeploysComponent />
}
