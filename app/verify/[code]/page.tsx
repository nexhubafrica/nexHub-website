import type { Metadata } from "next";
import VerifyClient from "@/components/VerifyClient";

export const metadata: Metadata = {
  title: "Verify a NexHub Record",
  robots: { index: false, follow: false },
};

export default async function VerifyCodePage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  return <VerifyClient initialCode={decodeURIComponent(code)} />;
}
