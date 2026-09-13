# Husk color decision board — entry list (implement exactly)

Output:
`/home/founder/design.md/_bmad-output/planning-artifacts/ux-designs/ux-design.md-2026-09-04/.working/husk-board/index.html`

`<base href="/ux-color-board/" />`

Match the visual language of `/home/founder/design.md/_bmad-output/planning-artifacts/ux-designs/ux-design.md-2026-09-04/.working/palette-review/index.html`:
- page `#000000`, type `#ededed`, muted `#a1a1a1`, hairline `#2e2e2e`
- `ui-sans-serif, system-ui` (this is a working board, not the identity)
- no shadows, no glass, no Vercel marks
- sticky footer: title, hint, **Copy JSON**
- each item: `data-item-id`, `data-label`, notes `<textarea placeholder="a / b / c, plus prose if needed">`
- Copy JSON pretty 2-space, ALL items even if notes empty:

```json
{
  "review": "archanglic-husk-slots",
  "items": [
    { "id": "primary", "label": "primary", "notes": "" }
  ]
}
```

No extra fields. `navigator.clipboard.writeText` + hidden textarea fallback.

Legend at top (once):
“Type **a**, **b**, or **c** in notes. Add prose after the letter if needed.”

Do not invent other hexes or extra slots. Render each entry below as a card: title, ASCII in `<pre>`, one-line hint, three options with a color chip when the value is a hex, then the textarea.

---

## Entries (document order)

### 1. id `primary` — label `primary — main action fill`

ASCII:
```
+--------------------------------+
| ^^                   About Work|
|                                |
| Archanglic                     |
|                                |
| [ Deploy ]    Read             |
|  #########                     |
|  <- this fill                  |
+--------------------------------+
```

Hint: Paws / Totality — primary is only the main action on a screen, never wallpaper.

- **a)** `#ededed` — same white as type; inverted pill (Atmospheric Glass on dark)
- **b)** `#ffffff` — hotter white for the CTA; body text stays `#ededed`
- **c)** alias `{colors.on-surface}` (`#ededed`) — same chip as (a), named as a pointer

### 2. id `on-primary` — label `on-primary — text on primary fill`

ASCII:
```
[ Deploy ]
  ^^^^^^
  this label
```

Hint: quality-bar — every fill hue gets a contrasting on-color.

- **a)** `#000000` — true black on a light pill
- **b)** `#1a1a1a` — gray-100, slightly lifted
- **c)** `#0a0a0a` — rare alternate black

### 3. id `error` — label `error — invalid / destructive`

ASCII:
```
token name
[________________]
 ! this token does not resolve
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^
   this color
```

Hint: Paws — error is its own palette, never primary recycled as “angry.”

- **a)** `#878787` — gray-600; mute, no extra hue
- **b)** `#ededed` — same as type; rustc is the copy
- **c)** `#454545` — gray-500; quieter than (a)

### 4. id `on-error` — label `on-error — text on error fill`

ASCII:
```
[ Delete ]
  ^^^^^^
  label on an error fill
```

Hint: pair dark-on-light or light-on-dark with whatever you picked for `error`.

- **a)** `#000000`
- **b)** `#ededed`
- **c)** alias `{colors.on-surface}` (`#ededed`)

### 5. id `secondary` — label `secondary — second action fill`

ASCII:
```
[ Deploy ]    [ Read ]
              ^^^^^^^^
              this fill (if any)
```

Hint: Atmospheric Glass — second actions stay ghost; don’t invent a second brand hue.

- **a)** omit — ghost on `surface`; slot goes in `omitted`
- **b)** `#1a1a1a` — gray-100 chip
- **c)** `#2e2e2e` — gray-400 chip

### 6. id `on-secondary` — label `on-secondary — text on secondary`

ASCII:
```
[ Read ]
  ^^^^
```

Hint: skip this if you omitted `secondary`.

- **a)** omit
- **b)** `#ededed`
- **c)** `#a1a1a1` — gray-900

### 7. id `tertiary` — label `tertiary — rare third accent fill`

ASCII:
```
kicker / rare badge
[ BETA ]
  ^^^^
```

Hint: quality-bar — do not keep unused rungs.

- **a)** omit
- **b)** `#a1a1a1` — gray-900, rare emphasis, still no extra hue
- **c)** omit here — rainbow-glass is the Archanglic extra, not this slot

### 8. id `on-tertiary` — label `on-tertiary — text on tertiary`

ASCII:
```
[ BETA ]
  ^^^^
```

Hint: skip if you omitted `tertiary`.

- **a)** omit
- **b)** `#000000`
- **c)** `#ededed`

### 9. id `outline` — label `outline — default hairline`

ASCII:
```
+------------------+
| panel            |
+------------------+
 ^ this stroke
```

Hint: Archanglic elevation is edges, not shadows; one hairline language.

- **a)** `#2e2e2e` — gray-400
- **b)** `#454545` — gray-500
- **c)** `#ffffff24` — gray-alpha-400

### 10. id `outline-variant` — label `outline-variant — quieter divider`

ASCII:
```
section
--------
next
^^^^^^
this rule
```

Hint: omit if one outline is enough.

- **a)** omit
- **b)** `#292929` — gray-300
- **c)** `#ffffff17` — gray-alpha-200

---

Only those 10 ids. Hex chips for hex options; “omit” / “alias” as text, no fake color. Stack cards. Works at 1280 and 390. No external CSS/JS.
