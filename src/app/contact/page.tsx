import type {Metadata} from "next";
import ContactPage from "@/app/components/ContactForm";

export const metadata: Metadata = {
  alternates: {
    canonical: "/contact/",
  },
};

export default function Contact() {
    return <ContactPage apiUrl={"/api/contact"}/>
}
