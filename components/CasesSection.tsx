/**
 * 시공 사례 섹션 컴포넌트
 * 실제 시공 사례를 갤러리 형태로 표시
 */

"use client";

import { useState, useEffect } from "react";
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
    title: "고압세척 작업",
    description: "막힌 배관 고압세척으로 완벽 해결",
    image: "/photo/고압세척기.png",
    category: "고압세척",
  },
  {
    id: 2,
    title: "누수 수리 비포/애프터",
    description: "누수 탐지 및 완벽 수리 완료",
    image: "/photo/누수비포 에프터.png",
    category: "누수",
  },
  {
    id: 3,
    title: "하수구 막힘 해결",
    description: "막힌 하수구 신속 개통 작업",
    image: "/photo/막힌하수구뚫는거.png",
    category: "하수구",
  },
  {
    id: 4,
    title: "바닥 누수 수리",
    description: "바닥 누수 탐지 및 보수 완료",
    image: "/photo/바닥누수 비포 에프터.png",
    category: "누수",
  },
  {
    id: 5,
    title: "배관 내시경 검사",
    description: "CCTV 배관 내시경으로 정밀 진단",
    image: "/photo/배관내시경.png",
    category: "진단",
  },
  {
    id: 6,
    title: "변기 교체 작업",
    description: "노후 변기 신품 교체 완료",
    image: "/photo/변기교체.png",
    category: "교체",
  },
  {
    id: 7,
    title: "변기 막힘 내시경 검사",
    description: "내시경으로 변기 막힘 원인 파악",
    image: "/photo/변기막힘 내시경.png",
    category: "진단",
  },
  {
    id: 8,
    title: "변기 막힘 해소",
    description: "변기 막힘 긴급 출동 해결",
    image: "/photo/변기막힘.png",
    category: "변기",
  },
  {
    id: 9,
    title: "욕실 수전 교체",
    description: "세면대 욕실 수전 교체 작업",
    image: "/photo/세면대 욕실수전 비포 에프터.png",
    category: "수전",
  },
  {
    id: 10,
    title: "세면대 내시경 검사",
    description: "세면대 배관 내부 정밀 검사",
    image: "/photo/세면대내시경.png",
    category: "진단",
  },
  {
    id: 11,
    title: "세면대 막힘 해결",
    description: "세면대 배수구 막힘 신속 처리",
    image: "/photo/세면대막힘뚫음.png",
    category: "세면대",
  },
  {
    id: 12,
    title: "세면대 수전 교체",
    description: "세면대 수전 노후 교체 완료",
    image: "/photo/세면대수전교체.png",
    category: "수전",
  },
  {
    id: 13,
    title: "싱크대 배관 검사",
    description: "싱크대 막힘 원인 배관 검사",
    image: "/photo/싱크대막힘 배관검사.png",
    category: "진단",
  },
  {
    id: 14,
    title: "싱크대 수전 교체",
    description: "싱크대 수전 교체 및 배관 점검",
    image: "/photo/싱크대수전교체.png",
    category: "수전",
  },
  {
    id: 15,
    title: "열화상 카메라 누수 탐지",
    description: "열화상 카메라로 정확한 누수 위치 파악",
    image: "/photo/열화상카메라.png",
    category: "탐지",
  },
  {
    id: 16,
    title: "현장 작업 사진",
    description: "전문 장비를 활용한 배관 작업",
    image: "/photo/작업사진.png",
    category: "작업",
  },
  {
    id: 17,
    title: "천장 누수 열화상 탐지",
    description: "천장 누수 열화상 카메라 정밀 탐지",
    image: "/photo/천장누수 열화상탐지.png",
    category: "탐지",
  },
  {
    id: 18,
    title: "청음식 누수 탐지",
    description: "청음식 누수탐지기로 정확한 위치 확인",
    image: "/photo/청음식누수탐지기.png",
    category: "탐지",
  },
  {
    id: 19,
    title: "하수구 역류 시공",
    description: "하수구 역류 차단 시공 완료",
    image: "/photo/하수구역류 시공사진.png",
    category: "하수구",
  },
];

export function CasesSection() {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);

  const handleCaseClick = (caseItem: CaseItem) => {
    setSelectedCase(caseItem);
  };

  const closeModal = () => {
    setSelectedCase(null);
  };

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedCase) {
      document.addEventListener("keydown", handleEscape);
      // 모달 열릴 때 body 스크롤 방지
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedCase]);

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
              onClick={() => handleCaseClick(caseItem)}
              onMouseEnter={() => setActiveCase(caseItem.id)}
              onMouseLeave={() => setActiveCase(null)}
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

      {/* 모달 팝업 */}
      {selectedCase && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] bg-white overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X 버튼 */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
              aria-label="닫기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* 이미지 */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-white">
              <Image
                src={selectedCase.image}
                alt={selectedCase.title}
                fill
                className="object-contain"
              />
            </div>

            {/* 텍스트 하단 */}
            <div className="p-6 bg-white">
              <div className="mb-3">
                <span className="bg-[#fbbf24] text-[#191919] px-3 py-1 text-sm font-bold">
                  {selectedCase.category}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">
                {selectedCase.title}
              </h3>
              <p className="text-gray-600 text-base">
                {selectedCase.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
