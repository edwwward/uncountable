---
name: Uncountable
description: AI platform for end-to-end product development — unifies ELN, LIMS, PLM, and AI optimization into one cloud platform for industrial R&D
colors:
  midnight: "#020D4C"
  royal-blue: "#01318F"
  mist: "#EAF2F9"
  fog: "#DFE3EA"
  azure: "#046CDE"
  sky-cyan: "#00C7FE"
  emerald: "#018744"
  amber: "#FFAF0F"
  slate: "#3C4554"
  tint-sky: "#80E3FE"
  tint-mint: "#80D4AA"
  tint-ice: "#BFF1FF"
  tint-seafoam: "#BFE9D4"
  status-red: "#E53935"
  status-red-bg: "#FDECEA"
  status-green-bg: "#E8F5E9"
  canvas: "#F2F4F7"
  divider: "#E4E7EC"
  text: "#101828"
  text-muted: "#667085"
typography:
  display:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "60px"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "52px"
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: "-0.015em"
  headline-sm:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "44px"
    fontWeight: 500
    lineHeight: 1.10
    letterSpacing: "-0.01em"
  title-lg:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.005em"
  body-lg:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  body:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  label:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0"
  eyebrow:
    fontFamily: "Poppins, Inter, system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: ".08em"
rounded:
  sm: "4px"
  md: "8px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  base: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
  "4xl": "96px"
  "5xl": "120px"
components:
  button-primary:
    backgroundColor: "{colors.azure}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "10px 18px"
  button-primary-hero:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.slate}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.azure}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "9px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.slate}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "10px 12px"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "14px 22px"
  card-feature:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.slate}"
    rounded: "{rounded.md}"
    padding: "28px"
  card-resource:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.slate}"
    rounded: "{rounded.md}"
    padding: "0"
  chip-tag:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.azure}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
  chip-status-success:
    backgroundColor: "{colors.status-green-bg}"
    textColor: "{colors.emerald}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "3px 9px"
  chip-status-error:
    backgroundColor: "{colors.status-red-bg}"
    textColor: "{colors.status-red}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.sm}"
    padding: "3px 9px"
  eyebrow-pill:
    backgroundColor: "{colors.midnight}"
    textColor: "#5EE0FF"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
---

# Design System: Uncountable

## 1. Overview

**Creative North Star: "The Lab Notebook"**

The interface should feel the way a calibrated laboratory feels: grid-paper foundation, declarative numbers, evidence over adjective, instruments that whisper readings instead of performing them. Every token is named and contrast-rated. Every motion uses a single ease-out curve. Every color carries a documented role. The system reads as engineered because R&D teams trust engineered things — and the platform is asking them to trust it with multi-year materials programs.

The brand surface (landing, style guide) and the product surface (production console, QC visualization) share the *same* tokens, the same Poppins weights, and the same motion grammar. This is doctrine, not coincidence: the product promise is "one source of truth" for R&D data, and the visual system enforces that promise by refusing to look like two different companies. If the marketing site and the product app diverge visually, the strategic claim collapses.

The system explicitly rejects three foils, all carried over from PRODUCT.md: the gradient-mesh "AI startup" deck, the dense Salesforce-style enterprise UI, and the consumer-warm pastel SaaS. The audience is a VP of R&D signing a six-figure platform contract. The interface should look like the kind of platform serious R&D runs on — not exciting, not friendly, but trustworthy.

**Key Characteristics:**

- **Calm authority**: restraint as the signal of trust. Cyan-on-midnight is rationed; opacity-only hover; no color shifts as feedback.
- **Engineered transparency**: tokens, contrast ratios, motion curves, and dark-surface-only restrictions are documented in the source itself.
- **One visual truth**: marketing, product, and style guide are mirrors of the same primitive set.
- **Real product over abstraction**: hero previews show actual UI screens with real data, not mystery-box illustrations.
- **AI as feature, not headline**: the platform unifies R&D data; AI is one capability inside that, not the brand identity.

## 2. Colors

A confident industrial-blue palette anchored on Royal Blue and Midnight, with one rationed cyan accent that signals "platform" the moment it appears. Every named color has a documented role and a documented surface — colors do not move between surfaces casually.

