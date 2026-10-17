"use client";

import { Phone, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";

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
                  Babo Bhali Kare
                </div>
                <div style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
                  Singhvi Jain Dharamshala • Ramdevra
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.9rem", color: "#94a3b8", lineHeight: 1.6, marginBottom: "16px" }}>
              Babo Bhali Kare Singhvi Jain Dharamshala is the premier budget and family dharmshala in Ramdevra (Pokhran, Rajasthan). Situated just 400 meters from the sacred Baba Ramdevji Samadhi Mandir with clean AC rooms, 24/7 hot water, lift, and parking.
            </p>

            <div style={{ fontSize: "0.82rem", color: "#cbd5e1", lineHeight: 1.5, marginBottom: "16px" }}>
              <strong>Society:</strong> Shree Gusai Ashram Samiti & Shree Hari Om Ann-Kshetra Society<br />
              <strong>Managed by:</strong> Omprakash RajaRam Gusai
            </div>

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
              <span>Jai Babari • Babo Bhali Kare</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li>
                <Link href="/#about" style={{ color: "#94a3b8", transition: "color 0.2s" }}>
                  • About Dharmshala
                </Link>
              </li>
              <li>
                <Link href="/#rooms" style={{ color: "#94a3b8", transition: "color 0.2s" }}>
                  • Rooms & Accommodations
                </Link>
              </li>
              <li>
                <Link href="/#amenities" style={{ color: "#94a3b8", transition: "color 0.2s" }}>
                  • Facilities & Amenities
                </Link>
              </li>
              <li>
                <Link href="/#darshan" style={{ color: "#94a3b8", transition: "color 0.2s" }}>
                  • Ramdevra Darshan & Aarti Guide
                </Link>
              </li>
              <li>
                <Link href="/#gallery" style={{ color: "#94a3b8", transition: "color 0.2s" }}>
                  • Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/#location" style={{ color: "#94a3b8", transition: "color 0.2s" }}>
                  • Location & Google Map
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "#fcd34d", fontWeight: 700 }}>
                  • Contact Page (Call 9413187706)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Phone Only) */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#ffffff", marginBottom: "18px" }}>
              Booking Helpline
            </h4>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", fontSize: "0.9rem" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <Phone size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.8rem", color: "#94a3b8" }}>Direct Mobile & Booking:</div>
                  <a href="tel:9413187706" style={{ color: "#fef3c7", fontWeight: 800, fontSize: "1.3rem", display: "block" }}>
                    9413187706
                  </a>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>Omprakash RajaRam Gusai</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <MapPin size={20} color="#f59e0b" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div style={{ color: "#94a3b8", lineHeight: 1.5 }}>
                  Near Gram Panchayat, Ramdevra - Biramdevra Road,<br />
                  PO:- Ramdevra, Tehsil:- Pokaran,<br />
                  Dist:- Jaisalmer (Rajasthan) - 345023
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
                  View on Google Maps ↗
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
          fontSize: "0.85rem",
          color: "#64748b"
        }}>
          <div>
            © 2026 Babo Bhali Kare Singhvi Jain Dharamshala, Ramdevra. All Rights Reserved.
          </div>
          <div>
            Official Helpline: <a href="tel:9413187706" style={{ color: "#f59e0b", fontWeight: 700 }}>9413187706</a> • Ramdevra, Rajasthan
          </div>
        </div>

      </div>
    </footer>
  );
}
