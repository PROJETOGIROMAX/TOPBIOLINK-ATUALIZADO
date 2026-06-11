/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ModelCards from "./components/ModelCards";
import WhatIsIncluded from "./components/WhatIsIncluded";
import OfferSection from "./components/OfferSection";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloating from "./components/WhatsAppFloating";

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans antialiased text-neutral-200 overflow-x-hidden selection:bg-[#D4AF37] selection:text-neutral-950">
      
      {/* 1. Global Navigation Header */}
      <Header />

      {/* 2. Interactive Premium Hero Section */}
      <Hero />

      {/* 3. "Como funciona" steps */}
      <HowItWorks />

      {/* 4. "Veja modelos reais por nicho" interactive grid with Search + Filters */}
      <ModelCards />

      {/* 5. "O que está incluso" features grid */}
      <WhatIsIncluded />

      {/* 6. Special Launching Offer ("Oferta de lançamento") */}
      <OfferSection />

      {/* 7. "Por que ter um site" benefits grid */}
      <Benefits />

      {/* 8. Collapsible Accordion Dúvidas Frequentes (FAQ) */}
      <FAQ />

      {/* 9. Chamada Final CTA Section */}
      <CTA />

      {/* 10. Brand and navigation links footer */}
      <Footer />

      {/* 11. Omnipresent dynamic WhatsApp floating badge */}
      <WhatsAppFloating />

    </div>
  );
}
