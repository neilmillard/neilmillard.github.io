import DeploysComponent from "@/app/components/DeploysComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deployment Strategies | Neil Millard",
  description: "Learn effective deployment strategies with Neil Millard: blue-green, canary and rolling releases explained, with practical guidance for your projects.",
};

export default function Deploys() {
    return <DeploysComponent />
}
