import { MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="border-t border-border bg-background py-12"
      aria-labelledby="footer-title"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2
            id="footer-title"
            className="mb-2 font-display text-4xl font-bold uppercase tracking-wider text-foreground"
          >
            ERICK<span className="text-primary"> REGHINE</span>
          </h2>

          <address className="mb-6 flex items-center justify-center gap-2 not-italic font-body text-sm text-muted-foreground">
            <MapPin className="size-11 md:size-4 text-primary" />
            <p>R. Angelo Luigi Busnardo, 70, Jardim Maria Luiza I, Jaú - SP,</p>
            <span className="font-bold text-emerald-400">Academia Bob Fit</span>
          </address>

          <div className="flex w-full max-w-screen flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
            <p className="font-body text-xs text-muted-foreground">
              © {new Date().getFullYear()} Erick Reghine - Krav Maga e Defesa
              Pessoal. Todos os direitos reservados.
            </p>

            <p className="font-body text-xs text-muted-foreground">
              Programado por:{" "}
              <Link
                href="https://github.com/felipeneneu"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-primary transition-all hover:underline"
                aria-label="Abrir perfil de Felipe Neneu no GitHub"
              >
                Felipe Neneu
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
