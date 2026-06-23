import type { ServiceDefinition } from "./services";
import { getServicePath } from "./services";
import { BUSINESS_ID, SITE_URL, WEBSITE_ID, business } from "./site";

type JsonLdObject = Record<string, unknown>;

export function buildServicePageSchemas(service: ServiceDefinition): JsonLdObject[] {
  const pageUrl = `${SITE_URL}${getServicePath(service.slug)}`;
  const pageId = `${pageUrl}#webpage`;
  const serviceId = `${pageUrl}#service`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;

  return [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageId,
      url: pageUrl,
      name: service.metaTitle,
      description: service.metaDescription,
      inLanguage: "bg-BG",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": serviceId },
      breadcrumb: { "@id": breadcrumbId },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}${service.heroImage}`,
        caption: service.heroImageAlt
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: SITE_URL
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Услуги",
          item: `${SITE_URL}/#services`
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: pageUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": serviceId,
      name: service.title,
      serviceType: service.title,
      description: service.metaDescription,
      url: pageUrl,
      image: `${SITE_URL}${service.heroImage}`,
      provider: { "@id": BUSINESS_ID },
      areaServed: [
        { "@type": "City", name: "Sofia" },
        { "@type": "City", name: "Pernik" }
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "BGN",
        availability: "https://schema.org/InStock",
        url: pageUrl,
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Цената се определя след оглед на място."
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": BUSINESS_ID,
      name: business.name,
      description: business.description,
      url: business.siteUrl,
      telephone: business.phone,
      email: business.email,
      sameAs: [business.facebookUrl],
      logo: {
        "@type": "ImageObject",
        url: `${business.siteUrl}/icons/icon.svg`
      },
      areaServed: [
        { "@type": "City", name: "Sofia" },
        { "@type": "City", name: "Pernik" }
      ]
    }
  ];
}

export function buildHomePageSchemas(input: {
  faqs: { question: string; answer: string }[];
  services: { title: string; text: string }[];
}): JsonLdObject[] {
  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": BUSINESS_ID,
      name: business.name,
      description: business.description,
      url: business.siteUrl,
      telephone: business.phone,
      email: business.email,
      sameAs: [business.facebookUrl],
      logo: {
        "@type": "ImageObject",
        url: `${business.siteUrl}/icons/icon.svg`,
        width: 512,
        height: 512
      },
      image: `${business.siteUrl}/og-image.jpg`,
      priceRange: "$$",
      currenciesAccepted: "BGN",
      paymentAccepted: "Брой, банков превод, плащане чрез извозените предмети",
      areaServed: [
        { "@type": "City", name: "Sofia" },
        { "@type": "City", name: "Pernik" }
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "София",
        addressRegion: "Sofia Province",
        addressCountry: "BG"
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "08:00",
          closes: "19:00"
        }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги на DB-Clean",
        itemListElement: input.services.map((s, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.text,
            provider: { "@id": BUSINESS_ID }
          }
        }))
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: business.siteUrl,
      name: business.name,
      description: business.description,
      inLanguage: "bg-BG",
      publisher: { "@id": BUSINESS_ID }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${business.siteUrl}/#webpage`,
      url: business.siteUrl,
      name: "DB-Clean | Почистване на имоти, дворове и извозване — София и Перник",
      description: business.description,
      inLanguage: "bg-BG",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": BUSINESS_ID },
      breadcrumb: { "@id": `${business.siteUrl}/#breadcrumb` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${business.siteUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: business.siteUrl
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${business.siteUrl}/#service`,
      name: "Почистване на имоти, дворове и извозване на отпадъци",
      serviceType: "Почистване и извозване",
      description: business.description,
      provider: { "@id": BUSINESS_ID },
      areaServed: [
        { "@type": "City", name: "Sofia" },
        { "@type": "City", name: "Pernik" }
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "BGN",
        priceSpecification: {
          "@type": "PriceSpecification",
          description: "Ценообразуването се извършва след оглед. Възможно плащане чрез извозените предмети."
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: input.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer
        }
      }))
    }
  ];
}
