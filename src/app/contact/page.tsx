import type {Metadata} from "next";
import ContactPage from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Neil Millard",
  description: "Get in touch with Neil Millard to discuss DevOps consulting, team training, speaking engagements or a bookable session for you or your engineering team.",
  alternates: {
    canonical: "/contact/",
  },
};

export default function Contact() {
    return <ContactPage apiUrl={"/api/contact"}/>
}
