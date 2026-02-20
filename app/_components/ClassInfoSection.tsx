import { Clock, MapPin, Users, CalendarDays } from "lucide-react";

const schedule = [
  { day: "Segunda", time: "Consulte", level: "Todos os Níveis" },
  { day: "Quarta", time: "Consulte", level: "Todos os Níveis" },
  { day: "Sexta", time: "Consulte", level: "Avançado" },
  { day: "Sábado", time: "Consulte", level: "Turma Mista" },
];

const ClassInfoSection = () => {
  return (
    <section id="horarios" className="py-20 md:py-24 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <p className="text-primary font-display uppercase tracking-[0.3em] text-sm mb-3">
            Horários de Treino
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">
            Escolha sua <span className="text-gradient">Aula</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 reveal">
            <div className="bg-card border border-border rounded-lg overflow-hidden shadow-xl">
              <div className="grid grid-cols-3 bg-secondary px-6 py-4 font-display uppercase text-xs md:text-sm tracking-wider text-secondary-foreground">
                <span>Dia</span>
                <span>Horário</span>
                <span>Nível</span>
              </div>
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="grid grid-cols-3 px-6 py-5 border-t border-border text-sm hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-foreground">
                    {item.day}
                  </span>
                  <span className="text-muted-foreground">{item.time}</span>
                  <span className="text-primary font-medium">{item.level}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground italic text-center lg:text-left">
              * Verifique a disponibilidade de vagas para aulas experimentais.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-8 reveal">
            {[
              {
                icon: MapPin,
                title: "Localização",
                desc: "Academia Bob Fit, Jaú - SP",
              },
              {
                icon: Users,
                title: "Turmas Reduzidas",
                desc: "Atenção individualizada para garantir a técnica correta.",
              },
              {
                icon: Clock,
                title: "Duração",
                desc: "Treinos intensos de 60 a 90 minutos",
              },
              {
                icon: CalendarDays,
                title: "Iniciantes",
                desc: "Não requer experiência prévia ou preparo físico específico.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display uppercase text-sm font-bold text-foreground tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassInfoSection;
