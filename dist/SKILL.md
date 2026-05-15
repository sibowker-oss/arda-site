---
name: arda-design
description: Use this skill to generate well-branded interfaces and assets for Arda Computing (sovereign AI platform for regulated enterprise), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# Arda design skill

Read the `README.md` file within this skill, and explore the other available files. The README is the spine of the system — voice DNA, palette, type, motion, iconography, and an index of everything else.

## Files at a glance

- **`README.md`** — voice & visual foundations. Start here.
- **`colors_and_type.css`** — single source of truth for tokens, fonts, and typography. Import this in any HTML you write.
- **`fonts/`** — legacy Pathway Extreme + Titillium Web (v1). v3 tokens load **Inter Tight + JetBrains Mono** via Google Fonts directly in the CSS.
- **`assets/`** — logos (`arda-logo-white.png`, `arda-mark-white.png`), the lattice texture, 27 product PNG icons. Copy what you need; don't redraw.
- **`v3_proposal/`** — the direction memo that locked the Static palette (navy + lime) and the imagery rules (receipts + product). Read this if you need rationale.
- **`ui_kits/marketing_site/`** — full HTML rebuild of the marketing site applying Tone of Voice v1 on the v3 palette. Lift sections, hero patterns, deployment-options table.
- **`slides/`** — eight 1920×1080 sales-deck templates (cover, section, three-column, stats, architecture, comparison, big-quote, next-steps).
- **`preview/`** — Design-System-tab cards (illustrative, not for production).

## Working rules

- **Voice is sober, sovereign, specific.** Sentence case. Australian English. No emoji in customer copy. The single test: *could a CIO read this aloud in their next risk committee without feeling exposed?*
- **One accent.** Dark navy (`#0A1224`) canvas + a single lime (`#C7F23F`) accent. Resist a second saturated colour on the same surface. **Lime pairs only with navy text — never white-on-lime.**
- **Risk signal is alert magenta** (`#FF3366` · `--arda-alert-500`). Reserved for "outside the boundary" — never decoration.
- **Blue is gone.** `--arda-blue-*` tokens were dropped in v3. There is no blue in the brand. The cool neutral that pairs with navy is `--arda-slate-300` / `--arda-slate-600`.
- **Imagery is receipts + product.** Image slots are typeset artefacts (audit logs, regulator citations, evidence hashes) or real product screenshots in window chrome. Stock and Midjourney imagery are banned.
- **Sub-claim trio.** When structuring a page or pitch, reach for *Own · Operate · Govern* — three sub-claims, three proof points. It's the core narrative device.
- **Footnote claims you can prove. Drop ones you can't.**
- **Banned words:** transformative, cutting-edge, 10x, AGI, revolutionise, disrupt, effortless, one-click, future-proof, unleash, hyperscale (positive). The full list is in the README.
- **Iconography:** copy from `assets/icons/` first. If missing, substitute from Lucide (CDN) at 1.5px stroke and flag the substitution in code comments. Never draw your own SVG icons in this brand. Never use emoji as icons.
- **Logo:** drop in `assets/arda-logo-white.png` (full lockup) or `assets/arda-mark-white.png` (mark only) — don't draw the three-bar mark used in v1/v2.
- **Cards:** low corner radius (4–10px), border-led on dark, shadow-led on light. Never fully rounded.
- **Motion:** quiet fades, `cubic-bezier(0.2, 0.7, 0.2, 1)` over 140–360ms. No bounces.

## How to use this skill

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

A safe default scaffold for a new HTML artifact:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="colors_and_type.css">
</head>
<body data-theme="dark" style="background: var(--bg-canvas-dark);">
  <!-- compose with .t-eyebrow / .t-eyebrow--lime, .t-h1/h2/h3, .t-lead, .t-body, .pill, .s-tile -->
  <!-- drop the lockup in the header: <img src="assets/arda-logo-white.png" alt="Arda" style="height: 28px"> -->
</body>
</html>
```
