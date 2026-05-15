# Arda Design System

Brand & UI design system for **Arda Computing** (trading as Arda) — the sovereign AI platform that regulated enterprises **own, operate and govern** inside their own trust boundary.

> **The DNA, in one line:** *Sober, sovereign, specific. We sound like the trusted operator who has thought about the failure modes — not the vendor selling around them.*
> — Arda Tone of Voice v1, May 2026

> **v3 · May 2026.** The palette is now **Static** — sovereign navy + electric lime + alert magenta. Pathway Extreme retired in favour of Inter Tight. The logo is the new ARDA wordmark + target mark (extracted from `uploads/1.pdf`). The v3 direction memo at `v3_proposal/index.html` documents how we got here.

---

## Source material

This system is built from material the user provided directly. The reader of this README is not assumed to have access to the originals — they are listed so we can re-trace decisions.

| Source | What it gave us |
|---|---|
| `uploads/1.pdf` ⭐ **primary (v3 logo)** | The new ARDA wordmark + target mark used everywhere — extracted to `assets/arda-logo-white.png` and `assets/arda-mark-white.png`. |
| `uploads/ARDA_Tone_of_Voice_v1_2026-05-01.docx` ⭐ **primary (voice)** | Voice DNA, five voice principles, owned/banned vocabulary, channel guidance, before/after web copy, sample hero options. |
| `uploads/ARDA_OTS_Sovereign_AI_for_Electricity_Utilities.pptx` | Original v1 palette + Pathway Extreme + Titillium Web + lattice background. v3 keeps only navy, lattice, and the icon set. |
| `uploads/ARDA_V2.pptx`, `ARDA_First_Call_Deck.pptx` | Earlier sales decks — confirmed the slide layout system (cover, section, three-column, stats, architecture, comparison, big-quote, next-steps). |
| `uploads/170426_Arda_AI_Deployment_Options_Combined.pdf` | Four-deployment-options framework (Frontier API → Sovereign), key boundary diagrams, language. |
| `uploads/arda_pov_regulated_ai_adoption.pdf` | Internal POV — three tiers, three horizons, capability map, sovereign stack. |
| `uploads/arda_tooling_landscape_1.pdf` | User-type × use-case × sensitivity grid. |
| `ardacomputing.com` (live, May 2026) | The current website — what we are rewriting against. |

Raw extractions live in `raw_assets/` (not part of the system; kept for traceability).

---

## Index — what's where

```
.
├── README.md                  ← this file (start here)
├── SKILL.md                   ← cross-compat with Claude Code Agent Skills
├── colors_and_type.css        ← single source of truth: tokens, fonts, type
├── fonts/                     ← Pathway Extreme + Titillium Web (legacy v1; system now loads Inter Tight + JetBrains Mono via Google Fonts)
├── assets/
│   ├── arda-logo-white.png    ← v3 · full ARDA lockup (target + wordmark), white on transparent
│   ├── arda-mark-white.png    ← v3 · target mark only, white on transparent
│   ├── arda-logo-on-navy.png  ← v3 · same lockup baked onto navy 1000
│   ├── arda-mark.png          ← v1 · legacy target mark
│   ├── pattern-lattice.png    ← signature woven brand texture
│   └── icons/                 ← 27 white-on-transparent product icons (PNG)
├── preview/                   ← Design-System-tab cards (one per concept)
├── ui_kits/
│   └── marketing_site/        ← v3 rebuild of ardacomputing.com on-voice
│       └── index.html         ← live demo (open this)
├── slides/                    ← 1920×1080 sales-deck slide templates (eight layouts)
│   └── index.html             ← grid of all eight templates
├── v3_proposal/               ← The direction memo that locked v3 (palette + imagery)
│   └── index.html             ← navy + lime; receipts + product as imagery
└── raw_assets/                ← unprocessed extractions, kept for reference
```

---

## CONTENT FUNDAMENTALS — how Arda sounds

The voice is documented in full in `raw_assets/tone_of_voice.txt` (the v1 ToV). The summary below is what every designer/engineer needs at hand.

### The DNA — three words

