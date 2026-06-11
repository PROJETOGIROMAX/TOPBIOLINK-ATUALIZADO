/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Layout,
  MessageSquare,
  Share2,
  Sparkles,
  Smartphone,
  ExternalLink,
  CheckSquare,
  UserCheck
} from "lucide-react";
import { includedFeatures } from "../data";

export default function WhatIsIncluded() {
  // Map strings to Lucide icons dynamically to maintain cleanliness and typescript safety
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Layout,
    MessageSquare,
    Share2,
    Sparkles,
    Smartphone,
    ExternalLink,
    CheckSquare,
    UserCheck,
  };

  return (
    <section id="recursos" className="py-24 bg-black border-b border-white/5 relative">
      {/* Background decoration glows */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full">
            Completo & Pronto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-5 tracking-tighter" id="features-title">
            O que está incluso no seu site
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Muito além de uma página comum. Entregamos uma estrutura completa pensada exclusivamente para gerar mais vendas e leads locais para seu negócio.
          </p>
        </div>

        {/* Features Bento/Grid style display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="features-grid">
          {includedFeatures.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || SimpleCheckIcon;

            return (
              <div
                key={idx}
                className="bg-neutral-900 border border-white/10 hover-gold p-6 rounded-xl transition-all duration-300 group"
              >
                {/* Decorative icon header circle */}
                <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 text-[#D4AF37] group-hover:gold-gradient group-hover:text-black flex items-center justify-center transition-all duration-300 shadow-md">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold text-white mt-5 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SimpleCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
