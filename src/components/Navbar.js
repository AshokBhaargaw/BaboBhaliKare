"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, MapPin } from "lucide-react";
import Link from "next/link";

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
      {/* Top Helpline Bar - Phone Only */}
      <div style={{
        background: "linear-gradient(90deg, #78350f, #b45309, #d97706)",
        color: "#ffffff",
        padding: "7px 0",
        fontSize: "0.85rem",
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
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              🙏 <strong>Babo Bhali Kare</strong> | Holy Pilgrimage of Ramdevra, Rajasthan
            </span>
            <span style={{ display: "none", opacity: 0.85 }} className="desktop-tagline">
              • Just 400m from Baba Ramdev Temple
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ opacity: 0.9, fontSize: "0.8rem" }}>24/7 Booking Helpline:</span>
            <a
              href="tel:9413187706"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#fef3c7",
                fontWeight: 800,
                textDecoration: "none",
                background: "rgba(0,0,0,0.22)",
                padding: "3px 10px",
                borderRadius: "6px",
                letterSpacing: "0.02em"
              }}
            >
              <Phone size={13} /> Call: 9413187706
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
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
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
                fontSize: "1.2rem",
                fontWeight: 800,
                color: "#78350f",
                lineHeight: 1.15,
                letterSpacing: "-0.01em"
              }}>
                Babo Bhali Kare
              </div>
              <div style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "#64748b",
                letterSpacing: "0.02em"
              }}>
                Singhvi Jain Dharmshala • Ramdevra
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="desktop-nav" style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "0.92rem",
            fontWeight: 600,
            color: "#334155"
          }}>
            <Link href="/#about" style={{ transition: "color 0.2s" }}>
              About
            </Link>
            <Link href="/#rooms" style={{ transition: "color 0.2s" }}>
              Rooms & Rates
            </Link>
            <Link href="/#amenities" style={{ transition: "color 0.2s" }}>
              Facilities
            </Link>
            <Link href="/#darshan" style={{ transition: "color 0.2s" }}>
              Darshan Guide
            </Link>
            <Link href="/#gallery" style={{ transition: "color 0.2s" }}>
              Gallery
            </Link>
            <Link href="/#location" style={{ transition: "color 0.2s" }}>
              Location & Map
            </Link>
            <Link
              href="/contact"
              style={{
                color: "#b45309",
                fontWeight: 700,
                background: "#fef3c7",
                padding: "6px 12px",
                borderRadius: "6px"
              }}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Action Buttons (Phone Only) */}
          <div className="desktop-actions" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="tel:9413187706"
              className="btn btn-secondary pulse-button"
              style={{
                borderColor: "#f59e0b",
                color: "#b45309",
                background: "#fef3c7",
                padding: "10px 18px",
                fontSize: "0.92rem",
                fontWeight: 800
              }}
            >
              <Phone size={16} /> 9413187706
            </a>
            <button
              onClick={onOpenBooking}
              className="btn btn-primary"
              style={{ padding: "10px 18px", fontSize: "0.9rem" }}
            >
              Book Room
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
          top: "110px",
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
              <span style={{ fontWeight: 800, color: "#92400e" }}>Navigation Menu</span>
              <a href="tel:9413187706" style={{ color: "#d97706", fontWeight: 800, fontSize: "0.95rem" }}>
                📞 9413187706
              </a>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "1rem", fontWeight: 600 }}>
              <Link href="/#about" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                🏛️ About Dharmshala
              </Link>
              <Link href="/#rooms" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                🛏️ Rooms & Suites
              </Link>
              <Link href="/#amenities" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                ✨ Amenities & Facilities
              </Link>
              <Link href="/#darshan" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                🚩 Ramdevra Darshan Guide
              </Link>
              <Link href="/#gallery" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                📸 Photo Gallery
              </Link>
              <Link href="/#location" onClick={closeMenu} style={{ padding: "8px 0", color: "#1e293b", borderBottom: "1px dashed #f1f5f9" }}>
                📍 Location & Directions
              </Link>
              <Link href="/contact" onClick={closeMenu} style={{ padding: "8px 0", color: "#b45309", fontWeight: 700 }}>
                📞 Contact & Booking (9413187706)
              </Link>
            </nav>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
              <a
                href="tel:9413187706"
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem", padding: "14px" }}
              >
                <Phone size={18} /> Call Directly: 9413187706
              </a>
              <button
                onClick={() => { closeMenu(); onOpenBooking(); }}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center", borderColor: "#d97706", color: "#b45309" }}
              >
                Room Availability Inquiry
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
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
