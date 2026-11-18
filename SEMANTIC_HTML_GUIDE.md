# 시맨틱 HTML 구조 가이드

## SEO/AEO/GEO 최적화를 위한 HTML 작성 규칙

이 문서는 AI 검색엔진(ChatGPT, Perplexity, Gemini 등)이 웹사이트 콘텐츠를 정확히 이해하고 인용할 수 있도록 시맨틱 HTML을 작성하는 가이드입니다.

---

## 1. 기본 페이지 구조

### 올바른 예시
```tsx
export default function Page() {
  return (
    <main>
      <header>
        <nav aria-label="주요 메뉴">
          {/* 네비게이션 콘텐츠 */}
        </nav>
      </header>

      <article>
        <h1>페이지 주제 (한 페이지에 단 하나)</h1>

        <section aria-labelledby="section-1">
          <h2 id="section-1">섹션 제목</h2>
          <p>섹션 내용...</p>
        </section>

        <section aria-labelledby="section-2">
          <h2 id="section-2">다른 섹션 제목</h2>
          <p>섹션 내용...</p>
        </section>
      </article>

      <footer>
        <p>저작권 정보</p>
      </footer>
    </main>
  );
}
```

### 잘못된 예시 ❌
```tsx
// 잘못된 예시 1: div만 사용
<div>
  <div>
    <div>제목</div>
    <div>내용</div>
  </div>
</div>

// 잘못된 예시 2: 헤딩 순서 무시
<h1>메인 제목</h1>
<h3>서브 제목</h3> {/* h2를 건너뜀 */}
<h2>또 다른 제목</h2> {/* 순서 뒤바뀜 */}
```

---

## 2. 헤딩(Heading) 계층 구조

### 규칙
1. **h1은 페이지당 단 하나**만 사용
2. **순차적으로 사용** (h1 → h2 → h3, 순서 건너뛰지 않기)
3. **의미 있는 텍스트** 사용 (AI가 이해할 수 있도록)

### 올바른 예시
```tsx
<article>
  <h1>프렌즈배관 | 24시간 긴급 배관 서비스</h1>

  <section>
    <h2>주요 서비스</h2>

    <div>
      <h3>싱크대 배관 청소</h3>
      <p>싱크대 막힘, 악취 제거 전문 서비스</p>
    </div>

    <div>
      <h3>하수구 역류 해결</h3>
      <p>하수구 역류 문제 신속 해결</p>
    </div>
  </section>

  <section>
    <h2>서비스 지역</h2>
    <p>서울 전지역 24시간 출동 가능</p>
  </section>
</article>
```

---

## 3. 섹션 구분

### &lt;section&gt; vs &lt;article&gt; vs &lt;div&gt;

#### &lt;section&gt; 사용
- **독립적인 주제 단위**로 그룹화
- **헤딩(h2~h6)이 반드시 포함**되어야 함
- 목차로 표시될 만한 콘텐츠

```tsx
<section aria-labelledby="services-title">
  <h2 id="services-title">제공 서비스</h2>
  <ul>
    <li>싱크대 배관 청소</li>
    <li>하수구 역류 해결</li>
    <li>변기 수리 및 교체</li>
  </ul>
</section>
```

#### &lt;article&gt; 사용
- **독립적으로 배포 가능한 콘텐츠**
- 블로그 포스트, 뉴스 기사, 제품 카드 등

```tsx
<article>
  <h2>싱크대 막힘 해결 방법</h2>
  <time dateTime="2024-01-15">2024년 1월 15일</time>
  <p>싱크대가 막혔을 때 가장 먼저 시도해야 할 방법은...</p>
</article>
```

#### &lt;div&gt; 사용
- **순수한 스타일링 목적**
- 의미론적 의미가 없는 그룹화

```tsx
<div className="flex gap-4">
  {/* 레이아웃을 위한 컨테이너 */}
</div>
```

---

## 4. 이미지 최적화

### alt 속성 작성 규칙

#### 올바른 예시 ✅
```tsx
// 1. 의미 있는 이미지
<Image
  src="/images/sink-cleaning.jpg"
  alt="전문가가 싱크대 배수구를 청소하는 모습"
  width={800}
  height={600}
/>

// 2. 로고/브랜드
<Image
  src="/images/logo.png"
  alt="프렌즈배관 로고"
  width={200}
  height={80}
/>

// 3. 장식용 이미지 (빈 alt 사용)
<Image
  src="/images/decorative-pattern.svg"
  alt=""
  aria-hidden="true"
  width={100}
  height={100}
/>

// 4. 복잡한 정보가 담긴 이미지
<figure>
  <Image
    src="/images/service-area-map.png"
    alt="서울 전지역 서비스 지역 지도"
    width={1000}
    height={800}
  />
  <figcaption>
    프렌즈배관은 서울특별시 전 지역에 24시간 출동 가능합니다.
    강남구, 서초구, 송파구, 강동구 등 모든 구역 서비스 제공.
  </figcaption>
</figure>
```

