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
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // 컴포넌트 마운트 후 애니메이션 트리거
    setAnimationTriggered(true);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // 텍스트를 단어별로 분리하는 함수
  const renderAnimatedText = (text: string, baseDelay: number = 0) => {
    const words = text.split(" ");
    return (
      <>
        {words.map((word, index) => (
          <span
            key={index}
            className="inline-block"
            style={{
              animation: animationTriggered ? "wordBounce 0.6s ease-out forwards" : "none",
              animationDelay: `${baseDelay + index * 0.1}s`,
              opacity: 0,
            }}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </span>
        ))}
      </>
    );
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
          <div className="space-y-3 md:space-y-4 lg:space-y-6 flex flex-col items-center">
            {/* 경고 아이콘 - 라인 스타일 */}
            <div
              className="relative mb-2 md:mb-2 lg:mb-3"
              style={{
                animation: animationTriggered ? "iconBounce 0.8s ease-out forwards" : "none",
                opacity: 0,
              }}
            >
              <svg className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 삼각형 테두리 */}
                <path d="M50 10 L10 85 L90 85 Z" stroke="#FFD700" strokeWidth="3" fill="none"/>
                {/* 느낌표 */}
                <line x1="50" y1="35" x2="50" y2="55" stroke="#FFD700" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="50" cy="65" r="2.5" fill="#FFD700"/>
              </svg>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight" style={{ color: '#FFD700', fontWeight: '700' }}>
              {renderAnimatedText("365일 24시, 꽉 막힌 속까지 시원하게!", 0.3)}
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal leading-relaxed" style={{ color: '#FFD700' }}>
              {renderAnimatedText("전 지역 30분 내 긴급 출동 서비스", 1.0)}
            </p>
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

      {/* 단어별 바운스 애니메이션 */}
      <style jsx>{`
        @keyframes iconBounce {
          0% {
            opacity: 0;
            transform: scale(0.3) translateY(50px);
          }
          50% {
            transform: scale(1.1) translateY(-10px);
          }
          70% {
            transform: scale(0.95) translateY(5px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes wordBounce {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          50% {
            transform: translateY(-10px);
          }
          70% {
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
