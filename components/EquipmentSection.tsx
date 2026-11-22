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
    image: "/photo/장비/고압세척기.png",
  },
  {
    id: 2,
    name: "배관내시경",
    description: "CCTV 배관 내시경으로 정확한 상태 진단이 가능합니다",
    image: "/photo/장비/배관내시경.png",
  },
  {
    id: 3,
    name: "열화상카메라",
    description: "열화상 카메라로 숨은 누수 위치를 정확하게 찾아냅니다",
    image: "/photo/장비/열화상카메라.png",
  },
  {
    id: 4,
    name: "천장누수 열화상탐지",
    description: "천장 속 누수도 열화상으로 정밀 탐지합니다",
    image: "/photo/장비/천장누수 열화상탐지.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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
              <div className="relative w-full h-80 md:h-96 bg-white">
                {/* 상단 뱃지 */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black text-white px-4 py-2 text-sm md:text-base font-bold shadow-lg">
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
              <div className="p-5 md:p-6">
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
