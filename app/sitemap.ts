import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/", "/services", "/systems/web", "/systems/automation", "/systems/ai",
    "/work/younis-b-azeem", "/legal/privacy", "/legal/terms",
  ].map((path) => ({ url: `${SITE_URL}${path === "/" ? "" : path}` }));
}
