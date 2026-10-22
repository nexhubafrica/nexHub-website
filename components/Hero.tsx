"use client";

import { motion } from "framer-motion";
import NexHubLogo from "./NexHubLogo";

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
        <motion.div
          className="mb-8 flex items-center gap-3 text-dark-primary-bright"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NexHubLogo className="h-12 w-12 sm:h-14 sm:w-14" />
          <div>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-dark-text">
              NexHub
            </p>
            <p className="text-sm sm:text-base font-semibold italic text-dark-primary-bright">
              Where learning becomes trusted
            </p>
          </div>
        </motion.div>

        <motion.h1
          className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-bold text-dark-text leading-[1.1] tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          School life, saved as it happens — so the record stands forever.
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg md:text-xl text-dark-text-secondary leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          One app for students, teachers, and parents. Not just exam results —
          the growth of a student through school. Everyday learning, activities,
          and participation quietly become a cryptographic NexHub Record when it
          matters: scholarships, admissions, or their own history.
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
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center px-3 py-3.5 text-base font-medium text-dark-text-secondary hover:text-dark-primary-bright transition-colors"
          >
            See how school life flows
          </a>
        </motion.div>
      </div>
    </section>
  );
}
