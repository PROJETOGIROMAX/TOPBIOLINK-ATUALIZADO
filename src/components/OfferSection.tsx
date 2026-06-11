/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, ShieldCheck, CreditCard, Sparkles, MessageSquare } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function OfferSection() {
  const offerWhatsAppMsg = "Olá! Quero criar meu site com a Top Bio Link por 12x de R$ 30. Pode me explicar como funciona?";
  const clickWhatsAppUrl = getWhatsAppLink(offerWhatsAppMsg);

  const includedItems = [
    "Modelo profissional por nicho",
    "Adaptação completa com nome e logo do negócio",
    "Botões integrados para WhatsApp e redes sociais",
    "Produtos, combos ou serviços principais cadastrados",
    "Link amigável otimizado para divulgação",
    "Sem mensalidades abusivas",
    "Suporte de ponta para configuração inicial",
  ];

  return (
    <section id="oferta" className="py-24 bg-black border-b border-white/5 relative">
      {/* Background glow behind pricing block */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-amber-500/5 blur-[130px] mx-auto pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header content */}
        <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full">
          Melhor Custo-Benefício do Mercado
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-5 tracking-tighter">
          Oferta de lançamento
        </h2>
        <p className="text-neutral-400 mt-3 text-sm sm:text-base max-w-lg mx-auto">
          Escolha um modelo pronto e tenha um site profissional para divulgar seu negócio com extrema confiança.
        </p>

        {/* Dynamic Card Container with high-end dark styling and golden border */}
        <div className="mt-12 bg-neutral-900 border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl text-left flex flex-col md:flex-row transition-all">
          
          {/* Left Block: Features checklist */}
          <div className="p-8 sm:p-10 md:w-3/5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] font-bold text-sm uppercase tracking-wider mb-5">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>O que você vai receber</span>
              </div>
              <ul className="space-y-3.5 pr-2">
                {includedItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 gold-gradient text-neutral-950 p-0.5 rounded-md mt-0.5 font-bold">
                      <Check className="w-4 h-4 stroke-[3px]" />
                    </span>
                    <span className="text-sm sm:text-base text-neutral-300 font-semibold">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center gap-2.5 bg-neutral-950 border border-white/5 p-3.5 rounded-xl text-xs text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
              <span>Sua satisfação garantida. Ajustes rápidos direto no atendimento do WhatsApp.</span>
            </div>
          </div>

          {/* Right Block: Pitch pricing */}
          <div className="p-8 sm:p-10 md:w-2/5 flex flex-col items-center justify-center text-center bg-neutral-950">
            
            <div className="inline-block bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] sm:text-xs font-black uppercase px-3 py-1 rounded-full mb-3 tracking-widest">
              CONDIÇÃO DE LANÇAMENTO
            </div>

            <div className="text-xs text-neutral-400 font-bold mb-1">Crie seu site por apenas</div>
            
            <div className="flex items-baseline gap-1 my-3">
              <span className="text-xs font-bold text-neutral-400 font-mono">12x de</span>
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tighter gold-text">R$ 30</span>
            </div>

            <div className="text-[11px] text-neutral-500 mb-6 max-w-[200px] leading-relaxed">
              Condição especial para os primeiros clientes da Top Bio Link. Garantia de entrega ágil.
            </div>

            {/* High Conversion WhatsApp action button */}
            <a
              href={clickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="w-full inline-flex items-center justify-center gap-2 gold-gradient hover:brightness-110 text-neutral-950 font-extrabold px-6 py-4 rounded-xl text-sm sm:text-base shadow-xl active:scale-[0.98] transition-all"
              id="pricing-cta-button"
            >
              <MessageSquare className="w-5 h-5 fill-neutral-950" />
              <span>Quero meu site</span>
            </a>

            {/* Alternative visual badges */}
            <div className="mt-5 flex items-center justify-center gap-3 text-[10px] text-neutral-500 font-bold uppercase tracking-wide">
              <span className="flex items-center gap-1">
                <CreditCard className="w-3.5 h-3.5 text-neutral-600" />
                PIX ou Cartão
              </span>
              <span>•</span>
              <span>Sem surpresas</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
