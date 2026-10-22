"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiAcademicCap,
  HiOfficeBuilding,
  HiUserGroup,
  HiUsers,
  HiGlobeAlt,
  HiCog,
} from "react-icons/hi";

const roles = [
  {
    title: "Students",
    icon: HiUserGroup,
    surface: "Mobile app",
    points: [
      "Jot everyday learning — notes, clips, what they learnt after school",
      "Join class and school events; build participation over time",
      "Activities and recommendations (including scholarship pushes) land on their trail",
      "Years later: a cryptographic share link of everything that stood",
    ],
  },
  {
    title: "Teachers",
    icon: HiAcademicCap,
    surface: "Mobile app",
    points: [
      "Review daily learning notes, activities, and recommendations",
      "Approve what is true; keep the record honest",
      "Create events, mark attendance, post what students need to know",
      "Reach parents safely by posting in-app — not chasing phone numbers",
    ],
  },
  {
    title: "Parents",
    icon: HiUsers,
    surface: "Mobile app",
    points: [
      "See the full picture: learning notes, events, participation, activities",
      "Recommendations that matter — e.g. scholarship records — in one place",
      "Attendance visibility without calling the school every week",
      "Know when teachers or school post events or assignments for their child",
    ],
  },
  {
    title: "School admins",
    icon: HiOfficeBuilding,
    surface: "School portal",
    points: [
      "Provision students, teachers, classes, and subjects",
      "Final institutional approvals on what becomes official",
      "Issue the cryptographic verification link when records are ready to share",
      "Run the school side of attendance and institutional activity",
    ],
  },
  {
    title: "Platform (super admin)",
    icon: HiCog,
    surface: "Platform console",
    points: [
      "Onboard and manage schools across the network",
      "Finance, coverage, users, and issuance capacity",
    ],
  },
  {
    title: "Programs & partners",
    icon: HiGlobeAlt,
    surface: "Shared records",
    points: [
      "Receive institution-backed, tamper-evident proof — not edit-friendly screenshots",
      "Trust consistency of learning and participation over time",
    ],
  },
];

export default function RolesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="roles"
      ref={ref}
      className="relative py-28 px-6 bg-dark-bg"
      aria-labelledby="roles-heading"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            Who lives on NexHub
          </p>
          <h2
            id="roles-heading"
            className="text-4xl md:text-5xl font-bold text-dark-text leading-tight"
          >
            The whole school circle — students, teachers, parents, admin.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.article
                key={role.title}
                className="rounded-2xl border border-dark-card-alt bg-dark-card p-7"
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.05 * i }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-dark-primary/15 text-dark-primary-bright">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark-text">
                      {role.title}
                    </h3>
                    <p className="text-xs font-medium uppercase tracking-wider text-dark-text-secondary">
                      {role.surface}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {role.points.map((p) => (
                    <li
                      key={p}
                      className="text-sm md:text-[15px] text-dark-text-secondary leading-relaxed pl-3 border-l border-dark-primary/30"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
