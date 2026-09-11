import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { OPEN_POSITIONS } from "@/lib/data";
import ApplyForm from "@/components/ApplyForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join SNexus Technologies. Explore open roles in network engineering, systems, software development and project management.",
};

const BENEFITS = [
  "Certifications and training fully sponsored",
  "Health coverage for you and dependents",
  "Flexible / hybrid work arrangements",
  "Performance-based bonuses",
  "Direct exposure to enterprise-scale infrastructure",
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the Infrastructure Enterprises Run On"
        description="We hire engineers who'd rather solve the hard problem than talk about it. If that's you, we'd like to meet you."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow mb-3">Open Positions</p>
          <h2 className="font-display text-3xl font-bold mb-10">Current Openings</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {OPEN_POSITIONS.map((role) => (
              <div
                key={role.slug}
                className="glass-panel hud-corner rounded-md p-6 flex items-center justify-between gap-4"
              >
                <div>
                  <h3 className="font-display font-semibold mb-1">{role.title}</h3>
                  <p className="text-xs text-white/45">
                    {role.type} · {role.location}
                  </p>
                </div>
                <a
                  href="#apply"
                  className="shrink-0 text-xs font-semibold text-core-primary border border-core-primary/40 rounded-sm px-4 py-2 hover:bg-core-primary/10 transition-colors"
                >
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-core-primary/10">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="eyebrow mb-3">Culture</p>
            <h2 className="font-display text-2xl font-bold mb-4">
              Engineers First, Hierarchy Second
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Decisions get made by whoever is closest to the problem. Our project managers
              protect engineering time, not fill it with status meetings — and every engineer
              gets direct exposure to enterprise-scale environments most people don't see until
              years into their career.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-3">Benefits</p>
            <ul className="space-y-3">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-white/65">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-core-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 border-t border-core-primary/10 scroll-mt-24">
        <div className="mx-auto max-w-2xl px-6">
          <p className="eyebrow mb-3 text-center">Apply Now</p>
          <h2 className="font-display text-3xl font-bold mb-10 text-center">
            Submit Your Application
          </h2>
          <ApplyForm positions={OPEN_POSITIONS.map((p) => p.title)} />
        </div>
      </section>
    </>
  );
}
