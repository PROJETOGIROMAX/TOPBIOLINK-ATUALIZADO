/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { getWhatsAppLink } from "../data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Modelos", href: "#modelos" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Oferta", href: "#oferta" },
    { label: "Dúvidas", href: "#duvidas" },
    { label: "Contato", href: "#contato" },
  ];

  const headerWhatsAppMsg = "Olá! Vi o site da Top Bio Link e quero criar um site para meu negócio.";
  const clickWhatsAppUrl = getWhatsAppLink(headerWhatsAppMsg);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
      id="header-navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Small Badge */}
          <a href="#inicio" className="flex flex-col items-start gap-1 group">
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-white transition-colors">
              TOP<span className="gold-text font-black">BIOLINK</span>
            </span>
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold bg-white/5 border border-white/5 px-2 py-0.5 rounded">
              ⚡ Sites para pequenos negócios
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-neutral-400 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-[#D4AF37] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden sm:block">
            <a
              href={clickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              className="inline-flex items-center gap-2 gold-gradient hover:brightness-110 text-neutral-950 font-extrabold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-xl shadow-amber-500/10 transition-all active:scale-[0.98]"
              id="header-btn-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-neutral-950" />
              <span>Quero meu site</span>
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-neutral-400 hover:text-white focus:outline-none transition-colors"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-neutral-950 border-b border-neutral-800"
            id="mobile-drawer-container"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 shadow-inner">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-base font-semibold text-neutral-300 hover:text-white transition-colors py-2 border-b border-neutral-900"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={clickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  referrerPolicy="no-referrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 gold-gradient hover:brightness-110 text-neutral-950 font-extrabold px-5 py-3 rounded-xl shadow-lg transition-transform"
                  id="mobile-drawer-cta-btn"
                >
                  <MessageSquare className="w-5 h-5 fill-neutral-950" />
                  <span>Quero meu site</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
