"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  HiDocumentText,
  HiAcademicCap,
  HiCalendar,
  HiClock,
  HiShieldCheck,
} from "react-icons/hi";

export default function WhatWeDoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Student records created",
      description: "Academic history verified and secured",
    },
    {
      number: "02",
      title: "Teacher & school verification",
      description: "Institutional credibility established",
    },
    {
      number: "03",
      title: "Institutional trust",
      description: "Single source of truth for education data",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-dark-bg-alt">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-dark-primary to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-dark-text mb-6">
            Built for trust.{" "}
            <span className="text-dark-primary-bright">
              Designed for scale.
            </span>
          </h2>
          <div className="max-w-4xl mx-auto mt-8">
            <p className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed mb-4">
              NexHub is the digital backbone that verifies learning activity,
              student participation, and institutional records — turning
              fragmented education systems into a <span className="text-dark-primary-bright">trusted source of truth</span>.
            </p>
            <p className="text-xl md:text-2xl text-dark-text-secondary leading-relaxed">
              It goes beyond grades to capture how students learn, contribute,
              and grow over time.
            </p>
          </div>
        </motion.div>

        {/* What a Verified Learning Record Includes */}
        <motion.div
          className="max-w-4xl mx-auto mb-20 bg-dark-card border border-dark-card-alt rounded-3xl p-10"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-dark-text mb-8 text-center">
            What a{" "}
            <span className="text-dark-primary-bright">
              verified learning record
            </span>{" "}
            includes
          </h3>

          <div className="space-y-6">
            {[
              {
                icon: <HiDocumentText className="w-8 h-8" />,
                text: "RedNotes created to explain lessons and topics",
              },
              {
                icon: <HiAcademicCap className="w-8 h-8" />,
                text: "Teacher-verified explanations others can learn from",
              },
              {
                icon: <HiCalendar className="w-8 h-8" />,
                text: "Participation in school events and academic programs",
              },
              {
                icon: <HiClock className="w-8 h-8" />,
                text: "Consistent learning activity across subjects and terms",
              },
              {
                icon: <HiShieldCheck className="w-8 h-8" />,
                text: "School-validated enrollment and identity",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-dark-primary-bright mt-1 shrink-0">
                  {item.icon}
                </div>
                <p className="text-lg md:text-xl text-dark-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Privacy Note */}
          <motion.div
            className="mt-8 pt-6 border-t border-dark-card-alt"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-center text-dark-text-secondary text-sm md:text-base italic">
              Records are private by default and shared only with permission.
            </p>
          </motion.div>
        </motion.div>

        {/* 3-Step Visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-px bg-linear-to-r from-dark-primary via-dark-primary-bright to-dark-primary opacity-30"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <div className="relative bg-dark-card border border-dark-card-alt rounded-2xl p-8 h-full hover:border-dark-primary transition-all duration-300 group">
                {/* Step Number */}
                <div className="relative mb-6">
                  <motion.div
                    className="inline-block"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-dark-card-alt border-2 border-dark-primary flex items-center justify-center relative z-10">
                      <span className="text-3xl font-bold text-dark-primary-bright">
                        {step.number}
                      </span>
                    </div>
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-full bg-dark-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark-text mb-4 group-hover:text-dark-primary-bright transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-lg text-dark-text-secondary leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow Indicator (between cards) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-dark-primary-bright text-3xl z-20"
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
