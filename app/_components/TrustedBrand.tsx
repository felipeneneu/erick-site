import Image from "next/image";
import Link from "next/link";

const TRUSTED_BRANDS = [
  {
    name: "WKMF",
    src: "/afiliados/erick.png",
    href: "https://www.wkmf.com.br/instrutoresfiliados",
  },
  {
    name: "ATTAC HOLDING",
    src: "/afiliados/erick2.png",
    href: "https://www.instagram.com/attac.holding/",
  },
  {
    name: "KYO-JUTSU",
    src: "/afiliados/erick3.png",
    href: "https://www.instagram.com/kyojutsu.kmj/",
  },
  {
    name: "PROJETO SENTINELAS",
    src: "/afiliados/erick4.png",
    href: "https://www.instagram.com/projeto_sentinelas/",
  },
] as const;

const BRAND_ROW = [...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS];

export const TrustedBrand = () => {
  const renderBrand = (brand: (typeof TRUSTED_BRANDS)[number], key: string) => (
    <li key={key} className="shrink-0">
      <Link
        href={brand.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Visitar ${brand.name}`}
        className="group block px-2 md:px-3"
      >
        <Image
          src={brand.src}
          alt={brand.name}
          width={220}
          height={88}
          className="h-32 w-auto object-contain opacity-80 transition-opacity duration-200 group-hover:opacity-100"
          draggable={false}
          loading="eager"
        />
      </Link>
    </li>
  );

  return (
    <section
      aria-label="Marcas e plataformas reconhecidas"
      className="reveal relative mx-auto w-full select-none overflow-hidden pt-20"
    >
      <h2 className="sr-only">Marcas reconhecidas no mercado</h2>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-background to-transparent" />

      <div className="trusted-brand-track">
        <ul className="trusted-brand-list">
          {BRAND_ROW.map((brand, index) =>
            renderBrand(brand, `${brand.name}-a-${index}`),
          )}
        </ul>
        <ul className="trusted-brand-list" aria-hidden="true">
          {BRAND_ROW.map((brand, index) =>
            renderBrand(brand, `${brand.name}-b-${index}`),
          )}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-background to-transparent md:w-40" />
    </section>
  );
};
