/**
 * 하단 고정 상담 버튼 컴포넌트
 * 문자 상담 / 전화 상담 버튼
 */

"use client";

import { useState } from "react";
import { QuickConsultForm } from "./QuickConsultForm";
import { SITE_CONFIG } from "@/src/constants/site";

export function FloatingConsultButtons() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* 고정 버튼 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e3a8a] shadow-lg">
        <div className="container-custom py-3">
          <div className="grid grid-cols-2 gap-3">
            {/* 문자 상담 버튼 */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center gap-2 bg-white text-[#1e3a8a] px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-md hover:shadow-lg"
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
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <span>문자 상담</span>
            </button>

            {/* 전화 상담 버튼 */}
            <a
              href={`tel:${SITE_CONFIG.contact.phone}`}
              className="flex items-center justify-center gap-2 bg-[#fbbf24] text-[#191919] px-6 py-4 rounded-lg font-bold text-lg hover:bg-[#f59e0b] transition-all shadow-md hover:shadow-lg"
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
              <span>전화 상담</span>
            </a>
          </div>
        </div>
      </div>

      {/* 모달 */}
      <QuickConsultForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
