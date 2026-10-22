"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiDocumentText,
  HiAcademicCap,
  HiCalendar,
  HiClipboardCheck,
  HiLink,
} from "react-icons/hi";

const recordItems = [
  {
    icon: HiDocumentText,
    text: "RedNotes — student explanations of lessons, reviewed by teachers",
  },
  {
    icon: HiClipboardCheck,
    text: "Activities & recommendations — verified contributions to the record",
  },
  {
    icon: HiCalendar,
    text: "Events — class, school, program, competition, and other participation with check-in",
  },
  {
    icon: HiAcademicCap,
    text: "Teacher & school validation — human review, institutional final approval",
  },
  {
    icon: HiLink,
    text: "Shareable verification links — issued by the school for admissions and programs",
  },
];

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 px-6 bg-dark-bg">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="mb-12 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-text leading-tight">
            A learning record that goes beyond grades.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            NexHub captures how students learn and participate over time — then
            wraps it in educator review and school authority so outsiders can
            trust what they see.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-dark-card-alt bg-dark-card p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-dark-text mb-8">
            What a{" "}
            <span className="text-dark-primary-bright">
              verified learning record
            </span>{" "}
            includes
          </h3>
          <ul className="space-y-5">
            {recordItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.text} className="flex gap-4 items-start">
                  <span className="mt-0.5 text-dark-primary-bright shrink-0">
                    <Icon className="h-7 w-7" />
                  </span>
                  <span className="text-base md:text-lg text-dark-text-secondary leading-relaxed">
                    {item.text}
                  </span>
                </li>
              );
            })}
          </ul>
          <p className="mt-8 text-sm text-dark-text-secondary/90 leading-relaxed border-t border-dark-card-alt pt-6">
            Records are private by default and shared only with permission.
            Verification reflects educator review and institutional validation —
            not automated scoring.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
