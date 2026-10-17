import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://babobhalikare.com"),
  title: {
    default: "Best Dharmshala in Ramdevra | Babo Bhali Kare Singhvi Jain Dharamshala",
    template: "%s | Babo Bhali Kare Dharmshala Ramdevra",
  },
  description:
    "Looking for the best dharmshala in Ramdevra? Babo Bhali Kare Singhvi Jain Dharamshala is located just 400m from Baba Ramdev Temple. Clean AC & Non-AC family rooms, 24/7 hot water, free parking, elevator, and satvik dining. Call 9413187706.",
  keywords: [
    "dharmshala in ramdevra",
    "dharamshala in ramdevra",
    "best dharmshala in ramdevra",
    "ramdevra dharmshala booking",
    "babo bhali kare dharmshala",
    "babo bhali kare ramdevra",
    "singhvi jain dharmshala ramdevra",
    "ramdevra dharamshala contact number",
    "9413187706",
    "dharmshala near baba ramdev mandir",
    "rooms in ramdevra",
    "ramdevra yatri niwas",
    "pokhran jain dharamshala",
    "ramdevra hotel booking",
    "budget dharmshala in ramdevra",
    "ac rooms in ramdevra",
    "रामदेवरा धर्मशाला",
    "रामदेवरा में धर्मशाला",
    "बाबो भली करे धर्मशाला",
    "रामदेवरा धर्मशाला बुकिंग"
  ],
  authors: [{ name: "Babo Bhali Kare Singhvi Jain Dharmshala", url: "https://babobhalikare.com" }],
  creator: "Babo Bhali Kare Singhvi Jain Dharmshala",
  publisher: "Babo Bhali Kare Singhvi Jain Dharmshala",
  applicationName: "Babo Bhali Kare Ramdevra",
  category: "Lodging & Travel",
  alternates: {
    canonical: "https://babobhalikare.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Best Dharmshala in Ramdevra | Babo Bhali Kare Singhvi Jain Dharamshala",
    description:
      "Comfortable AC & Non-AC family rooms located just 400m from Baba Ramdevji Samadhi Mandir, Ramdevra. Clean, peaceful & secure stay with car/bus parking & hot water. Call: 9413187706",
    url: "https://babobhalikare.com",
    siteName: "Babo Bhali Kare Dharmshala Ramdevra",
    images: [
      {
        url: "/images/exterior.jpg",
        width: 1200,
        height: 675,
        alt: "Best Dharmshala in Ramdevra - Babo Bhali Kare Singhvi Jain Dharamshala",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dharmshala in Ramdevra | Babo Bhali Kare Dharamshala",
    description:
      "Clean AC and Non-AC family rooms 400m from Baba Ramdevji Samadhi Mandir, Ramdevra. Free parking, hot water. Helpline: 9413187706.",
    images: ["/images/exterior.jpg"],
  },
  verification: {
    google: "CtMvw2C-4YeWJWP3WIdx5-0mSNoUkkzz-WZlMTG1U-o",
  },
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Ramdevra, Pokhran, Jaisalmer, Rajasthan",
    "geo.position": "26.0248;71.9213",
    "ICBM": "26.0248, 71.9213",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d97706",
};

export default function RootLayout({ children }) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LodgingBusiness", "Hotel", "LocalBusiness"],
        "@id": "https://babobhalikare.com/#lodging",
        name: "Babo Bhali Kare Singhvi Jain Dharmshala",
        alternateName: [
          "Babo Bhali Kare Dharmshala",
          "Dharmshala in Ramdevra",
          "Best Dharmshala in Ramdevra",
          "Singhvi Jain Dharmshala Ramdevra",
          "बाबो भली करे सिंघवी जैन धर्मशाला रामदेवरा",
          "रामदेवरा धर्मशाला"
        ],
        description:
          "Premier budget and family dharmshala in Ramdevra, Rajasthan located just 400 meters from Shree Baba Ramdevji Samadhi Mandir. Features clean AC and Non-AC rooms, 24/7 hot water geysers, secure car/bus parking, lift for elders, and pure vegetarian dining nearby.",
        url: "https://babobhalikare.com",
        telephone: "+91-9413187706",
        priceRange: "₹₹ (Budget Friendly)",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI",
        image: [
          "https://babobhalikare.com/images/exterior.jpg",
          "https://babobhalikare.com/img3.jpeg",
          "https://babobhalikare.com/img4.jpeg",
          "https://babobhalikare.com/images/room-ac.jpg",
          "https://babobhalikare.com/images/room-family.jpg"
        ],
        logo: "https://babobhalikare.com/images/exterior.jpg",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Near Gram Panchayat, Ramdevra - Biramdevra Road",
          addressLocality: "Ramdevra, Pokhran",
          addressRegion: "Rajasthan",
          postalCode: "345023",
          addressCountry: "IN"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.0248,
          longitude: 71.9213
        },
        hasMap: "https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            opens: "00:00",
            closes: "23:59"
          }
        ],
        checkinTime: "10:00",
        checkoutTime: "10:00",
        amenityFeature: [
          {
            "@type": "LocationFeatureSpecification",
            name: "Air Conditioning (AC Rooms)",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Free On-Site Gated Parking (Cars & Buses)",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "24/7 Hot Water Geyser",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Elevator / Lift for Seniors",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "24x7 CCTV Security & Guard",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Pure RO Drinking Water",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Proximity to Baba Ramdev Temple (400m, 5 mins walk)",
            value: true
          },
          {
            "@type": "LocationFeatureSpecification",
            name: "Pure Vegetarian & Jain Dining Nearby",
            value: true
          }
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "174",
          bestRating: "5",
          worstRating: "1"
        },
        makesOffer: [
          {
            "@type": "Offer",
            name: "Deluxe AC Room (2-Bed)",
            description: "Air-conditioned comfort with clean attached bathroom and 24/7 hot water geyser in Ramdevra."
          },
          {
            "@type": "Offer",
            name: "Super Deluxe Family AC Suite (4-Bed)",
            description: "Spacious family suite with 4 beds, attached bathroom, geyser and high cooling AC near Baba Ramdev Mandir."
          },
          {
            "@type": "Offer",
            name: "Standard Non-AC Room",
            description: "Clean and budget-friendly room with attached private bath and hot water facility."
          },
          {
            "@type": "Offer",
            name: "Yatri Sangh Group Hall / Dormitory",
            description: "Spacious accommodation hall with multiple washrooms for 15 to 40+ pilgrims."
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://babobhalikare.com/#website",
        url: "https://babobhalikare.com",
        name: "Babo Bhali Kare - Dharmshala in Ramdevra",
        description: "Official portal for Babo Bhali Kare Singhvi Jain Dharmshala in Ramdevra, Rajasthan.",
        inLanguage: "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://babobhalikare.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://babobhalikare.com"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Dharmshala in Ramdevra",
            item: "https://babobhalikare.com/#about"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://babobhalikare.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which is the best dharmshala in Ramdevra near Baba Ramdev temple?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Babo Bhali Kare Singhvi Jain Dharmshala is widely recognized as one of the best dharmshalas in Ramdevra. Located just 400 meters (5 minutes walk) from Baba Ramdevji Samadhi Mandir, it offers clean Deluxe AC rooms, Non-AC rooms, family suites, 24/7 hot water geysers, gated parking, elevator/lift for elders, and satvik dining nearby."
            }
          },
          {
            "@type": "Question",
            name: "How can I book a room at Babo Bhali Kare Dharmshala in Ramdevra?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can book directly by calling our manager Omprakash RajaRam Gusai on the official helpline number: 9413187706. Room availability and immediate advance reservations are confirmed directly over the phone."
            }
          },
          {
            "@type": "Question",
            name: "How far is Babo Bhali Kare Dharmshala from Baba Ramdev Mandir?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The dharmshala is situated just 400 meters (approx 5 minutes easy walking distance) from the sacred Baba Ramdevji Samadhi Mandir in Ramdevra, making it extremely convenient for morning and evening darshan and aarti."
            }
          },
          {
            "@type": "Question",
            name: "Is private car and bus parking available at the dharmshala?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Babo Bhali Kare Dharmshala has an expansive, secure on-site gated parking area that comfortably accommodates private cars, traveler vans, and large pilgrim buses under 24/7 CCTV surveillance."
            }
          },
          {
            "@type": "Question",
            name: "What are the check-in and check-out timings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Standard check-in and check-out time is 10:00 AM. Flexible timings are offered for early-morning or late-night train and bus arrivals, subject to room availability."
            }
          },
          {
            "@type": "Question",
            name: "Are Jain and pure vegetarian food facilities available nearby?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, pure vegetarian, Marwari, and Jain bhojanshala dining facilities are situated in the immediate vicinity of the dharmshala, serving fresh, hygienic satvik meals at nominal rates."
            }
          },
          {
            "@type": "Question",
            name: "How far is the dharmshala from Ramdevra Railway Station?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The dharmshala is approximately 1.5 km from Ramdevra Railway Station. Auto-rickshaws and e-rickshaws are readily available 24/7 outside the station to take you directly to the dharmshala in under 5 minutes."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Ramdevra, Rajasthan, India" />
        <meta name="geo.position" content="26.0248;71.9213" />
        <meta name="ICBM" content="26.0248, 71.9213" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