| Word | What it means in writing | Failure mode if we lose it |
|---|---|---|
| **SOBER** | Declarative sentences. Verbs over adjectives. No hyperbole. No exclamation. The page reads like a briefing, not a pitch. | We slide into AI-marketing voice and the CIO files us with the rest. |
| **SOVEREIGN** | Control language wins: *own, operate, govern, boundary, custody, audit*. Sovereignty is the worldview, not a feature. | We become "private AI" — a crowded category the buyer doesn't yet trust. |
| **SPECIFIC** | We name the workload, the regulator, the failure mode — *AESCSF*, *CPS 234*, *substation operator*, *underwriting model* — not "regulated industries" in the abstract. | We become generic enterprise software. |

### The five voice principles (in order, hardest first)

1. **Lead with the risk the buyer carries, not the technology we built.**
2. **Use "Own, Operate, Govern" as a structural device, not a slogan.** Three sub-claims, three proof points, three sections.
3. **Be specific about the world the buyer lives in.** Energy networks have substations, dispatch decks, AESCSF, AEMO. Banks have CPS 234.
4. **Earn every claim. Footnote what you can prove. Drop what you can't.**
5. **Engineering depth is a credential, not the headline.**

### The single test
> *Could a CIO read this aloud in their next risk committee without feeling exposed?* If yes, it's on-voice. If no, rewrite.

### Casing & house style

- **Sentence case** for all headlines and buttons. Title case is journalistic and outdated for B2B.
- Company name is **Arda** (not ARDA) in body copy. Use ARDA only in the literal product/system names where it is part of the visual mark.
- Product names: **Arda Core**, **Arda Code**, **Arda Index**, **Arda Graph**.
- **Australian English** is the house standard (organisation, programme, customise, behaviour). US English permitted for US-facing content; mixed within a single page is not.
- Numerals: nine and below as words, 10+ as digits.
- Acronyms: spell out on first use. Keep the regulator name visible.
- **Em dashes** with spaces around them — like this — for clarity in regulatory copy.
- Avoid the Oxford comma; we are British-default in punctuation.

### Voice — by example

**ON-VOICE (homepage hero, recommended):**
> AI you can defend to your regulator.
> Arda is the sovereign AI platform regulated enterprises own, operate, and govern — inside their own trust boundary, with the audit trail their CISO and their regulator expect.

**OFF-VOICE (current live site):**
> The Private Enterprise AI Infrastructure Layer.
> Arda is secure AI Infrastructure. Keep data private, enhance productivity, reduce cost and increase visibility — all with enterprise level security.

### Owned vocabulary — keep using
*Sovereign / sovereignty · Own, Operate, Govern · Trust boundary · Custody (of data) · Audit-grade / audit trail · Regulated workload · Inside the boundary · Outside the boundary · Deploy / deployment · The receipts (internal discipline)*

### BANNED words — never publish
*transformative · cutting-edge · 10x / 100x / X times faster · AGI / superintelligence · revolutionise · disrupt · effortless · one-click · future-proof · unleash · unlock potential · hyperscale (as a positive)*

### High-caution — only with a footnote / proof
*powerful · productivity · faster · cost-effective · enterprise-grade · scalable · best-in-class · innovative · secure · trusted*

### Emoji & decoration
**No emoji** in customer-facing copy. No "we're shipping" theatre. No manifestos with one-word lines. The page reads like a briefing.

### "Sovereign AI" — always disambiguate
The phrase is becoming crowded (Mistral, Oracle, CGI, Zadara). On first use on a page, footnote or in-line: *"sovereignty here means control, operation and governance — not location."*

---

## VISUAL FOUNDATIONS

### Palette — navy + lime (Static)

The brand canvas is **deep navy** (`#0A1224`). On it, **one** saturated partner: **lime** (`#C7F23F`). White and slate carry text and rules. **Alert magenta** (`#FF3366`) is reserved for the "outside the boundary" risk signal — never decoration. Worm-green and worm-red are gone; the boundary semantics are now palette-native.

