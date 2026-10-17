"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How far is Babo Bhali Kare Dharamshala from the main Baba Ramdev Temple?",
      a: "The Dharamshala is located approximately 400 meters from the sacred Baba Ramdevji Samadhi Mandir. It takes just 4 to 5 minutes on foot via a direct, paved street, making it very comfortable for senior citizens and families."
    },
    {
      q: "How can I book a room in advance?",
      a: "You can book directly by calling our official manager and helpline at 9413187706. Our team will verify your arrival dates and confirm room availability immediately over the phone."
    },
    {
      q: "What are the standard check-in and check-out timings?",
      a: "The standard check-in and check-out time is 10:00 AM. However, if your train or bus arrives earlier or departs later, our management does their best to accommodate your schedule subject to room availability."
    },
    {
      q: "Are vegetarian and Jain dining facilities available?",
      a: "Yes, pure vegetarian, Marwari, and Jain bhojanshala dining facilities are situated in the immediate vicinity of the Dharamshala, serving hygienic, freshly cooked satvik meals at nominal community rates."
    },
    {
      q: "Is there safe on-site parking for private cars and buses?",
      a: "Yes, the Dharamshala has an expansive and safe gated parking area that can comfortably accommodate private four-wheelers, traveler vans, and large pilgrim buses under 24/7 CCTV surveillance."
    },
    {
      q: "Is 24-hour hot water available during colder months?",
      a: "Yes, all rooms are equipped with modern electric geysers to ensure continuous 24/7 hot water supply for bathing and washing."
    },
    {
      q: "Can large yatri groups, sanghs, or bus tours be accommodated?",
      a: "Yes, we have dedicated large halls and multiple sanitary washroom facilities specifically designed for groups of 15 to 40+ pilgrims. For group discounts, please call directly at 9413187706."
    }
  ];

  return (
    <section id="faqs" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        
        {/* Header in English */}
        <div className="section-header">
          <div className="section-badge">
            <span>❓</span>
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Common Inquiries & Helpful Information
          </h2>
          <p className="section-subtitle">
            Find quick answers to common questions about stay, amenities, temple proximity, and booking rules.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  border: isOpen ? "1px solid #d97706" : "1px solid #fed7aa",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? "0 4px 15px rgba(217, 119, 6, 0.08)" : "0 2px 4px rgba(0,0,0,0.02)"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: "100%",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "1.02rem",
                    color: isOpen ? "#92400e" : "#1e293b",
                    background: isOpen ? "#fef3c7" : "#ffffff"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <HelpCircle size={18} color="#d97706" style={{ flexShrink: 0 }} />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                      color: "#b45309"
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: "18px 22px 22px 50px",
                    fontSize: "0.93rem",
                    color: "#475569",
                    lineHeight: 1.65,
                    borderTop: "1px solid #fed7aa",
                    background: "#ffffff"
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance (Phone Only) */}
        <div style={{
          marginTop: "36px",
          textAlign: "center",
          padding: "24px",
          background: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #e2e8f0"
        }}>
          <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "12px" }}>
            Have additional questions or need real-time room status? Call our manager directly:
          </p>
          <a
            href="tel:9413187706"
            className="btn btn-primary"
            style={{ padding: "12px 28px", fontSize: "1rem", fontWeight: 800 }}
          >
            <Phone size={18} /> Call Directly: 9413187706
          </a>
        </div>

      </div>
    </section>
  );
}
