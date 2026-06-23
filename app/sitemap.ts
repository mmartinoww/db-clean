import type { MetadataRoute } from "next";
import { getServicePath, services } from "./lib/services";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0
    },
    ...services.map((service) => ({
      url: `${SITE_URL}${getServicePath(service.slug)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.85
    }))
  ];
}
