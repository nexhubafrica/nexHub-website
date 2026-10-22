"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiLockClosed,
  HiEyeOff,
  HiBan,
  HiClipboardList,
  HiShieldCheck,
} from "react-icons/hi";

export default function TrustSecuritySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: HiLockClosed,
      title: "Cryptographic share links",
      description:
        "When records are shared, the link is cryptographic — immutable and tamper-evident, not an editable file",
    },
    {
      icon: HiEyeOff,
      title: "Private until you share",
      description:
        "Student trails stay private by default; nothing is public without permission",
    },
    {
      icon: HiBan,
      title: "No resale of data",
      description: "School and student data is never sold to third parties",
    },
    {
      icon: HiClipboardList,
      title: "Human verification + audit",
      description:
        "Teachers and schools confirm what is true; access and changes leave a trail",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6 text-dark-primary-bright"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <HiShieldCheck className="w-20 h-20" />
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-4">
            <span className="text-dark-primary-bright">Privacy-first</span> by
            design
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative bg-dark-card border border-dark-card-alt rounded-2xl p-8 overflow-hidden group hover:border-dark-primary transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Background Glow on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-dark-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex items-start gap-6">
                {/* Icon */}
                <motion.div
                  className="text-dark-primary-bright shrink-0"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-12 h-12" />
                </motion.div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-dark-text mb-3 group-hover:text-dark-primary-bright transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-dark-text-secondary leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Corner Decoration */}
              <motion.div
                className="absolute bottom-0 right-0 w-24 h-24 opacity-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              >
                <div className="w-full h-full bg-linear-to-tl from-dark-primary to-transparent rounded-tl-full"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statements */}
        <motion.div
          className="text-center mt-20 space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="inline-block bg-dark-card border border-dark-primary/30 rounded-2xl px-12 py-6">
            <p className="text-xl md:text-2xl text-dark-text-secondary">
              Built with{" "}
              <span className="text-dark-primary-bright font-semibold">
                security
              </span>{" "}
              and{" "}
              <span className="text-dark-primary-bright font-semibold">
                trust
              </span>{" "}
              at the core
            </p>
          </div>

          <motion.p
            className="text-lg text-dark-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Built so everyday school life can become a record that cannot be quietly rewritten.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
