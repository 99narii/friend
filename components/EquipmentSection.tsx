/**
 * 최신 전문장비 섹션 컴포넌트
 * 전문 장비를 아래에서 위로 순차적으로 나타나는 애니메이션과 함께 표시
 */

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface EquipmentItem {
  id: number;
  name: string;
  description: string;
  image: string;
}

const equipments: EquipmentItem[] = [
  {
    id: 1,
    name: "고압세척기",
    description: "강력한 고압세척으로 막힌 배관을 완벽하게 개통합니다",
    image: "/photo/고압세척기.png",
  },
  {
    id: 2,
    name: "배관내시경",
    description: "배관 내시경으로 정확한 상태 진단이 가능합니다",
    image: "/photo/장비/배관내시경.png",
  },
  {
    id: 3,
    name: "관로탐지기",
    description: "관로탐지기로 배관 위치와 상태를 정확하게 확인합니다",
    image: "/photo/관로탐지기.png",
  },
  {
    id: 4,
    name: "배관청소",
    description: "전문 장비로 배관 내부를 깨끗하게 청소합니다",
    image: "/photo/배관청소기.png",
  },
  {
    id: 5,
    name: "청음식누수탐지기",
    description: "청음식 탐지기로 작은 누수 소리도 정확하게 감지합니다",
    image: "/photo/장비/청음식누수탐지기.png",
  },
  {
    id: 6,
    name: "막힌하수구",
    description: "다양한 전문 장비로 하수구 막힘 문제를 해결합니다",
    image: "/photo/장비/막힌하수구.png",
  },
];

export function EquipmentSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 보이는 아이템 초기화
            setVisibleItems([]);
            // 순차적으로 아이템 표시
            equipments.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
            });
          } else {
            // 화면 밖으로 나가면 초기화
            setVisibleItems([]);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="equipment"
      aria-labelledby="equipment-heading"
      className="py-16 px-4 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="equipment-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            최신 전문장비
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            첨단 장비로 정확한 진단과 완벽한 시공을 제공합니다
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {equipments.map((equipment, index) => (
            <article
              key={equipment.id}
              className={`bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-700 transform ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
            >
              {/* 이미지 */}
              <div className="relative w-full h-40 md:h-72 lg:h-80 bg-white">
                {/* 상단 뱃지 */}
                <div className="absolute top-0 left-0 z-10">
                  <span className="bg-black text-white px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-bold shadow-lg">
                    {equipment.name}
                  </span>
                </div>

                <Image
                  src={equipment.image}
                  alt={equipment.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* 설명 */}
              <div className="p-3 md:p-5">
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  {equipment.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
