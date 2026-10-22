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
    surface: "Mobile app · student role",
    points: [
      "RedNote (Read Every Day): read a topic, then explain it in your own words — note, video, voice, or PDF",
      "Share with classmates and students in other schools on NexHub — or keep it private, school-only, or LGA-wide",
      "Activities (spelling bee, inter-house sports, leadership) and events land on the same trail",
      "Grow a shared record from scratch — sealed later so it cannot change",
    ],
  },
  {
    title: "Teachers",
    icon: HiAcademicCap,
    surface: "Mobile app · teacher role",
    points: [
      "Verify RedNotes and activities so the network is not filled with rubbish",
      "Verified mark on notes others can trust when they read and learn",
      "Run events, mark participation, post class pulse (announcements, timetables, exams, polls)",
      "Parents see what reaches their child — no personal-number chase required",
    ],
  },
  {
    title: "Parents",
    icon: HiUsers,
    surface: "Mobile app · parent role",
    points: [
      "One place for everything about their child — not a direct-message thread",
      "RedNotes, activities, event participation, attendance, assignments",
      "School and teacher announcements, timetables, exams, and polls that also reach home",
      "Recommendations that matter (e.g. scholarship) visible on the child’s trail",
    ],
  },
  {
    title: "School admins",
    icon: HiOfficeBuilding,
    surface: "School portal",
    points: [
      "Onboard the school, submit documents, manage verification status",
      "Approve teachers; manage classes, subjects, roles, and managers",
      "See student trails; run credentials, credits, and cryptographic shared records",
      "Announcements, analytics, notifications, and immutable activity logs",
    ],
  },
  {
    title: "Universities, programs & partners",
    icon: HiGlobeAlt,
    surface: "Shared records",
    points: [
      "Receive institution-backed, tamper-evident shared records — not edit-friendly screenshots",
      "Scholarships, NGO programs, transfers, and university admission use the same sealed proof",
      "Students also keep the record as their own history — grown over years, not assembled overnight",
    ],
  },
  {
    title: "Platform",
    icon: HiCog,
    surface: "NexHub ops",
    points: [
      "Onboards and supports schools across the network — behind the scenes, not the product story",
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
            One app. Three roles. A portal for the school.
          </h2>
          <p className="mt-5 text-lg text-dark-text-secondary leading-relaxed">
            Students, teachers, and parents share the same mobile app — each
            signs in as their role. Schools run the institution from the admin
            portal.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.article
                key={role.title}
                className={`rounded-2xl border border-dark-card-alt bg-dark-card p-7 ${
                  role.title === "Platform" ? "xl:col-span-1 opacity-90" : ""
                }`}
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
