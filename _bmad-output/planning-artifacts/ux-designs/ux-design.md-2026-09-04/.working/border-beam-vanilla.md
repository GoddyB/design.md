# Rainbow-glass as vanilla CSS (no React)

Goddy does not use React. The npm `border-beam` package (Jakub Antalik / GoddyB fork) is a **React wrapper**. It stays the *visual analogue* (edge-only conic beam, optional, pointer-events none, child fill stays black). It is not the implementation.

## Ship this instead

| File | Role |
|---|---|
| [`archanglic.pico.css`](../archanglic.pico.css) | Pico theme + `.border-beam` utility |
| [`border-beam-vanilla.css`](./border-beam-vanilla.css) | Same utility without Pico |

Stops match the library’s `colorful` / dark family (`rgb(255, 50, 100)` …), then **muted** with `--beam-strength` and `--beam-saturation`. Stock `1 / 1.2` is the loud medal; default here is quiet (`0.45 / 0.65`).

## Knobs

```html
<article class="border-beam border-beam-sm border-beam-quiet">…</article>
```

| Var | Default | Maps to library |
|---|---|---|
| `--beam-size` | `1px` | `size="sm"` / `"md"` |
| `--beam-strength` | `0.45` | `strength={0–1}` |
| `--beam-duration` | `4s` | `duration` |
| `--beam-saturation` | `0.65` | `saturation` (stock ~1.2) |

Classes: `.border-beam-sm` · `.border-beam-md` · `.border-beam-line` · `.border-beam-pulse` · `.border-beam-quiet` · `.border-beam-present` · `.border-beam-loud`.

`prefers-reduced-motion`: freeze the orbit, keep a static seam.

## What this is not

- Not a husk color slot.
- Not a filled rainbow surface.
- Not locked size/strength — those are queued a/b/c after `primary`.
