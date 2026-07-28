import type {Metadata} from "next";
import DevOpsComponent from "@/app/components/DevOpsComponent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/devops/",
  },
};

export default function DevOps() {
    return <DevOpsComponent />
}
