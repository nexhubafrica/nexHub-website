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
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes={isPhone ? "280px" : "600px"}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <span className="rounded-full border border-dark-primary/40 px-3 py-1 text-xs font-semibold tracking-wide text-dark-primary-bright">
              {shotId}
            </span>
            <p className="text-sm text-dark-text-secondary leading-relaxed">
              Screenshot pending — see{" "}
              <span className="text-dark-text">SCREENSHOT_SHOTLIST.md</span>
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
