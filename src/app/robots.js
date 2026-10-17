export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://babobhalikare.com/sitemap.xml",
    host: "https://babobhalikare.com",
  };
}
