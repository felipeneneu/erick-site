import heroImage from "@/public/assets/hero-krav.webp";
import { buttonVariants } from "@/components/ui/button";
import { WHATSAPP_LINK } from "@/hooks/use-whatsapp-link";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center justify-center overflow-hidden pb-16 pt-24 md:pt-28"
      aria-labelledby="hero-title"
    >
      <Image
        src={heroImage}
        alt="Treinamento de Krav Maga em Jaú com o instrutor Erick Reghine"
        fill
        sizes="100vw"
        className="hero-image-zoom object-cover"
        priority
      />
      <div className="hero-overlay absolute inset-0 bg-black/50" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="mb-4 animate-fade-in font-display text-xs uppercase tracking-[0.24em] text-primary sm:text-sm md:text-base">
          Krav Maga e Defesa Pessoal em Jaú/SP
        </p>

        <h1
          id="hero-title"
          className="mb-6 animate-fade-up font-display text-4xl font-bold uppercase text-white sm:text-5xl md:text-7xl md:leading-[0.92] lg:text-8xl"
        >
          Krav Maga em Jaú/SP:
          <br />
          Esteja Pronto para
          <br />
          <span className="text-gradient">se defender</span>
        </h1>

        <p
          className="mx-auto mb-8 max-w-3xl animate-fade-up font-body text-base font-light text-white/90 sm:text-lg md:text-xl"
          style={{ animationDelay: "0.2s" }}
        >
          Aprenda o sistema de defesa pessoal mais eficiente do mundo com um
          <strong> especialista credenciado pela Polícia Federal</strong>.
          Ganhe confiança, preparo físico e segurança real para você e sua
          família.
        </p>

        <div
          className="mx-auto flex w-full max-w-xl animate-fade-up flex-col justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className:
                "h-12 w-full cursor-pointer bg-primary px-6 font-display text-sm uppercase tracking-[0.12em] glow-red hover:bg-primary/90 sm:h-14 sm:w-auto sm:px-8 sm:text-base",
              size: "lg",
            })}
            aria-label="Agendar aula experimental grátis pelo WhatsApp"
          >
            Agendar Aula Experimental Grátis
          </Link>

          <Link
            href="#beneficios"
            className={buttonVariants({
              variant: "outline",
              size: "lg",
              className:
                "h-12 w-full border-white/30 bg-white/5 px-6 font-display text-sm uppercase tracking-[0.12em] text-white hover:bg-white/15 sm:h-14 sm:w-auto sm:px-8 sm:text-base",
            })}
            aria-label="Ir para a seção de benefícios do Krav Maga"
          >
            Conhecer o Método
          </Link>
        </div>

        <p className="mt-6 animate-fade-in font-body text-sm text-white/75">
          Treinos na Academia Bob Fit
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-2">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
