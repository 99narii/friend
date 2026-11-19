/**
 * 연락/문의 CTA 컴포넌트
 * AEO/GEO 최적화: AI가 연락 방법을 명확히 추출 가능
 */

import { SITE_CONFIG } from "@/src/constants/site";

export function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="py-16 px-4 bg-gradient-to-r from-[#1e3a8a] to-[#172554] text-white"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold mb-4">
          긴급 출동이 필요하신가요?
        </h2>

        <p className="text-xl md:text-2xl mb-8 opacity-90">
          빠르게 상담 도와드리겠습니다.
        </p>

        {/* 전화 연락 */}
        <div className="mb-8">
          <a
            href={`tel:${SITE_CONFIG.contact.phone}`}
            className="inline-block bg-white text-[#1e3a8a] px-8 py-4 rounded-lg text-2xl md:text-3xl font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            aria-label={`${SITE_CONFIG.name}에 전화하기`}
          >
            📞 {SITE_CONFIG.contact.phone}
          </a>
          <p className="mt-4 text-base md:text-lg opacity-90">
            {SITE_CONFIG.contact.businessHours}
          </p>
        </div>

        {/* 서비스 지역 안내 */}
        <div className="mt-12 pt-8 border-t border-white/30">
          <h3 className="text-xl font-bold mb-3">서비스 지역</h3>
          <address className="not-italic text-lg" itemScope itemType="https://schema.org/PostalAddress">
            <p itemProp="addressRegion">서울/경기/인천 수도권</p>
            <p itemProp="streetAddress" className="text-sm opacity-80 mt-2">
              본사: {SITE_CONFIG.contact.address}
            </p>
          </address>
        </div>
      </div>
    </section>
  );
}
