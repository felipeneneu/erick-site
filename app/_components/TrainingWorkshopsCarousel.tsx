"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CAROUSEL_ITEMS = [
  {
    title: "Treinamento de defesa pessoal",
    description:
      "Tecnicas praticas para reacao rapida em situacoes reais de risco.",
    src: "/carousel/22c3ed7e-1859-4285-8bc8-199323db2c65.jfif",
    alt: "Treinamento de defesa pessoal em aula pratica de Krav Maga",
  },
  {
    title: "Workshop de fundamentos",
    description:
      "Aulas guiadas para iniciantes com base tecnica e controle emocional.",
    src: "/carousel/53153396-4272-43b1-a525-2cd8c3e5f992.jfif",
    alt: "Workshop de fundamentos com orientacao tecnica em grupo",
  },
  {
    title: "Workshop tatico aplicado",
    description:
      "Simulacoes de cenarios para desenvolver reflexo, estrategia e confianca.",
    src: "/carousel/6e1f75c2-c6d5-4b46-ada7-9857b5f4573d.jfif",
    alt: "Aplicacoes taticas em workshop de Krav Maga com instrutor",
  },
  {
    title: "Treino tecnico de Krav Maga",
    description:
      "Treinamento tecnico com foco em postura, precisao e resposta sob pressao.",
    src: "/carousel/8ee767ee-9ac0-42ee-8ea5-779f4da26c03.jfif",
    alt: "Treino tecnico de Krav Maga durante atividade orientada",
  },
] as const;

const AUTOPLAY_INTERVAL_MS = 5000;

export const TrainingWorkshopsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % CAROUSEL_ITEMS.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? CAROUSEL_ITEMS.length - 1 : current - 1,
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % CAROUSEL_ITEMS.length);
  };

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
            className="mt-4 font-display text-3xl md:text-4xl"
          >
            Treinamentos e workshops
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Registros de aulas e workshops com foco em defesa pessoal, tecnica e
            preparo para situacoes reais.
          </p>
        </header>

        <div className="relative mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/30">
          <AspectRatio ratio={4 / 3} className="relative">
            <ul className="relative h-full" aria-live="polite">
              {CAROUSEL_ITEMS.map((item, index) => {
                const isActive = index === activeIndex;

                return (
                  <li
                    key={item.title}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}
                    aria-hidden={!isActive}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 960px"
                      className="object-cover"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent" />

                    <article className="absolute bottom-0 left-0 right-0 p-5 md:p-8">
                      <h3 className="font-display text-2xl text-white md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm text-zinc-200 md:text-base">
                        {item.description}
                      </p>
                    </article>
                  </li>
                );
              })}
            </ul>

            <div className="absolute inset-x-0 bottom-5 z-20 flex items-center justify-center gap-3">
              {CAROUSEL_ITEMS.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Ir para slide ${index + 1}: ${item.title}`}
                  aria-pressed={index === activeIndex}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black/70"
              aria-label="Slide anterior"
            >
              <ArrowLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={goToNext}
              className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/20 bg-black/45 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-black/70"
              aria-label="Proximo slide"
            >
              <ArrowRight className="size-4" />
            </button>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
};
