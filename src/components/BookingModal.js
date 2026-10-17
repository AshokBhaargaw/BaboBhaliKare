"use client";

import { useState } from "react";
import { X, Phone, Calendar, Users, Home, CheckCircle2 } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Deluxe AC Room (2-Bed)");
  const [guests, setGuests] = useState("2 Persons");
  const [roomsCount, setRoomsCount] = useState("1 Room");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "560px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
          border: "2px solid #fed7aa",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          background: "linear-gradient(135deg, #78350f, #b45309)",
          color: "#ffffff",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px"
        }}>
          <div>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fef3c7" }}>
              Room Booking Inquiry
            </div>
            <div style={{ fontSize: "0.82rem", opacity: 0.9 }}>
              Babo Bhali Kare Singhvi Jain Dharamshala • Ramdevra
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "6px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: "24px" }}>
          
          {/* Prominent Direct Call Banner */}
          <div style={{
            background: "#fffbeb",
            border: "2px solid #f59e0b",
            borderRadius: "14px",
            padding: "16px 20px",
            marginBottom: "20px",
            textAlign: "center"
          }}>
            <div style={{ fontSize: "0.85rem", color: "#78350f", fontWeight: 700, marginBottom: "4px" }}>
              Direct Booking Helpline (Instant Confirmation):
            </div>
            <a
              href="tel:9413187706"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                fontWeight: 900,
                color: "#b45309",
                fontSize: "1.7rem",
                textDecoration: "none"
              }}
            >
              <Phone size={24} /> 9413187706
            </a>
            <div style={{ fontSize: "0.78rem", color: "#64748b", marginTop: "2px" }}>
              Manager: Omprakash RajaRam Gusai
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.9rem",
                      outline: "none"
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                    Room Category
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.88rem",
                      outline: "none",
                      background: "#ffffff"
                    }}
                  >
                    <option value="Deluxe AC Room (2-Bed)">Deluxe AC Room (2-Bed)</option>
                    <option value="Standard Non-AC Room (2-Bed)">Standard Non-AC Room (2-Bed)</option>
                    <option value="Super Deluxe Family AC (4-Bed)">Super Deluxe Family AC (4-Bed)</option>
                    <option value="Yatri Sangh Group Hall / Dormitory">Group Hall / Dormitory</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                    Guests Count
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "8px",
                      border: "1px solid #cbd5e1",
                      fontSize: "0.88rem",
                      outline: "none",
                      background: "#ffffff"
                    }}
                  >
                    <option value="1-2 Guests">1 - 2 Guests</option>
                    <option value="3-4 Guests">3 - 4 Guests</option>
                    <option value="5-8 Guests">5 - 8 Guests</option>
                    <option value="10+ Guests">10+ Guests (Group / Sangh)</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                  Special Note or Arrival Time (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Ground floor preferred, late night train arrival..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    border: "1px solid #cbd5e1",
                    fontSize: "0.88rem",
                    outline: "none",
                    fontFamily: "inherit",
                    resize: "vertical"
                  }}
                />
              </div>

              {/* Action Buttons (Phone Only) */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: "0.95rem", borderColor: "#f59e0b", color: "#92400e" }}
                >
                  Save Inquiry & Proceed to Call
                </button>

                <a
                  href="tel:9413187706"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "1.05rem", fontWeight: 800 }}
                >
                  <Phone size={20} />
                  <span>Call Directly: 9413187706</span>
                </a>
              </div>
            </form>
          ) : (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                background: "#dcfce7",
                color: "#15803d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto"
              }}>
                <CheckCircle2 size={36} />
              </div>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1e293b", marginBottom: "8px" }}>
                Thank you, {name || "Pilgrim"}!
              </h3>
              <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "24px", lineHeight: 1.6 }}>
                Your room request details have been recorded. Please dial our manager below to immediately confirm room allocation:
              </p>
              <a
                href="tel:9413187706"
                className="btn btn-primary pulse-button"
                style={{ width: "100%", justifyContent: "center", padding: "16px", fontSize: "1.15rem", fontWeight: 900 }}
              >
                <Phone size={22} />
                <span>Call Now: 9413187706</span>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
