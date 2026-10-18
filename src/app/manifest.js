export default function manifest() {
  return {
    name: "Babo Bhali Kare Singhvi Jain Dharmshala Ramdevra",
    short_name: "Babo Bhali Kare",
    description: "Best Dharmshala in Ramdevra located 200m from Baba Ramdevji Samadhi Mandir. Clean AC/Non-AC rooms, parking, 24/7 hot water. Call 9413187706.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d97706",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}
