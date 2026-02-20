import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-erick.svg";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo / Nome */}
          <Image
            src={logo}
            alt="Logo Erick Reghine"
            width={140}
            height={140}
            className="mb-4"
          />
          <p className="font-display text-xl font-bold uppercase tracking-wider text-foreground mb-2">
            ERICK<span className="text-primary"> REGHINE</span>
          </p>

          {/* Localização Técnica (Bom para SEO) */}
          <p className="text-muted-foreground text-sm mb-6 font-body flex items-center justify-center gap-2">
            <MapPin className="mr-2 size-10 md:size-3.5 mb-1" />
            R. Angelo Luigi Busnardo, 70, Jardim Maria Luiza I Jaú - SP
            <span className="font-bold text-emerald-400">Academia Bob Fit</span>
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-screen border-t border-border/50 pt-8 gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-xs font-body">
              © {new Date().getFullYear()} Erick Reghine - Krav Maga & Defesa
              Pessoal. Todos os direitos reservados.
            </p>

            {/* Créditos - Seu Link */}
            <p className="text-muted-foreground text-xs font-body">
              Programado por:{" "}
              <Link
                href="https://github.com/felipeneneu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline transition-all font-semibold"
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
