import type { CSSProperties } from "react";
import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { sentinelasMapsUrl, sentinelasPink } from "./content";

const lightThemeVars: CSSProperties = {
  "--background": "oklch(0.97 0.004 85)",
  "--foreground": "oklch(0.24 0.01 85)",
  "--card": "oklch(0.995 0.003 85)",
  "--card-foreground": "oklch(0.24 0.01 85)",
  "--secondary": "oklch(0.94 0.01 85)",
  "--secondary-foreground": "oklch(0.3 0.012 85)",
  "--muted": "oklch(0.92 0.008 85)",
  "--muted-foreground": "oklch(0.48 0.01 85)",
  "--border": "oklch(0.86 0.01 85)",
  "--input": "oklch(0.86 0.01 85)",
} as CSSProperties;

export function SentinelasLocationSection() {
  return (
    <section
      id="contato"
      className="location-light bg-secondary py-20 md:py-24"
      aria-labelledby="location-title"
      style={lightThemeVars}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="reveal w-full space-y-6 lg:w-1/3">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <MapPin className="size-3" /> Onde acontece
            </div>
            <h2
              id="location-title"
              className="font-display text-4xl font-bold uppercase leading-tight text-foreground"
            >
              Nossa <span className="text-pink-600">localização</span>
            </h2>
            <p className="font-body text-muted-foreground">
              O Projeto Sentinelas acontece na <strong>Estação Ferroviária</strong>,
              em Jaú/SP, com foco em acesso, acolhimento e segurança.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-border bg-background p-3">
                  <MapPin className="size-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Endereço</p>
                  <address className="not-italic text-sm text-muted-foreground">
                    Estação Ferroviária
                    <br />
                    R. Pref. Francisco Tolêdo Arruda, 349 - Chácara Canhos
                    <br />
                    Jaú - SP
                    <br />
                    CEP: 17202-450
                  </address>
                </div>
              </div>
            </div>

            <Link
              href={sentinelasMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 font-poppins text-base font-bold uppercase tracking-wider transition-colors hover:opacity-90 lg:w-auto"
              style={{ backgroundColor: sentinelasPink, color: "#050505" }}
            >
              <Navigation className="size-4" /> Abrir no GPS / Maps
            </Link>
          </div>

          <div className="reveal relative h-95 w-full overflow-hidden rounded-2xl border border-border shadow-2xl sm:h-110 md:h-125 lg:w-2/3">
            <iframe
              title="Mapa da Estação Ferroviária em Jaú/SP"
              src="https://www.google.com/maps?q=R.%20Pref.%20Francisco%20Tol%C3%AAdo%20Arruda,%20349%20-%20Ch%C3%A1cara%20Canhos,%20Ja%C3%BA%20-%20SP,%2017202-450&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.15) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
