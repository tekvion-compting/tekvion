import "./VisionAndMission.css";
import {
  ShieldCheck,
  Lightbulb,
  Users,
  Award,
  Lock,
  CheckCircle
} from "lucide-react";

export default function VisionAndMission() {
  return (
    <section className="vm-section" id="vision-mission">
      <div className="vm-container">

        <div className="vm-block vm-orange">
          <h2 className="vm-title gradient-orange">Our Mission</h2>
          <p className="vm-text">
            To empower businesses through smart, secure, and reliable technology solutions
            that simplify operations, drive innovation, and enable measurable growth.
          </p>
        </div>

        <div className="vm-block vm-blue">
          <h2 className="vm-title gradient-blue">Our Vision</h2>
          <p className="vm-text">
            To become one of Africa’s most trusted IT consulting and digital transformation
            companies, recognised for delivering smart technology with simple, powerful results.
          </p>
        </div>

        <h3 className="values-heading">Our Core Values</h3>

        <div className="vm-values">
          <div className="vm-card">
            <ShieldCheck size={34} className="vm-icon" />
            <h4>Integrity</h4>
            <p>We operate with honesty, professionalism, and transparency.</p>
          </div>

          <div className="vm-card">
            <Lightbulb size={34} className="vm-icon" />
            <h4>Innovation</h4>
            <p>We embrace creativity and forward-thinking technology.</p>
          </div>

          <div className="vm-card">
            <Users size={34} className="vm-icon" />
            <h4>Collaboration</h4>
            <p>We believe in teamwork and building long-term partnerships.</p>
          </div>

          <div className="vm-card">
            <Award size={34} className="vm-icon" />
            <h4>Excellence</h4>
            <p>We deliver quality and precision in everything we do.</p>
          </div>

          <div className="vm-card">
            <Lock size={34} className="vm-icon" />
            <h4>Security</h4>
            <p>We protect data, systems, and client trust with utmost care.</p>
          </div>

          <div className="vm-card">
            <CheckCircle size={34} className="vm-icon" />
            <h4>Reliability</h4>
            <p>Delivering consistent, dependable solutions our clients can count on.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
