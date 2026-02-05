"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiChartBar, HiLightningBolt, HiDatabase } from "react-icons/hi";

export default function WhyItMattersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 bg-dark-bg-alt overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-dark-primary opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-dark-primary-bright opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-8">
            <span className="text-dark-primary-bright">
              Trusted infrastructure
            </span>{" "}
            for education data
          </h2>
        </motion.div>

        <motion.div
          className="bg-dark-card border border-dark-card-alt rounded-3xl p-12 md:p-16 relative overflow-hidden group"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated Border Glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(79, 163, 125, 0.3), transparent)",
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>

          <div className="relative z-10">
            {/* Main Body Text */}
            <motion.p
              className="text-2xl md:text-3xl text-dark-text leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              NexHub creates a{" "}
              <span className="text-dark-primary-bright font-semibold">
                trusted foundation
              </span>{" "}
              for understanding student learning activity and participation.
            </motion.p>

            {/* Divider */}
            <motion.div
              className="h-px bg-gradient-to-r from-transparent via-dark-primary to-transparent mb-12"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
            ></motion.div>

            {/* Supporting Text */}
            <motion.p
              className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              This opens new possibilities for{" "}
              <span className="text-dark-primary-bright font-semibold">
                education planning
              </span>
              ,{" "}
              <span className="text-dark-primary-bright font-semibold">
                program evaluation
              </span>
              , and{" "}
              <span className="text-dark-primary-bright font-semibold">
                funding transparency
              </span>{" "}
              — without relying on estimates or fragmented records.
            </motion.p>
          </div>

          {/* Corner Accent */}
          <motion.div
            className="absolute top-0 right-0 w-32 h-32 opacity-20"
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 45 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-dark-primary to-transparent rounded-bl-full"></div>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 opacity-20"
            initial={{ scale: 0, rotate: 0 }}
            animate={isInView ? { scale: 1, rotate: 45 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-full h-full bg-gradient-to-tr from-dark-primary-bright to-transparent rounded-tr-full"></div>
          </motion.div>
        </motion.div>

        {/* Supporting Stats or Icons */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { label: "Program Evaluation", icon: HiChartBar },
            { label: "Real-Time Data", icon: HiLightningBolt },
            { label: "Trusted Foundation", icon: HiDatabase },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center text-center p-6 bg-dark-card/50 rounded-xl border border-dark-card-alt/50 hover:border-dark-primary transition-colors duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <item.icon className="w-12 h-12 text-dark-primary-bright mb-4" />
              <span className="text-lg text-dark-text-secondary font-medium">
                {item.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
