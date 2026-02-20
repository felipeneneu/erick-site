import { buttonVariants } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/hooks/use-whatsapp-link";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section
      id="aula-gratis"
      className="py-20 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-linear-to-b from-background via-primary/5 to-background" />
      <div className="relative z-10 container mx-auto px-4 text-center reveal">
        <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
          Transforme o medo em <span className="text-gradient">preparação</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body">
          Sua primeira aula é{" "}
          <span className="font-bold">totalmente gratuita</span>. Venha conhecer
          o método do Coach Erick na Academia Bob Fit e descubra como
          desenvolver confiança, disciplina e segurança real.
        </p>
        <div className="flex flex-col items-center gap-6">
          <Link
            href={WHATSAPP_LINK}
            className={buttonVariants({
              size: "lg",
              className:
                "font-display uppercase tracking-wider text-lg px-12 py-8 glow-red bg-primary hover:bg-primary/90",
            })}
          >
            Quero Minha Aula Gratuita
          </Link>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground font-body">
            <span className="flex items-center">
              ✓ Sem taxa de matrícula hoje
            </span>
            <span className="flex items-center">
              ✓ Ambiente para iniciantes
            </span>
            <span className="flex items-center">✓ Localizado em Jaú/SP</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
