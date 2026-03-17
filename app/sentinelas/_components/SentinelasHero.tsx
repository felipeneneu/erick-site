"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { InteractiveOrbButton } from "@/app/_components/InteractiveOrbButton";
import heroImage from "@/public/assets/hero-krav-sentinelas.png";
import sentinelasLogo from "@/public/afiliados/erick.png";

export function SentinelasHero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative flex min-h-svh items-center justify-center overflow-hidden pb-16 pt-24 md:pt-28"
      aria-labelledby="hero-title"
    >
      <Image
        src={heroImage}
        alt="Projeto Sentinelas em Jaú com aulas de defesa pessoal"
        fill
        sizes="100vw"
        className="hero-image-zoom object-cover"
        priority
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgb(5 5 5 / 0.5) 0%, rgb(5 5 5 / 0.68) 42%, rgb(5 5 5 / 0.9) 72%, rgb(5 5 5 / 0.99) 100%), radial-gradient(circle at top, rgb(255 67 159 / 0.18), transparent 34%)",
        }}
      />
      <div
        className="absolute inset-0 block md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgb(5 5 5 / 0.5) 0%, rgb(5 5 5 / 0.68) 42%, rgb(5 5 5 / 0.9) 72%, rgb(5 5 5 / 0.99) 100%), radial-gradient(circle at top, rgb(255 67 159 / 0.18), transparent 34%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-56"
        style={{
          background:
            "linear-gradient(to bottom, rgba(5,5,5,0) 0%, rgba(5,5,5,0.42) 26%, rgba(5,5,5,0.82) 66%, rgba(24,24,24,1) 100%)",
        }}
      />
      <div
        className="absolute inset-x-[-6%] bottom-[-3.5rem] h-32 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,67,159,0.12) 0%, rgba(24,24,24,0.68) 48%, rgba(24,24,24,0) 78%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-background" />
      {/* <div className="absolute mx-auto max-w-4xl rounded-[2rem] bg-black/20 px-4 py-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-[2px] sm:px-6 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-none" /> */}

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.45 }}
      >
        <div>
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            <Image
              src={sentinelasLogo}
              alt="Logo do Projeto Sentinelas"
              className="mx-auto mb-6 h-30 w-auto object-contain sm:h-36 md:h-50"
              style={{
                animation: "hero-image-zoom 12s ease-in-out infinite alternate",
              }}
              priority
            />
          </motion.div>
          <motion.p
            className="mb-4 font-display font-bold text-xs uppercase tracking-[0.24em] text-pink-600 sm:text-sm md:text-base"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            Aulas gratuitas de defesa pessoal em Jaú/SP
          </motion.p>

          <motion.h1
            id="hero-title"
            className="mb-5 font-display text-4xl font-bold uppercase leading-[0.94] text-white drop-shadow-[0_8px_28px_rgba(0,0,0,0.6)] sm:text-5xl md:mb-6 md:text-7xl md:leading-[0.92] lg:text-8xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.95, delay: 0.24, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            PROJETO
            <br />
            <span className="text-pink-600">SENTINELAS</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-4 max-w-3xl font-body text-lg font-semibold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-xl md:text-2xl"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.78, delay: 0.34, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            Defesa pessoal que transforma vidas
          </motion.p>

          <motion.p
            className="mx-auto mb-8 max-w-3xl font-body text-sm leading-7 font-medium text-white/95 drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)] sm:text-base sm:leading-8 md:text-xl md:font-light"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.82, delay: 0.44, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            <strong className="text-pink-600">
              Aulas GRATUITAS de defesa pessoal
            </strong>{" "}
            para mulheres e adolescentes, com orientação do Instrutor Erick
            Reghine e foco em segurança, reação e consciência situacional.
          </motion.p>

          <motion.div
            className="mx-auto flex w-full max-w-xl flex-col justify-center gap-3 sm:flex-row"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.82, delay: 0.56, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            <InteractiveOrbButton
              href="#inscricao"
              className="h-14 w-full min-w-[18rem] px-12 py-8 font-poppins text-lg font-black tracking-wider sm:w-auto"
            >
              Garanta sua vaga agora
            </InteractiveOrbButton>

            <Link
              href="#beneficios"
              className={buttonVariants({
                variant: "outline",
                className:
                  "h-14 w-full min-w-[18rem] border-white/30 bg-white/5 px-12 py-8 font-poppins text-lg font-black tracking-wider text-white hover:bg-white/15 sm:w-auto",
              })}
            >
              Conhecer o projeto
            </Link>
          </motion.div>

          <motion.div
            className="mt-6 text-sm text-white/75"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={
              shouldReduceMotion
                ? undefined
                : { duration: 0.65, delay: 0.68, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            <p>Local: Estação Ferroviária • Jaú/SP</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 animate-bounce md:block md:bottom-1">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-muted-foreground/40 p-2">
          <div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  );
}
