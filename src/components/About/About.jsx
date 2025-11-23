import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-blob about-blob-orange"></div>
      <div className="about-blob about-blob-blue"></div>

      <div className="about-container">

        <div className="about-centered">
          <h2 className="about-title gradient-orange">Who We Are</h2>

          <p className="about-text centered-text">
            Tekvion Computing is a South African-based IT consulting company built on the belief
            that smart technology should deliver simple solutions. We help businesses modernize,
            automate, and secure their operations through practical, scalable, and innovative
            digital solutions.
          </p>

          <p className="about-text centered-text">
            Whether it’s IT support, cloud migration, system automation, or software development,
            Tekvion Computing turns technology into a powerful enabler of growth and efficiency.
            Our tagline, <strong>“Smart Tech, Simple Solution,”</strong> reflects exactly how we
            think and work.
          </p>
        </div>

        <div className="about-story-centered">
          <h3 className="about-subtitle gradient-blue">Our Story</h3>

          <p className="about-text centered-text">
            Tekvion Computing was founded by five passionate professionals, united by a shared
            vision to make technology more accessible, affordable, and impactful for African
            businesses.
          </p>

          <p className="about-text centered-text">
            What began as a mission to help small enterprises bridge the digital divide has grown
            into a multidisciplinary team delivering cutting-edge IT solutions tailored to each
            client. At Tekvion Computing, we believe innovation should be practical and impactful.
          </p>
        </div>

      </div>
    </section>
  );
}
