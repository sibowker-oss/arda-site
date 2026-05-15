# Arda Design System · v3 · Static palette

This pack is the **complete v3 design system** — every surface aligned to the navy + lime + alert-magenta palette and the new ARDA wordmark.

```
.
├── README.md                  ← full system reference (voice + visual)
├── SKILL.md                   ← short-form working rules
├── colors_and_type.css        ← single source of truth · tokens, fonts, type
├── assets/
│   ├── arda-logo-white.png    ← v3 lockup · white on transparent
│   ├── arda-mark-white.png    ← v3 mark only · white on transparent
│   ├── arda-logo-on-navy.png  ← v3 lockup baked on navy-1000
│   ├── pattern-lattice.png    ← signature woven brand texture
│   └── icons/                 ← 25 product icons, white on transparent
├── preview/                   ← Design-System-tab cards (one per concept)
├── slides/                    ← eight 1920×1080 sales-deck templates
│   └── index.html             ← grid of all eight templates
├── ui_kits/marketing_site/    ← v3 rebuild of ardacomputing.com on-voice
│   └── index.html             ← live demo (open this first)
└── v3_proposal/               ← the direction memo that locked v3
    └── index.html             ← four palette options + five imagery concepts
```

## What's *not* in this pack

- The v1/v2 review deck (`review_deck/`) — still on the previous palette.
- Raw decks and extractions (`raw_assets/`) — hex-coded against v1.
- The legacy Pathway Extreme + Titillium Web TTFs in `fonts/` — v3 loads Inter Tight from Google Fonts in `colors_and_type.css` directly. Re-bundle them only if you need offline serving.
- The v1 marketing-site backup (`index.v1.html`, `styles.v1.css`).

## First places to look

- `ui_kits/marketing_site/index.html` — the canonical demo. Open it to see every component (header, hero, worm diagram, three-column OOG, architecture frame, barriers table, stats band, CTA, footer).
- `colors_and_type.css` — pinch every variable from here. The tokens are the brand contract.
- `preview/logo.html` and `preview/colors-brand.html` — the brand identity in two cards.
- `v3_proposal/index.html` — read this if you need the rationale for the Static palette and the receipts-plus-product imagery direction.

## Voice, in one line

> *Sober, sovereign, specific. We sound like the trusted operator who has thought about the failure modes — not the vendor selling around them.*

Everything else in `README.md`.
