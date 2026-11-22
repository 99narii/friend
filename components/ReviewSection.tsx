/**
 * 리뷰 섹션 컴포넌트
 * 고객 리뷰를 슬라이드 애니메이션으로 표시 (자동 흐름 + 마우스 드래그 가능)
 */

"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface Review {
  id: number;
  image: string;
  rating: number;
  content: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959.jpg",
    rating: 5,
    content: "변기 막힘 문제를 신속하게 해결해주셨습니다. 친절하고 전문적이었어요!",
    author: "김*리",
  },
  {
    id: 2,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_01.jpg",
    rating: 5,
    content: "하수구 역류 문제로 고민했는데 완벽하게 해결해주셨습니다. 감사합니다!",
    author: "이*수",
  },
  {
    id: 3,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_02.jpg",
    rating: 5,
    content: "세면대 수전 교체 작업 깔끔하게 잘 해주셨어요. 추천합니다!",
    author: "박*영",
  },
  {
    id: 4,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_03.jpg",
    rating: 5,
    content: "누수 탐지부터 수리까지 한 번에 해결! 정말 만족스러웠습니다.",
    author: "최*민",
  },
  {
    id: 5,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_04.jpg",
    rating: 5,
    content: "24시간 긴급 출동 정말 신속했습니다. 믿고 맡길 수 있어요!",
    author: "정*아",
  },
  {
    id: 6,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_05.jpg",
    rating: 5,
    content: "싱크대 막힘 문제를 고압세척으로 완벽하게 해결해주셨습니다.",
    author: "강*호",
  },
  {
    id: 7,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_06.jpg",
    rating: 5,
    content: "변기 교체 작업 정말 깔끔하게 해주셨어요. 가격도 합리적!",
    author: "윤*정",
  },
  {
    id: 8,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_07.jpg",
    rating: 5,
    content: "배관 내시경 검사로 정확한 진단 받았습니다. 전문가십니다!",
    author: "조*우",
  },
  {
    id: 9,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_08.jpg",
    rating: 5,
    content: "천장 누수 문제를 열화상 카메라로 정확하게 찾아주셨어요.",
    author: "한*경",
  },
  {
    id: 10,
    image: "/photo/리뷰/KakaoTalk_20261117_172331959_09.jpg",
    rating: 5,
    content: "친절한 상담과 빠른 작업에 감동했습니다. 적극 추천합니다!",
    author: "송*희",
  },
];

export function ReviewSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);

  // 무한 슬라이드를 위해 리뷰 배열을 3번 복제
  const extendedReviews = [...reviews, ...reviews, ...reviews];

  // 자동 스크롤 애니메이션
  useEffect(() => {
    const animate = () => {
      if (!containerRef.current || isPaused || isDragging) return;

      containerRef.current.scrollLeft += 2;

      // 무한 스크롤: 1/3 지점을 넘으면 처음으로
      const maxScroll = containerRef.current.scrollWidth / 3;
      if (containerRef.current.scrollLeft >= maxScroll) {
        containerRef.current.scrollLeft = 0;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    if (!isPaused && !isDragging) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsPaused(false);
  };

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-16 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h2 id="reviews-heading" className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            고객 리뷰
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            프렌즈배관을 이용하신 고객님들의 생생한 후기입니다
          </p>
        </header>
      </div>

      <div
        ref={containerRef}
        className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setIsPaused(true)}
        style={{ scrollBehavior: isDragging ? "auto" : "smooth" }}
      >
        <div className="flex gap-6">
          {extendedReviews.map((review, index) => (
            <article
              key={`${review.id}-${index}`}
              className="flex-shrink-0 w-80 md:w-96 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden select-none"
            >
              {/* 리뷰 이미지 */}
              <div className="relative w-full h-64 md:h-80 bg-gray-100">
                <Image
                  src={review.image}
                  alt={`${review.author} 고객님 리뷰`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 리뷰 내용 */}
              <div className="p-6">
                {/* 별점 */}
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-[#fbbf24] text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* 리뷰 텍스트 */}
                <p className="text-gray-700 text-sm md:text-base mb-4 leading-relaxed line-clamp-3">
                  {review.content}
                </p>

                {/* 작성자 */}
                <p className="text-gray-900 font-bold text-sm md:text-base">
                  {review.author} 고객님
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
