import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

const schedule = [
  { day: "Segunda-feira", time: "20:00 – 21:00", level: "Todos os níveis" },
  { day: "Quarta-feira", time: "20:00 – 21:00", level: "Todos os níveis" },
  {
    day: "Palestras e workshops",
    time: "Sob agendamento",
    level: "Corporativo",
  },
];

const ClassInfoSection = () => {
  return (
    <section id="horarios" className="section-gradient py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-primary">
            Horários de treino
          </p>
          <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
            Escolha sua <span className="text-gradient">aula</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl">
              <div className="grid grid-cols-3 bg-secondary px-6 py-4 font-display text-xs uppercase tracking-wider text-secondary-foreground md:text-sm">
                <span>Dia</span>
                <span>Horário</span>
                <span>Nível</span>
              </div>
              {schedule.map((item) => (
                <div
                  key={item.day}
                  className="grid grid-cols-3 border-t border-border px-6 py-5 text-sm transition-colors hover:bg-white/5"
                >
                  <span className="font-semibold text-foreground">
                    {item.day}
                  </span>
                  <span className="text-muted-foreground">{item.time}</span>
                  <span className="font-medium text-primary">{item.level}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs italic text-muted-foreground lg:text-left">
              * Consulte disponibilidade de vagas para aula experimental.
            </p>
          </div>

          <div className="reveal space-y-8 lg:col-span-2">
            {[
              {
                icon: MapPin,
                title: "Localização",
                desc: "Academia Bob Fit, Jaú - SP",
              },
              {
                icon: Users,
                title: "Turmas reduzidas",
                desc: "Atenção individualizada para garantir técnica correta.",
              },
              {
                icon: Clock,
                title: "Duração",
                desc: "Treinos intensos de 60 a 90 minutos.",
              },
              {
                icon: CalendarDays,
                title: "Iniciantes",
                desc: "Não exige experiência prévia nem preparo físico específico.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-snug text-muted-foreground">
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
