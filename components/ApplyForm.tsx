"use client";

import { useState } from "react";

export default function ApplyForm({ positions }: { positions: string[] }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your ATS or backend endpoint of choice.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-panel hud-corner rounded-md p-8 text-center">
        <p className="font-display text-core-primary text-lg mb-2">Application Received</p>
        <p className="text-sm text-white/60">
          Our talent team will review your submission and reach out within 5 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel hud-corner rounded-md p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone Number" name="phone" type="tel" />
        <div>
          <label className="mb-1.5 block text-xs text-white/50" htmlFor="position">
            Position Applying For
          </label>
          <select
            id="position"
            name="position"
            required
            className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm text-white focus:border-core-primary focus:outline-none"
          >
            <option value="">Select a role</option>
            {positions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-white/50" htmlFor="message">
          Cover Note
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm text-white focus:border-core-primary focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs text-white/50" htmlFor="resume">
          Resume / CV
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full text-xs text-white/50 file:mr-4 file:rounded-sm file:border file:border-core-primary/30 file:bg-transparent file:px-4 file:py-2 file:text-xs file:text-core-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-sm bg-core-primary py-3 text-sm font-semibold tracking-wide text-core-bg shadow-glow transition-transform hover:scale-[1.01]"
      >
        SUBMIT APPLICATION
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs text-white/50" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-sm border border-core-primary/25 bg-core-bg/60 px-3.5 py-2.5 text-sm text-white focus:border-core-primary focus:outline-none"
      />
    </div>
  );
}
