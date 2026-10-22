"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiBookOpen,
  HiBell,
  HiClipboardList,
  HiChatAlt2,
  HiCollection,
  HiSparkles,
} from "react-icons/hi";

const bonuses = [
  {
    icon: HiBookOpen,
    title: "Assignments & classwork",
    body: "Teachers post what is due; students see it; parents know without a separate broadcast.",
  },
  {
    icon: HiBell,
    title: "School announcements that reach home",
    body: "Events, notices, and updates land where families already watch their child’s trail.",
  },
  {
    icon: HiClipboardList,
    title: "Richer attendance & class ops",
    body: "More of the day-to-day school admin work — so NexHub is useful before anyone needs a share link.",
  },
  {
    icon: HiChatAlt2,
    title: "Safer school ↔ parent reach",
    body: "Teachers and schools message through the app about the student — no scraping personal numbers.",
  },
  {
    icon: HiCollection,
    title: "More of what schools already run",
    body: "Clubs, programs, assessments, and institutional workflows — one place that also builds the record.",
  },
  {
    icon: HiSparkles,
    title: "The quiet payoff",
    body: "Life gets easier now. At the end of school, students look back and see: this is everything I did — and it still stands.",
  },
];

export default function ComingNextSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="coming-next"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg"
      aria-labelledby="coming-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            Making school easier — and still coming
          </p>
          <h2
            id="coming-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            Useful every week. Unforgettable at the finish.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            NexHub is built to handle the rest of school life too — tools schools
            already need — so the product earns its place long before anyone
            shares a record. These pieces roll out alongside the core trail.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bonuses.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                className="rounded-2xl border border-dark-card-alt bg-dark-card p-7"
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-dark-primary/15 text-dark-primary-bright">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-dark-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-[15px] text-dark-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
