"use client";

const pulse = [
  { tag: "Announcement", text: "Inter-house meet · Friday 7:30" },
  { tag: "Timetable", text: "Biology practical moved to lab 2" },
  { tag: "Exam", text: "Mathematics · Tuesday, SS2" },
  { tag: "Poll", text: "Club fair — which table are you on?" },
];

const reach = ["Private", "School", "LGA", "Everyone"];

export default function AlsoOnNexHubSection() {
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

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <article className="rounded-2xl border border-dark-card-alt bg-dark-card p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-dark-text">
              Class pulse reaches home
            </h3>
            <p className="mt-1 text-sm text-dark-text-secondary">
              Students see it. Parents see it too.
            </p>
            <ul className="mt-5 divide-y divide-dark-card-alt">
              {pulse.map((item) => (
                <li key={item.tag} className="flex items-baseline gap-3 py-3">
                  <span className="w-28 shrink-0 text-[11px] font-bold uppercase tracking-wider text-dark-primary-bright">
                    {item.tag}
                  </span>
                  <span className="text-sm text-dark-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-dark-card-alt bg-dark-card p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-dark-text">
              A RedNote can travel
            </h3>
            <p className="mt-1 text-sm text-dark-text-secondary">
              The student chooses who learns from the explanation.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {reach.map((label) => {
                const on = label === "LGA";
                return (
                  <span
                    key={label}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      on
                        ? "bg-dark-primary text-dark-bg"
                        : "bg-dark-bg text-dark-text-secondary"
                    }`}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
            <p className="mt-6 rounded-xl bg-dark-bg px-4 py-3 text-sm text-dark-text">
              “Explain photosynthesis without copying the textbook.”
              <span className="mt-1 block text-dark-text-secondary">
                Verified · visible across the LGA
              </span>
            </p>
          </article>

          <article className="rounded-2xl border border-dark-card-alt bg-dark-card p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-dark-text">
              The year, already on the trail
            </h3>
            <ol className="mt-5 space-y-3">
              {[
                ["Sep", "Science club secretary"],
                ["Nov", "Spelling bee · verified"],
                ["Jan", "Inter-house athletics"],
                ["Term", "Attendance beside those events"],
              ].map(([when, what]) => (
                <li key={when} className="flex gap-4">
                  <span className="w-12 shrink-0 font-mono text-xs font-bold text-dark-primary-bright">
                    {when}
                  </span>
                  <span className="border-l border-dark-primary/40 pl-4 text-sm text-dark-text">
                    {what}
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-dark-card-alt bg-dark-card p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-dark-text">
              The portal earns its place first
            </h3>
            <p className="mt-1 text-sm text-dark-text-secondary">
              People, classes, and an audit trail — before anyone needs a seal.
            </p>
            <dl className="mt-5 grid grid-cols-3 gap-2 text-center">
              {[
                ["128", "Students"],
                ["14", "Classes"],
                ["Audit", "On"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-xl bg-dark-bg px-2 py-4">
                  <dt className="text-[11px] uppercase tracking-wider text-dark-text-secondary">
                    {label}
                  </dt>
                  <dd className="mt-1 text-xl font-bold text-dark-text">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs leading-relaxed text-dark-text-secondary">
              Illustrative counts, not a live school.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
