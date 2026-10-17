"use client";

import { Clock, MapPin, Compass, Sparkles } from "lucide-react";

export default function TempleGuideSection() {
  const darshanPlaces = [
    {
      name: "Shree Baba Ramdevji Samadhi Mandir",
      nameEn: "Main Temple (Runicha Dham)",
      distance: "400 meters (5 min walk)",
      desc: "The sacred living samadhi of Lord Baba Ramdevji (Ramapir). Devotees from all over India visit to seek divine blessings and offer prayers.",
      highlight: "Main Sacred Shrine",
      icon: "🚩"
    },
    {
      name: "Ramsar Sarovar (Holy Lake)",
      nameEn: "Sacred Pilgrimage Lake",
      distance: "800 meters from Dharmshala",
      desc: "The historic holy lake constructed by Baba Ramdevji. Devotees take holy bath and sip the sacred water for spiritual wellness.",
      highlight: "Holy Bathing",
      icon: "🌊"
    },
    {
      name: "Parcha Baori (Miraculous Stepwell)",
      nameEn: "Historic Stepwell",
      distance: "600 meters from Dharmshala",
      desc: "The historic stepwell where Lord Baba Ramdevji performed miracles ('Parcha') for the five Pirs who visited from Mecca-Medina.",
      highlight: "Miracle Spot",
      icon: "🏛️"
    },
    {
      name: "Guru Balinathji Dhuna",
      nameEn: "Sacred Penance Site",
      distance: "1.5 km from Dharmshala",
      desc: "The penance shrine of Guru Yogi Balinathji, spiritual preceptor of Baba Ramdevji, where the holy eternal fire (Dhuna) is kept burning.",
      highlight: "Guru Dhuna",
      icon: "🔥"
    },
    {
      name: "Dali Bai Samadhi & Sacred Kangan",
      nameEn: "Devotee Dali Bai Shrine",
      distance: "Inside Main Temple Compound",
      desc: "Shrine of devout sister Dali Bai. Pilgrims perform pradakshina and pass beneath the stone kangan for good health and blessings.",
      highlight: "Stone Kangan",
      icon: "✨"
    },
    {
      name: "Historic Pokhran Fort",
      nameEn: "14th Century Heritage Fort",
      distance: "12 km from Ramdevra",
      desc: "Historical red and yellow sandstone fort in Pokhran with royal museum, rich history, and spiritual connections with Baba's youth.",
      highlight: "Sightseeing",
      icon: "🏰"
    }
  ];

  const aartiSchedule = [
    { time: "05:00 AM", name: "Mangla Aarti", note: "First morning darshan and prayers" },
    { time: "12:00 PM", name: "Bhog Aarti", note: "Midday sacred food offering to the deity" },
    { time: "07:00 PM", name: "Sandhya Aarti", note: "Grand evening aarti with holy lamps & cymbals" },
    { time: "09:30 PM", name: "Shayan Aarti", note: "Night closing aarti before temple rest" }
  ];

  return (
    <section id="darshan" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container">
        
        {/* Header in English */}
        <div className="section-header">
          <div className="section-badge">
            <span>🚩</span>
            <span>Pilgrim Darshan Guide</span>
          </div>
          <h2 className="section-title">
            Ramdevra Sacred Shrines & Temple Guide
          </h2>
          <p className="section-subtitle">
            Staying at Babo Bhali Kare Dharmshala in Ramdevra places you just 400 meters from Baba Ramdev Temple and within easy walking distance of all sacred pilgrimage destinations.
          </p>
        </div>

        {/* Temple & Aarti Layout Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginBottom: "48px"
        }}>
          {/* Main Temple Card */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa"
          }}>
            <div style={{ position: "relative", height: "260px" }}>
              <img
                src="/images/ramdevra-mandir.jpg"
                alt="Baba Ramdevji Samadhi Mandir Ramdevra"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(6px)",
                padding: "10px 16px",
                borderRadius: "12px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  📍 Walking Distance: 400 Meters
                </span>
                <span style={{ color: "#fcd34d", fontSize: "0.85rem", fontWeight: 700 }}>
                  5 Min Walk
                </span>
              </div>
            </div>

            <div style={{ padding: "26px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                Baba Ramdevji Samadhi Mandir (Runicha)
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.6, marginBottom: "20px" }}>
                The sacred living samadhi of Lord Baba Ramdevji is one of western India's most venerated pilgrimage centers. 
                The road from our Dharmshala to the temple is paved, well-lit, and level, allowing senior citizens and families to visit comfortably at any time.
              </p>

              <div style={{
                background: "#fef3c7",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid #fde68a"
              }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#92400e", marginBottom: "6px" }}>
                  ✨ Pilgrim Tip:
                </div>
                <div style={{ fontSize: "0.82rem", color: "#78350f", lineHeight: 1.5 }}>
                  Attending the morning Mangla Aarti (5:00 AM) or the evening Sandhya Aarti (7:00 PM) offers a deeply serene experience. Because our Dharmshala is so close, you can easily attend both without hurry.
                </div>
              </div>
            </div>
          </div>

          {/* Aarti Schedule Card */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "#fef3c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b45309"
              }}>
                <Clock size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1e293b" }}>
                  Daily Temple Aarti Schedule
                </h3>
                <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                  Standard daily prayer and darshan timings
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, marginBottom: "20px" }}>
              {aartiSchedule.map((aarti, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: idx % 2 === 0 ? "#fbf8f2" : "#f8fafc",
                    borderRadius: "10px",
                    border: "1px solid #f1f5f9"
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: "#1e293b", fontSize: "0.95rem" }}>
                      {aarti.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                      {aarti.note}
                    </div>
                  </div>
                  <div style={{
                    fontWeight: 800,
                    color: "#b45309",
                    background: "#fef3c7",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.85rem"
                  }}>
                    {aarti.time}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: "14px",
              background: "#eff6ff",
              borderRadius: "10px",
              border: "1px solid #bfdbfe",
              fontSize: "0.84rem",
              color: "#1e40af",
              lineHeight: 1.5
            }}>
              <strong>Note:</strong> During the annual Ramdevra Fair (Bhadon Shukla Dwitiya to Ekadashi), the temple gates remain open 24 hours for continuous darshan.
            </div>
          </div>
        </div>

        {/* Other Darshan Spots */}
        <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#1e293b", marginBottom: "20px", textAlign: "center" }}>
          Nearby Holy Places & Local Sightseeing
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}>
          {darshanPlaces.slice(1).map((place, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid #f1f5f9",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.8rem" }}>{place.icon}</span>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#047857",
                  background: "#d1fae5",
                  padding: "3px 8px",
                  borderRadius: "6px"
                }}>
                  {place.distance}
                </span>
              </div>

              <h4 style={{ fontSize: "1.08rem", fontWeight: 800, color: "#1e293b", marginTop: "4px" }}>
                {place.name}
              </h4>
              <p style={{ fontSize: "0.86rem", color: "#64748b", lineHeight: 1.55 }}>
                {place.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
