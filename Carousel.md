# Carousel

## Objetivo
Criar uma secao de carousel para fotos de treinamentos e workshops, com foco em SEO, acessibilidade e boa experiencia mobile/desktop.

## Componente
- Arquivo: `app/_components/TrainingWorkshopsCarousel.tsx`
- Tipo: Client Component (`"use client"`)
- Recursos:
  - Autoplay a cada 5 segundos
  - Navegacao por botoes `Prev` e `Next`
  - Indicadores clicaveis por slide
  - Conteudo semantico (`section`, `h2`, `h3`, `article`)
  - `alt` descritivo em todas as imagens
  - Classe `reveal` para animacao de entrada via `ScrollReveal`

## Slides atuais
- `/assets/hero-krav.jpg`
- `/assets/instructor.jpg`
- `/assets/instructor.png`

## Como adicionar novas fotos
1. Adicione a imagem em `public/assets/`.
2. No array `CAROUSEL_ITEMS`, inclua um novo objeto com:
   - `title`
   - `description`
   - `src`
   - `alt`
3. Mantenha `alt` descritivo e especifico para SEO de imagem.

## Integracao na Home
- A secao foi inserida em `app/page.tsx` com:
  - `<TrainingWorkshopsCarousel />`

## Observacoes de SEO aplicadas
- Heading principal da secao (`h2`) com termos de busca relevantes: treinamentos e workshops.
- Textos de suporte com contexto local de aulas e defesa pessoal.
- Hierarquia semantica para melhorar rastreamento de conteudo por buscadores.
