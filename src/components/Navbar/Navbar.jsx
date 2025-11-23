import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/tekvion-logo.svg";
import WorkWithUsButton from "../Hero/WorkWithUs";

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
          if (currentY <= 20) setVisible(true);
          else if (currentY > lastScrollY.current + 5) setVisible(false);
          else if (currentY < lastScrollY.current - 5) setVisible(true);

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
      if (window.innerWidth >= 768 && menuOpen) setMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

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
              <a href="#services" className="nav-link" onClick={handleNavClick}>Services</a>
              <a href="#about" className="nav-link" onClick={handleNavClick}>About</a>
              <a href="#vision-mission" className="nav-link" onClick={handleNavClick}>Mission and Vision</a>
              <a href="#contact" className="nav-link" onClick={handleNavClick}>Contact us</a>
            </nav>

            <WorkWithUsButton />

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
        <a href="#about" className="mobile-link" onClick={handleNavClick}>About</a>
        <a href="#services" className="mobile-link" onClick={handleNavClick}>Services</a>
        <a href="#contact" className="mobile-link" onClick={handleNavClick}>Contact us</a>

        <WorkWithUsButton />
      </div>
    </header>
  );
}
