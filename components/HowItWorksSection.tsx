"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Students learn out loud — RedNote and beyond",
    body: "RedNote means Read Every Day: students study a topic, then explain it in their own words — a note, video, voice, or PDF — so peers in their school and across NexHub can learn from them too. They choose visibility (private, school, LGA, or everyone on NexHub). Alongside that: activities like spelling bees and inter-house sports, class events, and recommendations when a teacher sees promise.",
  },
  {
    n: "02",
    title: "Teachers keep the feed honest",
    body: "Teachers review RedNotes, activities, and recommendations. They verify what is true and mark verified notes so students — and others reading them — are not drowning in rubbish. They run events, mark who showed up, and post class pulse: announcements, timetables, exams, assignments, polls.",
  },
  {
    n: "03",
    title: "Parents see everything that matters about their child",
    body: "Not a chat inbox with teachers. Parents follow their child’s trail end to end — RedNotes, activity participation, event participation, attendance, assignments, and whatever the school or teacher announces. If it reaches the student, the parent can see it too.",
  },
  {
    n: "04",
    title: "The school runs the institution — and seals the record",
    body: "School admin onboards the school, approves teachers, manages classes and subjects, sees student trails, handles credentials and credits, keeps audit logs, and issues official shared records with a cryptographic seal — immutable snapshots for scholarships, transfers, university admission, and programs.",
  },
  {
    n: "05",
    title: "Shared records that cannot be tampered with",
    body: "When it is time — for a university, a scholarship, an NGO, or the student’s own forever copy — the school issues a shared record: hashed, sealed, timestamped. It does not change when new activity happens. The student grew it from scratch; the seal proves nobody rewrote it overnight.",
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
            One mobile app — three roles. Plus a school portal for the
            institution. NexHub is how they already move through the year, with
            proof quietly accumulating until shared records are needed.
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
