import Link from "next/link";
import { TrustedBrand } from "./TrustedBrand";

const AFFILIATIONS = [
  {
    name: "WKMF",
    href: "https://www.wkmf.com.br/instrutoresfiliados",
  },
  {
    name: "ATTAC HOLDING",
    href: "https://www.instagram.com/attac.holding/",
  },
  {
    name: "KYO-JUTSU",
    href: "https://www.instagram.com/kyojutsu.kmj/",
  },
  {
    name: "PROJETO SENTINELAS",
    href: "https://www.instagram.com/projeto_sentinelas/",
  },
] as const;

export const Affiliations = () => (
  <section
    aria-labelledby="affiliations-title"
    className="reveal border-t border-white/5 bg-background py-12"
  >
    <div className="container mx-auto px-4">
      <h2
        id="affiliations-title"
        className="mb-8 text-center text-xs uppercase tracking-widest text-muted-foreground"
      >
        Filiado a instituições de elite
      </h2>

      <ul className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
        {AFFILIATIONS.map((item) => (
          <li key={item.name}>
            <Link
              className="font-display text-xl font-bold"
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Abrir afiliação ${item.name}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <TrustedBrand />
  </section>
);
