export function VideoSection() {
  return (
    <section
      id="video"
      className="reveal section-gradient py-20 md:py-24"
      aria-labelledby="video-title"
    >
      <div className="container mx-auto px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Vídeo em destaque
          </p>
          <h2
            id="video-title"
            className="mt-4 font-display text-3xl font-bold md:text-4xl"
          >
            Veja o treino na prática
          </h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            Conteúdo real de aula para mostrar postura, técnica e aplicação do
            Krav Maga em situações do dia a dia.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-3 shadow-2xl">
          <div className="aspect-video overflow-hidden rounded-xl">
            <video
              className="h-full w-full object-cover"
              controls
              preload="metadata"
              playsInline
              aria-label="Vídeo de treino de Krav Maga com o instrutor Erick Reghine"
            >
              <source src="/videos/krav-maga-jau.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo HTML5.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
