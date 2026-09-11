import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BootGate from "@/components/BootGate";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = "https://www.snexustechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SNexus Technologies | Building the Future of Enterprise Technology",
    template: "%s | SNexus Technologies",
  },
  description:
    "SNexus Technologies delivers enterprise IT infrastructure, cloud solutions, cyber security, software development, VoIP communications and managed IT services for government, healthcare, education and enterprise clients.",
  keywords: [
    "enterprise IT infrastructure",
    "cloud solutions",
    "cyber security",
    "software development",
    "VoIP communications",
    "managed IT services",
    "network infrastructure",
    "Microsoft 365 solutions",
    "Lark collaboration",
    "CCTV access control",
    "SNexus Technologies",
  ],
  authors: [{ name: "SNexus Technologies" }],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "SNexus Technologies",
    title: "SNexus Technologies | Building the Future of Enterprise Technology",
    description:
      "Enterprise IT infrastructure, cloud, cyber security, software development, VoIP and managed IT services — engineered like a command center.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "SNexus Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SNexus Technologies",
    description: "Building the Future of Enterprise Technology.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SNexus Technologies",
    url: siteUrl,
    description:
      "Enterprise IT infrastructure, cloud solutions, cyber security, software development, VoIP communications and managed IT services.",
    sameAs: [],
    areaServed: "Global",
    knowsAbout: [
      "Enterprise IT Infrastructure",
      "Cloud Solutions",
      "Cyber Security",
      "Software Development",
      "VoIP Communications",
      "Managed IT Services",
    ],
  };

  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable}`}>
      <body className="bg-core-bg text-core-text font-body antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <BootGate>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </BootGate>
      </body>
    </html>
  );
}
