# SEO/AEO/GEO 최적화 체크리스트

## 프로젝트 완료 상태

### ✅ 완료된 작업

#### 1. 메타데이터 시스템
- [x] `src/constants/site.ts` - 사이트 정보 중앙 관리
- [x] `app/layout.tsx` - Metadata API 적용
- [x] Open Graph 태그 설정
- [x] Twitter Card 설정
- [x] Canonical URL 설정
- [x] Robots 메타 태그 설정

#### 2. 구조화 데이터 (JSON-LD)
- [x] `components/JsonLdSchemas.tsx` - Schema.org 마크업
- [x] Organization Schema
- [x] WebSite Schema
- [x] Service Schema (4개 서비스)
- [x] FAQPage Schema
- [x] LocalBusiness Schema

#### 3. sitemap 및 robots
- [x] `app/sitemap.ts` - 동적 사이트맵 생성
- [x] `app/robots.ts` - 검색엔진 크롤러 제어
- [x] AI 크롤러 허용 (GPTBot, ChatGPT-User, Google-Extended, PerplexityBot 등)

#### 4. 시맨틱 HTML 가이드
- [x] `SEMANTIC_HTML_GUIDE.md` - 상세한 HTML 작성 규칙
- [x] 헤딩 계층 구조 가이드
- [x] ARIA 속성 사용법
- [x] 이미지 alt 작성 규칙
- [x] 폼/링크/버튼 접근성 가이드

#### 5. AEO/GEO 친화적 컴포넌트
- [x] `components/FAQSection.tsx` - Q&A 섹션
- [x] `components/ServiceSummary.tsx` - 서비스 요약
- [x] `components/KeyFeatures.tsx` - 핵심 특징
- [x] `components/ContactCTA.tsx` - 연락처 CTA
- [x] `lib/seo-utils.ts` - SEO 유틸리티 함수

---

## 발주처 커스터마이징 가이드

### 1단계: 기본 정보 수정
`src/constants/site.ts` 파일을 열어 아래 정보를 수정하세요:

```typescript
export const SITE_CONFIG = {
  // ✏️ 수정 필요
  name: "발주처명",
  title: "발주처명 | 주요 키워드",
  description: "발주처 설명 (160자 이내)",
  keywords: ["키워드1", "키워드2", ...],

  // ✏️ 수정 필요
  url: "https://your-domain.com",
  domain: "your-domain.com",

  // ✏️ 수정 필요
  contact: {
    phone: "02-1234-5678",
    email: "contact@your-domain.com",
    address: "실제 주소",
  },

  // ✏️ 수정 필요
  social: {
    facebook: "https://facebook.com/...",
    instagram: "https://instagram.com/...",
    // ...
  },

  // ✏️ 수정 필요
  business: {
    founder: "대표자명",
    foundingDate: "2020-01-01",
    areaServed: "서비스 지역",
  },

  // ✏️ 수정 필요
  services: [
    {
      name: "서비스명",
      description: "서비스 설명",
      price: "가격",
    },
    // ...
  ],

  // ✏️ 수정 필요
  faqs: [
    {
      question: "질문",
      answer: "답변",
    },
    // ...
  ],
};
```

### 2단계: 이미지 준비
다음 이미지를 `/public/images/` 폴더에 추가하세요:

- `og-image.jpg` (1200x630px) - Open Graph 이미지
- `logo.png` (512x512px) - 로고
- 서비스 이미지들

### 3단계: 검증 태그 추가
`src/constants/site.ts`의 `verification` 섹션에 추가:

```typescript
verification: {
  google: "Google Search Console 인증 코드",
  naver: "네이버 웹마스터 인증 코드",
}
```

---

## 배포 전 체크리스트

### 필수 확인 사항
- [ ] `src/constants/site.ts`의 모든 발주처 정보 수정 완료
- [ ] Open Graph 이미지 (`/public/images/og-image.jpg`) 준비
- [ ] 로고 이미지 (`/public/images/logo.png`) 준비
- [ ] Google Search Console 등록
- [ ] 네이버 웹마스터 도구 등록
- [ ] Google Analytics 설정 (선택)

### SEO 테스트
배포 후 아래 도구로 확인:

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - JSON-LD 스키마 검증

2. **Facebook Sharing Debugger**
   - https://developers.facebook.com/tools/debug/
   - Open Graph 태그 확인

3. **Twitter Card Validator**
   - https://cards-dev.twitter.com/validator
   - Twitter Card 확인

