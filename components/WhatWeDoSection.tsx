"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";
import RecordPreview from "./visuals/RecordPreview";

const scraps = [
  { title: "Result sheet", detail: "SS1 third term · PDF", rotate: "-7deg" },
  { title: "Chat screenshot", detail: "Sports day, lost in a thread", rotate: "5deg" },
  { title: "Paper certificate", detail: "Spelling bee · one afternoon", rotate: "-2deg" },
  { title: "Club register", detail: "Photo of a handwritten list", rotate: "8deg" },
];

export default function WhatWeDoSection() {
  const reduce = useReducedMotion();
  const [showRecord, setShowRecord] = useState(false);
  const sealed = reduce ? true : showRecord;

  return (
    <section className="relative bg-dark-bg px-6 py-24" id="story">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            The usual ending
          </p>
          <h2 className="text-4xl font-bold leading-tight text-dark-text md:text-5xl">
            School life ends up in pieces.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-dark-text-secondary">
            Results in a PDF. Activities in a chat. Leadership on a certificate
            nobody can find in SS3. NexHub keeps that trail while it is
            happening, then the school seals it.
          </p>
          {reduce ? null : (
            <button
              type="button"
              className="mt-6 text-sm font-semibold text-dark-primary-bright underline-offset-4 hover:underline"
              aria-pressed={sealed}
              onClick={() => setShowRecord((v) => !v)}
            >
              {sealed ? "Show the scattered pieces" : "Show the sealed record"}
            </button>
          )}
        </div>

        <div className={reduce ? "space-y-10" : ""}>
          {reduce || !sealed ? (
            <div className="relative mx-auto h-105 max-w-md">
              {scraps.map((scrap, i) => (
                <div
                  key={scrap.title}
                  className="absolute w-[78%] rounded-xl border border-[#d7e8de] bg-[#f4faf6] px-4 py-3 text-[#10241c] shadow-lg"
                  style={{
                    top: `${12 + i * 78}px`,
                    left: i % 2 === 0 ? "0%" : "18%",
                    rotate: reduce ? "0deg" : scrap.rotate,
                  }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#00674F]">
                    Unsorted
                  </p>
                  <p className="mt-1 font-semibold">{scrap.title}</p>
                  <p className="text-sm text-[#3d5c4e]">{scrap.detail}</p>
                </div>
              ))}
            </div>
          ) : null}
          {reduce || sealed ? <RecordPreview variant="full" /> : null}
        </div>
      </div>
    </section>
  );
}
