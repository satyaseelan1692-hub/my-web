"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Network,
  Cloud,
  ShieldCheck,
  PhoneCall,
  Code2,
  Headset,
  Camera,
  Boxes,
  MessagesSquare,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  "network-infrastructure": Network,
  "cloud-solutions": Cloud,
  "cyber-security": ShieldCheck,
  "voip-communications": PhoneCall,
  "software-development": Code2,
  "managed-it-services": Headset,
  "cctv-access-control": Camera,
  "microsoft-365": Boxes,
  "lark-collaboration": MessagesSquare,
};

export default function ServicesGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-3">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Every Layer of the Enterprise Stack
          </h2>
          <p className="text-white/60">
            Nine disciplines, one accountable team — from the network cabling in your server room
            to the cloud platform your teams log into every morning.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.slug] ?? Network;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 3) * 0.08 }}
                className="group relative"
              >
                <Link
                  href={`/services#${service.slug}`}
                  className="hud-corner glass-panel relative block h-full rounded-md p-6 transition-all duration-300 hover:border-core-primary/50 hover:shadow-glow"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-sm border border-core-primary/30 text-core-primary transition-all duration-300 group-hover:shadow-glow-sm group-hover:border-core-primary">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-6">{service.short}</p>
                  <div className="flex items-center gap-1 text-xs text-core-primary/80 group-hover:text-core-primary">
                    Explore
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-core-primary/[0.04] to-transparent" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
