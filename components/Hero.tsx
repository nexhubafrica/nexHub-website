"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";

export default function Hero() {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; delay: number; duration: number }>
  >([]);

  useEffect(() => {
    // Generate particles for background animation
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 4,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      role="banner"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-b from-dark-bg via-dark-bg to-dark-bg-alt"></div>

      {/* Radial Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-[800px] h-[800px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 163, 125, 0.4) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Animated Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-dark-primary-bright rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main Heading with Breathing Animation */}
        <motion.h1
          className="text-7xl md:text-9xl font-bold mb-8 relative"
          style={{
            textShadow:
              "0 0 80px rgba(79, 163, 125, 0.5), 0 20px 40px rgba(0, 0, 0, 0.4)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.span
            className="inline-block"
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="bg-linear-to-r from-dark-primary-bright to-dark-primary bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 0 30px rgba(86, 179, 138, 0.6))",
              }}
            >
              NexHub
            </span>
          </motion.span>

          {/* Floating Shadow */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              filter: "blur(40px)",
              background:
                "radial-gradient(circle, rgba(79, 163, 125, 0.6) 0%, transparent 70%)",
            }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-2xl md:text-4xl text-dark-text mb-6 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Education verification infrastructure.
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          className="text-lg md:text-sm italic text-dark-text-secondary max-w2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Trusted learning records for schools, students, and institutions.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="text-dark-primary-bright"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <HiChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