### Primary

- **Royal Blue** (`#01318F`): brand-identifier blue. Logo color, section headline color on light surfaces, eyebrow labels, accent text. AAA contrast on white. This is the color the company *is* on light surfaces.
- **Midnight** (`#020D4C`): the canonical dark surface. Hero backgrounds, footer, dark-mode product chrome, gradient endpoints in resource-card headers. Not just "dark blue" — Midnight is the palette's home for inverted compositions.
- **White** (`#FFFFFF`): primary canvas for marketing and the platform shell. Pure white is honest; the brand is not afraid of empty space.

### Secondary

- **Azure** (`#046CDE`): the primary CTA color on light surfaces. Demo requests, navbar buttons, in-product selected states. AA on white. The single color across the system that means "go".
- **Sky Cyan** (`#00C7FE`): the signature accent on dark surfaces. Hero eyebrow, atmospheric radial glow on midnight, "development." in the hero headline. AAA on midnight. Rare and precious — see the Eyebrow Rule.

### Tertiary

- **Emerald** (`#018744`): success/positive status. Within-spec batches, completed steps. AA on white.
- **Amber** (`#FFAF0F`): chart thresholds, control-band markers, dark-surface-only badges. **Never on white surfaces** — see the Amber Rule.
- **Mist** (`#EAF2F9`) and **Fog** (`#DFE3EA`): cool/neutral light fills. Quote-block backgrounds, chip backgrounds, soft section banding.
- **Tint Sky** (`#80E3FE`), **Tint Mint** (`#80D4AA`), **Tint Ice** (`#BFF1FF`), **Tint Seafoam** (`#BFE9D4`): decorative tints for gradients and atmospheric backgrounds. Not for type, not for borders.

### Neutral

- **Slate** (`#3C4554`): default body-text color on white. AAA on white. The text the user actually reads.
- **Canvas** (`#F2F4F7`): the in-product workspace background. Subtle cool gray that lets white cards float without shadow.
- **Divider** (`#E4E7EC`): hairline dividers, table borders, low-contrast section breaks.
- **Text** (`#101828`): the densest body color in the product UI; reserved for primary in-app type.
- **Text Muted** (`#667085`): secondary in-app labels, metadata, axis labels.

### Status

- **Status Red** (`#E53935`) on **Status Red BG** (`#FDECEA`): out-of-spec, error, overdue. Always paired with an icon and a label — see the Status Pairing Rule.
- **Emerald** on **Status Green BG** (`#E8F5E9`): in-spec, success, complete. Same pairing rule.

### Named Rules

**The Eyebrow Rule.** The cyan-on-midnight eyebrow pill is reserved for the hero. It appears at the top of the hero copy, once. Do not place it on cards, secondary sections, in-product surfaces, or anywhere else. The cyan-on-midnight combination is recognizable enough that overusing it dilutes its impact; rationing is what makes it signature.

**The Amber Rule.** Amber (`#FFAF0F`) is dark-surface only. Saturated yellows cannot reach AA contrast on white without losing their character, so Amber lives on midnight surfaces, in chart annotations, and on dark-mode badges. For warnings on white surfaces, use Status Red BG with Status Red text. Never put Amber type on white.

**The Calm Hover Rule.** Hover states change opacity, never color. The primary CTA dims to `opacity: 0.92` on hover; the ghost CTA tints with `rgba(255,255,255,0.08)` overlay. Color shifts on hover read as marketing; opacity reads as feedback.

**The Status Pairing Rule.** Status color is never the only signal. Emerald, Amber, and Status Red always appear with an icon and a label so color-blind users get the same information. Same applies to chart series — pair color with shape or axis label.

## 3. Typography

**Display Font:** Poppins (300–800 plus italic 400)
**Body Font:** Poppins
**Label / Small Caps Font:** Poppins

**Character:** Poppins is a single geometric humanist sans, used across the entire system in five weights. The pairing strategy *is* "no pairing" — one typeface, multiple weights and sizes, doing the work of a serif/sans pairing through scale and weight contrast alone. This is itself a discipline statement: the brand does not need a second face to feel sophisticated.

### Hierarchy

