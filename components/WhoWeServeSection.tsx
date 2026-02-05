"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiUserGroup,
  HiAcademicCap,
  HiGlobeAlt,
  HiUsers,
} from "react-icons/hi";

export default function WhoWeServeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "Students",
      icon: HiUserGroup,
      benefits: [
        "Build a verified learning record across secondary school",
        "Capture learning activity, not just results",
        "Share trusted records for university, scholarships, and programs",
      ],
    },
    {
      title: "Schools",
      icon: HiAcademicCap,
      benefits: [
        "Verify students & activities",
        "Protect institutional credibility",
        "Generate trusted records",
      ],
    },
    {
      title: "Parents",
      icon: HiUsers,
      benefits: [
        "Visibility into verified learning progress — without managing records or approvals",
      ],
    },
    {
      title: "NGOs & Education Programs",
      icon: HiGlobeAlt,
      benefits: [
        "Verify participation and learning consistency",
        "Measure program impact without collecting sensitive data",
        "Avoid managing separate tracking systems",
      ],
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
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-4">
            Who <span className="text-dark-primary-bright">It Serves</span>
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
            >
              <div className="relative bg-dark-card border border-dark-card-alt rounded-2xl p-8 h-full transition-all duration-500 hover:border-dark-primary hover:transform hover:-translate-y-2">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-dark-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Card Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-dark-primary-bright mb-6"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <card.icon className="w-16 h-16" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-3xl font-bold text-dark-text mb-6 group-hover:text-dark-primary-bright transition-colors duration-300">
                    {card.title}
                  </h3>

                  {/* Benefits List */}
                  <ul className="space-y-4">
                    {card.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start text-dark-text-secondary text-lg"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.5,
                          delay: 0.4 + index * 0.15 + i * 0.1,
                        }}
                      >
                        <span className="mr-3 text-dark-primary-bright text-xl font-bold">
                          •
                        </span>
                        <span className="leading-relaxed">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-linear-to-r from-dark-primary to-dark-primary-bright rounded-b-2xl"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.15 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
