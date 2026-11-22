/**
 * 메인 페이지
 * 1st-pipe.com 디자인 스펙 적용
 * SEO/AEO/GEO 최적화
 */

import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServiceSummary } from "@/components/ServiceSummary";
import { ServiceKeywordSlider } from "@/components/ServiceKeywordSlider";
import { EquipmentSection } from "@/components/EquipmentSection";
import { CasesSection } from "@/components/CasesSection";
import { ReviewSection } from "@/components/ReviewSection";
import { KeyFeatures } from "@/components/KeyFeatures";
import { FAQSection } from "@/components/FAQSection";
import { ConsultationTicker } from "@/components/ConsultationTicker";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { FloatingConsultButtons } from "@/components/FloatingConsultButtons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main role="main" className="pb-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Consultation Ticker */}
        <ConsultationTicker />

        {/* Service Summary */}
        <ServiceSummary />

        {/* Equipment Section */}
        <EquipmentSection />

        {/* Cases Section */}
        <CasesSection />

        {/* Review Section */}
        <ReviewSection />

        {/* Key Features */}
        <KeyFeatures />

        {/* FAQ Section */}
        <FAQSection />

        {/* Contact CTA */}
        <ContactCTA />

        {/* Service Keyword Slider */}
        <ServiceKeywordSlider />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Consult Buttons */}
      <FloatingConsultButtons />
    </div>
  );
}
