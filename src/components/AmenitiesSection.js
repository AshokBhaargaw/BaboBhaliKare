"use client";

import {
  MapPin,
  Flame,
  Car,
  GlassWater,
  ArrowUpSquare,
  UtensilsCrossed,
  ShieldCheck,
  Zap,
  Luggage,
  Sparkles,
  Phone
} from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <MapPin size={26} color="#d97706" />,
      title: "400m to Temple",
      desc: "Only a 5-minute direct walking distance to the sacred Baba Ramdevji Samadhi Mandir."
    },
    {
      icon: <Flame size={26} color="#d97706" />,
      title: "24/7 Hot & Cold Water",
      desc: "Modern water heaters & geysers installed in all bathrooms for round-the-clock hot water."
    },
    {
      icon: <Car size={26} color="#d97706" />,
      title: "Spacious Secure Parking",
      desc: "Large secured on-premises parking space for pilgrim cars, traveler vans, and tour buses."
    },
    {
      icon: <GlassWater size={26} color="#d97706" />,
      title: "RO Purified Cold Water",
      desc: "Continuous supply of chilled and hygienic reverse osmosis (RO) drinking water for guests."
    },
    {
      icon: <ArrowUpSquare size={26} color="#d97706" />,
      title: "Elevator / Lift Facility",
      desc: "Smooth elevator access to upper floor rooms, especially convenient for elderly pilgrims."
    },
    {
      icon: <UtensilsCrossed size={26} color="#d97706" />,
      title: "Pure Vegetarian Bhojanshala",
      desc: "Hygienic pure vegetarian, Marwari, and Jain dining facilities located right next door."
    },
    {
      icon: <ShieldCheck size={26} color="#d97706" />,
      title: "24x7 CCTV Surveillance",
      desc: "Continuous security cameras and attentive on-site management for pilgrim peace of mind."
    },
    {
      icon: <Zap size={26} color="#d97706" />,
      title: "Power Backup",
      desc: "Reliable power backup generator ensuring uninterrupted lighting and cooling fans."
    },
    {
      icon: <Luggage size={26} color="#d97706" />,
      title: "Luggage Storage Space",
      desc: "Safe holding area for your bags if you arrive early or wish to visit the temple after check-out."
    },
    {
      icon: <Sparkles size={26} color="#d97706" />,
      title: "Daily Housekeeping",
      desc: "Meticulous daily room cleaning and sanitization with fresh linens and towels."
    }
  ];

  return (
    <section id="amenities" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header in English */}
        <div className="section-header">
          <div className="section-badge">
            <span>✨</span>
            <span>Hospitality & Facilities</span>
          </div>
          <h2 className="section-title">
            Key Amenities for a Comfortable Pilgrimage
          </h2>
          <p className="section-subtitle">
            Babo Bhali Kare Singhvi Jain Dharmshala provides all the essential comforts to make your pilgrimage peaceful, hygienic, and memorable.
          </p>
        </div>

        {/* Amenities Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "22px"
        }}>
          {amenities.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#fbf8f2",
                borderRadius: "16px",
                padding: "24px 20px",
                border: "1px solid #fed7aa",
                transition: "all 0.25s ease",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "#d97706";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(217, 119, 6, 0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#fed7aa";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: "#fef3c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #fde68a"
              }}>
                {item.icon}
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b", marginBottom: "6px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Helpline CTA Strip */}
        <div style={{
          marginTop: "48px",
          background: "linear-gradient(135deg, #78350f, #92400e)",
          borderRadius: "20px",
          padding: "32px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          boxShadow: "0 15px 30px rgba(120, 53, 15, 0.25)",
          border: "2px solid #fcd34d"
        }}>
          <div>
            <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fef3c7", marginBottom: "6px" }}>
              Traveling with a Family or Large Pilgrim Group?
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.9, maxWidth: "600px" }}>
              Speak directly with our manager for hall arrangements, parking coordination, and meal details.
            </p>
          </div>
          <a
            href="tel:9413187706"
            className="btn btn-primary pulse-button"
            style={{
              background: "#ffffff",
              color: "#78350f",
              padding: "14px 28px",
              fontSize: "1.05rem",
              fontWeight: 800,
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
            }}
          >
            <Phone size={18} color="#78350f" />
            <span>Call Us: 9413187706</span>
          </a>
        </div>

      </div>
    </section>
  );
}
