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
              className="object-cover object-top scale-[1.04] blur-[3.5px] brightness-[0.97] saturate-[1] transition-transform duration-700 group-hover:scale-[1.06] group-hover:blur-[2.5px]"
              sizes={isPhone ? "280px" : "600px"}
              onError={() => setFailed(true)}
            />
            {/* Light frost — soft hint, still mostly readable as product */}
            <div
              className="pointer-events-none absolute inset-0 bg-dark-bg/12"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark-bg/35 via-transparent to-dark-bg/10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 30%, transparent 35%, rgba(15,23,20,0.35) 100%)",
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
