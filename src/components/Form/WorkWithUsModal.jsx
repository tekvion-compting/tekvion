import { useState } from "react";
import "./WorkWithUsModal.css";

export default function WorkWithUsModal({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = {
      access_key: "c70a5393-a15b-475a-b2b4-87222705c5e1",
      name: form.name,
      email: form.email,
      contact: form.contact,
      message: form.message,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>×</button>

        <h2>Work With Us</h2>
        <p className="modal-sub">
          Fill in your details and we’ll contact you shortly.
        </p>

        <form className="modal-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Name and Surname"
            required
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            value={form.contact}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us what services you need..."
            required
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" className="modal-btn">
            {status === "sending" ? "Sending..." : "Submit"}
          </button>
        </form>

        {status === "success" && (
          <p className="success-msg">Your message has been sent!</p>
        )}
        {status === "error" && (
          <p className="error-msg">Failed to send. Try again.</p>
        )}
      </div>
    </div>
  );
}
