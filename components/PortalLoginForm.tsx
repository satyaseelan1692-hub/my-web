"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";

export default function PortalLoginForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your identity provider / auth backend.
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <div className="glass-panel-strong hud-corner rounded-md p-8 md:p-10 shadow-glow-lg">
      <div className="flex items-center gap-2 mb-8">
        <ShieldCheck className="text-core-primary" size={20} />
        <span className="font-mono-data text-xs text-core-primary/80">SECURE LOGIN</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="portal-email">
            Email Address
          </label>
          <input
            id="portal-email"
            type="email"
            required
            autoComplete="username"
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="portal-password">
            Password
          </label>
          <input
            id="portal-password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
          />
        </div>

        <div className="flex items-center justify-between text-xs">
          <label className="flex items-center gap-2 text-white/50">
            <input type="checkbox" className="accent-core-primary" />
            Remember this device
          </label>
          <a href="#" className="text-core-primary/80 hover:text-core-primary">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-sm bg-core-primary py-3 text-sm font-semibold tracking-wide text-core-bg shadow-glow transition-transform hover:scale-[1.01] disabled:opacity-60"
        >
          {loading ? "AUTHENTICATING..." : "ACCESS PORTAL"}
        </button>
      </form>

      <p className="mt-6 text-center text-xs text-white/40">
        Not a client yet?{" "}
        <a href="/contact" className="text-core-primary/80 hover:text-core-primary">
          Get in touch
        </a>
      </p>
    </div>
  );
}
