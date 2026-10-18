"use client";

import { MapPin, Navigation, Phone, Train, Bus, Car, ExternalLink, Compass } from "lucide-react";
import Link from "next/link";

export default function LocationSection() {
  const mapsUrl = "https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7";

  return (
    <section id="location" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container">
        
        {/* Section Header in English */}
        <div className="section-header">
          <div className="section-badge">
            <span>📍</span>
            <span>Location & Directions</span>
          </div>
          <h2 className="section-title">
            Address, Google Map & How to Reach Dharmshala in Ramdevra
          </h2>
          <p className="section-subtitle">
            Easily accessible by private cars, buses, and trains. Located near Gram Panchayat on the main Ramdevra - Biramdevra Road, just 200m from Baba Ramdevji Samadhi Mandir.
          </p>
        </div>

        {/* Location Grid */}
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
                    Postal Address
                  </h3>
                  <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                    Babo Bhali Kare Singhvi Jain Dharmshala
                  </div>
                </div>
              </div>

              <div style={{
                background: "#fffbeb",
                border: "1px solid #fed7aa",
                borderRadius: "14px",
                padding: "20px",
                marginBottom: "24px"
              }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#78350f", marginBottom: "6px" }}>
                  Babo Bhali Kare Singhvi Jain Dharmshala
                </div>
                <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#b45309", marginBottom: "8px" }}>
                  (Fully-Air-Conditioned)
                </div>
                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>
                  Near Gram Panchayat, Ramdevra - Biramdevra Road,<br />
                  PO:- Ramdevra, Tehsil:- Pokaran,<br />
                  District:- Jaisalmer (Rajasthan), India<br />
                  PIN Code: <strong>345023</strong>
                </p>
                <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px dashed #fed7aa", fontSize: "0.85rem", color: "#64748b" }}>
                  <strong>Management:</strong> Omprakash RajaRam Gusai
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Phone size={18} color="#d97706" />
                  <span style={{ fontSize: "0.95rem", color: "#334155" }}>
                    Direct Helpline: <a href="tel:9413187706" style={{ fontWeight: 800, color: "#b45309" }}>9413187706</a>
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Compass size={18} color="#d97706" />
                  <span style={{ fontSize: "0.95rem", color: "#334155" }}>
                    Distance to Main Temple: <strong>200 Meters (2-3 Min Walk)</strong>
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
                  padding: "14px",
                  fontWeight: 800
                }}
              >
                <Navigation size={18} />
                <span>Get Directions on Google Maps</span>
                <ExternalLink size={14} />
              </a>

              <a
                href="tel:9413187706"
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center", fontSize: "0.95rem", padding: "12px" }}
              >
                <Phone size={16} /> Call for Directions: 9413187706
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
                📍 Google Maps Live Coordinates
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fcd34d", fontSize: "0.82rem", fontWeight: 700 }}
              >
                Open in Google Maps ↗
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
          How to Reach Ramdevra
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
                <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem" }}>By Train</h4>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Ramdevra Railway Station (RDRA)</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55 }}>
              Just <strong>1.2 km</strong> from Ramdevra Railway Station. Auto-rickshaws and battery e-rickshaws reach the Dharmshala in under 5 minutes.
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
                <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem" }}>By Bus</h4>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Ramdevra Central Bus Stand</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55 }}>
              Only <strong>600 meters</strong> from the main bus stand. Regular state transport and private pilgrim coaches connect from all major Rajasthan and Gujarat cities.
            </p>
          </div>

          {/* By Road */}
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
                <h4 style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem" }}>Highway Distances</h4>
                <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Road Connectivity</div>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "#475569", lineHeight: 1.55 }}>
              Pokhran: 12 km | Phalodi: 60 km<br />
              Jaisalmer: 120 km | Bikaner: 160 km<br />
              Jodhpur: 220 km (Via smooth National Highway 11)
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
