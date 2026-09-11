import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import { INDUSTRIES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industry Solutions",
  description:
    "SNexus Technologies solutions for government, healthcare, education, manufacturing, retail, SME and enterprise clients.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions by Industry"
        title="Built Around How Your Industry Actually Operates"
        description="The right technology stack looks different in a hospital than it does in a factory. We design around your operating reality, not a generic template."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-6">
          {INDUSTRIES.map((industry) => (
            <div key={industry.slug} className="glass-panel hud-corner rounded-md p-8">
              <h2 className="font-display text-xl font-bold mb-5 text-core-primary">
                {industry.name}
              </h2>

              <div className="space-y-5 text-sm">
                <div>
                  <p className="eyebrow mb-1.5 text-[10px]">Challenges</p>
                  <p className="text-white/60 leading-relaxed">{industry.challenges}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1.5 text-[10px]">Our Solution</p>
                  <p className="text-white/60 leading-relaxed">{industry.solutions}</p>
                </div>
                <div>
                  <p className="eyebrow mb-1.5 text-[10px]">Outcome</p>
                  <p className="text-white/60 leading-relaxed">{industry.benefits}</p>
                </div>
                <div className="cyber-divider" />
                <div>
                  <p className="eyebrow mb-1.5 text-[10px]">Case Study</p>
                  <p className="text-white/70">{industry.caseStudy}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Fits Your Business?"
        description="Every industry above started as a conversation about a specific problem. Let's have that conversation."
        primaryLabel="TALK TO AN ENGINEER"
      />
    </>
  );
}
