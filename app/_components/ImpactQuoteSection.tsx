"use client";

import { motion, useReducedMotion } from "framer-motion";

const QUOTE_TEXT =
  "Para se ter a paz, precisa se estar preparado para a guerra.";

export function ImpactQuoteSection() {
  const words = QUOTE_TEXT.split(" ");
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: shouldReduceMotion
        ? undefined
        : {
            staggerChildren: 0.1,
            delayChildren: 0.15,
          },
    },
  };

  const wordVariants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="frase-efeito"
      className="reveal section-gradient py-20 md:py-24"
      aria-labelledby="impact-quote-title"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl rounded-2xl px-6 py-10 text-center md:px-10 md:py-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">
            Filosofia de treino
          </p>

          <blockquote className="mt-8">
            <motion.p
              id="impact-quote-title"
              className="quote-line mx-auto max-w-6xl bg-linear-to-r from-white to-white/40 bg-clip-text font-display text-4xl font-bold uppercase leading-tight text-transparent md:text-6xl"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  className="inline-block"
                  variants={wordVariants}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
