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
    text: "RedNote (Read Every Day) — students read a topic, then explain it in their own words (note, video, voice, PDF) so classmates — and students in other schools on NexHub — can learn from them too",
  },
  {
    icon: HiClipboardCheck,
    text: "Activities — spelling bees, inter-house sports, leading a club, competitions across the year — teacher-verified and saved for when a recommendation needs real proof",
  },
  {
    icon: HiCalendar,
    text: "Events & class pulse — RSVPs, participation, timetables, exams, announcements, and polls that reach students and parents together",
  },
  {
    icon: HiAcademicCap,
    text: "Teacher verification — educators mark what is true so the feed is not filled with rubbish; verified RedNotes carry that mark for others to trust",
  },
  {
    icon: HiUsers,
    text: "Parents see the whole child trail — learning notes, activities, event participation, attendance, assignments, and school announcements — without chasing chats",
  },
  {
    icon: HiShieldCheck,
    text: "Shared records at the finish — cryptographic, immutable, tamper-evident proof for scholarships, universities, programs — or simply the student’s own history they grew from scratch",
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
            Learning that becomes trusted — day by day.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            NexHub is not a form you fill once. It is how students learn out loud,
            how teachers keep the bar honest, how parents stay close, and how
            schools stand behind a record that cannot be quietly rewritten.
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
            RedNotes can be private, school-only, LGA-wide, or open to everyone
            on NexHub. Shared records stay private until the school and student
            choose to issue them — sealed cryptographically so they cannot be
            edited after the fact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
