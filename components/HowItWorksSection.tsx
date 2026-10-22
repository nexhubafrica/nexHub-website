"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Students create learning activity",
    body: "RedNotes that explain lessons, school activities, recommendations, and event participation — the raw material of a learning record.",
  },
  {
    n: "02",
    title: "Teachers verify what is true",
    body: "Inbox review for RedNotes, activities, and recommendations. Teachers approve, reject, or respond — verification is human, not a scorebot.",
  },
  {
    n: "03",
    title: "Events lock in participation",
    body: "Teachers run class, school, program, competition, and other events. Students RSVP. Teachers mark who was present.",
  },
  {
    n: "04",
    title: "School admin finalizes records",
    body: "The school portal issues credentials and final approvals — enrollment, recommendations, and institutional validation.",
  },
  {
    n: "05",
    title: "Students receive shareable links",
    body: "When the school is ready, students get verification links they can share for admissions, scholarships, and programs. Outsiders confirm on nexhub.africa/verify.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg-alt"
      aria-labelledby="how-heading"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            End-to-end record flow
          </p>
          <h2
            id="how-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            From classroom activity to a trusted, shareable record.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            NexHub is not only a feed. It is the path that turns student work
            and participation into institution-backed evidence — for the full
            product, including pieces still rolling out.
          </p>
        </motion.div>

        <ol className="space-y-5">
          {steps.map((step, i) => (
            <motion.li
              key={step.n}
              className="rounded-2xl border border-dark-card-alt bg-dark-card p-6 md:p-8 md:flex md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.08 * i }}
            >
              <span className="mb-3 block text-sm font-bold tracking-widest text-dark-primary-bright md:mb-0 md:w-16 shrink-0">
                {step.n}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-dark-text mb-2">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-dark-text-secondary leading-relaxed">
                  {step.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