- **Display** (500, 60px, 1.05 line-height, -0.015em letter-spacing): hero H1 only. One per page.
- **Headline** (500, 52px, 1.10, -0.015em): primary section heading on light surfaces. Tight tracking, restrained weight; the words carry the page.
- **Headline Small** (500, 44px, 1.10, -0.01em): secondary section heading and CTA-band heading. Use when a section follows another headline.
- **Title Large** (500, 34px, 1.30, -0.01em): pull quotes and large declarative statements (e.g., the Carbon customer quote). Reserved for emphasis, not for normal headings.
- **Title** (500, 20px, 1.25, -0.005em): card titles, in-app page titles. The default subhead.
- **Body Large** (400, 18px, 1.55): hero subhead, intro paragraphs, lead text. Cap at 520px width on hero (~30ch); for editorial body cap at 65–75ch.
- **Body** (400, 15px, 1.55): default body copy, card descriptions, in-app paragraph text. Cap at 65–75ch.
- **Label** (500, 13px, 1.5): inline links, captions, "View all →" affordances.
- **Eyebrow** (500, 12px, 1.4, .08em letter-spacing, **uppercase**): section labels, category eyebrows, "TRUSTED BY 150+ R&D ORGANIZATIONS" pre-headers. Always Royal Blue on white surfaces; Sky Cyan on midnight.

### Named Rules

**The 500-Is-Bold Rule.** Marketing headlines use weight 500, not 600 or 700. The brand's "calm authority" register does not call for typographic shouting; weight 500 with tight negative tracking gives presence without aggression. Bumping to 600+ for hero copy reads as marketing-heavy; stay at 500 unless dense in-product UI requires more contrast (where 600 is fine for chip labels and table headers).

**The Single-Face Rule.** Resist the urge to introduce a serif for "editorial warmth" or a mono for "technical credibility". The system commits to Poppins; warmth and credibility come from copy and contrast, not face changes. Material Symbols Rounded is the one icon family — that is the system's only typographic compromise.

## 4. Elevation

Layered, but layered *quietly*. Elements are flat at rest; shadows appear only as a response to state — usually hover, occasionally for ambient lift on hero callouts. There is no global shadow on cards; their hairline `1px` border is enough at rest. All shadows use a deep midnight tint instead of pure black, so the system reads warm against the brand palette and never produces the gray-on-gray "Bootstrap shadow" look.

### Shadow Vocabulary

- **sm** (`box-shadow: 0 4px 8px -2px rgba(2,13,76,0.10)`): subtle hover on dense in-app elements (chips, secondary cards).
- **md** (`box-shadow: 0 10px 24px -10px rgba(2,13,76,0.18)`): feature card hover. The default "lift" shadow.
- **lg** (`box-shadow: 0 14px 28px -12px rgba(2,13,76,0.22)`): resource card hover, paired with a `translateY(-2px)` shift.
- **xl** (`box-shadow: 0 32px 64px -16px rgba(2,13,76,0.55)`): hero preview ambient glow, floating callouts. The only shadow that is *always on* — used to lift app-screen mockups off midnight.

### Named Rules

**The Flat-At-Rest Rule.** Cards, chips, and inputs do not carry a shadow at rest. They sit on the canvas with a hairline border (`1px solid rgba(60,69,84,0.10)`) and lift on hover. Default shadows on every card produce visual noise; reserve shadow for state response.

**The Midnight-Tinted Rule.** Every shadow uses `rgba(2,13,76,...)` — never `rgba(0,0,0,...)`. Pure black shadows read as gray on the brand's blue palette and look pre-rebrand. The midnight tint is what makes the elevation feel like it belongs to *this* system.

## 5. Components

### Buttons

