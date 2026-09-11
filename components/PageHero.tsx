"use client";

import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden border-b border-core-primary/10">
      <div className="absolute inset-0 grid-cyber opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="eyebrow mb-4"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="font-display text-3xl md:text-5xl font-bold mb-5"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="text-white/60 md:text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
