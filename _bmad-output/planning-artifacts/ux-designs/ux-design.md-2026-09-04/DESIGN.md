---
name: Archanglic
status: draft
updated: 2026-09-13
stylesheet: ./archanglic.css
pico_theme: ./archanglic.pico.css
border_beam: ./border-beam.css
description: Shared dark visual identity for Goddy Bush and Archangl Dev Ltd. One appearance. Husk error still open.
omitted:
  - section: typography
    reason: Dedicated phase after Colors. Live-site typeface is a candidate to show, not locked. Palette-page ui-sans-serif/system-ui is not the identity.
  - section: spacing
    reason: Layout & Spacing not started.
  - section: rounded
    reason: Shapes not started.
  - section: components
    reason: Components not started.
colors:
  surface: '#000000'
  on-surface: '#ededed'
  background: '#000000'
  on-background: '#ededed'
  background-200: '#000000'
  background-100: '#0a0a0a'
  gray-100: '#1a1a1a'
  gray-200: '#1f1f1f'
  gray-300: '#292929'
  gray-400: '#2e2e2e'
  gray-500: '#454545'
  gray-600: '#878787'
  gray-700: '#8f8f8f'
  gray-800: '#7d7d7d'
  gray-900: '#a1a1a1'
  tertiary: '#a1a1a1'
  primary: '#000000'
  on-primary: '#ededed'
---

# Archanglic

Snippet and tree painting live in [`archanglic.css`](./archanglic.css). This file points there for that contract and does not duplicate it.

