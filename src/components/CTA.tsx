/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowUp, MessageSquare, ExternalLink } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function CTA() {
  const ctaWhatsAppMessage = "Olá! Vi os modelos da Top Bio Link e quero criar um site para o meu negócio.";
  const clickWhatsAppUrl = getWhatsAppLink(ctaWhatsAppMessage);

  return (
    <section id="contato" className="py-24 bg-black border-b border-white/5 relative">
      {/* Background visual gold blur layers */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Large container frame */}
        <div className="bg-neutral-900 border border-white/10 p-8 sm:p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          
          {/* Subtle gold line accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tighter leading-tight max-w-3xl mx-auto">
            Escolha seu modelo e comece a divulgar seu negócio com{" "}
            <span className="gold-text block sm:inline">
              mais profissionalismo
            </span>.
          </h2>

          <p className="text-neutral-400 mt-6 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Veja todos os modelos disponíveis por nicho para experimentar, selecione o que combina com seu negócio e fale com a Top Bio Link diretamente pelo WhatsApp. Nós cuidamos do resto!
          </p>

          {/* Buttons selection wrap */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center" id="cta-button-container">
            <a
              href="#modelos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-850 border border-white/5 text-white font-bold px-8 py-4 rounded-xl text-sm sm:text-base transition-all"
            >
              <span>Ver modelos</span>
              <ArrowUp className="w-4.5 h-4.5 transform rotate-90 text-[#D4AF37]" />
            </a>

            <a
              href={clickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gold-gradient hover:brightness-110 text-neutral-950 font-extrabold px-8 py-4 rounded-xl text-sm sm:text-base shadow-xl active:scale-[0.98] transition-all"
              id="cta-whatsapp-link-btn"
            >
              <MessageSquare className="w-5 h-5 fill-neutral-950" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

          <p className="mt-6 text-xs text-neutral-500 font-bold uppercase tracking-wider">
            ⚡ Entrega rápida • Adaptações ilimitadas • 100% Mobile Friendly
          </p>

        </div>

      </div>
    </section>
  );
}
