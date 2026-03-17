import { Check } from "lucide-react";
import { InteractiveOrbButton } from "@/app/_components/InteractiveOrbButton";
import { sentinelasWhatsappUrl } from "./content";

export function SentinelasCtaSection() {
  return (
    <section
      id="inscricao"
      className="cta-shell relative overflow-hidden py-20 md:py-24"
      aria-labelledby="cta-title"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgb(24 24 24) 0%, rgb(255 67 159 / 0.05) 50%, rgb(24 24 24) 100%)",
        }}
      />

      <div className="reveal relative z-10 container mx-auto px-4 text-center">
        <h2
          id="cta-title"
          className="mb-6 font-display text-4xl font-bold uppercase leading-tight md:text-6xl"
        >
          Sua segurança começa com <span className="text-pink-600">uma decisão</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
          Não espere precisar reagir para aprender. Reserve sua vaga no Projeto
          Sentinelas e participe das aulas gratuitas em Jaú/SP.
        </p>

        <div className="flex flex-col items-center gap-6">
          <InteractiveOrbButton
            href={sentinelasWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 px-12 py-8 font-poppins text-lg font-black tracking-wider"
          >
            Quero participar
          </InteractiveOrbButton>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-body text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Gratuito
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Iniciantes
            </span>
            <span className="flex items-center gap-2">
              <Check className="size-4 text-primary" /> Jaú/SP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