- **Shape**: 4px radius (`{rounded.sm}`). Consistent across every button variant. Larger radii (8px+) belong to cards, not buttons.
- **Type**: weight 500, size 14–15px, letter-spacing 0. Poppins body role.
- **Primary on light**: Azure background, white text, padding `10px 18px` (default) or `14px 22px` (hero). Trailing arrow icon (`arrow_forward`, 16–18px) is a recurring affordance — use it when the button leads somewhere.
- **Primary on dark (hero CTA)**: white background, Slate text, padding `14px 22px`. The dark-surface inversion of the primary CTA. Same trailing arrow.
- **Secondary on light**: transparent background, Azure border (1px), Azure text, padding `9px 18px` (1px less vertical to compensate for border).
- **Ghost on light**: transparent background, Slate text, no border, padding `10px 12px`. For tertiary affordances ("Learn more", "View all").
- **Ghost on dark**: transparent background, white text, `1px solid rgba(255,255,255,0.55)` border, padding `14px 22px`. Hero secondary action ("Watch 2-min tour").
- **Hover**: opacity `0.92` for filled CTAs; subtle background tint (`rgba(255,255,255,0.08)`) for dark ghosts. **Never a color shift.**
- **Active**: `transform: translateY(1px)` for tactile press feedback on primary CTAs.

### Cards & Surfaces

- **Corner**: 8px radius (`{rounded.md}`).
- **Background**: white. Cards sit on Mist, Fog, or Canvas — never on white-on-white without a hairline.
- **Border**: `1px solid rgba(60,69,84,0.10)` at rest. Hairline, not heavy.
- **Shadow**: none at rest; `sm` or `md` on hover (`lg` for resource cards, paired with translateY).
- **Padding**: 28px (feature cards), 24px (resource card content area), 20px (compact cards in product UI).
- **Hover**: lift via translate (-2px) and shadow upgrade. Border deepens to `rgba(60,69,84,0.20)`.
- **Resource cards**: signature variant with a 180px-tall header using `linear-gradient(135deg, midnight, royal-blue)` plus a radial cyan accent at 20%/30% — the only place gradients are sanctioned in marketing.

### Chips & Badges

- **Shape**: pill-shaped (999px) for category eyebrows; 3–4px corners for tag chips and status badges. The shape distinction is meaningful — pills are decorative, chips are functional.
- **Tag chip** (filter, removable): Mist background, Azure text, `4px 10px` padding, 12px text, weight 500. Optional close icon trails the label.
- **Status success**: Status Green BG background, Emerald text, `3px 9px` padding, 11px uppercase weight 600 with `.04em` letter-spacing. Always with a leading icon.
- **Status error**: Status Red BG background, Status Red text. Same shape and rules.

### Inputs

- **Shape**: 4px radius (`{rounded.sm}`), matching buttons.
- **Background**: white. Border `1px solid {colors.divider}`.
- **Padding**: `8px 12px` for in-product fields; larger pads for marketing forms if introduced.
- **Focus**: border shifts to Azure with no outer glow. Restrained, not animated.
- **Disabled**: background shifts to Canvas; text color drops to Text Muted.

### Navigation

- **Marketing nav**: sticky, `rgba(255,255,255,0.92)` background, `backdrop-filter: blur(10px)`, `1px solid rgba(60,69,84,0.08)` bottom border. The single sanctioned use of glassmorphism in the system, justified by the need to stay legible over both white and midnight as you scroll.
- **Type**: Slate, weight 500, 14px. Hover transitions to `opacity: 0.65` over 120ms.
- **In-product sidebar**: white background, hairline right border, icon-led nav items. Active item uses Azure on Mist, with a 2px leading bar in Royal Blue. The leading bar is permitted *only* for active-state nav items — see the Side-Stripe Rule in Don'ts.

### Eyebrow Pill (signature component)

The single most distinctive component in the system. It appears once per landing page, at the top of the hero copy, and signals "this is a platform" with a one-word brand cue. Used anywhere else, it dilutes.

- **Background**: midnight, with a `rgba(94,224,255,0.14)` cyan-tinted overlay (the cyan ghosts through to feel atmospheric, not solid).
- **Border**: `1px solid rgba(94,224,255,0.45)` — the boundary that makes it crisp on midnight.
- **Text**: Sky Cyan (rendered as `#5EE0FF`, slightly lifted from the canonical `#00C7FE` for legibility on the tinted bg).
- **Type**: 13px, weight 500. Includes a leading filled `bolt` icon at 14px.
- **Shape**: pill-radius (999px), padding `6px 12px`.

### Iconography

