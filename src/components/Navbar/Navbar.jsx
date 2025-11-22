import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/tekvion-logo.svg";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    function onScroll() {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentY <= 20) {
            setVisible(true);
          } else if (currentY > lastScrollY.current + 5) {
            setVisible(false);
          } else if (currentY < lastScrollY.current - 5) {
            setVisible(true);
          }
          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    }

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768 && menuOpen) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  return (
    <header
      className={`navbar ${visible ? "" : "navbar--hidden"} ${
        menuOpen ? "menu-open" : ""
      }`}
      role="banner"
    >
      <div className="navbar-card">
        <div className="container navbar-content">
          <div className="navbar-left">
            <img src={logo} alt="Tekvion logo" className="navbar-logo" />
          </div>

          <div className="right-side">
            <nav
              className={`nav ${menuOpen ? "nav--open" : ""}`}
              role="navigation"
              aria-label="Main Navigation"
            >
              <a href="#services" className="nav-link">Services</a>
              <a href="#contact" className="nav-link">Contact us</a>
              <a href="#careers" className="nav-link">About</a>
            </nav>

            <a href="#book" className="btn btn-cta">Book Call</a>

            <button
              className="mobile-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span className="hamburger" />
            </button>
          </div>
        </div>
      </div>

      <div className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}>
        <a href="#services" className="mobile-link" onClick={() => setMenuOpen(false)}>Services</a>
        <a href="#contact" className="mobile-link" onClick={() => setMenuOpen(false)}>Contact us</a>
        <a href="#careers" className="mobile-link" onClick={() => setMenuOpen(false)}>Careers</a>

        <a href="#book" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          Book Call
        </a>
      </div>
    </header>
  );
}
