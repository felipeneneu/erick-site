import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import sentinelasLogo from "@/public/afiliados/erick.png";

export function SentinelasFooter() {
  return (
    <footer className="border-t border-border bg-background py-12" aria-labelledby="footer-title">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Image
            src={sentinelasLogo}
            alt="Logo do Projeto Sentinelas"
            className="mb-5 h-28 w-auto object-contain md:h-36"
          />
          <h2
            id="footer-title"
            className="mb-2 font-display text-4xl font-bold uppercase tracking-wider text-foreground"
          >
            PROJETO <span className="text-pink-600">SENTINELAS</span>
          </h2>

          <address className="mb-6 flex items-center justify-center gap-2 not-italic font-body text-sm text-muted-foreground">
            <MapPin className="size-5 text-primary" />
            <p>R. Pref. Francisco Tolêdo Arruda, 349 - Chácara Canhos, Jaú - SP</p>
          </address>

          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            Apoio: Secretaria de Igualdade Racial e Prefeitura do Município de Jahu.
            Condução técnica com a experiência do Instrutor Erick Reghine.
          </p>

          <div className="mt-8 flex w-full max-w-screen flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
            <p className="font-body text-xs text-muted-foreground">
              © 2026 Erick Reghine - Krav Maga e Defesa Pessoal. Todos os direitos reservados.
            </p>

            <p className="font-body text-xs text-muted-foreground">
              Programado por:{" "}
              <Link
                href="https://github.com/felipeneneu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary transition-all hover:underline"
              >
                Felipe Neneu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
