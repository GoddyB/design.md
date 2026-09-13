# Rainbow-glass as vanilla CSS (no React)

Goddy does not use React. The npm `border-beam` package (Jakub Antalik / GoddyB fork) is a **React wrapper**. It stays the *visual analogue* (edge-only conic beam, optional, pointer-events none, child fill stays black). It is not the implementation.

## Single source of truth

| File | Role |
|---|---|
| [`border-beam.css`](../border-beam.css) | **The only recipe.** `@property --beam-angle`, `@keyframes`, conic/linear gradient. |
| [`archanglic.pico.css`](../archanglic.pico.css) | Pico theme. `@import`s the recipe. Sets `--beam-*` knobs. No copy. |
| [`border-beam-vanilla.css`](./border-beam-vanilla.css) | Re-export (`@import` of the SSOT) if you are not using Pico. |

Stops match the library’s `colorful` / dark family (`rgb(255, 50, 100)` …), then **muted** with `--beam-strength` and `--beam-saturation`. Stock `1 / 1.2` is the loud medal; default here is quiet (`0.45 / 0.65`).

When Goddy edits `border-beam.css`, every surface updates.

## Opt-in

```html
<article class="border-beam border-beam-sm border-beam-quiet">…</article>
<nav class="border-beam-bottom">…</nav>
<input class="border-beam-focus">
```

| Var | Default | Maps to library |
|---|---|---|
| `--beam-size` | `1px` | `size="sm"` / `"md"` |
| `--beam-strength` | `0.45` | `strength={0–1}` |
| `--beam-duration` | `4s` | `duration` |
| `--beam-saturation` | `0.65` | `saturation` (stock ~1.2) |
| `--beam-placement` | `full-box` | `full-box` \| `bottom-edge` (set by class) |

Classes: `.border-beam` · `.border-beam-bottom` / `.border-beam-line` · `.border-beam-focus` · `.border-beam-sm` · `.border-beam-md` · `.border-beam-pulse` · `.border-beam-quiet` · `.border-beam-present` · `.border-beam-loud` · `.no-beam`.

Pico aliases (same file, not a second recipe): primary `button`, **all navbars** (`nav` / `[role=navigation]` / `.arch-navbar`, bottom-edge, required), `button.secondary`.

`prefers-reduced-motion`: freeze the orbit, keep a static seam.

## What this is not

- Not a husk color slot.
- Not a filled rainbow surface.
- Not locked size/strength — those are queued a/b/c after `error`.
- Not a copy in nav CSS, pico theme, or demos.
