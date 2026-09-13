import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BorderBeam } from "border-beam";
import { Code, CodeBlock } from "../archanglic/react.jsx";

function contrast(a, b) {
  const lum = (hex) => {
    const h = hex.replace("#", "");
    const full = h.length === 3 ? h.split("").map((x) => x + x).join("") : h;
    const n = parseInt(full, 16);
    const to = (v) => {
      const c = v / 255;
      return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * to((n >> 16) & 255) + 0.7152 * to((n >> 8) & 255) + 0.0722 * to(n & 255);
  };
  const L1 = lum(a);
  const L2 = lum(b);
  const [hi, lo] = L1 > L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
}

function Ratio({ fg, bg }) {
  const r = contrast(fg, bg);
  const ok = r >= 4.5;
  return (
    <span className={ok ? "ratio ok" : "ratio bad"}>
      {r.toFixed(2)}:1 {ok ? "AA" : "fail"}
    </span>
  );
}

function setLetter(itemEl, letter) {
  const ta = itemEl?.querySelector("textarea");
  if (!ta) return;
  const rest = ta.value.replace(/^\s*[abc]\s*[—–-]?\s*/i, "").replace(/^\s*[abc]\s*/i, "");
  ta.value = rest ? `${letter} ${rest}` : letter;
  ta.dispatchEvent(new Event("input", { bubbles: true }));
}

function Option({ letter, children, onPick }) {
  return (
    <button type="button" className="option" data-letter={letter} onClick={onPick}>
      {children}
    </button>
  );
}

function Notes({ label }) {
  return (
    <textarea
      rows={3}
      placeholder="a / b / c, plus prose if needed"
      aria-label={label}
    />
  );
}

const BOUGH_PICKS = [
  ["night-ember", "#ff9e64", "grok-night numbers"],
  ["path-amber", "#f1bd00", "grok path amber"],
  ["warn-gold", "#ebd96e", "grok gold"],
  ["token-sun", "#ffdb69", "grok warn token"],
];

function BoughPicks() {
  const [on, setOn] = useState("night-ember");
  return (
    <div className="bough-picks">
      <p className="hint">bough — tree floor 2. Grok Build oranges. Click one to keep.</p>
      <div className="bough-row">
        {BOUGH_PICKS.map(([id, hex, label]) => (
          <button
            key={id}
            type="button"
            className={on === id ? "bough-pick on" : "bough-pick"}
            style={{ "--bough": hex }}
            onClick={() => {
              setOn(id);
              document.documentElement.style.setProperty("--bough", hex);
            }}
          >
            <span className="bough">├── src/</span>
            <span className="pick-id">{id}</span>
            <span className="hint">
              {label} <Code>{hex}</Code>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function Item({ id, label, hint, children }) {
  return (
    <article className="item" data-item-id={id} data-label={label}>
      <h3 className="item-title">{label}</h3>
      {hint ? <p className="hint">{hint}</p> : null}
      {children}
      <Notes label={label} />
    </article>
  );
}

function Playground() {
  const [size, setSize] = useState("md");
  const [colorVariant, setColorVariant] = useState("colorful");
  const [theme, setTheme] = useState("dark");
  const [strength, setStrength] = useState(0.45);
  const [saturation, setSaturation] = useState(0.7);
  const [brightness, setBrightness] = useState(1.1);
  const [duration, setDuration] = useState(2.4);
  const [hueRange, setHueRange] = useState(30);
  const [active, setActive] = useState(true);
  const [staticColors, setStaticColors] = useState(false);

  const snippet = useMemo(
    () => `<BorderBeam
  size="${size}"
  colorVariant="${colorVariant}"
  theme="${theme}"
  strength={${strength}}
  saturation={${saturation}}
  brightness={${brightness}}
  duration={${duration}}
  hueRange={${hueRange}}
  active={${active}}
  staticColors={${staticColors}}
>
  <button className="demo-btn">Deploy</button>
</BorderBeam>`,
    [size, colorVariant, theme, strength, saturation, brightness, duration, hueRange, active, staticColors]
  );

  const child = (
    <div
      className="play-card"
      style={{
        borderRadius: size === "sm" ? 8 : 12,
        border: "1px solid #ededed33",
      }}
    >
      <div className="play-mark">^^</div>
      <div className="play-title">Archanglic</div>
      <div className="play-sub">The beam rides this edge. Fill stays black.</div>
    </div>
  );

  return (
    <section className="play">
      <div className="play-stage">
        <BorderBeam
          size={size}
          colorVariant={colorVariant}
          theme={theme}
          strength={strength}
          saturation={saturation}
          brightness={brightness}
          duration={duration}
          hueRange={hueRange}
          active={active}
          staticColors={staticColors}
        >
          {child}
        </BorderBeam>
      </div>
      <div className="knobs">
        <label>
          size
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="sm">sm — compact orbit (buttons)</option>
            <option value="md">md — full orbit (cards)</option>
            <option value="line">line — bottom traveling edge</option>
            <option value="pulse-inner">pulse-inner — breathe in the seam</option>
            <option value="pulse-outside">pulse-outside — outward bloom</option>
          </select>
        </label>
        <label>
          colorVariant
          <select value={colorVariant} onChange={(e) => setColorVariant(e.target.value)}>
            <option value="colorful">colorful — rainbow</option>
            <option value="mono">mono — grayscale</option>
            <option value="ocean">ocean — blue/purple</option>
            <option value="sunset">sunset — orange/red</option>
          </select>
        </label>
        <label>
          theme
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="auto">auto</option>
          </select>
        </label>
        <label>
          strength {strength.toFixed(2)}
          <input type="range" min="0" max="1" step="0.05" value={strength} onChange={(e) => setStrength(+e.target.value)} />
        </label>
        <label>
          saturation {saturation.toFixed(2)}
          <input type="range" min="0.2" max="1.8" step="0.05" value={saturation} onChange={(e) => setSaturation(+e.target.value)} />
        </label>
        <label>
          brightness {brightness.toFixed(2)}
          <input type="range" min="0.5" max="2" step="0.05" value={brightness} onChange={(e) => setBrightness(+e.target.value)} />
        </label>
        <label>
          duration {duration.toFixed(1)}s
          <input type="range" min="0.8" max="8" step="0.1" value={duration} onChange={(e) => setDuration(+e.target.value)} />
        </label>
        <label>
          hueRange {hueRange}°
          <input type="range" min="0" max="60" step="1" value={hueRange} onChange={(e) => setHueRange(+e.target.value)} />
        </label>
        <label className="check">
          <input type="checkbox" checked={active} onChange={(e) => setActive(e.target.checked)} />
          active (the bag)
        </label>
        <label className="check">
          <input type="checkbox" checked={staticColors} onChange={(e) => setStaticColors(e.target.checked)} />
          staticColors (no hue-shift)
        </label>
      </div>
      <CodeBlock className="snippet" lang="javascript">{snippet}</CodeBlock>
    </section>
  );
}

function SizeGallery() {
  const sizes = [
    ["sm", "Compact orbit. Buttons, chips."],
    ["md", "Full perimeter. Cards, modals."],
    ["line", "Bottom edge only. Inputs."],
    ["pulse-inner", "Breathe inside the hairline. Seam."],
    ["pulse-outside", "Bloom outward. Wants a 1px child border."],
  ];
  return (
    <div className="gallery">
      {sizes.map(([size, blurb]) => (
        <div key={size} className="gallery-cell">
          <BorderBeam size={size} colorVariant="colorful" theme="dark" strength={0.55} saturation={0.75}>
            <div className="gallery-card" style={{ border: size === "pulse-outside" ? "1px solid #ededed44" : "1px solid #2e2e2e" }}>
              <Code>{size}</Code>
              <p>{blurb}</p>
            </div>
          </BorderBeam>
        </div>
      ))}
    </div>
  );
}

function ColorGallery() {
  const vars = ["colorful", "mono", "ocean", "sunset"];
  return (
    <div className="gallery">
      {vars.map((v) => (
        <div key={v} className="gallery-cell">
          <BorderBeam size="md" colorVariant={v} theme="dark" strength={0.7}>
            <div className="gallery-card">
              <Code>{v}</Code>
            </div>
          </BorderBeam>
        </div>
      ))}
    </div>
  );
}

function ThinBeamBtn({ fill, fg, border, label }) {
  return (
    <BorderBeam size="sm" colorVariant="colorful" theme="dark" strength={0.4} saturation={0.65} duration={2.8}>
      <span
        className="btn"
        style={{
          background: fill,
          color: fg,
          border: `1px solid ${border}`,
          borderRadius: 8,
          display: "inline-block",
        }}
      >
        {label}
      </span>
    </BorderBeam>
  );
}

function PartOne() {
  return (
    <section id="part-1" className="part">
      <h2>Part 1 — border-beam walkthrough</h2>
      <p className="lede">
        Primer (read this first):{" "}
        <a href="https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/border-beam" target="_blank" rel="noreferrer">
          github.com/Jakubantalik/Libraries.dev/packages/border-beam
        </a>
        {" · "}
        <a href="https://libraries.dev/beam.html" target="_blank" rel="noreferrer">
          libraries.dev/beam
        </a>
        {" · "}
        npm <Code>border-beam@1.3.0</Code>
      </p>

      <h3>What it does</h3>
      <p>
        A React wrapper. Your child keeps its fill. The library paints <strong>only on the edge</strong>: a conic/radial
        beam masked to the border (<Code>::after</Code>), an inner glow (<Code>::before</Code>), and an outer bloom node.
        <Code>pointer-events: none</Code>. <Code>active</Code> fades it on/off — that is the bag.
      </p>

      <h3>File tree</h3>
      <CodeBlock className="tree" lang="plaintext">{`packages/border-beam/          (lives in Libraries.dev now)
├── src/
│   ├── index.ts               public exports
│   ├── BorderBeam.tsx         wrapper: detect radius, fade, offscreen pause
│   ├── styles.ts              generateBeamCSS — gradients, masks, keyframes
│   ├── pulseDriver.ts         shared rAF ~30fps for pulse types
│   └── types.ts               props + presets
├── dist/                      ESM + CJS + d.ts  (what npm ships)
├── ports/ios/BorderBeamKit/   Metal port
├── ports/react-native/        Skia port
├── vite.config.ts
└── README.md`}</CodeBlock>
      <BoughPicks />
      <p className="file-chips">
        <Code>index.ts</Code>
        <Code>App.tsx</Code>
        <Code>app.js</Code>
        <Code>page.html</Code>
        <Code>spec.json</Code>
        <Code>paper.pdf</Code>
        <Code>main.py</Code>
        <Code>lib.rs</Code>
      </p>

      <h3>Code overview</h3>
      <CodeBlock className="snippet" lang="javascript">{`import { BorderBeam } from "border-beam";

<BorderBeam size="md" colorVariant="colorful" theme="dark" strength={0.45}>
  <div style={{ background: "#000", border: "1px solid #ededed33", borderRadius: 12 }}>
    Content. Fill stays yours. Beam rides the border.
  </div>
</BorderBeam>`}</CodeBlock>
      <p>
        <Code>BorderBeam.tsx</Code> auto-detects the first child’s <Code>border-radius</Code>, pauses animation when
        offscreen, and for <Code>pulse-outside</Code> scales the halo to the child’s box. Pulse types honor{" "}
        <Code>prefers-reduced-motion</Code>. Stock defaults are loud (<Code>strength=1</Code>, <Code>saturate(1.2)</Code>
        ). Archanglic wants muted pastel — start the playground below ~0.4–0.5 strength.
      </p>

      <h3>Live knobs</h3>
      <p className="hint">Drag these. The snippet updates. This is the real library, not a mock.</p>
      <Playground />

      <h3>Size family</h3>
      <SizeGallery />

      <h3>colorVariant</h3>
      <ColorGallery />

      <h3>Layers (mental model)</h3>
      <CodeBlock className="tree" lang="plaintext">{`wrapper
├── child          your button/card (fill #000)
├── ::after        beam stroke (masked to 1px ring)
├── ::before       inner glow
└── [data-beam-bloom]  outer bloom
         opacity *= --beam-strength`}</CodeBlock>
    </section>
  );
}

function PartTwo() {
  const pick = (e, letter) => setLetter(e.currentTarget.closest("[data-item-id]"), letter);

  return (
    <section id="part-2" className="part">
      <h2>Part 2 — next decisions</h2>
      <div className="locked">
        <strong>Locked from last JSON.</strong> <Code>secondary</Code> omitted (ghost). <Code>tertiary</Code>{" "}
        <Code>#a1a1a1</Code>. Errors need red. Edges: white or border-beam. Primary/on-primary/on-error were not
        readable last time — these cards use column swatches. The heading “Archanglic” is always{" "}
        <Code>#ededed</Code>; it is <em>not</em> the token.
      </div>

      <Item
        id="primary"
        label="primary — the FILL of the main action"
        hint="Look at the fat swatch and the Deploy pill only. The word Archanglic is unchanged on purpose."
      >
        <div className="options col3">
          <Option letter="a" onPick={(e) => pick(e, "a")}>
            <div className="swatch-col" style={{ background: "#ededed" }} />
            <div className="mini">
              <div className="mini-h">Archanglic</div>
              <span className="btn" style={{ background: "#ededed", color: "#000", borderColor: "#ededed" }}>
                Deploy
              </span>
            </div>
            <div className="meta">
              <b>a)</b> <Code>#ededed</Code> — same white as type
            </div>
          </Option>
          <Option letter="b" onPick={(e) => pick(e, "b")}>
            <div className="swatch-col" style={{ background: "#ffffff" }} />
            <div className="mini">
              <div className="mini-h">Archanglic</div>
              <span className="btn" style={{ background: "#ffffff", color: "#000", borderColor: "#ffffff" }}>
                Deploy
              </span>
            </div>
            <div className="meta">
              <b>b)</b> <Code>#ffffff</Code> — hotter than body text
            </div>
          </Option>
          <Option letter="c" onPick={(e) => pick(e, "c")}>
            <div className="swatch-col" style={{ background: "#ededed" }} />
            <div className="mini">
              <div className="mini-h">Archanglic</div>
              <span className="btn" style={{ background: "#ededed", color: "#000", borderColor: "#ededed" }}>
                Deploy
              </span>
            </div>
            <div className="meta">
              <b>c)</b> alias <Code>on-surface</Code> — same chip as (a)
            </div>
          </Option>
        </div>
        <div className="split">
          <span style={{ background: "#ededed" }}>#ededed</span>
          <span style={{ background: "#ffffff" }}>#ffffff</span>
        </div>
        <p className="hint">Split bar: left off-white, right true white. If they still look identical, your display is clipping highlights.</p>
      </Item>

      <Item
        id="on-primary"
        label="on-primary — INK on the white Deploy pill"
        hint="You are choosing the label color sitting on a light fill, not the page text. Zoomed. Contrast vs #ededed."
      >
        <div className="options col3">
          {[
            ["a", "#000000", "true black"],
            ["b", "#1a1a1a", "gray-100"],
            ["c", "#0a0a0a", "rare black"],
          ].map(([letter, hex, name]) => (
            <Option key={letter} letter={letter} onPick={(e) => pick(e, letter)}>
              <div className="ink-zoom" style={{ background: "#ededed", color: hex }}>
                Deploy
              </div>
              <div className="meta">
                <b>{letter})</b> <Code>{hex}</Code> — {name} <Ratio fg={hex} bg="#ededed" />
              </div>
            </Option>
          ))}
        </div>
      </Item>

      <Item
        id="error"
        label="error — invalid / destructive (red)"
        hint="Paws/Totality keep error as its own hue. You asked for red somewhere. Fat swatch + rustc line."
      >
        <div className="options col3">
          {[
            ["a", "#ffb4ab", "Atmospheric/Totality dark-theme error"],
            ["b", "#ba1a1a", "Paws error — strong red fill"],
            ["c", "#c45c5c", "muted rust, still clearly red"],
          ].map(([letter, hex, name]) => (
            <Option key={letter} letter={letter} onPick={(e) => pick(e, letter)}>
              <div className="swatch-col" style={{ background: hex }} />
              <div className="mini">
                <div className="field" style={{ borderColor: hex }}>
                  colors.gray-1000
                </div>
                <p className="err" style={{ color: hex }}>
                  This token does not resolve. You cannot ship it.
                </p>
              </div>
              <div className="meta">
                <b>{letter})</b> <Code>{hex}</Code> — {name}
              </div>
            </Option>
          ))}
        </div>
      </Item>

      <Item
        id="on-error"
        label="on-error — text ON a red fill"
        hint="Each option is the Delete label. Shown on both a light red and a deep red so we can actually QA contrast. Last board put #ededed on #ededed — that was the garbage."
      >
        <div className="options col3">
          {[
            ["a", "#ffffff", "white ink"],
            ["b", "#000000", "black ink"],
            ["c", "#690005", "Atmospheric on-error maroon"],
          ].map(([letter, hex, name]) => (
            <Option key={letter} letter={letter} onPick={(e) => pick(e, letter)}>
              <div className="pair">
                <span className="btn" style={{ background: "#ffb4ab", color: hex, borderColor: "#ffb4ab" }}>
                  Delete
                </span>
                <span className="btn" style={{ background: "#ba1a1a", color: hex, borderColor: "#ba1a1a" }}>
                  Delete
                </span>
              </div>
              <div className="meta">
                <b>{letter})</b> <Code>{hex}</Code> — {name}
                <br />
                on #ffb4ab <Ratio fg={hex} bg="#ffb4ab" /> · on #ba1a1a <Ratio fg={hex} bg="#ba1a1a" />
              </div>
            </Option>
          ))}
        </div>
      </Item>

      <Item
        id="second-action"
        label="second action — Read button (secondary slot is omitted)"
        hint="Ghost is locked as the palette. You asked for a light shade + thin border-beam experiment."
      >
        <div className="options col3">
          <Option letter="a" onPick={(e) => pick(e, "a")}>
            <div className="mini row">
              <span className="btn fill">Deploy</span>
              <ThinBeamBtn fill="transparent" fg="#ededed" border="#ededed55" label="Read" />
            </div>
            <div className="meta">
              <b>a)</b> ghost + thin beam
            </div>
          </Option>
          <Option letter="b" onPick={(e) => pick(e, "b")}>
            <div className="mini row">
              <span className="btn fill">Deploy</span>
              <ThinBeamBtn fill="#1a1a1a" fg="#ededed" border="#1a1a1a" label="Read" />
            </div>
            <div className="meta">
              <b>b)</b> lifted dark <Code>#1a1a1a</Code> + thin beam
            </div>
          </Option>
          <Option letter="c" onPick={(e) => pick(e, "c")}>
            <div className="mini row">
              <span className="btn fill">Deploy</span>
              <ThinBeamBtn fill="#ededed" fg="#000" border="#ededed" label="Read" />
            </div>
            <div className="meta">
              <b>c)</b> actually light <Code>#ededed</Code> + thin beam
            </div>
          </Option>
        </div>
      </Item>

      <Item
        id="on-tertiary"
        label="on-tertiary — ink on #a1a1a1 (tertiary is locked)"
        hint="Secondary is a ghost button. Tertiary is a gray badge. Make them not cousins."
      >
        <div className="options col3">
          <Option letter="a" onPick={(e) => pick(e, "a")}>
            <div className="mini">
              <span className="badge" style={{ background: "#a1a1a1", color: "#000" }}>
                BETA
              </span>
            </div>
            <div className="meta">
              <b>a)</b> black on <Code>#a1a1a1</Code> <Ratio fg="#000000" bg="#a1a1a1" />
            </div>
          </Option>
          <Option letter="b" onPick={(e) => pick(e, "b")}>
            <div className="mini">
              <BorderBeam size="sm" colorVariant="colorful" theme="dark" strength={0.35} saturation={0.6}>
                <span className="badge" style={{ background: "#a1a1a1", color: "#000", border: "1px solid #a1a1a1", borderRadius: 4, display: "inline-block" }}>
                  BETA
                </span>
              </BorderBeam>
            </div>
            <div className="meta">
              <b>b)</b> black on badge + thin beam
            </div>
          </Option>
          <Option letter="c" onPick={(e) => pick(e, "c")}>
            <div className="mini">
              <span className="badge" style={{ background: "#a1a1a1", color: "#000", outline: "1px solid #ededed", outlineOffset: 3 }}>
                BETA
              </span>
            </div>
            <div className="meta">
              <b>c)</b> black on badge + white outer hairline
            </div>
          </Option>
        </div>
      </Item>

      <Item
        id="outline"
        label="outline — default edge"
        hint="You said white or border-beam. Not the gray-400 options."
      >
        <div className="options col3">
          <Option letter="a" onPick={(e) => pick(e, "a")}>
            <div className="panel" style={{ borderColor: "#ededed" }}>
              Panel. Hairline <Code>#ededed</Code>.
            </div>
            <div className="meta">
              <b>a)</b> off-white hairline
            </div>
          </Option>
          <Option letter="b" onPick={(e) => pick(e, "b")}>
            <div className="panel" style={{ borderColor: "#ffffff" }}>
              Panel. Hairline <Code>#ffffff</Code>.
            </div>
            <div className="meta">
              <b>b)</b> true white hairline
            </div>
          </Option>
          <Option letter="c" onPick={(e) => pick(e, "c")}>
            <BorderBeam size="md" colorVariant="colorful" theme="dark" strength={0.4} saturation={0.65}>
              <div className="panel" style={{ borderColor: "#ededed55", borderRadius: 8 }}>
                Panel. Idle white, beam on the ring.
              </div>
            </BorderBeam>
            <div className="meta">
              <b>c)</b> white hairline + beam
            </div>
          </Option>
        </div>
      </Item>

      <Item
        id="outline-variant"
        label="outline-variant — quieter divider"
        hint="Maybe white, maybe beam. Omit if one outline is enough."
      >
        <div className="options col3">
          <Option letter="a" onPick={(e) => pick(e, "a")}>
            <div className="mini">
              <p>Section</p>
              <hr style={{ border: 0, height: 1, background: "#ededed" }} />
              <p>Next</p>
            </div>
            <div className="meta">
              <b>a)</b> white rule
            </div>
          </Option>
          <Option letter="b" onPick={(e) => pick(e, "b")}>
            <div className="mini">
              <p>Section</p>
              <BorderBeam size="line" colorVariant="colorful" theme="dark" strength={0.5} saturation={0.7}>
                <div style={{ height: 12, borderBottom: "1px solid #ededed33", borderRadius: 0 }} />
              </BorderBeam>
              <p>Next</p>
            </div>
            <div className="meta">
              <b>b)</b> beam line
            </div>
          </Option>
          <Option letter="c" onPick={(e) => pick(e, "c")}>
            <div className="mini">
              <p>Section</p>
              <p className="hint" style={{ marginTop: 12 }}>
                Next — no extra rule
              </p>
            </div>
            <div className="meta">
              <b>c)</b> omit
            </div>
          </Option>
        </div>
      </Item>

      <Item
        id="beam-size"
        label="beam default size — when the bag opens"
        hint="Stock md-orbit is a 3-second signature. pulse-inner is the seam. sm is the thin button treatment."
      >
        <div className="options col3">
          {["pulse-inner", "sm", "md"].map((size, i) => {
            const letter = ["a", "b", "c"][i];
            return (
              <Option key={size} letter={letter} onPick={(e) => pick(e, letter)}>
                <BorderBeam size={size} colorVariant="colorful" theme="dark" strength={0.45} saturation={0.7}>
                  <div className="gallery-card" style={{ border: "1px solid #ededed33" }}>
                    <Code>{size}</Code>
                  </div>
                </BorderBeam>
                <div className="meta">
                  <b>{letter})</b> <Code>{size}</Code>
                </div>
              </Option>
            );
          })}
        </div>
      </Item>

      <Item
        id="beam-strength"
        label="beam strength — mute vs stock"
        hint="Same md card. Stock is 1.0 / sat 1.2. Archanglic asked for muted pastel."
      >
        <div className="options col3">
          {[
            ["a", 0.35, 0.55, "quiet"],
            ["b", 0.55, 0.75, "present"],
            ["c", 1, 1.2, "stock (loud)"],
          ].map(([letter, st, sat, name]) => (
            <Option key={letter} letter={letter} onPick={(e) => pick(e, letter)}>
              <BorderBeam size="md" colorVariant="colorful" theme="dark" strength={st} saturation={sat}>
                <div className="gallery-card" style={{ border: "1px solid #ededed33" }}>
                  <Code>
                    {st} / {sat}
                  </Code>
                </div>
              </BorderBeam>
              <div className="meta">
                <b>{letter})</b> {name}
              </div>
            </Option>
          ))}
        </div>
      </Item>
    </section>
  );
}

function App() {
  return (
    <main>
      <header className="top">
        <h1>Archanglic — beam tutorial + decisions</h1>
        <nav>
          <a href="#part-1">Part 1 tutorial</a>
          <a href="#part-2">Part 2 decisions</a>
        </nav>
      </header>
      <PartOne />
      <PartTwo />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
