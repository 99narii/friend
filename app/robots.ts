/**
 * robots.txt 설정
 * 검색엔진 크롤러 제어
 */

import { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/src/constants/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = SITE_CONFIG.url;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
          "/private/",
        ],
      },
      {
        userAgent: "GPTBot", // ChatGPT 크롤러
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User", // ChatGPT 사용자 에이전트
        allow: "/",
      },
      {
        userAgent: "Google-Extended", // Google Bard/Gemini
        allow: "/",
      },
      {
        userAgent: "CCBot", // Common Crawl (AI 학습용)
        allow: "/",
      },
      {
        userAgent: "PerplexityBot", // Perplexity AI
        allow: "/",
      },
      {
        userAgent: "Claude-Web", // Anthropic Claude
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Yeti", // 네이버 검색봇
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
