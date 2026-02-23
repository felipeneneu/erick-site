import { Brain, Dumbbell, Heart, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Defesa Real",
    description:
      "Aprenda técnicas práticas para situações reais de risco, com foco em sobrevivência urbana e proteção de terceiros.",
  },
  {
    icon: Dumbbell,
    title: "Condicionamento Físico",
    description:
      "Queime calorias e desenvolva força explosiva com metodologia baseada em ciência do movimento e educação física.",
  },
  {
    icon: Brain,
    title: "Controle Emocional",
    description:
      "Treine sua mente para manter a calma sob pressão, com técnicas de inteligência emocional aplicadas à defesa pessoal.",
  },
  {
    icon: Heart,
    title: "Confiança Inabalável",
    description:
      "Sinta-se mais seguro no dia a dia com habilidades reais para gerenciar riscos e proteger quem está com você.",
  },
  {
    icon: Users,
    title: "Comunidade Bob Fit",
    description:
      "Treine em um ambiente respeitoso em Jaú, ao lado de pessoas que também buscam segurança, saúde e disciplina.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="section-gradient py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-primary">
            Por que escolher o Krav Maga
          </p>
          <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
            Muito mais do que <span className="text-gradient">luta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group reveal rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold uppercase text-foreground">
                {benefit.title}
              </h3>
              <p className="font-body leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
