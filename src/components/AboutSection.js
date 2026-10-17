"use client";

import { CheckCircle2, Phone, MapPin, Building, UserCheck } from "lucide-react";
import Link from "next/link";

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center"
        }}>
          {/* Left Column: Real Photos */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: "4px solid #fef3c7"
            }}>
              <img
                src="/img4.jpeg"
                alt="Babo Bhali Kare Singhvi Jain Dharamshala Building Ramdevra"
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
              />
            </div>

            {/* Overlapping Small Badge with Sign */}
            <div style={{
              position: "absolute",
              bottom: "-25px",
              right: "20px",
              background: "linear-gradient(135deg, #78350f, #92400e)",
              color: "#ffffff",
              padding: "16px 24px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
              border: "2px solid #fcd34d",
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}>
              <div style={{ fontSize: "2rem" }}>🚩</div>
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fef3c7" }}>400m to Sacred Temple</div>
                <div style={{ fontSize: "0.82rem", opacity: 0.9 }}>Just 5 Minutes Easy Walk</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div>
            <div className="section-badge">
              <span>🙏</span>
              <span>Dedicated Pilgrim Accommodation</span>
            </div>

            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              color: "#1e293b",
              lineHeight: 1.25,
              marginBottom: "18px"
            }}>
              About Babo Bhali Kare Singhvi Jain Dharamshala
            </h2>

            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#475569",
              marginBottom: "16px"
            }}>
              Located near the Gram Panchayat in <strong>Ramdevra (Tehsil Pokaran, District Jaisalmer, Rajasthan)</strong>, 
              <strong> Babo Bhali Kare Singhvi Jain Dharamshala</strong> is dedicated to providing high-quality, fully air-conditioned, 
              and budget-friendly stays for devotees of Lord Baba Ramdevji, Jain pilgrims, and families visiting from all across India.
            </p>

            {/* Management Banner */}
            <div style={{
              background: "#fffbeb",
              border: "1px solid #fed7aa",
              borderRadius: "12px",
              padding: "14px 18px",
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "12px"
            }}>
              <UserCheck size={24} color="#b45309" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: "0.88rem", color: "#78350f" }}>
                <strong>Management by:</strong> Omprakash RajaRam Gusai<br />
                <span style={{ fontSize: "0.82rem", color: "#64748b" }}>
                  Shree Gusai Ashram Samiti & Shree Hari Om Ann-Kshetra Society
                </span>
              </div>
            </div>

            <p style={{
              fontSize: "0.98rem",
              lineHeight: 1.65,
              color: "#64748b",
              marginBottom: "24px"
            }}>
              Just a 5-minute walk from the main Baba Ramdevji Samadhi Mandir, the property offers 
              sparkling clean rooms, 24/7 hot water geysers, secure vehicle parking, and attentive service.
            </p>

            {/* Highlights List */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
              marginBottom: "30px"
            }}>
              {[
                "Fully Air-Conditioned rooms",
                "24/7 hot water geyser facility",
                "Spacious & secure vehicle parking",
                "Pure RO cold drinking water",
                "Elevator / lift for elderly pilgrims",
                "Pure vegetarian dining nearby"
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 600, color: "#334155" }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact & Action (Phone Only) */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <a
                href="tel:9413187706"
                className="btn btn-primary"
                style={{ padding: "14px 28px", fontSize: "1.05rem", fontWeight: 800 }}
              >
                <Phone size={18} />
                <span>Call Helpline: 9413187706</span>
              </a>
              <Link
                href="/contact"
                className="btn btn-secondary"
                style={{ padding: "14px 24px", fontSize: "0.95rem" }}
              >
                View Contact Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