| Role | Token | Hex |
|---|---|---|
| Canvas (dark) | `--arda-navy-900` | `#0A1224` |
| Surface (dark) | `--arda-navy-800` | `#111A33` |
| Card / divider rule | `--arda-navy-600` | `#1F2D4D` |
| **Accent — Lime** | `--arda-lime-500` | **`#C7F23F`** |
| Lime on-dark text | `--arda-lime-400` | `#D5F76A` |
| **Risk — Alert magenta** | `--arda-alert-500` | **`#FF3366`** |
| Boundary OK (semantic alias) | `--arda-ok` | `#C7F23F` |
| Outside boundary (semantic alias) | `--arda-risk` | `#FF3366` |
| Body on dark | `--arda-slate-300` | `#8DA0C2` |
| Body on light | `--arda-slate-900` | `#0F172A` |

> **Rule:** one accent per surface. If you find yourself adding a second saturated colour, you are decorating instead of communicating. Pull it back. **Lime pairs with navy text for legibility — never white-on-lime.**

### Type — Inter Tight + JetBrains Mono

- **Display + body: Inter Tight** (400 / 500 / 600 / 700 / 800) — tight, technical, near-Söhne metrics. Loaded from Google Fonts via `colors_and_type.css`. Used for everything: H1–H4, body copy, UI labels, captions.
- **Mono: JetBrains Mono** — code, data tables, evidence panels, audit logs (the receipts).
- Pathway Extreme + Titillium Web ship in `fonts/` for the legacy v1 decks but are no longer referenced by v3 tokens.

Eyebrows are short, **uppercase, tracked +0.14em, weight 700**, in muted slate (`--arda-slate-300`) by default, or lime (`.t-eyebrow--lime`) when they're labelling a load-bearing section.

### Backgrounds & motifs

- Default canvas is **flat dark navy** (`--arda-navy-900`) — no gradients on the hero.
- Signature texture: the **lattice / woven mesh** (`assets/pattern-lattice.png`) — used as a subtle full-bleed band behind cover slides and section dividers. Always low opacity (0.25–0.5) so it whispers, never shouts.
- **No gradient backgrounds.** No emoji cards. No left-border-only accent cards. None of those AI-vendor tropes.
- **Imagery direction (v3): the receipts + the product.** Image slots are typeset artefacts — audit logs, regulator citations, deployment manifests, evidence hashes — *or* real screenshots of Arda Core / Code / Graph in window chrome. Stock photography is banned. SVG schematics and B&W documentary photography are second-tier options when we need scale. See `v3_proposal/index.html` for the full direction.

### Animation & motion

- **Quiet fades.** No bounces. No springs. `cubic-bezier(0.2, 0.7, 0.2, 1)` over 140–360ms is the entire vocabulary.
- Hover: subtle — a 1px border colour shift, a `translateY(-1px)`, or a 5–8% lift in surface tone. **No glow halos.**
- Press: shrink 0.98 + drop one shade of background.
- Loading / skeleton states use a slow, low-contrast shimmer. Not breathing, not pulsing.

### Borders, rules, shadows

- **Borders are the primary affordance** on dark surfaces — `1px solid rgba(255,255,255,0.08)`, raising to `0.16` on focus/hover.
- **Shadows on light only.** On dark, lift comes from raising the navy step (800 → 700 → 600), not from drop shadows or glow.
- **Corner radius is low and architectural** — 4–10px on cards/panels, 6px on buttons, 2px on inputs. **No fully-rounded cards** — that reads consumer/AI-startup. Pill shape only on tags and progress dots.

### Cards

A card on dark = `bg: navy-700`, `border: 1px rgba(255,255,255,0.08)`, `radius: 10px`, `padding: 24-32px`. No shadow. Rule between header and body.
A card on light = `bg: white`, `border: 1px slate-100`, `radius: 10px`, `padding: 24-32px`, `shadow-md`.

### Layout rules

- **Compressed, not expansive.** Few words, high information density. A claim, a proof, a next sentence.
- 12-column grid at ≥1280; 8-column at 768; 4-column at 360.
- Slide deliverables are **1920×1080** (16:9). Body floor on slides is 18px.
- Always a **slide footer / web footer** with date, status (`CONFIDENTIAL` for sales material), and partnership context.
- Page numbers / slide numbers go top-right or bottom-right in **two-digit zero-padded form** (`01`, `02`, `12`).

