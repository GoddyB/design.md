# Intake for bmad-spec

**Slug:** `perfect-design-md`

**What to spec:** the contract for a *strong* DESIGN.md — required tokens, body sections, cross-references, quality bar, what to omit. Downstream (`bmad-ux`) will fill this contract with a human's taste. Do **not** spec the `@google/design.md` CLI, linter implementation, Tailwind export, or DTCG JSON pipeline.

**Instance (resolved after first distill):** one appearance, **dark**. Light is a later second DESIGN.md, not this spec or the first `bmad-ux` run.

**Why this intake exists:** `bmad-spec` does not scan the repo. Point it at this file; it should read every path listed under Include, and ignore Exclude.

## Include (absorb these)

Canonical format (schema + prose):

- `packages/cli/src/linter/spec-config.yaml` — schema source of truth (generates `docs/spec.md`)
- `docs/spec.md` — full human-readable format spec (generated; still the prose contract)
- `README.md` — format intent, two-layer model (tokens + rationale), condensed reference

Worked DESIGN.md files (quality bar: what “complete” looks like in practice):

- `examples/paws-and-paths/DESIGN.md`
- `examples/atmospheric-glass/DESIGN.md`
- `examples/totality-festival/DESIGN.md`
- `examples/paws-and-paths/README.md`
- `examples/atmospheric-glass/README.md`
- `examples/totality-festival/README.md`

## Exclude (do not absorb)

- `examples/*/design_tokens.json` — DTCG export, not the DESIGN.md format
- `examples/*/tailwind.config.js` — derived consumer, not the format
- `packages/cli/**` except `spec-config.yaml` — implementation
- `.agents/skills/bmad-ux/references/design-md-spec.md` — BMAD's derivative summary; would contaminate this spec with a second interpretation
- `packages/cli/src/linter/fixtures/DESIGN-test.md` — test fixture, not a quality example

## Suggested first message (fresh window)

```
/bmad-spec

Read `_bmad-output/spec-intake-perfect-design-md.md` and every path it lists under Include.
Slug: perfect-design-md
Create a spec of what belongs in a strong DESIGN.md (tokens, sections, quality bar, omissions).
Extract from the sources; do not elicit taste — that is bmad-ux next.
```
