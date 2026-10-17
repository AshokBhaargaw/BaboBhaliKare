"use client";

import { Phone, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero({ onOpenBooking }) {
  return (
    <section style={{
      position: "relative",
      minHeight: "85vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(rgba(15, 23, 42, 0.75), rgba(120, 53, 15, 0.7)), url('/img3.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
      padding: "70px 0 90px",
    }}>
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        
        {/* Spiritual Pill Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 22px",
          background: "rgba(254, 243, 199, 0.95)",
          color: "#92400e",
          borderRadius: "9999px",
          fontWeight: 800,
          fontSize: "0.95rem",
          marginBottom: "24px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          border: "1px solid #fde68a"
        }}>
          <span>🚩</span>
          <span>Babo Bhali Kare • Holy Pilgrimage City of Ramdevra</span>
        </div>

        {/* Main Headings */}
        <h1 style={{
          fontSize: "clamp(2rem, 4.8vw, 3.6rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: "16px",
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
          color: "#ffffff"
        }}>
          Best Dharmshala in Ramdevra
          <span style={{
            display: "block",
            color: "#fcd34d",
            fontSize: "clamp(1.4rem, 3.2vw, 2.3rem)",
            marginTop: "10px",
            fontWeight: 700
          }}>
            Babo Bhali Kare Singhvi Jain Dharamshala
          </span>
        </h1>

        <p style={{
          fontSize: "clamp(1rem, 2.2vw, 1.25rem)",
          fontWeight: 600,
          color: "#fef3c7",
          marginBottom: "20px",
          textShadow: "0 2px 6px rgba(0, 0, 0, 0.5)"
        }}>
          Shree Gusai Ashram Samiti • Shree Hari Om Ann-Kshetra Society • Ramdevra (Pokhran)
        </p>

        <p style={{
          maxWidth: "800px",
          margin: "0 auto 32px auto",
          fontSize: "1.05rem",
          lineHeight: 1.65,
          color: "#f1f5f9",
          textShadow: "0 1px 4px rgba(0,0,0,0.5)"
        }}>
          Looking for a clean, comfortable, and peaceful <strong>dharmshala in Ramdevra</strong>? 
          Located near Gram Panchayat, just <strong>400 meters (5 minutes walk)</strong> from the sacred <strong>Baba Ramdevji Samadhi Mandir</strong>. 
          Enjoy fully air-conditioned AC and Non-AC family rooms, 24/7 hot water geysers, secure car/bus parking, elevator for seniors, and warm Rajasthani hospitality.
        </p>

        {/* Feature Badges */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "850px",
          margin: "0 auto 36px auto"
        }}>
          {[
            "🚶 400m from Baba Ramdev Temple",
            "❄️ Fully Air-Conditioned Rooms",
            "♨️ 24/7 Hot Water Geysers",
            "🚗 Free On-Site Parking",
            "🛡️ 24x7 CCTV Security",
            "🍲 Pure Vegetarian Dining Nearby"
          ].map((tag, i) => (
            <span key={i} style={{
              background: "rgba(255, 255, 255, 0.18)",
              backdropFilter: "blur(8px)",
              padding: "7px 16px",
              borderRadius: "30px",
              fontSize: "0.88rem",
              fontWeight: 700,
              border: "1px solid rgba(255, 255, 255, 0.3)",
              color: "#ffffff"
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Main CTA Buttons (Phone Call Only) */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "44px"
        }}>
          {/* Primary Call Button */}
          <a
            href="tel:9413187706"
            className="btn btn-primary btn-lg pulse-button"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              fontSize: "1.18rem",
              padding: "16px 36px",
              minWidth: "250px",
              boxShadow: "0 10px 25px rgba(217, 119, 6, 0.5)",
              border: "2px solid #fef3c7"
            }}
          >
            <Phone size={24} />
            <span>Call Now: 9413187706</span>
          </a>

          {/* Book Room Modal Trigger */}
          <button
            onClick={onOpenBooking}
            className="btn btn-outline-white btn-lg"
            style={{ fontSize: "1.05rem", padding: "16px 30px" }}
          >
            Book Room Inquiry
          </button>

          {/* Contact Page Link */}
          <Link
            href="/contact"
            className="btn btn-secondary btn-lg"
            style={{ fontSize: "1.05rem", padding: "16px 28px", borderColor: "#f59e0b", color: "#92400e" }}
          >
            <span>Contact Details</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Location & Direct Maps Link */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(0, 0, 0, 0.5)",
          backdropFilter: "blur(6px)",
          padding: "10px 22px",
          borderRadius: "50px",
          fontSize: "0.92rem",
          color: "#f1f5f9"
        }}>
          <MapPin size={16} color="#fbbf24" />
          <span>Near Gram Panchayat, PO: Ramdevra, Teh: Pokaran, Dist: Jaisalmer (Rajasthan) - 345023</span>
          <a
            href="https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fcd34d",
              fontWeight: 800,
              textDecoration: "underline",
              marginLeft: "6px"
            }}
          >
            View on Google Maps ↗
          </a>
        </div>

      </div>
    </section>
  );
}
