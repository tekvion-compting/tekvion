import "./PricingHero.css";
import tekvionLogo from "../../assets/tekvion-logo.svg";

export default function PricingHero() {
  return (
    <section className="pricing-hero">
      {/* Full-width centered logo */}
      <img
        src={tekvionLogo}
        alt="Tekvion Computing"
        className="pricing-hero-logo"
      />

      {/* Constrained content */}
      <div className="pricing-hero-content">
        <span className="pricing-hero-badge">
          Website Creation Services
        </span>

        <h1 className="pricing-hero-title">
          Professional Websites
          <br />
          Built for Your Success
        </h1>

        <p className="pricing-hero-subtitle">
          Transform your business with a stunning, high-performance website.
          Transparent pricing, no hidden fees, and exceptional results.
        </p>

        <div className="pricing-hero-points">
          <span>✔ No Hidden Fees</span>
          <span>✔ Fast Turnaround</span>
          <span>✔ Ongoing Support</span>
        </div>
      </div>
    </section>
  );
}
