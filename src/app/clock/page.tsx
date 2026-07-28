import type {Metadata} from "next";
import ClockPageClient from "@/app/components/ClockPageClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "/clock/",
  },
};

export default function Clock() {
  return <ClockPageClient/>;
}
