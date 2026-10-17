"use client";

import { ShieldCheck, HeartHandshake, Sparkles, MapPin, Phone, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "center"
        }}>
          {/* Left Column: Image Collage */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              border: "4px solid #fef3c7"
            }}>
              <img
                src="/images/exterior.jpg"
                alt="Babo Bhali Kare Singhvi Jain Dharmshala Building Ramdevra"
                style={{ width: "100%", height: "380px", objectFit: "cover" }}
              />
            </div>

            {/* Overlapping Floating Badge */}
            <div style={{
              position: "absolute",
              bottom: "-25px",
              right: "20px",
              background: "linear-gradient(135deg, #78350f, #92400e)",
              color: "#ffffff",
              padding: "16px 24px",
              borderRadius: "16px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              border: "2px solid #fcd34d",
              display: "flex",
              alignItems: "center",
              gap: "14px"
            }}>
              <div style={{ fontSize: "2rem" }}>🚩</div>
              <div>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fef3c7" }}>मंदिर से सिर्फ 400 मीटर</div>
                <div style={{ fontSize: "0.82rem", opacity: 0.9 }}>पैदल 5 मिनट का सुगम रास्ता</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div>
            <div className="section-badge">
              <span>🙏</span>
              <span>तीर्थ यात्रियों की सेवा में समर्पित</span>
            </div>

            <h2 style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              color: "#1e293b",
              lineHeight: 1.25,
              marginBottom: "18px"
            }}>
              बाबो भली करे सिंघवी जैन धर्मशाला में आपका स्वागत है
            </h2>

            <p style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "#475569",
              marginBottom: "16px"
            }}>
              राजस्थान के जैसलमेर जिले की पावन तीर्थ स्थली <strong>रामदेवरा</strong> में स्थित, 
              <strong> बाबो भली करे सिंघवी जैन धर्मशाला</strong> बाबा रामदेव जी के भक्तों, जैन तीर्थ यात्रियों 
              तथा देश-विदेश से आने वाले परिवारों के लिए एक स्वच्छ, शांत और सुविधाजनक निवास स्थान है।
            </p>

            <p style={{
              fontSize: "0.98rem",
              lineHeight: 1.65,
              color: "#64748b",
              marginBottom: "24px"
            }}>
              मुख्य बाबा रामदेव जी समाधि मंदिर से मात्र 400 मीटर (5 मिनट वॉक) की दूरी पर स्थित होने के कारण 
              वृद्धजनों, महिलाओं और बच्चों के लिए दर्शनार्थ जाना अत्यंत सुगम रहता है। धर्मशाला परिसर में 
              स्वच्छता, शुद्ध हवा, और मारवाड़ी आतिथ्य की परंपरा का विशेष ध्यान रखा जाता है।
            </p>

            {/* Highlights List */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "14px",
              marginBottom: "32px"
            }}>
              {[
                "पूरी तरह स्वच्छ एवं हवादार कमरे",
                "गर्म पानी हेतु गीज़र सुविधा",
                "खुला व सुरक्षित वाहन पार्किंग",
                "शुद्ध जल (RO Water) सुविधा",
                "सज्जन एवं सहयोगी स्टाफ",
                "परिवारों व समूहों के लिए उत्तम"
              ].map((item, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", fontWeight: 600, color: "#334155" }}>
                  <CheckCircle2 size={18} color="#059669" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact & Action */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
              <a
                href="tel:9413187706"
                className="btn btn-primary"
                style={{ padding: "12px 24px" }}
              >
                <Phone size={18} />
                <span>सीधे संपर्क: 9413187706</span>
              </a>
              <button
                onClick={onOpenBooking}
                className="btn btn-secondary"
                style={{ padding: "12px 22px" }}
              >
                कमरे की जानकारी लें
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
