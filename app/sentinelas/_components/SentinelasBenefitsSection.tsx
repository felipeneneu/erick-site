import { sentinelasBenefits } from "./content";

export function SentinelasBenefitsSection() {
  return (
    <section id="beneficios" className="section-gradient py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-pink-600">
            Por que participar
          </p>
          <h2 className="font-display text-4xl font-bold uppercase md:text-5xl">
            Muito mais do que <span className="text-pink-600">aula</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {sentinelasBenefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group reveal rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:border-primary/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 font-display text-xl font-semibold uppercase text-foreground">
                {benefit.title}
              </h3>
              <p className="font-body leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        <div className="reveal mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-lg font-semibold text-white md:text-xl">
            Você não precisa ser forte para começar. Você fica forte no processo.
          </p>
        </div>
      </div>
    </section>
  );
}
