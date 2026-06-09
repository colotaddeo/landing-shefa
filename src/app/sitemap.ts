import { MetadataRoute } from "next";
import { COMPANIES } from "@/data/companies";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://shefa.holdings";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, priority: 1.0, changeFrequency: "weekly" },
    { url: `${baseUrl}/contact/`, priority: 0.6, changeFrequency: "monthly" },
  ];

  const portfolioRoutes: MetadataRoute.Sitemap = COMPANIES.map((company) => ({
    url: `${baseUrl}/portfolio/${company.slug}/`,
    priority: 0.8,
    changeFrequency: "weekly",
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...portfolioRoutes];
}
