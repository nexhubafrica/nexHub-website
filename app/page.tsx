"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import WhyItMattersSection from "@/components/WhyItMattersSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import StatusSection from "@/components/StatusSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <WhatWeDoSection />
        <WhoWeServeSection />
        <WhyItMattersSection />
        <TrustSecuritySection />
        <StatusSection />
        <Footer />
      </main>
    </>
  );
}
