"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import BookingModal from "@/components/BookingModal";
import { Phone, MapPin, Clock, Navigation, ExternalLink, ShieldCheck, UserCheck, Calendar } from "lucide-react";

export default function ContactPage() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const mapsUrl = "https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7";

  return (
    <main style={{ background: "#fdfbf7", minHeight: "100vh" }}>
      {/* Navbar */}
      <Navbar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Hero Header */}
      <section style={{
        background: "linear-gradient(rgba(15, 23, 42, 0.85), rgba(120, 53, 15, 0.8)), url('/img3.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#ffffff",
        padding: "60px 0 50px",
        textAlign: "center"
      }}>
        <div className="container">
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 18px",
            background: "rgba(254, 243, 199, 0.2)",
            border: "1px solid rgba(254, 243, 199, 0.4)",
            borderRadius: "30px",
            color: "#fef3c7",
            fontSize: "0.88rem",
            fontWeight: 700,
            marginBottom: "16px"
          }}>
            <span>📍</span>
            <span>Ramdevra (Pokhran), Rajasthan</span>
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 800,
            marginBottom: "12px",
            color: "#ffffff"
          }}>
            Book Dharmshala in Ramdevra
            <span style={{
              display: "block",
              color: "#fcd34d",
              fontSize: "clamp(1.3rem, 2.8vw, 2rem)",
              marginTop: "8px",
              fontWeight: 700
            }}>
              Babo Bhali Kare Contact & Helpline
            </span>
          </h1>

          <p style={{
            fontSize: "1.1rem",
            color: "#fef3c7",
            maxWidth: "680px",
            margin: "0 auto",
            lineHeight: 1.6
          }}>
            Babo Bhali Kare Singhvi Jain Dharamshala • Shree Gusai Ashram Samiti • Shree Hari Om Ann-Kshetra Society
          </p>
        </div>
      </section>

      {/* Massive Phone Number Highlight Section */}
      <section style={{ padding: "60px 0 40px" }}>
        <div className="container" style={{ maxWidth: "1050px" }}>
          
          {/* Big Number Banner */}
          <div style={{
            background: "linear-gradient(135deg, #ffffff, #fffbeb)",
            borderRadius: "24px",
            padding: "48px 32px",
            border: "3px solid #f59e0b",
            boxShadow: "0 20px 45px rgba(217, 119, 6, 0.18)",
            textAlign: "center",
            marginBottom: "50px",
            position: "relative"
          }}>
            <div style={{
              display: "inline-block",
              background: "#fef3c7",
              color: "#92400e",
              padding: "8px 24px",
              borderRadius: "30px",
              fontWeight: 800,
              fontSize: "0.95rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "18px",
              border: "1px solid #fde68a"
            }}>
              Official 24/7 Booking Helpline
            </div>

            <div style={{ fontSize: "1.15rem", color: "#64748b", fontWeight: 600, marginBottom: "8px" }}>
              Call Directly for Room Bookings, Rates & Inquiries:
            </div>

            {/* Extra Large Phone Number */}
            <div style={{
              fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
              fontWeight: 900,
              color: "#b45309",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              margin: "12px 0 20px 0",
              fontFamily: "system-ui, -apple-system, sans-serif"
            }}>
              <a
                href="tel:9413187706"
                style={{
                  color: "#b45309",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "14px"
                }}
              >
                <Phone size={44} color="#d97706" />
                <span>9413187706</span>
              </a>
            </div>

            <div style={{
              fontSize: "1.1rem",
              color: "#1e293b",
              fontWeight: 700,
              marginBottom: "24px"
            }}>
              Management by: <span style={{ color: "#78350f" }}>Omprakash RajaRam Gusai</span>
            </div>

            {/* Giant 1-Tap Call CTA */}
            <div>
              <a
                href="tel:9413187706"
                className="btn btn-primary pulse-button"
                style={{
                  fontSize: "1.25rem",
                  padding: "18px 48px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  boxShadow: "0 10px 30px rgba(217, 119, 6, 0.45)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  fontWeight: 900,
                  border: "2px solid #fef3c7"
                }}
              >
                <Phone size={26} />
                <span>Tap to Call 9413187706 Now</span>
              </a>
            </div>
          </div>

          {/* Contact Details & Official Card Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "start",
            marginBottom: "50px"
          }}>
            {/* Left: Official Trust Card Image */}
            <div style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "24px",
              border: "1px solid #fed7aa",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              textAlign: "center"
            }}>
              <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#78350f", marginBottom: "14px" }}>
                Official Trust Registration & Identity Card
              </div>
              <div style={{
                borderRadius: "14px",
                overflow: "hidden",
                border: "2px solid #fed7aa",
                marginBottom: "16px"
              }}>
                <img
                  src="/img2.jpeg"
                  alt="Official Card - Babo Bhali Kare Singhvi Jain Dharmshala Ramdevra"
                  style={{ width: "100%", maxHeight: "420px", objectFit: "contain", margin: "0 auto" }}
                />
              </div>
              <p style={{ fontSize: "0.85rem", color: "#64748b" }}>
                Official laminated identity card issued by Shree Gusai Ashram Samiti & Shree Hari Om Ann-Kshetra Society.
              </p>
            </div>

            {/* Right: Address & Operating Details */}
            <div style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "32px",
              border: "1px solid #fed7aa",
              boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "20px"
            }}>
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#1e293b", borderBottom: "1px solid #f1f5f9", paddingBottom: "12px" }}>
                Complete Address Details
              </h3>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <MapPin size={24} color="#d97706" style={{ flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <div style={{ fontWeight: 800, color: "#1e293b", fontSize: "1.05rem", marginBottom: "4px" }}>
                    Babo Bhali Kare Singhvi Jain Dharmshala
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#b45309", marginBottom: "6px" }}>
                    (Fully-Air-Conditioned Accommodation)
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }}>
                    Near Gram Panchayat, Ramdevra - Biramdevra Road,<br />
                    Post Office: <strong>Ramdevra</strong>,<br />
                    Tehsil: <strong>Pokaran</strong>,<br />
                    District: <strong>Jaisalmer (Rajasthan)</strong>,<br />
                    PIN Code: <strong>345023</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <UserCheck size={24} color="#d97706" style={{ flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.95rem" }}>
                    Management Contact:
                  </div>
                  <div style={{ fontSize: "1rem", color: "#78350f", fontWeight: 800 }}>
                    Omprakash RajaRam Gusai
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#64748b" }}>
                    Direct Mobile: <a href="tel:9413187706" style={{ fontWeight: 800, color: "#b45309" }}>09413187706</a>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Clock size={24} color="#d97706" style={{ flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.95rem" }}>
                    Standard Timings:
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#475569" }}>
                    Check-in / Check-out: <strong>10:00 AM</strong><br />
                    Desk Helpline: <strong>24 Hours Open</strong>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Navigation size={24} color="#d97706" style={{ flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <div style={{ fontWeight: 700, color: "#1e293b", fontSize: "0.95rem" }}>
                    Key Distances:
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "#475569" }}>
                    • Baba Ramdev Temple: <strong>400 meters (5 min walk)</strong><br />
                    • Ramdevra Bus Stand: <strong>600 meters</strong><br />
                    • Ramdevra Railway Station: <strong>1.2 km</strong>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "12px", borderTop: "1px solid #f1f5f9" }}>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "1rem" }}
                >
                  <Navigation size={18} />
                  <span>Open Directions in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa",
            minHeight: "450px",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{
              padding: "16px 24px",
              background: "#78350f",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}>
              <span style={{ fontWeight: 700, fontSize: "1rem" }}>
                📍 Babo Bhali Kare Singhvi Jain Dharamshala Location
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fcd34d", fontSize: "0.88rem", fontWeight: 800 }}
              >
                View Larger Map ↗
              </a>
            </div>

            <div style={{ flex: 1, minHeight: "400px", position: "relative" }}>
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=27.008344,71.920768&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Mobile Sticky Bar (Phone Only) */}
      <MobileBottomBar onOpenBooking={() => setBookingModalOpen(true)} />

      {/* Booking Dialog Modal */}
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
    </main>
  );
}
