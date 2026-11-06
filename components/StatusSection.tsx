"use client";

import { motion } from "framer-motion";

export default function StatusSection() {
  return (
    <section
      id="access"
      className="relative py-28 px-6 bg-dark-bg-alt"
      aria-labelledby="access-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-dark-primary/40 bg-dark-card px-5 py-2.5"
          initial={false}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-dark-primary-bright" />
          <span className="text-sm font-medium text-dark-text-secondary">
            Pilot with selected schools
          </span>
        </motion.div>

        <motion.h2
          id="access-heading"
          className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
          initial={false}
        >
          Start with your school
        </motion.h2>

        <motion.p
          className="mb-4 text-xl font-semibold text-dark-text md:text-2xl"
          initial={false}
        >
          Make school life easier now. Make proof stronger later.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-dark-text-secondary leading-relaxed mb-10"
          initial={false}
        >
          Bring students, teachers, parents, and the school portal into one
          flow. Make daily school life easier now, then issue a sealed NexHub
          Record when proof is needed.
        </motion.p>

        <motion.a
          href="mailto:hello@nexhub.africa?subject=School%20access%20request&body=School%20name%3A%0ARole%3A%0AEmail%3A%0A"
          className="inline-flex items-center justify-center rounded-full bg-dark-primary px-8 py-4 text-base font-bold text-dark-bg hover:bg-dark-primary-bright transition-colors"
          initial={false}
        >
          Start with your school
        </motion.a>
      </div>
    </section>
  );
}
