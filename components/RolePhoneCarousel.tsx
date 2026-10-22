"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  type PanInfo,
  useReducedMotion,
} from "framer-motion";

export type RoleSlide = {
  src: string;
  alt: string;
};

type Props = {
  role: string;
  slides: RoleSlide[];
  /** Stagger when autoplay starts so shelves don't flip together */
  autoplayOffsetMs?: number;
  featured?: boolean;
  className?: string;
};

const AUTO_MS = 4000;
const SWIPE_PX = 40;

export default function RolePhoneCarousel({
  role,
  slides,
  autoplayOffsetMs = 0,
  featured = false,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      if (count < 2) return;
      setIndex((i) => (i + dir + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (reduceMotion || paused || count < 2) return;

    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setIndex((i) => (i + 1) % count);
      }, AUTO_MS);
    }, autoplayOffsetMs);

    return () => {
      window.clearTimeout(startId);
      if (intervalId !== undefined) window.clearInterval(intervalId);
    };
  }, [paused, reduceMotion, count, autoplayOffsetMs]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_PX || info.velocity.x < -300) go(1);
    else if (info.offset.x > SWIPE_PX || info.velocity.x > 300) go(-1);
  };

  const slide = slides[index] ?? slides[0];
  if (!slide) return null;

  return (
    <figure
      className={`group select-none ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={() => setPaused(true)}
      onPointerUp={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label={`${role} screens`}
    >
      <div className="relative overflow-hidden border border-dark-card-alt/80 bg-dark-card shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)] aspect-9/16 rounded-[1.75rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.src}
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
            drag={count > 1 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragEnd={onDragEnd}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              draggable={false}
              className="pointer-events-none object-cover object-top scale-[1.02] blur-[1.5px] brightness-[0.98]"
              sizes={featured ? "240px" : "200px"}
              priority={featured && index === 0}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-dark-bg/6"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-dark-bg/25 via-transparent to-transparent"
              aria-hidden
            />
          </motion.div>
        </AnimatePresence>

        {count > 1 ? (
          <div
            className="pointer-events-none absolute bottom-3 inset-x-0 z-10 flex justify-center gap-1.5"
            aria-hidden
          >
            {slides.map((s, i) => (
              <span
                key={s.src}
                className={`h-1 rounded-full transition-all ${
                  i === index
                    ? "w-4 bg-dark-primary-bright"
                    : "w-1.5 bg-white/35"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      <figcaption className="mt-3 text-center text-sm font-semibold text-dark-text">
        {role}
      </figcaption>
    </figure>
  );
}
