import React from "react";
import { HeroSection } from "../_components/hero-section";
import { FeatureSection } from "../_components/feature-section";
import { Pricing } from "../_components/pricing";
import { Footer } from "../_components/footer";

const HomePage = () => {
  return (
    <div className="w-full h-full">
      <HeroSection />
      <FeatureSection />
      <Pricing />
      <Footer />
    </div>
  )
}

export default HomePage;