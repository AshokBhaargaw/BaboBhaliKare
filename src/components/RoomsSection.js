"use client";

import { useState } from "react";
import { Users, Bed, Wind, Droplets, Check, Phone, MessageCircle, ArrowRight } from "lucide-react";

export default function RoomsSection({ onOpenBooking }) {
  const [filter, setFilter] = useState("all");

  const rooms = [
    {
      id: "ac-deluxe-2",
      category: "ac",
      title: "Deluxe AC Room (2-Bed)",
      titleHi: "डीलक्स AC कमरा (2 बेड)",
      image: "/images/room-ac.jpg",
      capacity: "2 - 3 व्यक्ति",
      bedType: "2 आरामदायक सिंगल / डबल बेड",
      description: "पूरी तरह वातानुकूलित (AC), स्वच्छ टाइल फर्श, आरामदायक गद्दे, अटैच बाथरूम व 24 घंटे गीज़र गर्म पानी सुविधा।",
      features: [
        "स्प्लिट AC (Air Conditioner)",
        "अटैच बाथरूम व वेस्टर्न/इंडियन टॉयलेट",
        "24x7 गर्म पानी हेतु गीज़र",
        "ताज़ा एवं स्वच्छ चादरें व तकिये",
        "मोबाइल चार्जिंग सॉकेट्स",
        "दैनिक सफाई व हाइजीन"
      ],
      popular: true,
      tag: "सबसे लोकप्रिय"
    },
    {
      id: "non-ac-standard-2",
      category: "non-ac",
      title: "Standard Non-AC Room (2-Bed)",
      titleHi: "स्टैंडर्ड नॉन-AC कमरा (2 बेड)",
      image: "/images/room-ac.jpg",
      capacity: "2 - 3 व्यक्ति",
      bedType: "2 आरामदायक बेड",
      description: "किफायती व हवादार कमरा, जिसमें अटैच बाथरूम, हाई स्पीड पंखा/कूलर और गर्म पानी की सुविधा उपलब्ध है।",
      features: [
        "हाई स्पीड पंखा / डेजर्ट कूलर",
        "अटैच साफ-सुथरा बाथरूम",
        "गर्म पानी की सुविधा",
        "धुले हुए लिनेन व बिस्तर",
        "हवादार खिड़कियां",
        "किफायती बजट दरें"
      ],
      popular: false,
      tag: "बजट फ्रेंडली"
    },
    {
      id: "family-ac-4",
      category: "family",
      title: "Super Deluxe Family AC Room (4-Bed)",
      titleHi: "सुपर डीलक्स फैमिली AC रूम (4 बेड)",
      image: "/images/room-family.jpg",
      capacity: "4 - 6 व्यक्ति",
      bedType: "4 आरामदायक बेड (Family Suite)",
      description: "बड़े परिवारों के लिए विशेष रूप से डिज़ाइन किया गया विशाल कमरा, जिसमें 4 बड़े बेड और खुला स्पेस है।",
      features: [
        "हाई पावर AC कूलिंग",
        "4 बड़े आरामदायक बेड",
        "विशाल अटैच बाथरूम व गीज़र",
        "सामान रखने हेतु अलमारी व वार्डरोब",
        "बुजुर्गों व बच्चों के लिए अत्यंत सुविधाजनक",
        "परिवार के साथ सुरक्षित ठहराव"
      ],
      popular: true,
      tag: "फैमिली के लिए बेस्ट"
    },
    {
      id: "group-hall",
      category: "hall",
      title: "Yatri Sangh Group Hall / Dormitory",
      titleHi: "यात्री संघ हॉल / ग्रुप डोर्मिटरी",
      image: "/images/room-family.jpg",
      capacity: "10 से 30+ यात्री",
      bedType: "मल्टीपल बेड्स / स्वच्छ गद्दे",
      description: "पदयात्री संघ, भजन मंडलियों और टूर बसों के बड़े समूहों के लिए सामूहिक ठहराव हेतु बड़ा हॉल।",
      features: [
        "बड़े ग्रुप्स हेतु विशाल जगह",
        "एकाधिक अलग-अलग स्वच्छ बाथरूम",
        "कूलर व पंखों की पूरी व्यवस्था",
        "सत्संग व विश्राम हेतु अनुकूल",
        "सुरक्षित सामान रखने की जगह",
        "विशेष रियायती संघ दरें"
      ],
      popular: false,
      tag: "समूह व संघ हेतु"
    }
  ];

  const filteredRooms = filter === "all" ? rooms : rooms.filter(r => r.category === filter);

  const handleWhatsAppBooking = (roomTitle) => {
    const text = encodeURIComponent(
      `नमस्ते बाबो भली करे धर्मशाला! मुझे "${roomTitle}" के बारे में जानकारी चाहिए और कमरा बुक करना है। कृपया तारीख अनुसार उपलब्धता और किराया बताएं। (संपर्क: 9413187706)`
    );
    window.open(`https://wa.me/919413187706?text=${text}`, "_blank");
  };

  return (
    <section id="rooms" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>🛏️</span>
            <span>कक्ष एवं सुइट्स</span>
          </div>
          <h2 className="section-title">
            स्वच्छ एवं आरामदायक कमरों के विकल्प
          </h2>
          <p className="section-subtitle">
            आपकी आवश्यकतानुसार AC, नॉन-AC, फैमिली सुइट तथा बड़े संघों हेतु हॉल उपलब्ध हैं। 
            कमरा सुरक्षित करने हेतु <strong>9413187706</strong> पर सीधे संपर्क करें।
          </p>

          {/* Filter Tabs */}
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
              { id: "all", label: "सभी कमरे (All)" },
              { id: "ac", label: "AC रूम्स" },
              { id: "non-ac", label: "नॉन-AC रूम्स" },
              { id: "family", label: "फैमिली सुइट्स" },
              { id: "hall", label: "ग्रुप हॉल" },
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
                  <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "#d97706" }}>
                    {room.titleHi}
                  </div>
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
                    शामिल सुविधाएं:
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

                {/* Action CTA Buttons */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  paddingTop: "16px",
                  borderTop: "1px solid #f1f5f9"
                }}>
                  <a
                    href="tel:9413187706"
                    className="btn btn-secondary"
                    style={{
                      padding: "10px",
                      fontSize: "0.85rem",
                      borderColor: "#f59e0b",
                      color: "#b45309",
                      background: "#fffbeb"
                    }}
                  >
                    <Phone size={14} /> 9413187706
                  </a>

                  <button
                    onClick={() => handleWhatsAppBooking(room.title)}
                    className="btn btn-whatsapp"
                    style={{ padding: "10px", fontSize: "0.85rem" }}
                  >
                    <MessageCircle size={14} /> व्हाट्सएप बुक
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
              💡 महत्वपूर्ण जानकारी:
            </div>
            <div style={{ fontSize: "0.88rem", color: "#64748b" }}>
              • चेक-इन / चेक-आउट का सामान्य समय प्रातः 10:00 बजे है। • भादवा मेला (Ramdevra Mela) के दौरान अग्रिम बुकिंग हेतु पहले फोन करें: <strong>9413187706</strong>
            </div>
          </div>
          <button
            onClick={onOpenBooking}
            className="btn btn-primary"
            style={{ padding: "10px 20px" }}
          >
            बुकिंग इंक्वायरी भेजें
          </button>
        </div>

      </div>
    </section>
  );
}
