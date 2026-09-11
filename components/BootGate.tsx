"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import BootSequence from "./BootSequence";

export default function BootGate({ children }: { children: React.ReactNode }) {
  // null = not yet decided (avoids SSR/client flash), true/false once decided.
  const [booted, setBooted] = useState<boolean | null>(null);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("snexus-booted") === "true";
    setBooted(alreadyBooted);
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("snexus-booted", "true");
    setBooted(true);
  };

  if (booted === null) {
    // Render nothing (a blank black frame) for the split second we check sessionStorage.
    return <div className="fixed inset-0 bg-core-bg" />;
  }

  return (
    <>
      <AnimatePresence>{!booted && <BootSequence onComplete={handleComplete} />}</AnimatePresence>
      {booted && children}
    </>
  );
}