#### 잘못된 예시 ❌
```tsx
// 1. 너무 간략한 설명
<Image src="/img.jpg" alt="이미지" />

// 2. 파일명을 그대로 사용
<Image src="/sink-01.jpg" alt="sink-01" />

// 3. alt 속성 누락
<Image src="/photo.jpg" />

// 4. 불필요하게 긴 설명
<Image
  src="/service.jpg"
  alt="프렌즈배관 서비스를 소개하는 이미지입니다. 이 이미지는 우리 회사의 전문적인 서비스를 보여주며..."
/>
```

---

## 5. 링크 및 버튼

### 올바른 사용법

#### 링크 (&lt;a&gt;)
```tsx
// 1. 명확한 링크 텍스트
<a href="/services">서비스 상세보기</a> {/* ✅ 좋음 */}
<a href="/services">여기를 클릭하세요</a> {/* ❌ 나쁨 */}

// 2. 외부 링크
<a
  href="https://blog.naver.com/1stpipe"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="프렌즈배관 네이버 블로그 (새 창)"
>
  블로그 방문하기
</a>

// 3. 전화 걸기 링크
<a href="tel:02-1234-5678" aria-label="프렌즈배관에 전화하기">
  02-1234-5678
</a>
```

#### 버튼 (&lt;button&gt;)
```tsx
// 1. 액션을 수행하는 버튼
<button
  type="button"
  onClick={handleSubmit}
  aria-label="긴급 출동 신청하기"
>
  긴급 출동 신청
</button>

// 2. 폼 제출 버튼
<button type="submit">
  문의하기
</button>

// 3. 아이콘 버튼
<button
  type="button"
  aria-label="메뉴 열기"
>
  <MenuIcon aria-hidden="true" />
</button>
```

---

## 6. 리스트 (목록)

### 올바른 사용법

```tsx
// 1. 순서가 중요한 목록 (절차, 단계)
<ol>
  <li>전화 또는 온라인으로 접수</li>
  <li>전문가 긴급 출동</li>
  <li>현장 진단 및 견적 안내</li>
  <li>작업 진행</li>
  <li>완료 확인 및 결제</li>
</ol>

// 2. 순서가 없는 목록 (특징, 항목)
<ul>
  <li>24시간 연중무휴 긴급 출동</li>
  <li>서울 전지역 서비스 제공</li>
  <li>3개월 무상 A/S 보증</li>
  <li>투명한 가격 정책</li>
</ul>

// 3. 정의 목록 (용어 설명)
<dl>
  <dt>싱크대 배관 청소</dt>
  <dd>싱크대 막힘, 악취 제거, 배수관 청소 전문 서비스</dd>

  <dt>하수구 역류 해결</dt>
  <dd>하수구 역류, 악취, 막힘 문제 신속 해결</dd>
</dl>
```

---

## 7. 테이블 (표)

### 올바른 사용법

```tsx
<table>
  <caption>프렌즈배관 서비스 가격표</caption>
  <thead>
    <tr>
      <th scope="col">서비스</th>
      <th scope="col">가격</th>
      <th scope="col">소요 시간</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">싱크대 배관 청소</th>
      <td>50,000원부터</td>
      <td>30분~1시간</td>
    </tr>
    <tr>
      <th scope="row">하수구 역류 해결</th>
      <td>80,000원부터</td>
      <td>1~2시간</td>
    </tr>
  </tbody>
</table>
```

---

## 8. 폼 (양식)

### 올바른 사용법

