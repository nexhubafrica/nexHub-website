"use client";

export default function Footer() {
  return (
    <footer className="relative py-14 px-6 bg-dark-bg border-t border-dark-card-alt">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div>
          <p className="text-2xl font-bold text-dark-primary-bright mb-2">
            NexHub
          </p>
          <p className="text-dark-text-secondary max-w-md leading-relaxed">
            School life, saved as it happens — so students leave with a record
            that stands forever.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-dark-text-secondary">
          <a href="#how-it-works" className="hover:text-dark-primary-bright">
            How it works
          </a>
          <a href="#roles" className="hover:text-dark-primary-bright">
            Roles
          </a>
          <a href="#coming-next" className="hover:text-dark-primary-bright">
            Coming next
          </a>
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
