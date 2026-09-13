import React from "react";
import { createRoot } from "react-dom/client";
import { BorderBeam } from "border-beam";
import { Code, CodeBlock } from "../archanglic/react.jsx";

const VARIANTS = ["colorful", "mono", "ocean", "sunset", "forest", "candy", "ice", "gold"];

const EASE_WHOLE_LAP = `[data-beam="{id}"][data-active],
[data-beam="{id}"][data-fading] {
  /* first animation is beam-spin; second is fade */
  animation-timing-function: ease-in-out, ease;
}`;

function DemoCard({ children, className = "chip" }) {
  return <div className={className}>{children}</div>;
}

function App() {
  return (
    <main>
      <div className="top">
        <h1>Border Beam fork workshop</h1>
        <nav>
          <a href="/ux-beam/">ux-beam</a>
          <a href="https://github.com/GoddyB/border-beam">GoddyB/border-beam</a>
        </nav>
      </div>
      <p className="lede">
        How to change palettes and how to ease the orbit around corners. Live demos are{" "}
        <strong>stock 1.4.0</strong> from the clone. Nothing in{" "}
        <Code>~/forks/border-beam</Code> has been patched. You apply the edits by hand.
      </p>
      <div className="note">
        <strong>Clone.</strong> Public fork of Jakubantalik/Libraries.dev (GitHub{" "}
        <Code>Jakubantalik/border-beam</Code> redirects there). Package lives at{" "}
        <Code>packages/border-beam/</Code>. Upstream npm on the old dash was 1.3.0; this
        fork’s main is <Code>1.4.0</Code> and already has forest / candy / ice / gold.
      </div>

      <h2>1. Stock palettes</h2>
      <p className="hint">
        <Code>colorVariant</Code> is a name, not a color array. These eight keys are the
        whole menu today.
      </p>
      <div className="grid">
        {VARIANTS.map((v) => (
          <div className="cell" key={v}>
            <BorderBeam size="sm" colorVariant={v} theme="dark" strength={0.55} saturation={0.75} duration={2.6}>
              <DemoCard>{v}</DemoCard>
            </BorderBeam>
          </div>
        ))}
      </div>

      <h2>2. Where the colors live</h2>
      <p className="hint">Five maps in one file. Same keys. Different jobs.</p>
      <CodeBlock className="tree">{`~/forks/border-beam/packages/border-beam/src/
├── types.ts          BorderBeamColorVariant union
├── styles.ts         five palette maps + CSS generator + beam-spin
├── BorderBeam.tsx    wrapper, radius detect, css prop
├── pulseDriver.ts    rAF breathe for pulse-* only
└── index.ts          public exports`}</CodeBlock>

      <div className="steps">
        <ol>
          <li>
            Union: <Code>packages/border-beam/src/types.ts</Code> lines 33–41.
          </li>
          <li>
            <Code>colorPalettes</Code> — md + pulse blobs / spikes.{" "}
            <Code>styles.ts</Code> ~141.
          </li>
          <li>
            <Code>smallColorPalettes</Code> — sm orbit. ~267.
          </li>
          <li>
            <Code>lineColorPalettes</Code> — line stroke, dark/light. ~488.
          </li>
          <li>
            <Code>lineInnerGradientData</Code> — line wash. ~695.
          </li>
          <li>
            <Code>lineBloomColors</Code> — line bloom spikes. ~797.
          </li>
          <li>
            Router <Code>generateBeamCSS</Code> ~1407 picks sm / md / line / pulse-inner /
            pulse-outside.
          </li>
        </ol>
      </div>

      <h3>Union</h3>
      <CodeBlock className="snippet" lang="typescript">{`export type BorderBeamColorVariant =
  | 'colorful'
  | 'mono'
  | 'ocean'
  | 'sunset'
  | 'forest'
  | 'candy'
  | 'ice'
  | 'gold';`}</CodeBlock>

      <h3>Retint sunset in place</h3>
      <p className="hint">
        Smallest change. Keep <Code>pos</Code> and <Code>size</Code>. Swap only{" "}
        <Code>color</Code> / spike rgbs. Repeat the same hues in the other four maps’
        <Code>sunset</Code> objects.
      </p>
      <CodeBlock className="snippet" lang="javascript">{`// packages/border-beam/src/styles.ts  — colorPalettes.sunset (~187)
sunset: {
  border: [
    { color: 'rgb(255, 80, 50)', pos: '33% -7.4%', size: '70px 40px' },
    { color: 'rgb(255, 160, 40)', pos: '12% -5%', size: '60px 35px' },
    { color: 'rgb(255, 120, 60)', pos: '2.1% 68.3%', size: '40px 70px' },
    { color: 'rgb(255, 200, 50)', pos: '2.1% 68.3%', size: '20px 35px' },
    { color: 'rgb(255, 100, 80)', pos: '74.4% 100%', size: '180px 32px' },
    { color: 'rgb(255, 180, 60)', pos: '55% 100%', size: '85px 26px' },
    { color: 'rgb(255, 60, 60)', pos: '93.9% 0%', size: '74px 32px' },
    { color: 'rgb(255, 140, 50)', pos: '100% 27.1%', size: '26px 42px' },
    { color: 'rgb(255, 90, 70)', pos: '100% 27.1%', size: '52px 48px' },
  ],
  spike: { primary: 'rgb(255, 140, 80)', secondary: 'rgba(255, 100, 60, 0.98)' },
  spikeLt: { primary: 'rgb(200, 80, 40)', secondary: 'rgb(220, 120, 30)' },
},`}</CodeBlock>

      <h3>Add a named palette (e.g. archanglic)</h3>
      <ol>
        <li>
          Add <Code>|'archanglic'</Code> to the union in <Code>types.ts</Code>.
        </li>
        <li>
          Copy any existing key’s object in all five maps. Retint. Do not skip line maps
          or <Code>size="line"</Code> will throw / go blank.
        </li>
        <li>
          Then <Code>colorVariant="archanglic"</Code>. Rebuild the package (
          <Code>npm run build</Code> in <Code>packages/border-beam</Code>).
        </li>
      </ol>
      <CodeBlock className="snippet" lang="javascript">{`export type BorderBeamColorVariant =
  | 'colorful' | 'mono' | 'ocean' | 'sunset'
  | 'forest' | 'candy' | 'ice' | 'gold'
  | 'archanglic';  // add this, then the five maps`}</CodeBlock>
      <p className="hint">
        <Code>mono</Code> is special: the component forces <Code>staticColors</Code> and
        halves opacity. A muted Archanglic palette can stay a normal variant plus{" "}
        <Code>staticColors</Code> / low <Code>saturation</Code> from the consumer.
      </p>

      <h2>3. Spin vs pulse</h2>
      <p className="hint">
        Corner easing only applies to the rotate family. Pulse does not travel the
        perimeter.
      </p>
      <div className="pair">
        <div>
          <p className="label">sm / md — CSS conic spin (this is the orbit)</p>
          <div className="stage">
            <BorderBeam size="md" colorVariant="colorful" theme="dark" strength={0.5} saturation={0.7} duration={2.8}>
              <DemoCard className="square">md</DemoCard>
            </BorderBeam>
          </div>
        </div>
        <div>
          <p className="label">pulse-inner — rAF breathe, no orbit</p>
          <div className="stage">
            <BorderBeam size="pulse-inner" colorVariant="sunset" theme="dark" strength={0.55} saturation={0.7}>
              <DemoCard className="square">pulse</DemoCard>
            </BorderBeam>
          </div>
        </div>
      </div>
      <CodeBlock className="snippet" lang="css">{`/* styles.ts ~1790 (md). sm twin ~1560. Constant dθ/dt. */
[data-beam="{id}"][data-active] {
  animation:
    beam-spin-{id} {duration}s linear infinite,
    beam-fade-in-{id} 0.6s ease forwards;
}
@keyframes beam-spin-{id} {
  to { --beam-angle-{id}: 360deg; }
}`}</CodeBlock>
      <p className="hint">
        The visible head is a conic mask on <Code>::after</Code> / <Code>::before</Code>,
        from the box center. Equal angle is not equal distance along a rounded rectangle.
        Wide pills already rush the short sides. That is the motion you want to replace.
      </p>
      <p className="hint">
        Pulse uses <Code>pulseDriver.ts</Code> (~30fps cosine ping-pong). ResizeObserver
        in <Code>BorderBeam.tsx</Code> ~141 is only for <Code>pulse-outside</Code> halo
        scale. Radius detect (~90) already exists for every size.
      </p>

      <h2>4. Ease around corners</h2>
      <p className="hint">
        Do this in the fork by hand. Ranked. Left is stock linear. Right is a{" "}
        <strong>consumer</strong> <Code>css</Code> override — not a source patch — so you
        can feel why “just ease the spin” is the wrong move.
      </p>
      <div className="pair">
        <div>
          <p className="label">A. stock linear — watch the wide pill’s short ends</p>
          <div className="stage-wide">
            <BorderBeam size="sm" colorVariant="gold" theme="dark" strength={0.6} saturation={0.8} duration={3.2} staticColors>
              <DemoCard className="pill">linear · 3.2s</DemoCard>
            </BorderBeam>
          </div>
        </div>
        <div>
          <p className="label">A′. ease-in-out on the whole lap (css prop, not the repo)</p>
          <div className="stage-wide">
            <BorderBeam
              size="sm"
              colorVariant="gold"
              theme="dark"
              strength={0.6}
              saturation={0.8}
              duration={3.2}
              staticColors
              css={EASE_WHOLE_LAP}
            >
              <DemoCard className="pill">ease whole lap</DemoCard>
            </BorderBeam>
          </div>
        </div>
      </div>
      <CodeBlock className="snippet" lang="css">{`/* BorderBeam css prop — workshop only. {id} is replaced per instance. */
[data-beam="{id}"][data-active],
[data-beam="{id}"][data-fading] {
  animation-timing-function: ease-in-out, ease;
}`}</CodeBlock>
      <p className="hint">
        A′ slows the start and end of the <em>revolution</em>. It does not know where the
        four corners are. On a pill it will not linger on the round caps.
      </p>

      <h3>B. Keyframe the angle from aspect ratio</h3>
      <p className="hint">
        Still polar. Better than A. Hold more degrees on the long edges. Needs width /
        height in the generated CSS (extend the pulse-outside measure, or pass box size
        into <Code>generateBeamCSS</Code>). Radius-blind unless you also encode corner
        arcs.
      </p>
      <CodeBlock className="snippet" lang="css">{`/* sketch — you write this in styles.ts instead of "to { 360deg }" */
@keyframes beam-spin-{id} {
  0%   { --beam-angle-{id}: 0deg; }
  /* dwell near each corner angle; numbers depend on width/height */
  18%  { --beam-angle-{id}: 8deg; }
  32%  { --beam-angle-{id}: 172deg; }
  48%  { --beam-angle-{id}: 188deg; }
  82%  { --beam-angle-{id}: 352deg; }
  100% { --beam-angle-{id}: 360deg; }
}`}</CodeBlock>

      <h3>C. rAF along a rounded-rect path — the real ease</h3>
      <p className="hint">
        Keep the conic painter. Change only how <Code>--beam-angle</Code> is driven.
        Mirror <Code>pulseDriver.ts</Code>. Sample the perimeter (straight + quarter-circle
        corners from <Code>detectedRadius</Code> + box size). Dip speed on the corner
        arcs. Map arc-length → the angle the conic mask needs. Best CSS-compatible fix.
      </p>
      <CodeBlock className="snippet" lang="javascript">{`// sketch for a new driver (do not paste as-is — you will tune)
function roundedRectPath(w, h, r) {
  const c = Math.max(0, Math.min(r, w / 2, h / 2));
  const straight = 2 * (w - 2 * c) + 2 * (h - 2 * c);
  const corners = 2 * Math.PI * c;
  return { length: straight + corners, r: c, w, h };
}
// speed profile: 1 on flats, <1 on corner arcs
// each frame: s = s + dt * speed(s); angle = angleAtArcLength(path, s)
// el.style.setProperty('--beam-angle-' + id, angle + 'deg')
// and drop CSS beam-spin on sm/md when the driver is on.`}</CodeBlock>

      <h3>D. SVG stroke along the border path</h3>
      <p className="hint">
        True perimeter motion (<Code>stroke-dashoffset</Code> on a rounded-rect path).
        Largest rewrite: you replace the conic + mask stack. Ports (iOS Metal / RN)
        already think in path space on some branches; web sm/md does not.
      </p>

      <h2>5. After you edit</h2>
      <CodeBlock className="snippet" lang="bash">{`cd ~/forks/border-beam/packages/border-beam
npm run build
# this workshop resolves file:/home/founder/forks/border-beam/packages/border-beam
# refresh /ux-beam-fork to see your hand edits`}</CodeBlock>
      <p className="hint">
        Do not commit until you like it. Dist is gitignored. This page will pick up a
        rebuilt dist on refresh (hard-refresh if the bundle cached the old file:
        dependency).
      </p>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
