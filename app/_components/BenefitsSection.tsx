import { Shield, Dumbbell, Brain, Heart, Users } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Defesa Real",
    description:
      "Aprenda técnicas práticas desenvolvidas para situações reais de rua, focadas em sobrevivência urbana e proteção de terceiros.",
  },
  {
    icon: Dumbbell,
    title: "Condicionamento Físico",
    description:
      "Queime calorias e desenvolva força explosiva com uma metodologia baseada na ciência do movimento e educação física.",
  },
  {
    icon: Brain,
    title: "Controle Emocional",
    description:
      "Treine sua mente para manter a calma sob pressão, utilizando técnicas de inteligência emocional aplicadas ao combate.",
  },
  {
    icon: Heart,
    title: "Confiança Inabalável",
    description:
      "Sinta-se seguro para caminhar com tranquilidade, sabendo que você possui as habilidades necessárias para gerenciar riscos.",
  },
  {
    icon: Users,
    title: "Comunidade Bob Fit",
    description:
      "Treine em um ambiente respeitoso e motivador em Jaú, ao lado de pessoas que buscam o mesmo objetivo: segurança e saúde.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 md:py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-3">
            Por que escolher o Krav Maga
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
            Muito mais do que <span className="text-gradient">luta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300 group reveal"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold uppercase mb-3 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
