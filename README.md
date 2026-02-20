# Erick Site

Site institucional de Krav Maga (Coach Erick Reghine), construído com Next.js e foco em performance, SEO e experiência responsiva.

## Tecnologias usadas

- Next.js 16 (App Router)
- React 19
- TypeScript 5
- Tailwind CSS 4
- shadcn/ui (base `new-york`)
- Radix UI
- Lucide React
- Vaul
- ESLint 9
- PNPM

## Preview do site (print)

> Cole seu print aqui para aparecer no GitHub.

Exemplo (recomendado salvar em `public/prints/home.png`):

```md
![Preview do site](./public/prints/home.png)
```

## Como rodar localmente

### Pré-requisitos

- Node.js 20+
- PNPM

### Instalação

```bash
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Acesse: `http://localhost:3000`

### Build de produção

```bash
pnpm build
pnpm start
```

## Scripts disponíveis

- `pnpm dev`: inicia ambiente de desenvolvimento
- `pnpm build`: gera build de produção
- `pnpm start`: inicia aplicação em modo produção
- `pnpm lint`: executa lint do projeto

## Estrutura principal

- `app/`: rotas e layout (App Router)
- `components/`: componentes reutilizáveis
- `lib/`: utilitários e helpers
- `public/`: arquivos estáticos

## Publicação no GitHub

Projeto preparado para repositório público. Antes de publicar, confira se o arquivo `.env` não contém dados sensíveis.
