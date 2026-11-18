/**
 * FAQ 섹션 컴포넌트
 * AEO/GEO 최적화: AI가 Q&A 형식으로 쉽게 인용 가능
 */

"use client";

import { useState } from "react";
import { SITE_CONFIG } from "@/src/constants/site";

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

function FAQItem({ question, answer, index }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="faq-item border-b border-gray-200"
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-4"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3
          className="text-base md:text-lg font-semibold text-gray-900 pr-4"
          itemProp="name"
          id={`faq-question-${index}`}
        >
          Q. {question}
        </h3>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        aria-labelledby={`faq-question-${index}`}
      >
        <p className="text-gray-700 leading-relaxed px-4 pb-5" itemProp="text">
          A. {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 px-4 max-w-4xl mx-auto"
    >
      <h2 id="faq-heading" className="text-3xl font-bold mb-8 text-center">
        자주 묻는 질문
      </h2>

      <div className="faq-list" role="list">
        {SITE_CONFIG.faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            index={index}
          />
        ))}
      </div>

      {/* 추가 문의 안내 */}
      <div className="mt-12 p-6 bg-blue-50 text-center">
        <p className="text-gray-700 mb-4">
          더 궁금하신 사항이 있으신가요?
        </p>
        <a
          href={`tel:${SITE_CONFIG.contact.phone}`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          aria-label={`${SITE_CONFIG.name}에 전화하기`}
        >
          {SITE_CONFIG.contact.phone}
        </a>
      </div>
    </section>
  );
}
