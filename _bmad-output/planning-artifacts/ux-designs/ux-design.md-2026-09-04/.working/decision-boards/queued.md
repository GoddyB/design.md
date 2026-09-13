# Queued husk cards — do not answer yet

Rapid-fire after `error` lands. Primary is locked **c** (void + beam); on-primary is locked **a** (`#ededed`). Each card is a/b/c. Column swatches; 3-wide with side-scroll, never stacked full-width.

Contrast vs locked `{colors.surface}` `#000000` and `{colors.on-surface}` `#ededed`. AA = WCAG 4.5:1.

Live current board: [error.md](./error.md) / [index.html](./index.html).

---

## 2. `error` — LIVE

See [error.md](./error.md) / [index.html](./index.html). Do not answer the cards below until that lands.

---

## 3. `on-error` — text ON an error fill

```
[ Delete ]
  ^^^^^^
```

Depends on `error`. Last board put `#ededed` on `#ededed` — that was the garbage. Each option is shown mentally on both a light red (`#ffb4ab`) and a deep red (`#ba1a1a`).

| | Hex | on `#ffb4ab` | on `#ba1a1a` | vs `#000` | vs `#ededed` |
|---|---|---|---|---|---|
| **a** | `#ffffff` | 1.70:1 fail | 6.46:1 AA | 21.00:1 | 1.17:1 |
| **b** | `#000000` | 12.37:1 AA | 3.25:1 fail | 1.00:1 | 17.94:1 |
| **c** | `#690005` | 7.72:1 AA | 2.03:1 fail | 1.60:1 fail | 11.19:1 AA |

If error is **a** (light), pick **b** or **c**. If error is **b** (deep fill), pick **a**.

---

## 4. `on-tertiary` — ink on `#a1a1a1`

```
[ BETA ]
  ^^^^
```

Tertiary is locked. Secondary is a ghost button. Make them not cousins.

| | Treatment | vs `#a1a1a1` | vs `#000` | vs `#ededed` |
|---|---|---|---|---|
| **a** | `#000000` on the badge | 8.13:1 AA | — | — |
| **b** | `#000000` on the badge + thin beam | 8.13:1 AA | beam is seam, not fill | — |
| **c** | `#000000` on the badge + white outer hairline | 8.13:1 AA | hairline `#ededed` | 1.00 vs type |

`#ededed` on `#a1a1a1` is 2.21:1 **fail** — not offered.

---

## 5. `outline` — default edge

```
+------------------+
| panel            |
+------------------+
 ^ this stroke
```

Goddy: white or border-beam. Not gray-400/500/alpha from the first board.

| | Treatment |
|---|---|
| **a** | hairline `#ededed` |
| **b** | hairline `#ffffff` (1.17:1 vs a — look at the split bar; if identical, pick a) |
| **c** | idle white hairline + beam on the ring |

---

## 6. `outline-variant` — quieter divider

```
section
--------
next
^^^^^^
this rule
```

| | Treatment |
|---|---|
| **a** | white rule `#ededed` |
| **b** | beam `line` (bottom-edge travel) |
| **c** | omit — one outline is enough |

---

## 7. border-beam `size` — when the bag opens

Not a husk color. Vanilla classes in [`border-beam.css`](../../border-beam.css). Stock `md` orbit is a 3-second signature — personality said not a medal.

| | Class / analogue |
|---|---|
| **a** | `pulse-inner` — seam that lives, doesn’t tour |
| **b** | `sm` — thin traveling beam (buttons) |
| **c** | `md` — full perimeter orbit (loud; stock) |

---

## 8. border-beam `strength`

Same recipe, three intensities. `--beam-strength` 0–1. Stock is 1.0 with heavy saturate. Archanglic asked muted pastel.

| | `--beam-strength` | Read |
|---|---|---|
| **a** | `0.35` | quiet |
| **b** | `0.55` | present |
| **c** | `1.00` | stock (loud) |

---

## 9. Tree bough orange (not a husk slot)

`archanglic.css` `--bough` is currently night-ember. Four Grok picks:

| | Hex | vs `#000` | vs `#ededed` |
|---|---|---|---|
| night-ember (default) | `#ff9e64` | 10.33:1 AA | 1.74:1 |
| path-amber | `#f1bd00` | 12.02:1 AA | 1.49:1 |
| warn-gold | `#ebd96e` | 14.68:1 AA | 1.22:1 |
| token-sun | `#ffdb69` | 15.59:1 AA | 1.15:1 |

Reply with the name, not a letter. Do not use this as husk `primary`.
