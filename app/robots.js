import { siteSEO } from "@/utils/seoConfig";
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteSEO.baseUrl}/sitemap.xml`,
    host: siteSEO.baseUrl,
  };
}
