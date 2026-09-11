"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { ECOSYSTEM_NODES } from "@/lib/data";

const RADIUS = 42; // percentage of container
const CENTER = 50;

export default function TechEcosystem() {
  const nodes = useMemo(
    () =>
      ECOSYSTEM_NODES.map((name, i) => {
        const angle = (i / ECOSYSTEM_NODES.length) * Math.PI * 2 - Math.PI / 2;
        return {
          name,
          x: CENTER + RADIUS * Math.cos(angle),
          y: CENTER + RADIUS * Math.sin(angle) * 0.82,
        };
      }),
    []
  );

  return (
    <section className="relative py-24 border-t border-core-primary/10 overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-20" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="eyebrow mb-3">Technology Ecosystem</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            One Core. Every Platform You Rely On.
          </h2>
          <p className="text-white/60">
            SNexus Core integrates the enterprise technologies your business already runs on into
            a single, managed operating layer.
          </p>
        </div>

        <div className="relative mx-auto aspect-square max-w-3xl">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible">
            {nodes.map((node, i) => (
              <g key={`line-${node.name}`}>
                <line
                  x1={CENTER}
                  y1={CENTER}
                  x2={node.x}
                  y2={node.y}
                  stroke="rgba(0,229,255,0.18)"
                  strokeWidth={0.25}
                />
                <motion.circle
                  r={0.6}
                  fill="#00E5FF"
                  animate={{
                    cx: [CENTER, node.x],
                    cy: [CENTER, node.y],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    delay: i * 0.25,
                    ease: "easeInOut",
                  }}
                />
              </g>
            ))}
          </svg>

          {/* Center node */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="hud-corner glass-panel-strong rounded-full h-28 w-28 md:h-32 md:w-32 flex flex-col items-center justify-center text-center shadow-glow-lg border-core-primary/40">
              <span className="font-display text-xs md:text-sm font-bold text-glow leading-tight">
                SNEXUS
                <br />
                CORE
              </span>
            </div>
            <span className="absolute inset-0 rounded-full border border-core-primary/30 animate-ping" />
          </motion.div>

          {/* Partner nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <div className="glass-panel rounded-full px-3 py-2 md:px-4 md:py-2.5 text-[10px] md:text-xs whitespace-nowrap border border-core-primary/20 hover:border-core-primary/60 hover:shadow-glow-sm transition-all">
                {node.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
