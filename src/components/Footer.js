"use client";

import { Phone, MessageCircle, MapPin, Mail, Clock, ExternalLink, Heart } from "lucide-react";

export default function Footer({ onOpenBooking }) {
  const mapsUrl = "https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7";

  return (
    <footer style={{
      background: "#0f172a",
      color: "#e2e8f0",
      padding: "60px 0 30px",
      borderTop: "4px solid #d97706"
    }}>
      <div className="container">
        
        {/* Main Footer Content */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "40px",
          marginBottom: "48px"
        }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.3rem"
              }}>
                🙏
              </div>
              <div>
                <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fef3c7" }}>
                  बाबो भली करे
                </div>
                <div style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
                  सिंहवी जैन धर्मशाला • रामदेवरा
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "20px" }}>
              श्री बाबा रामदेव जी की पावन धरती रामदेवरा में श्रद्धालुओं एवं तीर्थ यात्रियों के सुखद, स्वच्छ एवं शांत प्रवास हेतु समर्पित। मुख्य मंदिर से मात्र 400 मीटर की दूरी पर स्थित।
            </p>

            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              background: "rgba(245, 158, 11, 0.15)",
              borderRadius: "20px",
              color: "#fcd34d",
              fontSize: "0.85rem",
              fontWeight: 700,
              border: "1px solid rgba(245, 158, 11, 0.3)"
            }}>
              <span>🚩</span>
              <span>जय बाबारी • बाबो भली करे</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>
              महत्वपूर्ण लिंक्स (Quick Links)
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li>
                <a href="#about" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#fcd34d"} onMouseOut={e=>e.target.style.color="#94a3b8"}>
                  • धर्मशाला परिचय (About Us)
                </a>
              </li>
              <li>
                <a href="#rooms" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#fcd34d"} onMouseOut={e=>e.target.style.color="#94a3b8"}>
                  • कमरे एवं सुइट्स (Rooms & Rates)
                </a>
              </li>
              <li>
                <a href="#amenities" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#fcd34d"} onMouseOut={e=>e.target.style.color="#94a3b8"}>
                  • सुविधाएं (Facilities)
                </a>
              </li>
              <li>
                <a href="#darshan" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#fcd34d"} onMouseOut={e=>e.target.style.color="#94a3b8"}>
                  • रामदेवरा दर्शन एवं आरती समय
                </a>
              </li>
              <li>
                <a href="#gallery" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#fcd34d"} onMouseOut={e=>e.target.style.color="#94a3b8"}>
                  • फोटो गैलरी (Photo Gallery)
                </a>
              </li>
              <li>
                <a href="#location" style={{ color: "#94a3b8", transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#fcd34d"} onMouseOut={e=>e.target.style.color="#94a3b8"}>
                  • कैसे पहुंचें (Location & Map)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>
              संपर्क सूत्र (Helpline)
            </h4>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Phone size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>सीधा मोबाइल / बुकिंग:</div>
                  <a href="tel:9413187706" style={{ color: "#fef3c7", fontWeight: 800, fontSize: "1.1rem" }}>
                    9413187706
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MessageCircle size={18} color="#25d366" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>व्हाट्सएप चैट:</div>
                  <a
                    href="https://wa.me/919413187706?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AC%E0%A4%BE%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%80%21%20%E0%A4%AC%E0%A4%BE%E0%A4%AC%E0%A5%8B%20%E0%A4%AD%E0%A4%B2%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A5%87%20%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%B6%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B0%E0%A5%82%E0%A4%AE%20%E0%A4%95%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#bbf7d0", fontWeight: 700 }}
                  >
                    +91 9413187706 पर मैसेज करें
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={18} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div style={{ color: "#94a3b8", lineHeight: 1.5 }}>
                  रामदेवरा - बीरमदेवरा रोड (ग्राम पंचायत के सामने), रामदेवरा, पोकरण, जैसलमेर, राजस्थान 345023
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                <ExternalLink size={16} color="#fcd34d" />
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fcd34d", fontWeight: 700 }}
                >
                  Google Maps पर धर्मशाला देखें ↗
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: "24px",
          borderTop: "1px solid #1e293b",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          fontSize: "0.82rem",
          color: "#64748b"
        }}>
          <div>
            © 2026 बाबो भली करे सिंघवी जैन धर्मशाला (Babo Bhali Kare Singhvi Jain Dharmshala). सर्वाधिकार सुरक्षित।
          </div>
          <div>
            हेल्पलाइन: <a href="tel:9413187706" style={{ color: "#f59e0b", fontWeight: 700 }}>9413187706</a> • रामदेवरा (राजस्थान)
          </div>
        </div>

      </div>
    </footer>
  );
}
