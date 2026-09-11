import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { PROJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A portfolio of SNexus Technologies deployments across networking, cloud migration, contact centres, cyber security and government infrastructure.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Delivered Work, Measured Outcomes"
        description="A selection of deployments across sectors — each one scoped, engineered and handed over with documentation your team can actually use."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.slug} className="glass-panel hud-corner rounded-md overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-core-secondary/20 to-core-bg grid-cyber relative flex items-center justify-center border-b border-core-primary/10">
                <span className="font-display text-core-primary/40 text-4xl">
                  {String(PROJECTS.indexOf(project) + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-display font-semibold text-lg mb-2">{project.title}</h2>
                <p className="text-sm text-white/55 leading-relaxed mb-4">{project.scope}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-core-primary/25 px-2.5 py-0.5 text-[11px] text-white/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-white/40 border-t border-white/5 pt-4">
                  <span className="font-mono-data">{project.timeline}</span>
                </div>
                <p className="mt-3 text-xs text-core-primary/80">{project.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Your Project Could Be Next"
        description="Tell us the outcome you need — we'll scope the deployment that gets you there."
      />
    </>
  );
}
