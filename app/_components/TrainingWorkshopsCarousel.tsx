"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const CAROUSEL_ITEMS = [
  {
    title: "Treinamento funcional de Krav Maga",
    description:
      "Aula com foco em resposta rápida, postura e leitura de risco em situações reais.",
    srcDesktop: "/carousel/1.webp",
    srcMobile: "/carousel/mobile/1.webp",
    alt: "Treinamento funcional de Krav Maga em Jaú com turma em atividade prática",
  },
  {
    title: "Instrução técnica em workshop",
    description:
      "Workshop com correção técnica, progressão segura e aplicação para iniciantes.",
    srcDesktop: "/carousel/2.webp",
    srcMobile: "/carousel/mobile/2.webp",
    alt: "Instrutor conduzindo workshop técnico de defesa pessoal em Jaú",
  },
  {
    title: "Treino aplicado com orientação direta",
    description:
      "Treino orientado para confiança, controle emocional e eficiência sob pressão.",
    srcDesktop: "/carousel/3.webp",
    srcMobile: "/carousel/mobile/3.webp",
    alt: "Coach Erick Reghine orientando treino aplicado de Krav Maga",
  },
  {
    title: "Treinamento técnico orientado",
    description:
      "Prática de fundamentos com ajustes técnicos para evolução de desempenho no Krav Maga.",
    srcDesktop: "/carousel/4.webp",
    srcMobile: "/carousel/mobile/4.webp",
    alt: "Treinamento técnico com instrução de fundamentos em aula prática",
  },
] as const;

const AUTOPLAY_INTERVAL_MS = 5000;

export const TrainingWorkshopsCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current !== null) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    if (!api) return;

    stopAutoplay();
    autoplayRef.current = window.setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_INTERVAL_MS);
  }, [api, stopAutoplay]);

  useEffect(() => {
    if (!api) return;

    api.on("pointerDown", stopAutoplay);
    api.on("pointerUp", startAutoplay);
    startAutoplay();

    return () => {
      api.off("pointerDown", stopAutoplay);
      api.off("pointerUp", startAutoplay);
      stopAutoplay();
    };
  }, [api, startAutoplay, stopAutoplay]);

  return (
    <section
      id="treinamentos-workshops"
      aria-labelledby="carousel-title"
      className="reveal py-16"
    >
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Galeria
          </p>
          <h2
            id="carousel-title"
            className="mt-4 font-display text-3xl md:text-4xl font-bold"
          >
            Treinamentos, Workshops e Palestras
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Registros de aulas e workshops com foco em defesa pessoal, técnica e
            preparo para situações reais.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-xl md:max-w-5xl">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
          >
            <CarouselContent className="ml-0">
              {CAROUSEL_ITEMS.map((item) => (
                <CarouselItem key={item.title} className="pl-0">
                  <article>
                    <div className="relative aspect-4/5 overflow-hidden rounded-xl md:aspect-4/3">
                      <picture>
                        <source
                          media="(max-width: 767px)"
                          srcSet={item.srcMobile}
                        />
                        <img
                          src={item.srcDesktop}
                          alt={item.alt}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          draggable={false}
                        />
                      </picture>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-3 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-black/55 md:left-5 md:p-3.5"
              aria-label="Slide anterior"
            >
              <ArrowLeft className="size-5" />
            </button>

            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/30 bg-black/35 p-3 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-black/55 md:right-5 md:p-3.5"
              aria-label="Próximo slide"
            >
              <ArrowRight className="size-5" />
            </button>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
