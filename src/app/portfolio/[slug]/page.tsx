import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COMPANIES, getCompany } from "@/data/companies";
import CompanyDetailPage from "@/components/CompanyDetailPage";

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
  return <CompanyDetailPage company={company} />;
}
