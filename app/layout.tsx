import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import { WHATSAPP_LINK } from "@/hooks/use-whatsapp-link";
import { ButtonWhatsapp } from "./_components/button-whatsappp";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Krav Maga em Jaú/SP | Instrutor Erick Reghine",
    template: "%s | Krav Maga Jaú/SP",
  },
  description:
    "Aulas de Krav Maga em Jaú/SP com o Instrutor Erick Reghine. Defesa pessoal real, treino para iniciantes e aula experimental gratuita na Academia Bob Fit.",
  keywords: [
    "krav maga jaú",
    "krav maga jau sp",
    "defesa pessoal jaú",
    "aula de defesa pessoal em jaú",
    "krav maga interior de sp",
    "instrutor erick reghine",
    "aula experimental krav maga",
    "academia bob fit jaú",
  ],
  authors: [{ name: "Instrutor Erick Reghine" }],
  creator: "Instrutor Erick Reghine",
  publisher: "Krav Maga Jaú",
  category: "Esportes e defesa pessoal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Krav Maga em Jaú/SP | Instrutor Erick Reghine",
    description:
      "Treinamento de Krav Maga em Jaú/SP com foco em defesa pessoal real, condicionamento e confiança para o dia a dia.",
    url: siteUrl,
    type: "website",
    locale: "pt_BR",
    siteName: "Krav Maga Jaú",
    images: [
      {
        url: "/assets/hero-krav.webp",
        width: 1200,
        height: 630,
        alt: "Aula de Krav Maga em Jaú/SP com o Instrutor Erick Reghine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krav Maga em Jaú/SP | Instrutor Erick Reghine",
    description:
      "Defesa pessoal em Jaú/SP com metodologia prática e aula experimental gratuita.",
    images: ["/assets/hero-krav.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Jaú",
    ICBM: "-22.2936, -48.5592",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        ) : null}
        <ButtonWhatsapp whatsappNumber={WHATSAPP_LINK} />
        {children}
      </body>
    </html>
  );
}
