import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatar = [
  "/avatares/xanda.png",
  "/avatares/nana.png",
  "/avatares/malucao.png",
];

const testimonials = [
  {
    name: "Alexandra",
    role: "Aluno há 9 meses",
    quote:
      "Cheguei sem experiência nenhuma e confesso que tinha receio. Hoje me sinto muito mais segura e confiante no meu dia a dia. A didática do Erick é impecável.",
    avatar: avatar[0],
  },
  {
    name: "Jane Oliveira",
    role: "Aluna há 1 ano",
    quote:
      "Como mulher, aprender defesa pessoal real foi libertador. O ambiente na Bob Fit é respeitoso e as aulas nos preparam para situações que realmente podem acontecer.",
    avatar: avatar[1],
  },
  {
    name: "Marcos L.",
    role: "Aluno há 6 meses",
    quote:
      "O Krav Maga mudou meu condicionamento e meu foco. O Erick é um profissional de alto nível que sabe adaptar o treino para quem está começando agora.",
    avatar: avatar[2],
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-3">
            Depoimentos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
            O que nossos <span className="text-gradient">Alunos dizem</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col h-full bg-card border border-border rounded-lg p-8 hover:border-primary/40 transition-all duration-300 shadow-sm reveal"
            >
              {/* Parte Superior: Estrelas e Texto */}
              <div className="grow">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground font-body leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Parte Inferior: Nome e Avatar (Alinhados) */}
              <div className="flex justify-between items-center pt-6 border-t border-border/50">
                <div className="flex flex-col">
                  <p className="font-display font-semibold text-foreground uppercase tracking-tight text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-[10px] md:text-xs uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>

                <Avatar className="size-12 border-2 border-primary/20">
                  <AvatarImage src={t.avatar} alt={t.name} />
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <p className="text-muted-foreground text-sm font-body">
            Mais de <strong>500 alunos</strong> treinados com foco em segurança
            e resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
