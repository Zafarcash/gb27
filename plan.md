# GoreBox27 Website Plan

## Product outcome
A polished single-page promotional website for GoreBox27, presenting the app as an Android physics-driven sandbox shooter with active-ragdoll simulation, weapons, custom maps, and online multiplayer. The experience will include an obvious external download path to `https://apk-done.co`, early-access disclosure, no-affiliation messaging, and APK safety guidance.

## Architecture and delivery
- **Rendering:** Static HTML/CSS/JS. The content is public, stable, and can be generated ahead of time; no server or database is needed.
- **Runtime:** A tiny Node static server (`server.mjs`) for Preview and a static output directory (`dist/`) for publication. The server supports SPA-style fallback only for `/`; static assets must return real 404s.
- **Assets:** Local project-owned logo, hero visual, favicon, and route manifest. No runtime API or third-party JS dependency.
- **Caching intent:** HTML remains revalidated; versioned/local image assets can be long-lived in production. Preview behavior is unaffected by publication routing.

## Content structure
1. Sticky top bar with brand mark and section links.
2. Hero with H1, short positioning copy, download CTA to `https://apk-done.co`, external label, app metadata, and animated telemetry frame.
3. Overview manifesto describing player freedom and the chaos sandbox loop.
4. Systems section for active ragdolls, skeleton/organs/blood simulation, and live telemetry.
5. Feature grid for arsenal, custom maps, and online multiplayer.
6. Early-access/trust strip with no-affiliation and APK scanning guidance.
7. Closing download section repeating the CTA and external destination.
8. Footer with legal-ish content framing and route/brand details.

## Visual and interaction implementation
- Use CSS custom properties for palette, spacing, shadows, and motion curves.
- Use a grain pseudo-element, scanline/radar decorations, clipped borders, and grid overlays.
- Use native IntersectionObserver to reveal `.reveal` blocks as they enter view, and a small count-up routine for telemetry numbers.
- Use `prefers-reduced-motion` to disable reveal transforms, drift, marquee, and pulsing loops.
- Use semantic HTML, visible focus rings, keyboard-operable anchors, `aria-label` on decorative controls, and avoid relying on color alone.
- Use `loading="eager"` for the hero image, `decoding="async"`, and reserve dimensions to reduce layout shift.

## SEO and public paths
- One public route: `/`.
- Initial HTML contains all meaningful page copy, headings, and links; JavaScript only enhances motion.
- Include a descriptive title/description, Open Graph/Twitter tags using a configured canonical only when a real public origin is known, and a favicon.
- Include `robots.txt`, `sitemap.xml` only if the public origin is configured; otherwise rely on the platform defaults and do not emit guessed canonical URLs.
- Serve `GET /manus-routes.json` with `{ "routes": [{ "path": "/", "title": "GoreBox27 — Unleash the Sandbox" }] }`.

## Project structure
- `index.html` — semantic page markup and metadata.
- `styles.css` — design system, responsive layout, motion, reduced-motion rules.
- `script.js` — progressive enhancement for nav state, telemetry count-up, reveals, and pointer microinteraction.
- `server.mjs` — local/static Preview server on port 3000.
- `public/` — logo, hero art, favicon, route manifest, robots, sitemap.
- `app.config.ts` — project logo metadata for Webdev checkpoints.

## Verification
- Inspect source for the required content, CTA URL, metadata, route manifest, accessibility attributes, and reduced-motion behavior.
- Run a syntax check and a local HTTP health check against `/`, `/manus-routes.json`, and representative assets.
- Query the running site with `curl` to confirm HTML is content-bearing and missing assets are not served as the page shell.
- Review the final implementation once for cross-section connections and fix any confirmed issues before delivery.
