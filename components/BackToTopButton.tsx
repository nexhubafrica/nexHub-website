"use client";

import { useEffect, useState } from "react";

export default function BackToTopButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShown(window.scrollY > 720);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-dark-primary/50 bg-dark-card text-xl font-bold text-dark-primary-bright transition-all hover:bg-dark-primary hover:text-dark-bg ${
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
