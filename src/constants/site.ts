/**
 * SEO/AEO/GEO 최적화를 위한 사이트 메타데이터 상수
 * 발주처 정보로 쉽게 수정 가능하도록 중앙 관리
 */

export const SITE_CONFIG = {
  // 기본 정보
  name: "프렌즈배관",
  title: "프렌즈배관 | 싱크대·하수구·변기 전문 배관 서비스",
  description: "24시간 긴급 출동 가능한 배관 전문 서비스. 싱크대 막힘, 하수구 역류, 변기 수리 등 모든 배관 문제를 신속하게 해결해드립니다.",
  keywords: [
    "프렌즈배관",
    "배관",
    "배관 서비스",
    "싱크대 막힘",
    "하수구 청소",
    "변기 수리",
    "화장실 배관",
    "주방 배관",
    "배수관 청소",
    "긴급 배관 출동",
    "24시간 배관 서비스",
    "강동구 배관",
    // 인천 지역
    "인천변기막힘",
    "인천하수구막힘",
    "인천싱크대막힘",
    "인천고압세척",
    "인천누수",
    "인천누수탐지",
    "인천수전교체",
    "인천세면대수전",
    "인천싱크대수전",
    "인천변기교체",
    "인천세면대교체",
    "인천소변기막힘",
    "인천설비",
    "인천천장누수",
    "인천바닥누수",
    "인천변기부속교체",
    // 강북구 지역
    "강북구변기막힘",
    "강북구하수구막힘",
    "강북구싱크대막힘",
    "강북구고압세척",
    "강북구누수",
    "강북구누수탐지",
    "강북구수전교체",
    "강북구세면대수전",
    "강북구싱크대수전",
    "강북구변기교체",
    "강북구세면대교체",
    "강북구소변기막힘",
    "강북구설비",
    "강북구천장누수",
    "강북구바닥누수",
    "강북구변기부속교체",
    // 송파구 지역
    "송파구변기막힘",
    "송파구하수구막힘",
    "송파구싱크대막힘",
    "송파구고압세척",
    "송파구누수",
    "송파구누수탐지",
    "송파구수전교체",
    "송파구세면대수전",
    "송파구싱크대수전",
    "송파구변기교체",
    "송파구세면대교체",
    "송파구소변기막힘",
    "송파구설비",
    "송파구천장누수",
    "송파구바닥누수",
    "송파구변기부속교체",
  ],

  // URL 정보
  url: "https://friendspipe.com",
  domain: "friendspipe.com",

  // 연락처 정보
  contact: {
    phone: "010-3021-3369",
    email: "contact@friendspipe.com",
    address: "서울 강동구 양재대로89길 81",
    businessHours: "24시간 연중무휴",
    businessNumber: "288-21-02020", // 사업자등록번호
  },

  // 소셜 미디어
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    blog: "",
  },

  // 비즈니스 정보
  business: {
    type: "LocalBusiness",
    priceRange: "₩₩",
    areaServed: "서울/경기/인천 수도권",
    founder: "프렌즈배관",
    foundingDate: "2020-01-01",
    numberOfEmployees: "1-10",
  },

  // Open Graph 이미지
  ogImage: {
    url: "/logo.png",
    width: 1200,
    height: 630,
    alt: "프렌즈배관 - 24시간 긴급 배관 서비스",
  },

  // 로고
  logo: {
    url: "/logo.png",
    width: 512,
    height: 512,
  },

  // 서비스 목록 (AEO/GEO 최적화용)
  services: [
    {
      name: "싱크대 배관 청소",
      description: "싱크대 막힘, 악취 제거, 배수관 청소 전문 서비스",
      price: "변동",
      image: "/photo/싱크대막힘 배관검사.png",
    },
    {
      name: "하수구 역류 해결",
      description: "하수구 역류, 악취, 막힘 문제 신속 해결",
      price: "변동",
      image: "/photo/하수구역류 시공사진.png",
    },
    {
      name: "변기 수리 및 교체",
      description: "변기 막힘, 물 새는 문제, 변기 교체 서비스",
      price: "변동",
      image: "/photo/변기교체.png",
    },
    {
      name: "화장실 배관 공사",
      description: "화장실 전체 배관 점검 및 교체 공사",
      price: "변동",
      image: "/photo/변기막힘 내시경.png",
    },
    {
      name: "세면대 수전 교체",
      description: "세면대 수전 노후 교체 및 누수 수리",
      price: "변동",
      image: "/photo/세면대수전교체.png",
    },
    {
      name: "천장 누수 탐지",
      description: "열화상 카메라로 정확한 누수 위치 탐지",
      price: "변동",
      image: "/photo/천장누수 열화상탐지.png",
    },
    {
      name: "싱크대 수전 교체",
      description: "싱크대 수전 교체 및 연결 배관 점검",
      price: "변동",
      image: "/photo/싱크대수전교체.png",
    },
  ],

  // FAQ (AEO/GEO 최적화용)
  faqs: [
    {
      question: "긴급 출동이 가능한가요?",
      answer: "네, 24시간 연중무휴로 긴급 출동이 가능합니다. 전화 주시면 최대한 빠르게 방문해드립니다.",
    },
    {
      question: "서비스 비용은 얼마인가요?",
      answer: "증상과 작업 범위에 따라 다르지만, 기본 점검은 무료이며 싱크대 청소는 5만원부터 시작합니다. 정확한 견적은 현장 확인 후 안내드립니다.",
    },
    {
      question: "어떤 지역까지 서비스가 가능한가요?",
      answer: "서울특별시 전 지역에 서비스를 제공하고 있으며, 인천과 인근 경기도 지역도 출동 가능합니다.",
    },
    {
      question: "예약 없이 바로 방문 가능한가요?",
      answer: "긴급한 경우 예약 없이도 출동 가능하지만, 사전 예약 시 더욱 빠른 서비스를 받으실 수 있습니다.",
    },
    // {
    //   question: "A/S 보증 기간이 있나요?",
    //   answer: "모든 작업에 대해 3개월 무상 A/S를 제공하며, 부품 교체 시에는 제조사 보증이 적용됩니다.",
    // },
  ],
} as const;

// 메타데이터 생성 헬퍼
export const generateMetadata = (page?: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}) => {
  const title = page?.title
    ? `${page.title} | ${SITE_CONFIG.name}`
    : SITE_CONFIG.title;

  const description = page?.description || SITE_CONFIG.description;
  const url = page?.path
    ? `${SITE_CONFIG.url}${page.path}`
    : SITE_CONFIG.url;
  const image = page?.image || SITE_CONFIG.ogImage.url;

  return {
    title,
    description,
    keywords: [...SITE_CONFIG.keywords],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,

    // Open Graph
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url,
      title,
      description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: SITE_CONFIG.ogImage.width,
          height: SITE_CONFIG.ogImage.height,
          alt: SITE_CONFIG.ogImage.alt,
        },
      ],
    },

    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: `@${SITE_CONFIG.name}`,
    },

    // 추가 메타 태그
    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },

    // 검증 태그 (발주처에서 추가)
    verification: {
      google: "", // Google Search Console 인증 코드
      naver: "", // 네이버 웹마스터 인증 코드
    },
  };
};
