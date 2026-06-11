/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, MessageSquare, Check, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { getWhatsAppLink } from "../data";

export default function Hero() {
  const heroWhatsAppMsg = "Olá! Quero criar meu site com a Top Bio Link por 12x de R$ 30. Pode me explicar como funciona?";
  const ctaWhatsAppUrl = getWhatsAppLink(heroWhatsAppMsg);

  const keyBulletPoints = [
    "Modelos reais por nicho",
    "Ideal para pequenos negócios",
    "Botão direto para WhatsApp",
    "Oferta de lançamento: 12x de R$ 30",
  ];

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center bg-[#0B0B0C] overflow-hidden"
    >
      {/* Background radial gold glow lights */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-amber-500/5 blur-[150px] pointer-events-none" />
      
      {/* Subtle Grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copywriting Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Launching special badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-neutral-900 border border-white/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-neutral-300">LANÇAMENTO 2024</span>
              <span className="gold-text font-extrabold">• APENAS R$ 30/MÊS</span>
            </motion.div>

            {/* Main Catchy Title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-[1.05]"
              id="hero-title"
            >
              Escolha um modelo pronto e tenha um{" "}
              <span className="gold-text block sm:inline">
                site profissional
              </span>{" "}
              para o seu negócio.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-400 leading-relaxed max-w-2xl"
              id="hero-subtitle"
            >
              Sites modernos para pequenos negócios, com botão para WhatsApp, redes sociais e modelos prontos por nicho para você visualizar antes de contratar.
            </motion.p>

            {/* Quick bullets highlights with checks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-lg mb-10"
              id="hero-bullet-grid"
            >
              {keyBulletPoints.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-neutral-900/60 border border-white/5 px-4 py-3 rounded-xl hover:border-gold/30 transition-all duration-300">
                  <div className="flex-shrink-0 gold-gradient text-neutral-950 p-1 rounded-lg font-bold">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <span className="text-sm font-semibold text-neutral-200">{bullet}</span>
                </div>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              id="hero-cta-buttons"
            >
              <a
                href="#modelos"
                className="inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-white font-bold px-7 py-4 rounded-xl text-base shadow-sm transition-all"
              >
                <span>Ver modelos disponíveis</span>
                <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
              </a>
              <a
                href={ctaWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center gap-2 gold-gradient hover:brightness-110 text-neutral-950 font-extrabold px-7 py-4 rounded-xl text-base shadow-xl shadow-amber-500/10 transition-all"
              >
                <MessageSquare className="w-5 h-5 fill-neutral-950" />
                <span>Quero meu site</span>
              </a>
            </motion.div>

          </div>

          {/* Right Side: Decorative composition display of multiple site formats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative flex items-center justify-center mt-8 lg:mt-0"
            id="hero-visual-showcase"
          >
            {/* Custom styled modern frame */}
            <div className="relative group p-1.5 bg-neutral-900 rounded-3xl shadow-2xl overflow-hidden max-w-sm sm:max-w-md w-full border border-gold">
              <div className="absolute inset-x-0 top-0 h-1 gold-gradient" />
              
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
                alt="Top Bio Link - Modelos de Sites Profissionais"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/3] sm:aspect-square object-cover rounded-2xl opacity-90 group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Decorative Floating Status Layer overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/90 backdrop-blur-md border border-white/5 p-4 rounded-2xl flex items-center justify-between shadow-xl">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">PROJETO PROFISSIONAL</div>
                  <div className="text-sm font-bold text-white mt-0.5">Sites Prontos por Nicho</div>
                </div>
                <div className="flex items-center gap-1.5 bg-neutral-900/80 text-white font-semibold text-xs px-2.5 py-1 rounded-full border border-gold">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse" />
                  100% Responsivo
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
