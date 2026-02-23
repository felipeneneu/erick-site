import { buttonVariants } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/hooks/use-whatsapp-link";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section
      id="aula-gratis"
      className="cta-shell relative overflow-hidden py-20 md:py-24"
      aria-labelledby="cta-title"
    >
      <div className="cta-blob-left" aria-hidden="true" />
      <div className="cta-blob-right" aria-hidden="true" />
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />

      <div className="reveal relative z-10 container mx-auto px-4 text-center">
        <h2
          id="cta-title"
          className="mb-6 font-display text-4xl font-bold uppercase leading-tight md:text-6xl"
        >
          Transforme o medo em <span className="text-gradient">preparação</span>
        </h2>
        <p className="mx-auto mb-10 max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
          Sua primeira aula é <span className="font-bold">totalmente gratuita</span>.
          Venha conhecer o método do Instrutor Erick na Academia Bob Fit e
          descubra como desenvolver confiança, disciplina e segurança real.
        </p>

        <div className="flex flex-col items-center gap-6">
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              size: "lg",
              className:
                "cta-button bg-primary px-12 py-8 font-poppins text-lg font-black uppercase tracking-wider glow-red hover:bg-primary/90",
            })}
            aria-label="Quero minha aula gratuita pelo WhatsApp"
          >
            Quero Minha Aula Gratuita
          </Link>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 font-body text-sm text-muted-foreground">
            <span className="flex items-center">✓ Sem taxa de matrícula hoje</span>
            <span className="flex items-center">✓ Ambiente para iniciantes</span>
            <span className="flex items-center">✓ Localizado em Jaú/SP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
