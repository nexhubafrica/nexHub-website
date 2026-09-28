import type { Metadata } from "next";
import VerifyClient from "@/components/VerifyClient";

export const metadata: Metadata = {
  title: "Verify a NexHub Record",
  description:
    "Confirm a NexHub Record code or helper link on the official NexHub website.",
  alternates: {
    canonical: "https://nexhub.africa/verify",
  },
};

export default function VerifyPage() {
  return <VerifyClient />;
}
