import { redirect } from "next/navigation";

export const metadata = {
  title: "Products | Pradeep Dahiya",
  description:
    "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments.",
  openGraph: {
    title: "Products | Pradeep Dahiya",
    description:
      "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | Pradeep Dahiya",
    description:
      "Original software products designed for operational reliability, data sovereignty, and long-term deployment in regulated environments."
  }
};

export default function ProductsPage() {
  redirect("/work");
}
