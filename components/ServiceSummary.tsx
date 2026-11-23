/**
 * 서비스 요약 컴포넌트
 * AEO/GEO 최적화: AI가 서비스 정보를 명확히 이해하고 답변에 인용 가능
 */

"use client";

import { SITE_CONFIG } from "@/src/constants/site";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ServiceCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  index: number;
}

function ServiceCard({ name, description, price, image, index }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // 화면 밖으로 나가면 초기화
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`service-card bg-white shadow-md hover:shadow-xl transition-all duration-700 overflow-hidden transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* 서비스 이미지 */}
      <div className="relative w-full h-32 md:h-64 lg:h-72 bg-gradient-to-br from-[#1e3a8a] to-[#172554]">
        <Image
          src={image}
          alt={`${name} 서비스 이미지`}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3 md:p-6 lg:p-7">
        <h3 className="text-sm md:text-2xl font-bold mb-1 md:mb-3 text-gray-900" itemProp="name">
          {name}
        </h3>

        <p className="text-xs md:text-base text-gray-600 mb-2 md:mb-4 leading-relaxed line-clamp-2" itemProp="description">
          {description}
        </p>

        <div className="flex flex-col gap-1 md:gap-3">
          <p className="text-[#1e3a8a] font-bold text-sm md:text-lg" itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price">{price}</span>
            <meta itemProp="priceCurrency" content="KRW" />
          </p>
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
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
          role="list"
        >
          {SITE_CONFIG.services.map((service, index) => (
            <ServiceCard
              key={index}
              name={service.name}
              description={service.description}
              price={service.price}
              image={service.image}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
