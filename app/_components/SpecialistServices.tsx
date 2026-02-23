const SPECIALIST_SERVICES = [
  {
    title: "Empresas",
    desc: "Palestras, workshops e treinamentos para porteiros, controladores de acesso e fiscais.",
  },
  {
    title: "Segurança Pública",
    desc: "Capacitação para guardas municipais e policiais civis e militares.",
  },
  {
    title: "Defesa Pessoal",
    desc: "Cursos com foco em inteligência emocional e enfrentamento à violência.",
  },
] as const;

export const SpecialistServices = () => {
  return (
    <section
      aria-labelledby="specialist-services-title"
      className="reveal border-y border-white/5 bg-secondary/20 py-16"
    >
      <div className="container mx-auto px-4">
        <h2
          id="specialist-services-title"
          className="mb-12 text-center font-display text-2xl font-bold uppercase tracking-widest text-primary"
        >
          Especialista em Treinamentos Corporativos e Táticos
        </h2>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          {SPECIALIST_SERVICES.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/5 bg-background p-6"
            >
              <h3 className="mb-2 font-display font-bold uppercase text-white">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
