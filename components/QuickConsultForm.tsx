/**
 * 빠른 상담하기 팝업 모달 컴포넌트
 * 이름, 연락처, 내용을 입력받아 SMS로 발송
 */

"use client";

import { useState, FormEvent, useEffect } from "react";
import { Button } from "./ui/Button";
import { SITE_CONFIG } from "@/src/constants/site";

interface QuickConsultFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuickConsultForm({ isOpen, onClose }: QuickConsultFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    message: "",
  });

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // 모달 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validatePhone = (phone: string) => {
    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 유효성 검사
    const newErrors = {
      name: "",
      phone: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "이름을 입력해주세요.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "연락처를 입력해주세요.";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "올바른 연락처를 입력해주세요. (예: 010-1234-5678)";
    }

    if (!formData.message.trim()) {
      newErrors.message = "문의 내용을 입력해주세요.";
    }

    setErrors(newErrors);

    // 에러가 있으면 중단
    if (newErrors.name || newErrors.phone || newErrors.message) {
      return;
    }

    // SMS 메시지 생성
    const smsBody = `[프렌즈배관 상담 요청]\n이름: ${formData.name}\n연락처: ${formData.phone}\n문의내용: ${formData.message}`;

    // SMS URL 생성 (iOS, Android 모두 지원)
    const smsUrl = `sms:${SITE_CONFIG.contact.phone}${
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ? "&" : "?"
    }body=${encodeURIComponent(smsBody)}`;

    // SMS 앱 열기
    window.location.href = smsUrl;

    // 폼 초기화 및 모달 닫기
    setTimeout(() => {
      setFormData({ name: "", phone: "", message: "" });
      setErrors({ name: "", phone: "", message: "" });
      onClose();
      alert("문자 앱이 열렸습니다. 전송 버튼을 눌러주세요!");
    }, 500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // 에러 초기화
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-modal-title"
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="닫기"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Body */}
        <div className="p-8 md:p-12">
          <header className="text-center mb-8">
            <h2
              id="consult-modal-title"
              className="text-3xl md:text-4xl font-bold mb-4 text-[#212121]"
            >
              문자 상담 신청
            </h2>
            <p className="text-gray-600 text-lg">
              간단한 정보를 입력하시면 빠르게 상담해드립니다.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 이름 */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                이름 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 transition-all ${
                  errors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#1e3a8a] focus:border-[#1e3a8a]"
                }`}
                placeholder="홍길동"
                aria-required="true"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-2 text-sm text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            {/* 연락처 */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 border focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#1e3a8a] focus:border-[#1e3a8a]"
                }`}
                placeholder="010-1234-5678"
                aria-required="true"
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              {errors.phone && (
                <p id="phone-error" className="mt-2 text-sm text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            {/* 문의 내용 */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                문의 내용 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all resize-none ${
                  errors.message
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#1e3a8a] focus:border-[#1e3a8a]"
                }`}
                placeholder="문의하실 내용을 자세히 적어주세요."
                aria-required="true"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-2 text-sm text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            {/* 제출 버튼 */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="text-xl py-4"
            >
              상담 신청하기
            </Button>

            {/* 안내 문구 */}
            <p className="text-center text-sm text-gray-500 mt-4">
              * 상담 신청 시 문자 앱이 자동으로 열립니다.
              <br />
              전송 버튼을 눌러 완료해주세요.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
