"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  shotId: string;
  caption: string;
  aspect?: "phone" | "landscape";
};

/** Frosted teaser — shapes and color, not a readable gallery. */
export default function ScreenshotFrame({
  src,
  alt,
  shotId,
  caption,
  aspect = "phone",
}: Props) {
  const [failed, setFailed] = useState(false);
  const isPhone = aspect === "phone";

  return (
    <figure className="group">
      <div
        className={`relative overflow-hidden rounded-2xl border border-dark-card-alt bg-dark-card ${
          isPhone ? "aspect-9/16 max-w-[280px] mx-auto" : "aspect-video w-full"
        }`}
      >
        {!failed ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top scale-[1.08] blur-[10px] brightness-[0.92] saturate-[0.95] transition-transform duration-700 group-hover:scale-[1.12] group-hover:blur-[7px]"
              sizes={isPhone ? "280px" : "600px"}
              onError={() => setFailed(true)}
            />
            {/* Frost veil — keeps content hinted, not legible */}
            <div
              className="pointer-events-none absolute inset-0 bg-dark-bg/35"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark-bg/70 via-transparent to-dark-bg/25"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, transparent 20%, rgba(15,23,20,0.55) 100%)",
              }}
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="rounded-full border border-dark-primary/40 px-3 py-1 text-xs font-semibold tracking-wide text-dark-primary-bright">
              {shotId}
            </span>
            <p className="text-sm text-dark-text-secondary leading-relaxed">
              Screenshot pending
            </p>
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-center text-sm text-dark-text-secondary leading-relaxed">
        {caption}
      </figcaption>
    </figure>
  );
}
