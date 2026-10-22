"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-20 pb-16"
      aria-label="Hero"
    >
      <div className="absolute inset-0 bg-linear-to-b from-dark-bg via-dark-bg to-dark-bg-alt" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[min(90vw,720px)] h-[min(90vw,720px)] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 163, 125, 0.45) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        <motion.p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-dark-primary-bright"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          NexHub
        </motion.p>

        <motion.h1
          className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold text-dark-text leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Verified learning records for secondary schools — from RedNotes and
          events to shareable proof.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-dark-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Students create. Teachers verify. Schools approve and issue links.
          Partners confirm what is true — on mobile and school portals built for
          Nigeria, designed to scale.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-3 sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a
            href="mailto:hello@nexhub.africa?subject=School%20access%20request"
            className="inline-flex items-center justify-center rounded-full bg-dark-primary px-7 py-3.5 text-base font-bold text-dark-bg hover:bg-dark-primary-bright transition-colors"
          >
            Request school access
          </a>
          <Link
            href="/verify"
            className="inline-flex items-center justify-center rounded-full border border-dark-primary/50 px-7 py-3.5 text-base font-semibold text-dark-text hover:border-dark-primary-bright hover:text-dark-primary-bright transition-colors"
          >
            Verify a record
          </Link>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-3 py-3.5 text-base font-medium text-dark-text-secondary hover:text-dark-primary-bright transition-colors"
          >
            See how it works
          </a>
        </motion.div>
      </div>
    </section>
  );
}
