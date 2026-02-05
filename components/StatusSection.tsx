"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function StatusSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 bg-dark-bg-alt">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Status Indicator */}
          <motion.div
            className="inline-flex items-center gap-3 bg-dark-card border border-dark-primary/40 rounded-full px-6 py-3 mb-12"
            animate={{
              borderColor: [
                "rgba(79, 163, 125, 0.4)",
                "rgba(86, 179, 138, 0.6)",
                "rgba(79, 163, 125, 0.4)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.div
              className="w-3 h-3 bg-dark-primary-bright rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-dark-text-secondary font-medium text-lg">
              Active Development
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-dark-text mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-dark-primary-bright">Private rollout</span>{" "}
            underway
          </motion.h2>

          {/* Body Text */}
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed mb-8">
              NexHub is currently being introduced through selected schools and
              partners to ensure stability, trust, and long-term adoption.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            className="inline-block bg-dark-card border border-dark-card-alt rounded-3xl p-12 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-primary/20 via-transparent to-dark-primary-bright/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <p className="text-dark-text-secondary text-lg mb-4">
                Get in touch
              </p>
              <motion.a
                href="mailto:hello@nexhub.africa"
                className="text-3xl md:text-4xl font-bold text-dark-primary-bright hover:text-dark-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                hello@nexhub.africa
              </motion.a>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-dark-primary/30 rounded-tl-2xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-dark-primary/30 rounded-br-2xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
