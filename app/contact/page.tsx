import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Mail, Phone, MapPin, LifeBuoy, Briefcase, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SNexus Technologies for sales, technical support or emergency IT assistance.",
};

const CHANNELS = [
  {
    icon: Briefcase,
    label: "Sales",
    detail: "sales@snexustechnologies.com",
    sub: "+60 3-0000 0001",
  },
  {
    icon: LifeBuoy,
    label: "Technical Support",
    detail: "support@snexustechnologies.com",
    sub: "+60 3-0000 0002 · 24/7",
  },
  {
    icon: AlertTriangle,
    label: "Emergency Response",
    detail: "emergency@snexustechnologies.com",
    sub: "+60 3-0000 0003 · Priority line",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Infrastructure"
        description="Whether it's a new project, an ongoing incident, or a question about your current setup — reach the right team below."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12">
          <div>
            <div className="grid gap-4 mb-10">
              {CHANNELS.map((c) => (
                <div key={c.label} className="glass-panel hud-corner rounded-md p-5 flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-core-primary/30 text-core-primary">
                    <c.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-white/45 mb-0.5">{c.label}</p>
                    <p className="text-sm font-medium">{c.detail}</p>
                    <p className="text-xs text-white/45">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel hud-corner rounded-md p-5 flex gap-4 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-core-primary/30 text-core-primary">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-white/45 mb-0.5">Head Office</p>
                <p className="text-sm">Johor Bahru, Johor, Malaysia</p>
              </div>
            </div>

            <div className="rounded-md overflow-hidden border border-core-primary/15 aspect-video">
              <iframe
                title="SNexus Technologies office location"
                className="h-full w-full grayscale invert-[0.92] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Johor+Bahru,+Johor,+Malaysia&output=embed"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      <WhatsAppButton />
    </>
  );
}
