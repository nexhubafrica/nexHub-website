"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const onVerify = pathname === "/verify" || pathname?.startsWith("/verify/");
  const onHome = pathname === "/";

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-dark-card-alt/80 bg-dark-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-dark-primary-bright"
        >
          NexHub
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3">
          {onHome ? (
            <>
              <a
                href="#how-it-works"
                className="hidden sm:inline text-sm font-medium text-dark-text-secondary hover:text-dark-primary-bright transition-colors px-2"
              >
                How it works
              </a>
              <a
                href="#product"
                className="hidden md:inline text-sm font-medium text-dark-text-secondary hover:text-dark-primary-bright transition-colors px-2"
              >
                Product
              </a>
              <a
                href="#access"
                className="rounded-full bg-dark-primary px-4 py-2 text-sm font-bold text-dark-bg hover:bg-dark-primary-bright transition-colors"
              >
                Request access
              </a>
            </>
          ) : (
            <Link
              href="/#access"
              className="rounded-full bg-dark-primary px-4 py-2 text-sm font-bold text-dark-bg hover:bg-dark-primary-bright transition-colors"
            >
              Request access
            </Link>
          )}
          <Link
            href="/verify"
            aria-current={onVerify ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              onVerify
                ? "bg-dark-card text-dark-primary-bright border border-dark-primary/40"
                : "border border-dark-primary/40 text-dark-text hover:border-dark-primary-bright hover:text-dark-primary-bright"
            }`}
          >
            Verify
          </Link>
        </nav>
      </div>
    </header>
  );
}
