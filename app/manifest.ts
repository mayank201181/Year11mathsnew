import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "Year 11 IGCSE Maths (4MA1 Higher)",
    short_name: "IGCSE Maths",
    description: "Pearson Edexcel IGCSE Mathematics Higher (4MA1) lessons, mark-scheme traps, interactive explorables, adaptive drills, Daily 5 & mock exams.",
    lang: "en-GB",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "any",
    background_color: "#f5f6fb",
    theme_color: "#4f46e5",
    categories: ["education"],
    icons: [
      { src: "/api/appicon?size=192", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/api/appicon?size=512&maskable=1", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
