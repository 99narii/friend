/**
 * JSON-LD 구조화 데이터 컴포넌트
 * SEO/AEO/GEO 최적화를 위한 Schema.org 마크업
 */

import { SITE_CONFIG } from "@/src/constants/site";
import Script from "next/script";

export function JsonLdSchemas() {
  return (
    <>
      {/* Organization Schema */}
      <OrganizationSchema />

      {/* WebSite Schema */}
      <WebSiteSchema />

      {/* Service Schema */}
      <ServiceSchema />

      {/* FAQ Schema */}
      <FAQSchema />

      {/* LocalBusiness Schema */}
      <LocalBusinessSchema />
    </>
  );
}

// 조직/기업 정보
function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}${SITE_CONFIG.logo.url}`,
    description: SITE_CONFIG.description,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE_CONFIG.contact.phone,
      contactType: "customer service",
      areaServed: "KR",
      availableLanguage: ["Korean"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "서울특별시",
      addressRegion: "강남구",
      streetAddress: SITE_CONFIG.contact.address,
      addressCountry: "KR",
    },
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
    founder: {
      "@type": "Person",
      name: SITE_CONFIG.business.founder,
    },
    foundingDate: SITE_CONFIG.business.foundingDate,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: SITE_CONFIG.business.numberOfEmployees,
    },
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 웹사이트 정보
function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logo.url}`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "ko-KR",
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 서비스 정보
function ServiceSchema() {
  const schemas = SITE_CONFIG.services.map((service, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_CONFIG.url}#service-${index}`,
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    areaServed: {
      "@type": "Place",
      name: SITE_CONFIG.business.areaServed,
    },
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "KRW",
      availability: "https://schema.org/InStock",
    },
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`service-schema-${index}`}
          id={`service-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

// FAQ 정보 (AEO/GEO 최적화 핵심)
function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SITE_CONFIG.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 로컬 비즈니스 정보
function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_CONFIG.url,
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage.url}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contact.phone,
    email: SITE_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE_CONFIG.contact.address,
      addressLocality: "서울특별시",
      addressRegion: "강남구",
      postalCode: "",
      addressCountry: "KR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.5665, // 발주처 위치로 수정 필요
      longitude: 126.978,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: SITE_CONFIG.business.priceRange,
    servesCuisine: undefined,
    areaServed: [
      {
        "@type": "City",
        name: "서울특별시 강동구",
      },
      {
        "@type": "City",
        name: "인천광역시",
      },
      {
        "@type": "City",
        name: "서울특별시 강북구",
      },
      {
        "@type": "City",
        name: "서울특별시 송파구",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8", // 실제 리뷰 데이터로 대체
      reviewCount: "150", // 실제 리뷰 수로 대체
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: Object.values(SITE_CONFIG.social).filter(Boolean),
  };

  return (
    <Script
      id="localbusiness-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
