/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Zap, Layers, Instagram } from "lucide-react";
import { benefitItems } from "../data";

export default function Benefits() {
  const benefitIcons = [
    <ShieldCheck className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
    <Zap className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
    <Layers className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
    <Instagram className="w-5 h-5 text-[#D4AF37] group-hover:text-black transition-colors" />,
  ];

  return (
    <section className="py-24 bg-black border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.01)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title information */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full">
            Crescimento Local
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-5 tracking-tighter">
            Por que ter um site para seu negócio?
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            A presença digital se tornou indispensável. Veja como um site simples, porém extremamente profissional, vai alavancar o faturamento do seu estabelecimento comercial.
          </p>
        </div>

        {/* Benefits Cards columns layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="benefits-grid">
          {benefitItems.map((benefit, idx) => {
            return (
              <div
                key={idx}
                className="bg-neutral-900 p-6 sm:p-7 rounded-xl border border-white/10 hover-gold transition-all duration-300 group"
              >
                {/* Visual Icon backdrop */}
                <div className="w-10 h-10 rounded-lg bg-neutral-950 border border-white/5 flex items-center justify-center mb-6 group-hover:gold-gradient transition-all duration-300">
                  {benefitIcons[idx]}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-3.5 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
