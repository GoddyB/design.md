(function (w) {
  var EXT = {
    tsx: "jsx-react",
    jsx: "jsx-react",
    html: "html-ember",
    json: "json-adobe",
    pdf: "pdf-adobe",
    ts: "ts-blue",
    js: "js-sun",
    py: "py-forest",
    rs: "rs-iron"
  };
  var EXT_RE = /(?<=[\w/-])\.(tsx|jsx|html|json|pdf|ts|js|py|rs)(?![\w-])/g;

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function wrapExt(html) {
    return html.replace(EXT_RE, function (_, ext) {
      return '<span class="' + EXT[ext] + '">.' + ext + "</span>";
    });
  }

  function treeDepth(line) {
    var n = 0;
    var rest = line;
    while (rest.indexOf("│   ") === 0) {
      n += 1;
      rest = rest.slice(4);
    }
    if (rest.indexOf("├── ") === 0 || rest.indexOf("└── ") === 0) n += 1;
    return n + 1;
  }

  function floorClass(depth) {
    if (depth <= 1) return "canopy";
    if (depth === 2) return "bough";
    return "twig";
  }

  function paintTree(text) {
    return String(text)
      .split("\n")
      .map(function (line) {
        return (
          '<span class="' +
          floorClass(treeDepth(line)) +
          '">' +
          wrapExt(escapeHtml(line)) +
          "</span>"
        );
      })
      .join("\n");
  }

  w.archanglicWrapExt = wrapExt;
  w.archanglicPaintTree = paintTree;
})(window);
