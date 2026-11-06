"use client";

import { useReducedMotion } from "framer-motion";
import { useState } from "react";

const moments = [
  {
    title: "A record arrives",
    detail: "The school has already issued Adaeze’s snapshot for a scholarship.",
  },
  {
    title: "The link is opened",
    detail: "The recipient uses the reference printed on the record.",
  },
  {
    title: "The issued snapshot is read",
    detail: "NexHub loads the sealed file, not a live editable profile.",
  },
  {
    title: "The seal is compared",
    detail: "The check is whether this copy still matches what the school issued.",
  },
  {
    title: "The result is shown",
    detail: "Authentic, sealed, and unchanged since 12 Mar 2026.",
  },
];

export default function VerifySection() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(moments.length - 1);
  const shown = reduce ? moments.length - 1 : step;

  return (
    <section
      id="verify"
      className="relative bg-dark-bg px-6 py-24"
      aria-labelledby="verify-heading"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-dark-primary-bright">
            Verification · concept
          </p>
          <h2
            id="verify-heading"
            className="text-4xl font-bold leading-tight text-dark-text md:text-5xl"
          >
            How a recipient would check the seal.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-dark-text-secondary">
            Product illustration. This page does not look up a real record, and{" "}
            <span className="font-mono text-dark-text">NH-123</span> is an
            example reference, not a live code.
          </p>

          <ol className="mt-8 space-y-2">
            {moments.map((moment, i) => {
              const on = i === shown;
              return (
                <li key={moment.title}>
                  <button
                    type="button"
                    className={`flex w-full gap-3 rounded-xl px-3 py-3 text-left ${
                      on ? "bg-dark-card" : "hover:bg-dark-card/50"
                    }`}
                    aria-current={on ? "step" : undefined}
                    onClick={() => setStep(i)}
                  >
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        i <= shown
                          ? "bg-dark-primary text-dark-bg"
                          : "bg-dark-bg-alt text-dark-text-secondary"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-dark-text">
                        {moment.title}
                      </span>
                      {on ? (
                        <span className="mt-1 block text-sm leading-relaxed text-dark-text-secondary">
                          {moment.detail}
                        </span>
                      ) : null}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="overflow-hidden rounded-2xl border border-dark-card-alt bg-dark-card shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-2 border-b border-dark-card-alt px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#c45c4a]" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-[#d4a24c]" aria-hidden />
            <span className="h-2.5 w-2.5 rounded-full bg-dark-primary" aria-hidden />
            <p className="ml-2 truncate font-mono text-xs text-dark-text-secondary">
              nexhub.africa/verify/NH-123
            </p>
          </div>

          <div className="px-5 py-6 sm:px-8 sm:py-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-dark-primary-bright">
              {shown < 4 ? `Step ${shown + 1} of 5` : "Illustrative result"}
            </p>
            <p className="mt-3 text-3xl font-bold text-dark-text">
              {shown < 2
                ? "Waiting on the link"
                : shown < 4
                  ? "Reading the seal"
                  : "Sealed · unchanged"}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-dark-text-secondary">
              {moments[shown].detail}
            </p>

            <dl className="mt-6 grid gap-3 border-t border-dark-card-alt pt-5 sm:grid-cols-2">
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-dark-text-secondary">
                  Record
                </dt>
                <dd className="mt-1 text-sm font-semibold text-dark-text">
                  Adaeze Okonkwo · SS2
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-dark-text-secondary">
                  Issued by
                </dt>
                <dd className="mt-1 text-sm font-semibold text-dark-text">
                  Greenfield Secondary
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-dark-text-secondary">
                  Status
                </dt>
                <dd className="mt-1 text-sm font-semibold text-dark-text">
                  {shown >= 4 ? "Matches the school’s seal" : "Not shown yet"}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-wider text-dark-text-secondary">
                  Reference
                </dt>
                <dd className="mt-1 font-mono text-sm font-semibold text-dark-text">
                  NH-123
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
