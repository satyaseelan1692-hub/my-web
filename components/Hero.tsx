"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import ParticleField from "./ParticleField";

const NetworkGlobe = dynamic(() => import("./NetworkGlobe"), { ssr: false });

const CAPABILITIES = ["Cloud Infrastructure", "Cyber Security", "Network Engineering", "Software Innovation"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Layered backgrounds */}
      <div className="absolute inset-0 grid-cyber opacity-40" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute right-[-10%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 opacity-70 md:right-0">
        <NetworkGlobe />
      </div>
      <ParticleField density={50} />
      <motion.div
        className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-core-primary/[0.06] to-transparent"
        animate={{ top: ["-20%", "120%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-core-primary/30 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-core-primary animate-pulseGlow" />
            <span className="font-mono-data text-[11px] text-core-primary/90">
              ENTERPRISE TECHNOLOGY PARTNER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
          >
            Building the Future of{" "}
            <span className="text-core-primary text-glow">Enterprise Technology</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {CAPABILITIES.map((cap) => (
              <span key={cap} className="flex items-center gap-2 text-sm text-white/60">
                <span className="h-1 w-1 rounded-full bg-core-primary/70" />
                {cap}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-6 max-w-xl text-base text-white/60 leading-relaxed md:text-lg"
          >
            Transforming businesses through innovative technology solutions, enterprise
            networking, cloud services, cybersecurity and software engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="rounded-sm bg-core-primary px-7 py-3.5 text-sm font-semibold tracking-wide text-core-bg shadow-glow transition-transform hover:scale-[1.03]"
            >
              START YOUR PROJECT
            </Link>
            <Link
              href="/services"
              className="rounded-sm border border-core-primary/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-core-primary transition-colors hover:bg-core-primary/10"
            >
              EXPLORE SOLUTIONS
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="h-9 w-5 rounded-full border border-white/20 flex justify-center pt-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-core-primary" />
        </div>
      </motion.div>
    </section>
  );
}
