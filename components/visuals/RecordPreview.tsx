import NexHubLogo from "@/components/NexHubLogo";

type Props = {
  /** Dark card on the dark site, or a paper sheet on the light record section. */
  tone?: "onDark" | "onLight";
  variant?: "compact" | "full";
  className?: string;
};

const trail = [
  { kind: "RedNote", detail: "Photosynthesis, in her own words", meta: "Verified · school" },
  { kind: "Activity", detail: "Inter-house athletics", meta: "Verified" },
  { kind: "Leadership", detail: "Science club secretary", meta: "This session" },
  { kind: "Attendance", detail: "Present across the term", meta: "In the trail" },
];

const results = [
  ["English", "A"],
  ["Mathematics", "B"],
  ["Biology", "A"],
  ["Civic", "A"],
];

/**
 * Illustrative NexHub Record. Sample data only — not a live student file.
 */
export default function RecordPreview({
  tone = "onDark",
  variant = "full",
  className = "",
}: Props) {
  const light = tone === "onLight";
  const shell = light
    ? "border-[#d3e4da] bg-white text-[#10241c] shadow-[0_24px_60px_-36px_rgba(14,31,23,0.45)]"
    : "border-dark-card-alt bg-dark-card text-dark-text shadow-[0_24px_60px_-36px_rgba(0,0,0,0.7)]";
  const muted = light ? "text-[#3d5c4e]" : "text-dark-text-secondary";
  const line = light ? "border-[#e2eee7]" : "border-dark-card-alt";
  const chip = light
    ? "bg-[#e7f5ee] text-[#00674F]"
    : "bg-dark-primary/15 text-dark-primary-bright";

  return (
    <article
      className={`rounded-2xl border ${shell} ${className}`}
      aria-label="Illustrative NexHub Record for Adaeze Okonkwo"
    >
      <header className={`flex items-start justify-between gap-3 border-b ${line} px-4 py-3 sm:px-5`}>
        <div className="flex items-center gap-2.5 min-w-0">
          <NexHubLogo className="h-7 w-7 shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-bold leading-none">NexHub Record</p>
            <p className={`mt-1 text-[11px] font-medium uppercase tracking-[0.14em] ${muted}`}>
              Illustrative sample
            </p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${chip}`}>
          Sealed
        </span>
      </header>

      <div className="px-4 py-4 sm:px-5">
        <p className="text-lg font-bold leading-tight sm:text-xl">Adaeze Okonkwo</p>
        <p className={`mt-1 text-sm ${muted}`}>
          SS2 · Greenfield Secondary, Enugu
        </p>
        <p className={`text-sm ${muted}`}>2025/2026 · Second term</p>

        <dl className={`mt-3 grid grid-cols-2 gap-2 text-xs ${muted}`}>
          <div>
            <dt className="uppercase tracking-wider">Reference</dt>
            <dd className="mt-0.5 font-mono text-sm font-semibold text-inherit opacity-100">
              <span className={light ? "text-[#10241c]" : "text-dark-text"}>NH-123</span>
            </dd>
          </div>
          <div>
            <dt className="uppercase tracking-wider">Issued</dt>
            <dd className={`mt-0.5 text-sm font-semibold ${light ? "text-[#10241c]" : "text-dark-text"}`}>
              12 Mar 2026
            </dd>
          </div>
        </dl>

        <ul className={`mt-4 divide-y ${line} border-y ${line}`}>
          {(variant === "compact" ? trail.slice(0, 3) : trail).map((row) => (
            <li key={row.kind} className="flex items-baseline justify-between gap-3 py-2.5">
              <div className="min-w-0">
                <p
                  className={`text-[11px] font-bold uppercase tracking-wider ${
                    light ? "text-[#00674F]" : "text-dark-primary-bright"
                  }`}
                >
                  {row.kind}
                </p>
                <p className="truncate text-sm font-medium">{row.detail}</p>
              </div>
              <span className={`shrink-0 text-[11px] ${muted}`}>{row.meta}</span>
            </li>
          ))}
        </ul>

        {variant === "full" ? (
          <div className="mt-4">
            <p className={`text-[11px] font-bold uppercase tracking-wider ${muted}`}>
              Results in the same snapshot
            </p>
            <div className="mt-2 grid grid-cols-4 gap-1.5">
              {results.map(([subject, grade]) => (
                <div
                  key={subject}
                  className={`rounded-lg px-1.5 py-2 text-center ${light ? "bg-[#f3f7f4]" : "bg-dark-bg"}`}
                >
                  <p className={`text-[10px] ${muted}`}>{subject}</p>
                  <p className="text-sm font-bold">{grade}</p>
                </div>
              ))}
            </div>
            <p className={`mt-3 text-xs leading-relaxed ${muted}`}>
              Issued by the school. New school life does not rewrite this snapshot.
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
