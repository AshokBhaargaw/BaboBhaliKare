"use client";

import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileBottomBar({ onOpenBooking }) {
  const whatsappUrl = "https://wa.me/919413187706?text=" + encodeURIComponent(
    "नमस्ते जी, मुझे बाबो भली करे सिंघवी जैन धर्मशाला (रामदेवरा) में रूम बुक करना है। कृपया उपलब्धता व किराया बताएं।"
  );

  return (
    <div className="mobile-bottom-bar">
      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          background: "linear-gradient(135deg, #25d366, #16a34a)",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.35)",
        }}
      >
        <MessageCircle size={20} />
        <span>व्हाट्सएप</span>
      </a>

      {/* Direct Call Button */}
      <a
        href="tel:9413187706"
        className="pulse-button"
        style={{
          background: "linear-gradient(135deg, #f59e0b, #d97706)",
          color: "#ffffff",
          boxShadow: "0 4px 12px rgba(217, 119, 6, 0.4)",
        }}
      >
        <Phone size={20} />
        <span>कॉल: 9413187706</span>
      </a>

      {/* Book Room Modal Trigger */}
      <button
        onClick={onOpenBooking}
        style={{
          background: "#1e293b",
          color: "#ffffff",
          height: "48px",
          width: "48px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          border: "1px solid #334155"
        }}
        aria-label="Book Room"
      >
        <Calendar size={20} color="#fcd34d" />
      </button>
    </div>
  );
}