**Implementation target:** a [Pico CSS](https://picocss.com/) v2 custom theme (classless or classed) plus vanilla rainbow-glass. Load Pico, then [`archanglic.pico.css`](./archanglic.pico.css) (which `@import`s [`border-beam.css`](./border-beam.css) — the only beam recipe). One dark appearance (`data-theme="dark"`; Pico light is collapsed into the void). Mapping: [`.working/pico-theme-map.md`](.working/pico-theme-map.md). Goddy does not use React; do not implement chrome with the npm `border-beam` package.

Husk `primary` is **locked**: void fill `{colors.primary}` (`#000000`) plus hairline / thin rainbow-glass beam. Not a filled pill. Pico split: `--pico-primary-background` is the void; `--pico-primary` (links) stays `{colors.on-surface}` (`#ededed`). Husk `on-primary` is **locked** `{colors.on-primary}` (`#ededed`) — same voice as page text. Next slot is `error` — [`.working/decision-boards/`](.working/decision-boards/). Do not treat any Geist accent ladder as a stand-in.

## Brand & Style

> Obsidian scalpel

Archanglic is an **obsidian scalpel**: primordial, still unsurpassed, aimed at 2030. It is made for a **smart developer**. To a newcomer it is polished and aspirational; to a peer it feels made by someone at least as competent. Neutral — no one is the wrong audience.

It is **elevated** and **restrained to the point of defiance**. It never announces superiority. **Quiet bravado**: it will sneer at sloppy work with carefree confidence, never lament.

**Cold metal**, with fantasy and life only **beneath the surface**. That life shows as **rainbow-glass** — an inorganic facade of a living miracle — optional, in the bag, not a medal, not a 3-second signature. Apply it to borders or accents of any chrome that should feel alive. Everywhere else: austere, muted, professional, clean, flawless.

**Perfection** is the absence of flaws in what was chosen, not completeness. A one-person studio does not cover everything; nothing that ships is sloppy.

**Still yet eager.** A blade so sharp it wants to cut, that never moves until the hand does, then meets the will as if it had already started.

The UI **expects** understanding, intelligence, and competence. Explanatory copy lives in READMEs. The product assumes you already think like us.

`^^` is the **logo**.

**Younger, more brilliant brother of Geist.** Geist is restrained almost to scared. Archanglic’s vision bursts at the seams; the seams are rainbow-glass, the only color in the austere field. Fork Geist’s tokens that belong here. **Must not be mistaken for Vercel.**

Errors: **rustc**. This is broken. You can’t do this. May I suggest _x_?

Humor in product chrome: **none**.

From live sites, keep: black canvas, off-white text, the current typeface, heading size and proportion. Invented here: voice, rainbow-glass use, variety, depth, structure.

This is the shared public-facing visual identity for everything Goddy makes: personal showcase, blog, whitepapers, and production apps by Archangl Dev Ltd.

### Voice — three registers

Pick **one** per piece. Full craft: [`.working/voice-guide.md`](.working/voice-guide.md).

| Surface | Register |
|---|---|
| UI, labels, empty states, errors | **Blade** — few words, diagnosis + next move, no jokes |
| Whitepapers, articles, READMEs, long ABOUT | **Letter** — scene or claim, load-bearing analogy, named diagnosis, imperative prescription, earned hats-off |
| Blog posts and other pieces that specifically call for it | **Needle** — polished sarcasm, informality; optional, in the bag, same rule as rainbow-glass |

**Letter.** Second person to institutions and peers. First person for taste and work. Never “we’re a family.” Titles Title Case; bodies sentence case. One analogy per piece. Do not stack metaphors. Do not soften a broken thing.

**Blade.** Specific verbs. Not “Continue” — name the object. Title Case on action buttons; sentence case on marketing/hero. Success is understated (“Deployed.”). No emoji, no sarcasm sparkles, no completeness theater.

**Needle.** Not a signature, not a medal, not the default. Not an X/timeline voice (Goddy writes X himself). Posts supply craft, not a surface list of places to avoid.

Copy that is Vercel marketing, Geist-scared hedging, or “everything you need” is off-brand.

Web-interface-guidelines (mirrored here, not dumped): active voice; as few words as possible; consistent nouns; errors tell how to fix; unambiguous labels; `translate="no"` on brand/product/code tokens; non-breaking spaces on glued units (`10 MB`).

## Colors

One dark canvas. No light-mode tokens. No `*-dark` suffix pairs.

Geist gray / canvas tokens fork. Geist **blue / red / amber / green / teal / purple / pink ladders do not.** Brand accents fill spec-perfect husk slots. Rainbow-glass is not a husk color; it is an edge treatment (see below).

### Locked palettes

- **Void (`surface`, `background`, `background-200`, `#000000`).** Primary background. Always used unless an alternate is specified. Default element fill is this, not Geist’s `#0a0a0a`.
- **Voice (`on-surface`, `on-background`, `#ededed`).** The white used for text. Default type preset: `{colors.on-surface}` on `{colors.surface}`. Not a gray step.
- **Primary (`#000000`).** Void fill of the main action. Not wallpaper. Not a pill. The control is hairline `{colors.outline}` (TODO, placeholder white) plus thin `.border-beam`. Pico: `--pico-primary-background: #000000`; links `--pico-primary: #ededed`.
- **On-primary (`#ededed`).** Ink on the void/beam Deploy. Same voice as `{colors.on-surface}`. Pico `--pico-primary-inverse`.
- **Rare fill (`background-100`, `#0a0a0a`).** Alternate surface only, used rarely. `#ededed` on `#0a0a0a` is **not** a type preset.
- **Gray ladder (`gray-100`–`gray-900`).** Geist neutrals for component fill / hover / borders / secondary text. Roles stand until overridden. `{colors.gray-400}` (`#2e2e2e`) is the default hairline in the ladder; husk `outline` may still replace that for chrome (TODO).
- **Tertiary (`#a1a1a1`).** Rare emphasis badge. Same hex as `{colors.gray-900}`; the slot exists so a badge is not a ghost second-action. Must stay distinct from omitted secondary.
- **Secondary.** Omitted. Ghost on `{colors.surface}`. No second fill hue. Second-action buttons experiment with a light shade plus thin border-beam (chrome, not a palette).

### Open husk slots (TODO)

Resolve one at a time. Board: [`.working/decision-boards/`](.working/decision-boards/). Do not reopen `{colors.primary}` or `{colors.on-primary}`.

| Slot | Status |
|---|---|
| `error` | **TODO — answer now.** Must be red somewhere. Not a Geist red ladder. See [`RESUME.md`](./RESUME.md). |
| `on-error` | TODO after `error` |
| `on-tertiary` | TODO. Ink on `{colors.tertiary}`. Distinct from ghost secondary. |
| `outline` | TODO. White or border-beam — not the gray hairline options already rejected. |
| `outline-variant` | TODO. White, beam, or omit. |

`primary` is only the main action on a screen, never wallpaper (Paws / Totality). Every fill hue gets a contrasting on-color (quality-bar). Error is its own palette, never primary recycled as “angry” (Paws).

### Rainbow-glass (not a husk slot)

Muted pastel chromatic seam on accents, shimmers, active shading, and some chrome borders. Optional, in the bag. Does **not** replace `{colors.gray-400}` / `500` / `600` and does **not** fill surfaces.

Implementation: **one file** — [`border-beam.css`](./border-beam.css). `archanglic.pico.css` `@import`s it. [`.working/border-beam-vanilla.css`](.working/border-beam-vanilla.css) re-exports it. Do **not** copy `@keyframes`, `@property --beam-angle`, or the conic-gradient recipe into nav CSS, the Pico theme, or demos.

Opt-in / adapt via classes or knobs: `.border-beam` (full-box), `.border-beam-bottom` / `data-beam-placement="bottom-edge"` (navbar), `.border-beam-focus` (focus rings), `--beam-size`, `--beam-strength`, `--beam-duration`, `--beam-placement`. Pico wires primary Deploy, `nav` bottoms, and `button.secondary` chrome to that same recipe (opt out with `.no-beam`). The React `border-beam` library is the analogue that named the effect — not a dependency. Size/strength knobs are TODO.

Honor `prefers-reduced-motion`. Do not band the fade. Do not treat stock `strength: 1` orbit as the signature — that is a 3-second medal.

### Snippet / tree

Do not restyle in this file. [`archanglic.css`](./archanglic.css) owns inline code, `pre.snippet`, `pre.tree`, and extension colors. Tree floors: canopy `#7ee787`; bough **TODO** (Grok orange pick); twig Knicks `#006bb6`.

### Contrast

Text-on-fill ≥ 4.5:1 WCAG AA. Hover / active / focus increase contrast vs rest. Do not rely on color alone for status.

## Do's and Don'ts

- Do keep the canvas `{colors.surface}` (`#000000`) unless an alternate is specified.
- Do set body text in `{colors.on-surface}` (`#ededed`) on that canvas.
- Do treat rainbow-glass as optional seam, not a filled rainbow surface.
- Do write Blade errors as rustc: what is broken, you cannot do this, may I suggest _x_.
- Do honor `prefers-reduced-motion` on any beam.
- Don’t fork Geist blue/red/amber/green/teal/purple/pink as brand accents.
- Don’t add a light theme, `*-dark` pairs, or a second appearance in this file.
- Don’t put materials, glass plates, or layered shadows on backgrounds and fills.
- Don’t look like Vercel (forbidden cousin), even as a Geist fork.
- Don’t put Needle or jokes in product chrome.
- Don’t use `{colors.tertiary}` as a second-action fill — secondary is omitted (ghost).
- Don’t restyle snippets/trees here; change `archanglic.css`.
- Don’t fill `{colors.primary}` as a light pill — it is void + hairline / thin beam.
- Don’t leave Pico’s default cyan `--pico-primary: #01aaff` in a shipped theme.
- Don’t implement rainbow-glass with the React `border-beam` package.
- Don’t duplicate the beam recipe; edit [`border-beam.css`](./border-beam.css) only.
