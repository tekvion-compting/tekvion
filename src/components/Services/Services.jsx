import "./Services.css";

import {
  Cloud,
  ShieldCheck,
  Server,
  Headset,
  Code2,
  Network,
  BarChart3,
  Bot,
  Computer
} from "lucide-react";

export default function Services() {
  const allServices = [
    {
      icon: <Cloud size={60} strokeWidth={1.5} />,
      title: "Cloud Services",
      desc: "Scalable cloud architecture and migration.",
    },
    {
      icon: <ShieldCheck size={60} strokeWidth={1.5} />,
      title: "Cybersecurity",
      desc: "Security audits, monitoring, and response.",
    },
    {
      icon: <Server size={60} strokeWidth={1.5} />,
      title: "Infrastructure",
      desc: "Reliable servers, networking, and ops.",
    },
    {
      icon: <Headset size={60} strokeWidth={1.5} />,
      title: "IT Support",
      desc: "24/7 support and system maintenance.",
    },
    {
      icon: <Code2 size={60} strokeWidth={1.5} />,
      title: "Software Development",
      desc: "Custom systems and web apps for scale.",
    },
    {
      icon: <Network size={60} strokeWidth={1.5} />,
      title: "Network Setup",
      desc: "LAN/WAN setup and stable connectivity.",
    },
    {
      icon: <BarChart3 size={60} strokeWidth={1.5} />,
      title: "Data Analytics",
      desc: "Dashboards and insights for decisions.",
    },
    {
      icon: <Bot size={60} strokeWidth={1.5} />,
      title: "AI & Automation",
      desc: "Smart automation and AI-driven workflows.",
    },
    {
      icon: <Computer size={60} strokeWidth={1.5} />,
      title: "IT Hardware Supply",
      desc: "Reliable laptops, servers, and equipment.",
    },
  ];

  return (
    <section className="services-section">
      <p className="services-tag">OUR EXPERTISE</p>
      <h2 className="services-title">Services</h2>

      <div className="services-grid">
        {allServices.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
