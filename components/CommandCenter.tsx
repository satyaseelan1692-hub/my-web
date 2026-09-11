"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";

export default function CommandCenter() {
  return (
    <section className="relative py-24 border-y border-core-primary/10 bg-core-card/40">
      <div className="absolute inset-0 grid-cyber opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-2">Live Command Center</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold">
              Operational Status, In Real Time
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-core-primary font-mono-data">
            <span className="h-2 w-2 rounded-full bg-core-primary animate-pulseGlow" />
            ALL SYSTEMS NOMINAL
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="hud-corner glass-panel rounded-md p-6 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs md:text-sm text-white/50 leading-tight">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
