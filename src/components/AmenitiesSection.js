"use client";

import {
  MapPin,
  Flame,
  Car,
  GlassWater,
  ArrowUpSquare,
  UtensilsCrossed,
  ShieldCheck,
  Zap,
  Luggage,
  Sparkles,
  Phone
} from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <MapPin size={26} color="#d97706" />,
      title: "मंदिर से मात्र 400 मीटर",
      titleEn: "Walking Distance to Temple",
      desc: "मुख्य श्री बाबा रामदेव जी समाधि मंदिर तक पैदल केवल 5 मिनट का सीधा और सुगम रास्ता।"
    },
    {
      icon: <Flame size={26} color="#d97706" />,
      title: "24 घंटे गर्म व ठंडा पानी",
      titleEn: "24/7 Hot Water & Geyser",
      desc: "स्नान हेतु आधुनिक वॉटर हीटर व गीज़र की निरंतर 24 घंटे उपलब्धता।"
    },
    {
      icon: <Car size={26} color="#d97706" />,
      title: "विशाल सुरक्षित पार्किंग",
      titleEn: "Spacious & Safe Parking",
      desc: "कारों, बसों व निजी गाड़ियों को धर्मशाला परिसर में सुरक्षित खड़ा करने की पर्याप्त जगह।"
    },
    {
      icon: <GlassWater size={26} color="#d97706" />,
      title: "RO शुद्ध पेयजल",
      titleEn: "RO Purified Cold Water",
      desc: "यात्रियों के स्वास्थ्य हेतु स्वच्छ, ठंडा और शुद्ध RO फिल्टर वाटर की सुविधा।"
    },
    {
      icon: <ArrowUpSquare size={26} color="#d97706" />,
      title: "लिफ्ट (Elevator) सुविधा",
      titleEn: "Lift Facility for Yatris",
      desc: "वरिष्ठ नागरिकों, बुजुर्गों एवं बच्चों के लिए ऊपरी मंजिलों तक सुगम आवागमन।"
    },
    {
      icon: <UtensilsCrossed size={26} color="#d97706" />,
      title: "शुद्ध शाकाहारी भोजनालय",
      titleEn: "Pure Veg & Jain Food",
      desc: "परिसर के पास में ही शुद्ध सात्विक, मारवाड़ी एवं जैन भोजनशाला की उत्तम व्यवस्था।"
    },
    {
      icon: <ShieldCheck size={26} color="#d97706" />,
      title: "24x7 CCTV निगरानी",
      titleEn: "CCTV & Security",
      desc: "यात्रियों और उनके सामान की सुरक्षा हेतु चौबीसों घंटे सुरक्षा कर्मी व कैमरे सक्रिय।"
    },
    {
      icon: <Zap size={26} color="#d97706" />,
      title: "पावर बैकअप सुविधा",
      titleEn: "Power Backup",
      desc: "विद्युत कटौती के दौरान भी पंखों, लाइटों और आवश्यक सेवाओं हेतु जनरेटर बैकअप।"
    },
    {
      icon: <Luggage size={26} color="#d97706" />,
      title: "लगेज स्टोरेज रूम",
      titleEn: "Luggage Storage",
      desc: "दर्शन के समय या जल्दी आने / देर से जाने पर सामान सुरक्षित रखने की व्यवस्था।"
    },
    {
      icon: <Sparkles size={26} color="#d97706" />,
      title: "दैनिक हाइजीन व सफाई",
      titleEn: "Daily Sanitization & Hygiene",
      desc: "कमरों और प्रांगण की प्रतिदिन नियमपूर्वक फिनाइल व डेटॉल से डीप क्लीनिंग।"
    }
  ];

  return (
    <section id="amenities" style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <span>✨</span>
            <span>सर्वोत्तम सुविधाएं</span>
          </div>
          <h2 className="section-title">
            यात्रियों के सुखद व आरामदायक प्रवास हेतु व्यवस्था
          </h2>
          <p className="section-subtitle">
            बाबो भली करे सिंघवी जैन धर्मशाला में आपकी हर धार्मिक यात्रा को सुखद, सुरक्षित और यादगार बनाने के लिए सभी आवश्यक सुविधाएं उपलब्ध हैं।
          </p>
        </div>

        {/* Amenities Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "22px"
        }}>
          {amenities.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "#fbf8f2",
                borderRadius: "16px",
                padding: "24px 20px",
                border: "1px solid #fed7aa",
                transition: "all 0.25s ease",
                display: "flex",
                flexDirection: "column",
                gap: "12px"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.borderColor = "#d97706";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(217, 119, 6, 0.1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#fed7aa";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "12px",
                background: "#fef3c7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #fde68a"
              }}>
                {item.icon}
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#1e293b", marginBottom: "2px" }}>
                  {item.title}
                </h3>
                <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#b45309", textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "8px" }}>
                  {item.titleEn}
                </div>
                <p style={{ fontSize: "0.88rem", color: "#64748b", lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Helpline CTA Strip */}
        <div style={{
          marginTop: "48px",
          background: "linear-gradient(135deg, #78350f, #92400e)",
          borderRadius: "20px",
          padding: "32px",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          boxShadow: "0 15px 30px rgba(120, 53, 15, 0.25)",
          border: "2px solid #fcd34d"
        }}>
          <div>
            <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#fef3c7", marginBottom: "6px" }}>
              क्या आप बड़े यात्री संघ या परिवार के साथ आ रहे हैं?
            </div>
            <p style={{ fontSize: "0.95rem", opacity: 0.9, maxWidth: "600px" }}>
              विशेष हॉल, पार्किंग व्यवस्था एवं भोजन संबंधी किसी भी परामर्श के लिए हमारे केयरटेकर से सीधे बात करें।
            </p>
          </div>
          <a
            href="tel:9413187706"
            className="btn btn-primary pulse-button"
            style={{
              background: "#ffffff",
              color: "#78350f",
              padding: "14px 28px",
              fontSize: "1.05rem",
              fontWeight: 800,
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)"
            }}
          >
            <Phone size={18} color="#78350f" />
            <span>फोन करें: 9413187706</span>
          </a>
        </div>

      </div>
    </section>
  );
}
