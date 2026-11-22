/**
 * Hero Section 컴포넌트
 * 디자인 스펙: 1st-pipe.com
 * 높이: 데스크톱 1000px, 태블릿 800px, 모바일 650px
 * 배경 이미지만 슬라이드, 텍스트는 고정
 */

"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { SITE_CONFIG } from "@/src/constants/site";

// 배경 이미지 URL
const backgroundImages = [
  "/main.jpg",
  "/main1.jpg",
  "/main2.jpg",
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="relative h-[650px] md:h-[800px] lg:h-[1000px] overflow-hidden"
      aria-label="메인 히어로"
    >
      {/* Background Images with Transition */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#172554] transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/70" />
          </div>
        ))}
      </div>

      {/* Fixed Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              하수구·변기·세면대막힘
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#fbbf24]">
              누수탐지까지 한번에 해결해드립니다!
            </p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 md:px-12 md:py-8 max-w-2xl mx-auto border-2 border-[#fbbf24]">
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-[#fbbf24] mb-3">
                미해결시 0원!
              </p>
              <p className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
                출장비 0원!
              </p>
            </div>

            <div className="pt-4 md:pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={`tel:${SITE_CONFIG.contact.phone}`}>
                <Button
                  variant="secondary"
                  className="text-lg md:text-xl px-8 py-4"
                >
                  📞 지금 바로 전화하기
                </Button>
              </a>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
                aria-current={index === currentSlide}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
