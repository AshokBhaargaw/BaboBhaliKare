"use client";

import { Star, CheckCircle, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "कमलेश सिंघवी (अहमदाबाद)",
      stay: "परिवार सहित 3 दिन का प्रवास",
      rating: 5,
      date: "हाल ही का प्रवास",
      comment: "रामदेवरा में बाबा रामदेव जी के दर्शन हेतु यह सर्वोत्तम धर्मशाला है। मंदिर से मात्र 5 मिनट की पैदल दूरी पर है। कमरे बहुत साफ और गीज़र की सुविधा बहुत अच्छी थी। स्टाफ का व्यवहार बहुत विनम्र है।"
    },
    {
      name: "राजेश भाई पटेल (सूरत)",
      stay: "AC फैमिली रूम में प्रवास",
      rating: 5,
      date: "गत माह",
      comment: "कार पार्किंग की बहुत बढ़िया व सुरक्षित जगह है। बुजुर्ग माता-पिता साथ थे, मंदिर निकट होने के कारण वे सुबह-शाम दोनों समय आरती में शामिल हो सके। शुद्ध और सात्विक वातावरण।"
    },
    {
      name: "मुकेश ओझा (जोधपुर)",
      stay: "2-बेड डीलक्स रूम",
      rating: 5,
      date: "तीर्थ यात्रा",
      comment: "हमने 9413187706 पर फोन करके पहले ही कमरा बुक करवा लिया था। पहुंचने पर तुरंत कमरा मिल गया। पानी, बिस्तर और बाथरूम सभी बिल्कुल स्वच्छ थे। बाबो भली करे!"
    },
    {
      name: "दिनेश जैन (जयपुर)",
      stay: "यात्री संघ ग्रुप स्टे",
      rating: 5,
      date: "संघ यात्रा",
      comment: "हमारे 20 लोगों के संघ के लिए हॉल और कमरों की बहुत सुंदर व्यवस्था की गई। पास में ही जैन भोजनशाला की सुविधा भी मिल गई। सभी सहयात्रियों ने प्रशंसा की।"
    }
  ];

  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>⭐</span>
            <span>यात्रियों के अनुभव</span>
          </div>
          <h2 className="section-title">
            श्रद्धालुओं और परिवारों का विश्वास
          </h2>
          <p className="section-subtitle">
            रामदेवरा पधारे तीर्थ यात्रियों एवं परिवारों के अनुभव, जिन्होंने हमारे आतिथ्य और स्वच्छता को सराहा।
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
                  <CheckCircle size={14} /> सत्यापित यात्री
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
