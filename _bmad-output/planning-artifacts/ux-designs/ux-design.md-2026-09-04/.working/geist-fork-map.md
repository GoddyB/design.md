# Archanglic = Geist fork (DESIGN.md token map)

Source: live `vercel.com/geist/*` CSS (dark-theme) + `imports/geist-*.md` + screenshots `imports/northstar-geist-*.png`, captured 2026-09-04.
User: Archanglic is a fork of Geist to the extent those tokens belong in a DESIGN.md. Not a Vercel brand clone (no triangle, no Vercel wordmark).

Dark only. No `*-light` / `*-dark` suffix pairs.

## What forks into DESIGN.md

### Colors (`colors`)

Geist dark HSL → hex (sRGB). Gray ladder in DESIGN.md is **100–900 only**. `#ededed` is text white, not a gray preset.

| Token | Role (Archanglic) | Hex |
|---|---|---|
| `background-200` | Default canvas and default element fill. Always, unless an alternate is specified. | `#000000` |
| `background-100` | Rare alternate surface only. Not a type preset. | `#0a0a0a` |
| `gray-100` | Default component bg (Geist role; no palette-review override) | `#1a1a1a` |
| `gray-200` | Hover bg | `#1f1f1f` |
| `gray-300` | Active bg | `#292929` |
| `gray-400` | Default border | `#2e2e2e` |
| `gray-500` | Hover border | `#454545` |
| `gray-600` | Active border | `#878787` |
| `gray-700` | High-contrast bg | `#8f8f8f` |
| `gray-800` | Hover high-contrast bg | `#7d7d7d` |
| `gray-900` | Secondary text/icons | `#a1a1a1` |
| `on-surface` | The white used for text. Default pairing: this on `background-200` / `surface`. **Not** `gray-1000`. **Not** husk `primary`. | `#ededed` |

`gray-alpha-100`–`900` (and 1000 if still needed for overlays) — translucent borders/overlays. Allowed CSS colors. `gray-alpha-1000` is not the text token.

Accent scales (`blue`, `red`, `amber`, `green`, `teal`, `purple`, `pink`): **do not fork.** Goddy will fill husk slots (`primary`, `error`, optional `secondary`/`tertiary`) with his own options. See `.working/color-husk-slots.md`.

**Husk mapping:** `#ededed` is `{colors.on-surface}` (text white), not `{colors.primary}` and not `gray-1000`. `{colors.primary}` is still open (brand/CTA fill). `{colors.surface}` / canvas = `#000000`.

**Canvas:** `{colors.surface}` = `{colors.background-200}` = `#000000`. Default elements use the same. `{colors.background-100}` (`#0a0a0a`) only when an alternate is specified, rarely. `#ededed` on `#0a0a0a` is **not** a preset.

**Archanglic delta (not Geist):** muted pastel-rainbow-glass on accents, shimmers, active shading, and some chrome borders. Does not replace the gray-400/500/600 border ladder; it is the splash.

### Typography (`typography`)

Families: **Geist Sans** (UI), **Geist Mono** (code, URLs, tabular pairing). Weights: 400 / 500 / 600. Strong/Subtle in Geist = nested `<strong>`, not extra tokens.

Token names = Geist class minus `text-`. Each level: `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`. Headings also `letterSpacing` (Geist uses ~`-0.06em` on large headings).

**Headings (600):** 72/64/56/48/40/32/24/20/16/14  
**Copy (400):** 24/20/18/16/14/13 + `copy-13-mono`, `copy-14-mono`  
**Label (400):** 20/18/16/14/13/12 + `label-14-mono`, `label-13-mono`, `label-12-mono`  
**Button (500):** 16/14/12

Do not pad or rename to Material `headline-md`. Keep Geist names.

### Layout (`spacing`)

Geist 4px base:

`4, 8, 12, 16, 24, 32, 40, 64, 96, 128, 192, 256`  
Named: `gap` 24, `gap-half` 12, `page-margin` 24, `page-width` 1200 / `ds-page-width` 1400.  
Geist Grid docs: max-width 1080px, min 368px, horizontal margin 2rem, 1px guides.

### Shapes (`rounded`)

From materials (radii only — not shadow presets):

- `sm` / `DEFAULT`: `6px` (`--geist-radius`, material-base/small/tooltip)
- `md`: `8px` (marketing radius)
- `lg`: `12px` (material-medium/large/menu/modal)
- `xl`: `16px` (material-fullscreen)
- `full`: pills/icon-circle buttons

Nested radii: child ≤ parent (from web-interface-guidelines).

### Elevation

Fork **strokes**, not shadow stacks. Geist materials’ “raised” shadows are **not** copied (Archanglic: no materials/layers on fills). Depth = `gray-400` / `gray-alpha-400` hairlines, optional rainbow-glass on active chrome. Focus ring recipe from Geist **structure**: 2px canvas + 2px focus color — restyle the focus color if rainbow is used for active.

### Components

Geist button variants → sibling keys: `button-primary` (default / gray-1000 fill), `button-primary-hover`, `button-secondary`, `button-tertiary`, `button-error`, `button-warning`. Sizes tiny/small/medium/large; square/circle icon-only.

Inputs, menus, modals: radii from the table above; fills stay black / gray-100, not glass slabs.

Still need one **domain** component (quality-bar) that is Archanglic, not Geist (e.g. a project row, a whitepaper figure, the `^^` mark). That is not in Geist.

## What does **not** fork into DESIGN.md

- `@vercel/geistcn` React package / Tailwind class names as the contract (tokens + prose are the contract)
- Vercel / Next / v0 brand assets
- Light theme values
- Material shadow presets (`material-small` lift, etc.)
- Implementation (GridSystem React API)

## Open collision

Geist dark Background 1 is `#0a0a0a`, Background 2 is `#000000`. Archanglic “pure black everything” vs Geist’s 4% default element fill. Confirm whether `background-100` stays `#0a0a0a` or is flattened to `#000000`.
