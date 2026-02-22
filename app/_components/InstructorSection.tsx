import instructorImg from "@/public/assets/instructor.png";
import Image from "next/image";
import { Instagram, Award } from "lucide-react"; // Adicionei ícones de prêmio e insta
import Link from "next/link";

export const InstructorSection = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="aspect-3/4 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src={instructorImg}
                alt="Coach Erick Reghine - Instrutor Destaque Jaú"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge de Destaque Jaú */}
            <div className="absolute -top-4 -left-4 bg-primary p-4 rounded-lg shadow-xl flex items-center gap-3 animate-bounce-slow">
              <Award className="text-white size-8" />
              <div className="text-white font-display text-xs font-bold uppercase leading-tight">
                Instrutor Destaque <br /> Jaú 2024
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg -z-10" />
          </div>

          <div>
            <p className="text-white text-center font-display uppercase tracking-[0.3em] text-sm md:text-base mb-3 ">
              Conheça seu Instrutor
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6 text-center">
              <span className="text-gradient">Erick Reghine</span>
            </h2>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed">
              <p>
                Com mais de <strong>20 anos de experiência</strong> em artes
                marciais, Erick Reghine é uma das maiores referências em Krav
                Maga e Defesa Pessoal em Jaú/SP. Bacharel e Licenciado em
                Educação Física, ele une o rigor técnico à ciência do movimento.
              </p>
              <p>
                Instrutor credenciado pela <strong>Polícia Federal</strong> e
                Pós-Graduado em Estratégias de Enfrentamento à Violência, Erick
                foca em uma abordagem prática: preparar pessoas comuns para
                situações reais, priorizando a inteligência emocional e a
                prontidão sobre técnicas meramente estéticas.
              </p>

              {/* Nova Grade de Formação Técnica */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-white/5 p-6 rounded-xl border border-white/10">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />{" "}
                    Formação Marcial
                  </h4>
                  <ul className="space-y-1 opacity-80">
                    <li>• Faixa Preta de Karatê</li>
                    <li>• Instrutor de Boxe</li>
                    <li>• Krav Maga, Kapap e Ju-Jutsu</li>
                    <li>• Especialista em Lâminas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />{" "}
                    Graduações
                  </h4>
                  <ul className="space-y-1 opacity-80">
                    <li>• Judô e Jiu-Jitsu</li>
                    <li>• Kung-Fu e Kobudo</li>
                    <li>• Capoeira</li>
                  </ul>
                </div>
              </div>

              {/* Botão Instagram */}
              <Link
                href="https://instagram.com/erickreghine"
                target="_blank"
                className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors font-display text-sm font-bold uppercase tracking-wider"
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