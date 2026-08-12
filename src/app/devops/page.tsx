import DevOpsComponent from "@/app/components/DevOpsComponent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DevOps Services | Neil Millard",
  description: "DevOps consulting, training and mentoring from Neil Millard: build automated deployment pipelines and adopt platform engineering best practice for your team.",
};

export default function DevOps() {
    return <DevOpsComponent />
}
