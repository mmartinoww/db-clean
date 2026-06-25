import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "../../components/service-page";
import { getServiceBySlug, getServicePath, services } from "../../lib/services";
import { SITE_URL } from "../../lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const pageUrl = `${SITE_URL}${getServicePath(service.slug)}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: pageUrl,
      languages: {
        "bg-BG": pageUrl
      }
    },
    openGraph: {
      type: "website",
      locale: "bg_BG",
      url: pageUrl,
      siteName: "DB-Clean",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [
        {
          url: `${SITE_URL}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.heroImageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}${service.heroImage}`]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1
      }
    }
  };
}

export default async function UslugaPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServicePage service={service} />;
}
