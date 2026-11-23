/**
 * 핵심 특징 컴포넌트
 * AEO/GEO 최적화: AI가 비즈니스 강점을 명확히 이해하고 요약 가능
 */

"use client";

import { useState } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "⏰",
    title: "24시간 긴급 출동",
    description:
      "연중무휴 24시간 긴급 출동 가능합니다. 새벽이나 휴일에도 빠르게 방문해드립니다.",
  },
  {
    icon: "🛠️",
    title: "전문 장비 보유",
    description:
      "최신 고압 세척기, 배관 카메라 등 전문 장비로 정확한 진단과 작업을 제공합니다.",
  },
  {
    icon: "✅",
    title: "3개월 무상 A/S",
    description:
      "모든 작업에 대해 3개월 무상 A/S를 제공하며, 작업 후에도 안심하실 수 있습니다.",
  },
  {
    icon: "💰",
    title: "투명한 가격",
    description:
      "현장 진단 후 정확한 견적을 먼저 안내하며, 고객 동의 없이 추가 비용이 발생하지 않습니다.",
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
}

function FeatureCard({ feature, index }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="feature-card bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#1e3a8a]"
      aria-labelledby={`feature-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div
          className={`text-4xl transition-transform duration-300 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
          role="img"
          aria-label={feature.title}
        >
          {feature.icon}
        </div>

        <div className="flex-1">
          <h3
            id={`feature-${index}`}
            className="text-xl font-bold mb-2 text-gray-900"
          >
            {feature.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </article>
  );
}

export function KeyFeatures() {
  return (
    <section
      aria-labelledby="features-heading"
      className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            프렌즈배관을 선택해야 하는 이유
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            고객 만족을 최우선으로 하는 전문 배관 서비스
          </p>
        </header>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 max-w-5xl mx-auto"
          role="list"
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* 추가 설명 */}
        <div className="mt-12 p-8 bg-gradient-to-r from-[#1e3a8a] to-[#172554] shadow-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center text-white">
            신속하고 정확한 배관 서비스
          </h3>
          <p className="text-white/90 text-center leading-relaxed text-lg">
            10년 이상의 경력을 가진 전문가들이 고객님의 배관 문제를 신속하게
            해결해드립니다. 싱크대 막힘, 하수구 역류, 변기 고장 등 모든 배관
            문제에 대응 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
