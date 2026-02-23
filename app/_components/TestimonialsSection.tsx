import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const avatars = [
  "/avatares/xanda.png",
  "/avatares/nana.png",
  "/avatares/malucao.png",
];

const testimonials = [
  {
    name: "Alexandra",
    role: "Aluna há 1 ano",
    quote:
      "Cheguei sem experiência e com receio. Hoje me sinto muito mais segura e confiante no dia a dia. A didática do Erick é impecável.",
    avatar: avatars[0],
  },
  {
    name: "Jane Oliveira",
    role: "Aluna há 9 meses",
    quote:
      "Como mulher, aprender defesa pessoal real foi libertador. O ambiente na Bob Fit é respeitoso e as aulas preparam para situações que podem acontecer.",
    avatar: avatars[1],
  },
  {
    name: "Lucas",
    role: "Aluno há 6 meses",
    quote:
      "O Krav Maga melhorou meu condicionamento e foco. O Erick é um profissional de alto nível e adapta o treino para quem está começando.",
    avatar: avatars[2],
  },
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="bg-background py-20 md:py-24" aria-labelledby="depoimentos-title">
      <div className="container mx-auto px-4">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-primary">
            Depoimentos
          </p>
          <h2 id="depoimentos-title" className="font-display text-4xl font-bold uppercase md:text-5xl">
            O que nossos <span className="text-gradient">alunos dizem</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="reveal flex h-full flex-col rounded-lg border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/40"
            >
              <div className="grow">
                <div className="mb-6 flex gap-1" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="mb-8 font-body italic leading-relaxed text-muted-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-border/50 pt-6">
                <div className="flex flex-col">
                  <p className="font-display text-sm font-semibold uppercase tracking-tight text-foreground">
                    {t.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-xs">
                    {t.role}
                  </p>
                </div>

                <Avatar className="size-12 border-2 border-primary/20">
                  <AvatarImage src={t.avatar} alt={`Foto de ${t.name}`} />
                  <AvatarFallback className="bg-primary/10 text-xs text-primary">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="font-body text-sm text-muted-foreground">
            Mais de <strong>500 alunos</strong> treinados com foco em segurança
            e resultados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
