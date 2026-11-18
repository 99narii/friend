# 1st-pipe.com 디자인 스펙 문서

## 프로젝트 개요
- **사이트**: https://1st-pipe.com/
- **업종**: 배관 서비스 (싱크대·하수구·변기)
- **빌더**: DOZ 플랫폼
- **분석일**: 2026-11-18

---

## 색상 시스템

### 주요 색상
```css
/* Primary Brand Color */
--primary-blue: #4a90e2;      /* RGB(74, 144, 226) */

/* Secondary Colors */
--accent-yellow: #fee500;      /* 노란색 액센트 */
--text-dark: #212121;          /* 다크 그레이 텍스트 */
--text-secondary: #191919;     /* 버튼 내 텍스트 */

/* Background Colors */
--bg-white: #ffffff;
--overlay-dark: rgba(0, 0, 0, 0.7);
--overlay-light: rgba(255, 255, 255, 0.3);
--white-transparent: rgba(255, 255, 255, 1);
```

---

## 타이포그래피

### 폰트 설정
```css
/* Logo */
font-size: 36px (Desktop), 24px (Mobile)
font-weight: bold
color: white

/* Button Text */
font-size: 20px (Desktop), 14px (Mobile)

/* Body Text */
color: #212121
```

---

## 레이아웃 구조

### 1. 헤더 (Header)

#### 데스크톱 헤더
- **ID**: `#s20251120bdce03ea9027b`
- **높이**: 132px
- **구성 요소**:
  - 로고: 36px bold, 흰색
  - 네비게이션: 인라인 위젯
  - 스크롤 고정(sticky) 지원

#### 모바일 헤더
- **ID**: `#s2025112015f89b64ff653`
- **높이**: 71px
- **구성 요소**:
  - 로고: 24px bold
  - 햄버거 메뉴 버튼

```css
/* Desktop Header */
#s20251120bdce03ea9027b {
  height: 132px;
  position: fixed;
}

/* Mobile Header */
#s2025112015f89b64ff653 {
  height: 71px;
  @media (max-width: 767px) {
    display: block;
  }
}
```

---

### 2. 히어로 섹션 (Hero Section)

- **ID**: `#s20251120d375f17dfa7c8`
- **높이**:
  - 데스크톱: 1000px
  - 모바일: 800px (≤430px: 650px 최소)
- **형식**: Owl Carousel 슬라이더
- **오버레이**: rgba(0, 0, 0, 0.7)

```css
#s20251120d375f17dfa7c8 {
  height: 1000px;

  @media (max-width: 991px) {
    height: 800px;
  }

  @media (max-width: 430px) {
    min-height: 650px;
  }
}
```

#### 슬라이더 페이징
- **스타일**: 점(dots) + 선(line)
- **색상**: rgba(255, 255, 255, 1)
- **위치**: 하단 중앙

---

### 3. 컨텐츠 섹션

#### 그리드 시스템
```css
/* Container */
.container {
  max-width: 1280px;
  padding: 15px (Mobile), 32px (Desktop);
  margin: 0 auto;
}

/* Columns */
.inline-col {
  padding-left: 15px;
}
```

#### 텍스트 박스
- **개수**: 6개 박스
- **테두리**: 16px 라운드, 1px 흰색 경계선
- **배경**: 투명
- **애니메이션**: 순차적 슬라이드업 (0.15s 간격)

---

### 4. 블러 배경 섹션

- **ID**: `#s20251119b4570998b4b41`
- **효과**: 10px 블러 + 반투명 흰색 배경

```css
#s20251119b4570998b4b41 {
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
}
```

---

## 버튼 스타일

### Primary Button (파란색)
```css
.btn_4f05d0e6050c1 {
  background-color: #4a90e2;
  color: white;
  border: none;
  font-size: 20px;

  &:hover {
    background-color: #4a90e2; /* 동일 유지 */
  }

  @media (max-width: 767px) {
    font-size: 14px;
    width: 100%;
  }
}
```

### Secondary Button (노란색)
```css
.btn_cs417V41ai {
  background-color: #fee500;
  color: #191919;
  border: 1px solid;
  font-size: 20px;

  &:hover {
    border: 0px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
  }
}
```

