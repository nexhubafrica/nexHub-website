"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const pulse = [
  { tag: "Announcement", text: "Inter-house meet · Friday 7:30" },
  { tag: "Timetable", text: "Biology practical moved to lab 2" },
  { tag: "Exam", text: "Mathematics · Tuesday, SS2" },
  { tag: "Poll", text: "Club fair — which table are you on?" },
];

const roleBenefits = [
  {
    role: "Students",
    short: "Learn, join in, and keep the story of school.",
    screenTitle: "My school trail",
    stat: "12",
    statLabel: "items this term",
    visualRows: ["RedNote posted", "Club role added", "Event joined"],
    benefits: [
      "Access notes, class updates, resources, events, and activities.",
      "Build a visible trail of learning, participation, and achievements.",
      "Leave school with more than exam scores when the Record is issued.",
    ],
  },
  {
    role: "Teachers",
    short: "Guide the class and confirm real student effort.",
    screenTitle: "Teacher inbox",
    stat: "8",
    statLabel: "items to review",
    visualRows: ["Verify activity", "Post class pulse", "Give feedback"],
    benefits: [
      "Share materials, updates, assignments, polls, and reminders.",
      "Review work and verify activities that should become proof.",
      "See participation over time, not only exam-day performance.",
    ],
  },
  {
    role: "Parents",
    short: "See what the child is doing before results come out.",
    screenTitle: "Child overview",
    stat: "4",
    statLabel: "new updates",
    visualRows: ["Class pulse", "Event reminder", "Progress note"],
    benefits: [
      "Follow class pulse, announcements, events, and learning progress.",
      "Understand the child beyond marks and last-minute messages.",
      "Stay connected before the end of term, not only when results are out.",
    ],
  },
  {
    role: "School portal",
    short: "Run everyday school life before sealing the Record.",
    screenTitle: "School portal",
    stat: "Audit",
    statLabel: "trail on",
    visualRows: ["Students organized", "Classes managed", "Records ready"],
    benefits: [
      "Organize students, teachers, classes, updates, and activity trails.",
      "Keep an audit trail for what was reviewed, verified, and issued.",
      "Build trust with parents, students, universities, NGOs, and partners.",
    ],
  },
];

export default function AlsoOnNexHubSection() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const selected = roleBenefits[active];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % roleBenefits.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section
      id="also-on-nexhub"
      className="relative bg-dark-bg-alt px-6 py-24"
      aria-labelledby="also-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
          Still more of school life
        </p>
        <h2
          id="also-heading"
          className="max-w-2xl text-4xl font-bold leading-tight text-dark-text md:text-5xl"
        >
          Useful every week. Ready when the record is issued.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-dark-text-secondary md:text-lg">
          NexHub is not only the final Record. It helps the school run,
          communicate, teach, and track real activity while the term is still
          happening, so the Record grows from school life people already use.
        </p>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
          <div className="space-y-3">
            {roleBenefits.map((item, index) => {
              const on = index === active;
              return (
                <button
                  key={item.role}
                  type="button"
                  className={`w-full rounded-2xl border px-5 py-4 text-left transition-colors ${
                    on
                      ? "border-dark-primary bg-dark-card"
                      : "border-dark-card-alt bg-dark-card/55 hover:bg-dark-card"
                  }`}
                  aria-pressed={on}
                  onClick={() => setActive(index)}
                >
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
                        {item.role}
                      </span>
                      <span className="mt-2 block text-lg font-semibold leading-snug text-dark-text">
                        {item.short}
                      </span>
                    </span>
                    <span
                      className={`mt-1 h-3 w-3 shrink-0 rounded-full ${
                        on ? "bg-dark-primary-bright" : "bg-dark-card-alt"
                      }`}
                      aria-hidden
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="rounded-3xl border border-dark-card-alt bg-dark-card p-4 sm:p-6">
            <div className="grid gap-5 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
              <div className="rounded-2xl bg-dark-bg p-4">
                <div className="mx-auto max-w-64 rounded-[2rem] border border-dark-card-alt bg-dark-card p-3">
                  <div className="rounded-[1.4rem] bg-dark-bg px-4 py-5">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
                        {selected.screenTitle}
                      </p>
                      <span className="h-2 w-2 rounded-full bg-dark-primary-bright" />
                    </div>

                    <div className="mt-5 rounded-2xl bg-dark-card px-4 py-5">
                      <p className="text-4xl font-bold text-dark-text">
                        {selected.stat}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-dark-text-secondary">
                        {selected.statLabel}
                      </p>
                    </div>

                    <div className="mt-4 space-y-2">
                      {selected.visualRows.map((row, index) => (
                        <div
                          key={row}
                          className="flex items-center gap-3 rounded-xl bg-dark-card px-3 py-3"
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-dark-primary/15 text-xs font-bold text-dark-primary-bright">
                            {index + 1}
                          </span>
                          <span className="text-sm text-dark-text">{row}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-2xl border border-dark-card-alt bg-dark-bg p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
                    Weekly school life
                  </p>
                  <ul className="mt-4 divide-y divide-dark-card-alt">
                    {pulse.map((item) => (
                      <li key={item.tag} className="flex items-baseline gap-3 py-3">
                        <span className="w-28 shrink-0 text-[11px] font-bold uppercase tracking-wider text-dark-primary-bright">
                          {item.tag}
                        </span>
                        <span className="text-sm text-dark-text">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 rounded-2xl border border-dark-card-alt bg-dark-bg p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
                    Benefit
                  </p>
                  <ul className="mt-4 space-y-3">
                    {selected.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm leading-relaxed text-dark-text-secondary"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dark-primary-bright" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 rounded-2xl border border-dark-primary/30 bg-dark-bg p-4 sm:grid-cols-4">
              {["Use weekly", "Review", "Verify", "Issue record"].map(
                (label, index) => (
                  <div key={label} className="flex items-center gap-3 sm:block">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-dark-primary text-xs font-bold text-dark-bg">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-dark-text sm:mt-3">
                      {label}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
