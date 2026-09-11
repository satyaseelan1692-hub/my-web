import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import CommandCenter from "@/components/CommandCenter";
import { CORE_VALUES, TIMELINE } from "@/lib/data";

export const metadata: Metadata = {
  title: "About SNexus Technologies",
  description:
    "Learn about SNexus Technologies' story, mission, leadership and the engineering culture behind our enterprise IT, cloud and cyber security work.",
};

const LEADERSHIP = [
  { name: "A. Rahman", role: "Chief Executive Officer", focus: "Enterprise strategy & growth" },
  { name: "L. Tan", role: "Chief Technology Officer", focus: "Infrastructure & cloud architecture" },
  { name: "S. Kumar", role: "Head of Cyber Security", focus: "Security operations & compliance" },
  { name: "M. Wong", role: "Head of Software Engineering", focus: "Platform & product delivery" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SNexus"
        title="Engineering Trust Into Every System We Build"
        description="SNexus Technologies is an enterprise technology partner built by engineers, for engineers — and for the businesses that depend on them."
      />

      {/* Story / Vision / Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8">
          <div className="glass-panel hud-corner rounded-md p-8">
            <p className="eyebrow mb-3">Our Story</p>
            <p className="text-white/60 text-sm leading-relaxed">
              SNexus began as a small networking consultancy solving one client's connectivity
              problem at a time. Today we operate across infrastructure, cloud, security and
              software — but the instinct is the same: understand the business first, then build
              the system that serves it.
            </p>
          </div>
          <div className="glass-panel hud-corner rounded-md p-8">
            <p className="eyebrow mb-3">Vision</p>
            <p className="text-white/60 text-sm leading-relaxed">
              To be the technology backbone behind the region's most resilient enterprises —
              trusted with the infrastructure, data and systems that businesses cannot afford to
              lose.
            </p>
          </div>
          <div className="glass-panel hud-corner rounded-md p-8">
            <p className="eyebrow mb-3">Mission</p>
            <p className="text-white/60 text-sm leading-relaxed">
              Deliver enterprise-grade infrastructure, security and software with the
              responsiveness of a dedicated in-house team — measured in uptime, not promises.
            </p>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="py-16 border-t border-core-primary/10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow mb-3">Core Values</p>
          <h2 className="font-display text-3xl font-bold mb-12">What Every Engagement Runs On</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {CORE_VALUES.map((v) => (
              <div key={v.title} className="border-l-2 border-core-primary/40 pl-5">
                <h3 className="font-display font-semibold mb-1.5">{v.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 border-t border-core-primary/10">
        <div className="mx-auto max-w-4xl px-6">
          <p className="eyebrow mb-3 text-center">Company Timeline</p>
          <h2 className="font-display text-3xl font-bold mb-14 text-center">A Decade of Delivery</h2>
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-1 bottom-1 w-px cyber-divider" />
            <div className="space-y-10">
              {TIMELINE.map((item) => (
                <div key={item.year} className="relative">
                  <span className="absolute -left-8 top-1 h-3.5 w-3.5 rounded-full bg-core-primary shadow-glow-sm" />
                  <p className="font-display text-core-primary text-sm mb-1">{item.year}</p>
                  <p className="text-white/60 text-sm">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 border-t border-core-primary/10">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow mb-3">Leadership Team</p>
          <h2 className="font-display text-3xl font-bold mb-12">The People Behind the Systems</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEADERSHIP.map((person) => (
              <div key={person.name} className="glass-panel hud-corner rounded-md p-6 text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full border border-core-primary/30 flex items-center justify-center font-display text-core-primary">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="font-display font-semibold text-sm mb-1">{person.name}</h3>
                <p className="text-xs text-core-primary/80 mb-2">{person.role}</p>
                <p className="text-xs text-white/50">{person.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CommandCenter />

      {/* Why choose SNexus */}
      <section className="py-24 border-t border-core-primary/10">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
          <div>
            <p className="eyebrow mb-3">Why Choose SNexus</p>
            <h2 className="font-display text-3xl font-bold mb-5">
              One Partner, the Whole Stack
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Most enterprises stitch together a networking vendor, a cloud consultant, a security
              firm and a software house. We collapse that into a single accountable team that
              already understands your environment end to end.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "25+ certified engineers across every discipline",
              "500+ projects delivered across 7 industries",
              "24/7 monitored support with SLA-backed response",
              "Vendor-neutral: we design around your best fit, not our margin",
            ].map((point) => (
              <li key={point} className="flex gap-3 text-sm text-white/70">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-core-primary" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Let's Build Your Technology Roadmap"
        description="Talk to an engineer, not a sales script — we'll help you map the right infrastructure for where your business is headed."
      />
    </>
  );
}
