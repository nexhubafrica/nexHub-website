import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

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
    default: "NexHub - Education Verification Infrastructure for Schools",
    template: "%s | NexHub - School Education Infrastructure",
  },
  description:
    "NexHub is a trusted education verification infrastructure for schools. Build verified learning records, verify student activity, and establish institutional trust. Digital backbone for secondary schools, universities, NGOs, and education programs built to scale across Africa.",
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
    title: "NexHub - Education Verification Infrastructure for Schools",
    description:
      "Trusted education infrastructure for schools built to scale across Africa. Build verified learning records, verify student activity, and establish institutional trust.",
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
                "Africa's education verification infrastructure for schools",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://nexhub.africa/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
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
              operatingSystem: "Web",
              description:
                "Education verification infrastructure for schools across Africa",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "100",
              },
            }),
          }}
        />

        <Script
          id="founder-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Elochukwu Ekwugha", 
              url: "https://elochukwu-ekwugha.vercel.app/",
              sameAs: [
                // "https://linkedin.com/in/yourprofile",
                "https://github.com/ekwugha", 
                // Add other social profiles
              ],
              jobTitle: "Founder & Creator",
              // worksFor: {
              //   "@type": "Organization",
              //   name: "NexHub",
              //   url: "https://nexhub.africa",
              // },
              description:
                "Founder and creator of NexHub, Africa's education verification infrastructure for schools.",
              alumniOf: [], // Add your alma mater if relevant
              knowsAbout: [
                "Education Technology",
                "School Infrastructure",
                "Verification Systems",
                "African Education",
              ],
            }),
          }}
        />

        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.png" type="image/png" />
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
