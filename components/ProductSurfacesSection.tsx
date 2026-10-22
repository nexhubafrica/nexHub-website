"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ScreenshotFrame from "./ScreenshotFrame";
import RolePhoneCarousel, { type RoleSlide } from "./RolePhoneCarousel";

const teacherSlides: RoleSlide[] = [
  {
    src: "/screenshots/mobile-teacher-inbox.png",
    alt: "Teacher inbox for verification",
  },
  {
    src: "/screenshots/mobile-teacher-boards.png",
    alt: "Teacher class boards",
  },
  {
    src: "/screenshots/mobile-teacher-events.png",
    alt: "Teacher events",
  },
];

const studentSlides: RoleSlide[] = [
  {
    src: "/screenshots/mobile-student-home.png",
    alt: "Student home",
  },
  {
    src: "/screenshots/mobile-student-rednote-create.png",
    alt: "Student creating a RedNote",
  },
  {
    src: "/screenshots/mobile-student-rednote-detail.png",
    alt: "Student RedNotes feed",
  },
  {
    src: "/screenshots/mobile-student-events.png",
    alt: "Student events",
  },
  {
    src: "/screenshots/mobile-profile-learning.png",
    alt: "Student Academic Hub",
  },
  {
    src: "/screenshots/mobile-student-class-board.png",
    alt: "Student class board",
  },
];

const parentSlides: RoleSlide[] = [
  {
    src: "/screenshots/mobile-parent-class-board.png",
    alt: "Parent class board",
  },
  {
    src: "/screenshots/mobile-parent-dashboard.png",
    alt: "Parent dashboard",
  },
];

/**
 * One composition: each role phone slides its own screens (auto + drag).
 * School portal sits underneath.
 */
export default function ProductSurfacesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="product"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg-alt overflow-hidden"
      aria-labelledby="product-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            In the product
          </p>
          <h2
            id="product-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            One app for school life. A portal for the institution.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            Student, teacher, and parent share the same app — each phone below
            flips through that role. Schools run people, classes, and NexHub
            Records from the portal.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto flex max-w-4xl items-end justify-center gap-3 sm:gap-5 md:gap-8 px-2"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <div className="w-[28%] max-w-[200px] translate-y-4 sm:translate-y-6 opacity-95">
            <RolePhoneCarousel
              role="Teacher"
              slides={teacherSlides}
              autoplayOffsetMs={0}
            />
          </div>
          <div className="w-[36%] max-w-[240px] z-10 -translate-y-1 sm:-translate-y-2">
            <RolePhoneCarousel
              role="Student"
              slides={studentSlides}
              autoplayOffsetMs={900}
              featured
            />
          </div>
          <div className="w-[28%] max-w-[200px] translate-y-4 sm:translate-y-6 opacity-95">
            <RolePhoneCarousel
              role="Parent"
              slides={parentSlides}
              autoplayOffsetMs={1800}
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.16 }}
        >
          <ScreenshotFrame
            src="/screenshots/admin-students-list.png"
            alt="School portal students"
            caption="School portal — students"
            aspect="landscape"
          />
          <ScreenshotFrame
            src="/screenshots/admin-nexhub-records.png"
            alt="School portal NexHub Records"
            caption="School portal — NexHub Records"
            aspect="landscape"
          />
        </motion.div>
      </div>
    </section>
  );
}
