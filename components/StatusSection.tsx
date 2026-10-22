"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function StatusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="access"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg-alt"
      aria-labelledby="access-heading"
    >
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-dark-primary/40 bg-dark-card px-5 py-2.5"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <span className="h-2.5 w-2.5 rounded-full bg-dark-primary-bright" />
          <span className="text-sm font-medium text-dark-text-secondary">
            Pilot with selected schools
          </span>
        </motion.div>

        <motion.h2
          id="access-heading"
          className="text-4xl md:text-5xl font-bold text-dark-text mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.05 }}
        >
          Request access for your school
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-dark-text-secondary leading-relaxed mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Partners get one mobile app for students, teachers, and parents — plus
          the school portal — so daily school life is easier now, and every
          student’s trail can become an immutable shared record when it is time.
        </motion.p>

        <motion.a
          href="mailto:hello@nexhub.africa?subject=School%20access%20request&body=School%20name%3A%0ARole%3A%0AEmail%3A%0A"
          className="inline-flex items-center justify-center rounded-full bg-dark-primary px-8 py-4 text-base font-bold text-dark-bg hover:bg-dark-primary-bright transition-colors"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
        >
          Email hello@nexhub.africa
        </motion.a>
      </div>
    </section>
  );
}
