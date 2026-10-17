"use client";

import { useState } from "react";
import { Calendar, Users, Home, Phone, ArrowRight } from "lucide-react";

export default function QuickBookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Deluxe AC Room (2-Bed)");
  const [guests, setGuests] = useState("2 Persons");

  const handleInquiry = (e) => {
    e.preventDefault();
    window.location.href = "tel:9413187706";
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
              Quick Room Availability & Booking Inquiry
            </span>
          </div>
          <div style={{ fontSize: "0.9rem", color: "#64748b" }}>
            Helpline: <a href="tel:9413187706" style={{ color: "#d97706", fontWeight: 800, fontSize: "1rem" }}>9413187706</a>
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
              Check-in Date
            </label>
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

          {/* Check-out */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              Check-out Date
            </label>
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

          {/* Room Type */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              Room Category
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
              <option value="Deluxe AC Room (2-Bed)">Deluxe AC Room (2-Bed)</option>
              <option value="Standard Non-AC Room (2-Bed)">Standard Non-AC Room (2-Bed)</option>
              <option value="Super Deluxe Family AC (4-Bed)">Super Deluxe Family AC (4-Bed)</option>
              <option value="Yatri Sangh Group Hall / Dormitory">Yatri Sangh Group Hall / Dormitory</option>
            </select>
          </div>

          {/* Guests */}
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "6px" }}>
              Number of Guests
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
              <option value="1-2 Persons">1 - 2 Guests (Family / Couple)</option>
              <option value="3-4 Persons">3 - 4 Guests (Small Family)</option>
              <option value="5-8 Persons">5 - 8 Guests (Large Family)</option>
              <option value="10+ Persons Group">10+ Guests (Tour Group / Sangh)</option>
            </select>
          </div>

          {/* Submit Direct Call Button (Phone Only) */}
          <div>
            <a
              href="tel:9413187706"
              className="btn btn-primary"
              style={{
                width: "100%",
                height: "46px",
                padding: "0 16px",
                fontSize: "0.95rem",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #d97706, #b45309)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <Phone size={18} />
              <span>Call to Book (9413187706)</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
