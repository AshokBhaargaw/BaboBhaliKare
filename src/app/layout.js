import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://babobhalikare.com"),
  title: "Babo Bhali Kare Singhvi Jain Dharmshala | Ramdevra, Rajasthan",
  description: "Official website of Babo Bhali Kare Singhvi Jain Dharmshala in Ramdevra (Pokhran). Located just 400m from Baba Ramdev Temple. Clean AC and Non-AC family rooms, 24/7 hot water, secure parking, pure vegetarian dining. Direct helpline: 9413187706",
  keywords: [
    "Babo Bhali Kare",
    "Babo Bhali Kare Dharmshala",
    "Singhvi Jain Dharmshala Ramdevra",
    "Dharmshala near Baba Ramdev Temple",
    "Ramdevra Dharmshala booking",
    "Ramdevra accommodation 9413187706",
    "Ramdevra yatri niwas",
    "Pokhran Jain Dharamshala",
    "Rooms in Ramdevra Rajasthan"
  ],
  authors: [{ name: "Babo Bhali Kare Singhvi Jain Dharmshala" }],
  openGraph: {
    title: "Babo Bhali Kare Singhvi Jain Dharmshala | Ramdevra",
    description: "Budget & Deluxe AC/Non-AC rooms near Baba Ramdevji Samadhi Mandir, Ramdevra. Clean, peaceful & secure family accommodation with parking. Call: 9413187706",
    url: "https://maps.app.goo.gl/SAv4aVsNab6Z4j1Q7",
    siteName: "Babo Bhali Kare Dharmshala",
    images: [
      {
        url: "/images/exterior.jpg",
        width: 1200,
        height: 675,
        alt: "Babo Bhali Kare Singhvi Jain Dharmshala Ramdevra",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#d97706",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="CtMvw2C-4YeWJWP3WIdx5-0mSNoUkkzz-WZlMTG1U-o" />
      </head>
      <body>{children}</body>
    </html>
  );
}
