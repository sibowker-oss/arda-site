# SPEC — Design system token migration + platform graphics

**Repo:** `Arda-site`
**Live prototype:** https://sibowker-oss.github.io/arda-site/index.html
**Author:** Simon Bowker (via Cowork)
**Owner of execution:** Claude Code (in VS Code)
**Status:** Ready for build

---

## 1. Why we're doing this

The prototype currently uses an ad-hoc token set in `styles.css` (`--ink-*`, `--signal-*`, `--paper-*`). The team has now signed off on the **Arda Design System** as the single source of truth for colour, type, motion and tone. Two follow-ups need to land before the next stakeholder review:

1. The site needs to consume the design system's **semantic tokens** (`--arda-navy-*`, `--arda-blue-*`, `--fg-on-dark`, `--arda-ok / warn / risk`, etc.) rather than the prototype's local copies.
2. The Platform page's **Architecture diagram** ("What lives where") is currently HTML/CSS boxes. It needs to be redrawn as **inline SVG** using brand-only semantic colours — and supporting graphics need to be added so the page has visual weight matching its claims.

Voice is sober, sovereign, specific. One accent. No emoji as icons. Copy stays Australian English.

---

## 2. Source of truth

All design tokens, fonts, icons and rules live in:

```
/Users/simonbowker/Documents/Claude/Projects/Arda - New Sov AI Start Up/Templates/Design System/
├── README.md                    ← voice + visual foundations (read first)
├── SKILL.md                     ← working rules
├── colors_and_type.css          ← THE token file. Import this.
├── fonts/                       ← Pathway Extreme + Titillium Web
├── assets/
│   ├── arda-mark.png
│   ├── pattern-lattice.png
│   └── icons/                   ← 27 brand icons (PNG)
└── ui_kits/marketing_site/      ← reference HTML rebuild
```

**Companion docs (for tone + claims, do not modify):**
- `ARDA_Tone_of_Voice_v1_2026-05-01.docx`
- `ARDA_Messaging_Hierarchy_v2_2026-05-02.pdf`

---

## 3. Tasks

### Task A — Token migration

**Goal:** `styles.css` stops defining its own brand palette and instead inherits from the design system's `colors_and_type.css`. Layout, components and structure stay intact.

**Steps:**

1. Copy the design system into the repo so it ships with the site:
   ```
   /design-system/
   ├── colors_and_type.css
   ├── fonts/  (all .ttf files)
   └── assets/
       ├── arda-mark.png
       ├── pattern-lattice.png
       └── icons/  (PNG set)
   ```
2. In `index.html` and every other top-level HTML file (`platform.html`, `core.html`, `code.html`, `industry-*.html`, `about.html`, `contact.html`), add **before** the existing `styles.css` link:
   ```html
   <link rel="stylesheet" href="design-system/colors_and_type.css">
   ```
3. In `styles.css`, **delete the duplicate `:root` palette block** (the `--ink-*`, `--signal-*`, `--paper-*`, `--amber*` definitions).
4. In `styles.css`, replace the old token names with semantic tokens. Mapping table:

   | Old token (delete)     | New semantic token (use)                  | Notes |
   |------------------------|-------------------------------------------|-------|
   | `--ink-950`            | `--arda-navy-1000`                        | hero / full-bleed bg |
   | `--ink-900`            | `--arda-navy-900`                         | canvas |
   | `--ink-800`            | `--arda-navy-800`                         | surface |
   | `--ink-700`            | `--arda-navy-700`                         | raised |
   | `--ink-500`            | `--arda-navy-500`                         | hover/border |
   | `--ink-400`            | `--arda-slate-400`                        | muted text on dark |
   | `--ink-300`            | `--arda-slate-300`                        | body on dark |
   | `--ink-200`            | `--arda-slate-200`                        | hairline on light |
   | `--ink-100`            | `--arda-slate-100`                        | raised light |
   | `--paper`              | `--bg-canvas-light`                       | light canvas |
   | `--paper-2`            | `--bg-surface-light`                      | light surface |
   | `--paper-3`            | `--bg-raised-light`                       | light raised |
   | `--paper-line`         | `--rule-on-light`                         | light hairline |
   | `--signal`             | `--arda-blue-500`                         | **the** accent |
   | `--signal-2`           | `--arda-blue-600`                         | press |
   | `--signal-bright`      | `--arda-blue-400`                         | hover-on-dark |
   | `--amber`              | `--arda-warn`                             | only where it signals "partial / contractual"; otherwise drop |
   | `--text`               | `--fg-on-dark` (or `--fg-on-light`)       | based on `[data-theme]` |
   | `--text-2`             | `--fg-on-dark-muted` / `--fg-on-light-muted` | |
   | `--text-3`             | `--fg-on-dark-faint` / `--fg-on-light-faint` | |
   | `--accent`             | `--arda-blue-500`                         | resist double-aliasing — pick one name |
   | `--hairline`           | `--rule-on-dark`                          | dark; flip for light theme |

