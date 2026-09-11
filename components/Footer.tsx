import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-core-primary/10 bg-core-card">
      <div className="absolute inset-x-0 top-0 h-px cyber-divider" />
      <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-2 w-2 rounded-full bg-core-primary shadow-glow-sm" />
            <span className="font-display font-bold tracking-wide">SNEXUS.</span>
          </div>
          <p className="text-sm text-white/50 leading-relaxed">
            Building the future of enterprise technology — infrastructure, cloud, security and
            software, engineered as one system.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/60 hover:text-core-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Services</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>Network Infrastructure</li>
            <li>Cloud Solutions</li>
            <li>Cyber Security</li>
            <li>Managed IT Services</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>hello@snexustechnologies.com</li>
            <li>+60 3-0000 0000</li>
            <li>Johor Bahru, Malaysia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-white/30">
        © {new Date().getFullYear()} SNexus Technologies. All rights reserved.
      </div>
    </footer>
  );
}
