# Token schema

YAML frontmatter is fenced by a line of exactly `---` at start and end. `name` is required. `version` (current: `alpha`) and `description` are optional. `omitted` is optional; required for a strong file only when a token group or canonical section is absent on purpose.

## Groups

```yaml
version: <string>          # optional, current: "alpha"
name: <string>             # required
description: <string>      # optional
omitted: <string[] | OmittedSection[]>  # optional
colors:
  <token-name>: <Color>
typography:
  <token-name>: <Typography>
rounded:
  <scale-level>: <Dimension>
spacing:
  <scale-level>: <Dimension | number>
components:
  <component-name>:
    <token-name>: <string | token reference>
```

`<scale-level>` is any descriptive string. Common keys: `xs`, `sm`, `md`, `lg`, `xl`, `full`. Also valid (used in official examples): `DEFAULT`, `base`, `unit`, `gutter`, `margin`, `glass-padding`, `container-max`, `container-padding`, `card-gap`, `section-margin`, `margin-mobile`, `margin-desktop`.

## Types

**Color.** Any valid CSS color. Formats: hex (`#RGB`, `#RGBA`, `#RRGGBB`, `#RRGGBBAA`); named (`red`, `transparent`); functional (`rgb()`, `rgba()`, `hsl()`, `hsla()`, `hwb()`); wide-gamut (`oklch()`, `oklab()`, `lch()`, `lab()`); `color-mix(in srgb, ...)`. Converted to sRGB for WCAG contrast; original string preserved. Default notation: quoted hex `#RRGGBB`. Use `rgba(...)` when alpha is load-bearing (glass).

**Dimension.** Number plus unit: `px`, `em`, or `rem`.

**Typography object**

| Property | Type | Notes |
|---|---|---|
| `fontFamily` | string | Required on a strong level |
| `fontSize` | Dimension | Required on a strong level |
| `fontWeight` | number | Bare or quoted YAML; both equivalent (`400`, `700`) |
| `lineHeight` | Dimension \| number | Unitless multiplier preferred (CSS practice) |
| `letterSpacing` | Dimension | e.g. `-0.02em`, `0.1em` |
| `fontFeature` | string | `font-feature-settings` |
| `fontVariation` | string | `font-variation-settings` |

**Omitted.** Each entry is a section name string (`spacing`) or `{ section: string, reason?: string }`. Strong files include `reason`. Suppresses missing-section warnings for that group. Valid targets include token groups (`colors`, `typography`, `spacing`, `rounded`, `components`) and equivalent body concerns.

## Token references

Wrap an object path in curly braces: `{colors.primary}`, `{rounded.md}`, `{typography.label-md}`, `{spacing.gutter}`.

- Outside `components`, the path must resolve to a **primitive**, not a group (`{colors}` is invalid).
- Inside `components`, composite references (e.g. `{typography.label-md}`) are allowed.
- Unresolved references are errors (`broken-ref`).
- Max reference depth: 10. Max token nesting depth: 20.

## Component sub-tokens

Known properties: `backgroundColor` (Color), `textColor` (Color), `typography` (Typography), `rounded` (Dimension), `padding` (Dimension), `size` (Dimension), `height` (Dimension), `width` (Dimension).

Prefer a Dimension or `{ref}`. Official examples also use named colors (`transparent`), `rgba(...)` glass fills, and occasional CSS padding shorthand (`0 24px`). Those literals are valid in the wild; they are not a second schema.

Unknown properties (e.g. `borderColor`) are accepted with a warning. Variants are **sibling keys**, not nested maps: `button-primary`, `button-primary-hover`, `button-primary-active`.

The components schema is evolving; domain-specific names are encouraged.

## Recommended names (non-normative)

Not required. Unknown names are valid if values type-check.

- **Colors:** `primary`, `secondary`, `tertiary`, `neutral`, `surface`, `on-surface`, `error`
- **Color roles** (when multiple palettes): `primary`, `secondary`, `tertiary`, `neutral`
- **Typography:** `headline-display`, `headline-lg`, `headline-md`, `body-lg`, `body-md`, `body-sm`, `label-lg`, `label-md`, `label-sm`
- **Rounded:** `none`, `sm`, `md`, `lg`, `xl`, `full`

## Consumer behavior (unknown content)

| Scenario | Behavior |
|---|---|
| Unknown `##` heading | Preserve; do not error |
| Unknown color token name | Accept if value is a valid Color |
| Unknown typography token name | Accept as typography |
| Unknown spacing value | Accept; store as string if not a Dimension |
| Unknown component property | Accept with warning |
| Duplicate `##` heading | Error; reject the file |
| Top-level YAML key that looks like a schema typo (`colours:`) | Treat as likely misspelling, not a silent extension |
| Unknown top-level key with token-like values | Suggests a dropped or misspelled group |