### Use of transparency & blur

- **Frosted backgrounds: rarely.** When used, the surface beneath is the brand pattern; the frost is `backdrop-filter: blur(12px)` on a `rgba(10,18,36,0.7)` panel.
- **Don't use blur to hide ugly content.** It is a finish, not a fix.

---

## ICONOGRAPHY

**The system uses a custom set of solid + outlined PNG icons, white-on-transparent, ~1200×1200 master, designed to render on dark navy at 48–96px.** The full set (27 icons) is in `assets/icons/`. They cover:

- **Security:** `shield-check`, `lock`, `key`, `eye`, `audit`
- **Infrastructure:** `chip`, `stack`, `globe`, `secure-data`
- **Risk / state:** `alert`, `no-entry`, `badge` (certification)
- **Workload:** `code`, `bolt` (energy), `crown`, `wrench`
- **Action:** `trend-up`, `bars`, `lifebuoy`
- **People:** `user`, `contract`, `document`
- **Brand:** `arda-target` (the bracket-target mark), `sparkle` (AI motif), `citadel`

Usage rules:

- **White on dark navy, always.** Do not invert to navy-on-light without checking the optical balance — many of these icons were drawn for a single direction.
- **Sit inside a square hit area.** No icon-only buttons without a 24×24 minimum interactive zone.
- **Never animate as decoration.** An icon is a road sign, not a gif.
- **Never substitute emoji.** This is a regulator-facing brand.

**Substitution flag:** the set is curated for Arda's specific narrative (sovereignty, OT/IT, regulators) and deliberately small. If a screen needs an icon outside this set (e.g. a chart type, a workflow step), substitute from **Lucide** (CDN: `https://unpkg.com/lucide-static@latest/icons/`) at 1.5px stroke, white. Flag every such substitution in code comments so the brand team can decide whether to commission a native version.

The **ARDA lockup** (`assets/arda-logo-white.png` — target mark + wordmark) carries the brand at marketing-site and slide-cover scale. The **mark alone** (`assets/arda-mark-white.png`) is for favicons, share images, and any spot where the wordmark would be illegible. Use the lockup once per surface — header *or* footer, not both at full scale.

---

## Layered surface logic — when to go dark vs light

The brand has **two equal modes**, not one default. The choice is content-driven:

| Mode | When | Examples |
|---|---|---|
| **Dark (navy canvas)** | High-stakes, sales-led, sovereign / security narrative. The CIO at a risk committee. | Hero sections, full sales decks, executive comms, the homepage. |
| **Light (white canvas)** | Reference content where readability over time matters. | Documentation, long-form POV essays, regulator-evidence exports, internal admin UIs. |

Mixing modes within a single document is fine — sections alternate to introduce visual rhythm and signal "here is the worldview" (dark) vs "here is the detail" (light).

---

## Caveats & open items

- **v3 is a token-level rewrite, not a Figma rebuild.** Component CSS references `--arda-lime-*` and `--arda-alert-*` exclusively; the v2 `--arda-blue-*`, `--arda-flare-*`, `--arda-amber-*`, `--arda-worm-green-*`, `--arda-worm-red-*` are removed. Audit any internal Figma library before shipping production.
- **No product screenshots** of Arda Core / Arda Code / Arda Graph were provided. Slides 9 and 11 of the OTS deck describe the products but show no in-product screens. v3 imagery direction *depends* on the product UI being shippable — flag if it isn't.
- **Logo is rasterised, not vector.** Extracted from `uploads/1.pdf` as PNG. Request the original SVG/AI from brand before production launch.
- **Legacy v1 hex values are gone.** The v1 navy (`#121D33`), v1 blue (`#275DF6`) and v1 boundary pair (`#2FB37A` / `#E04545`) are no longer defined. Older raw decks in `raw_assets/` still use them — retokenise on re-import or do not import at all.
- **On-prem vs hyperscaler-only** is flagged in the ToV (§13) as an unresolved strategic question. The system follows the ToV's interim guidance: deployment language stays **flexible** ("private cloud, on-prem, or hybrid").
