/**
 * 서비스 키워드 슬라이더 컴포넌트
 * AEO/GEO/SEO 최적화: 주요 서비스 키워드를 전광판 형태로 표시
 */

"use client";

const serviceKeywords = [
  "변기막힘",
  "하수구막힘",
  "싱크대막힘",
  "고압세척",
  "누수",
  "누수탐지",
  "수전교체",
  "세면대수전",
  "싱크대수전",
  "변기교체",
  "세면대교체",
  "소변기막힘",
  "설비",
  "천장누수",
  "바닥누수",
  "변기부속교체",
];

export function ServiceKeywordSlider() {
  return (
    <section
      className="py-8 bg-white border-y border-gray-200 overflow-hidden"
      aria-label="제공 서비스 목록"
    >
      <div className="relative">
        {/* 슬라이더 컨테이너 */}
        <div className="flex animate-scroll-infinite">
          {/* 첫 번째 세트 */}
          <div className="flex gap-6 md:gap-8 whitespace-nowrap pr-6 md:pr-8">
            {serviceKeywords.map((keyword, index) => (
              <div
                key={`keyword-1-${index}`}
                className="inline-flex items-center gap-2"
              >
                <span className="text-[#1e3a8a] text-2xl md:text-3xl font-black">
                  #
                </span>
                <span
                  className="text-lg md:text-xl font-bold text-gray-800"
                  itemProp="serviceType"
                >
                  {keyword}
                </span>
              </div>
            ))}
          </div>

          {/* 두 번째 세트 (무한 스크롤용 중복) */}
          <div className="flex gap-6 md:gap-8 whitespace-nowrap pr-6 md:pr-8">
            {serviceKeywords.map((keyword, index) => (
              <div
                key={`keyword-2-${index}`}
                className="inline-flex items-center gap-2"
              >
                <span className="text-[#1e3a8a] text-2xl md:text-3xl font-black">
                  #
                </span>
                <span
                  className="text-lg md:text-xl font-bold text-gray-800"
                  itemProp="serviceType"
                >
                  {keyword}
                </span>
              </div>
            ))}
          </div>

          {/* 세 번째 세트 (매끄러운 연결을 위한 추가 중복) */}
          <div className="flex gap-6 md:gap-8 whitespace-nowrap pr-6 md:pr-8">
            {serviceKeywords.map((keyword, index) => (
              <div
                key={`keyword-3-${index}`}
                className="inline-flex items-center gap-2"
              >
                <span className="text-[#1e3a8a] text-2xl md:text-3xl font-black">
                  #
                </span>
                <span
                  className="text-lg md:text-xl font-bold text-gray-800"
                  itemProp="serviceType"
                >
                  {keyword}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 그라데이션 오버레이 (양 끝 페이드 효과) */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
      </div>

      {/* SEO를 위한 숨김 텍스트 (스크린리더 및 검색엔진용) */}
      <div className="sr-only" itemScope itemType="https://schema.org/Service">
        <h2>프렌즈배관 제공 서비스</h2>
        <p>
          서울 강동구 전문 배관 서비스: {serviceKeywords.join(", ")} 등 모든
          배관 문제를 24시간 신속하게 해결해드립니다.
        </p>
      </div>
    </section>
  );
}
