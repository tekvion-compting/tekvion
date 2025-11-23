import "./Hero.css";
import heroLogo from "../../assets/tekvion-image.png";
import heroBg from "../../assets/hero-bg.png";
import heroCurve from "../../assets/hero-curve.png";
import WorkWithUsButton from "./WorkWithUs";

export default function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="container hero-content">

          <div className="hero-left">
            <h1 className="hero-title">
              Smart Tech,<br /> Simple Solutions
            </h1>

            <p className="hero-subtext">
              Your all-in-one partner for software, IT solutions, 
              and digital innovation.
            </p>

            <WorkWithUsButton />
          </div>

          <div className="hero-right">
            <img src={heroLogo} alt="Tekvion Logo" className="hero-image" />
          </div>

        </div>

        <img src={heroCurve} alt="curve" className="hero-curve" />
      </div>

    </section>
  );
}

