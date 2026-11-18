/**
 * SEO/AEO/GEO 유틸리티 함수
 * 메타데이터 생성 및 구조화 데이터 헬퍼
 */

import { SITE_CONFIG } from "@/src/constants/site";

/**
 * 페이지 제목 생성
 * @param title 페이지 제목
 * @returns 최적화된 전체 제목
 */
export function generatePageTitle(title?: string): string {
  if (!title) {
    return SITE_CONFIG.title;
  }
  return `${title} | ${SITE_CONFIG.name}`;
}

/**
 * Breadcrumb JSON-LD 생성
 * @param items 경로 항목 배열
 * @returns JSON-LD 객체
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}

/**
 * Article JSON-LD 생성
 * @param article 아티클 정보
 * @returns JSON-LD 객체
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  publishedAt: string;
  modifiedAt?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image
      ? `${SITE_CONFIG.url}${article.image}`
      : `${SITE_CONFIG.url}${SITE_CONFIG.ogImage.url}`,
    datePublished: article.publishedAt,
    dateModified: article.modifiedAt || article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author || SITE_CONFIG.business.founder,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${SITE_CONFIG.logo.url}`,
      },
    },
  };
}

/**
 * 구조화된 콘텐츠 생성 (AI 친화적)
 * @param content 콘텐츠 블록 배열
 * @returns HTML 문자열
 */
export function generateStructuredContent(
  content: Array<{
    type: "heading" | "paragraph" | "list" | "quote";
    text: string;
    level?: number;
    items?: string[];
  }>
): string {
  return content
    .map((block) => {
      switch (block.type) {
        case "heading":
          const level = block.level || 2;
          return `<h${level}>${block.text}</h${level}>`;

        case "paragraph":
          return `<p>${block.text}</p>`;

        case "list":
          const listItems = block.items?.map((item) => `<li>${item}</li>`).join("");
          return `<ul>${listItems}</ul>`;

        case "quote":
          return `<blockquote>${block.text}</blockquote>`;

        default:
          return "";
      }
    })
    .join("\n");
}

/**
 * 키워드 최적화 (자연스러운 텍스트 생성)
 * @param mainKeyword 주요 키워드
 * @param context 문맥
 * @returns 최적화된 텍스트
 */
export function optimizeTextForSEO(
  mainKeyword: string,
  context: "title" | "description" | "heading"
): string {
  const templates = {
    title: [
      `${mainKeyword} 전문 서비스 | ${SITE_CONFIG.name}`,
      `${mainKeyword} - ${SITE_CONFIG.name}`,
      `${SITE_CONFIG.name} | ${mainKeyword}`,
    ],
    description: [
      `${mainKeyword}는 ${SITE_CONFIG.name}에 맡겨주세요. 24시간 긴급 출동 가능하며, ${SITE_CONFIG.business.areaServed}에서 서비스를 제공합니다.`,
      `전문적인 ${mainKeyword} 서비스를 찾으신다면 ${SITE_CONFIG.name}입니다. 투명한 가격과 3개월 무상 A/S를 제공합니다.`,
    ],
    heading: [
      `${mainKeyword} 전문가`,
      `믿을 수 있는 ${mainKeyword}`,
      `${mainKeyword} 솔루션`,
    ],
  };

  const options = templates[context];
  return options[Math.floor(Math.random() * options.length)];
}

/**
 * 소셜 공유 메타데이터 생성
 * @param page 페이지 정보
 * @returns 메타데이터 객체
 */
export function generateSocialMetadata(page: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `${SITE_CONFIG.url}${page.path}`;
  const image = page.image || SITE_CONFIG.ogImage.url;

  return {
    // Open Graph
    "og:url": url,
    "og:type": "website",
    "og:title": page.title,
    "og:description": page.description,
    "og:image": `${SITE_CONFIG.url}${image}`,
    "og:image:width": SITE_CONFIG.ogImage.width.toString(),
    "og:image:height": SITE_CONFIG.ogImage.height.toString(),
    "og:locale": "ko_KR",
    "og:site_name": SITE_CONFIG.name,

    // Twitter Card
    "twitter:card": "summary_large_image",
    "twitter:title": page.title,
    "twitter:description": page.description,
    "twitter:image": `${SITE_CONFIG.url}${image}`,
    "twitter:site": `@${SITE_CONFIG.name}`,
  };
}

/**
 * Canonical URL 생성
 * @param path 현재 경로
 * @returns Canonical URL
 */
export function generateCanonicalUrl(path: string): string {
  // 쿼리 파라미터 제거
  const cleanPath = path.split("?")[0];
  // 맨 뒤 슬래시 제거
  const normalizedPath = cleanPath.replace(/\/$/, "");
  return `${SITE_CONFIG.url}${normalizedPath}`;
}

/**
 * AI 검색엔진 친화적 요약 생성
 * @param content 콘텐츠
 * @param maxLength 최대 길이
 * @returns 요약문
 */
export function generateAISummary(content: string, maxLength = 160): string {
  // HTML 태그 제거
  const plainText = content.replace(/<[^>]*>/g, "");

  // 불필요한 공백 제거
  const cleaned = plainText.replace(/\s+/g, " ").trim();

  // 최대 길이로 자르기
  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  // 마지막 완전한 단어에서 자르기
  const truncated = cleaned.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");

  return lastSpace > 0
    ? `${truncated.substring(0, lastSpace)}...`
    : `${truncated}...`;
}
