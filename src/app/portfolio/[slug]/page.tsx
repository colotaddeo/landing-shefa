import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COMPANIES, getCompany } from "@/data/companies";
import CompanyDetailPage from "@/components/CompanyDetailPage";
import CompanyDetailPageV2 from "@/components/CompanyDetailPageV2";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COMPANIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) return {};
  return {
    title: `${company.name} — SHEFA Portfolio`,
    description: company.tagline,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  const idx = COMPANIES.findIndex((c) => c.slug === slug);
  const prevSlug = idx > 0 ? COMPANIES[idx - 1].slug : COMPANIES[COMPANIES.length - 1].slug;
  const nextSlug = idx < COMPANIES.length - 1 ? COMPANIES[idx + 1].slug : COMPANIES[0].slug;

  if (company.layoutVersion === "v2") return <CompanyDetailPageV2 company={company} prevSlug={prevSlug} nextSlug={nextSlug} />;
  return <CompanyDetailPage company={company} />;
}
