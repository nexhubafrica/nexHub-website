"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const reduce = useReducedMotion();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const key = "nexhub-intro-seen";
    if (window.sessionStorage.getItem(key)) return;

    window.sessionStorage.setItem(key, "true");

    const openTimer = window.setTimeout(() => {
      setIsLoading(true);
    }, 0);

    const closeTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, reduce ? 700 : 1550);

    return () => {
      window.clearTimeout(openTimer);
      window.clearTimeout(closeTimer);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.div
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.28 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="h-110 w-110 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(86, 179, 138, 0.5) 0%, transparent 68%)",
              }}
              animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="relative z-10 text-center">
            <motion.div
              className="mb-6 flex items-center justify-center text-dark-primary-bright"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <svg
                width="112"
                height="112"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="NexHub"
              >
                <title>NexHub</title>
                <motion.line
                  x1="16"
                  y1="16"
                  x2="32"
                  y2="32"
                  stroke="#00674F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.9"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.15, ease: "easeOut" }}
                />
                <motion.line
                  x1="32"
                  y1="32"
                  x2="48"
                  y2="48"
                  stroke="#00674F"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.9"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.35, delay: 0.35, ease: "easeOut" }}
                />
                {[
                  [16, 16, 48, 16, 0.5],
                  [16, 16, 16, 48, 0.6],
                  [48, 16, 48, 48, 0.7],
                  [16, 48, 48, 48, 0.8],
                ].map(([x1, y1, x2, y2, delay]) => (
                  <motion.line
                    key={`${x1}-${y1}-${x2}-${y2}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.28, delay, ease: "easeOut" }}
                  />
                ))}
                {[
                  [16, 16, 4, 0.1, 0.95],
                  [48, 16, 4, 0.42, 0.95],
                  [32, 32, 3.5, 0.52, 0.9],
                  [16, 48, 4, 0.74, 0.95],
                  [48, 48, 4, 0.86, 0.95],
                ].map(([cx, cy, r, delay, opacity]) => (
                  <motion.circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="#00674F"
                    opacity={opacity}
                    initial={reduce ? false : { scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.28, delay, ease: "backOut" }}
                  />
                ))}
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.65 }}
            >
              <p className="text-4xl font-bold tracking-tight text-dark-text sm:text-5xl">
                NexHub
              </p>
              <p className="mt-3 text-sm font-semibold italic text-dark-primary-bright sm:text-base">
                Where learning becomes trusted
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
