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

  const title = `${company.name} — SHEFA Holdings Portfolio`;
  const description = company.tagline;
  const url = `https://shefa.holdings/portfolio/${company.slug}/`;
  const ogImage = company.banner ? `${company.banner}` : "/og-image.jpg";

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${company.name} — ${company.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
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
