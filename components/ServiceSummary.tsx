/**
 * 서비스 요약 컴포넌트
 * AEO/GEO 최적화: AI가 서비스 정보를 명확히 이해하고 답변에 인용 가능
 */

import { SITE_CONFIG } from "@/src/constants/site";
import Image from "next/image";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  index: number;
}

function ServiceCard({ name, description, price, index }: ServiceCardProps) {
  return (
    <article
      className="service-card bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* 서비스 이미지 */}
      <div className="relative w-full h-32 md:h-48 bg-gradient-to-br from-[#1e3a8a] to-[#172554]">
        <Image
          src={`/service-${index + 1}.jpg`}
          alt={`${name} 서비스 이미지`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3 md:p-5">
        <h3 className="text-base md:text-xl font-bold mb-2 text-gray-900" itemProp="name">
          {name}
        </h3>

        <p className="text-xs md:text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2" itemProp="description">
          {description}
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-[#1e3a8a] font-bold text-sm md:text-base" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">{price}</span>
            <meta itemProp="priceCurrency" content="KRW" />
          </p>

          <a
            href={`/services#service-${index}`}
            className="text-xs md:text-sm text-gray-500 hover:text-[#1e3a8a] font-medium transition-colors"
            aria-label={`${name} 상세보기`}
          >
            자세히 보기 →
          </a>
        </div>
      </div>
    </article>
  );
}

export function ServiceSummary() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-16 px-4 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="services-heading" className="text-3xl font-bold mb-4">
            주요 서비스
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {SITE_CONFIG.business.areaServed}에서{" "}
            {SITE_CONFIG.contact.businessHours} 긴급 출동 가능합니다.
          </p>
        </header>

        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          role="list"
        >
          {SITE_CONFIG.services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              price={service.price}
              index={index}
            />
          ))}
        </div>

        {/* CTA 섹션 */}
        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            모든 서비스 보기
          </a>
        </div>
      </div>
    </section>
  );
}