```tsx
<form onSubmit={handleSubmit}>
  {/* 1. 명확한 레이블 */}
  <div>
    <label htmlFor="customer-name">이름 *</label>
    <input
      type="text"
      id="customer-name"
      name="name"
      required
      aria-required="true"
      placeholder="홍길동"
    />
  </div>

  {/* 2. 전화번호 입력 */}
  <div>
    <label htmlFor="phone">전화번호 *</label>
    <input
      type="tel"
      id="phone"
      name="phone"
      required
      aria-required="true"
      pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
      placeholder="010-1234-5678"
    />
  </div>

  {/* 3. 선택 항목 */}
  <fieldset>
    <legend>문의 유형</legend>
    <label>
      <input type="radio" name="inquiry" value="sink" />
      싱크대 문의
    </label>
    <label>
      <input type="radio" name="inquiry" value="drain" />
      하수구 문의
    </label>
    <label>
      <input type="radio" name="inquiry" value="toilet" />
      변기 문의
    </label>
  </fieldset>

  {/* 4. 텍스트 영역 */}
  <div>
    <label htmlFor="message">상세 내용</label>
    <textarea
      id="message"
      name="message"
      rows={5}
      placeholder="증상을 자세히 설명해주세요"
    />
  </div>

  {/* 5. 제출 버튼 */}
  <button type="submit">
    문의 접수하기
  </button>
</form>
```

---

## 9. ARIA 속성 활용

### 주요 ARIA 속성

```tsx
// 1. aria-label: 보이는 텍스트가 없을 때
<button aria-label="검색">
  <SearchIcon />
</button>

// 2. aria-labelledby: 다른 요소의 텍스트를 레이블로 사용
<section aria-labelledby="services-heading">
  <h2 id="services-heading">주요 서비스</h2>
</section>

// 3. aria-describedby: 추가 설명 제공
<input
  type="password"
  aria-describedby="password-hint"
/>
<p id="password-hint">
  8자 이상, 영문/숫자/특수문자 조합
</p>

// 4. aria-hidden: 보조 기술에서 숨기기
<span aria-hidden="true">👍</span>

// 5. aria-live: 동적 콘텐츠 알림
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>
```

---

## 10. 랜드마크 역할

### 주요 랜드마크 요소

```tsx
<body>
  {/* 1. 헤더 */}
  <header role="banner">
    <nav aria-label="주요 메뉴">
      {/* 네비게이션 */}
    </nav>
  </header>

  {/* 2. 메인 콘텐츠 */}
  <main role="main">
    <article>
      {/* 주요 콘텐츠 */}
    </article>

    {/* 3. 사이드바 */}
    <aside aria-label="관련 정보">
      {/* 부가 콘텐츠 */}
    </aside>
  </main>

  {/* 4. 푸터 */}
  <footer role="contentinfo">
    {/* 저작권, 연락처 등 */}
  </footer>
</body>
```

---

## 11. AI 검색엔진 최적화 체크리스트

### 필수 요소
- [ ] h1 태그 1개 (명확한 페이지 주제)
- [ ] h2~h6 순차적 사용
- [ ] 모든 이미지에 alt 속성
- [ ] 명확한 section/article 구분
- [ ] 의미 있는 링크 텍스트
- [ ] 올바른 리스트 사용 (ul/ol/dl)
- [ ] 폼 필드에 label 연결
- [ ] ARIA 속성 적절히 사용
- [ ] 랜드마크 요소 사용
- [ ] &lt;time&gt; 태그로 날짜/시간 표시

### 권장 사항
- [ ] &lt;figure&gt; + &lt;figcaption&gt;으로 이미지 설명
- [ ] &lt;address&gt;로 연락처 정보 마크업
- [ ] &lt;blockquote&gt;로 인용문 표시
- [ ] &lt;code&gt;/&lt;pre&gt;로 코드 표시
- [ ] &lt;abbr&gt;로 약어 설명

---

## 12. Next.js 컴포넌트 예시

### 서비스 카드 컴포넌트
```tsx
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export function ServiceCard({ title, description, price, image }: ServiceCardProps) {
  return (
    <article className="service-card">
      <Image
        src={image}
        alt={`${title} 서비스 이미지`}
        width={400}
        height={300}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="price">
        <span className="sr-only">가격:</span>
        {price}
      </p>
      <a href={`/services/${encodeURIComponent(title)}`}>
        {title} 자세히 보기
      </a>
    </article>
  );
}
```

### FAQ 컴포넌트
```tsx
interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <div className="faq-item" itemScope itemType="https://schema.org/Question">
      <h3 itemProp="name">{question}</h3>
      <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text">{answer}</p>
      </div>
    </div>
  );
}
```

---

## 추가 리소스

- [MDN Web Docs - HTML 요소 참조](https://developer.mozilla.org/ko/docs/Web/HTML/Element)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [Schema.org](https://schema.org/)
- [Google Search Central](https://developers.google.com/search/docs)

---

이 가이드를 따라 HTML을 작성하면 검색엔진과 AI 엔진 모두에서 높은 가시성을 확보할 수 있습니다.
