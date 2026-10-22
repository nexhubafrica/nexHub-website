"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScreenshotFrame from "./ScreenshotFrame";

const shots = [
  {
    src: "/screenshots/mobile-student-rednote-create.png",
    shotId: "M02",
    alt: "Student jotting what they learnt after school",
    caption: "Student — RedNote: explain what you learnt",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-teacher-inbox.png",
    shotId: "M04",
    alt: "Teacher inbox with pending items",
    caption: "Teacher — day’s notes, activities, recommendations",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-teacher-approve.png",
    shotId: "M05",
    alt: "Teacher confirming a learning note",
    caption: "Teacher — confirming what is true",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-parent-dashboard.png",
    shotId: "M09",
    alt: "Parent view of their child’s school trail",
    caption: "Parent — events, notes, attendance in one place",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/admin-final-approvals.png",
    shotId: "S05",
    alt: "School admin final approvals",
    caption: "School portal — sealing what becomes official",
    aspect: "landscape" as const,
  },
  {
    src: "/screenshots/admin-verification-link.png",
    shotId: "S06",
    alt: "School issuing a cryptographic share link",
    caption: "School portal — issue a NexHub Record",
    aspect: "landscape" as const,
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
            Drop live captures into{" "}
            <code className="text-dark-primary-bright">public/screenshots/</code>
            . Shot IDs match{" "}
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
