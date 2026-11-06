"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import RecordSection from "@/components/RecordSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import VerifySection from "@/components/VerifySection";
import RolesSection from "@/components/RolesSection";
import AlsoOnNexHubSection from "@/components/AlsoOnNexHubSection";
import ProductSurfacesSection from "@/components/ProductSurfacesSection";
import TrustSecuritySection from "@/components/TrustSecuritySection";
import StatusSection from "@/components/StatusSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-hidden">
        <Hero />
        <WhatWeDoSection />
        <RecordSection />
        <HowItWorksSection />
        <VerifySection />
        <RolesSection />
        <AlsoOnNexHubSection />
        <ProductSurfacesSection />
        <TrustSecuritySection />
        <StatusSection />
        <Footer />
        <BackToTopButton />
      </main>
    </>
  );
}
