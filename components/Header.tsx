/**
 * Header 컴포넌트
 * 디자인 스펙: 1st-pipe.com
 * 데스크톱: 132px, 모바일: 71px
 * 스크롤 시 고정 (sticky)
 */

"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { SITE_CONFIG } from "@/src/constants/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "주요 서비스", href: "#services" },
    { name: "시공사례", href: "#cases" },
    { name: "자주 묻는 질문", href: "#faq" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 132; // Desktop header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white text-[#212121] shadow-lg"
      role="banner"
    >
      {/* Desktop Header */}
      <div className="hidden md:block h-[132px]">
        <div className="container-custom h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label={`${SITE_CONFIG.name} 홈으로 이동`}
          >
            <Image
              src="/logo.png"
              alt={`${SITE_CONFIG.name} 로고`}
              width={80}
              height={80}
              className="h-20 w-auto"
              priority
            />
            <span className="text-3xl font-bold text-[#1e3a8a]">{SITE_CONFIG.name}</span>
          </a>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[18px] font-semibold text-gray-700 hover:text-[#1e3a8a] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a href={`tel:${SITE_CONFIG.contact.phone}`}>
            <Button variant="primary" className="text-base md:text-lg font-bold whitespace-nowrap">
              {SITE_CONFIG.contact.phone}
            </Button>
          </a>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden h-[71px]">
        <div className="container-custom h-full flex items-center justify-between gap-2">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            aria-label={`${SITE_CONFIG.name} 홈으로 이동`}
          >
            <Image
              src="/logo.png"
              alt={`${SITE_CONFIG.name} 로고`}
              width={48}
              height={48}
              className="h-12 w-auto"
              priority
            />
            <span className="text-xl font-bold text-[#1e3a8a]">{SITE_CONFIG.name}</span>
          </a>

          <div className="flex items-center gap-2">
            {/* Mobile Phone Button */}
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="p-2 bg-[#1e3a8a] text-white rounded-lg hover:bg-[#1e40af] transition-colors"
              aria-label="전화하기"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </a>

            {/* Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="메뉴 열기"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-6 h-6 text-[#1e3a8a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-gray-200 bg-white">
            <div className="container-custom py-4">
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-2 text-base font-semibold text-gray-700 hover:text-[#1e3a8a] transition-colors"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