5. Re-derive the theme switch (`[data-theme="light"]`) using design-system tokens. The dark canvas is `--arda-navy-900`; the light canvas is `--bg-canvas-light` (#FFFFFF). Drop the cream `--paper` look — it's not in the design system. **Confirm with Simon before merging if you want to keep cream as a third theme.**
6. Replace the prototype's `font-family` declarations (Söhne / Inter Tight / GT America stack) with the design system's `--font-display` and `--font-body` tokens. Pathway Extreme (display) + Titillium Web (body) via the `@font-face` rules already in `colors_and_type.css`.

**Constraints:**
- No new colour values invented. Every colour must trace back to a token in `colors_and_type.css`.
- One accent per surface. The semantic trio (`--arda-ok`, `--arda-warn`, `--arda-risk`) is reserved for *signals* — boundary status, control state, deployment posture — not decoration.
- Don't strip the `[data-density]` system; the design system doesn't define density and ours is fine.

**Acceptance:**
- `grep -rE "(#[0-9A-Fa-f]{3,8})|(--ink-|--signal-|--paper-|--amber)" *.css *.jsx *.html` returns empty (or only inside `colors_and_type.css`).
- The site renders unchanged in structure but recoloured against the brand. Diff screenshots before/after for the team.

---

### Task B — Architecture diagram redraw (inline SVG)

**Goal:** The "What lives where" diagram in `platform.jsx` becomes a proper inline SVG diagram that reads like an architectural drawing — not a stack of CSS boxes.

**Current location:** `platform.jsx` → `function Architecture()` (already in the file).

**What to render (semantic intent):**

The diagram visualises the **customer trust boundary** containing:
- Arda Control Plane (Identity broker · Policy engine · Audit ledger) — emphasised
- Data Plane (Vector index · Document gateway · Tool runtime)
- Sources of truth (Confluence · SharePoint · Git · Policy library · Operational systems)
- Existing stack (SIEM · IdP · KMS · Secrets · Observability)

…connected via a single labelled edge ("PRIVATE LINK · MUTUAL TLS · CONTRACT") to:
- **Models of record** zone — Open-weights on-prem / Hyperscaler private endpoint / Fronted SaaS

**Design rules for the SVG:**

- **viewBox:** `0 0 1280 720` (or similar 16:9). Responsive via `width="100%"`.
- **Boundary box** (customer trust boundary): solid 1px stroke at `var(--arda-blue-500)` with subtle fill `rgba(39,93,246,0.04)`. Label sits in top-left in eyebrow style.
- **Models of record zone:** dashed 1px stroke at `var(--arda-warn)` (this is the *contractual protection* zone, not "in your boundary"). Same labelling pattern.
- **Edge between zones:** a single horizontal line broken by a labelled chip ("PRIVATE LINK · MUTUAL TLS · CONTRACT") in mono caps, `--arda-slate-300`.
- **Component boxes:** rect with `r="4"`, 1px stroke `var(--rule-on-dark-strong)`, fill `var(--arda-navy-700)`. The Arda Control Plane box uses fill `rgba(39,93,246,0.08)` and a 1.5px stroke at `--arda-blue-500` to read as the emphasised element. No drop shadow.
- **Type:** all SVG text uses `font-family="var(--font-body)"`. Headings inside boxes 14–16px semi-bold. Eyebrows 11px uppercase tracked `0.16em`.
- **Iconography inside boxes:** small inline SVG marks at 16px, `1.5px` stroke, brand blue. Reference (in order): `key.svg` (Identity broker), `shield-check.svg` (Policy engine), `audit.svg` / `document.svg` (Audit ledger), `stack.svg` (Vector index), `globe.svg` (Document gateway), `wrench.svg` (Tool runtime), `lock.svg` (KMS/Secrets), `eye.svg` (Observability), `chip.svg` (Models of record). The `assets/icons/` folder has these as PNGs — re-create them as inline SVG so they take stroke colour from CSS. Use Lucide as the geometry reference if drawing fresh; flag any substitution in a code comment per design-system rules.
- **No emoji. No bouncy motion. No drop shadows on dark.**
- **Accessibility:** `<title>` and `<desc>` on the root SVG; `role="img"`; aria-label "Arda reference architecture: customer trust boundary and models of record."

**Layout sketch (conceptual):**

```
┌────────────────────────────────────────────────┐
│ CUSTOMER TRUST BOUNDARY        VPC · VNet · …  │
│                                                │
│  ┌──────────────────────┐  ┌─────────────────┐ │
│  │ ★ ARDA CONTROL PLANE │  │ DATA PLANE       │ │
│  │   IdB · Policy · Aud │  │ Idx · Doc · Tool │ │
│  └──────────────────────┘  └─────────────────┘ │
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │ SOURCES OF TRUTH  Confluence · SharePoint │ │
│  │                   Git · Policy · Ops      │ │
│  └──────────────────────────────────────────┘  │
│                                                │
│  ┌──────────────────────────────────────────┐  │
│  │ EXISTING STACK   SIEM · IdP · KMS · Secs │  │
│  └──────────────────────────────────────────┘  │
└────────────────────────────────────────────────┘
                        │
        ── PRIVATE LINK · MUTUAL TLS · CONTRACT ──
                        │
┌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┐
┊ MODELS OF RECORD          Customer's contract  ┊
┊  ( Open-weights on-prem ) ( Hyperscaler PE )   ┊
┊  ( Fronted SaaS under DPA )                    ┊
└╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┘
```

**Implementation note:** keep the diagram as a single inline SVG component (e.g. `<ArchitectureDiagram />`) inside `platform.jsx` so it stays editable. Don't externalise to a static asset.

---

### Task C — Add supporting graphics to the Platform page

**Goal:** the Platform page currently has one diagram (Architecture) and one "receipt" tile. Add **two more inline SVG graphics** to give the four-pillars section visual scaffolding and reinforce the Own/Operate/Govern narrative.

**C1. Boundary status graphic** — sits at the top of the `Pillars` section.

A horizontal "boundary diagram": a single rectangle (the customer boundary) with three states pinned to it:
- **In your boundary** — chip filled `var(--arda-ok)` at low opacity, label "Prompts · Retrievals · Embeddings · Audit"
- **Contractual protection** — chip outlined `var(--arda-warn)`, label "Model traffic via private link"
- **Leaves your boundary** — chip outlined `var(--arda-risk)`, label "Nothing. By design."

This graphic is the *visual* version of the "Own / Operate / Govern" claim. It should fit in ~180px tall, span the section width, and read at a glance.

**C2. Per-pillar marks** — a small (48–64px) inline SVG mark drawn for each of the four pillars, sitting next to the big `01 / 02 / 03 / 04` numerals:
- **01 IDENTITY** — key + person silhouette (use `key.svg` + `user.svg` cues from `assets/icons/`)
- **02 POLICY** — shield + document corner-fold
- **03 CUSTODY** — citadel / vault outline (`citadel.svg` reference)
- **04 AUDIT** — stacked horizontal lines with check-mark tick (`audit.svg` / `shield-check.svg`)

All four marks use a single 1.5px stroke, no fill, accent in `--arda-blue-500`, secondary detail in `--arda-slate-300`. Same visual weight across all four — they need to feel like a set.

**Don't:**
- Don't add a fifth pillar.
- Don't introduce a second saturated colour (no green callouts unless they're tied to `--arda-ok` boundary status).
- Don't animate on scroll. Quiet fade-in on first paint at most.

