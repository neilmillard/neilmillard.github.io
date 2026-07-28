import type {Metadata} from "next";
import DeploysComponent from "@/app/components/DeploysComponent";

export const metadata: Metadata = {
  alternates: {
    canonical: "/deploys/",
  },
};

export default function Deploys() {
    return <DeploysComponent />
}
