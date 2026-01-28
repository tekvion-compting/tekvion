import "./PricingCard.css";

export default function PricingCard({
  icon,
  title,
  description,
  price,
  from = false,
  priceSuffix = "/ one-time",
  included = [],
  excluded = [],
  popular = false,
}) {
  const formattedPrice =
    typeof price === "number"
      ? price.toLocaleString("en-ZA", {
          style: "currency",
          currency: "ZAR",
          minimumFractionDigits: 0,
        })
      : price;

  return (
    <div className={`pricing-card ${popular ? "popular" : ""}`}>
      {popular && <span className="pricing-card-badge">Most Popular</span>}

      <div className="pricing-card-icon">{icon}</div>

      <h3 className="pricing-card-title">{title}</h3>
      <p className="pricing-card-description">{description}</p>

      {/* Price */}
      <div className="pricing-card-price">
        {from && <span className="from">From</span>}
        <span className="amount">{formattedPrice}</span>
        {!from && priceSuffix && (
          <span className="suffix">{priceSuffix}</span>
        )}
      </div>

      <div className="pricing-card-section">
        <p className="section-title">What's included:</p>
        <ul>
          {included.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>

      {excluded.length > 0 && (
        <div className="pricing-card-section excluded">
          <p className="section-title">Not included:</p>
          <ul>
            {excluded.map((item) => (
              <li key={item}>✕ {item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
