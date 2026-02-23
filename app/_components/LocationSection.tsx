"use client";

import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { useEffect, useState } from "react";

const LocationSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showMapFallback, setShowMapFallback] = useState(false);

  const addressLine = "R. Angelo Luigi Busnardo, 70, Jardim Maria Luiza I";
  const city = "Jaú";
  const region = "SP";
  const postalCode = "17213-410";
  const country = "BR";
  const placeName = "Academia Bob Fit";
  const destination = encodeURIComponent(`${placeName}, ${city} - ${region}`);
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!mapLoaded) setShowMapFallback(true);
    }, 6000);

    return () => window.clearTimeout(timer);
  }, [mapLoaded]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "Krav Maga Jaú - Instrutor Erick Reghine",
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
      aria-labelledby="location-title"
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
            className="reveal w-full space-y-6 lg:w-1/3"
            itemScope
            itemType="https://schema.org/SportsActivityLocation"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              <MapPin className="size-3" /> Onde treinar
            </div>
            <h2
              id="location-title"
              className="font-display text-4xl font-bold uppercase leading-tight text-foreground"
            >
              Nossa <span className="text-gradient">localização</span>
            </h2>
            <p className="font-body text-muted-foreground">
              As aulas de Krav Maga acontecem na{" "}
              <strong>Academia Bob Fit</strong>, com estrutura completa para
              treino de defesa pessoal em Jaú.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="rounded-lg border border-border bg-background p-3">
                  <MapPin className="size-5 text-primary" />
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 font-poppins text-base font-bold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90 lg:w-auto"
              aria-label="Abrir rota no Google Maps para a Academia Bob Fit"
            >
              <Navigation className="size-4" /> Abrir no GPS / Maps
            </Link>
          </div>

          <div className="reveal relative h-95 w-full overflow-hidden rounded-2xl border border-border shadow-2xl sm:h-110 md:h-125 lg:w-2/3">
            <iframe
              title="Mapa da Academia Bob Fit em Jaú/SP"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.8465612349887!2d-48.5751405238166!3d-22.30550372886477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b857ef5ff6285d%3A0x767a4992dab616b3!2sBob%20Fit!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.15) contrast(1.05)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => {
                setMapLoaded(true);
                setShowMapFallback(false);
              }}
            />

            {showMapFallback && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/85 p-6 text-center">
                <p className="text-sm text-foreground md:text-base">
                  O mapa demorou para carregar neste dispositivo.
                </p>
                <Link
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Navigation className="size-4" />
                  Abrir no Google Maps
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
