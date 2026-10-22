"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Students live school on the app",
    body: "After lessons they capture what stuck — a written note, a clip, an activity. They join class events, show up for programs, and ask for recommendations when a teacher sees promise (including for scholarships). It is everyday school, not a special project.",
  },
  {
    n: "02",
    title: "Teachers keep the truth honest",
    body: "Teachers see the day’s notes, activities, and recommendations in one place. They approve what happened, push back when something is off, run events, and mark who was present — the human layer of trust.",
  },
  {
    n: "03",
    title: "Parents stay close without chasing",
    body: "Parents see their child’s trail: learning notes, event participation, activities, recommendations, and attendance. When a teacher or school posts an assignment or event for the student, the parent simply knows — safely inside the app, not scattered across chats.",
  },
  {
    n: "04",
    title: "The school seals what becomes official",
    body: "School admin runs enrollment, classes, and final institutional approvals. What the school stands behind becomes part of the student’s lasting record.",
  },
  {
    n: "05",
    title: "At the end of the road — a link that cannot be tampered with",
    body: "When it is time to show admissions, scholarships, or programs what this student has done, the school issues a cryptographic verification link. Immutable. Tamper-evident. Not a screenshot someone can edit overnight.",
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
            How school life flows
          </p>
          <h2
            id="how-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            Day by day in school. Forever in the record.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            NexHub is not a checklist you complete once to “get a link.” It is
            how students, teachers, parents, and the school already move through
            the year — with proof quietly accumulating until the moment they
            need to share it.
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
