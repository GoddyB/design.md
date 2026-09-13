function toText(children) {
  if (children == null || typeof children === "boolean") return "";
  if (typeof children === "string" || typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(toText).join("");
  return "";
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function paint(text, lang, kind) {
  if (kind === "tree" && typeof window !== "undefined" && typeof window.archanglicPaintTree === "function") {
    return window.archanglicPaintTree(text);
  }
  let html =
    typeof window !== "undefined" && typeof window.archanglicHighlight === "function"
      ? window.archanglicHighlight(text, lang)
      : escapeHtml(text);
  if (typeof window !== "undefined" && typeof window.archanglicWrapExt === "function") {
    html = window.archanglicWrapExt(html);
  }
  return html;
}

export function Code({ children, lang }) {
  const text = toText(children);
  return (
    <code
      className="arch-code hljs"
      dangerouslySetInnerHTML={{ __html: paint(text, lang) }}
    />
  );
}

export function CodeBlock({ children, className, lang }) {
  const text = toText(children);
  const isTree = className && className.split(/\s+/).includes("tree");
  const guessed =
    lang ||
    (isTree
      ? "plaintext"
      : typeof window !== "undefined" && typeof window.archanglicGuess === "function"
        ? window.archanglicGuess(text)
        : "javascript");
  return (
    <pre className={className}>
      <code
        className={`${isTree ? "tree" : `language-${guessed}`} hljs`}
        dangerouslySetInnerHTML={{ __html: paint(text, guessed, isTree ? "tree" : "snippet") }}
      />
    </pre>
  );
}
