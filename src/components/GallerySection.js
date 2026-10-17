"use client";

import { useState } from "react";
import { Camera, ZoomIn, Eye } from "lucide-react";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "building",
      src: "/images/exterior.jpg",
      title: "धर्मशाला का भव्य बाहरी स्वरूप",
      desc: "पारंपरिक राजस्थानी नक्काशीदार बलुआ पत्थर का विशाल भवन व खुला प्रांगण"
    },
    {
      id: 2,
      category: "rooms",
      src: "/images/room-ac.jpg",
      title: "डीलक्स AC कमरा (Deluxe Room)",
      desc: "साफ-सुथरे आरामदायक बेड, वातानुकूलित एवं प्राकृतिक रोशनी से भरपूर"
    },
    {
      id: 3,
      category: "rooms",
      src: "/images/room-family.jpg",
      title: "फैमिली सुइट एवं ग्रुप हॉल",
      desc: "बड़े परिवारों और तीर्थ यात्रियों के विश्राम हेतु विशाल पारिवारिक कक्ष"
    },
    {
      id: 4,
      category: "temple",
      src: "/images/ramdevra-mandir.jpg",
      title: "श्री बाबा रामदेव जी समाधि मंदिर",
      desc: "मात्र 400 मीटर की दूरी पर स्थित बाबा रामसापीर का पावन समाधि स्थल"
    },
    {
      id: 5,
      category: "dining",
      src: "/images/bhojanshala.jpg",
      title: "शुद्ध सात्विक भोजनशाला",
      desc: "यात्रियों के लिए स्वच्छ, पौष्टिक व सात्विक मारवाड़ी एवं जैन भोजन व्यवस्था"
    }
  ];

  const filteredItems = activeTab === "all" ? galleryItems : galleryItems.filter(i => i.category === activeTab);

  return (
    <section id="gallery" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>📸</span>
            <span>तस्वीरें एवं झलकियां</span>
          </div>
          <h2 className="section-title">
            धर्मशाला परिसर एवं कमरों की फोटो गैलरी
          </h2>
          <p className="section-subtitle">
            ठहरने से पहले देखें हमारे स्वच्छ कमरे, धर्मशाला का भव्य भवन, भोजनशाला एवं बाबा रामदेव जी समाधि मंदिर के दृश्य।
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
              { id: "all", label: "सभी फोटो (All)" },
              { id: "rooms", label: "कमरे (Rooms)" },
              { id: "building", label: "परिसर (Building)" },
              { id: "dining", label: "भोजनशाला (Dining)" },
              { id: "temple", label: "मंदिर (Temple)" },
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
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
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
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)",
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
                maxWidth: "900px",
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
                style={{ width: "100%", maxHeight: "75vh", objectFit: "cover" }}
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
                  बंद करें (Close)
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
