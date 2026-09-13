# Geist Design System

Vercel's design system for building consistent web experiences. Geist provides the colors, typography, materials, layout, and React components behind Vercel's products. Components are published as `@vercel/geistcn`; icons, logos, and pixel icons as `@vercel/geistcn-assets`.

---

## Foundations

- **Colors** — A high contrast, accessible color system. See `/geist/colors`.
- **Typography** — Typeset with Geist Sans and Geist Mono. See `/geist/typography`.
- **Materials** — Presets for radii, fills, strokes, and shadows. See `/geist/materials`.
- **Grid** — A core part of the Vercel aesthetic. See `/geist/grid`.

---

## Assets

- **Brand Assets** — Logos and brand guidelines. See `/geist/brands`.
- **Icons** — An icon set tailored for developer tools. See `/geist/icons`.
- **Typeface** — Geist Sans and Geist Mono. See `/font`.

---

## Components

Building blocks for React applications, available via `@vercel/geistcn`. Import from the barrel module:

```tsx
import { Button, Modal, Toggle } from '@vercel/geistcn/components';
import { IconPencilEdit } from '@vercel/geistcn-assets/icons';
```

Browse individual components under `/geist/<component>` (for example `/geist/button`).

---

## Markdown for agents

Every docs page is available as Markdown: append `.md` to any URL (for example `/geist/colors.md`), or send an `Accept: text/markdown` header. For official Vercel-authored report websites such as proposals, briefs, benchmarks, and calculators (not product UI or docs), use the provider-neutral designer skill at `/design.md`.
