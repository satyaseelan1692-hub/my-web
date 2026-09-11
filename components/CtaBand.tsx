"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CtaBand({
  title = "Ready to Build What's Next?",
  description = "Tell us what you're trying to solve — our engineers will map out the right infrastructure, security and software approach.",
  primaryLabel = "START YOUR PROJECT",
  primaryHref = "/contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative py-24 border-t border-core-primary/10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl px-6 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-white/60 mb-8">{description}</p>
        <Link
          href={primaryHref}
          className="inline-block rounded-sm bg-core-primary px-8 py-3.5 text-sm font-semibold tracking-wide text-core-bg shadow-glow transition-transform hover:scale-[1.03]"
        >
          {primaryLabel}
        </Link>
      </motion.div>
    </section>
  );
}
