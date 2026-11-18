/**
 * Footer 컴포넌트
 * 시맨틱 HTML 적용
 */

import { SITE_CONFIG } from "@/src/constants/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#212121] text-white py-8 pb-24 md:pb-28" role="contentinfo">
      <div className="container-custom">
        {/* Copyright & Business Info */}
        <div className="text-center text-gray-400 text-sm">
          <p className="mb-2">
            상호: {SITE_CONFIG.name} | 사업자등록번호: {SITE_CONFIG.contact.businessNumber}
          </p>
          <p className="mb-2">
            문의전화: <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#fbbf24]">{SITE_CONFIG.contact.phone}</a> | 주소: {SITE_CONFIG.contact.address}
          </p>
          <p className="text-xs text-gray-500">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>

        {/* SEO/AEO/GEO 최적화: 검색엔진 전용 키워드 (화면에 미노출) */}
        <div className="sr-only" itemScope itemType="https://schema.org/Service">
          <h2>프렌즈배관 서비스 제공 지역</h2>
          <p itemProp="areaServed">
            서울 강동구, 인천, 강북구, 송파구 배관 서비스 전문
          </p>
          <div itemProp="serviceType">
            <h3>인천 지역 배관 서비스</h3>
            <p>
              인천변기막힘, 인천하수구막힘, 인천싱크대막힘, 인천고압세척,
              인천누수, 인천누수탐지, 인천수전교체, 인천세면대수전,
              인천싱크대수전, 인천변기교체, 인천세면대교체, 인천소변기막힘,
              인천설비, 인천천장누수, 인천바닥누수, 인천변기부속교체
            </p>
          </div>
          <div itemProp="serviceType">
            <h3>강북구 지역 배관 서비스</h3>
            <p>
              강북구변기막힘, 강북구하수구막힘, 강북구싱크대막힘, 강북구고압세척,
              강북구누수, 강북구누수탐지, 강북구수전교체, 강북구세면대수전,
              강북구싱크대수전, 강북구변기교체, 강북구세면대교체, 강북구소변기막힘,
              강북구설비, 강북구천장누수, 강북구바닥누수, 강북구변기부속교체
            </p>
          </div>
          <div itemProp="serviceType">
            <h3>송파구 지역 배관 서비스</h3>
            <p>
              송파구변기막힘, 송파구하수구막힘, 송파구싱크대막힘, 송파구고압세척,
              송파구누수, 송파구누수탐지, 송파구수전교체, 송파구세면대수전,
              송파구싱크대수전, 송파구변기교체, 송파구세면대교체, 송파구소변기막힘,
              송파구설비, 송파구천장누수, 송파구바닥누수, 송파구변기부속교체
            </p>
          </div>
          <p itemProp="description">
            프렌즈배관은 서울 강동구를 중심으로 인천, 강북구, 송파구 등
            수도권 전역에서 24시간 긴급 배관 서비스를 제공합니다.
            변기막힘, 하수구막힘, 싱크대막힘, 고압세척, 누수탐지,
            수전교체, 변기교체 등 모든 배관 문제를 신속하게 해결해드립니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
