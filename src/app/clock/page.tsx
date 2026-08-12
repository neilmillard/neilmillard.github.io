import type { Metadata } from "next";
import ClockPageClient from "@/app/components/ClockPageClient";

export const metadata: Metadata = {
  title: "Clock & Timer Tool | Neil Millard",
  description: "A simple online clock and countdown timer tool from Neil Millard, useful for timeboxing talks, workshops and DevOps retrospectives.",
};

export default function Clock() {
  return <ClockPageClient/>
}
