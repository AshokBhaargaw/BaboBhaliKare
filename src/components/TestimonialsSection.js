"use client";

import { Star, CheckCircle } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Kamlesh Singhvi (Ahmedabad)",
      stay: "Family 3-Day Pilgrimage",
      rating: 5,
      date: "Recent Stay",
      comment: "Best dharamshala experience in Ramdevra! Just a 5-minute walk to Baba Ramdevji temple. The AC rooms are spotless and the 24-hour hot water geyser worked perfectly. The staff was polite and helpful."
    },
    {
      name: "Rajesh Patel (Surat)",
      stay: "Family AC Suite",
      rating: 5,
      date: "Last Month",
      comment: "Excellent parking space for our car inside the boundary. We traveled with our elderly parents, and the proximity to the temple made it possible for them to attend both morning and evening aartis comfortably."
    },
    {
      name: "Mukesh Ojha (Jodhpur)",
      stay: "Deluxe 2-Bed Room",
      rating: 5,
      date: "Religious Trip",
      comment: "We called 9413187706 in advance and our room was ready upon arrival. Clean sheets, working AC, and peaceful surroundings. Babo Bhali Kare!"
    },
    {
      name: "Dinesh Jain (Jaipur)",
      stay: "Yatri Sangh Group Stay",
      rating: 5,
      date: "Community Group",
      comment: "Our group of 20 pilgrims was accommodated with great care. The hall and multiple bathrooms were very clean. Pure vegetarian Jain food was easily accessible nearby. Highly recommended!"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header in English */}
        <div className="section-header">
          <div className="section-badge">
            <span>⭐</span>
            <span>Pilgrim Experiences</span>
          </div>
          <h2 className="section-title">
            Trusted by Devotees & Families
          </h2>
          <p className="section-subtitle">
            Read real feedback from pilgrims and travelers who stayed at Babo Bhali Kare Singhvi Jain Dharamshala.
          </p>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              style={{
                background: "#fbf8f2",
                borderRadius: "18px",
                padding: "26px",
                border: "1px solid #fed7aa",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "14px" }}>
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p style={{
                  fontSize: "0.92rem",
                  color: "#334155",
                  lineHeight: 1.65,
                  marginBottom: "20px",
                  fontStyle: "italic"
                }}>
                  "{rev.comment}"
                </p>
              </div>

              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "14px",
                borderTop: "1px solid #f1f5f9"
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: "#1e293b", fontSize: "0.95rem" }}>
                    {rev.name}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                    {rev.stay}
                  </div>
                </div>
                <div style={{
                  fontSize: "0.75rem",
                  color: "#059669",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}>
                  <CheckCircle size={14} /> Verified Guest
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
