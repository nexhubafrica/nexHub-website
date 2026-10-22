type NexHubLogoProps = {
  className?: string;
  title?: string;
};

/**
 * Brand mark — simplified N (four corner nodes + diagonal).
 * Matches app icon / Nexhub_Logo mark, not the full grid variant.
 */
export default function NexHubLogo({
  className = "h-8 w-8",
  title = "NexHub",
}: NexHubLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      <line
        x1="16"
        y1="16"
        x2="48"
        y2="48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="5" fill="currentColor" />
      <circle cx="48" cy="16" r="5" fill="currentColor" />
      <circle cx="16" cy="48" r="5" fill="currentColor" />
      <circle cx="48" cy="48" r="5" fill="currentColor" />
    </svg>
  );
}
