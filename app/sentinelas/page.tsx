import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Script from "next/script";
import ScrollReveal from "../_components/ScrollReveal";
import { SentinelasAboutSection } from "./_components/SentinelasAboutSection";
import { SentinelasBenefitsSection } from "./_components/SentinelasBenefitsSection";
import { SentinelasCtaSection } from "./_components/SentinelasCtaSection";
import { SentinelasFaqSection } from "./_components/SentinelasFaqSection";
import { SentinelasFooter } from "./_components/SentinelasFooter";
import { SentinelasHero } from "./_components/SentinelasHero";
import { SentinelasLocationSection } from "./_components/SentinelasLocationSection";
import { SentinelasNavbar } from "./_components/SentinelasNavbar";
import { SentinelasQuoteSection } from "./_components/SentinelasQuoteSection";
import { SentinelasScheduleSection } from "./_components/SentinelasScheduleSection";
import { sentinelasLocationSchema, sentinelasPink } from "./_components/content";

export const metadata: Metadata = {
  title:
    "Projeto Sentinelas em Jaú/SP | Defesa Pessoal Gratuita para Mulheres e Adolescentes",
  description:
    "Projeto Sentinelas em Jaú/SP com aulas gratuitas de defesa pessoal para mulheres e adolescentes. Turmas na Estação Ferroviária com orientação do instrutor Erick Reghine.",
  keywords: [
    "projeto sentinelas jaú",
    "defesa pessoal gratuita jaú",
    "defesa pessoal para mulheres jaú",
    "aulas para adolescentes jaú",
    "krav maga jaú sp",
    "erick reghine jaú",
    "defesa pessoal jaú sp",
  ],
  alternates: {
    canonical: "/sentinelas",
  },
  openGraph: {
    title:
      "Projeto Sentinelas em Jaú/SP | Defesa Pessoal Gratuita para Mulheres e Adolescentes",
    description:
      "Aulas gratuitas de defesa pessoal para mulheres e adolescentes em Jaú/SP, na Estação Ferroviária, com orientação do instrutor Erick Reghine.",
    url: "/sentinelas",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/hero-krav-sentinelas.png",
        width: 1200,
        height: 630,
        alt: "Projeto Sentinelas em Jaú/SP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Projeto Sentinelas em Jaú/SP | Defesa Pessoal Gratuita para Mulheres e Adolescentes",
    description:
      "Aulas gratuitas de defesa pessoal para mulheres e adolescentes em Jaú/SP.",
    images: ["/assets/hero-krav-sentinelas.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SentinelasPage() {
  const themeVars: CSSProperties = {
    "--primary": sentinelasPink,
    "--accent": sentinelasPink,
    "--ring": sentinelasPink,
  } as CSSProperties;

  return (
    <div className="min-h-screen bg-background font-poppins" style={themeVars}>
      <ScrollReveal />

      <Script
        id="sentinelas-location-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(sentinelasLocationSchema)}
      </Script>

      <main>
        <SentinelasNavbar />
        <SentinelasHero />
        <SentinelasQuoteSection />
        <SentinelasBenefitsSection />
        <SentinelasAboutSection />
        <SentinelasScheduleSection />
        <SentinelasLocationSection />
        <SentinelasFaqSection />
        <SentinelasCtaSection />
        <SentinelasFooter />
      </main>
    </div>
  );
}
