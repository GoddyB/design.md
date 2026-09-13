# vercel-labs/web-interface-guidelines → Archanglic DESIGN.md

Source: `imports/web-interface-guidelines-README.md` (2026-09-04).
Authority for *where* a rule lives: spec-perfect-design-md `body-sections.md`.
Not a paste of the README into Overview. Implementation-only bullets (React Scan, nuqs, Web Workers, network budgets) stay out of DESIGN.md.

Vercel-specific copywriting is labeled as such in the source (“aren’t universal”). Adopted as Archanglic voice **candidates** until Brand & Style confirms.

## Brand & Style

From **Copywriting** (Vercel-specific) and **Content** (voice-adjacent):
- Active voice; action-oriented; second person; as few words as possible
- Keep nouns consistent; avoid first person
- Default to positive language; errors tell how to fix
- Avoid ambiguous labels (“Save API Key” not “Continue”)
- Brand names / product names / code tokens: `translate="no"`
- Non-breaking spaces for glued terms (`10 MB`, `⌘ K`)

## Colors

From **Design**, plus visual slices of **Interactions** / **Content** / **Forms**:
- `color-scheme: dark`; `theme-color` matches the pure-black canvas
- Hover / active / focus **increase** contrast vs rest
- Don’t rely on color alone (text label with status)
- Accessible chart palettes when charts exist
- Tap highlight follows the system (`-webkit-tap-highlight-color`)
- Windows `<select>`: explicit `background-color` + `color`
- Hue-consistency only if a non-neutral fill ever exists (Archanglic fills are black; rainbow is border/accent)
- Avoid gradient banding on any fade (rainbow borders: specify so they don’t band)

**Conflict — contrast method:** WIG prefers APCA; this spec’s quality bar is WCAG AA 4.5:1 on text-on-fill. DESIGN.md will keep WCAG 4.5:1 as the floor unless Goddy overrides.

## Typography

From **Content**, **Forms**, **Performance**, **Interactions**:
- Curly quotes; ellipsis character `…` (not `...`)
- Tabular nums (or mono) for comparisons and counts
- Tidy rag; avoid widows/orphans
- Form control text ≥ 16px on mobile (no iOS zoom-on-focus)
- Placeholders are examples, end with `…`
- Preload / subset the chosen family (once type is picked)
- Don’t scale text nodes for motion (anti-aliasing); animate a wrapper
- Numerals for counts (copy rule with a type implication)

## Layout & Spacing

From **Layout**, plus **Interactions** / **Content**:
- Deliberate alignment (grid, baseline, edge, or optical center)
- Optical ±1px when perception beats geometry
- Hit target ≥ 24px; visual may be smaller; mobile ≥ 44px
- Safe-area insets; respect zoom (never disable)
- Responsive: mobile, laptop, ultra-wide
- No accidental overflow scrollbars; `overscroll-behavior: contain` on modals/drawers
- Intrinsic flex/grid over JS measurement
- Images reserve space (no CLS); skeletons match final layout
- `scroll-margin-top` for anchored headings
- Layouts survive short / average / very long strings

## Elevation & Depth

From **Design**:
- **Do not** adopt “layered shadows / ambient + direct light.” Archanglic already forbids materials and layers on backgrounds and fills. Depth = contrast, 1px (or rainbow-glass) edges, not shadow stacks.
- Crisp edges: semi-transparent or rainbow-glass borders for chrome that needs an edge
- `overscroll-behavior` and focus not covered by sticky chrome (focus rings stay unobscured)

## Shapes

From **Design** / **Interactions**:
- Nested radii: child ≤ parent, concentric
- Visual control vs expanded hit target (shape tokens on the visible control)
- Icon/text lockups: balance weight/size so they don’t clash (stroke vs type)

## Components

From **Interactions**, **Animations**, **Forms**, **Content** (the parts an agent needs to *style* a control):
- Visible `:focus-visible` ring; `:focus-within` on grouped controls; never covered by sticky chrome
- Loading buttons keep the original label + spinner; min show-delay ~150–300ms; min visible ~300–500ms
- Ellipsis on follow-up actions (`Rename…`) and processing (`Saving…`)
- Confirm destructive or offer Undo
- Tooltip: delay the first in a group; peers immediate
- Inputs: labels exist; errors next to fields; placeholders as examples; don’t block paste; don’t block typing
- Don’t pre-disable submit; disable only in-flight
- Icon-only buttons still have a visible or accessible name
- All states designed: empty, sparse, dense, error
- Links are links (`<a>`), not buttons styled as navigation
- Motion on controls: compositor-only (`transform`, `opacity`); interruptible; honor `prefers-reduced-motion`; never `transition: all`; easing fits the subject; only if it explains cause/effect or is deliberate delight (rainbow shimmer qualifies as deliberate, not decoration-on-everything)
- `touch-action: manipulation` on controls

## Do's and Don'ts

Guardrails pulled from WIG that are easy to violate:
- Do honor `prefers-reduced-motion`
- Do keep focus visible and unobscured
- Do use native semantics before ARIA
- Don’t `transition: all`
- Don’t disable zoom, paste, or browser-standard link behaviors
- Don’t cover focus with sticky chrome
- Don’t use color as the only status cue
- Don’t layer drop shadows on the black canvas
- Don’t pre-disable submit to “prevent errors”

## Stay out of DESIGN.md (not a visual-identity subset)

Leave for implementation or a later thin EXPERIENCE.md: URL-as-state, optimistic updates, hydration-safe inputs, virtualize lists, React re-render profiling, Web Workers, POST latency budgets, password-manager name tokens, skip-link (behavioral a11y), locale detection via `Accept-Language`.
