"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiBookOpen,
  HiBell,
  HiClipboardList,
  HiCollection,
  HiSparkles,
  HiChartBar,
} from "react-icons/hi";

const extras = [
  {
    icon: HiBell,
    title: "Class pulse that reaches home",
    body: "Announcements, timetables, exam notices, assignments, and polls — students see them, and parents see them too.",
  },
  {
    icon: HiBookOpen,
    title: "Hub & multi-school learning",
    body: "RedNotes travel beyond one classroom when students choose — school, LGA, or everyone on NexHub can learn from a clear explanation.",
  },
  {
    icon: HiClipboardList,
    title: "Attendance in the same trail",
    body: "Participation and attendance sit beside activities and events — part of what parents and schools already follow.",
  },
  {
    icon: HiChartBar,
    title: "School ops that stay useful every week",
    body: "Teacher approvals, classes & subjects, credentials & credits, analytics, and audit logs — the portal earns its place before anyone shares a record.",
  },
  {
    icon: HiCollection,
    title: "Activities across the school year",
    body: "Competitions, sports, leadership, clubs — verified once, ready later when a recommendation or shared record needs proof.",
  },
  {
    icon: HiSparkles,
    title: "The quiet payoff",
    body: "Life gets easier now. At the end of school, students look back and see: this is everything I did — and the shared record still stands.",
  },
];

export default function AlsoOnNexHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="also-on-nexhub"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg"
      aria-labelledby="also-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            Still more of school life
          </p>
          <h2
            id="also-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            Useful every week. Unforgettable at the finish.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            Beyond the learning trail, NexHub already carries the rhythm of
            school — so families and staff get value long before anyone needs a
            shared record.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {extras.map((item, i) => {
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
