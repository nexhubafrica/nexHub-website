"use client";

import { useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    n: "01",
    title: "Student",
    body: "Learns out loud. A RedNote, an activity, an event — with a choice of who can see it.",
    src: "/screenshots/mobile-student-rednote-create.png",
    alt: "Student creating a RedNote",
    frame: "phone" as const,
  },
  {
    n: "02",
    title: "Teacher",
    body: "Confirms what is true, marks verified notes, and posts class pulse for the class and home.",
    src: "/screenshots/mobile-teacher-inbox.png",
    alt: "Teacher verification inbox",
    frame: "phone" as const,
  },
  {
    n: "03",
    title: "School",
    body: "Runs the portal, then issues a sealed snapshot. The record does not keep changing.",
    src: "/screenshots/admin-nexhub-records.png",
    alt: "School portal issuing NexHub Records",
    frame: "landscape" as const,
  },
  {
    n: "04",
    title: "Check",
    body: "A university, scholarship, or program can be shown the seal. The check itself is illustrated below — this site does not run it.",
    src: null,
    alt: "",
    frame: "landscape" as const,
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused || !isInView) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, 3600);
    return () => window.clearInterval(id);
  }, [reduce, paused, isInView]);

  const step = steps[active];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative bg-dark-bg-alt px-6 py-24"
      aria-labelledby="how-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
          How school life flows
        </p>
        <h2
          id="how-heading"
          className="max-w-2xl text-4xl font-bold leading-tight text-dark-text md:text-5xl"
        >
          Day by day in school. Forever in the record.
        </h2>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]">
          <ol className="relative space-y-2">
            <div
              className="absolute bottom-6 left-[1.15rem] top-6 w-px bg-dark-card-alt"
              aria-hidden
            />
            {steps.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.n} className="relative">
                  <button
                    type="button"
                    className={`relative flex w-full gap-4 rounded-2xl px-3 py-4 text-left transition-colors ${
                      on ? "bg-dark-card" : "hover:bg-dark-card/60"
                    }`}
                    aria-current={on ? "step" : undefined}
                    onClick={() => setActive(i)}
                  >
                    <span
                      className={`relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        on
                          ? "bg-dark-primary text-dark-bg"
                          : "bg-dark-bg text-dark-text-secondary ring-1 ring-dark-card-alt"
                      }`}
                    >
                      {item.n}
                    </span>
                    <span>
                      <span className="block text-lg font-semibold text-dark-text">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-dark-text-secondary">
                        {item.body}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="lg:sticky lg:top-24">
            {step.src ? (
              <div
                className={`relative mx-auto overflow-hidden rounded-3xl border border-dark-card-alt bg-dark-card ${
                  step.frame === "phone"
                    ? "aspect-9/16 max-w-70"
                    : "aspect-video w-full"
                }`}
              >
                <Image
                  src={step.src}
                  alt={step.alt}
                  fill
                  sizes={step.frame === "phone" ? "280px" : "560px"}
                  className="object-cover object-top"
                />
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-dark-primary/50 bg-dark-card px-6 py-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
                  Illustration only
                </p>
                <p className="mt-3 font-mono text-sm text-dark-text">
                  nexhub.africa/verify/NH-123
                </p>
                <p className="mt-4 text-2xl font-bold text-dark-text">
                  Sealed · unchanged
                </p>
                <p className="mt-2 text-sm leading-relaxed text-dark-text-secondary">
                  A recipient would see the issued snapshot and whether it still
                  matches the seal. This website does not perform that check.
                </p>
              </div>
            )}
            <p className="mt-3 text-center text-sm text-dark-text-secondary">
              {step.alt || "Example verification result"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
