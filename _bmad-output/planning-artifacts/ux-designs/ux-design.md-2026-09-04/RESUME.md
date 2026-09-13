# Archanglic DESIGN.md — resume

Cloud session 2026-09-13. Continues the paused coaching run on `main` (`wip: Archanglic DESIGN.md BMAD coaching state (paused mid Colors)`). Workspace stays this folder. Do not start a parallel design system.

**Implementation target (Goddy, this session):** Archanglic is a **Pico CSS v2 custom theme** (classless or classed) plus a **vanilla CSS** rainbow-glass edge. Not a React component library. The npm `border-beam` package remains the visual analogue only.

**Goddy rule — beam SSOT:** the recipe lives in **[`border-beam.css`](./border-beam.css)** only. Pico `@import`s it. Do not copy `@keyframes`, `@property --beam-angle`, or conic-gradient recipes elsewhere.

**Navbar rule:** every navbar bottom uses that beam (`nav`, `[role="navigation"]`, `.arch-navbar`). Never a gray hairline.

## Where it stopped

Colors, mid husk slots. Brand & Style + voice already locked. The last live dashes (`/ux-color-board`, `/ux-beam`) lived on arch-gcs; this resume does not revive Tailscale. Open locally:

- [`.working/decision-boards/index.html`](.working/decision-boards/index.html) — **on-error a/b/c now** (ink on locked `#eb1000`; three fat columns; they do not stack)
- [`.working/decision-boards/queued.md`](.working/decision-boards/queued.md) — same question in text
- [`.working/pico-theme-demo.html`](.working/pico-theme-demo.html) — Pico classed sketch: void Deploy + shared hotspot/bloom beam; **navbar bottoms required**
- [`.working/ux-navbar-beam.html`](.working/ux-navbar-beam.html) — Deploy + navbar bottom on void (Safari proof surface)
- Beam SSOT: [`border-beam.css`](./border-beam.css) — Safari notes in [`.working/border-beam-vanilla.md`](.working/border-beam-vanilla.md)

Prior visual QA failure: husk-board painted the word “Archanglic” and offered `#ededed` / `#ffffff` / alias-of-a. Those two whites are **1.17:1** against each other — they look identical. This board does not repeat that trio.

## Locked (do not reopen)

**Identity.** Archanglic (typo intentional). Shared public visual identity for Goddy’s personal work and Archangl Dev Ltd. One dark appearance only. Fork of Geist tokens that belong in a DESIGN.md — **must not be mistaken for Vercel**.

**Brand & Style.** Obsidian scalpel. Smart developer. Elevated, restrained to the point of defiance. Quiet bravado. Cold metal; rainbow-glass only in the seams, optional, in the bag. Still yet eager. Younger, more brilliant brother of Geist. `^^` is the logo. Errors: rustc. Humor: none in product chrome. Live-site keepers: black field, off-white text, current face, heading size/proportion. Refero SpaceX/AuthKit/LamaLama = **tone** for prose, not layout rules.

**Voice.** Letter (whitepapers/articles/README) · Blade (UI, rustc, no jokes) · Needle (optional, in the bag, like rainbow-glass). Full craft: [`.working/voice-guide.md`](.working/voice-guide.md).

**Colors already locked.**

| Slot | Value | Rule |
|---|---|---|
| `surface` / `background` / `background-200` | `#000000` | Always, unless an alternate is specified |
| `on-surface` / `on-background` | `#ededed` | Text white. Default pairing: this on `surface`. Not a gray step. Not husk `primary`. |
| `background-100` | `#0a0a0a` | Rare alternate only. Not a type preset. `#ededed` on `#0a0a0a` is not a preset. |
| `gray-100` … `gray-900` | Geist hexes | Neutral ladder. No override. |
| `secondary` / `on-secondary` | omitted | Ghost on surface. No second fill hue. Second-action look is chrome (light shade + thin beam), not a palette. |
| `tertiary` | `#a1a1a1` | Rare emphasis badge. Distinct from ghost secondary. |
| `primary` | `#000000` | **c.** Void fill + hairline / thin rainbow-glass beam. Not a filled pill. Pico: `--pico-primary-background: #000`; links `--pico-primary: #ededed`. |
| `on-primary` | `#ededed` | **a.** Ink on the void/beam Deploy. Same as `{colors.on-surface}`. Pico `--pico-primary-inverse`. |
| `error` | `#eb1000` | **c / write-in.** Adobe red. Invalid / destructive. Not a Geist ladder. Pico `--arch-error`. |
| Geist accent ladders | **not used** | Do not reuse blue/red/amber/green/teal/purple/pink as brand accents. |
| Snippet/tree | [`archanglic.css`](./archanglic.css) | DESIGN.md only points at it. Tree: canopy `#7ee787`, bough Grok-orange TBD, twig Knicks `#006bb6`. |
| `border-beam` | analogue, not a husk slot | Rainbow-glass = edge-only chromatic seam. **SSOT:** [`border-beam.css`](./border-beam.css). Navbar bottoms **required** (`nav` / `[role=navigation]` / `.arch-navbar`, `--beam-placement: bottom-edge`). Other chrome opt-in via classes and `--beam-*` knobs. Not React. |

