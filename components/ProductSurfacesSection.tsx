"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScreenshotFrame from "./ScreenshotFrame";

const shots = [
  {
    src: "/screenshots/mobile-student-home.png",
    shotId: "M01",
    alt: "Student home with Write RedNote and class shortcuts",
    caption: "Student — home: class, RedNotes, and daily focus",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-student-rednote-create.png",
    shotId: "M02",
    alt: "Student creating a RedNote and choosing content type",
    caption: "Student — RedNote: explain what you learnt",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-student-rednote-detail.png",
    shotId: "M03",
    alt: "RedNotes feed showing a Computer Studies note",
    caption: "Student — RedNotes feed across school & LGA",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-student-events.png",
    shotId: "M06",
    alt: "Student events list with countdown chips",
    caption: "Student — events & participation",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-profile-learning.png",
    shotId: "M10",
    alt: "Academic Hub with class boards and NexHub records",
    caption: "Student — Hub: class pulse & NexHub records",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-student-class-board.png",
    shotId: "M08b",
    alt: "Class board with announcement and timetable",
    caption: "Student — class board: announcements & timetable",
    aspect: "phone" as const,
  },
];

export default function ProductSurfacesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="product"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg-alt"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            Product surfaces
          </p>
          <h2
            id="product-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            Where school life actually happens.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            Live captures from the student role. Teacher, parent, and school
            portal shots drop in next using the same{" "}
            <code className="text-dark-primary-bright">public/screenshots/</code>{" "}
            names in{" "}
            <code className="text-dark-primary-bright">SCREENSHOT_SHOTLIST.md</code>.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <motion.div
              key={shot.shotId}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
            >
              <ScreenshotFrame {...shot} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
