import "./Footer.css";
import logo from "../../assets/tekvion-image.png";
import { FacebookIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        <div className="footer-col">
          <img
            src={logo}
            alt="Tekvion Logo"
            className="footer-logo"
          />
          <h2 className="footer-title">TEKVION COMPUTING</h2>
          <p className="footer-text">Smart Tech, Simple Solutions.</p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#vision-mission">Mission and Vission</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact Us</h3>
          <p className="footer-text">
            Email:
            <a href="mailto:info@tekvion.co.za" className="footer-email">
              info@tekvion.co.za
            </a>
          </p>

          <div className="footer-social">
            <a href="https://www.facebook.com/share/17g4XHFypN/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FacebookIcon size={26} /></a>
            <a href="https://www.linkedin.com/company/tekvion-computing/" target="_blank" rel="noopener noreferrer"><LinkedinIcon size={26} /></a>
            <a href="https://www.instagram.com/tekvion_computing?igsh=MXJtbGx4ZHprbW03YQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"><InstagramIcon size={26} /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Tekvion Computing — Smart Tech, Simple Solutions
      </div>
    </footer>
  );
}
