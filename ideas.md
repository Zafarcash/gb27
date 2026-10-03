# GoreBox27 Design Direction

## Direction exploration

### 1. Signal / Brutalist Combat HUD
A dense, cinematic tactical interface that treats the landing page like an in-world damage console: hard edges, lime telemetry, ember alerts, clipped cards, and fast kinetic motion. Probability: 0.08.

### 2. Neon Arcade Lab
A brighter, more playful arcade direction with saturated cyan/pink gradients, rounded panels, and a game-lab energy. Probability: 0.07.

### 3. Rusted Field Manual
A tactile, analog direction with paper textures, stamped labels, muted olive, rust, and slow parallax. Probability: 0.06.

## Committed direction: Signal / Brutalist Combat HUD

### Design movement
Editorial game marketing meets speculative control-room interface. The page should feel authored by a motion designer: asymmetrical compositions, deliberate overlap, and visible data layers that animate with purpose rather than decoration.

### Core principles
1. **Chaos with control** — the subject is visceral, but the interface stays legible.
2. **Every section has a signal** — each content block gets a distinct telemetry cue or interaction.
3. **Hard contrast, soft atmosphere** — crisp surfaces and type sit over grain, bloom, and atmospheric depth.
4. **Responsible framing** — clearly label early access, external download, and no official affiliation.

### Color philosophy
Near-black graphite (#090b0b) is the field. Acid lime (#d8ff52) is the primary action and data color. Ember orange (#ff5a36) flags danger and mature-content notes. Bone (#f4f0e6) provides editorial readability. Steel gray (#7a8780) carries secondary metadata. Use red sparingly to avoid glamorizing gore.

### Layout paradigm
A single-page narrative with a sticky translucent header and anchor navigation. The hero uses a split composition: editorial copy on the left, image/telemetry stage on the right. Subsequent sections alternate density: full-bleed manifesto, modular feature grid, large physics demonstration, content cards, then a decisive download close. Use a 12-column grid on desktop and a single-column rhythm on mobile.

### Signature elements
- A small corner label system: `GB27 // SYSTEM ONLINE`, `BUILD 0.15 / EARLY ACCESS`.
- A recurring thin lime rule with animated progress tick.
- Telemetry chips with pulsing dots and mono labels.
- A target-reticle / fracture symbol derived from the GoreBox27 mark.
- A scanline and grain overlay that never lowers text contrast.

### Interaction philosophy
Microinteractions should reward attention: nav links slide a lime underline, cards lift a few pixels, download buttons make the external destination explicit, and feature cards reveal their stat note on hover/focus. All essential information remains visible without hover.

### Animation
Hero image uses slow scale and drift; telemetry values count up on load; sections reveal with a low-distance slide/fade using IntersectionObserver; small dots pulse asynchronously; marquee line runs at a restrained pace. Respect `prefers-reduced-motion` by disabling transforms and infinite motion while retaining visibility and focus.

### Typography system
Use `Space Grotesk` for display and body (loaded from Google Fonts with system fallback) paired with `IBM Plex Mono` for telemetry. Display type is oversized, tight, uppercase where appropriate. Body copy stays 16–18px with generous line-height. Labels are small, tracked, and never used as the only explanation.

### Brand essence
A physics sandbox without a safety rail: controlled systems breaking beautifully under player intent.

### Brand voice
Direct, kinetic, self-aware, and transparent. Short sentences. Specific verbs. No fake official claims. Describe mature mechanics plainly without dwelling on graphic detail.

### Wordmark / logo
A compact `GB27` wordmark paired with a fractured circular reticle: two opposing filled arcs and a diagonal cut suggest a containment ring under stress. Keep the symbol readable at favicon size, with solid lime on graphite.

### Signature brand color
Acid lime `#d8ff52`.
