/**
 * 시공 사례 섹션 컴포넌트
 * 실제 시공 사례를 갤러리 형태로 표시
 */

"use client";

import { useState } from "react";
import Image from "next/image";

interface CaseItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const cases: CaseItem[] = [
  {
    id: 1,
    title: "싱크대 배수구 막힘 해소",
    description: "강동구 ○○아파트 / 고압 세척으로 완벽 해결",
    image: "/case-1.jpg",
    category: "싱크대",
  },
  {
    id: 2,
    title: "화장실 하수구 역류 차단",
    description: "강동구 ○○빌라 / CCTV 진단 후 배관 교체",
    image: "/case-2.jpg",
    category: "하수구",
  },
  {
    id: 3,
    title: "변기 막힘 긴급 출동",
    description: "강동구 ○○주택 / 30분 내 현장 도착 해결",
    image: "/case-3.jpg",
    category: "변기",
  },
  {
    id: 4,
    title: "주방 배관 누수 수리",
    description: "강동구 ○○오피스텔 / 배관 교체 및 방수 처리",
    image: "/case-4.jpg",
    category: "누수",
  },
  {
    id: 5,
    title: "욕실 배수구 악취 제거",
    description: "강동구 ○○아파트 / 트랩 청소 및 소독",
    image: "/case-5.jpg",
    category: "악취",
  },
  {
    id: 6,
    title: "세면대 배관 교체",
    description: "강동구 ○○주상복합 / 노후 배관 전체 교체",
    image: "/case-6.jpg",
    category: "교체",
  },
];

export function CasesSection() {
  const [activeCase, setActiveCase] = useState<number | null>(null);

  const handleCaseClick = (id: number) => {
    setActiveCase(activeCase === id ? null : id);
  };

  return (
    <section
      id="cases"
      aria-labelledby="cases-heading"
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="cases-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            시공 사례
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            프렌즈배관의 실제 시공 사례를 확인해보세요
          </p>
        </header>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map((caseItem) => (
            <article
              key={caseItem.id}
              className="relative overflow-hidden group cursor-pointer aspect-square"
              onClick={() => handleCaseClick(caseItem.id)}
            >
              {/* 이미지 */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#1e3a8a] to-[#172554]">
                <Image
                  src={caseItem.image}
                  alt={caseItem.title}
                  fill
                  className="object-cover"
                />

                {/* 오버레이 (호버 또는 클릭) */}
                <div className={`absolute inset-0 transition-all duration-300 ${
                  activeCase === caseItem.id
                    ? "bg-black/60"
                    : "bg-black/0 md:group-hover:bg-black/60"
                }`}></div>

                {/* 카테고리 뱃지 */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#fbbf24] text-[#191919] px-3 py-1 text-sm font-bold">
                    {caseItem.category}
                  </span>
                </div>

                {/* 텍스트 오버레이 (호버 또는 클릭) */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 transition-opacity duration-300 z-10 ${
                  activeCase === caseItem.id
                    ? "opacity-100"
                    : "opacity-0 md:group-hover:opacity-100"
                }`}>
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold mb-2 md:mb-3 text-white text-center">
                    {caseItem.title}
                  </h3>
                  <p className="text-xs md:text-sm lg:text-base text-white/90 text-center">
                    {caseItem.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 더보기 안내 */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            더 많은 시공 사례가 궁금하신가요?
          </p>
          <a
            href="tel:010-3021-3369"
            className="inline-block bg-[#1e3a8a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1e40af] transition-colors"
          >
            상담 문의하기
          </a>
        </div>
      </div>
    </section>
  );
}
