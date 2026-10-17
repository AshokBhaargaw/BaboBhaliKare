"use client";

import { useState } from "react";
import { Calendar, Users, Home, Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function QuickBookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Deluxe AC Room (2-Bed)");
  const [guests, setGuests] = useState("2 Persons");

  const handleInquiry = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `नमस्ते बाबो भली करे धर्मशाला रामदेवरा! मुझे कमरा बुक करना है:\n- चेक-इन तारीख: ${checkIn || "जल्द से जल्द"}\n- चेक-आउट तारीख: ${checkOut || "1 दिन"}\n- रूम टाइप: ${roomType}\n- यात्रियों की संख्या: ${guests}\nकृपया उपलब्धता और किराया बताएं। धन्यवाद!`
    );
    window.open(`https://wa.me/919413187706?text=${message}`, "_blank");
  };

  return (
    <div style={{
      maxWidth: "1100px",
      margin: "-40px auto 40px auto",
      position: "relative",
      zIndex: 10,
      padding: "0 20px"
    }}>
      <div style={{
        background: "#ffffff",
        borderRadius: "18px",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(217, 119, 6, 0.08)",
        padding: "24px 28px",
        border: "1px solid #fed7aa"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "18px",
          borderBottom: "1px solid #f1f5f9",
          paddingBottom: "12px"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "1.2rem" }}>🗓️</span>
            <span style={{ fontWeight: 800, color: "#78350f", fontSize: "1.05rem" }}>
              त्वरित कमरा उपलब्धता एवं किराया जांचें
            </span>
          </div>
          <div style={{ fontSize: "0.85rem", color: "#64748b" }}>
            सीधा संपर्क नंबर: <a href="tel:9413187706" style={{ color: "#d97706", fontWeight: 700 }}>9413187706</a>
          </div>
        </div>

        <form onSubmit={handleInquiry} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          alignItems: "end"
        }}>
          {/* Check-in */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              चेक-इन तारीख (Check-in)
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.92rem",
                  color: "#1e293b",
                  outline: "none",
                  background: "#f8fafc"
                }}
              />
            </div>
          </div>

          {/* Check-out */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              चेक-आउट तारीख (Check-out)
            </label>
            <div style={{ position: "relative" }}>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.92rem",
                  color: "#1e293b",
                  outline: "none",
                  background: "#f8fafc"
                }}
              />
            </div>
          </div>

          {/* Room Type */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              कमरे का प्रकार (Room Type)
            </label>
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                fontSize: "0.92rem",
                color: "#1e293b",
                outline: "none",
                background: "#f8fafc",
                cursor: "pointer"
              }}
            >
              <option value="Deluxe AC Room (2-Bed)">डीलक्स AC कमरा (2 बेड)</option>
              <option value="Standard Non-AC Room (2-Bed)">नॉन-AC कमरा (2 बेड)</option>
              <option value="Family Suite AC (4-Bed)">फैमिली सुइट AC (4 बेड)</option>
              <option value="Yatri Group Hall / Dormitory">यात्री संघ हॉल / ग्रुप स्टे</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              यात्रियों की संख्या (Guests)
            </label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "10px",
                border: "1px solid #cbd5e1",
                fontSize: "0.92rem",
                color: "#1e293b",
                outline: "none",
                background: "#f8fafc",
                cursor: "pointer"
              }}
            >
              <option value="1-2 Persons">1 - 2 यात्री (Family / Couple)</option>
              <option value="3-4 Persons">3 - 4 यात्री (Small Family)</option>
              <option value="5-8 Persons">5 - 8 यात्री (Large Family)</option>
              <option value="10+ Persons Group">10+ यात्री (Group / Sangh)</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "100%",
                height: "46px",
                padding: "0 16px",
                fontSize: "0.95rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #059669, #047857)",
                color: "#ffffff"
              }}
            >
              <MessageCircle size={18} />
              <span>व्हाट्सएप पर पूछें</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
