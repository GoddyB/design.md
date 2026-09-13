Rainbow-glass ≈ `border-beam` 1.3.0 (analogue). **Implementation is vanilla CSS**, not the React package — Goddy does not use React.

**SSOT:** [`border-beam.css`](../border-beam.css). Pico `@import`s it. See `.working/border-beam-vanilla.md`. Do not copy `@keyframes` / `@property` / gradients into the theme or demos.

User: almost exactly the envisioned borders. Package: `border-beam` (Jakub Antalik). Demo: https://libraries.dev/beam.html README in `imports/border-beam-README.md`.

## What it is

A wrapper that paints **only on the edge**: `::after` beam stroke (conic, masked to the border), `::before` inner glow, `[data-beam-bloom]` outer bloom. `pointer-events: none`. Child fill stays yours (`#000`). Auto-detects child radius. `active` fades the effect on/off.

Two families:

| `size` | Motion | Read |
|---|---|---|
| `sm` / `md` | Traveling beam around the perimeter | Card / button “signature” orbit (~2s) |
| `line` | Traveling glow on the bottom edge | Inputs / search |
| `pulse-inner` | Breathing glow contained in the border | Seam that lives, doesn’t tour |
| `pulse-outside` | Outward bloom; wants the child’s own 1px hairline | Halo / medal-adjacent |

`colorVariant`: `colorful` (rainbow, default), `mono`, `ocean`, `sunset`. `theme="dark"`. Knobs: `strength` 0–1, `saturation`, `brightness`, `duration`, `staticColors`.

`colorful` stops are saturated (e.g. `rgb(255, 50, 100)`, `rgb(40, 140, 255)`), then `filter: saturate(1.2) brightness(1.3+)`. Defaults are louder than “muted pastel.”

## Fit with locked Archanglic

- Color only in the seam, not a filled rainbow surface.
- Optional via `active` — same rule as in-the-bag.
- `pulse-outside` docs: ride the existing 1px hairline, don’t double it → pairs with husk `outline`.
- Pulse types honor `prefers-reduced-motion`.

## Tune, don’t copy stock

Stock is a 3-second wow. Archanglic said not a medal, not a signature. Candidate recipe (unconfirmed): `colorVariant="colorful"` `theme="dark"` **low `strength`**, **low `saturation`**, motion = pulse-inner (seam) rather than `md` orbit or `pulse-outside` bloom — unless Goddy wants the traveling beam.

Not a DESIGN.md color token. Lives in Elevation / Components as the rainbow-glass implementation.
