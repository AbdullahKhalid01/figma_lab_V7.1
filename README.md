# Margin Goods storefront

A responsive storefront inspired by the provided Margin Goods desk-essentials brief, built as a static HTML/CSS/JS project.

## Local setup

1. Open a terminal in this project folder.
2. Start a local web server:

   ```bash
   python -m http.server 8000
   ```

3. Open http://localhost:8000 in a browser.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive layout and design system
- `script.js` — add-to-bag feedback and demo contact form validation
- `assets/` — local SVG artwork used for the hero and product cards

## Notes

This project is intentionally built as a clean, static storefront so it runs locally without build tooling. The Figma source was not available in this environment, so the layout uses the supplied brief and the named products/sections as the source of truth while keeping the requested palette, spacing, hierarchy, and responsive behavior aligned to the design direction.
