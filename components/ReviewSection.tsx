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
    image: "/photo/리뷰/내시경.jpg",
    rating: 5,
    content: "배관 내시경으로 막힌 원인을 정확하게 찾아주셨어요.",
    author: "김*리",
  },
  {
    id: 2,
    image: "/photo/리뷰/내시경1.jpg",
    rating: 5,
    content: "배관 내시경 덕분에 문제를 정확히 파악할 수 있었습니다. 감사합니다!!!",
    author: "이*수",
  },
  {
    id: 3,
    image: "/photo/리뷰/막힘.jpg",
    rating: 5,
    content: "막힌 배관을 신속하게 뚫어주셨습니다. 빠르고 깔끔하게 해결해주셨어요!!!",
    author: "박*영",
  },
  {
    id: 4,
    image: "/photo/리뷰/내시경2.jpg",
    rating: 5,
    content: "배관 내시경으로 막힌 원인을 정확하게 찾아주셨어요.",
    author: "최*민",
  },
  {
    id: 5,
    image: "/photo/리뷰/막힘3.jpg",
    rating: 5,
    content: "완전히 막혀서 난감했는데 한 번에 해결해주셨습니다. 감사합니다!",
    author: "정*아",
  },
  {
    id: 6,
    image: "/photo/리뷰/배관.jpg",
    rating: 5,
    content: "배관 공사를 깔끔하게 처리해주셨어요. 고수님이십니다!",
    author: "강*호",
  },
  {
    id: 7,
    image: "/photo/리뷰/배관1.jpg",
    rating: 5,
    content: "노후된 배관 교체 작업을 완벽하게 해주셨습니다. 믿고 맡길 수 있어요!",
    author: "윤*정",
  },
  {
    id: 8,
    image: "/photo/리뷰/배관2.jpg",
    rating: 5,
    content: "배관 설비 점검부터 수리까지 꼼꼼하게 해주셨어요. 대만족!!!",
    author: "조*우",
  },
  {
    id: 9,
    image: "/photo/리뷰/배관막힘.jpg",
    rating: 5,
    content: "계속 배관이 막혀서 물이 안 빠졌는데 고압세척으로 완벽하게 해결해주셨어요!",
    author: "한*경",
  },
  {
    id: 10,
    image: "/photo/리뷰/변기막힘.jpg",
    rating: 5,
    content: "변기 막힘을 신속하게 해결해주셨습니다. 정말 전문적이고 친절하셨어요~!",
    author: "송*희",
  },
  {
    id: 11,
    image: "/photo/리뷰/세면대교체.jpg",
    rating: 5,
    content: "세면대 교체 작업이 깔끔하고 빨랐습니다. 가격도 합리적이에요!",
    author: "안*진",
  },
  {
    id: 12,
    image: "/photo/리뷰/세면대교체2.jpg",
    rating: 5,
    content: "세면대 수전 교체를 완벽하게 해주셨어요. 물 새는 문제도 해결되서 행복합니다~!",
    author: "서*현",
  },
  {
    id: 13,
    image: "/photo/리뷰/싱크대막힘.jpg",
    rating: 5,
    content: "싱크대 막힘 문제로 고생했는데 한 번에 시원하게 뚫어주셨습니다~ 감사합니다!",
    author: "장*우",
  },
  {
    id: 14,
    image: "/photo/리뷰/싱크대막힘2.jpg",
    rating: 5,
    content: "싱크대가 완전히 막혔는데 고압세척으로 완벽 해결! 감사합니다.",
    author: "임*미",
  },
  {
    id: 15,
    image: "/photo/리뷰/역류1.jpg",
    rating: 5,
    content: "하수구 역류로 큰일 날 뻔했는데 긴급 출동해서 해결해주셨어요!",
    author: "정*호",
  },
  {
    id: 16,
    image: "/photo/리뷰/역류2.jpg",
    rating: 5,
    content: "화장실 역류 문제를 완벽하게 처리해주셨습니다. 정말 감사드려요!",
    author: "최*영",
  },
  {
    id: 17,
    image: "/photo/리뷰/역류3.jpg",
    rating: 5,
    content: "하수구 역류 차단 공사까지 해주셨어요. 이제 안심입니다!",
    author: "김*수",
  },
  {
    id: 18,
    image: "/photo/리뷰/역류4.jpg",
    rating: 5,
    content: "역류 문제의 근본 원인까지 찾아서 해결해주셨습니다. 전문가십니다!",
    author: "박*민",
  },
  {
    id: 19,
    image: "/photo/리뷰/정확한진단.jpg",
    rating: 5,
    content: "정확한 진단으로 불필요한 작업 없이 딱 필요한 부분만! 합리적이에요~",
    author: "이*희",
  },
  {
    id: 20,
    image: "/photo/리뷰/진단.jpg",
    rating: 5,
    content: "정밀 진단으로 문제를 정확히 파악하고 해결해주셨어요. 믿을 수 있습니다!!!",
    author: "조*아",
  },
  {
    id: 21,
    image: "/photo/리뷰/천장누수.jpg",
    rating: 5,
    content: "천장 누수를 열화상 카메라로 근본적인 원인까지 찾아내서 완벽하게 수리해주셨습니다~ 감사합니다!",
    author: "강*석",
  },
];

export function ReviewSection() {
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef<number | null>(null);
  const [shuffledReviews, setShuffledReviews] = useState<Review[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // 배열 랜덤 셔플 함수 (Fisher-Yates 알고리즘)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 컴포넌트 마운트시 한 번만 랜덤 셔플
  useEffect(() => {
    setShuffledReviews(shuffleArray(reviews));
  }, []);

  // 무한 슬라이드를 위해 리뷰 배열을 3번 복제
  const extendedReviews = shuffledReviews.length > 0
    ? [...shuffledReviews, ...shuffledReviews, ...shuffledReviews]
    : [];

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

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // 모바일에서는 터치 끝나도 자동 슬라이드 계속
    if (isMobile) {
      setIsPaused(false);
    }
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
        onMouseEnter={() => !isMobile && setIsPaused(true)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
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
