import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import { sentinelasSchedule } from "./content";

const scheduleHighlights = [
  {
    icon: MapPin,
    title: "Localização",
    desc: "Estação Ferroviária, Jaú - SP",
  },
  {
    icon: Users,
    title: "Para quem é",
    desc: "Mulheres de todas as idades e adolescentes.",
  },
  {
    icon: Clock,
    title: "Horário",
    desc: "Encontros às 19:30 com foco em aplicação real.",
  },
  {
    icon: CalendarDays,
    title: "Iniciantes",
    desc: "Não precisa experiência prévia para participar.",
  },
];

export function SentinelasScheduleSection() {
  return (
    <section id="horarios" className="section-gradient py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-pink-600">
            Como funciona
          </p>
          <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
            Escolha sua <span className="text-pink-600">turma</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-3">
            <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl">
              <div className="grid grid-cols-3 bg-secondary px-6 py-4 font-display text-xs uppercase tracking-wider text-secondary-foreground md:text-sm">
                <span>Dia</span>
                <span>Horário</span>
                <span>Público</span>
              </div>
              {sentinelasSchedule.map((item) => (
                <div
                  key={item.day}
                  className="grid grid-cols-3 border-t border-border px-6 py-5 text-sm transition-colors hover:bg-white/5"
                >
                  <span className="font-semibold text-foreground">{item.day}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                  <span className="font-medium text-primary">{item.level}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-xs italic text-muted-foreground lg:text-left">
              Aulas práticas em grupo com acompanhamento e orientação profissional.
            </p>
          </div>

          <div className="reveal space-y-8 lg:col-span-2">
            {scheduleHighlights.map((item) => (
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
}