**Elevation constraint (locked, phase still later).** No materials or layers on fills. No WIG layered shadows. Depth = hairline / contrast / optional rainbow-glass on chrome.

**Contrast floor.** WCAG AA 4.5:1 (not WIG APCA), unless Goddy overrides.

## Open questions

Answer **on-error** first (rapid-fire). Do not reopen primary / on-primary / error. Everything else stays queued.

1. **NOW — husk `on-error`.** a / b / c on the decision board. Exact question below.
2. Then, one slot at a time: `on-tertiary` → `outline` → `outline-variant` → border-beam size → border-beam strength.
3. Grok bough orange (tree floor, not a husk slot): night-ember `#ff9e64` (current default) / path-amber `#f1bd00` / warn-gold `#ebd96e` / token-sun `#ffdb69`.
4. Confirm vanilla `.border-beam` knobs (size/strength) after husk colors. React `border-beam` is not in the theme. The recipe is already one file.
5. Typography phase after Colors close. Live-site typeface is a candidate to *show*, not auto-locked. Palette-page `ui-sans-serif, system-ui` is not the identity.

## Exact next question

**Husk `on-error` — ink on locked error fill `#eb1000`. The Delete label is the token.**

Fill stays Adobe red in every column. Only the ink hex changes. The word “Archanglic” is always `#ededed`. Columns do not stack; scroll sideways.

| | Hex | Role |
|---|---|---|
| **a** | `#ffffff` | hot white on Adobe red. vs page text `#ededed` is 1.17:1 — if Delete looks like body copy, say so |
| **b** | `#000000` | void ink on the red fill. Distinct from a |
| **c** | `#690005` | deep maroon. May collapse into the fill — if you cannot read Delete, do not pick c |

Reply with `on-error: a` / `on-error: b` / `on-error: c`. Pico: `--arch-on-error`. Do not invent a lock.

## Remaining phase ladder

1. **Colors** (now) — finish husk slots + beam knobs + bough orange; wire picks into `archanglic.pico.css`
2. **Typography** (Pico `--pico-font-family-*` still unlocked)
3. Layout & Spacing
4. Elevation & Depth (constraints locked; beam knobs still open)
5. Shapes (`--pico-border-radius` still Geist 6/8/12/16 candidates)
6. Components (Pico atoms + Archanglic domain)
7. Do's and Don'ts polish
8. Finalize (distill spines; EXPERIENCE.md stays thin unless a product surface shows up)

## This session added

- This file
- `DESIGN.md` filled with locked Brand & Style, voice, locked Colors, Pico as implementation target
- `border-beam.css` — **only** `@property` / `@keyframes` / gradient recipe; consumers `@import` or opt in
- `archanglic.pico.css` — Pico variable map; `@import`s the beam file; knobs only
- `.working/pico-theme-map.md`, `.working/pico-theme-demo.html`
- `.working/decision-boards/` — primary + on-primary + error locked; on-error board live
- `border-beam.css` — fidelity rebuild (hotspot + inner glow + bloom; Safari two-mask xor; line travels `left`)
- `.working/border-beam-vanilla.css` — re-export of `border-beam.css`
- `.working/ux-navbar-beam.html` — Deploy + navbar bottom proof
- Memlog events for the resume, Pico target, primary/on-primary/error locks, beam SSOT + fidelity rebuild
