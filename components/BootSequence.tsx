"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const BOOT_LINES = [
  "Initializing SNexus Core",
  "Loading Network Infrastructure",
  "Connecting Cloud Services",
  "Activating Cyber Security",
  "Synchronizing Enterprise Modules",
  "Establishing Global Connectivity",
];

export default function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"lines" | "online" | "exit">("lines");

  // Reveal terminal lines one at a time.
  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) {
      const t = setTimeout(() => setPhase("online"), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 420);
    return () => clearTimeout(t);
  }, [visibleLines]);

  // Drive the progress bar in lockstep with the lines, then finish it off.
  useEffect(() => {
    const target = phase === "lines" ? Math.min(92, visibleLines * 16) : 100;
    const step = setInterval(() => {
      setProgress((p) => (p < target ? Math.min(target, p + 2) : p));
    }, 16);
    return () => clearInterval(step);
  }, [visibleLines, phase]);

  // Once "online", hold briefly then signal completion.
  useEffect(() => {
    if (phase !== "online") return;
    const t = setTimeout(() => setPhase("exit"), 1600);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(onComplete, 700);
    return () => clearTimeout(t);
  }, [phase, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-core-bg overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Background grid + scanline */}
      <div className="absolute inset-0 grid-cyber opacity-60" />
      <div className="absolute inset-0 bg-radial-fade" />
      <motion.div
        className="absolute left-0 right-0 h-24 bg-gradient-to-b from-transparent via-core-primary/10 to-transparent"
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 w-[90%] max-w-xl">
        {phase !== "online" && phase !== "exit" ? (
          <div className="glass-panel border-glow rounded-md p-6 md:p-8 font-mono-data">
            <div className="flex items-center gap-2 mb-4 text-core-primary/70 text-xs">
              <span className="h-2 w-2 rounded-full bg-core-primary animate-pulseGlow" />
              SNEXUS_CORE // BOOT SEQUENCE
            </div>
            <div className="space-y-2 min-h-[168px]">
              {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-sm md:text-base text-core-primary/90"
                >
                  <span className="text-core-primary/50">{`> `}</span>
                  {line}
                  {i === visibleLines - 1 && (
                    <span className="inline-block w-2 ml-1 bg-core-primary animate-blink">
                      &nbsp;
                    </span>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-[11px] text-white/50 mb-1">
                <span>SYSTEM BOOT</span>
                <span>{progress}%</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-core-secondary to-core-primary shadow-glow-sm"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 h-px w-24 cyber-divider" />
            <p className="eyebrow mb-3">SYSTEM ONLINE</p>
            <h1 className="font-display text-2xl md:text-4xl font-bold text-glow tracking-wide">
              WELCOME TO SNEXUS TECHNOLOGIES
            </h1>
            <div className="mx-auto mt-4 h-px w-24 cyber-divider" />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
