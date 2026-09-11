"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Network Infrastructure",
  "Cloud Solutions",
  "Cyber Security",
  "Software Development",
  "VoIP Communications",
  "Managed IT Services",
  "CCTV & Access Control",
  "Microsoft 365",
  "Lark Collaboration",
  "Something else",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your backend / email provider of choice.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-panel hud-corner rounded-md p-8 text-center">
        <p className="font-display text-core-primary text-lg mb-2">Message Sent</p>
        <p className="text-sm text-white/60">
          A member of our team will respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel hud-corner rounded-md p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-white/50" htmlFor="service">
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
        >
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-white/50" htmlFor="message">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm focus:border-core-primary focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-core-primary py-3 text-sm font-semibold tracking-wide text-core-bg shadow-glow transition-transform hover:scale-[1.01]"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
