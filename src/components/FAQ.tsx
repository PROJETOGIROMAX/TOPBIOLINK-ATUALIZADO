/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems } from "../data";
import { motion, AnimatePresence } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="duvidas" className="py-24 bg-black border-b border-white/5 relative">
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header titles */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full">
            Perguntas & Respostas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-5 tracking-tighter">
            Dúvidas frequentes
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Tem alguma pergunta sobre os prazos, o processo de criação ou as mensalidades? Encontre respostas rápidas abaixo.
          </p>
        </div>

        {/* Collapsible Accordion Grid layout */}
        <div className="space-y-3.5" id="faq-accordion-rows">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`bg-neutral-900 rounded-xl border transition-all duration-300 ${
                  isOpen ? "border-[#D4AF37]" : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accordion clickable header button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-semibold text-white focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-toggle-${index}`}
                >
                  <div className="flex items-start gap-4 pr-4">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors duration-300 ${isOpen ? "text-[#D4AF37]" : "text-neutral-500"}`} />
                    <span className="text-base sm:text-lg leading-tight font-bold">{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "transform rotate-180 text-[#D4AF37]" : ""
                    }`}
                  />
                </button>

                {/* Collapsible detail panel using motion for super smooth animations */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-neutral-400 leading-relaxed font-semibold">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
