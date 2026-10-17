"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, MapPin, Clock, ShieldCheck } from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Helpline Bar */}
      <div style={{
        background: "linear-gradient(90deg, #78350f, #b45309, #d97706)",
        color: "#ffffff",
        padding: "6px 0",
        fontSize: "0.82rem",
        fontWeight: 500,
      }}>
        <div className="container" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}>
              🙏 <strong>बाबो भली करे</strong> | श्री बाबा रामदेव जी की पावन धरा रामदेवरा
            </span>
            <span style={{ display: "none", opacity: 0.8 }} className="desktop-tagline">
              • मंदिर से मात्र 400 मीटर
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a
              href="tel:9413187706"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "#fef3c7",
                fontWeight: 700,
                textDecoration: "none",
                background: "rgba(0,0,0,0.18)",
                padding: "2px 8px",
                borderRadius: "4px"
              }}
            >
              <Phone size={13} /> कॉल: 9413187706
            </a>
            <a
              href="https://wa.me/919413187706?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20%E0%A4%9C%E0%A5%80%2C%20%E0%A4%AE%E0%A5%81%E0%A4%9D%E0%A5%87%20%E0%A4%AC%E0%A4%BE%E0%A4%AC%E0%A5%8B%20%E0%A4%AD%E0%A4%B2%E0%A5%80%20%E0%A4%95%E0%A4%B0%E0%A5%87%20%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%98%E0%A4%B5%E0%A5%80%20%E0%A4%9C%E0%A5%88%E0%A4%A8%20%E0%A4%A7%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%B6%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%AE%E0%A5%87%E0%A4%82%20%E0%A4%B0%E0%A5%82%E0%A4%AE%20%E0%A4%AC%E0%A5%81%E0%A4%95%20%E0%A4%95%E0%A4%B0%E0%A4%A8%E0%A4%BE%20%E0%A4%B9%E0%A5%88%E0%A5%A4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                color: "#bbf7d0",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              <MessageCircle size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: isScrolled ? "rgba(255, 255, 255, 0.98)" : "#ffffff",
          backdropFilter: "blur(10px)",
          borderBottom: isScrolled ? "1px solid #fed7aa" : "1px solid #f1f5f9",
          transition: "all 0.3s ease",
          boxShadow: isScrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="container" style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "76px",
        }}>
          {/* Logo Brand */}
          <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
            <div style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1.3rem",
              boxShadow: "0 4px 12px rgba(217, 119, 6, 0.35)",
              border: "2px solid #fef3c7"
            }}>
              🙏
            </div>
            <div>
              <div style={{
                fontSize: "1.22rem",
                fontWeight: 800,
                color: "#78350f",
                lineHeight: 1.15,
                letterSpacing: "-0.01em"
              }}>
                बाबो भली करे
              </div>
              <div style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.02em"
              }}>
                सिंहवी जैन धर्मशाला • रामदेवरा
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav" style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "0.92rem",
            fontWeight: 600,
            color: "#334155"
          }}>
            <a href="#about" style={{ transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#d97706"} onMouseOut={e=>e.target.style.color="#334155"}>
              परिचय
            </a>
            <a href="#rooms" style={{ transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#d97706"} onMouseOut={e=>e.target.style.color="#334155"}>
              कक्ष (Rooms)
            </a>
            <a href="#amenities" style={{ transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#d97706"} onMouseOut={e=>e.target.style.color="#334155"}>
              सुविधाएं
            </a>
            <a href="#darshan" style={{ transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#d97706"} onMouseOut={e=>e.target.style.color="#334155"}>
              दर्शन गाइड
            </a>
            <a href="#gallery" style={{ transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#d97706"} onMouseOut={e=>e.target.style.color="#334155"}>
              तस्वीरें
            </a>
            <a href="#location" style={{ transition: "color 0.2s" }} onMouseOver={e=>e.target.style.color="#d97706"} onMouseOut={e=>e.target.style.color="#334155"}>
              रास्ता & लोकेशन
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="desktop-actions" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="tel:9413187706"
              className="btn btn-secondary pulse-button"
              style={{
                borderColor: "#f59e0b",
                color: "#b45309",
                background: "#fef3c7",
                padding: "10px 16px",
                fontSize: "0.9rem"
              }}
            >
              <Phone size={16} /> 9413187706
            </a>
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
            >
              रूम बुक करें
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: "none",
              padding: "8px",
              borderRadius: "8px",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              color: "#1e293b"
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: "108px",
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.6)",
          zIndex: 99,
          backdropFilter: "blur(4px)"
        }} onClick={closeMenu}>
          <div
            style={{
              background: "#ffffff",
              padding: "24px 20px 30px",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              gap: "16px"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingBottom: "12px",
              borderBottom: "1px solid #f1f5f9"
            }}>
              <span style={{ fontWeight: 700, color: "#92400e" }}>मेन्यू एवं सेवाएं</span>
              <a href="tel:9413187706" style={{ color: "#d97706", fontWeight: 700, fontSize: "0.9rem" }}>
                📞 9413187706
              </a>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "1.05rem", fontWeight: 600 }}>
              <a href="#about" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                🏛️ परिचय (About Us)
              </a>
              <a href="#rooms" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                🛏️ कमरे एवं हॉल (Rooms & Suites)
              </a>
              <a href="#amenities" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                ✨ प्रमुख सुविधाएं (Facilities)
              </a>
              <a href="#darshan" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                🚩 रामदेवरा दर्शन गाइड (Darshan Guide)
              </a>
              <a href="#gallery" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                📸 फोटो गैलरी (Photo Gallery)
              </a>
              <a href="#location" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                📍 पता और गूगल मैप (Google Map)
              </a>
              <a href="#faqs" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b" }}>
                ❓ जरूरी सवाल (FAQs)
              </a>
            </nav>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <a
                href="tel:9413187706"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Phone size={18} /> सीधे कॉल करें (9413187706)
              </a>
              <button
                onClick={() => { closeMenu(); onOpenBooking(); }}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center", borderColor: "#d97706", color: "#b45309" }}
              >
                कमरे की जानकारी / बुकिंग इंक्वायरी
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .desktop-nav,
          .desktop-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 640px) {
          .desktop-tagline {
            display: inline !important;
          }
        }
      `}</style>
    </>
  );
}
