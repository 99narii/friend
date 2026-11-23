import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata as generateSiteMetadata } from "@/src/constants/site";
import { JsonLdSchemas } from "@/components/JsonLdSchemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO/AEO/GEO 최적화된 메타데이터
export const metadata: Metadata = {
  metadataBase: new URL('https://friend-system.netlify.app'),
  ...generateSiteMetadata(),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* JSON-LD 구조화 데이터 */}
        <JsonLdSchemas />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
