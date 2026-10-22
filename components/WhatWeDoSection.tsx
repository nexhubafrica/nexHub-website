"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiDocumentText,
  HiAcademicCap,
  HiCalendar,
  HiClipboardCheck,
  HiShieldCheck,
  HiUsers,
} from "react-icons/hi";

const recordItems = [
  {
    icon: HiDocumentText,
    text: "Everyday learning notes — after school, students capture what they learnt: a quick jot, a voice note, a short video of the lesson landing",
  },
  {
    icon: HiClipboardCheck,
    text: "Activities & recommendations — clubs, projects, and teacher push for scholarships or programs become part of the same trail",
  },
  {
    icon: HiCalendar,
    text: "Class & school events — RSVPs, participation, and attendance that parents and teachers can both see",
  },
  {
    icon: HiAcademicCap,
    text: "Human verification — teachers review what is true; the school seals institutional authority",
  },
  {
    icon: HiUsers,
    text: "Parents in the loop — progress, events, assignments posted to the student, and attendance — without chasing WhatsApp chains",
  },
  {
    icon: HiShieldCheck,
    text: "A cryptographic share link at the end of the road — immutable and tamper-evident, so the record cannot be quietly rewritten",
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
            Not a one-off task. Just school — remembered.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            NexHub sits inside ordinary school days. Students keep showing up:
            notes after lessons, events, activities, recommendations. Teachers
            and the school keep the bar honest. Years later, that trail is still
            theirs — sealed so it cannot be changed or faked.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-dark-card-alt bg-dark-card p-8 md:p-10"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-2xl font-bold text-dark-text mb-8">
            What accumulates into a{" "}
            <span className="text-dark-primary-bright">
              lasting learning record
            </span>
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
            Private by default. Shared only when the student and school choose.
            Verification is educator review and school authority — never a
            scorebot rewriting history.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
