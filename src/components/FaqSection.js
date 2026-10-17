"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "मुख्य बाबा रामदेव जी समाधि मंदिर से धर्मशाला कितनी दूर है?",
      a: "बाबो भली करे सिंघवी जैन धर्मशाला मुख्य समाधि मंदिर से मात्र 400 मीटर की दूरी पर स्थित है। पैदल जाने में केवल 4 से 5 मिनट का समय लगता है, जो वरिष्ठ नागरिकों एवं बच्चों के लिए अत्यंत सुविधाजनक है।"
    },
    {
      q: "कमरा अग्रिम (Advance) बुक करने का क्या तरीका है?",
      a: "आप सीधे हमारे आधिकारिक हेल्पलाइन नंबर 9413187706 पर कॉल कर सकते हैं अथवा इसी नंबर पर व्हाट्सएप द्वारा अपनी यात्रा तारीख और कमरों की संख्या बताकर तुरंत पुष्टि प्राप्त कर सकते हैं।"
    },
    {
      q: "चेक-इन और चेक-आउट का समय क्या है?",
      a: "चेक-इन और चेक-आउट का सामान्य समय प्रातः 10:00 AM है। हालांकि यदि आपकी ट्रेन अथवा बस जल्दी आती है या देर से जाती है, तो कमरों की उपलब्धता अनुसार प्रबंधन द्वारा सहयोग किया जाता है।"
    },
    {
      q: "क्या भोजन एवं नाश्ते (Bhojanshala) की व्यवस्था है?",
      a: "जी हां, धर्मशाला परिसर के निकट ही शुद्ध शाकाहारी, मारवाड़ी एवं जैन भोजनशालाएं उपलब्ध हैं, जहां सात्विक व हाइजीनिक भोजन न्यूनतम सेवा शुल्क पर मिलता है।"
    },
    {
      q: "क्या गाड़ियों एवं टूर बसों के लिए सुरक्षित पार्किंग उपलब्ध है?",
      a: "जी हां, धर्मशाला के पास स्वयं का सुरक्षित एवं विस्तृत पार्किंग प्रांगण है, जहां कारें, ट्रैवलर गाड़ियां और बड़ी बसें सरलतापूर्वक पार्क की जा सकती हैं। 24 घंटे सुरक्षा निगरानी रहती है।"
    },
    {
      q: "क्या सर्दियों में 24 घंटे गर्म पानी की सुविधा मिलती है?",
      a: "जी हां, सभी कमरों में आधुनिक वॉटर गीज़र लगे हुए हैं जिससे श्रद्धालुओं को स्नान हेतु 24 घंटे गर्म पानी उपलब्ध रहता है।"
    },
    {
      q: "क्या बड़े यात्री संघों, पदयात्रियों या भजन मंडलियों के लिए ग्रुप हॉल उपलब्ध है?",
      a: "जी हां, 15 से 40+ यात्रियों के समूहों और संघों के लिए बड़े हॉल व अलग-अलग बाथरूमों की विशेष व्यवस्था है। विशेष संघ रियायती दरों हेतु कृपया 9413187706 पर बात करें।"
    }
  ];

  return (
    <section id="faqs" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container" style={{ maxWidth: "860px" }}>
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>❓</span>
            <span>अक्सर पूछे जाने वाले प्रश्न</span>
          </div>
          <h2 className="section-title">
            यात्रियों के महत्वपूर्ण सवाल एवं जवाब
          </h2>
          <p className="section-subtitle">
            रामदेवरा यात्रा और धर्मशाला में ठहराव से जुड़े सभी सामान्य प्रश्नों के उत्तर यहां प्राप्त करें।
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  border: isOpen ? "1px solid #d97706" : "1px solid #fed7aa",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? "0 4px 15px rgba(217, 119, 6, 0.08)" : "0 2px 4px rgba(0,0,0,0.02)"
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  style={{
                    width: "100%",
                    padding: "18px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    textAlign: "left",
                    fontWeight: 700,
                    fontSize: "1.02rem",
                    color: isOpen ? "#92400e" : "#1e293b",
                    background: isOpen ? "#fef3c7" : "#ffffff"
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <HelpCircle size={18} color="#d97706" style={{ flexShrink: 0 }} />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                      color: "#b45309"
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: "18px 22px 22px 50px",
                    fontSize: "0.93rem",
                    color: "#475569",
                    lineHeight: 1.65,
                    borderTop: "1px solid #fed7aa",
                    background: "#ffffff"
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra Question Assistance */}
        <div style={{
          marginTop: "36px",
          textAlign: "center",
          padding: "20px",
          background: "#ffffff",
          borderRadius: "14px",
          border: "1px solid #e2e8f0"
        }}>
          <p style={{ fontSize: "0.95rem", color: "#64748b", marginBottom: "10px" }}>
            क्या आपका कोई अन्य प्रश्न है? सीधे प्रबंधक महोदय से बात करें:
          </p>
          <a
            href="tel:9413187706"
            className="btn btn-primary"
            style={{ padding: "10px 22px", fontSize: "0.95rem" }}
          >
            <Phone size={16} /> कॉल करें: 9413187706
          </a>
        </div>

      </div>
    </section>
  );
}
