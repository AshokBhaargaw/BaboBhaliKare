"use client";

import { useState } from "react";
import { Users, Bed, Check, Phone, ArrowRight } from "lucide-react";

export default function RoomsSection({ onOpenBooking }) {
  const [filter, setFilter] = useState("all");

  const rooms = [
    {
      id: "ac-deluxe-2",
      category: "ac",
      title: "Deluxe AC Room (2-Bed)",
      image: "/images/room-ac.jpg",
      capacity: "2 - 3 Guests",
      bedType: "2 Single / 1 Double Bed",
      description: "Air-conditioned comfort with clean tiled flooring, comfortable mattresses, attached bathroom, and 24/7 hot water geyser.",
      features: [
        "Split Air Conditioning (AC)",
        "Attached bathroom with Western / Indian toilet",
        "24x7 Hot water geyser facility",
        "Freshly laundered white linens & pillows",
        "Multiple mobile charging points",
        "Daily housekeeping & sanitization"
      ],
      popular: true,
      tag: "Most Popular"
    },
    {
      id: "non-ac-standard-2",
      category: "non-ac",
      title: "Standard Non-AC Room (2-Bed)",
      image: "/images/room-ac.jpg",
      capacity: "2 - 3 Guests",
      bedType: "2 Comfortable Beds",
      description: "Well-ventilated budget room with attached bathroom, high-speed ceiling fan / desert cooler, and hot water supply.",
      features: [
        "High-speed ceiling fan / desert cooler",
        "Clean attached private bathroom",
        "Hot water geyser facility",
        "Clean beds, blankets & pillows",
        "Large bright windows for natural light",
        "Affordable pilgrim budget rates"
      ],
      popular: false,
      tag: "Budget Friendly"
    },
    {
      id: "family-ac-4",
      category: "family",
      title: "Super Deluxe Family AC Suite (4-Bed)",
      image: "/images/room-family.jpg",
      capacity: "4 - 6 Guests",
      bedType: "4 Full-Size Beds (Family Suite)",
      description: "Spacious suite designed for families and elderly travelers. Ample luggage room, large attached bathroom, and powerful AC.",
      features: [
        "High-capacity split air conditioning",
        "4 comfortable individual beds",
        "Spacious attached bathroom with geyser",
        "Storage wardrobe & luggage space",
        "Extremely convenient for seniors & kids",
        "Safe and secure family environment"
      ],
      popular: true,
      tag: "Best for Families"
    },
    {
      id: "group-hall",
      category: "hall",
      title: "Yatri Sangh Group Hall / Dormitory",
      image: "/images/room-family.jpg",
      capacity: "10 to 30+ Pilgrims",
      bedType: "Multiple Beds & Clean Mattresses",
      description: "Large community hall designed for padayatri sanghs, tour buses, and bhajan groups traveling together to Ramdevra.",
      features: [
        "Expansive space for large groups",
        "Multiple separate hygienic bathrooms",
        "High-speed ceiling fans & coolers",
        "Ideal for community satsang & rest",
        "Secure luggage holding area",
        "Special discounted group / sangh rates"
      ],
      popular: false,
      tag: "Group & Sangh Stay"
    }
  ];

  const filteredRooms = filter === "all" ? rooms : rooms.filter(r => r.category === filter);

  return (
    <section id="rooms" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>🛏️</span>
            <span>Accommodations & Rates</span>
          </div>
          <h2 className="section-title">
            AC & Non-AC Rooms – Dharmshala in Ramdevra
          </h2>
          <p className="section-subtitle">
            Experience clean, peaceful, and budget-friendly stay options at Babo Bhali Kare Dharmshala in Ramdevra. 
            Choose from AC Deluxe, Standard Non-AC, Family Suites, and Group Dormitories just 200m from Baba Ramdev Temple. 
            For direct phone reservations, call <strong>9413187706</strong>.
          </p>

          {/* Filter Tabs in English */}
          <div style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            background: "#ffffff",
            padding: "6px",
            borderRadius: "30px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            marginTop: "20px",
            border: "1px solid #fed7aa"
          }}>
            {[
              { id: "all", label: "All Rooms" },
              { id: "ac", label: "AC Deluxe" },
              { id: "non-ac", label: "Non-AC Standard" },
              { id: "family", label: "Family Suites" },
              { id: "hall", label: "Group Halls" },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  background: filter === tab.id ? "linear-gradient(135deg, #d97706, #b45309)" : "transparent",
                  color: filter === tab.id ? "#ffffff" : "#64748b"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Room Cards Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px"
        }}>
          {filteredRooms.map(room => (
            <div
              key={room.id}
              style={{
                background: "#ffffff",
                borderRadius: "18px",
                overflow: "hidden",
                border: "1px solid #f1f5f9",
                boxShadow: "0 4px 15px rgba(0,0,0,0.05)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                position: "relative"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 28px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.05)";
              }}
            >
              {/* Image & Tag */}
              <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                <img
                  src={room.image}
                  alt={room.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  top: "14px",
                  left: "14px",
                  background: room.popular ? "linear-gradient(135deg, #d97706, #b45309)" : "rgba(15, 23, 42, 0.8)",
                  color: "#ffffff",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  padding: "4px 12px",
                  borderRadius: "20px",
                  letterSpacing: "0.02em",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}>
                  {room.tag}
                </div>
              </div>

              {/* Room Content */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1e293b", marginBottom: "4px" }}>
                    {room.title}
                  </h3>
                </div>

                {/* Capacity & Bed Info */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "10px 14px",
                  background: "#fef3c7",
                  borderRadius: "10px",
                  marginBottom: "16px",
                  fontSize: "0.85rem",
                  color: "#78350f",
                  fontWeight: 600
                }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Users size={16} /> {room.capacity}
                  </span>
                  <span>•</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Bed size={16} /> {room.bedType}
                  </span>
                </div>

                <p style={{ fontSize: "0.9rem", color: "#64748b", lineHeight: 1.55, marginBottom: "18px" }}>
                  {room.description}
                </p>

                {/* Amenities List */}
                <div style={{ marginBottom: "22px", flex: 1 }}>
                  <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#475569", textTransform: "uppercase", marginBottom: "8px", letterSpacing: "0.05em" }}>
                    Room Inclusions:
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "7px" }}>
                    {room.features.map((feat, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem", color: "#334155" }}>
                        <Check size={14} color="#059669" strokeWidth={3} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Buttons (Phone Only - WhatsApp Removed) */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  paddingTop: "16px",
                  borderTop: "1px solid #f1f5f9"
                }}>
                  <a
                    href="tel:9413187706"
                    className="btn btn-primary"
                    style={{
                      padding: "11px",
                      fontSize: "0.88rem",
                      justifyContent: "center",
                      fontWeight: 800
                    }}
                  >
                    <Phone size={15} /> 9413187706
                  </a>

                  <button
                    onClick={onOpenBooking}
                    className="btn btn-secondary"
                    style={{ padding: "11px", fontSize: "0.88rem", borderColor: "#cbd5e1" }}
                  >
                    Inquire Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div style={{
          marginTop: "40px",
          background: "#ffffff",
          borderRadius: "14px",
          padding: "20px 24px",
          border: "1px dashed #fed7aa",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div>
            <div style={{ fontWeight: 800, color: "#78350f", marginBottom: "4px" }}>
              💡 Booking Policy & Check-in Details:
            </div>
            <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
              • Standard check-in / check-out is 10:00 AM. • For peak pilgrimage & Ramdevra Mela dates, please call in advance: <strong>9413187706</strong>
            </div>
          </div>
          <a
            href="tel:9413187706"
            className="btn btn-primary"
            style={{ padding: "10px 22px" }}
          >
            <Phone size={16} /> Call: 9413187706
          </a>
        </div>

      </div>
    </section>
  );
}
