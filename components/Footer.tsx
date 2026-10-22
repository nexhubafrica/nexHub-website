"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative py-14 px-6 bg-dark-bg border-t border-dark-card-alt">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="text-2xl font-bold text-dark-primary-bright mb-2">
            NexHub
          </p>
          <p className="text-dark-text-secondary max-w-md leading-relaxed">
            Verified learning records for schools — mobile apps, school admin,
            and shareable proof.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-dark-text-secondary">
          <a href="#how-it-works" className="hover:text-dark-primary-bright">
            How it works
          </a>
          <a href="#roles" className="hover:text-dark-primary-bright">
            Roles
          </a>
          <Link href="/verify" className="hover:text-dark-primary-bright">
            Verify
          </Link>
          <a
            href="mailto:hello@nexhub.africa"
            className="hover:text-dark-primary-bright"
          >
            Contact
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl mt-10 text-sm text-dark-text-secondary/80">
        © {new Date().getFullYear()} NexHub · Built in Nigeria
      </p>
    </footer>
  );
}
