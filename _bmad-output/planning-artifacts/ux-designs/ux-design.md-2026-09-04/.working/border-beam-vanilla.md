# Rainbow-glass as vanilla CSS (no React)

Goddy does not use React. The npm `border-beam` package is the **visual analogue**. This file documents the **fidelity rebuild** in [`border-beam.css`](../border-beam.css).

## Single source of truth

| File | Role |
|---|---|
| [`border-beam.css`](../border-beam.css) | **The only recipe.** Hotspot stroke, inner glow, outer bloom, line travel. |
| [`archanglic.pico.css`](../archanglic.pico.css) | `@import`s it. Sets `--beam-*` knobs. No copy. |
| [`border-beam-vanilla.css`](./border-beam-vanilla.css) | Re-export. |

When Goddy edits `border-beam.css`, every surface updates.

## Anatomy (library → host + two pseudos)

Jakub’s component uses `::after` stroke, `::before` inner glow, and a `[data-beam-bloom]` child. Pico cannot inject that child, and **mask-composite on `::after` failed on Safari iOS**.

| Layer | What it is |
|---|---|
| **Host** (full-box) | Transparent `border` + **dual background**: `padding-box` = `--beam-fill`, `border-box` = short hotspot conic + localized color ellipses |
| `::before` (full-box) | **Inner glow** — edge-weighted color blobs + inset white highlight |
| `::after` (full-box) | **Outer bloom** — same hotspot, `filter: blur`, `z-index: -1` so only the spill reads |
| `::after` (line) | ≥3px traveling linear gradient (`background-position`). No mask. |
| `::before` (line) | Blurrier / taller copy of that gradient |

This is **not** a 360° rainbow conic and **not** a 3-layer mask. Those were the homework-border / iPhone-invisible failures.

## Safari / iOS strategy

The first vanilla port used `mask-composite` on a faint full rainbow. On WebKit:

1. Three-layer `-webkit-mask-composite: source-in, xor` is dropped. The ring vanishes.
2. Two-layer xor on `::after` still fights opaque Pico hairlines and can clip.
3. A faint full-ring rainbow reads as a gray hairline (Goddy’s `/ux-navbar-beam` iPhone shot).

What this rebuild does instead (techniques that paint on WebKit):

- **Full-box stroke is not a mask.** `border-color: transparent` + `background-clip: padding-box, border-box`. The interior is `--beam-fill` (void `#000` on Deploy). The beam lives only in the border box. Same trick as a gradient border; the gradient is a **short hotspot**, not a sticker.
- **Navbar / line** does not use mask or `@property`. A 42%-wide linear gradient animates `background-position` from `-30%` to `130%`. Height is **3px**, opacity follows `--beam-strength` (default `1`) so it is obvious on a phone.
- `@property --beam-angle` drives the perimeter spin where supported. Initial value is `48deg` and keyframes declare `0% / 100%`, so missing `@property` freezes a **visible** arc instead of going blank.
- Bloom is `filter: blur()` on a duplicate hotspot / line — no mask-composite.
- Hue keyframes restate `blur(var(--beam-blur))` so bloom layers keep their blur while shifting hue.

## Knobs

| Var | Default | Notes |
|---|---|---|
| `--beam-size` | `2px` | Transparent border thickness (full-box). Line stroke is 3px. |
| `--beam-strength` | `1` | 0–1. Bumped so the seam is visible on iPhone void; Goddy can still turn it down. |
| `--beam-duration` | `2.2s` (box) / `3.1s` (line) | Library md `1.96` / line `3.1` |
| `--beam-radius` | `inherit` | Pico sets `--pico-border-radius` |
| `--beam-fill` | `#000000` | Interior under the dual background. Secondary sets gray-100. |
| `--beam-saturation` | `1.16` | Library stock `1.2` |
| `--beam-brightness` | `1.32` | Library stock `1.3` |

Classes: `.border-beam` · `.border-beam--bottom` / `--line` · `.border-beam--sm` · `.border-beam--pulse` · `.border-beam-focus` · `.no-beam` (not on navbars).

## What this is not

- Not a husk color slot.
- Not a filled rainbow surface.
- Not the React package at runtime.
- Not a 3-second medal on *content* — the fill stays void. The seam is allowed to be readable.
