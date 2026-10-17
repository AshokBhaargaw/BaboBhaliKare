"use client";

import { Phone, MessageCircle, MapPin, Calendar, Users, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Hero({ onOpenBooking }) {
  return (
    <section style={{
      position: "relative",
      minHeight: "85vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(rgba(15, 23, 42, 0.72), rgba(120, 53, 15, 0.65)), url('/images/exterior.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      color: "#ffffff",
      padding: "60px 0 80px",
    }}>
      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        
        {/* Spiritual Pill Badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "8px 20px",
          background: "rgba(254, 243, 199, 0.95)",
          color: "#92400e",
          borderRadius: "9999px",
          fontWeight: 800,
          fontSize: "0.95rem",
          marginBottom: "24px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          border: "1px solid #fde68a"
        }}>
          <span>🚩</span>
          <span>बाबो भली करे • श्री बाबा रामदेव जी की पावन नगरी</span>
        </div>

        {/* Main Headings */}
        <h1 style={{
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: "16px",
          textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          color: "#ffffff"
        }}>
          Babo Bhali Kare <span style={{ color: "#fcd34d" }}>Singhvi Jain Dharmshala</span>
        </h1>

        <p style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
          fontWeight: 600,
          color: "#fef3c7",
          marginBottom: "20px",
          textShadow: "0 2px 6px rgba(0, 0, 0, 0.4)"
        }}>
          बाबो भली करे सिंघवी जैन धर्मशाला, रामदेवरा (पोकरण)
        </p>

        <p style={{
          maxWidth: "760px",
          margin: "0 auto 32px auto",
          fontSize: "1.05rem",
          lineHeight: 1.6,
          color: "#f1f5f9",
          textShadow: "0 1px 4px rgba(0,0,0,0.4)"
        }}>
          श्री बाबा रामदेव जी समाधि मंदिर से मात्र <strong>400 मीटर</strong> की दूरी पर स्थित। 
          यात्रियों व परिवारों के लिए स्वच्छ, सुरक्षित, वातानुकूलित (AC) व नॉन-AC कमरे, 
          24 घंटे गर्म पानी, बड़ी कार पार्किंग और शांतिपूर्ण वातावरण।
        </p>

        {/* Trust Feature Badges */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "10px",
          maxWidth: "850px",
          margin: "0 auto 36px auto"
        }}>
          {[
            "🚶‍♂️ मंदिर से 400 मीटर दूरी",
            "❄️ AC एवं नॉन-AC कमरे",
            "♨️ 24 घंटे गर्म व ठंडा पानी",
            "🚗 निःशुल्क सुरक्षित वाहन पार्किंग",
            "🛡️ 24x7 CCTV सुरक्षा",
            "🍲 शुद्ध शाकाहारी भोजनालय निकट"
          ].map((tag, i) => (
            <span key={i} style={{
              background: "rgba(255, 255, 255, 0.16)",
              backdropFilter: "blur(8px)",
              padding: "6px 14px",
              borderRadius: "30px",
              fontSize: "0.88rem",
              fontWeight: 600,
              border: "1px solid rgba(255, 255, 255, 0.25)",
              color: "#ffffff"
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Main CTA Buttons */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "44px"
        }}>
          {/* Primary Call Button */}
          <a
            href="tel:9413187706"
            className="btn btn-primary btn-lg pulse-button"
            style={{
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              fontSize: "1.1rem",
              padding: "16px 32px",
              minWidth: "220px",
              boxShadow: "0 10px 25px rgba(217, 119, 6, 0.5)",
              border: "2px solid #fef3c7"
            }}
          >
            <Phone size={22} />
            <span>कॉल करें: 9413187706</span>
          </a>

          {/* WhatsApp Direct Chat */}
          <a
            href="https://wa.me/919413187706?text=%E0%A4%9C%E0%A4%AF%20%E0%A4%AC%E0%A4%BE%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9C%E0%A5%80%21%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%AC%E0%A5%8B%20%E0%A4%AD%E0%A4%B2%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A5%87%20%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%98%E0%A4%B5%E0%A5%80%20%E0%A4%9C%E0%A5%88%E0%A4%A8%20%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%B6%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%B0%E0%A4%BE%E0%A4%AE%E0%A4%A6%E0%A5%87%E0%A4%B5%E0%A4%B0%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B0%E0%A5%82%E0%A4%AE%20%E0%A4%95%E0%A5%80%20%E0%A4%9C%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9A%E0%A4%BE%E0%A4%B9%E0%A4%BF%E0%A4%8F%E0%A5%A4"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            style={{ fontSize: "1.1rem", padding: "16px 28px", minWidth: "220px" }}
          >
            <MessageCircle size={22} />
            <span>व्हाट्सएप पर पूछें</span>
          </a>

          {/* Book Room Modal Trigger */}
          <button
            onClick={onOpenBooking}
            className="btn btn-outline-white btn-lg"
            style={{ fontSize: "1.05rem", padding: "16px 26px" }}
          >
            ऑनलाइन कमरा इंक्वायरी
          </button>
        </div>

        {/* Quick Location & Direct Maps Pill */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "rgba(0, 0, 0, 0.45)",
          backdropFilter: "blur(6px)",
          padding: "10px 20px",
          borderRadius: "50px",
          fontSize: "0.9rem",
          color: "#f1f5f9"
        }}>
          <MapPin size={16} color="#fbbf24" />
          <span>रामदेवरा - बीरमदेवरा रोड (ग्राम पंचायत के सामने), रामदेवरा, राजस्थान 345023</span>
          <a
            href="https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fcd34d",
              fontWeight: 700,
              textDecoration: "underline",
              marginLeft: "6px"
            }}
          >
            गूगल मैप खोलें ↗
          </a>
        </div>

      </div>
    </section>
  );
}
