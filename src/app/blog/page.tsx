import {redirect} from "next/navigation";

export default function BlogIndex() {
  redirect("/blog/newest/")
}
