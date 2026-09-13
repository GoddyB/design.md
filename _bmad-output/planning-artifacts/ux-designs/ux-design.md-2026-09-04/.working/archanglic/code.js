(function () {
  function paintNode(el, kind, langHint) {
    var text = el.dataset.archSrc || el.textContent;
    el.dataset.archSrc = text;
    if (kind === "tree" && window.archanglicPaintTree) {
      el.innerHTML = window.archanglicPaintTree(text);
    } else if (window.archanglicHighlight) {
      var html = window.archanglicHighlight(text, langHint);
      el.innerHTML = window.archanglicWrapExt ? window.archanglicWrapExt(html) : html;
    }
    el.classList.add("hljs");
    if (kind === "tree") el.classList.add("tree");
    el.dataset.archHl = text;
  }

  function paintAll(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll("pre.snippet, pre.tree, code");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el.tagName === "CODE" && el.parentElement && el.parentElement.tagName === "PRE") {
        if (el.dataset.archHl === (el.dataset.archSrc || el.textContent) && el.querySelector("span")) continue;
        var parent = el.parentElement;
        var kind = parent.classList.contains("tree") ? "tree" : "snippet";
        var lang = kind === "tree" ? "plaintext" : "javascript";
        paintNode(el, kind, lang);
        continue;
      }
      if (el.tagName === "PRE") {
        if (el.dataset.archHl === "1") continue;
        var kindPre = el.classList.contains("tree") ? "tree" : "snippet";
        var code = el.querySelector("code") || document.createElement("code");
        if (!code.parentElement) {
          var preText = el.textContent;
          el.textContent = "";
          code.textContent = preText;
          el.appendChild(code);
        }
        paintNode(code, kindPre, kindPre === "tree" ? "plaintext" : "javascript");
        el.dataset.archHl = "1";
        continue;
      }
      if (el.tagName === "CODE") {
        if (el.dataset.archHl === (el.dataset.archSrc || el.textContent) && el.querySelector("span")) continue;
        paintNode(el, "inline");
        el.classList.add("arch-code");
      }
    }
  }

  function run() {
    paintAll(document);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }

  window.archanglicHighlightAll = paintAll;
})();
