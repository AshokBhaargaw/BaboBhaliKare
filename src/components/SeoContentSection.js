"use client";

import { ShieldCheck, Phone, CheckCircle2, Clock, Car, Award, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function SeoContentSection({ onOpenBooking }) {
  const highlights = [
    {
      title: "Prime Proximity to Mandir",
      desc: "Located just 400 meters (5 minutes walking distance) from Baba Ramdevji Samadhi Mandir, making it effortless for early morning Mangla Aarti and evening Sandhya Aarti.",
      icon: "🚩"
    },
    {
      title: "Clean AC & Family Rooms",
      desc: "Spotless 2-bed Deluxe AC rooms, budget Non-AC rooms, 4-bed family suites, and large group halls with fresh bedsheets and daily sanitization.",
      icon: "❄️"
    },
    {
      title: "Free On-Site Gated Parking",
      desc: "Expansive private parking compound capable of safely parking dozens of private cars, tourist tempo travelers, and pilgrim buses with 24/7 CCTV coverage.",
      icon: "🚗"
    },
    {
      title: "Senior-Citizen Friendly (Lift)",
      desc: "Equipped with an elevator/lift facility and ground-floor accessibility ensuring maximum comfort for elderly pilgrims and families with young children.",
      icon: "🛗"
    },
    {
      title: "24/7 Hot Water & Pure Water",
      desc: "Modern electric geysers in all rooms provide 24-hour hot water during cold desert winters, alongside purified cold RO drinking water on all floors.",
      icon: "♨️"
    },
    {
      title: "Satvik & Jain Dining Nearby",
      desc: "Located minutes from clean, community-operated pure vegetarian and Jain bhojanshalas serving authentic Marwari meals at nominal pilgrim rates.",
      icon: "🍲"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>⭐</span>
            <span>Pilgrim Recommendation</span>
          </div>
          <h2 className="section-title">
            Why Choose Babo Bhali Kare as Your Dharmshala in Ramdevra?
          </h2>
          <p className="section-subtitle">
            A trusted sanctuary for devotees of Baba Ramdevji, Jain pilgrims, and traveling families seeking comfort, safety, and spiritual serenity in Ramdevra (Pokhran).
          </p>
        </div>

        {/* Feature Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
          marginBottom: "48px"
        }}>
          {highlights.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#fdfbf7",
                borderRadius: "16px",
                padding: "28px 24px",
                border: "1px solid #fed7aa",
                transition: "all 0.25s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.03)"
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "14px" }}>
                {item.icon}
              </div>
              <h3 style={{
                fontSize: "1.18rem",
                fontWeight: 800,
                color: "#1e293b",
                marginBottom: "10px"
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: "0.92rem",
                color: "#64748b",
                lineHeight: 1.65,
                margin: 0
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Informative Pilgrimage Overview Box */}
        <div style={{
          background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
          border: "2px solid #fde68a",
          borderRadius: "20px",
          padding: "36px 32px",
          boxShadow: "0 10px 25px rgba(217, 119, 6, 0.08)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "center"
          }}>
            <div>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 12px",
                background: "rgba(217, 119, 6, 0.15)",
                color: "#92400e",
                borderRadius: "20px",
                fontSize: "0.82rem",
                fontWeight: 800,
                marginBottom: "14px"
              }}>
                <span>📖</span>
                <span>Devotee Information Guide</span>
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#78350f", marginBottom: "12px", lineHeight: 1.3 }}>
                रामदेवरा में धर्मशाला की संपूर्ण सुविधा व सीधी बुकिंग
              </h3>
              <p style={{ fontSize: "0.94rem", color: "#451a03", lineHeight: 1.7, marginBottom: "16px" }}>
                यदि आप बाबा रामदेवजी के दर्शन हेतु रामदेवरा (पोकरण, जैसलमेर) आ रहे हैं और एक सुरक्षित, स्वच्छ व परिवार के अनुकूल <strong>धर्मशाला (Dharmshala in Ramdevra)</strong> की तलाश में हैं, तो <strong>बाबो भली करे सिंघवी जैन धर्मशाला</strong> आपके लिए सर्वश्रेष्ठ विकल्प है। 
                मंदिर से मात्र 400 मीटर की दूरी पर स्थित यह धर्मशाला वातानुकूलित (AC) कमरे, गरम पानी, वरिष्ठ नागरिकों के लिए लिफ्ट और विशाल कार/बस पार्किंग उपलब्ध कराती है।
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <a
                  href="tel:9413187706"
                  className="btn btn-primary"
                  style={{ padding: "12px 24px", fontSize: "1rem", fontWeight: 800 }}
                >
                  <Phone size={18} />
                  <span>सीधा कॉल करें: 9413187706</span>
                </a>
                <span style={{ fontSize: "0.85rem", color: "#92400e", fontWeight: 600 }}>
                  व्यवस्थापक: ओमप्रकाश राजाराम गुसाईं
                </span>
              </div>
            </div>

            {/* Quick Fact Table for Google Indexing */}
            <div style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "24px",
              border: "1px solid #fed7aa",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)"
            }}>
              <div style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem", marginBottom: "14px" }}>
                Key Details At A Glance
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #e2e8f0", paddingBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Distance to Mandir:</span>
                  <strong style={{ color: "#0f172a" }}>400 Meters (5 Mins)</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #e2e8f0", paddingBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Railway Station:</span>
                  <strong style={{ color: "#0f172a" }}>1.5 km (Auto 24x7)</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #e2e8f0", paddingBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Room Types:</span>
                  <strong style={{ color: "#0f172a" }}>AC, Non-AC, Suites, Halls</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #e2e8f0", paddingBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Check-in / Check-out:</span>
                  <strong style={{ color: "#0f172a" }}>10:00 AM (Flexible)</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px dashed #e2e8f0", paddingBottom: "8px" }}>
                  <span style={{ color: "#64748b" }}>Vehicle Parking:</span>
                  <strong style={{ color: "#16a34a" }}>Free Gated Parking</strong>
                </li>
                <li style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#64748b" }}>Helpline:</span>
                  <strong style={{ color: "#d97706" }}>9413187706</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
