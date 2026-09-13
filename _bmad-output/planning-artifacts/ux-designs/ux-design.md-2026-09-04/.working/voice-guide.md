# Archanglic voice guide

Corpus (2026-09-04): 4 X Articles (~26.7k chars) as **50% driver**; 269 posts as **50% combined**. @GodservantBush. Posts supply Needle’s tells (craft), not its default surface.

## Three registers

Pick **one** per piece.

| Surface | Register | Source weight |
|---|---|---|
| UI, labels, empty states, errors | **Blade** — few words, diagnosis + next move, no jokes | Personality + rustc; cadence from short posts, diction from articles |
| Whitepapers, articles, READMEs, long ABOUT | **Letter** — scene or claim, load-bearing analogy, prescription, earned hats-off | Articles (primary) |
| Blog posts and other pieces that specifically call for it | **Needle** — polished sarcasm, informality, one gag that carries a diagnosis. Optional, in the bag — same rule as rainbow-glass | Posts + replies (craft), applied only when the piece calls for it |

**Needle** is the life under the cold metal. Same mind as Letter. Delivery is allowed to smirk.

## Letter (articles) — the engine

**Stance.** Second person to institutions and peers. First person for taste and work. Never “we’re a family.” Craftsman with tools, not a platform talking to “users.”

**Spine of a piece.**
1. Open on a scene or a flat industry fact (cereal in the lab; first Transit ride since freshman year; “companies are struggling to find metrics”).
2. One analogy that *does work* (LeBron/Morey vs benchmarks; Michelangelo still needed for David; Transit as clinic in alignment; third-party iOS apps feeling awful).
3. Diagnosis, named. No lament.
4. Prescription, imperative, scoped. Close the gates. Double down. Do it right.
5. Optional earned respect (“Hats off”, “Shout out Boris”). Never generic praise.
6. Disclaimers when affiliation could be assumed: unaffiliated; not paid.

**Sentences.** Mix long argumentative runs with a short blade after: “And that is what we call: misaligned.” “Outstanding work everyone.” “You can afford to train…” Prefer concrete nouns (harness, moat, token, bus stop) over abstract slogans.

**Analogy policy.** One per piece, load-bearing, from sport, craft, transit, or a product you actually used. Do not stack metaphors. Do not invent cute mascots.

**What articles never do.** Cover everything. Split the difference. Invite every plugin. Soften a broken thing. Perform “scientific” humility when the specimen is obviously bad.

## Blade (product) — same mind, quieter

**Labels.** Specific verbs. Not “Continue” — name the object. Title Case on buttons if they are actions; sentence case on marketing/hero (matches articles + Vercel-candidate, confirmed here by his titles vs body).

**Errors (rustc).**
- What is broken.
- You cannot do this.
- May I suggest _x_?

Example: “This token reference does not resolve. You cannot ship it. Use `{colors.gray-1000}` or omit the group in `omitted`.”

**Empty / sparse.** Assume competence. Point at the README. Do not tutorialize the canvas.

**Success.** Understated. No confetti. “Deployed.” is enough.

**Forbidden in Blade.** Emoji, “heh”, “wayyyy”, “bro”, JSON jokes, *checks notes*, sarcasm sparkles, exclamation piles.

## Needle — optional, in the bag

Same rule as rainbow-glass: not a signature, not a medal, not the default. Use it when a **blog post or other piece specifically calls for it**.

Same diagnosis as Letter. The joke is the vehicle. Carefree, not bitter. Composed.

**Tells (from the corpus — copy these, don’t genericize):**
- Parenthetical scalpel: `(or don't speak Altmanese)`, `(yes, the ones that larp as cavemen to get smarter)`.
- Parody of the target’s register: Altmanese salvation-speak; a fake Grok prompt that is actually a roast; JSON/TOML as the argument.
- Stage direction as contempt: `*checks notes*`, `clawed (heh)`.
- Informal orthography as temperature, not illiteracy: `wayyyy`, `yeahhh`, `verrrrry`, lowercase starts, `bro`, `i'm sure`.
- Carefree shrug: `cooking some nonsense, i'm sure.`
- One stretched gag that lands a real claim (JSON braces; burger-is-a-sandwich; fruit flies; `oRcHesTrAtE wOrkFlowS`).
- Mock-earnest then the knife: `to be fair bro`; `seems legit`; `Idk about this one chief`.
- Specific praise can sit next to a dunk: `you are an extremely smart man` → `this here is a GOD-awful take bro`.

**Spine of a Needle piece.**
1. Name the specimen (a lab, a product, a take, a format).
2. One gag in *their* voice or format.
3. The diagnosis, still named. No lament.
4. Optional shrug. Do not stack bits.

## Diction (Blade and Letter)

**Prefer**
- harness, moat, scoped, opinionated, one thing done well
- taste, craftsman, tool (not “solution”, “magic”, “delight” as filler)
- slop (Letter and Needle — too loaded for Blade)
- “hats off” / “clinic in” when earned (Letter)
- numbers and units with a space (`10 MB`) when they appear

**Avoid**
- We / our journey / excited to announce
- Orchestrate, synergy, unlock, supercharge, just (as a hedge)
- “AI-powered” as a badge
- Completeness theater (“everything you need”)
- Pretending the product covers what a one-person studio did not build

**You.** Smart developer. Peer. The copy already thinks like him. READMEs carry the explainer.

## Cadence from the other 50% (posts/replies)

In **Needle**, use this cadence as written. In **Letter**, fold it into diagnosis.

- Parenthetical aside as a scalpel, not a giggle: `(or don't speak Altmanese)`.
- Name the incentive: watermark as IPO play; evals as answer keys; convenience vs prep.
- Praise is specific and rare: “the ideas in your May article have stood the test of time.”
- Contempt is carefree, not bitter: “cooking some nonsense, i'm sure.”
- Gaming/sports metaphor only if it carries the argument (Kimi = quick-scope; LeBron = eval answer key).

## Do / don’t (agents)

**Do**
- Write as if one person chose this and will stand behind it.
- Cut until what’s left has no flaws, even if the surface is small.
- Tell them how to fix it.
- Keep black/white austerity in the prose: no ornamental adjectives.

**Don’t**
- Sound like Vercel marketing (forbidden cousin) or Geist-scared hedging.
- Apologize for being opinionated.
- Ship placeholder lorem or “Coming soon” as personality.

## Test

Hand a coding agent this guide plus (1) a blank error state, (2) a 600-word whitepaper intro, (3) a short Needle blog post that specifically called for sarcasm. The error must rustc. The intro must open like Transit or Ignorance. The Needle post must parody the specimen and still name a diagnosis. If (1) or (2) could be Vercel’s, rewrite. If (3) could be a generic meme account, rewrite.
