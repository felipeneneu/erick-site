import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sentinelasFaqItems, sentinelasFaqJsonLd } from "./content";

export function SentinelasFaqSection() {
  return (
    <section id="duvidas" className="reveal py-20 md:py-24" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sentinelasFaqJsonLd) }}
      />

      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-pink-600">
            FAQ
          </p>
          <h2 id="faq-title" className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Principais dúvidas sobre o Projeto Sentinelas
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Respostas objetivas para quem quer começar com segurança e sem custo.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-card px-5 py-2 md:px-8">
          <Accordion type="single" collapsible>
            {sentinelasFaqItems.map((item, index) => (
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
