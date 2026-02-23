"use client";

import { Award, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import instructorImg from "@/public/assets/instructor.webp";

const MARTIAL_GRADUATIONS = [
  "Faixa Preta de Karatê",
  "Instrutor de: ",
  "Boxe, Krav Maga, Kapap e Ju-Jutsu, técnicas com lâminas",
  "Graduado em: ",
  "Judô, Jiu-Jitsu, Kung-Fu, Kobudo e Capoeira",
];

const COURSES_AND_CERTIFICATIONS = [
  "Bacharel e Licenciado em Educação Física",
  "Pós-graduado em: ",
  "Iniciação e treinamentos em Lutas",
  "Estratégia de enfrentamento a violência",
  "Defesa pessoal aplicada a segurança pública e privada",
  "Krav Maga, sistema de defesa pessoal Israelense",
  "Inteligência emocional e comunicação eficaz",
];

const ACCREDITATION = [
  "Instrutor credenciado pela Polícia Federal",
  "Instrutor de defesa pessoal pela Confederação Brasileira de Artes Marciais",
];

export const InstructorSection = () => {
  const [activeTab, setActiveTab] = useState<
    "graduacoes" | "cursos" | "credenciamento"
  >("graduacoes");

  const tabItems =
    activeTab === "graduacoes"
      ? MARTIAL_GRADUATIONS
      : activeTab === "cursos"
        ? COURSES_AND_CERTIFICATIONS
        : ACCREDITATION;

  return (
    <section
      id="sobre"
      className="bg-background py-24"
      aria-labelledby="instrutor-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto grid grid-cols-1 items-center gap-16 px-2 lg:grid-cols-2">
          <div className="relative">
            <div className="aspect-3/4 overflow-hidden rounded-lg border border-white/10 shadow-2xl">
              <Image
                src={instructorImg}
                alt="Instrutor Erick Reghine em aula de Krav Maga em Jaú"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -left-4 -top-4 flex items-center gap-3 rounded-lg bg-primary p-4 shadow-xl">
              <Award className="size-8 text-white" />
              <div className="font-display text-xs font-bold uppercase leading-tight text-white">
                Instrutor Destaque
                <br />
                Jaú 2026
              </div>
            </div>
            <div className="-z-10 absolute -bottom-4 -right-4 h-24 w-24 rounded-lg border-2 border-primary" />
          </div>

          <div>
            <p className="mb-3 text-center font-display text-sm uppercase tracking-[0.3em] text-white md:text-base">
              Instrutor altamente qualificado
            </p>
            <h2
              id="instrutor-title"
              className="mb-6 text-center font-display text-4xl font-bold uppercase md:text-6xl"
            >
              <span className="text-gradient">Erick Reghine</span>
            </h2>

            <div className="space-y-6 font-body leading-relaxed text-muted-foreground">
              <p>
                Com mais de <strong>20 anos de experiência</strong> em artes
                marciais, Erick Reghine é uma das principais referências em Krav
                Maga e defesa pessoal em Jaú/SP.
              </p>
              <p>
                Sua metodologia une técnica, condicionamento e leitura de
                contexto para preparar pessoas comuns para situações reais, com
                foco em controle emocional e tomada de decisão sob pressão.
              </p>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <div
                  className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                  role="tablist"
                  aria-label="Formação do instrutor"
                >
                  <Button
                    type="button"
                    role="tab"
                    id="tab-graduacoes"
                    aria-controls="panel-graduacoes"
                    aria-selected={activeTab === "graduacoes"}
                    onClick={() => setActiveTab("graduacoes")}
                    className={`cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      activeTab === "graduacoes"
                        ? "bg-primary text-white"
                        : "bg-black/30 text-zinc-300 hover:bg-black/50"
                    }`}
                  >
                    Graduações Marciais
                  </Button>
                  <Button
                    type="button"
                    role="tab"
                    id="tab-cursos"
                    aria-controls="panel-cursos"
                    aria-selected={activeTab === "cursos"}
                    onClick={() => setActiveTab("cursos")}
                    className={`cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      activeTab === "cursos"
                        ? "bg-primary text-white"
                        : "bg-black/30 text-zinc-300 hover:bg-black/50"
                    }`}
                  >
                    Formação Academica
                  </Button>
                  <Button
                    type="button"
                    role="tab"
                    id="tab-credenciamento"
                    aria-controls="panel-credenciamento"
                    aria-selected={activeTab === "credenciamento"}
                    onClick={() => setActiveTab("credenciamento")}
                    className={`cursor-pointer rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                      activeTab === "credenciamento"
                        ? "bg-primary text-white"
                        : "bg-black/30 text-zinc-300 hover:bg-black/50"
                    }`}
                  >
                    Credenciamento
                  </Button>
                </div>

                <ul
                  className="mt-4 space-y-2 text-sm text-zinc-200"
                  role="tabpanel"
                  id={`panel-${activeTab}`}
                  aria-labelledby={`tab-${activeTab}`}
                >
                  {tabItems.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-2 inline-block h-2 w-2 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="https://instagram.com/erickreghine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-primary"
                aria-label="Abrir Instagram do instrutor Erick Reghine"
              >
                <Instagram className="size-5" /> Siga no Instagram @erickreghine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
