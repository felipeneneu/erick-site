import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

const LocationSection = () => {
  const addressLine = "R. Angelo Luigi Busnardo, 70, Jardim Maria Luiza I";
  const city = "Jaú";
  const region = "SP";
  const postalCode = "17213-410";
  const country = "BR";
  const placeName = "Academia Bob Fit";
  const destination = encodeURIComponent(`${placeName}, ${city} - ${region}`);
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Krav Maga Jaú - Coach Erick Reghine",
    description:
      "Aulas de Krav Maga e defesa pessoal em Jaú/SP na Academia Bob Fit.",
    address: {
      "@type": "PostalAddress",
      streetAddress: addressLine,
      addressLocality: city,
      addressRegion: region,
      postalCode,
      addressCountry: country,
    },
    areaServed: {
      "@type": "City",
      name: city,
    },
    sameAs: [googleMapsUrl],
  };

  return (
    <section
      id="contato"
      className="location-light bg-secondary py-20 md:py-24"
    >
      <Script
        id="location-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(localBusinessSchema)}
      </Script>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div
            className="lg:w-1/3 w-full space-y-6 reveal"
            itemScope
            itemType="https://schema.org/SportsActivityLocation"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
              <MapPin className="size-3" /> Onde Treinar
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-tight text-foreground">
              Nossa <span className="text-gradient">Localização</span>
            </h2>
            <p className="text-muted-foreground font-body">
              As aulas de Krav Maga acontecem dentro da{" "}
              <strong>Academia Bob Fit</strong>, um ambiente com estrutura
              completa para o seu treino de defesa pessoal em Jaú.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-background rounded-lg border border-border">
                  <MapPin className="text-primary size-5" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Endereço</p>
                  <address className="not-italic text-sm text-muted-foreground">
                    <span itemProp="name">{placeName}</span>
                    <br />
                    <span itemProp="streetAddress">{addressLine}</span>
                    <br />
                    <span itemProp="addressLocality">{city}</span> -{" "}
                    <span itemProp="addressRegion">{region}</span>
                    <br />
                    CEP: <span itemProp="postalCode">{postalCode}</span>
                  </address>
                </div>
              </div>
            </div>

            <Link
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full lg:w-auto items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 font-poppins font-bold text-base uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Navigation className="size-4" /> Abrir no GPS / Maps
            </Link>
          </div>

          <div className="h-95 w-full overflow-hidden rounded-2xl border border-border shadow-2xl reveal sm:h-110 md:h-125 lg:w-2/3">
            <iframe
              title="Mapa da Academia Bob Fit em Jaú/SP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8465612349887!2d-48.5751405238166!3d-22.30550372886477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b857ef5ff6285d%3A0x767a4992dab616b3!2sBob%20Fit!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.5) contrast(1.2) invert(0.9)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
