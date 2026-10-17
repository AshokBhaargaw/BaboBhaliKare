"use client";

import { Clock, MapPin, Compass, Sparkles, Navigation } from "lucide-react";

export default function TempleGuideSection() {
  const darshanPlaces = [
    {
      name: "श्री बाबा रामदेव जी समाधि मंदिर",
      nameEn: "Main Baba Ramdevji Temple",
      distance: "धर्मशाला से 400 मीटर (5 मिनट)",
      desc: "बाबा रामसापीर की दिव्य जीवित समाधि, स्वर्ण कलश व अखंड ज्योत के पावन दर्शन। देश भर से लाखों श्रद्धालु यहां शीश नवाते हैं।",
      highlight: "मुख्य मंदिर",
      icon: "🚩"
    },
    {
      name: "रामसरोवर तालाब (Ramsar Sarovar)",
      nameEn: "Sacred Holy Lake",
      distance: "धर्मशाला से 800 मीटर",
      desc: "बाबा रामदेव जी द्वारा निर्मित विशाल पवित्र सरोवर। मान्यता है कि इसके जल में आचमन व स्नान से समस्त चर्मरोग व कष्ट दूर होते हैं।",
      highlight: "पवित्र स्नान",
      icon: "🌊"
    },
    {
      name: "परचा बावड़ी (Parcha Bavdi)",
      nameEn: "Miraculous Stepwell",
      distance: "धर्मशाला से 600 मीटर",
      desc: "ऐतिहासिक बावड़ी जहां बाबा रामदेव जी ने मक्का-मदीना से आए पीरों को उनके अपने कटोरे में खीर खिलाकर परचा (चमत्कार) दिखाया था।",
      highlight: "चमत्कार स्थल",
      icon: "🏛️"
    },
    {
      name: "गुरु बालीनाथ जी का धूणा",
      nameEn: "Guru Balinathji Dhuna",
      distance: "धर्मशाला से 1.5 किमी",
      desc: "बाबा रामदेव जी के पूज्य गुरु योगी बालीनाथ जी की तपोभूमि, जहां अखंड धूणा प्रज्वलित रहता है और भैरव वध की कथा जुड़ी है।",
      highlight: "तपोभूमि",
      icon: "🔥"
    },
    {
      name: "डाली बाई की समाधि व पत्थर कंगन",
      nameEn: "Dali Bai Samadhi & Kangan",
      distance: "मुख्य मंदिर प्रांगण में स्थित",
      desc: "बाबा की अनन्य भक्त बहिन डाली बाई की समाधि। यहां स्थित पत्थर के कंगन के नीचे से निकलने पर मनोकामना पूर्ण होने की मान्यता है।",
      highlight: "कंगन परिक्रमा",
      icon: "✨"
    },
    {
      name: "ऐतिहासिक पोकरण फोर्ट (Pokhran Fort)",
      nameEn: "Pokhran Heritage Fort",
      distance: "रामदेवरा से 12 किमी",
      desc: "14वीं शताब्दी का ऐतिहासिक लाल व पीले बलुआ पत्थर का दुर्ग, संग्रहालय तथा बाबा के बाल्यकाल से जुड़ी अनेक स्मृतियां।",
      highlight: "पर्यटन स्थल",
      icon: "🏰"
    }
  ];

  const aartiSchedule = [
    { time: "प्रातः 05:00 AM", name: "मंगला आरती", note: "प्रातः काल प्रथम दर्शन" },
    { time: "दोपहर 12:00 PM", name: "भोग आरती", note: "ठाकुर जी को राजभोग अर्पण" },
    { time: "सायं 07:00 PM", name: "संध्या आरती", note: "भव्य दीप व झांझ दर्शन" },
    { time: "रात्रि 09:30 PM", name: "शयन आरती", note: "रात्रि अंतिम आरती व शयन" }
  ];

  return (
    <section id="darshan" style={{ padding: "80px 0", background: "#fbf8f2" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>🚩</span>
            <span>रामदेवरा तीर्थ दर्शन</span>
          </div>
          <h2 className="section-title">
            रामदेवरा के पवित्र तीर्थ स्थल एवं दर्शन गाइड
          </h2>
          <p className="section-subtitle">
            हमारी धर्मशाला से सभी प्रमुख धार्मिक व दर्शनीय स्थल बेहद नजदीक हैं, जिससे आप व आपका परिवार बिना किसी असुविधा के आसानी से दर्शन कर सकते हैं।
          </p>
        </div>

        {/* Temple & Aarti Layout Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginBottom: "48px"
        }}>
          {/* Main Temple Card */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa"
          }}>
            <div style={{ position: "relative", height: "260px" }}>
              <img
                src="/images/ramdevra-mandir.jpg"
                alt="Baba Ramdev Temple Ramdevra"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                background: "rgba(15, 23, 42, 0.8)",
                backdropFilter: "blur(6px)",
                padding: "10px 16px",
                borderRadius: "12px",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}>
                <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                  📍 पैदल दूरी: मात्र 400 मीटर
                </span>
                <span style={{ color: "#fcd34d", fontSize: "0.85rem", fontWeight: 700 }}>
                  5 मिनट वॉक
                </span>
              </div>
            </div>

            <div style={{ padding: "26px" }}>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#78350f", marginBottom: "8px" }}>
                श्री रामदेव जी समाधि मंदिर (रुणिचा धाम)
              </h3>
              <p style={{ fontSize: "0.92rem", color: "#475569", lineHeight: 1.6, marginBottom: "20px" }}>
                कलियुग के अवतारी बाबा रामसापीर का यह मंदिर सामाजिक समरसता और हिंदू-मुस्लिम एकता का अनुपम प्रतीक है। 
                हमारी धर्मशाला से मंदिर का मार्ग सीधा, पक्का और चौड़ा है, जिससे वरिष्ठ जनों के लिए सुबह-शाम दर्शन करना बेहद सुगम रहता है।
              </p>

              <div style={{
                background: "#fef3c7",
                borderRadius: "12px",
                padding: "16px",
                border: "1px solid #fde68a"
              }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#92400e", marginBottom: "6px" }}>
                  ✨ यात्री टिप:
                </div>
                <div style={{ fontSize: "0.82rem", color: "#78350f", lineHeight: 1.5 }}>
                  मंगला आरती (सुबह 5 बजे) व संध्या आरती (शाम 7 बजे) के समय विशेष आनंद रहता है। धर्मशाला में ठहरने से आप समय पर आरती में शामिल हो सकते हैं।
                </div>
              </div>
            </div>
          </div>

          {/* Aarti Schedule Card */}
          <div style={{
            background: "#ffffff",
            borderRadius: "20px",
            padding: "28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            border: "1px solid #fed7aa",
            display: "flex",
            flexDirection: "column"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{
                width: "42px",
                height: "42px",
                borderRadius: "10px",
                background: "#fef3c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#b45309"
              }}>
                <Clock size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#1e293b" }}>
                  मंदिर आरती समय-सारणी
                </h3>
                <div style={{ fontSize: "0.82rem", color: "#64748b" }}>
                  दैनिक नियमित दर्शन व आरती का समय
                </div>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1, marginBottom: "20px" }}>
              {aartiSchedule.map((aarti, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 16px",
                    background: idx % 2 === 0 ? "#fbf8f2" : "#f8fafc",
                    borderRadius: "10px",
                    border: "1px solid #f1f5f9"
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 800, color: "#1e293b", fontSize: "0.95rem" }}>
                      {aarti.name}
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#64748b" }}>
                      {aarti.note}
                    </div>
                  </div>
                  <div style={{
                    fontWeight: 800,
                    color: "#b45309",
                    background: "#fef3c7",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.85rem"
                  }}>
                    {aarti.time}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: "14px",
              background: "#eff6ff",
              borderRadius: "10px",
              border: "1px solid #bfdbfe",
              fontSize: "0.84rem",
              color: "#1e40af",
              lineHeight: 1.5
            }}>
              <strong>नोट:</strong> भादवा शुक्ल द्वितीया से एकादशी (वार्षिक मेला) के दौरान मंदिर कपाट 24 घंटे खुले रहते हैं।
            </div>
          </div>
        </div>

        {/* Other Darshan Spots */}
        <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#1e293b", marginBottom: "20px", textAlign: "center" }}>
          रामदेवरा एवं आस-पास के प्रमुख दर्शनीय स्थल
        </h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}>
          {darshanPlaces.slice(1).map((place, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                borderRadius: "16px",
                padding: "22px",
                border: "1px solid #f1f5f9",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "1.8rem" }}>{place.icon}</span>
                <span style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#047857",
                  background: "#d1fae5",
                  padding: "3px 8px",
                  borderRadius: "6px"
                }}>
                  {place.distance}
                </span>
              </div>

              <h4 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b", marginTop: "4px" }}>
                {place.name}
              </h4>
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.55 }}>
                {place.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
