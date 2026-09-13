---
id: SPEC-perfect-design-md
companions:
  - token-schema.md
  - body-sections.md
  - quality-bar.md
sources:
  - packages/cli/src/linter/spec-config.yaml
  - docs/spec.md
  - README.md
  - examples/paws-and-paths/DESIGN.md
  - examples/atmospheric-glass/DESIGN.md
  - examples/totality-festival/DESIGN.md
---

> **Canonical contract.** This SPEC and the files in `companions:` are the complete, preservation-validated contract for what to build, test, and validate. Source documents listed in frontmatter are for traceability — consult them only if you need narrative rationale or prose color this contract intentionally omits.

# Strong DESIGN.md

## Why

Coding agents have no persistent visual identity unless one is written down. DESIGN.md exists so a brand's look can be followed across sessions and tools: YAML tokens give exact values; markdown prose says why those values exist and how to apply them when a rule is missing. This spec is the contract for a **strong** instance of that file — complete enough that `bmad-ux` can fill it with human taste without inventing structure, and an implementing agent can style without inventing values. Mandate: the published DESIGN.md format (`alpha`). Opportunity: one plain-text file as the living source of truth for humans and agents.

## Capabilities

- **CAP-1**
  - **intent:** A coding agent can reconstruct a product's visual identity from a single DESIGN.md, using exact token values and prose that says when and why to apply them.
  - **success:** The file is two-layer: YAML frontmatter fenced by lines of exactly `---` plus a markdown body of `##` sections. Tokens are the normative values; prose does not contradict them. Overview is sufficient fallback when a specific rule is missing.

- **CAP-2**
  - **intent:** An implementing agent can style color, type, spacing, corners, and common components without inventing values.
  - **success:** Frontmatter defines `colors` (including `primary`), `typography` (each used level has `fontFamily` and `fontSize`), `rounded`, `spacing`, and `components` per `token-schema.md`, unless a group is listed in `omitted` with a reason. Component fills that carry text also set a contrasting `textColor`.

- **CAP-3**
  - **intent:** An agent can apply the system in undefined cases and avoid brand-breaking moves.
  - **success:** Present body sections follow `body-sections.md` and appear in that order. Overview names personality, audience, and the feeling the UI should evoke. Colors, Typography, Layout, Elevation & Depth, Shapes, and Components each include application rules (what it is for, not only what it is). Guardrails exist as `## Do's and Don'ts` or as concrete do/don't rules inside those sections.

- **CAP-4**
  - **intent:** Component and variant tokens reuse primitives instead of duplicating literals that can drift.
  - **success:** Cross-references use `{path.to.token}` and resolve. Non-component references point at primitives. Component tokens may reference composite typography. Hover/active/pressed variants are sibling keys (e.g. `button-primary-hover`). The primary action has a default and at least one interactive variant.

- **CAP-5**
  - **intent:** A consumer can tell a deliberate gap from an unfinished file.
  - **success:** Every token group or canonical section that is absent on purpose appears in `omitted` as a string or `{section, reason}`. A strong file documents `reason` for each omission.

- **CAP-6**
  - **intent:** The file meets the completeness demonstrated by the official examples, not merely a parseable skeleton.
  - **success:** Every check in `quality-bar.md` holds: named palettes mapped to tokens and uses; non-solid canvases specified in prose; type roles covering headline/display, body, and label; spacing rhythm with a stated base unit; shape rules per component class; an elevation recipe in prose; a primary button with hover; an input (or omitted with reason); a container; and at least one domain-specific component.

## Constraints

- Present `##` sections appear in canonical order (`body-sections.md`). Duplicate headings make the file invalid. Unknown headings are preserved. An optional `#` title is not a section.
- Color values are any valid CSS color; hex `#RRGGBB` is the default notation unless alpha or wide-gamut is required. Dimensions use `px`, `em`, or `rem`. `fontWeight` is numeric. Unitless `lineHeight` is preferred.
- Token reference depth ≤ 10; token nesting depth ≤ 20. Syntax: `{path.to.token}` (`token-schema.md`).
- If `colors` exists, `primary` exists. If `colors` exists, `typography` exists.
- Component `backgroundColor` / `textColor` pairs meet WCAG AA 4.5:1 for normal text. Contrast is computed in sRGB; the original color string is preserved.
- Elevation has no YAML token group. Depth recipes live in Elevation & Depth prose and may appear as literal `rgba(...)` on glass components.
- Unknown color and typography token names are valid if values type-check. Unknown component properties are allowed (consumer warns). A top-level YAML key that looks like a misspelling of a schema key is not a silent extension.
- Format version is `alpha`. `version` and `description` frontmatter keys are optional.
- Recommended token names in `token-schema.md` are guidance, not an allowlist.
- This instance is **one dark appearance**. Canvas, on-colors, contrast, and elevation are designed for a dark ground. Do not add light-mode suffix tokens (`*-light`, `*-dark` pairs) or a second theme in this file. `inverse-*` roles, if used, are intra-theme inverted surfaces, not a light mode.
- This spec does not choose palette, typeface, or the rest of mood. `bmad-ux` supplies those against this contract, on a dark canvas.

## Non-goals

- The `@google/design.md` CLI, linter implementation, lint JSON report shape, or programmatic API.
- Tailwind export, `tailwind.config.js`, DTCG `tokens.json`, or Figma variables as artifacts of this spec.
- BMAD's derivative DESIGN.md summary at `.agents/skills/bmad-ux/references/design-md-spec.md`.
- Requiring `## Do's and Don'ts` as a heading when equivalent guardrails live in other sections.
- Requiring the full Material-style color ladder (`*-fixed`, `inverse-*`, `surface-container-*`) or a 9–15 typography count.
- Authoring the actual visual identity beyond the dark-canvas call (taste elicitation is `bmad-ux`).
- A light-mode DESIGN.md. That is a later, second self-contained file derived from this one; not this contract's success signal.

## Success signal

A DESIGN.md exists that (1) an agent implements from without inventing palette, type scale, spacing rhythm, radii, or component recipes, (2) all `{token}` references resolve, (3) present body sections are in canonical order and Overview plus the application sections carry usage rules, (4) primary-action text on its fill passes 4.5:1, and (5) every `quality-bar.md` check passes. Demonstration: hand the file to a coding agent with no other design context and get on-brand UI.

## Assumptions

- "Strong" means official-example density, not merely schema-valid.
- Example READMEs confirm DESIGN.md is the source artifact; their Tailwind/DTCG siblings are derived consumers, not quality criteria.
- `rounded.DEFAULT` and named spacing keys (`gutter`, `margin`, `glass-padding`, `container-max`) are valid scale levels.
- Official examples omit `version`, `description`, `omitted`, and `## Do's and Don'ts`; a strong file may too if CAP-3 and CAP-5 are otherwise met.
- Light mode, when it happens, will be a second DESIGN.md (filename unconstrained), designed from this dark system rather than hex-inverted. That work is outside this spec.
