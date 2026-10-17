"use client";

import { useState } from "react";
import { X, Phone, MessageCircle, Calendar, Users, Home, CheckCircle2 } from "lucide-react";

export default function BookingModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [roomType, setRoomType] = useState("Deluxe AC Room (2-Bed)");
  const [guests, setGuests] = useState("2 Persons");
  const [roomsCount, setRoomsCount] = useState("1 Room");
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const handleSubmitWhatsApp = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `🚩 *बाबो भली करे सिंघवी जैन धर्मशाला - बुकिंग इंक्वायरी*\n\n` +
      `👤 *यात्री का नाम:* ${name || "अतिथि"}\n` +
      `📞 *मोबाइल नंबर:* ${phone || "उपलब्ध नहीं"}\n` +
      `📅 *चेक-इन:* ${checkIn || "जल्द"}\n` +
      `📅 *चेक-आउट:* ${checkOut || "1 दिन"}\n` +
      `🛏️ *रूम प्रकार:* ${roomType}\n` +
      `🚪 *कमरों की संख्या:* ${roomsCount}\n` +
      `👥 *यात्रियों की संख्या:* ${guests}\n` +
      (notes ? `📝 *विशेष अनुरोध:* ${notes}\n` : "") +
      `\nकृपया कमरा उपलब्धता व किराया कन्फर्म करें। धन्यवाद!`
    );
    window.open(`https://wa.me/919413187706?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px"
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "20px",
          maxWidth: "560px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)",
          border: "2px solid #fed7aa",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div style={{
          background: "linear-gradient(135deg, #78350f, #b45309)",
          color: "#ffffff",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopLeftRadius: "18px",
          borderTopRightRadius: "18px"
        }}>
          <div>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fef3c7" }}>
              कमरा आरक्षण / इंक्वायरी
            </div>
            <div style={{ fontSize: "0.82rem", opacity: 0.9 }}>
              बाबो भली करे सिंघवी जैन धर्मशाला • रामदेवरा
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            style={{
              background: "rgba(255, 255, 255, 0.2)",
              color: "#ffffff",
              padding: "6px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmitWhatsApp} style={{ padding: "24px" }}>
          
          {/* Quick Call Strip */}
          <div style={{
            background: "#fffbeb",
            border: "1px solid #fed7aa",
            borderRadius: "12px",
            padding: "12px 16px",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            <div style={{ fontSize: "0.86rem", color: "#78350f" }}>
              तत्काल कमरे हेतु सीधे कॉल करें:
            </div>
            <a
              href="tel:9413187706"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontWeight: 800,
                color: "#b45309",
                fontSize: "0.95rem"
              }}
            >
              <Phone size={15} /> 9413187706
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                आपका नाम (Full Name)
              </label>
              <input
                type="text"
                placeholder="उदा. राहुल शर्मा"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                मोबाइल नंबर (Phone)
              </label>
              <input
                type="tel"
                placeholder="10 अंकों का मोबाइल"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                चेक-इन तारीख
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                चेक-आउट तारीख
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.9rem",
                  outline: "none"
                }}
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                कमरे का प्रकार
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.88rem",
                  outline: "none",
                  background: "#ffffff"
                }}
              >
                <option value="Deluxe AC Room (2-Bed)">डीलक्स AC कमरा (2 बेड)</option>
                <option value="Standard Non-AC Room (2-Bed)">नॉन-AC कमरा (2 बेड)</option>
                <option value="Super Deluxe Family AC (4-Bed)">फैमिली सुइट AC (4 बेड)</option>
                <option value="Yatri Group Hall / Dormitory">यात्री संघ हॉल / ग्रुप स्टे</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
                कुल यात्री
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  border: "1px solid #cbd5e1",
                  fontSize: "0.88rem",
                  outline: "none",
                  background: "#ffffff"
                }}
              >
                <option value="1-2 Persons">1 - 2 व्यक्ति</option>
                <option value="3-4 Persons">3 - 4 व्यक्ति</option>
                <option value="5-8 Persons">5 - 8 व्यक्ति</option>
                <option value="10+ Persons Group">10+ व्यक्ति (बड़ा समूह)</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 700, color: "#475569", marginBottom: "5px" }}>
              कोई विशेष आवश्यकता / संदेश (वैकल्पिक)
            </label>
            <textarea
              rows={2}
              placeholder="उदा. ग्राउंड फ्लोर पर कमरा चाहिए, देर रात पहुंचेंगे..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 12px",
                borderRadius: "8px",
                border: "1px solid #cbd5e1",
                fontSize: "0.88rem",
                outline: "none",
                fontFamily: "inherit",
                resize: "vertical"
              }}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <button
              type="submit"
              className="btn btn-whatsapp"
              style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "1rem" }}
            >
              <MessageCircle size={20} />
              <span>व्हाट्सएप पर बुकिंग इंक्वायरी भेजें</span>
            </button>

            <a
              href="tel:9413187706"
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "0.95rem" }}
            >
              <Phone size={18} />
              <span>कॉल पर बात करें: 9413187706</span>
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
