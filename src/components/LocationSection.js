"use client";

import { MapPin, Navigation, Phone, Train, Bus, Car, ExternalLink, Compass } from "lucide-react";

export default function LocationSection() {
  const mapsUrl = "https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7";

  return (
    <section id="location" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>📍</span>
            <span>लोकेशन एवं कैसे पहुंचे</span>
          </div>
          <h2 className="section-title">
            धर्मशाला का सटीक पता एवं मार्ग दर्शन
          </h2>
          <p className="section-subtitle">
            रामदेवरा में मुख्य सड़क मार्ग पर स्थित, जहां तक निजी वाहन, कार व बसें सीधे पहुंच सकती हैं।
          </p>
        </div>

        {/* Location Grid: Details & Map */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "36px",
          alignItems: "stretch",
          marginBottom: "48px"
        }}>
          
          {/* Address Details Card */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#fef3c7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#d97706"
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1e293b" }}>
                    पूर्ण पता (Full Address)
                  </h3>
                  <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                    बाबो भली करे सिंघवी जैन धर्मशाला
                  </div>
                </div>
              </div>

              <div style={{
                background: "#fffbeb",
                border: "1px solid #fed7aa",
                borderRadius: "14px",
                padding: "18px",
                marginBottom: "24px"
              }}>
                <div style={{ fontSize: "1.05rem", fontWeight: 800, color: "#78350f", marginBottom: "6px" }}>
                  बाबो भली करे सिंघवी जैन धर्मशाला
                </div>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>
                  रामदेवरा - बीरमदेवरा रोड,<br />
                  ग्राम पंचायत के सामने (नोखा चौराहा के पास),<br />
                  तहसील: पोकरण, जिला: जैसलमेर,<br />
                  राजस्थान - 345023
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Phone size={18} color="#d97706" />
                  <span style={{ fontSize: "0.92rem", color: "#334155" }}>
                    संपर्क व बुकिंग नंबर: <a href="tel:9413187706" style={{ fontWeight: 800, color: "#b45309" }}>9413187706</a>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Compass size={18} color="#d97706" />
                  <span style={{ fontSize: "0.92rem", color: "#334155" }}>
                    मुख्य मंदिर से दूरी: <strong>मात्र 400 मीटर (5 मिनट पैदल)</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  fontSize: "1rem",
                  padding: "14px"
                }}
              >
                <Navigation size={18} />
                <span>गूगल मैप पर रास्ता देखें (Get Directions)</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="tel:9413187706"
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.92rem" }}
              >
                <Phone size={16} /> रास्ता पूछने हेतु फोन करें (9413187706)
              </a>
            </div>
          </div>

          {/* Embedded Google Map Iframe Card */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa",
            display: "flex",
            flexDirection: "column",
            minHeight: "420px"
          }}>
            <div style={{
              padding: "14px 20px",
              background: "#78350f",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <span style={{ fontWeight: 700, fontSize: "0.92rem" }}>
                📍 Google Maps Live Location
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fcd34d", fontSize: "0.82rem", fontWeight: 700 }}
              >
                बड़ा मैप खोलें ↗
              </a>
            </div>

            <div style={{ flex: 1, position: "relative", minHeight: "360px" }}>
              <iframe
                title="Babo Bhali Kare Singhvi Jain Dharmshala Ramdevra Map"
                src="https://maps.google.com/maps?q=27.008344,71.920768&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

        {/* How to Reach Grid */}
        <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#1e293b", marginBottom: "20px", textAlign: "center" }}>
          रामदेवरा कैसे पहुंचे (How to Reach)
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px"
        }}>
          {/* By Train */}
          <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#eff6ff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563eb"
              }}>
                <Train size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem" }}>ट्रेन द्वारा (By Train)</h4>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>रामदेवरा रेलवे स्टेशन (RDRA)</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55 }}>
              रामदेवरा स्टेशन से धर्मशाला मात्र <strong>1.2 किमी</strong> की दूरी पर है। स्टेशन से ऑटो-रिक्शा आसानी से 5 मिनट में धर्मशाला तक छोड़ देते हैं।
            </p>
          </div>

          {/* By Bus */}
          <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#f0fdf4",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#16a34a"
              }}>
                <Bus size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem" }}>बस द्वारा (By Bus)</h4>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>रामदेवरा बस स्टैंड</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55 }}>
              रामदेवरा बस स्टैंड से धर्मशाला केवल <strong>600 मीटर</strong> की दूरी पर स्थित है। राजस्थान रोडवेज व प्राइवेट बसें उपलब्ध रहती हैं।
            </p>
          </div>

          {/* By Car/Taxi */}
          <div style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "24px",
            border: "1px solid #e2e8f0",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <div style={{
                width: "40px",
                height: "40px",
                borderRadius: "10px",
                background: "#fffbeb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#d97706"
              }}>
                <Car size={22} />
              </div>
              <div>
                <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem" }}>सड़क मार्ग (Road Distances)</h4>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>प्रमुख शहरों से दूरी</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55 }}>
              पोकरण: 12 किमी | फलौदी: 60 किमी<br />
              जैसलमेर: 120 किमी | जोधपुर: 220 किमी<br />
              बीकानेर: 160 किमी (उत्कृष्ट नेशनल हाईवे)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
