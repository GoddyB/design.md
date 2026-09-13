# Archanglic DESIGN.md — resume

Cloud session 2026-09-13. Continues the paused coaching run on `main` (`wip: Archanglic DESIGN.md BMAD coaching state (paused mid Colors)`). Workspace stays this folder. Do not start a parallel design system.

**Implementation target (Goddy, this session):** Archanglic is a **Pico CSS v2 custom theme** (classless or classed) plus a **vanilla CSS** rainbow-glass edge (`.border-beam`). Not a React component library. The npm `border-beam` package remains the visual analogue only.

## Where it stopped

Colors, mid husk slots. Brand & Style + voice already locked. The last live dashes (`/ux-color-board`, `/ux-beam`) lived on arch-gcs; this resume does not revive Tailscale. Open locally:

- [`.working/decision-boards/index.html`](.working/decision-boards/index.html) — **primary a/b/c first** (three fat columns; they do not stack)
- [`.working/decision-boards/primary.md`](.working/decision-boards/primary.md) — same question in text
- [`.working/pico-theme-demo.html`](.working/pico-theme-demo.html) — Pico classed sketch + `.border-beam`
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
| Geist accent ladders | **not used** | Do not reuse blue/red/amber/green/teal/purple/pink as brand accents. |
| Snippet/tree | [`archanglic.css`](./archanglic.css) | DESIGN.md only points at it. Tree: canopy `#7ee787`, bough Grok-orange TBD, twig Knicks `#006bb6`. |
| `border-beam` | analogue, not a husk slot | Rainbow-glass = edge-only chromatic seam. Vanilla CSS: [`archanglic.pico.css`](./archanglic.pico.css) `.border-beam` and [`.working/border-beam-vanilla.css`](.working/border-beam-vanilla.css). Not React. |

**Elevation constraint (locked, phase still later).** No materials or layers on fills. No WIG layered shadows. Depth = hairline / contrast / optional rainbow-glass on chrome.

**Contrast floor.** WCAG AA 4.5:1 (not WIG APCA), unless Goddy overrides.

## Open questions

Answer **primary** first (rapid-fire). Everything else stays queued.

1. **NOW — husk `primary`.** a / b / c on the decision board. Exact question below.
2. Then, one slot at a time: `on-primary` → `error` → `on-error` → `on-tertiary` → `outline` → `outline-variant` → border-beam size → border-beam strength.
3. Grok bough orange (tree floor, not a husk slot): night-ember `#ff9e64` (current default) / path-amber `#f1bd00` / warn-gold `#ebd96e` / token-sun `#ffdb69`.
4. Confirm vanilla `.border-beam` knobs (size/strength) after husk colors. React `border-beam` is not in the theme.
5. Typography phase after Colors close. Live-site typeface is a candidate to *show*, not auto-locked. Palette-page `ui-sans-serif, system-ui` is not the identity.
6. Pico `--pico-primary` is also **link color**. Option **c** (void fill) should keep links at `#ededed` via the split `--pico-primary` vs `--pico-primary-background`.

## Exact next question

**Husk `primary` — the FILL of the main action (the Deploy pill), not the word “Archanglic”, not the page text.**

Official-example one-liner (Paws): *“Primary: Use for main actions, active states, and highlights.”* Atmospheric Glass: *“Primary buttons are solid white for maximum contrast.”* SpaceX/LamaLama imports: *“primary action: no distinct CTA color.”*

| | hex | what you are looking at | vs `#000` | vs `#ededed` |
|---|---|---|---|---|
| **a** | `#ededed` | inverted type-white pill | 17.94:1 AA | 1.00:1 (cannot be on-primary) |
| **b** | `#8f8f8f` | colder metal pill (Geist `gray-700`, no new hue) | 6.49:1 AA | 2.76:1 — column is obviously dimmer than a |
| **c** | `#000000` | no distinct CTA fill; action is hairline / beam | 1.00:1 | 17.94:1 as *ink*, not as fill |

Pico: `a`/`b` set `--pico-primary-background` to that hex. `c` sets fill to `#000` and keeps `--pico-primary` (links) at `#ededed`.

Reply with `primary: a` / `primary: b` / `primary: c`, or a write-in hex that is **not** a Geist accent ladder. Do not pick the old `#ffffff` — it is 1.17:1 vs `#ededed` and already failed visual QA.

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
- `archanglic.pico.css` — Pico variable map + `.border-beam` (placeholders for open husk slots)
- `.working/pico-theme-map.md`, `.working/pico-theme-demo.html`
- `.working/decision-boards/` primary board + queued a/b/c cards
- `.working/border-beam-vanilla.css` + note — CSS vars `--beam-size` / `--beam-strength`, no React
- Memlog event for the resume
