# Typography

Rules of typesetting throughout the system.

---

## Usage

Our typography styles can be consumed as Tailwind classes. The classes below pre-set a combination of `font-size`, `line-height`, `letter-spacing`, and `font-weight` for you based on the Geist Core Figma system.

To make use of the **Subtle** and **Strong** modifiers, all you have to do is use the `<strong>` element nested as the descendant of a given typography class:

```html
<p className="text-copy-16">
  Copy 16 <strong>with Strong</strong>
</p>
```

---

## Headings

Used to introduce pages or sections.

- `text-heading-72`
- `text-heading-64`
- `text-heading-56`
- `text-heading-48`
- `text-heading-40`
- `text-heading-32` (Subtle)
- `text-heading-24` (Subtle)
- `text-heading-20` (Subtle)
- `text-heading-16` (Subtle)
- `text-heading-14`

---

## Buttons

Only to be used within components that render buttons.

- `text-button-16` — Largest button.
- `text-button-14` — Default button.
- `text-button-12` — Only used when a tiny button is placed inside an input field.

---

## Label

Designed for single-lines, and given ample line-height for highlighting & marrying up with icons.

- `text-label-20`
- `text-label-18`
- `text-label-16` (Strong) — Used in titles to help differentiate from regular.
- `text-label-14` (Strong) — Most common text style of all. Used in many menus.
- `text-label-14-mono` — Largest form of mono, to pair with larger (>14) text.
- `text-label-13` — Used as a secondary line next to other labels. Tabular is used when conveying numbers for consistent spacing.
- `text-label-13-mono` — Used to pair with Label 14, as the smaller mono size looks better in that pairing.
- `text-label-12` — Used for tertiary level text in busy views, like Comments, Show More and the capitals in Calendars.
- `text-label-12-mono`

---

## Copy

Designed for multiple lines of text, having a higher line height than Label.

- `text-copy-24` (Strong) — For hero areas on marketing pages.
- `text-copy-20` (Strong) — For hero areas on marketing pages.
- `text-copy-18` (Strong) — Mainly for marketing, big quotes.
- `text-copy-16` (Strong) — Used in simpler, larger views like Modals where text can breathe.
- `text-copy-14` (Strong) — Most commonly used text style.
- `text-copy-13` — For secondary text and views where space is a premium.
- `text-copy-13-mono` — Used for inline code mentions.
