"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScreenshotFrame from "./ScreenshotFrame";

const shots = [
  {
    src: "/screenshots/mobile-student-home.png",
    shotId: "M01",
    alt: "Student app home",
    caption: "Student app — everyday home",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-student-rednote-create.png",
    shotId: "M02",
    alt: "Creating a RedNote",
    caption: "Student app — RedNote",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-student-events.png",
    shotId: "M06",
    alt: "Student events",
    caption: "Student app — events",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/mobile-profile-learning.png",
    shotId: "M10",
    alt: "Academic Hub",
    caption: "Student app — Hub & records",
    aspect: "phone" as const,
  },
  {
    src: "/screenshots/admin-students-list.png",
    shotId: "S01",
    alt: "School portal students",
    caption: "School portal — students",
    aspect: "landscape" as const,
  },
  {
    src: "/screenshots/admin-nexhub-records.png",
    shotId: "S06",
    alt: "School portal NexHub Records",
    caption: "School portal — NexHub Records",
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
            Glimpses of the mobile app and school portal — enough to feel the
            product, not a full walkthrough.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot, i) => (
            <motion.div
              key={shot.shotId}
              initial={{ opacity: 0, y: 22 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 * i }}
              className={
                shot.aspect === "landscape" ? "sm:col-span-2 lg:col-span-1" : ""
              }
            >
              <ScreenshotFrame {...shot} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
