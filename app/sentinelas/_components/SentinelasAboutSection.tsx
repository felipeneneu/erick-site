import Image from "next/image";
import Link from "next/link";
import { Award, Instagram } from "lucide-react";
import instructorImg from "@/public/assets/instructor.webp";
import { sentinelasPink } from "./content";

const instructorHighlights = [
  "Mais de 20 anos de experiência em artes marciais",
  "Instrutor de Krav Maga e defesa pessoal em Jaú/SP",
  "Metodologia com técnica, controle emocional e leitura de contexto",
  "Trabalho voltado para proteção, confiança e atitude",
];

export function SentinelasAboutSection() {
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
                alt="Instrutor Erick Reghine em Jaú"
                className="h-full w-full object-cover"
              />
            </div>
            <div
              className="absolute -left-4 -top-4 flex items-center gap-3 rounded-lg p-4 shadow-xl"
              style={{ backgroundColor: sentinelasPink }}
            >
              <Award className="size-8 text-black" />
              <div className="font-display text-xs font-bold uppercase leading-tight text-black">
                Instrutor do projeto
                <br />
                Erick Reghine
              </div>
            </div>
            <div
              className="absolute -bottom-4 -right-4 -z-10 h-24 w-24 rounded-lg border-2"
              style={{ borderColor: sentinelasPink }}
            />
          </div>

          <div>
            <p className="mb-3 text-center font-display text-sm uppercase tracking-[0.3em] text-white md:text-base">
              Para Mulheres e adolescentes
            </p>
            <h2
              id="instrutor-title"
              className="mb-6 text-center font-display text-4xl font-bold uppercase md:text-6xl"
            >
              <span className="text-pink-600">
                O que é o Projeto Sentinelas?
              </span>
            </h2>

            <div className="space-y-6 font-body leading-relaxed text-muted-foreground">
              <p>
                O Projeto Sentinelas - Sempre em Alerta é uma iniciativa social
                de impacto que visa promover a autodefesa, a segurança e o
                fortalecimento psicológico e físico de mulheres, crianças e
                adolescentes.
              </p>
              <p>
                Por meio de técnicas de defesa pessoal baseadas no Krav Maga e
                em outras metodologias, buscamos empoderar nossas participantes,
                diminuindo vulnerabilidades e promovendo a autoconfiança.
              </p>
              <p>
                Liderado pela <strong>Mestra Josiane Z. Alcântara</strong>,
                presidente da ATTAC Holding e da WKMF South America, o projeto
                conta com instrutores capacitados e com uma metodologia adaptada
                às necessidades específicas de cada grupo.
              </p>

              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <ul className="space-y-3 text-sm text-zinc-200">
                  {instructorHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span
                        className="mt-2 inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: sentinelasPink }}
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
              >
                <Instagram className="size-5" /> Siga no Instagram @erickreghine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
