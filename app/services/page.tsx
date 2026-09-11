import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { SERVICES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore SNexus Technologies' full service catalogue: network infrastructure, cloud, cyber security, software development, VoIP, managed IT, CCTV, Microsoft 365 and Lark.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Nine Disciplines. One Accountable Team."
        description="Every service below is delivered by the same engineers who designed your network — no handoffs, no re-explaining your environment."
      />

      {/* Quick jump nav */}
      <div className="sticky top-16 z-30 glass-panel-strong border-b border-core-primary/10 overflow-x-auto">
        <div className="mx-auto max-w-7xl px-6 flex gap-6 py-3 text-xs whitespace-nowrap">
          {SERVICES.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="text-white/50 hover:text-core-primary">
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="divide-y divide-core-primary/10">
        {SERVICES.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            className="py-24 scroll-mt-32 relative"
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
                <div>
                  <p className="font-mono-data text-core-primary/50 text-xs mb-3">
                    {String(i + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                    {service.title}
                  </h2>
                  <p className="text-white/60 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <p className="eyebrow mb-3">Technology Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {service.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-core-primary/25 px-3 py-1 text-xs text-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="glass-panel hud-corner rounded-md p-5">
                    <p className="eyebrow mb-2">Case Study</p>
                    <p className="text-sm font-semibold mb-1">{service.caseStudy.title}</p>
                    <p className="text-sm text-white/55">{service.caseStudy.result}</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="eyebrow mb-3">Features</p>
                    <ul className="space-y-2.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-white/65">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-core-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Benefits</p>
                    <ul className="space-y-2.5 mb-6">
                      {service.benefits.map((b) => (
                        <li key={b} className="flex gap-2.5 text-sm text-white/65">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-core-secondary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <p className="eyebrow mb-3">Process</p>
                    <ol className="space-y-2">
                      {service.process.map((step, idx) => (
                        <li key={step} className="flex gap-3 text-sm text-white/65">
                          <span className="font-mono-data text-core-primary/60 text-xs">
                            {idx + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-block rounded-sm border border-core-primary/40 px-6 py-3 text-xs font-semibold tracking-wide text-core-primary hover:bg-core-primary/10 transition-colors"
                >
                  DISCUSS {service.title.toUpperCase()}
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
