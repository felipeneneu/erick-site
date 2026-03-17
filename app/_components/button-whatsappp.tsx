"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { normalizeBrazilWhatsappDigits } from "@/lib/phone";

type ButtonWhatsappProps = {
  whatsappNumber: string;
};

export function ButtonWhatsapp({ whatsappNumber }: ButtonWhatsappProps) {
  const pathname = usePathname();
  const phoneDigits = normalizeBrazilWhatsappDigits(whatsappNumber);
  if (!/^55\d{10,11}$/.test(phoneDigits)) return null;

  const isSentinelasPage = pathname?.startsWith("/sentinelas");
  const message = isSentinelasPage
    ? "Olá! Vim pelo site e tenho interesse no Projeto Sentinelas."
    : "Olá! Vim pelo site de Krav Maga em Jaú/SP e quero agendar uma aula experimental com o Instrutor Erick Reghine.";
  const href = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(message)}`;
  const tooltip = isSentinelasPage
    ? "Atendimento humano sobre o Projeto Sentinelas"
    : "Atendimento humano em Jaú/SP para aula experimental";
  const ariaLabel = isSentinelasPage
    ? "WhatsApp Projeto Sentinelas"
    : "WhatsApp Krav Maga em Jaú/SP - agendar aula experimental";

  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className="group fixed bottom-6 right-5 z-50"
    >
      <span className="pointer-events-none absolute right-16 top-1/2 w-52 -translate-y-1/2 rounded-lg bg-foreground px-3 py-1 text-xs font-medium text-background opacity-0 shadow transition group-hover:opacity-100">
        {tooltip}
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-[0_10px_30px_rgba(34,197,94,0.35)] ring-1 ring-green-600/40 transition-transform group-hover:scale-105">
        <FaWhatsapp className="size-7" />
      </span>
    </Link>
  );
}
