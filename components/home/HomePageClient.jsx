"use client";
import HeroSection from "./HeroSection";
import DivisionsSection from "./DivisionsSection";
import AboutSection from "./AboutSection";
import ProductsGrid from "./ProductsGrid";
import ApplicationAreasSection from "./ApplicationAreasSection";
import ClientsSection from "./ClientsSection";
import CTASection from "./CTASection";

export default function HomePageClient() {
  return (
    <>
      <HeroSection />
      <DivisionsSection />
      <AboutSection />
      <ProductsGrid />
      <ApplicationAreasSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
