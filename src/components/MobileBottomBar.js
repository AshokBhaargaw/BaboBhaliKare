"use client";

import { Phone, Calendar } from "lucide-react";

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <div className="mobile-bottom-bar" style={{
      display: "none",
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      height: "70px",
      background: "rgba(255, 255, 255, 0.98)",
      backdropFilter: "blur(12px)",
      borderTop: "1px solid #fed7aa",
      zIndex: 999,
      padding: "8px 16px",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "12px",
      boxShadow: "0 -4px 15px rgba(0, 0, 0, 0.08)",
    }}>
      {/* Primary Call Button (Phone Only - WhatsApp Removed) */}
      <a
        href="tel:9413187706"
        className="pulse-button"
        style={{
          flex: 1,
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          color: "#ffffff",
          fontSize: "1.1rem",
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 4px 15px rgba(217, 119, 6, 0.45)",
          border: "2px solid #fef3c7"
        }}
      >
        <Phone size={22} />
        <span>Call: 9413187706</span>
      </a>

      {/* Book Room Modal Trigger */}
      <button
        onClick={onOpenBooking}
        style={{
          background: "#1e293b",
          color: "#ffffff",
          height: "50px",
          padding: "0 18px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          flexShrink: 0,
          border: "1px solid #334155",
          fontSize: "0.95rem",
          fontWeight: 700
        }}
        aria-label="Book Room Inquiry"
      >
        <Calendar size={18} color="#fcd34d" />
        <span>Inquire</span>
      </button>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-bottom-bar {
            display: flex !important;
          }
        }
      `}</style>
    </div>
  );
}
