import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Krav Maga em Jaú/SP | Coach Erick Reghine",
    template: "%s | Krav Maga Jaú/SP",
  },
  description:
    "Aulas de Krav Maga em Jaú/SP com Coach Erick Reghine. Defesa pessoal real, treino para iniciantes e aula experimental gratuita na Academia Bob Fit.",
  keywords: [
    "krav maga jaú",
    "krav maga jau sp",
    "defesa pessoal jaú",
    "aula de defesa pessoal em jaú",
    "krav maga sp interior",
    "coach erick reghine",
    "aula experimental krav maga",
    "academia bob fit jau",
  ],
  authors: [{ name: "Coach Erick Reghine" }],
  creator: "Coach Erick Reghine",
  publisher: "Krav Maga Jaú",
  category: "Esportes e Defesa Pessoal",
  openGraph: {
    title: "Krav Maga em Jaú/SP | Coach Erick Reghine",
    description:
      "Treinamento de Krav Maga em Jaú/SP com foco em defesa pessoal real, condicionamento e confiança para o dia a dia.",
    type: "website",
    locale: "pt_BR",
    siteName: "Krav Maga Jaú",
    images: [
      {
        url: "/assets/hero-krav.jpg",
        width: 1200,
        height: 630,
        alt: "Aula de Krav Maga em Jaú/SP com Coach Erick Reghine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krav Maga em Jaú/SP | Coach Erick Reghine",
    description:
      "Defesa pessoal em Jaú/SP com metodologia prática e aula experimental gratuita.",
    images: ["/assets/hero-krav.jpg"],
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
        {children}
      </body>
    </html>
  );
}
