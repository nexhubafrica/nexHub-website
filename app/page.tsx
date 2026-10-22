"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import RolesSection from "@/components/RolesSection";
import ComingNextSection from "@/components/ComingNextSection";
import ProductSurfacesSection from "@/components/ProductSurfacesSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import StatusSection from "@/components/StatusSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <WhatWeDoSection />
        <HowItWorksSection />
        <RolesSection />
        <ComingNextSection />
        <ProductSurfacesSection />
        <TrustSecuritySection />
        <StatusSection />
        <Footer />
      </main>
    </>
  );
}
