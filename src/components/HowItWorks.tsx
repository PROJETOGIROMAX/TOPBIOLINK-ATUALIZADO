/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, MousePointerClick, Send, CheckCircle } from "lucide-react";
import { howItWorksSteps } from "../data";

export default function HowItWorks() {
  const stepsIcons = [
    <MousePointerClick className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
    <MessageSquare className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
    <Send className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
    <CheckCircle className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
  ];

  return (
    <section id="como-funciona" className="py-24 bg-black border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.01)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title details */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full">
            Passo a Passo
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-5 tracking-tighter">
            Como funciona para ter seu site
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Criar um site com a Top Bio Link é extremamente simples e não exige nenhum conhecimento técnico. Nós fazemos o trabalho duro para você!
          </p>
        </div>

        {/* Steps Layout Grid with visual flow connections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative" id="steps-connector-grid">
          {howItWorksSteps.map((stepItem, idx) => {
            return (
              <div
                key={stepItem.step}
                className="relative bg-neutral-900 rounded-xl p-6 sm:p-7 border border-white/10 hover-gold transition-all flex flex-col items-start text-left group"
              >
                {/* Visual Step Number circle badge overlayed with icon */}
                <div className="flex items-center justify-between w-full mb-6">
                  <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 group-hover:gold-gradient flex items-center justify-center transition-all duration-300">
                    {stepsIcons[idx]}
                  </div>
                  <span className="font-extrabold text-2xl text-neutral-800 group-hover:text-[#D4AF37]/30 transition-colors leading-none font-mono">
                    0{stepItem.step}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-tight">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {stepItem.description}
                </p>

                {/* Connecting arrow indicator lines on wider screens */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-[44px] right-[-15px] z-25 text-neutral-700/60 pointer-events-none">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
