/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { MessageSquare, MessageSquareCode } from "lucide-react";
import { getWhatsAppLink } from "../data";

export default function WhatsAppFloating() {
  const floatingMsg = "Olá! Vi os modelos da Top Bio Link e quero criar um site para o meu negócio.";
  const clickWhatsAppUrl = getWhatsAppLink(floatingMsg);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2" id="whatsapp-floating-trigger">
      
      {/* Decorative hover tooltip speech box */}
      <div className="bg-neutral-900 border border-white/5 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl max-w-xs animate-bounce pointer-events-none flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
        <span>Atendimento Online</span>
      </div>

      <a
        href={clickWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-[0.93] shadow-emerald-500/20 group relative border border-emerald-400/20"
        title="Falar no WhatsApp com a Top Bio Link"
        id="whatsapp-floating-anchor"
      >
        {/* Dynamic pulsing halo waves background */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none opacity-75" />
        
        {/* Main WhatsApp Icon svg custom stylized */}
        <svg
          className="w-7 h-7 text-white fill-current transition-transform duration-300 group-hover:rotate-6 relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.752.002-2.607-1.01-5.059-2.85-6.902C16.645 2.11 14.195.071 11.597.071c-5.443 0-9.867 4.371-9.871 9.753-.002 1.713.453 3.39 1.317 4.878L1.97 20.73l6.113-1.604c1.424.815 2.946 1.24 4.564 1.24zm8.615-5.913c-.273-.137-1.62-.8-1.87-.892-.252-.093-.437-.137-.62.137-.183.273-.706.891-.865 1.073-.158.182-.317.205-.59.068-.273-.137-1.15-.424-2.19-1.353-.809-.722-1.354-1.616-1.513-1.89-.158-.273-.017-.42.12-.556.124-.122.274-.32.41-.48.137-.159.183-.273.274-.455.09-.182.046-.341-.022-.48-.068-.137-.62-1.493-.85-2.039-.224-.54-1.109-.54-1.87-.54h-.54c-.116 0-.306.025-.503.242-.197.218-.754.737-.754 1.799s.77 2.086.877 2.232c.108.146 1.515 2.313 3.67 3.243.513.221.913.353 1.224.452.516.164.985.14 1.356.085.414-.06 1.62-.663 1.85-1.303.229-.64.229-1.19.159-1.303-.069-.115-.252-.183-.526-.32z" />
        </svg>
      </a>
    </div>
  );
}
