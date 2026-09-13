# Colors

Learn how to work with our color system. Right click to copy raw values.

---

## Scales

There are 10 color scales in the system. P3 colors are used on supported browsers and displays.

Available scales: `backgrounds`, `gray`, `gray-alpha`, `blue`, `red`, `amber`, `green`, `teal`, `purple`, `pink`.

Each non-background scale has 10 steps, from `100` through `1000`. Each step maps to a specific usage:

- `100` — Default background
- `200` — Hover background
- `300` — Active background
- `400` — Default border
- `500` — Hover border
- `600` — Active border
- `700` — High contrast background
- `800` — Hover high contrast background
- `900` — Secondary text and icons
- `1000` — Primary text and icons

The `backgrounds` scale has two values:

- Background 1 — `var(--ds-background-100)` — Default element background
- Background 2 — `var(--ds-background-200)` — Secondary background

---

## Backgrounds

There are two background colors for pages and UI components. In most instances, you should use Background 1—especially when color is being placed on top of the background. Background 2 should be used sparingly when a subtle background differentiation is needed.

---

## Colors 1–3: Component Backgrounds

These three colors are designed for UI component backgrounds.

- Color 1 — `var(--ds-gray-100)` — Default background
- Color 2 — `var(--ds-gray-200)` — Hover background
- Color 3 — `var(--ds-gray-300)` — Active background

If your UI component's default background is Background 1, you can use Color 1 as your hover background and Color 2 as your active background. On smaller UI elements like badges, you can use Color 2 or Color 3 as the background.

---

## Colors 4–6: Borders

These three colors are designed for UI component borders.

- Color 4 — `var(--ds-gray-400)` — Default border
- Color 5 — `var(--ds-gray-500)` — Hover border
- Color 6 — `var(--ds-gray-600)` — Active border

---

## Colors 7–8: High Contrast Backgrounds

These two colors are designed for high contrast UI component backgrounds.

- Color 7 — `var(--ds-gray-700)` — High contrast background
- Color 8 — `var(--ds-gray-800)` — Hover high contrast background

---

## Colors 9–10: Text and Icons

These two colors are designed for accessible text and icons.

- Color 9 — `var(--ds-gray-900)` — Secondary text and icons
- Color 10 — `var(--ds-gray-1000)` — Primary text and icons
