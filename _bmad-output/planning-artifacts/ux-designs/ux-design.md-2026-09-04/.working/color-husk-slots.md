# Color slots — spec-perfect husk (not Geist accents)

Fill these. Geist blue/red/amber/green/teal/purple/pink ladders are **not** used as brand accents. **Error may be red** (Goddy, husk-board).

## Locked

| Slot | Value | Rule |
|---|---|---|
| `surface` / `background` | `#000000` | Always, unless an alternate is specified |
| `on-surface` / `on-background` | `#ededed` | Text white. Default: this on `surface`. Not a gray step. |
| `background-100` | `#0a0a0a` | Rare alternate only. Not a type preset. |
| `gray-100` … `gray-900` | Geist hexes | Neutral ladder. No override. |
| `secondary` | **omitted** | Ghost on surface. No second fill hue. |
| `on-secondary` | **omitted** | Travels with `secondary`. Second-action look is chrome (light shade + thin beam), not a palette. |
| `tertiary` | `#a1a1a1` | Rare emphasis. Distinct from ghost secondary. |
| `primary` | `#000000` | **c.** Void fill + hairline / thin rainbow-glass beam. **Not a filled pill.** Do not reopen. Pico: `--pico-primary-background: #000`; links `--pico-primary: #ededed`. |
| `on-primary` | `#ededed` | **a.** Ink on the void/beam Deploy. Same as `on-surface`. Pico `--pico-primary-inverse`. Do not reopen. |

## Pico map (locked)

See `.working/pico-theme-map.md`. Theme file: `archanglic.pico.css`. Beam recipe: `border-beam.css` (SSOT).

## Open (next dash)

`error` (red), `on-error`, `on-tertiary`, `outline` (white or border-beam), `outline-variant` (white or border-beam), border-beam knobs (size / strength).

Board: `.working/decision-boards/` — **error now**.
