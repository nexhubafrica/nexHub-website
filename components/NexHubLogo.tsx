type NexHubLogoProps = {
  className?: string;
  title?: string;
};

/** Brand mark from assets/logo — abstract N / academic graph. */
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
        x2="32"
        y2="32"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <line
        x1="32"
        y1="32"
        x2="48"
        y2="48"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.9"
      />
      <line
        x1="16"
        y1="16"
        x2="48"
        y2="16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <line
        x1="16"
        y1="16"
        x2="16"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <line
        x1="48"
        y1="16"
        x2="48"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <line
        x1="16"
        y1="48"
        x2="48"
        y2="48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.95" />
      <circle cx="48" cy="16" r="4" fill="currentColor" opacity="0.95" />
      <circle cx="16" cy="48" r="4" fill="currentColor" opacity="0.95" />
      <circle cx="48" cy="48" r="4" fill="currentColor" opacity="0.95" />
      <circle cx="32" cy="32" r="3.5" fill="currentColor" opacity="0.9" />
    </svg>
  );
}
