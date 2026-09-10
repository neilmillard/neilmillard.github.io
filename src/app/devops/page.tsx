import type {Metadata} from "next";
import DevOpsComponent from "@/app/components/DevOpsComponent";

export const metadata: Metadata = {
  title: "DevOps Services | Neil Millard",
  description: "DevOps consulting, training and mentoring from Neil Millard: build automated deployment pipelines and adopt platform engineering best practice for your team.",
  alternates: {
    canonical: "/devops/",
  },
};

export default function DevOps() {
    return <DevOpsComponent />
}