### 버튼 호버 효과
- **이름**: "shine" 효과
- **동작**: 왼쪽→오른쪽 광선 효과

---

## 애니메이션

### 1. Slide Up Animation
```css
@keyframes slideUpIn {
  0% {
    opacity: 0;
    transform: translateY(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate {
  animation: slideUpIn 0.6s ease-out;
}
```

### 2. Shine Effect (Button Hover)
```css
@keyframes shine {
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 300px 0;
  }
}

button:hover {
  animation: shine 1s;
}
```

### 3. 순차 애니메이션
- **대상**: 텍스트 박스 6개
- **딜레이**: 각각 0.15s 간격
- **트리거**: 스크롤 시 ".animate" 클래스 추가

---

## 반응형 브레이크포인트

### 모바일 (≤430px)
```css
@media (max-width: 430px) {
  /* Hero Section */
  min-height: 650px;

  /* Typography */
  font-size: 32px;

  /* Buttons */
  width: 100%;
}
```

### 태블릿 (≤767px)
```css
@media (max-width: 767px) {
  /* Header */
  - 모바일 헤더 표시
  - 데스크톱 메뉴 숨김

  /* Layout */
  padding: 15px;

  /* Buttons */
  font-size: 14px;
}
```

### 데스크톱 (768px+)
```css
@media (min-width: 768px) {
  /* Hover Effects */
  - 활성화

  /* Navigation */
  - 데스크톱 네비게이션 표시

  /* Layout */
  padding: 32px;
}
```

### 대형 화면 (991px+)
```css
@media (min-width: 991px) {
  /* Hero Section */
  height: 1000px; /* 전체 높이 복원 */

  /* Sidebar */
  - 사이드바 표시
}
```

---

## 성능 최적화

### 모바일 최적화
1. **고정 배경 이미지**: 모바일에서 비활성화
   ```css
   @media (max-width: 767px) {
     background-attachment: scroll; /* fixed 제거 */
   }
   ```

2. **애니메이션 제어**: ".animate" 클래스로 제어 가능

3. **터치 타겟**: 최소 48x48px 버튼 크기

---

## 접근성 고려사항

### 색상 대비
- ✅ 흰색 텍스트 on 파란색 배경 (#4a90e2)
- ✅ 다크 텍스트 on 노란색 배경 (#fee500)

### 인터랙션
- ✅ 충분한 버튼 크기 (모바일 100% 너비)
- ✅ 명확한 호버 상태
- ✅ 키보드 네비게이션 지원 (기본 HTML 요소 사용)

### 애니메이션
- ⚠️ prefers-reduced-motion 미지원 (추가 권장)

---

## 구현 우선순위

### Phase 1: 기본 구조
1. 반응형 헤더 (데스크톱/모바일)
2. 히어로 섹션 + 슬라이더
3. 그리드 레이아웃 시스템

### Phase 2: 스타일링
1. 색상 시스템 적용
2. 타이포그래피 설정
3. 버튼 스타일 (Primary/Secondary)

### Phase 3: 인터랙션
1. Slide Up 애니메이션
2. Shine 호버 효과
3. 스크롤 트리거 애니메이션

### Phase 4: 최적화
1. 반응형 이미지 처리
2. 모바일 성능 최적화
3. 접근성 개선

---

## 기술 스택 권장사항

### Next.js 구현 시
```javascript
// next.config.ts (이미 적용됨)
output: 'export',
images: { unoptimized: true }

// 애니메이션
- framer-motion 또는 GSAP
- Intersection Observer API (스크롤 트리거)

// 슬라이더
- swiper 또는 embla-carousel

// 스타일링
- Tailwind CSS (기본 설정 커스터마이징)
- CSS Modules (복잡한 애니메이션용)
```

---

## 참고사항

- **빌더 플랫폼**: DOZ (원본 사이트)
- **스크린샷**: Playwright MCP 환경 미설정으로 미첨부
- **분석 방법**: WebFetch를 통한 HTML/CSS 구조 분석
- **추가 필요사항**: 실제 디자인 확인을 위한 스크린샷 촬영 권장
