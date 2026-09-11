import Hero from "@/components/Hero";
import CommandCenter from "@/components/CommandCenter";
import ServicesGrid from "@/components/ServicesGrid";
import TechEcosystem from "@/components/TechEcosystem";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CommandCenter />
      <ServicesGrid />
      <TechEcosystem />
      <CtaBand />
    </>
  );
}
