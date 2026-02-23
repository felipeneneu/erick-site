const WORKSHOP_TOPICS = [
  "Defesa pessoal para iniciantes em ambientes urbanos",
  "Treinamento para porteiros, controladores de acesso e equipes de segurança",
  "Protocolos de resposta sob estresse e tomada de decisão rápida",
  "Simulações práticas para cenários reais de risco",
] as const;

export function WorkshopsSection() {
  return (
    <section
      id="workshops"
      className="reveal py-20 md:py-24"
      aria-labelledby="workshops-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl px-6 py-10 md:px-10">
          <header className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.25em] text-primary">
              Workshops
            </p>
            <h2
              id="workshops-title"
              className="mt-4 font-poppins text-3xl font-bold md:text-4xl"
            >
              Erick Reghine também realiza
              <br />
              <span className="text-gradient text-4xl uppercase md:text-5xl">
                Palestras e Workshops
              </span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:text-base">
              Além das aulas regulares, o instrutor oferece workshops temáticos
              para academias, empresas e grupos que buscam treinamento prático
              em defesa pessoal.
            </p>
          </header>

          <ul className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {WORKSHOP_TOPICS.map((topic) => (
              <li
                key={topic}
                className="rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-sm text-zinc-200 md:text-base"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