4. **구조화 데이터 테스트**
   - https://validator.schema.org/
   - Schema.org 마크업 검증

---

## AI 검색엔진(AEO/GEO) 최적화 팁

### 1. 명확한 Q&A 작성
AI는 질문-답변 형식을 선호합니다:

```markdown
✅ 좋은 예시:
Q: 긴급 출동이 가능한가요?
A: 네, 24시간 연중무휴로 긴급 출동이 가능합니다.

❌ 나쁜 예시:
출동 관련 안내
저희는 항상 준비되어 있습니다.
```

### 2. 핵심 정보를 앞에 배치
AI는 문서 초반부를 중요하게 여깁니다:

```tsx
// ✅ 좋은 구조
<article>
  <h1>프렌즈배관 | 24시간 긴급 배관 서비스</h1>
  <p>서울 전지역 24시간 출동 가능. 싱크대·하수구·변기 전문</p>
  <section>
    <h2>주요 서비스</h2>
    {/* 서비스 목록 */}
  </section>
  <section>
    <h2>자주 묻는 질문</h2>
    {/* FAQ */}
  </section>
</article>
```

### 3. 명확한 답변 제공
AI가 직접 인용할 수 있도록:

```tsx
// ✅ 명확한 답변
<p>
  싱크대 배관 청소 비용은 <strong>50,000원부터</strong> 시작하며,
  작업 범위에 따라 달라집니다.
</p>

// ❌ 모호한 답변
<p>가격은 상황에 따라 다릅니다.</p>
```

### 4. 리스트 활용
AI는 구조화된 정보를 선호:

```tsx
<h2>서비스 특징</h2>
<ul>
  <li>24시간 연중무휴 긴급 출동</li>
  <li>서울 전지역 서비스 제공</li>
  <li>3개월 무상 A/S 보증</li>
  <li>투명한 가격 정책</li>
</ul>
```

---

## 성능 최적화

### 정적 배포 최적화
현재 프로젝트는 Netlify 정적 배포용으로 설정되어 있습니다:

```typescript
// next.config.ts
output: 'export',
images: { unoptimized: true }
```

### 빌드 및 배포
```bash
# 빌드
npm run build

# 로컬 테스트
npm run start

# out 폴더를 Netlify에 배포
```

---

## 모니터링 및 분석

### 추천 도구
1. **Google Search Console**
   - 검색 성능 모니터링
   - 인덱싱 상태 확인
   - 구조화 데이터 오류 확인

2. **Google Analytics 4**
   - 트래픽 분석
   - 사용자 행동 추적

3. **Naver Search Advisor**
   - 네이버 검색 최적화
   - 검색 유입 분석

4. **ChatGPT/Perplexity 모니터링**
   - 정기적으로 AI에게 비즈니스 관련 질문
   - 사이트가 인용되는지 확인
   - 예: "서울에서 24시간 배관 서비스를 제공하는 업체는?"

---

## 추가 개선 사항 (선택)

### 1. 블로그/콘텐츠 마케팅
```typescript
// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  return {
    title: `${article.title} | ${SITE_CONFIG.name}`,
    // Article Schema 추가
  };
}
```

### 2. 리뷰/평점 시스템
```typescript
// JSON-LD에 리뷰 추가
{
  "@type": "Review",
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "author": {
    "@type": "Person",
    "name": "고객명"
  }
}
```

### 3. 비디오 콘텐츠
```typescript
// VideoObject Schema
{
  "@type": "VideoObject",
  "name": "싱크대 배관 청소 과정",
  "description": "...",
  "thumbnailUrl": "...",
  "uploadDate": "2024-01-01"
}
```

---

## 문제 해결

### 사이트맵이 생성되지 않는 경우
```bash
# 빌드 시 자동 생성됨
npm run build

# out/sitemap.xml 확인
```

### 구조화 데이터 오류
1. https://validator.schema.org/ 에서 검증
2. 콘솔에서 에러 확인
3. `components/JsonLdSchemas.tsx` 수정

### 이미지가 표시되지 않는 경우
1. `/public/images/` 폴더 확인
2. 경로가 올바른지 확인
3. 이미지 파일명 확인 (대소문자 구분)

---

## 참고 자료

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

## 지원 및 문의

구축된 SEO/AEO/GEO 시스템에 대한 질문이나 추가 커스터마이징이 필요한 경우, 각 파일의 주석을 참고하거나 개발자에게 문의하세요.

**행운을 빕니다! 🚀**
