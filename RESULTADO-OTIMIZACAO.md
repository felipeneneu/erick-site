# Resultado da Otimização e Ajustes

## Escopo executado

### 1) Estabilidade do mapa (`LocationSection`)
- Implementado fallback visual quando o iframe do Google Maps demora para carregar.
- Exibido botão de contingência para abrir diretamente no Google Maps.
- Ajustado `referrerPolicy` e filtro visual para reduzir falhas de renderização.

Arquivo:
- `app/_components/LocationSection.tsx`

### 2) Otimização de performance (mobile/desktop)
- Removido custo de runtime de animações JS nas seções de frase e CTA.
- Substituição por animações CSS leves.
- Removida dependência `framer-motion`.
- Hero otimizada:
  - removida camada de background duplicada;
  - `next/image` com `priority` e `sizes="100vw"`;
  - animação de zoom desativada no mobile.

Arquivos:
- `app/_components/ImpactQuoteSection.tsx`
- `app/_components/CtaSection.tsx`
- `app/_components/HeroSection.tsx`
- `app/globals.css`
- `package.json`
- `pnpm-lock.yaml`

### 3) Ajuste da animação da frase de efeito
- Ajustada para disparar claramente quando a seção entra em viewport.
- Gatilho ligado ao `ScrollReveal` (`.reveal.is-visible`).

Arquivos:
- `app/_components/ImpactQuoteSection.tsx`
- `app/globals.css`

## Métricas Lighthouse (produção local)

## Antes
### Mobile
- Performance: **68**
- Accessibility: **93**
- Best Practices: **100**
- SEO: **100**
- FCP: **1.1s**
- LCP: **10.5s**
- TBT: **250ms**
- CLS: **0**

### Desktop
- Performance: **94**
- Accessibility: **93**
- Best Practices: **100**
- SEO: **100**
- FCP: **0.3s**
- LCP: **1.6s**
- TBT: **30ms**
- CLS: **0**

## Depois
### Mobile (2 execuções)
- Run 1:
  - Performance: **64**
  - FCP: **2.3s**
  - LCP: **8.7s**
  - TBT: **210ms**
  - CLS: **0**
- Run 2:
  - Performance: **69**
  - FCP: **1.3s**
  - LCP: **8.9s**
  - TBT: **220ms**
  - CLS: **0**

### Desktop
- Performance: **96**
- Accessibility: **93**
- Best Practices: **100**
- SEO: **100**
- FCP: **0.3s**
- LCP: **1.4s**
- TBT: **30ms**
- CLS: **0**

## Observações técnicas
- O score mobile do Lighthouse oscila entre execuções (normal), porém houve melhora consistente em **LCP** e **TBT**.
- O maior gargalo mobile segue sendo LCP alto na primeira dobra.
- Próximo passo recomendado para ganho mais forte:
  - gerar versão mobile dedicada da imagem hero (`.webp`) e servir por breakpoint.

