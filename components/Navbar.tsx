"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const onVerify = pathname === "/verify" || pathname.startsWith("/verify/");

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-dark-card-alt/80 bg-dark-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-dark-primary-bright"
        >
          NexHub
        </Link>
        <Link
          href="/verify"
          aria-current={onVerify ? "page" : undefined}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            onVerify
              ? "bg-dark-primary text-dark-bg"
              : "border border-dark-primary/40 text-dark-text hover:border-dark-primary-bright hover:text-dark-primary-bright"
          }`}
        >
          Verify
        </Link>
      </div>
    </header>
  );
}
