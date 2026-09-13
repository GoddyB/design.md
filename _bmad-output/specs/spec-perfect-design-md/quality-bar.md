# Quality bar

Derived from the three official worked files (`paws-and-paths`, `atmospheric-glass`, `totality-festival`) plus format rules that those files demonstrate. This is completeness and craft, not taste: do not copy their palettes, typefaces, or moods.

A **strong** DESIGN.md satisfies every check below. Schema-valid alone is not enough.

## File

- [ ] Two-layer: YAML tokens + markdown body. Tokens normative; prose does not contradict them (if prose says buttons are 12px radius, `rounded` used by buttons is 12px / `0.75rem`).
- [ ] `name` set.
- [ ] Body sections that are present follow canonical order (`body-sections.md`).
- [ ] No duplicate `##` headings.
- [ ] All `{path.to.token}` references resolve.

## Color tokens

- [ ] `primary` exists.
- [ ] A canvas token exists (`surface`, `background`, or `neutral` used as page ground). This instance: **dark** canvas. Do not also encode a light palette in the same file.
- [ ] A default text-on-canvas token exists (`on-surface`, `on-background`, or equivalent).
- [ ] Every hue used as a component **fill** has a contrasting on-color (`on-primary`, `textColor` on the component, or equivalent).
- [ ] `error` / `on-error` exist if the system includes inputs or destructive actions.
- [ ] Prose names palettes with a descriptive handle **and** a token correspondence (e.g. a nickname plus `primary`), and states what each palette is for. Tokens are derived from those palettes.
- [ ] If the page ground is a gradient or image, prose specifies stops/placement; do not leave that only as a solid `surface` hex.

The official examples ship a large Material-style ladder (`surface-container-*`, `*-fixed`, `inverse-*`). That ladder is a valid pattern, not a requirement. Do not keep unused rungs unless they complete a role the prose actually uses.

## Typography tokens

- [ ] At least one display or headline level, one body level, one label level.
- [ ] Each of those levels sets `fontFamily` and `fontSize`. Strong files also set `fontWeight` and `lineHeight`.
- [ ] Prose states why the family (or families) was chosen and how weights/treatments apply (headlines vs body vs labels). Dual-font and single-font are both valid.
- [ ] 9–15 levels is typical per the format spec; 6–8 is what the official examples use. Do not pad empty levels to hit 9.

## Spacing and layout

- [ ] `spacing` defines a base unit and a usable scale (or named slots that cover component padding, gaps, and page margins).
- [ ] Layout prose names the model (fixed grid, fluid, max-width, safe-area) and the rhythm rule (official examples: 8px).

## Shape

- [ ] `rounded` covers the radii actually used (examples: `sm` → `full`, often with `DEFAULT`).
- [ ] Shapes prose assigns a radius (or sharp) to buttons, cards/containers, and inputs at minimum. Icon stroke/cap guidance belongs here when icons matter.

## Elevation

- [ ] Elevation & Depth gives a **recipe**, not a slogan: blur/spread/opacity and tint, or the flat alternative (border, tonal step).
- [ ] Glass systems specify stack levels, backdrop blur, 1px edge stroke, and whether glow is tinted.

## Components

- [ ] `button-primary` (or equivalent primary CTA) with `backgroundColor` + `textColor`, and a hover or equivalent interactive sibling.
- [ ] At least one input (or explicit `omitted` + reason if the product has no forms).
- [ ] At least one container/card.
- [ ] At least one **domain** component beyond generic button/input/card (examples: `card-walk-stat`, `weather-display-large`, `badge-celestial`, `hero-headline`).
- [ ] Component tokens prefer `{refs}` to primitives over duplicated literals, except where a literal is the point (`rgba` glass fill, `transparent`).
- [ ] Contrast of each text-on-fill pair is ≥ 4.5:1 (WCAG AA normal text).
- [ ] Body Components section tells the agent how to apply those tokens (which card is the hero, which radius on which atom, state timing if any).

## Guardrails

- [ ] Concrete do/don't rules exist. They may live under `## Do's and Don'ts` or be inline in other sections (official examples: primary used only for main actions; never crowd; never solid glass fills; don't mix aggressive sharp with the stated radius language).

## Allowed omissions (still strong)

- `version`, `description`, `omitted` unused because nothing is missing.
- `## Do's and Don'ts` heading, if guardrails are inline.
- Chips, tooltips, checkboxes, radios — if the product does not use them (say so in Components or `omitted`).
- Extra unknown `##` sections (Iconography, Motion): allowed and preserved; not required. Official examples put icon notes in Shapes and motion (e.g. 150ms ease) in Components.

## Not part of the quality bar

- Presence of `tailwind.config.js` or `design_tokens.json` (derived consumers).
- Zero orphaned color tokens (examples keep unused role rungs; prefer a tight palette over a full unused ladder).
- Matching official example names, hex values, or typefaces.
- A light-mode counterpart (later second file, not this run).
