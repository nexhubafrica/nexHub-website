import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/** Phone-shaped crop of a real NexHub screenshot. */
export default function DeviceShot({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "220px",
}: Props) {
  return (
    <div
      className={`relative aspect-9/16 overflow-hidden rounded-[1.35rem] border border-white/10 bg-dark-card shadow-[0_18px_40px_-24px_rgba(0,0,0,0.75)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top"
      />
    </div>
  );
}