---

## 4. Acceptance criteria

- [ ] All HTML pages link `design-system/colors_and_type.css` before `styles.css`.
- [ ] `styles.css` no longer defines its own brand palette; it consumes design-system tokens only.
- [ ] Token grep (see Task A acceptance) returns zero hits outside `colors_and_type.css`.
- [ ] `platform.jsx` Architecture diagram is inline SVG, semantic, accessible (`role="img"`, `<title>`, `<desc>`).
- [ ] Two new graphics added to platform page: boundary status + four pillar marks.
- [ ] Pages render correctly in dark and light theme. Light theme drops the cream paper look (or, if Simon approves cream, that's a separate `[data-theme="cream"]`).
- [ ] No emoji used as iconography anywhere in the build.
- [ ] No new hex values introduced — `git diff` should show colours coming from tokens only.
- [ ] Lighthouse accessibility score ≥ 95 on the Platform page.
- [ ] Screenshots posted in PR description: home, platform (full scroll), about, industry pages — before / after.

## 5. Branch + PR guidance

- Branch: `feat/design-system-tokens-and-platform-graphics`
- Two commits minimum:
  1. `chore(tokens): migrate styles.css to arda design system tokens`
  2. `feat(platform): inline-svg architecture diagram + boundary/pillar graphics`
- PR title: `Adopt Arda design system tokens; redraw platform architecture as SVG`
- Tag Simon for review before merge to `main`.

## 6. Out of scope (don't do)

- Don't rewrite copy. The Tone of Voice doc and Messaging Hierarchy v2 are already reflected in the current text.
- Don't change page structure or routing.
- Don't add CMS, build pipeline, or framework changes. Static HTML + JSX-via-Babel is intentional for this prototype.
- Don't touch `Website v2/New Arda Website/` — that's the source set Cowork manages; Claude Code works in `Arda-site/` only.

---

## 7. Definition of done

The prototype, served at `https://sibowker-oss.github.io/arda-site/index.html`, looks visibly more **Arda** — sovereign navy canvas, single ARDA-blue accent, sober — and the Platform page reads as a proper architectural document with three coherent SVG diagrams (architecture, boundary status, pillar marks) drawn from the same vocabulary.
