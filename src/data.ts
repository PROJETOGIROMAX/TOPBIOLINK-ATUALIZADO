/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NicheModel, IncludedFeature, HowItWorksStep, FAQItem, BenefitItem } from "./types";

export const whatsappNumber = "5521969060505";

export const nicheModels: NicheModel[] = [
  {
    id: "multimarcas",
    name: "Multimarcas",
    description: "Site vitrine para destacar produtos, preços e atendimento pelo WhatsApp com araras organizadas e visual moderno.",
    imageUrl: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://multimarcas.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Multimarcas da Top Bio Link e quero um site parecido para minha loja.",
    keywords: ["site para loja de roupas", "site multimarcas", "vitrine de roupas", "venda pelo whatsapp"]
  },
  {
    id: "oticas",
    name: "Óticas",
    description: "Site moderno para divulgar armações elegantes, lentes, óculos de sol, exames e atendimento de excelência.",
    imageUrl: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://oticas.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo de Óticas da Top Bio Link e quero um site parecido para minha ótica.",
    keywords: ["site para ótica", "site de óculos", "lentes e armações", "ótica moderna"]
  },
  {
    id: "petshop",
    name: "Pet Shop / Banho e Tosa",
    description: "Site para serviços de banho, tosa estilizada, produtos pet e agendamentos práticos.",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://petshop.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Pet Shop da Top Bio Link e quero um site parecido para meu negócio.",
    keywords: ["site para pet shop", "site de banho e tosa", "agendamento pet", "serviço de pet"]
  },
  {
    id: "corretor",
    name: "Corretor de Imóveis",
    description: "Site para apresentar imóveis de alto padrão, regiões de atendimento e captação direta de interessados.",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://corretor.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Corretor da Top Bio Link e quero um site parecido para meu atendimento imobiliário.",
    keywords: ["site para corretor de imóveis", "site imobiliária", "venda de casas", "corretor de imóveis"]
  },
  {
    id: "advogado",
    name: "Advogado",
    description: "Site institucional altamente elegante para advogados independentes e pequenos escritórios estabelecerem confiança.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://advogado.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Advogado da Top Bio Link e quero um site parecido para meu escritório.",
    keywords: ["site para advogado", "site jurídico", "escritório de advocacia", "consultoria de leis"]
  },
  {
    id: "delivery",
    name: "Lanchonete / Açaí / Delivery",
    description: "Cardápio digital premium com visual suculento, produtos, combos exclusivos e pedidos direto no WhatsApp.",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://delivery.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Delivery da Top Bio Link e quero um site parecido para minha lanchonete.",
    keywords: ["site para delivery", "cardápio digital", "site lanchonete", "site de açaí"]
  },
  {
    id: "barbearia",
    name: "Barbearia",
    description: "Site premium para exibição de cortes degradê, barba alinhada, pacotes e agendamentos rápidos.",
    imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://barbearia.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Barbearia da Top Bio Link e quero um site parecido para minha barbearia.",
    keywords: ["site para barbearia", "barbeiro profissional", "cortar cabelo", "agendamento de barba"]
  },
  {
    id: "salao-estetica",
    name: "Salão de Beleza",
    description: "Site especializado para divulgar cuidados com cabelo, unhas perfeitas, maquiagem e pacotes especiais.",
    imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://salao.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Salão de Beleza da Top Bio Link e quero um site parecido para meu salão.",
    keywords: ["site para salão de beleza", "cabeleireira", "manicure", "serviço de estética"]
  },
  {
    id: "mercadinho",
    name: "Super Baratinho / Mercadinho",
    description: "Site para divulgar folhetos de ofertas diárias, hortifrúti fresco e recebimento de pedidos pelo WhatsApp.",
    imageUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://superbaratinho.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Super Baratinho da Top Bio Link e quero um site parecido para meu comércio.",
    keywords: ["site para mercadinho", "supermercado de bairro", "ofertas hortifrúti", "vendas locais"]
  },
  {
    id: "oficina",
    name: "Oficina / Lava-jato",
    description: "Site para exibição de detalhamento estético químico, lava-jato, polimento profissional ou mecânica.",
    imageUrl: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://oficina.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Oficina da Top Bio Link e quero um site parecido para meu negócio automotivo.",
    keywords: ["site para oficina", "site para lava-jato", "reparo automotivo", "detalhamento de carros"]
  },
  {
    id: "assistencia-tecnica",
    name: "Assistência Técnica",
    description: "Site institucional para agilizar orçamentos de consertos de smartphones, notebooks e eletrônicos.",
    imageUrl: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://assistencia.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Assistência Técnica da Top Bio Link e quero um site parecido para minha assistência.",
    keywords: ["site para assistência técnica", "conserto de celular", "reparo técnico de computador", "manutenção eletrônica"]
  },
  {
    id: "moda-feminina",
    name: "Moda Feminina",
    description: "Boutique de alto requinte com coleções de looks modernos, vestidos e facilidade de compra rápida.",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://moda.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Moda Feminina da Top Bio Link e quero um site parecido para minha loja.",
    keywords: ["site para loja de roupas", "moda feminina premium", "boutique feminina", "looks instagram"]
  },
  {
    id: "clinica-estetica",
    name: "Clínica Estética",
    description: "Ambiente sofisticado com sensação de bem-estar para demonstrar procedimentos faciais e agendar consultas.",
    imageUrl: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://estetica.topbiolink.com.br",
    whatsappMessage: "Olá! Vi o modelo Clínica Estética da Top Bio Link e quero um site parecido para minha clínica.",
    keywords: ["site para clínica estética", "estética facial", "procedimento embelezamento", "biomédica esteta"]
  }
];

