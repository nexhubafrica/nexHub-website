"use client";

import { motion } from "framer-motion";
import { HiGlobe } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-dark-bg border-t border-dark-card-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Logo/Brand */}
          <motion.div
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-dark-primary-bright mb-2">
              NexHub
            </h3>
            <div className="h-1 w-20 bg-linear-to-r from-dark-primary to-dark-primary-bright mx-auto rounded-full"></div>
          </motion.div>

          {/* Footer Text */}
          <div className="space-y-3 mb-8">
            <p className="text-dark-text-secondary text-lg">
              <span className="text-dark-text font-semibold">
                © 2026 NexHub
              </span>
            </p>
            <p className="text-dark-text-secondary text-lg flex items-center justify-center gap-2">
              <HiGlobe className="w-6 h-6 text-dark-primary-bright" />
              <span className="font-medium text-dark-primary-bright">
                Built in Nigeria. Designed to scale.
              </span>
            </p>
            <p className="text-dark-text-secondary text-lg">
              Infrastructure for education trust
            </p>
          </div>

          {/* Decorative Line */}
          <motion.div
            className="h-px bg-linear-to-r from-transparent via-dark-primary to-transparent max-w-md mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>
      </div>

      {/* Ambient Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-dark-primary opacity-5 blur-3xl"></div>
    </footer>
  );
}
