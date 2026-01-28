import { useEffect } from "react";

import PricingHero from "../components/PricingHero/PricingHero";
import PricingGrid from "../components/PricingGrid/PricingGrid";
import FAQSection from "../components/FAQ/FAQSection";
import FooterNote from "../components/FooterNote/FooterNote";
import ConfidentialWatermark from "../components/ConfidentialWatermark/ConfidentialWatermark";

export default function PrivatePricingPage() {
  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    return () => document.head.removeChild(meta);
  }, []);

  return (
    <main style={{ position: "relative" }}>
      <ConfidentialWatermark />

      <PricingHero />
      <PricingGrid />
      <FAQSection />
      <FooterNote />
    </main>
  );
}
