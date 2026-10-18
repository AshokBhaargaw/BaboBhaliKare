"use client";

import { useState } from "react";
import { Camera, ZoomIn } from "lucide-react";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "building",
      src: "/img3.jpeg",
      title: "Main Dharamshala Building",
      desc: "Full view of Babo Bhali Kare Singhvi (Jain) Dharamshala with pilgrims and entrance"
    },
    {
      id: 2,
      category: "building",
      src: "/img4.jpeg",
      title: "Festival & Pilgrimage Season",
      desc: "Festive decorations and devotees during Ramdevra pilgrimage fair"
    },
    {
      id: 3,
      category: "building",
      src: "/img1.jpeg",
      title: "Official Entrance Signboard",
      desc: "Prominent 3D signage of Babo Bhali Kare Singhvi (Jain) Dharamshala"
    },
    {
      id: 4,
      category: "card",
      src: "/img2.jpeg",
      title: "Official Trust Card & Helpline",
      desc: "Managed by Omprakash RajaRam Gusai - Mobile: 09413187706"
    },
    {
      id: 5,
      category: "rooms",
      src: "/images/room-ac.jpg",
      title: "Deluxe Air-Conditioned Room",
      desc: "Clean twin beds, fresh white linens, air conditioning and attached bathroom"
    },
    {
      id: 6,
      category: "rooms",
      src: "/images/room-family.jpg",
      title: "Super Deluxe Family Room",
      desc: "Spacious multi-bed suite ideal for pilgrim families and elders"
    },
    {
      id: 7,
      category: "temple",
      src: "/images/ramdevra-mandir.jpg",
      title: "Baba Ramdevji Samadhi Mandir",
      desc: "Holy shrine of Lord Baba Ramdevji located just 200 meters away"
    },
    {
      id: 8,
      category: "dining",
      src: "/images/bhojanshala.jpg",
      title: "Pure Vegetarian Bhojanshala",
      desc: "Hygienic and satvik dining facilities available for pilgrims"
    }
  ];

  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter(i => i.category === activeTab);

  return (
    <section id="gallery" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header in English */}
        <div className="section-header">
          <div className="section-badge">
            <span>📸</span>
            <span>Real Photo Showcase</span>
          </div>
          <h2 className="section-title">
            Photo Gallery – Babo Bhali Kare Dharmshala in Ramdevra
          </h2>
          <p className="section-subtitle">
            Authentic photographs of the building, guest rooms, amenities, and surroundings at our dharmshala in Ramdevra.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: "inline-flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
            background: "#f8fafc",
            padding: "6px",
            borderRadius: "30px",
            marginTop: "20px",
            border: "1px solid #e2e8f0"
          }}>
            {[
              { id: "all", label: "All Photos" },
              { id: "building", label: "Building & Premises" },
              { id: "rooms", label: "Guest Rooms" },
              { id: "card", label: "Trust Card" },
              { id: "temple", label: "Temple & Surroundings" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "8px 18px",
                  borderRadius: "20px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  transition: "all 0.2s ease",
                  background: activeTab === tab.id ? "linear-gradient(135deg, #d97706, #b45309)" : "transparent",
                  color: activeTab === tab.id ? "#ffffff" : "#64748b"
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.06)",
                border: "1px solid #fed7aa",
                cursor: "pointer",
                background: "#ffffff",
                transition: "all 0.25s ease",
                position: "relative"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.06)";
              }}
            >
              <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                <img
                  src={item.src}
                  alt={`${item.title} - Babo Bhali Kare Dharmshala in Ramdevra`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 60%)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px"
                }}>
                  <div style={{ color: "#ffffff" }}>
                    <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#fef3c7", marginBottom: "4px" }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.82rem", opacity: 0.9 }}>
                      {item.desc}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0, 0, 0, 0.88)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
          >
            <div
              onClick={e => e.stopPropagation()}
              style={{
                maxWidth: "850px",
                width: "100%",
                background: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 25px 50px rgba(0,0,0,0.5)"
              }}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", background: "#000" }}
              />
              <div style={{ padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#1e293b" }}>
                    {selectedImage.title}
                  </h3>
                  <p style={{ fontSize: "0.88rem", color: "#64748b" }}>
                    {selectedImage.desc}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="btn btn-secondary"
                  style={{ padding: "8px 18px", fontSize: "0.9rem" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
