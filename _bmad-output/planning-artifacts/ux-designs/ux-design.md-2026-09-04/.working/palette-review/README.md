# Palette review — copy-feedback payload

Open `index.html` on the Tailscale path `/ux-palette/`. Add notes under any swatch or mockup, then **Copy JSON** and paste the clipboard into chat. The payload always includes every item (empty `notes` if untouched); pretty-printed, 2-space indent, no timestamps.

```json
{
  "review": "archanglic-palette-fills",
  "items": [
    {
      "id": "background-200",
      "label": "background-200 #000000",
      "notes": ""
    }
  ]
}
```
