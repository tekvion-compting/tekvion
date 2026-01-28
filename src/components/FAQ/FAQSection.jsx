import { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css";

const FAQS = [
  {
    question: "What is included in the setup?",
    answer:
      "The setup includes design, development, mobile responsiveness, basic SEO, and deployment.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Most websites are completed within 2–4 weeks depending on scope and feedback turnaround.",
  },
  {
    question: "Do you provide hosting?",
    answer:
      "Hosting is not included, but we can recommend reliable providers or manage it for you.",
  },
  {
    question: "What if I need changes after launch?",
    answer:
      "We offer ongoing support and maintenance packages for post-launch updates.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. Payment plans are available for selected packages, please ask for details.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-subtitle">
        Everything you need to know about our website creation services.
      </p>

      <div className="faq-list">
        {FAQS.map((faq, index) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </section>
  );
}
