"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type InteractiveOrbButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

export function InteractiveOrbButton({
  href,
  children,
  className,
  target,
  rel,
}: InteractiveOrbButtonProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={(event) => {
        if (!href.startsWith("#")) return;

        const target = document.querySelector<HTMLElement>(href);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", href);
      }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        setPosition({ x, y });
      }}
      className={cn(
        "group relative inline-flex shrink-0 whitespace-nowrap overflow-hidden rounded-md border border-white/20 bg-pink-600 px-6 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(219,39,119,0.32),0_0_32px_rgba(219,39,119,0.26)] transition-transform duration-300 hover:scale-[1.015]",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `
            radial-gradient(circle at ${position.x}% ${position.y}%, rgba(255,255,255,0.44) 0%, rgba(255,255,255,0.22) 9%, rgba(255,255,255,0.08) 16%, rgba(255,255,255,0) 32%),
            radial-gradient(circle at calc(${position.x}% - 10%) calc(${position.y}% + 2%), rgba(244,114,182,0.38) 0%, rgba(244,114,182,0.18) 10%, rgba(244,114,182,0) 28%),
            radial-gradient(circle at calc(${position.x}% - 22%) calc(${position.y}% + 6%), rgba(219,39,119,0.26) 0%, rgba(219,39,119,0.12) 10%, rgba(219,39,119,0) 24%),
            radial-gradient(circle at calc(${position.x}% - 34%) calc(${position.y}% + 10%), rgba(251,207,232,0.16) 0%, rgba(251,207,232,0) 18%)
          `,
        }}
      />
      <span className="pointer-events-none absolute inset-[1px] rounded-[inherit] bg-linear-to-b from-white/14 via-white/4 to-transparent opacity-80" />
      <span className="pointer-events-none absolute inset-0 bg-linear-to-r from-white/0 via-white/8 to-white/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/60 opacity-80" />
      <span className="relative z-10 flex w-full items-center justify-center whitespace-nowrap">
        {children}
      </span>
    </a>
  );
}
