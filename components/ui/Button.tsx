/**
 * Button 컴포넌트
 * 디자인 스펙: 1st-pipe.com
 * Primary: 파란색, Secondary: 노란색
 * Shine 호버 효과 포함
 */

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
  fullWidth?: boolean;
}

export function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantStyles = {
    primary:
      "bg-[#1e3a8a] text-white hover:bg-[#1e40af] focus:ring-[#1e3a8a] shadow-md hover:shadow-lg",
    secondary:
      "bg-[#fbbf24] text-[#191919] border border-[#191919] hover:border-0 hover:bg-[#f59e0b] focus:ring-[#fbbf24] shadow-md hover:shadow-lg",
  };

  const sizeStyles =
    "text-base md:text-xl px-6 py-3 md:px-8 md:py-4 min-h-[48px]";

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
