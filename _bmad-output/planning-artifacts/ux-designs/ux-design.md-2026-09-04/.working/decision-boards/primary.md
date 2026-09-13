# Husk `primary` — answer this one

Rapid-fire. One slot. Do not skip to queued cards until this lands.

**Look at the fat column. That column is the token.** The word “Archanglic” in the mini chrome is always `{colors.on-surface}` (`#ededed`). It is not the pick.

Open [index.html](./index.html) for the live columns (they side-scroll; they do not stack).

## Usage

```
+--------------------------------+
| ^^                   About Work|
|                                |
| Archanglic                     |  <- always #ededed (not the token)
|                                |
| [ Deploy ]    Read             |
|  #########                     |
|  <- this FILL is primary       |
+--------------------------------+
```

Main action only. Never wallpaper. Never the page title.

## Official-example one-liner

Paws: *“Primary: Use for main actions, active states, and highlights.”*

Atmospheric Glass: *“Primary buttons are solid white for maximum contrast.”*

SpaceX / LamaLama imports: *“primary action: no distinct CTA color.”*

## Why these three (not the last board)

Last a/b/c was `#ededed` / `#ffffff` / alias-of-a. `#ffffff` vs `#ededed` is **1.17:1**. Goddy could not tell them apart; a and c were the same chip. Dropped.

These columns differ in luminance (a vs b = 2.76:1) or in kind (c is void, not a light pill). None is a Geist accent ladder. None is locked — pick one or write in a hex.

Assumed ink on a light fill is `#000000` for the contrast note. If you pick **c**, `on-primary` tracks `{colors.on-surface}` and the action is outline / beam, not a filled pill.

## a / b / c

| | Column | Hex | vs `#000000` | vs `#ededed` | Read |
|---|---|---|---|---|---|
| **a** | Light inverted pill | `#ededed` | 17.94:1 AA | 1.00:1 fail (cannot be its own on-color) | Same white as type. Atmospheric Glass solid-white CTA on dark. Austere. |
| **b** | Dimmer metal pill | `#8f8f8f` | 6.49:1 AA | 2.76:1 | Geist `{colors.gray-700}` reused as fill — no new hue. Column is obviously darker than a. `#000` ink still AA. Distinct from tertiary `#a1a1a1` (1.25:1 — close; tertiary stays a badge, not a button). |
| **c** | Void / no fill hue | `#000000` | 1.00:1 as fill | 17.94:1 as ink | No distinct CTA color (SpaceX/LamaLama). Deploy is hairline or thin beam on `{colors.surface}`. Rainbow-glass remains the only chromatic. Collides with ghost secondary unless outline/beam is the difference. |

```
     a #ededed              b #8f8f8f              c #000000
    +----------------+     +----------------+     +----------------+
    |################|     |::::::::::::::::|     |                |
    |################|     |::::::::::::::::|     |   [ Deploy ]   |
    |################|     |::::::::::::::::|     |    hairline    |
    |   [ Deploy ]   |     |   [ Deploy ]   |     |                |
    |    ink #000    |     |    ink #000    |     |  ink #ededed   |
    +----------------+     +----------------+     +----------------+
     type-white fill        metal fill             void + outline
```

## Reply

```
primary: a
```

or `b` / `c` / a write-in hex that is not Geist blue/red/amber/green/teal/purple/pink.

Pico CSS: `a`/`b` write `--pico-primary-background` to that hex (links follow `--pico-primary`). **c** writes fill `#000` and keeps links at `#ededed` via the split. Placeholder in `archanglic.pico.css` is option a until you pick — not locked.

Then stop. Next slot is `on-primary` (queued).
