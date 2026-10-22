import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { LenisScrollProvider } from "@/components/LenisScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://nexhub.africa"),
  title: {
    default: "NexHub — School life that becomes a lasting record",
    template: "%s | NexHub",
  },
  description:
    "NexHub — where learning becomes trusted. One app for students, teachers, and parents; a school portal for the institution; cryptographic NexHub Records that capture student growth — not just exam results.",
  keywords: [
    "NexHub",
    "Nex Hub",
    "school infrastructure",
    "education infrastructure Africa",
    "education infrastructure Nigeria",
    "education infrastructure",
    "school verification system",
    "verified learning records",
    "student verification",
    "education technology Africa",
    "school management system",
    "academic verification",
    "student records Africa",
    "education data platform",
    "school trust infrastructure",
    "learning activity tracking",
    "secondary school infrastructure",
    "African education technology",
    "school data management",
    "institutional verification",
    "education verification platform",
    "student learning records",
    "RedNotes verification",
    "teacher verified content",
    "school enrollment verification",
    "education NGO tools",
    "scholarship verification",
    "university admission records",
    "African schools technology",
    "education infrastructure platform",
    "school credibility system",
    "learning progress tracking",
  ],
  authors: [{ name: "NexHub" }, { name: "Elochukwu Ekwugha" }],
  creator: "Elochukwu Ekwugha",
  publisher: "NexHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexhub.africa",
    siteName: "NexHub",
    title: "NexHub — School life that becomes a lasting record",
    description:
      "Everyday school life for students, teachers, and parents — with a cryptographic, tamper-evident learning record at the end of the road.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexHub - Education Verification Infrastructure",
      },
    ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "NexHub - Education Verification Infrastructure",
  //   description:
  //     "Trusted education infrastructure for schools. Build verified learning records and establish institutional trust.",
  //   images: ["/twitter-image.png"],
  //   creator: "@nexhub",
  // },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://nexhub.africa",
  },
  category: "education technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NexHub",
              description:
                "Africa's education verification infrastructure for schools",
              url: "https://nexhub.africa",
              logo: "https://nexhub.africa/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@nexhub.africa",
                contactType: "Customer Service",
                areaServed: "Africa",
              },
              sameAs: [],
              founder: {
                "@type": "Organization",
                name: "NexHub",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "Africa",
              },
              offers: {
                "@type": "Offer",
                category: "Education Technology",
                description:
                  "Education verification infrastructure for schools, students, and institutions",
              },
            }),
          }}
        />

        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "NexHub",
              url: "https://nexhub.africa",
              description:
                "Verified learning records for secondary schools across Africa",
            }),
          }}
        />

        <Script
          id="software-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "NexHub",
              applicationCategory: "EducationalApplication",
              operatingSystem: "iOS, Android, Web",
              description:
                "Mobile apps and school portals for verified learning records — RedNotes, events, teacher review, and school-issued verification links.",
            }),
          }}
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Theme Color */}
        <meta name="theme-color" content="#00674F" />
        <meta name="msapplication-TileColor" content="#00674F" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LenisScrollProvider>{children}</LenisScrollProvider>
      </body>
    </html>
  );
}
