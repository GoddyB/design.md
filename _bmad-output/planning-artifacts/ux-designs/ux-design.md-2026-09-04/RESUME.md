# Archanglic DESIGN.md — resume

Cloud session 2026-09-13. Continues the paused coaching run on `main` (`wip: Archanglic DESIGN.md BMAD coaching state (paused mid Colors)`). Workspace stays this folder. Do not start a parallel design system.

**Implementation target (Goddy, this session):** Archanglic is a **Pico CSS v2 custom theme** (classless or classed) plus a **vanilla CSS** rainbow-glass edge. Not a React component library. The npm `border-beam` package remains the visual analogue only.

**Goddy rule — beam SSOT:** the recipe lives in **[`border-beam.css`](./border-beam.css)** only. Pico `@import`s it. Demos and nav opt in via classes / `--beam-*` knobs. Do not copy `@keyframes`, `@property --beam-angle`, or conic-gradient recipes elsewhere.

## Where it stopped

Colors, mid husk slots. Brand & Style + voice already locked. The last live dashes (`/ux-color-board`, `/ux-beam`) lived on arch-gcs; this resume does not revive Tailscale. Open locally:

- [`.working/decision-boards/index.html`](.working/decision-boards/index.html) — **error a/b/c now** (three fat columns; they do not stack)
- [`.working/decision-boards/error.md`](.working/decision-boards/error.md) — same question in text
- [`.working/pico-theme-demo.html`](.working/pico-theme-demo.html) — Pico classed sketch: void Deploy + shared beam, nav `bottom-edge`
- Queued slots: [`.working/decision-boards/queued.md`](.working/decision-boards/queued.md)

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
| `on-primary` | `#ededed` | Ink on the void/beam Deploy. Same as `{colors.on-surface}`. Pico `--pico-primary-inverse`. |
| Geist accent ladders | **not used** | Do not reuse blue/red/amber/green/teal/purple/pink as brand accents. |
| Snippet/tree | [`archanglic.css`](./archanglic.css) | DESIGN.md only points at it. Tree: canopy `#7ee787`, bough Grok-orange TBD, twig Knicks `#006bb6`. |
| `border-beam` | analogue, not a husk slot | Rainbow-glass = edge-only chromatic seam. **SSOT:** [`border-beam.css`](./border-beam.css). Pico/nav/demos adapt via classes and `--beam-size` / `--beam-strength` / `--beam-duration` / `--beam-placement`. Not React. |

**Elevation constraint (locked, phase still later).** No materials or layers on fills. No WIG layered shadows. Depth = hairline / contrast / optional rainbow-glass on chrome.

**Contrast floor.** WCAG AA 4.5:1 (not WIG APCA), unless Goddy overrides.

## Open questions

Answer **error** first (rapid-fire). Everything else stays queued.

1. **NOW — husk `error`.** a / b / c on the decision board. Exact question below.
2. Then, one slot at a time: `on-error` → `on-tertiary` → `outline` → `outline-variant` → border-beam size → border-beam strength.
3. Grok bough orange (tree floor, not a husk slot): night-ember `#ff9e64` (current default) / path-amber `#f1bd00` / warn-gold `#ebd96e` / token-sun `#ffdb69`.
4. Confirm vanilla `.border-beam` knobs (size/strength) after husk colors. React `border-beam` is not in the theme. The recipe is already one file.
5. Typography phase after Colors close. Live-site typeface is a candidate to *show*, not auto-locked. Palette-page `ui-sans-serif, system-ui` is not the identity.

## Exact next question

**Husk `error` — invalid / destructive. Must be red somewhere. Not a Geist red ladder.**

Paws: error is its own palette, never primary recycled as “angry.” Official-example one-liner: error is diagnosis, not a second primary.

The word “Archanglic” is always `#ededed`. Look at the **invalid line** (a, c) or the **Delete fill** (b).

| | Hex | Role | vs `#000` | vs `#ededed` |
|---|---|---|---|---|
| **a** | `#ffb4ab` | Atmospheric/Totality dark-theme error — **text on black** | 12.37:1 AA | 1.45:1 fail as fill under type-white |
| **b** | `#ba1a1a` | Paws error — **filled Delete** | 3.25:1 fail as text-on-black | 5.52:1 AA as fill under type-white |
| **c** | `#c45c5c` | muted rust, still clearly red — **text on black** | 5.03:1 AA | 3.56:1 fail as fill under type-white |

a and c are line-on-void. b is a pill. Pick the job, then the hex.

Reply with `error: a` / `error: b` / `error: c`, or a write-in hex that is **not** a Geist accent ladder and is not `{colors.primary}` recycled as angry.

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
- `.working/decision-boards/` — primary + on-primary locked; error board live
- `.working/border-beam-vanilla.css` — re-export of `border-beam.css`
- Memlog events for the resume, Pico target, primary/on-primary locks, beam SSOT
