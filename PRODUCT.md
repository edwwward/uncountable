# Product

## Register

product

## Users

**End users (the product).** R&D scientists, materials engineers, formulators, and lab leads at industrial chemistry, materials, and consumer-goods companies (Repsol, Carbon, SCHOTT, Sika, Beiersdorf, Mondelez tier). They live in lab notebooks, instrument data, and formulation history. Their day is half experiment-running, half data-wrangling — anything that moves work from "wrangling" to "deciding what to run next" is the win.

**Evaluators (the landing + style guide).** VPs of R&D and platform-evaluation committees comparing Uncountable against incumbents (legacy LIMS) and adjacent platforms (Benchling). They read landing pages skeptically: they have seen every "AI for science" pitch, and they want to see the actual product, real workflows, named customers, and technical depth — not slogans.

## Product Purpose

Uncountable unifies ELN, LIMS, PLM, and AI optimization into one cloud platform. R&D teams move from ideation to commercialization on a single source of truth instead of stitching together notebooks, sample tracking, lifecycle management, and modeling tools.

Success: experiments that took hours of analysis collapse to minutes; the next experiment to run (and the ones to skip) is suggested, not guessed; data captured at the bench flows untouched into QA/QC and commercialization.

## Brand Personality

**Expert · precise · confident.**

- **Voice**: scientific authority without jargon flexing. Declarative, evidence-led. Real numbers over adjectives ("4.8/5 G2", "10× faster analysis", "150+ R&D orgs" — not "industry-leading").
- **Tone**: calm. The platform handles regulated, high-stakes R&D — the interface should feel like something you'd trust with a multi-year materials program.
- **Emotional goal**: confidence. The buyer should leave a demo thinking "this is the kind of platform serious R&D runs on", not "this is exciting".

## Anti-references

Three explicit foils. If a design choice resembles any of these, rework it.

- **Generic "AI startup" decks.** Gradient-mesh hero backgrounds, neon-on-black, oversized hero numerals, "AI" as the headline. Reads as hype. Uncountable is an R&D data platform that uses AI; AI is not the identity.
- **Salesforce-style enterprise.** Endless tab strips, ribbon toolbars, cluttered chrome, dense gray UI with low-contrast labels. Reads as legacy. The product replaces this category, not joins it.
- **Consumer-warm SaaS.** Illustrated mascots, rounded blob graphics, pastel palettes, friendly emoji-laden copy. Reads as unserious. The audience is a VP signing a six-figure platform contract.

## Design Principles

Five strategic principles. They guide trade-offs when craft / shape / polish run.

1. **Show real product, not abstractions.** Evaluators trust what they can see working. Use real screens with real data, real chart axes, real workflow steps — not stylized illustrations or mystery-box previews. Where the actual UI doesn't exist yet, design a version that *could* be the actual UI.

2. **AI is a tool, not the headline.** Lead with the unified-data outcome and the R&D workflow. AI is one of the platform's capabilities, not its identity. "AI-driven optimization" is a feature label, not a hero promise.

3. **Calm authority, not louder marketing.** Restraint is the signal of trust to enterprise buyers. The cyan accent on midnight is recognizable enough that overusing it dilutes it (the existing style guide notes this for the eyebrow pill). Hold weight at 500 for headlines; let the words and the numbers carry the page.

4. **Precision in every detail.** Tokens, motion curves, type scale, contrast ratios — all measured, named, and documented. The interface should read as engineered, because R&D teams trust engineered things. Hand-wavy spacing, mystery font weights, or undocumented colors break the brand promise more than a wrong hue would.

5. **One platform, one visual truth.** The marketing surface, the product UI, and the style guide share the same tokens, the same Poppins weights, and the same motion grammar. Visual unification is the proof of the product promise — if the brand and the product look like two different companies, the "one source of truth" claim falls apart.

## Accessibility & Inclusion

- **WCAG 2.1 AA** as the floor for contrast and interactive states. The existing tokens already document AA/AAA ratings against intended surfaces — preserve that discipline when adding new colors.
- **Reduced motion**: `prefers-reduced-motion: reduce` is already honored by the entrance, reveal, and stagger animations. Any new motion must opt in to the same reset.
- **Status color is never the only signal.** Emerald / amber / red are used for status semantics in the product UI; pair with icon + label so color-blind users get the same information. Amber is dark-surface only (per the existing token comment) — don't move it to white surfaces.
- **Touch targets**: 44×44 minimum on interactive elements in the product UI. Marketing CTAs already exceed this; product chips and pills are tighter and need attention if reused on touch contexts.
