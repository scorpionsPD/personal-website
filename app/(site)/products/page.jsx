import { redirect } from "next/navigation";
import { createMetadata } from "../../../lib/seo";

export const metadata = {
  ...createMetadata({
  title: "Products | Pradeep Dahiya",
  description:
    "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments.",
  path: "/products"
  }),
  robots: {
    index: false,
    follow: true
  }
};

export default function ProductsPage() {
  redirect("/work");
}
