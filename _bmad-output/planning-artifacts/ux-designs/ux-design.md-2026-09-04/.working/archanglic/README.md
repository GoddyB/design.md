# Archanglic dash kit

Every UX dash loads this so the review surface *is* Archanglic.

## Include

```html
<link rel="stylesheet" href="./archanglic/fonts.css">
<link rel="stylesheet" href="./archanglic/dash.css">
<link rel="stylesheet" href="./archanglic/themes/default.css">
<link rel="stylesheet" href="./archanglic/archanglic.css">
<script src="./archanglic/vendor/highlight.min.js"></script>
<script src="./archanglic/snippet.js"></script>
```

`archanglic.css` is the visual contract (`DESIGN.md` only points at it). `themes/default.css` is leftover highlight.js token color until snippet formatting is locked.

React dashes: import `{ Code, CodeBlock }` from `archanglic/react.jsx`. Load `highlight.min.js` then `snippet.js` before the bundle. Static HTML dashes can use `code.js` after those two.

Trees (`pre.tree`) are painted by `archanglicPaintTree` — not highlight.js. Extensions are CSS classes from `snippet.js`.

## Names

Tree floors: `canopy` (depth 1), `bough` (depth 2), `twig` (depth 3+).
Extensions: `pdf-adobe`, `json-adobe`, `jsx-react`, `ts-blue`, `js-sun`, `html-ember`, `py-forest`, `rs-iron`.