- **Family**: Material Symbols Rounded.
- **Configuration**: `font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24` by default. Bump weight to 500 for emphasis or set `FILL` to 1 for active/selected states. Optical size matches the icon's render size.
- **Color**: Royal Blue on white (icon-in-feature-card lockup), Slate as default body-icon, white on midnight, Azure for "go" affordances inside in-product surfaces.

## 6. Do's and Don'ts

### Do:

- **Do** use Poppins 500 for all headings — `display`, `headline`, `headline-sm`, `title-lg`, `title`. Restraint at this weight is the brand register.
- **Do** keep the cyan eyebrow pill to *one instance per page*, at the top of the hero. The Eyebrow Rule is what makes cyan precious.
- **Do** tint shadows with `rgba(2,13,76,...)`. Never use `rgba(0,0,0,...)` for shadows.
- **Do** pair status color with an icon and a label. Color is never the only signal.
- **Do** show real product UI in marketing previews — actual screens with real data, real chart axes, real workflow steps. Mystery-box illustrations break PRODUCT.md's "show real product, not abstractions" principle.
- **Do** honor `prefers-reduced-motion: reduce`. Disable entrance, reveal, and stagger animations; render content at full opacity instantly.
- **Do** use the single ease-out curve `cubic-bezier(0.22, 0.61, 0.36, 1)` for every transition. One curve, system-wide.
- **Do** put Amber on dark surfaces only. Use Status Red BG with Status Red text for warnings on white.
- **Do** set the in-product canvas to `#F2F4F7` (Canvas). White cards float on Canvas without shadow; that's the desired effect.
- **Do** use weight 500 for nav links and CTA labels. Weight 600 is reserved for in-product chip labels and dense table headers.

### Don't:

- **Don't** use the cyan-on-midnight eyebrow pill anywhere except the hero. Reusing it on secondary sections, cards, or in-product chrome dilutes the brand cue.
- **Don't** ship gradient-mesh hero backgrounds, neon-on-black palettes, or oversized hero numerals. PRODUCT.md flags this as the "AI startup deck" anti-reference — Uncountable is an R&D data platform that uses AI, not an AI brand.
- **Don't** ship endless tab strips, ribbon toolbars, or dense gray UI with low-contrast labels. PRODUCT.md flags this as the Salesforce-style enterprise anti-reference. The product replaces this category, not joins it.
- **Don't** ship illustrated mascots, rounded blob graphics, pastel palettes, or emoji-laden copy. PRODUCT.md flags this as the consumer-warm SaaS anti-reference. The audience is a VP signing a six-figure platform contract.
- **Don't** use side-stripe borders (`border-left: 4px solid X`) as decorative accents on cards, callouts, or alerts. The 2px Royal Blue leading bar on active sidebar nav items is the *only* sanctioned exception, and it must be paired with a background tint.
- **Don't** use `background-clip: text` with gradients to make headlines colorful. Solid colors only — Royal Blue, Midnight, white, Sky Cyan as accents.
- **Don't** introduce a second typeface. Poppins covers display through label. If you reach for a serif for "editorial warmth" or a mono for "technical credibility", PRODUCT.md's Single-Face Rule says no.
- **Don't** use `#000` or `#FFF` as raw shadows. Tint with Midnight (`rgba(2,13,76,...)`) so shadows belong to the brand palette.
- **Don't** animate `box-shadow` and layout properties together — animate `transform` and `opacity` for performance, layer shadow as a separate transition.
- **Don't** add color shifts on hover. Hover dims via opacity (`0.92` for filled, `rgba(255,255,255,0.08)` overlay for dark ghosts). Color hover reads as marketing; opacity reads as feedback.
- **Don't** ship without the `prefers-reduced-motion` reset. Every entrance, reveal, and stagger animation must opt into the reduced-motion media query.
- **Don't** put Amber on white surfaces. Saturated yellows can't reach AA on white. Status warnings on white use Status Red BG with Status Red text.
- **Don't** wrap every section in a max-width container without intent. The marketing grid uses `1312px` max-width with `32px` side padding; only deviate when a hero bleed or full-width band is the design.
- **Don't** use bouncy or springy easing. The system commits to a single ease-out curve. Bounces and elastic curves break the "calm authority" register and read as consumer.
