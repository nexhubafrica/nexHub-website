"use client";

import Image from "next/image";
import DeviceShot from "./visuals/DeviceShot";

const roles = [
  {
    title: "Student",
    line: "RedNotes, activities, and events on one trail.",
    src: "/screenshots/mobile-student-rednote-detail.png",
    alt: "Student RedNotes",
  },
  {
    title: "Teacher",
    line: "Verifies what is true, then posts class pulse.",
    src: "/screenshots/mobile-teacher-boards.png",
    alt: "Teacher class boards",
  },
  {
    title: "Parent",
    line: "Sees the same trail. Not a chat with the teacher.",
    src: "/screenshots/mobile-parent-class-board.png",
    alt: "Parent class board",
  },
];

export default function RolesSection() {
  return (
    <section
      id="roles"
      className="relative bg-dark-bg px-6 py-24"
      aria-labelledby="roles-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
          Who lives on NexHub
        </p>
        <h2
          id="roles-heading"
          className="max-w-2xl text-4xl font-bold leading-tight text-dark-text md:text-5xl"
        >
          One app. Three roles. A portal for the school.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {roles.map((role) => (
            <figure key={role.title}>
              <DeviceShot src={role.src} alt={role.alt} sizes="240px" />
              <figcaption className="mt-4">
                <p className="text-lg font-semibold text-dark-text">{role.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-dark-text-secondary">
                  {role.line}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <figure className="mt-10 overflow-hidden rounded-2xl border border-dark-card-alt bg-dark-card">
          <div className="grid items-center gap-0 md:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
            <div className="relative aspect-video">
              <Image
                src="/screenshots/admin-students-list.png"
                alt="School portal student list"
                fill
                sizes="720px"
                className="object-cover object-top"
              />
            </div>
            <figcaption className="px-6 py-6 md:px-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
                School portal
              </p>
              <p className="mt-2 text-2xl font-bold text-dark-text">
                The institution issues the record.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-dark-text-secondary">
                Teachers, classes, growth trails, and the seal live here.
                Universities, scholarships, and programs receive that snapshot —
                they do not get another app. NexHub onboards the school.
              </p>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
