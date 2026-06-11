/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, Instagram, Facebook, Shield, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function Footer() {
  const footerWhatsAppMsg = "Olá! Vi os modelos da Top Bio Link e quero criar um site para o meu negócio.";
  const clickWhatsAppUrl = getWhatsAppLink(footerWhatsAppMsg);

  const menuLinks = [
    { label: "Modelos", href: "#modelos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Oferta", href: "#oferta" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ];

  const nicheLinks = [
    { label: "Multimarcas", href: "#modelos" },
    { label: "Óticas", href: "#modelos" },
    { label: "Pet Shop", href: "#modelos" },
    { label: "Delivery", href: "#modelos" },
    { label: "Barbearia", href: "#modelos" },
    { label: "Estética", href: "#modelos" },
  ];

  return (
    <footer className="bg-black border-t border-white/5 text-neutral-400 py-16" id="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Presentation Column (5 grids) */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-white mb-4">
              TOP<span className="gold-text">BIOLINK</span>
            </span>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              Sites simples, modernos e profissionais para pequenos negócios. Exponha seus serviços ou produtos e capte leads qualificados diretamente pelo WhatsApp.
            </p>
            
            {/* Social Icons links bar */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={clickWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 text-[#D4AF37] hover:text-neutral-950 hover:gold-gradient flex items-center justify-center transition-all"
                title="Fale conosco no WhatsApp"
              >
                <MessageSquare className="w-4.5 h-4.5 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 text-[#D4AF37] hover:text-neutral-950 hover:gold-gradient flex items-center justify-center transition-all"
                title="Acompanhe o Instagram"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 text-[#D4AF37] hover:text-neutral-950 hover:gold-gradient flex items-center justify-center transition-all"
                title="Siga no Facebook"
              >
                <Facebook className="w-4.5 h-4.5 font-bold" />
              </a>
            </div>
          </div>

          {/* Links Column (3 grids) */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Páginas
            </h4>
            <ul className="space-y-2.5">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Niches Column (4 grids) */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-4">
              Modelos em Destaque
            </h4>
            <div className="grid grid-cols-2 gap-2.5">
              {nicheLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm font-semibold text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Legal bar detail footer */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs text-neutral-500 font-bold uppercase tracking-wider">
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} TOPBIOLINK • Todos os direitos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span className="font-extrabold text-neutral-400">topbiolink.com.br</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#D4AF37] font-extrabold uppercase tracking-widest">
            <Sparkles className="w-4.5 h-4.5" />
            <span>Sites com alta conversão</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
