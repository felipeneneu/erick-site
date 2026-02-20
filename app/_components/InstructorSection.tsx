import instructorImg from "@/public/assets/instructor.png";
import Image from "next/image";

const InstructorSection = () => {
  return (
    <section id="instrutor" className="bg-background py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative reveal">
            <div className="aspect-3/4 rounded-lg overflow-hidden border border-white/10">
              <Image
                src={instructorImg}
                alt="Coach Erick Reghine - Instrutor de Krav Maga em Jaú"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg" />
          </div>

          <div className="reveal">
            <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-3">
              Especialista em Defesa Pessoal
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mb-6">
              Coach <span className="text-gradient">Erick Reghine</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
              <p>
                Com mais de <strong>20 anos de experiência</strong> em artes
                marciais, Erick Reghine é a principal referência em Krav Maga e
                Defesa Pessoal em Jaú/SP. Bacharel em Educação Física, ele une o
                rigor técnico à ciência do movimento para entregar um
                treinamento seguro e eficiente.
              </p>
              <p>
                Instrutor credenciado pela <strong>Polícia Federal</strong> e
                Pós-Graduado em Estratégias de Enfrentamento à Violência, Erick
                foca em uma abordagem prática: preparar pessoas comuns para
                situações reais, priorizando a inteligência emocional e a
                prontidão sobre técnicas meramente estéticas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              {[
                { value: "20+", label: "Anos de Treino" },
                { value: "Pós", label: "Graduado" },
                { value: "PF", label: "Credenciado" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs md:text-sm mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm italic text-muted-foreground">
              Atualmente ministrando aulas na Academia Bob Fit – Jaú/SP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
