import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    question: "Krav Maga é para iniciantes?",
    answer:
      "Sim. As aulas são estruturadas para quem está começando e evoluem de forma progressiva, respeitando condicionamento, ritmo e nível técnico.",
  },
  {
    question: "Preciso ter preparo físico para começar?",
    answer:
      "Não. O preparo físico é desenvolvido durante os treinos. O foco inicial é aprender técnica, postura, leitura de risco e resposta segura.",
  },
  {
    question: "As aulas são mistas?",
    answer:
      "Sim. As turmas recebem homens e mulheres, com adaptações técnicas quando necessário para garantir segurança e eficiência na prática.",
  },
  {
    question: "Tem aula experimental em Jaú/SP?",
    answer:
      "Sim. Você pode agendar uma aula experimental para conhecer a metodologia, o ambiente e o estilo de ensino do Instrutor Erick Reghine.",
  },
  {
    question: "Qual a diferença entre aula regular e workshop?",
    answer:
      "A aula regular trabalha progressão contínua. O workshop aprofunda temas específicos, como defesa em ambientes urbanos e resposta sob estresse.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export function FaqSection() {
  return (
    <section
      id="duvidas"
      className="reveal py-20 md:py-24"
      aria-labelledby="faq-title"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            FAQ
          </p>
          <h2
            id="faq-title"
            className="mt-4 font-display font-bold text-3xl md:text-4xl"
          >
            Principais dúvidas sobre Krav Maga em Jaú
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Respostas objetivas para quem quer começar no Krav Maga com foco em
            defesa pessoal real.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-card px-5 py-2 md:px-8">
          <Accordion type="single" collapsible>
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem key={item.question} value={`item-${index}`}>
                <AccordionTrigger className="text-base text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
