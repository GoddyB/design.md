# Body sections

All sections use `##` headings. An optional `#` title is not parsed as a section. Sections that are present **must appear in this order**. Omit a section only when it is irrelevant; if a matching token group is also absent, record it in `omitted` (CAP-5).

| # | Canonical | Aliases | Token group |
|---|---|---|---|
| 1 | Overview | Brand & Style | — |
| 2 | Colors | | `colors` |
| 3 | Typography | | `typography` |
| 4 | Layout | Layout & Spacing | `spacing` |
| 5 | Elevation & Depth | Elevation | — (prose only) |
| 6 | Shapes | | `rounded` |
| 7 | Components | | `components` |
| 8 | Do's and Don'ts | | — |

Official examples use the aliases **Brand & Style** and **Layout & Spacing**. Either form is valid.

Prose may use descriptive color names (e.g. "Boston Clay") that correspond to systematic token names (e.g. `tertiary`). Tokens remain normative.

## Overview (Brand & Style)

Holistic look-and-feel. Must name:

- Brand personality
- Target audience
- Emotional response the UI should evoke (playful vs professional, dense vs spacious, light vs immersive, etc.)

This is the fallback when a specific rule or token is missing. A strong Overview also names the chosen style movement (e.g. modern corporate, glassmorphism, high-contrast cosmic) so an agent can improvise on-brand.

## Colors

Defines palettes. **At least `primary` must exist** when `colors` is present. Additional palettes as needed. Common semantic order: `primary`, `secondary`, `tertiary`, `neutral`.

Prose maps each palette to **use**, not only a hex: what it drives (CTAs, borders, canvas, errors). When several palettes exist, assign a role to each. Color tokens are derived from the palettes named in prose; the mapping may use any consistent naming convention.

If the canvas is a gradient, image, or other non-solid, prose specifies that treatment (stops, direction, where it sits). `colors` values remain solid CSS colors; the composition lives in prose.

## Typography

Defines type levels. Typical systems have 9–15 levels; that count is guidance, not a floor (see `quality-bar.md`). Common categories: `headline` / `display`, `body`, `label`, `caption`, optionally split by size (`sm` / `md` / `lg`).

Prose states font choice rationale, weight strategy, and any treatment that tokens cannot hold (uppercase+tracking, glow, extra weight on noisy backgrounds).

## Layout (Layout & Spacing)

Layout model and spacing strategy. Examples of models named in the format spec: fluid grid, fixed-max-width grid, margins/safe areas/dynamic padding (Liquid Glass-style).

Prose states base unit (official examples: 8px, sometimes with a 4px half-step), grouping/containment, and max width or outer margin if the model uses them. `spacing` tokens hold the scale and any named slots (gutters, margins, column counts as unitless numbers).

## Elevation & Depth

How hierarchy is conveyed. If elevation is used, give the required styling (spread, blur, color/tint, opacity). If the system is flat, name the alternative (borders, tonal layers, color contrast).

No YAML group. Glass systems specify stack levels (base / panel / elevated), `backdrop-filter` blur, edge stroke, and glow in this section.

## Shapes

How visual elements are shaped. Map radius (or sharpness) to element classes: buttons, cards, inputs, badges, icons (stroke caps). `rounded` tokens hold the scale.

## Components

Style guidance for atoms. Spec-encouraged types (define those that exist; add domain-specific ones):

- Buttons — primary / secondary / tertiary; sizing, padding, states
- Chips — selection, filter, action
- Lists — items, dividers, leading/trailing
- Tooltips — position, color, timing
- Checkboxes — checked, unchecked, indeterminate
- Radio buttons — selected, unselected
- Input fields — text, textarea, labels, helper, error

The components specification is actively evolving; extra domain components are expected (profile cards, weather displays, festival badges).

Official examples use `###` subsections under Components (Action Elements, Containers, Inputs, Typography Application). That heading level is not a parsed section; it is allowed prose structure.

## Do's and Don'ts

Practical guardrails and pitfalls. Optional as a **heading** if equivalent concrete do/don't rules already live in the sections above (all three official examples omit this heading). When present, use imperative pairs (do / don't), not slogans.
