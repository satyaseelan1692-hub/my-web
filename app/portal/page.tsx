import type { Metadata } from "next";
import {
  Ticket,
  Boxes,
  GanttChartSquare,
  FileText,
  BookOpen,
  Activity,
} from "lucide-react";
import PortalLoginForm from "@/components/PortalLoginForm";

export const metadata: Metadata = {
  title: "Client Portal",
  description: "Log in to the SNexus Technologies client portal to manage tickets, assets, projects and invoices.",
};

const FEATURES = [
  { icon: Ticket, title: "Ticket Management", desc: "Raise, track and escalate support tickets in real time." },
  { icon: Boxes, title: "Asset Tracking", desc: "Full visibility of every device and licence under management." },
  { icon: GanttChartSquare, title: "Project Tracking", desc: "Live status on every active deployment and milestone." },
  { icon: FileText, title: "Invoice Downloads", desc: "Access and download invoices and service agreements." },
  { icon: BookOpen, title: "Knowledge Base", desc: "Searchable documentation for your specific environment." },
  { icon: Activity, title: "SLA Dashboard", desc: "Real-time SLA compliance and response time reporting." },
];

export default function PortalPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-cyber opacity-30" />
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="relative mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="eyebrow mb-3">Client Portal</p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-5">
            Your Environment, One Login Away
          </h1>
          <p className="text-white/60 mb-10 max-w-md">
            Existing clients can access tickets, assets, projects, invoices and SLA reporting
            through the secure client portal.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-core-primary/30 text-core-primary">
                  <f.icon size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-0.5">{f.title}</p>
                  <p className="text-xs text-white/45 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PortalLoginForm />
      </div>
    </section>
  );
}
