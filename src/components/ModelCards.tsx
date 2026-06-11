/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { ExternalLink, MessageSquare, Search, Sparkles } from "lucide-react";
import { nicheModels, getWhatsAppLink } from "../data";
import { motion } from "motion/react";

export default function ModelCards() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos os Nichos" },
    { id: "moda", label: "Moda & Compras" },
    { id: "servicos", label: "Serviços Profissionais" },
    { id: "alimentacao", label: "Alimentação & Delivery" },
    { id: "beleza", label: "Estética / Beleza / Pet" },
  ];

  // Helper helper to assign categories dynamically for filters
  const getModelCategory = (id: string): string => {
    if (id === "multimarcas" || id === "moda-feminina" || id === "oticas" || id === "mercadinho") return "moda";
    if (id === "advogado" || id === "corretor" || id === "assistencia-tecnica" || id === "oficina") return "servicos";
    if (id === "delivery") return "alimentacao";
    if (id === "barbearia" || id === "salao-estetica" || id === "clinica-estetica" || id === "petshop") return "beleza";
    return "servicos";
  };

  const filteredModels = useMemo(() => {
    return nicheModels.filter((model) => {
      const categoryMatch = selectedCategory === "todos" || getModelCategory(model.id) === selectedCategory;
      const searchLower = searchQuery.toLowerCase();
      const stringMatch =
        model.name.toLowerCase().includes(searchLower) ||
        model.description.toLowerCase().includes(searchLower) ||
        model.keywords.some((kw) => kw.toLowerCase().includes(searchLower));
      return categoryMatch && stringMatch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="modelos" className="py-24 bg-black border-b border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.01)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#D4AF37] font-semibold text-xs uppercase tracking-[0.2em] bg-white/5 border border-white/5 px-3.5 py-1.5 rounded-full">
            Vitrine Interativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-5 tracking-tighter">
            Veja modelos reais por nicho
          </h2>
          <p className="text-neutral-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Clique no segmento do seu negócio para experimentar um exemplo real funcionando. Descubra como seu site ficará no ar.
          </p>
        </div>

        {/* Brand/Search & Categories Filters Control bar */}
        <div className="bg-neutral-905 border border-white/10 p-4 sm:p-5 rounded-2xl mb-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-5">
          
          {/* Categories select tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? "gold-gradient text-neutral-950 shadow-md"
                    : "bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-white/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-neutral-500">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Buscar nicho (ex: Ótica, Pet)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-900 text-white placeholder-neutral-500 text-sm pl-10 pr-4 py-2.5 rounded-xl border border-white/10 focus:border-[#D4AF37] outline-none transition-all"
            />
          </div>

        </div>

        {/* Models Cards Grid layout */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="models-list-grid">
            {filteredModels.map((model) => {
              const whatsappUrl = getWhatsAppLink(model.whatsappMessage);
              
              return (
                <div
                  key={model.id}
                  className="group bg-neutral-900 rounded-xl overflow-hidden border border-white/10 hover-gold transition-all duration-300 flex flex-col"
                  id={`model-${model.id}`}
                >
                  
                  {/* Clickable Image Container */}
                  <a
                    href={model.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    className="block relative aspect-[4/3] w-full overflow-hidden bg-neutral-950 group"
                    title={`Ver exemplo real de ${model.name}`}
                  >
                    {/* Dark gradient gloss overlay on hover */}
                    <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/40 transition-colors duration-300 z-10" />
                    
                    {/* Interactive "Clique aqui" mini-tooltip badge */}
                    <div className="absolute top-3 right-3 bg-neutral-950/90 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold text-[#D4AF37] flex items-center gap-1.5 z-20 shadow-md group-hover:border-[#D4AF37] transition-colors">
                      <ExternalLink className="w-3 h-3" />
                      <span>Ver Demo Real</span>
                    </div>

                    <img
                      src={model.imageUrl}
                      alt={`Site profissional modelo ${model.name}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </a>

                  {/* Body Info Content */}
                  <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                          {model.name}
                        </h3>
                        <span className="text-[9px] bg-neutral-950 border border-white/5 text-neutral-400 py-1 px-2 rounded-full font-extrabold uppercase tracking-widest">
                          Editável
                        </span>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                        {model.description}
                      </p>
                    </div>

                    {/* Action buttons footer */}
                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                      
                      {/* Left: View Demo URL */}
                      <a
                        href={model.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-850 border border-white/5 text-neutral-200 hover:text-white font-semibold text-xs py-2.5 rounded-lg transition-all"
                        id={`btn-demo-${model.id}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[#D4AF37]" />
                        <span>Ver modelo</span>
                      </a>

                      {/* Right: Lead WhatsApp conversion */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        referrerPolicy="no-referrer"
                        className="flex items-center justify-center gap-2 gold-gradient hover:brightness-110 text-neutral-950 font-extrabold text-xs py-2.5 rounded-lg transition-all active:scale-[0.98]"
                        id={`btn-order-${model.id}`}
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-neutral-950" />
                        <span>Quero esse</span>
                      </a>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Empty search state fallback */
          <div className="text-center bg-neutral-900 border border-white/10 py-16 px-4 rounded-3xl max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-neutral-600 mx-auto mb-4" />
            <h3 className="text-base font-bold text-white">Nenhum nicho encontrado</h3>
            <p className="text-neutral-500 text-xs mt-2">
              Não encontramos resultados para "{searchQuery}". Tente buscar por termos genéricos como "vestido", "bebel", "tapa" ou limpe os filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("todos");
              }}
              className="mt-6 text-xs text-[#D4AF37] underline font-bold hover:text-white"
            >
              Resetar busca e categorias
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
