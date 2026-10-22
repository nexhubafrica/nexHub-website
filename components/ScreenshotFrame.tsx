"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  shotId?: string;
  caption?: string;
  aspect?: "phone" | "landscape";
  className?: string;
};

/** Soft teaser frame — light frost, product atmosphere not a doc gallery. */
export default function ScreenshotFrame({
  src,
  alt,
  caption,
  aspect = "phone",
  className = "",
}: Props) {
  const [failed, setFailed] = useState(false);
  const isPhone = aspect === "phone";

  return (
    <figure className={`group ${className}`}>
      <div
        className={`relative overflow-hidden border border-dark-card-alt/80 bg-dark-card shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] ${
          isPhone
            ? "aspect-9/16 rounded-[1.75rem]"
            : "aspect-video rounded-2xl"
        }`}
      >
        {!failed ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top scale-[1.02] blur-[1.5px] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.04] group-hover:blur-[1px]"
              sizes={isPhone ? "220px" : "560px"}
              onError={() => setFailed(true)}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-dark-bg/6"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark-bg/25 via-transparent to-transparent"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6 text-center text-sm text-dark-text-secondary">
            Screenshot pending
          </div>
        )}
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center text-sm text-dark-text-secondary leading-relaxed">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
