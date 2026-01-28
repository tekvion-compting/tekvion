import "./PricingGrid.css";
import PricingCard from "../PricingCard/PricingCard";

export default function PricingGrid() {
  return (
    <section className="pricing-grid">
      {/* Row 1 */}
      <PricingCard
        icon="📄"
        title="Landing Page"
        description="Perfect for a single focused page."
        price="R1500"
        included={[
          "Single page",
          "Responsive design",
          "Basic SEO",
          "Contact section",
          "Fast delivery",
        ]}
        excluded={[
          "CMS",
          "Advanced animations",
          "Custom integrations",
        ]}
      />

      <PricingCard
        icon="✨"
        title="Starter"
        description="Ideal for small businesses starting out."
        price="R3500"
        included={[
          "Up to 3 pages",
          "Responsive design",
          "Basic SEO",
          "Contact form",
          "Performance optimisation",
        ]}
        excluded={[
          "CMS",
          "Advanced integrations",
        ]}
      />

      <PricingCard
        icon="💼"
        title="Business"
        description="Best for established businesses."
        price="R5850"
        included={[
          "Up to 5 pages",
          "Custom styling",
          "SEO optimisation",
          "Contact forms",
          "Performance optimisation",
        ]}
        excluded={[
          "CMS",
          "Advanced integrations",
        ]}
      />

      {/* Row 2 */}
      <PricingCard
        icon="🚀"
        title="Professional"
        description="Most popular choice for growth-focused companies."
        price="R8500"
        popular
        included={[
          "Up to 8 pages",
          "Custom UI design",
          "Contact forms",
          "Advanced SEO and Google Maps",
          "CMS integration",
          "Analytics setup",
          "Performance optimisation",
          "Priority support (60 days post-launch)",
        ]}
      />

      <PricingCard
        icon="🏢"
        title="Enterprise"
        description="For large-scale or complex requirements."
        price={22500}
        from
        included={[
          "Unlimited pages",
          "Custom UI/UX",
          "Advanced SEO and Google Maps",
          "CMS integration",
          "Custom integrations",
          "Performance optimisation",
          "Dedicated support",
          "Email signatures",
        ]}
      />

      <PricingCard
        icon="👑"
        title="Custom"
        description="Tailored solution built around your needs."
        price="Custom Quote"
        priceSuffix=""
        included={[
          "Fully custom solution",
          "Custom integrations",
          "Scalable architecture",
          "Advanced security",
          "Priority support",
        ]}
      />
    </section>
  );
}
