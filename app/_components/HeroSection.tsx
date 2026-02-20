import heroImage from "@/public/assets/hero-krav.jpg";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { WHATSAPP_LINK } from "@/hooks/use-whatsapp-link";


const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center justify-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <Image
        src={heroImage}
        alt="Treinamento de Krav Maga em Jaú - Coach Erick Reghine"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 hero-overlay bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <p className="mb-4 font-display text-xs uppercase tracking-[0.24em] text-primary sm:text-sm md:text-base animate-fade-in">
          Krav Maga & Defesa Pessoal em Jaú/SP
        </p>

        <h1 className="mb-6 font-display text-4xl font-bold uppercase md:leading-[0.92] text-white sm:text-5xl md:text-7xl lg:text-8xl animate-fade-up">
          Krav Maga em Jaú/SP:
          <br />
          Esteja Pronto para
          <br />
          <span className="text-gradient">se defender</span>
        </h1>

        <p
          className="mx-auto mb-8 max-w-3xl font-body text-base font-light text-white/90 sm:text-lg md:text-xl animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Aprenda o sistema de defesa pessoal mais eficiente do mundo com um
          <strong> especialista credenciado pela Polícia Federal</strong>. Ganhe
          confiança, preparo físico e segurança real para você e sua família.
        </p>

        <div
          className="mx-auto flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({
              className:
                "h-12 w-full px-6 font-display text-sm uppercase tracking-[0.12em] glow-red bg-primary cursor-pointer hover:bg-primary/90 sm:h-14 sm:w-auto sm:px-8 sm:text-base",
              size: "lg",
            })}
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
          >
            Conhecer o Método
          </Link>
        </div>

        <p className="mt-6 text-sm text-white/75 font-body animate-fade-in">
          Treinos na Academia Bob Fit
        </p>
      </div>
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