export const includedFeatures: IncludedFeature[] = [
  {
    title: "Página Profissional Adaptada",
    description: "Estrutura moderna, excelente tipografia e adaptada perfeitamente com todas as cores e dados da sua marca.",
    iconName: "Layout"
  },
  {
    title: "Botão Direto para WhatsApp",
    description: "Chame rápido! O visitante clica e envia uma mensagem personalizada direto ao seu número comercial.",
    iconName: "MessageSquare"
  },
  {
    title: "Redes Sociais Inteligentes",
    description: "Integração completa e botões diretos para o seu perfil do Instagram e página comercial do Facebook.",
    iconName: "Share2"
  },
  {
    title: "Produtos ou Serviços em Destaque",
    description: "Exponha seus melhores serviços, produtos ou combos de maneira irresistível e ultra-organizada.",
    iconName: "Sparkles"
  },
  {
    title: "Visual Bonito e Fluidos para Celular",
    description: "Site 100% responsivo. Carregamento instantâneo em qualquer tela de celular com experiência impecável.",
    iconName: "Smartphone"
  },
  {
    title: "Link Pronto para Divulgar",
    description: "Domínio próprio ou link amigável, ideal para você colar na bio do Instagram, cartões virtuais ou anúncios.",
    iconName: "ExternalLink"
  },
  {
    title: "Baseada no Modelo Escolhido",
    description: "Sem surpresas! O seu site final terá a mesma estrutura profissional e estética do modelo que você gostou.",
    iconName: "CheckSquare"
  },
  {
    title: "Atendimento & Configuração",
    description: "Nossa equipe cuida de toda a configuração inicial e inserção dos seus primeiros conteúdos para você.",
    iconName: "UserCheck"
  }
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step: 1,
    title: "Escolha um modelo",
    description: "Veja abaixo os nossos modelos reais por nicho e escolha o mais parecido com seu negócio."
  },
  {
    step: 2,
    title: "Chame no WhatsApp",
    description: "Fale diretamente com a equipe da Top Bio Link e informe qual modelo você mais gostou."
  },
  {
    step: 3,
    title: "Envie suas informações",
    description: "Envie em minutos o nome do seu negócio, fotos, contatos, mídias sociais, produtos ou serviços."
  },
  {
    step: 4,
    title: "Receba seu site pronto!",
    description: "Seu site é adaptado pela nossa equipe e você recebe um link ultra-rápido pronto para começar a faturar."
  }
];

export const benefitItems: BenefitItem[] = [
  {
    title: "Mais profissionalismo",
    description: "Seu negócio passa muito mais confiança e credibilidade instantânea para quem encontra você na internet."
  },
  {
    title: "Atendimento mais rápido",
    description: "Sem formulários chatos ou voltas: o visitante clica no botão e já chama você diretamente no WhatsApp de prontidão."
  },
  {
    title: "Tudo em um só lugar",
    description: "Produtos, fotos de alta qualidade, redes sociais e meios de contato totalmente organizados em uma página compacta e moderna."
  },
  {
    title: "Ideal para redes sociais",
    description: "Destaque seu link na bio do Instagram, no status do seu WhatsApp Business e use-o em estratégias de divulgação local no Google."
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "O site é personalizado?",
    answer: "Sim! O site é estruturado com base no modelo profissional pronto por nicho que você escolheu, e adaptado pela nossa equipe com a sua logomarca, suas fotos, de acordo com as cores da sua marca e contendo as informações completas do seu negócio."
  },
  {
    question: "Posso escolher qualquer modelo?",
    answer: "Sim! Você tem total liberdade para escolher qualquer modelo de nicho que preferir, optando pelo que mais se aproxima ou se adapta à estética que você deseja no seu comércio."
  },
  {
    question: "O site tem WhatsApp integrado?",
    answer: "Com certeza. Todos os modelos contam com botões estratégicos de chamada rápida para o WhatsApp, além de um botão flutuante persistente para otimizar as suas conversões ao máximo."
  },
  {
    question: "Posso colocar Instagram e Facebook?",
    answer: "Sim! Inserimos ícones modernos e dinâmicos apontando diretamente para as suas principais redes sociais (Instagram, Facebook e até links de canais externos no YouTube ou TikTok)."
  },
  {
    question: "Tem loja virtual com carrinho de compras?",
    answer: "Não. Nosso foco são páginas ultrarrápidas de vendas estruturadas como 'site vitrine institucional'. Os seus visitantes visualizam tudo e finalizam o pedido ou orçamento chamando você direto no seu WhatsApp."
  },
  {
    question: "Qual o valor total contratado?",
    answer: "Nossa oferta de lançamento exclusiva custa apenas 12 vezes de R$ 30 (ou condições especiais com desconto para pagamentos à vista no PIX). Uma solução extremamente acessível para colocar seu comércio na internet."
  }
];

export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
