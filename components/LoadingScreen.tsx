"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after animation completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Animated Background Glow */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="w-[600px] h-[600px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(79, 163, 125, 0.6) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Logo Container */}
          <div className="relative z-10">
            {/* Animated Logo */}
            <motion.div
              className="mb-8 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  filter: "drop-shadow(0 0 40px rgba(79, 163, 125, 0.6))",
                }}
              >
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Connection Lines - Form the "N" structure */}
                  <motion.line
                    x1="16"
                    y1="16"
                    x2="32"
                    y2="32"
                    stroke="#00674F"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.9"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
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
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  />
                  {/* Supporting connections */}
                  <motion.line
                    x1="16"
                    y1="16"
                    x2="48"
                    y2="16"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  />
                  <motion.line
                    x1="16"
                    y1="16"
                    x2="16"
                    y2="48"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  />
                  <motion.line
                    x1="48"
                    y1="16"
                    x2="48"
                    y2="48"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  />
                  <motion.line
                    x1="16"
                    y1="48"
                    x2="48"
                    y2="48"
                    stroke="#059669"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                  />

                  {/* Nodes - 5 nodes: 4 corners + 1 middle on diagonal */}
                  <motion.circle
                    cx="16"
                    cy="16"
                    r="4"
                    fill="#00674F"
                    opacity="0.95"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.4, ease: "backOut" }}
                  />
                  <motion.circle
                    cx="48"
                    cy="16"
                    r="4"
                    fill="#00674F"
                    opacity="0.95"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.6, ease: "backOut" }}
                  />
                  <motion.circle
                    cx="16"
                    cy="48"
                    r="4"
                    fill="#00674F"
                    opacity="0.95"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.0, ease: "backOut" }}
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="4"
                    fill="#00674F"
                    opacity="0.95"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.8, ease: "backOut" }}
                  />
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="3.5"
                    fill="#00674F"
                    opacity="0.9"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.7, ease: "backOut" }}
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* NexHub Logo Text */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.h1
                className="text-7xl font-bold mb-4"
                style={{
                  textShadow: "0 0 60px rgba(79, 163, 125, 0.5)",
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span
                  className="bg-gradient-to-r from-dark-primary-bright to-dark-primary bg-clip-text text-transparent"
                  style={{
                    filter: "drop-shadow(0 0 20px rgba(86, 179, 138, 0.6))",
                  }}
                >
                  NexHub
                </span>
              </motion.h1>

              {/* Loading indicator */}
              <motion.div
                className="flex justify-center gap-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-dark-primary-bright rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
