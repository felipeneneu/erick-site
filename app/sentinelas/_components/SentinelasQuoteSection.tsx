"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SentinelasQuoteSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const orbs = gsap.utils.toArray<HTMLElement>("[data-sentinelas-orb]");
      const lines = gsap.utils.toArray<HTMLElement>("[data-sentinelas-line]");

      orbs.forEach((orb, index) => {
        const distance = index % 2 === 0 ? 180 : -200;
        const duration = 9 + index * 2;

        gsap.set(orb, { x: 0, y: index === 1 ? -10 : 0 });
        gsap.to(orb, {
          x: distance,
          y: index === 1 ? -26 : 24,
          scale: 1.16 + index * 0.05,
          duration,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      });

      gsap.set(lines, {
        y: 38,
        opacity: 0,
        filter: "blur(12px)",
      });

      gsap.to(lines, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="frase-efeito"
      className="reveal section-gradient relative overflow-hidden py-20 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          data-sentinelas-orb
          className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-pink-600/22 blur-3xl md:h-56 md:w-56"
        />
        <div
          data-sentinelas-orb
          className="absolute right-[12%] top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-pink-500/20 blur-3xl md:h-48 md:w-48"
        />
        <div
          data-sentinelas-orb
          className="absolute bottom-8 left-[34%] h-44 w-44 -translate-x-1/2 rounded-full bg-pink-300/16 blur-3xl md:h-60 md:w-60"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl rounded-2xl px-6 py-10 text-center md:px-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-pink-600">
            Filosofia do projeto
          </p>
          <blockquote className="mt-8 space-y-3 md:space-y-4">
            <p
              data-sentinelas-line
              className="quote-line bg-linear-to-r from-white to-white/40 bg-clip-text font-display text-4xl font-bold uppercase leading-tight text-transparent md:text-6xl"
            >
              Quando uma mulher aprende a se defender,
            </p>
            <p
              data-sentinelas-line
              className="quote-line bg-linear-to-r from-white to-white/40 bg-clip-text font-display text-4xl font-bold uppercase leading-tight text-transparent md:text-6xl"
            >
              o medo deixa de decidir por ela.
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
