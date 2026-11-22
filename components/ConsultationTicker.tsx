/**
 * 상담 신청 전광판 컴포넌트
 * 실시간 상담 신청 알림을 슬라이드 형태로 표시
 */

"use client";

import { useEffect, useState } from "react";
import consultationNames from "@/data/consultation-names.json";

const statusTypes = ["상담신청", "현장출동", "시공완료", "현장견적"];

export function ConsultationTicker() {
  const [currentName, setCurrentName] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  // 랜덤 이름 선택 함수
  const getRandomName = () => {
    const randomIndex = Math.floor(Math.random() * consultationNames.names.length);
    return consultationNames.names[randomIndex];
  };

  // 랜덤 상태 선택 함수
  const getRandomStatus = () => {
    const randomIndex = Math.floor(Math.random() * statusTypes.length);
    return statusTypes[randomIndex];
  };

  // 초기 이름 및 상태 설정
  useEffect(() => {
    setCurrentName(getRandomName());
    setCurrentStatus(getRandomStatus());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentName(getRandomName());
        setCurrentStatus(getRandomStatus());
        setIsVisible(true);
      }, 300);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 md:py-8 bg-gradient-to-r from-[#1e3a8a]/10 to-[#172554]/10 border-y border-[#1e3a8a]/20">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-4 md:gap-6 overflow-hidden">
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="w-3 h-3 bg-[#fbbf24] rounded-full animate-pulse"></div>
            <span className="text-base md:text-lg font-bold text-gray-700">실시간 상담</span>
          </div>

          <div
            className={`transition-all duration-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <p className="text-base md:text-xl text-gray-800">
              <span className="font-bold text-[#1e3a8a]">{currentName}</span>
              <span className="font-semibold">
                {currentStatus === "상담신청"
                  ? " 상담신청을 하셨습니다"
                  : currentStatus === "현장출동"
                  ? " 현장출동 했습니다"
                  : currentStatus === "시공완료"
                  ? " 시공완료 되었습니다"
                  : currentStatus === "현장견적"
                  ? " 현장견적을 받으셨습니다"
                  : ` ${currentStatus}을 하셨습니다`}
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
