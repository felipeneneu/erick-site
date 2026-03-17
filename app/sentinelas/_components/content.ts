import type { LucideIcon } from "lucide-react";
import { Brain, Heart, Shield, Users } from "lucide-react";

export const sentinelasPink = "oklch(59.2% 0.249 0.584)";

export const sentinelasMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=R.%20Pref.%20Francisco%20Tol%C3%AAdo%20Arruda%2C%20349%20-%20Ch%C3%A1cara%20Canhos%2C%20Ja%C3%BA%20-%20SP%2C%2017202-450";

export const sentinelasWhatsappUrl =
  "https://wa.me/5514991867781?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20tenho%20interesse%20no%20Projeto%20Sentinelas.";

export const sentinelasNavLinks = [
  { name: "Início", id: "inicio" },
  { name: "Benefícios", id: "beneficios" },
  { name: "Instrutor", id: "sobre" },
  { name: "Horários", id: "horarios" },
  { name: "Local", id: "contato" },
  { name: "Dúvidas", id: "duvidas" },
];

export type SentinelasBenefit = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const sentinelasBenefits: SentinelasBenefit[] = [
  {
    icon: Shield,
    title: "Defesa Real",
    description:
      "Aprenda a se defender em situações reais, com foco em prevenção, reação e consciência situacional.",
  },
  {
    icon: Heart,
    title: "Confiança e Autoestima",
    description:
      "O treino fortalece postura, presença e segurança para o dia a dia de mulheres e adolescentes.",
  },
  {
    icon: Brain,
    title: "Controle Emocional",
    description:
      "Treine resposta sob pressão com orientação prática, acolhimento e desenvolvimento progressivo.",
  },
  {
    icon: Users,
    title: "Ambiente Seguro",
    description:
      "As aulas acontecem em grupo, com acompanhamento profissional e espaço respeitoso para aprender.",
  },
];

export const sentinelasSchedule = [
  { day: "Terça-feira", time: "19:30", level: "Mulheres e adolescentes" },
  { day: "Quinta-feira", time: "19:30", level: "Mulheres e adolescentes" },
  { day: "Próxima turma", time: "17/03", level: "Vagas limitadas" },
];

export const sentinelasFaqItems = [
  {
    question: "Preciso ter experiência?",
    answer: "Não, as aulas são para iniciantes e todos os níveis.",
  },
  {
    question: "Tem idade mínima?",
    answer: "Sim, o projeto é voltado para adolescentes e mulheres adultas.",
  },
  {
    question: "É realmente gratuito?",
    answer: "Sim, o Projeto Sentinelas é totalmente gratuito.",
  },
];

export const sentinelasFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sentinelasFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const sentinelasLocationSchema = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Projeto Sentinelas",
  description:
    "Aulas gratuitas de defesa pessoal para mulheres e adolescentes em Jaú/SP.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Pref. Francisco Tolêdo Arruda, 349 - Chácara Canhos",
    addressLocality: "Jaú",
    addressRegion: "SP",
    postalCode: "17202-450",
    addressCountry: "BR",
  },
  sameAs: [sentinelasMapsUrl],
};
