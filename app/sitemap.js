import { siteSEO } from "@/utils/seoConfig";
import { chemicalProducts, mechanicalProducts, sparesProducts, applicationAreas } from "@/lib/data";

export default function sitemap() {
  const base = siteSEO.baseUrl;
  const now = new Date();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/company/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/company/quality-policy`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/company/our-mission`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/chemical`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/products/mechanical`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/products/spares`, lastModified: now, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/application-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/clients`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/news-events`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  const chemicalPages = chemicalProducts.map((p) => ({
    url: `${base}/products/chemical/${p.slug}`,
    lastModified: now, changeFrequency: "monthly", priority: 0.8,
  }));
  const mechanicalPages = mechanicalProducts.map((p) => ({
    url: `${base}/products/mechanical/${p.slug}`,
    lastModified: now, changeFrequency: "monthly", priority: 0.8,
  }));
  const sparesPages = sparesProducts.map((p) => ({
    url: `${base}/products/spares/${p.slug}`,
    lastModified: now, changeFrequency: "monthly", priority: 0.75,
  }));
  const appAreaPages = applicationAreas.map((a) => ({
    url: `${base}/application-areas/${a.slug}`,
    lastModified: now, changeFrequency: "monthly", priority: 0.8,
  }));

  return [...staticPages, ...chemicalPages, ...mechanicalPages, ...sparesPages, ...appAreaPages];
}
