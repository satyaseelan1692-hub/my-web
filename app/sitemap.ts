import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/projects",
  "/careers",
  "/contact",
  "/portal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.snexustechnologies.com";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
