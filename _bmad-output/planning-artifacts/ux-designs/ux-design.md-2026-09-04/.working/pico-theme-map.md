# Pico CSS ← Archanglic token map

Implementation target: a **Pico CSS v2 custom theme** (classless or classed). Load Pico, then [`archanglic.pico.css`](../archanglic.pico.css). Force `data-theme="dark"`. Light is collapsed into the same void (one appearance).

Sketch only. Husk opens stay TODO. `--arch-primary: #ededed` in the CSS is **board option a as a placeholder** so Pico’s default cyan `#01aaff` never leaks. It is not locked.

## Locked → Pico

| Archanglic | Hex | Pico vars |
|---|---|---|
| `surface` / `background-200` | `#000000` | `--pico-background-color`, `--pico-card-background-color`, `--pico-form-element-background-color`, `--pico-code-background-color` |
| `on-surface` | `#ededed` | `--pico-color`, `--pico-h1-color`…`--pico-h5-color`, `--pico-form-element-color` |
| `background-100` | `#0a0a0a` | `--pico-card-sectioning-background-color`, `--pico-table-row-stripped-background-color` |
| `tertiary` / `gray-900` | `#a1a1a1` | `--pico-muted-color`, `--pico-h6-color`, `--pico-mark-background-color` |
| `gray-400` | `#2e2e2e` | `--pico-muted-border-color`, `--pico-table-border-color`, `--pico-form-element-border-color` (until husk `outline`) |
| `gray-100` | `#1a1a1a` | `--pico-secondary-hover-background`, `--pico-dropdown-hover-background-color` |
| secondary omitted | ghost | `--pico-secondary-background: transparent`; border = `--arch-outline` |
| no elevation | — | `--pico-box-shadow: none`, `--pico-card-box-shadow: none` |

Geist gray-100…900 also exist as `--arch-gray-*` on `:root` for anything Pico does not name.

## Open husk → Pico (TODO placeholders)

| Husk | Pico | Placeholder (not locked) |
|---|---|---|
| `primary` | `--pico-primary`, `--pico-primary-background` | `#ededed` (option a) |
| `on-primary` | `--pico-primary-inverse` | `#000000` |
| `error` | `--pico-del-color`, `--pico-form-element-invalid-*` | `gray-500` until red pick |
| `on-error` | (invalid button inverse — not a Pico name) | `--arch-on-error` |
| `on-tertiary` | `--pico-mark-color` | `#000000` |
| `outline` | `--pico-form-element-active-border-color`, `--pico-blockquote-border-color`, `--arch-outline` | `#ededed` (Goddy: white or beam) |

Pico splits **link/accent** (`--pico-primary`) from **button fill** (`--pico-primary-background`). Option **c** (void fill) can keep links at `#ededed` while the button fill is `#000`. See the primary board.

## Classless + classed

Variables apply to both builds.

| Pico class / element | Archanglic read |
|---|---|
| `button` / `[type=submit]` | primary CTA ← `--pico-primary-background` (TODO) |
| `button.secondary` / `button.outline` | ghost second action (locked omitted secondary) |
| `button.contrast` | inverted type-white pill (Pico contrast, not husk primary until pick) |
| `mark` | tertiary badge |
| `.border-beam` | rainbow-glass opt-in (vanilla) |

## Do not

- Do not leave Pico default `--pico-primary: #01aaff` (Geist-adjacent blue).
- Do not ship Pico light.
- Do not use the React `border-beam` package in this theme.
