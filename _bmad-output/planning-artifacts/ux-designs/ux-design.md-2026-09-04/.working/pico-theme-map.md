# Pico CSS ← Archanglic token map

Implementation target: a **Pico CSS v2 custom theme** (classless or classed). Load Pico, then [`archanglic.pico.css`](../archanglic.pico.css). That theme `@import`s [`border-beam.css`](../border-beam.css) — **the only beam recipe**. Force `data-theme="dark"`. Light is collapsed into the same void (one appearance).

Sketch only. Remaining husk opens stay TODO.

## Locked → Pico

| Archanglic | Hex | Pico vars |
|---|---|---|
| `surface` / `background-200` | `#000000` | `--pico-background-color`, `--pico-card-background-color`, `--pico-form-element-background-color`, `--pico-code-background-color` |
| `on-surface` | `#ededed` | `--pico-color`, `--pico-h1-color`…`--pico-h5-color`, `--pico-form-element-color` |
| `background-100` | `#0a0a0a` | `--pico-card-sectioning-background-color`, `--pico-table-row-stripped-background-color` |
| `tertiary` / `gray-900` | `#a1a1a1` | `--pico-muted-color`, `--pico-h6-color`, `--pico-mark-background-color` |
| `gray-400` | `#2e2e2e` | `--pico-muted-border-color`, `--pico-table-border-color`, `--pico-form-element-border-color` (until husk `outline`) |
| `gray-100` | `#1a1a1a` | `--pico-secondary-hover-background`, `--pico-dropdown-hover-background-color`; second-action rest fill (chrome, not a hue) |
| `primary` | `#000000` | `--pico-primary-background` (void). Not a pill. |
| `on-primary` | `#ededed` | `--pico-primary-inverse` / `--arch-on-primary` |
| primary links | `#ededed` | `--pico-primary` (`--arch-primary-link`) — Pico split from button fill |
| secondary omitted | chrome | `--pico-secondary-background: gray-100` + thin beam; `.outline.secondary` stays ghost |
| no elevation | — | `--pico-box-shadow: none`, `--pico-card-box-shadow: none` |

Geist gray-100…900 also exist as `--arch-gray-*` on `:root` for anything Pico does not name.

## Open husk → Pico (TODO placeholders)

| Husk | Pico | Placeholder (not locked) |
|---|---|---|
| `error` | `--pico-del-color`, `--pico-form-element-invalid-*` | `gray-500` until red pick |
| `on-error` | (invalid button inverse — not a Pico name) | `--arch-on-error` |
| `on-tertiary` | `--pico-mark-color` | `#000000` |
| `outline` | `--pico-form-element-active-border-color`, `--pico-blockquote-border-color`, `--arch-outline` | `#ededed` (Goddy: white or beam) |

## Rainbow-glass (one recipe)

[`border-beam.css`](../border-beam.css) owns `@property --beam-angle`, `@keyframes`, and the conic/linear gradient. This theme **must not** copy those.

| Surface | How it opts in |
|---|---|
| primary Deploy | Pico `button` / `[type=submit]` (not `.secondary` / `.contrast` / `.outline`) — full-box. Opt out: `.no-beam` |
| navbar bottom | `nav` — `--beam-placement: bottom-edge` (class `.border-beam-bottom` also works) |
| second-action | `button.secondary` (not `.outline`) — light shade + thin full-box beam |
| focus rings | class `.border-beam-focus` on a wrapper (`:focus-within`); not on `<input>` itself |
| any other chrome | class `.border-beam` or `data-beam-placement` |

Knobs (override per element, do not fork the recipe): `--beam-size`, `--beam-strength`, `--beam-duration`, `--beam-placement`.

## Classless + classed

Variables apply to both builds.

| Pico class / element | Archanglic read |
|---|---|
| `button` / `[type=submit]` | primary CTA ← void fill + shared beam |
| `button.secondary` | second-action chrome (gray-100 + thin beam) |
| `button.outline.secondary` | ghost (no fill hue, no auto-beam) |
| `button.contrast` | inverted type-white pill (Pico contrast, not husk primary) |
| `nav` | bottom-edge beam |
| `mark` | tertiary badge |
| `.border-beam` / `.border-beam-bottom` / `.border-beam-focus` | extra rainbow-glass opt-in |

## Do not

- Do not leave Pico default `--pico-primary: #01aaff` (Geist-adjacent blue).
- Do not ship Pico light.
- Do not use the React `border-beam` package in this theme.
- Do not duplicate the beam recipe in this file, nav CSS, or demos.
- Do not fill `{colors.primary}` as a light pill.
