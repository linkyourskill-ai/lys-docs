# LinkYourSkill Design System

> The brand and UI foundations for **LinkYourSkill.ai** — the AI-to-Human task-execution platform. When an AI agent hits the limits of what it can do digitally, it delegates physical, real-world tasks to verified human **Skillanbieter** (service providers) through LinkYourSkill.

This project is a self-contained design system: design tokens, fonts, reusable React components, foundation specimen cards, and full-screen UI-kit recreations of the real product — all driven from a single `styles.css`.

---

## Product context

LinkYourSkill is a **task-orchestration marketplace for AI agents**. An AI agent (via REST or the Model Context Protocol) searches human providers, prepares an order, a human **Agentowner** approves it over WhatsApp/Signal/Telegram/Threema, and a **Skillanbieter** executes it on-site. The platform documents, rates, and bills the work. It is **German-first** and **EU/DSGVO-compliant**.

**Four roles:**
- **Agentowner** — operates AI agents, approves orders via messenger.
- **Skillanbieter** — the human provider who executes real-world tasks.
- **Customer (Auftraggeber)** — commissions work directly and pays (Stripe/PayPal).
- **AI Agent** — searches providers and prepares orders through 18 MCP tools / a REST API.

**Two product surfaces are represented here:**
1. **Marketing website** — the public landing experience (hero, how-it-works, audience cards, trust, docs). → `ui_kits/website/`
2. **Platform app** — the authenticated dashboards (agents, orders, invoices, settings). → `ui_kits/platform/`

### Sources

This system was reverse-engineered from the product source. Store these for deeper work — the reader may have access:

- **GitHub:** `https://github.com/linkyourskill-ai/linkyourskill.ai` (private). Explore further to build higher-fidelity designs — key files: `src/app/globals.css` (the full token + class system), `src/components/` (marketing + platform components), `messages/en.json` & `messages/de.json` (all copy), `public/images/` (logo, skill imagery).
- Stack: Next.js 16 · React 19 · Tailwind CSS 4 · next-intl (de/en) · Fastify API · MCP server.

---

## Content fundamentals

**Voice:** Confident, technical, benefit-led. The product speaks to developers first, then providers, then customers — and the copy hierarchy reflects that ("Developer? Get Token →" is the dominant CTA).

**Person & address:** Direct second person ("**your** agent", "**you** decide whether to accept"). The platform refers to itself in third person ("LinkYourSkill bridges the gap…"). No first-person "we" except in contact/legal contexts.

**Casing:** Title Case for nav items, buttons and short labels ("Offer Skills", "For Customers", "Find a Professional"). Sentence case for body copy and descriptions. Headlines are sentence case with a single gradient-highlighted phrase ("When AI needs the **real world**").

**Tone specifics:**
- Concrete over abstract: "inspections, repairs, on-site checks" — not "various services". Real names ("Hans Is Found"), real cities (Hamburg, Munich, Berlin), real numbers ("€95 budget", "23 orders", "60 req/min").
- Time-to-value is a recurring hook: "MCP integration in 5 minutes", "Hello World in 5 Minutes".
- Compliance is a feature, stated plainly: "GDPR, DSA, P2B, DAC7, BFSG — fully compliant."
- Bilingual reality: domain nouns stay German (**Skillanbieter**, **Agentowner**, **Auftraggeber**, "Vor-Ort-Check") even in English copy. Honor this — don't "translate away" the German role names.

**Punctuation & symbols:** Arrows (`→`) terminate almost every CTA and secondary link. The middot (`·`) separates meta items ("Verified profiles · EU data protection · Streamable HTTP"). En-dashes set off appositives in headlines ("Security & Trust – built in Germany").

**Emoji:** Used deliberately, not decoratively — as category/section markers in marketing (🤖 📱 🔍 📸 ✅ for the 5-step flow; 🛡️ ⚡ 📋 🔐 on trust cards; 🇩🇪 🔒 ⚡ on trust pills). Never inside running body text. The green ✓ check pill is a recurring motif for benefit lists and confirmations.

**Example copy:**
> Headline — "When AI needs the **real world**."
> Lead — "The physical API for AI agents. Verified humans do what AI can't — inspections, repairs, on-site checks. MCP integration in 5 minutes."
> Card title — "For Developers & AI Agents" / "For Skill Providers" / "For Customers"
> Meta — "🔒 Verified profiles · EU data protection · Streamable HTTP · Bearer Token Auth"

---

## Visual foundations

**Overall vibe — "Dark Cosmic".** A near-black, deep-space canvas (`#06060f` → `#0a0a18`) lit by blurred purple nebula glows, with translucent glass panels floating over it and a single violet gradient doing all the accent work. Premium, technical, slightly futuristic — the aesthetic of an AI-infrastructure product, not a consumer marketplace. A soft **light theme** (`html.light`, lavender `#f5f0ff`) exists as an opt-in inverse, but **dark is the default and the brand's home turf.**

**Color.** One brand hue: **violet/purple.** The ramp runs `--accent-light #C084FC` → `--accent-1 #A855F7` → `--accent-2 #7C3AED` → `--accent-deep #6D28D9`. Almost every accent is a **135° gradient** (`--gradient-brand`) rather than a flat fill. Text is pure white on dark, with a single AA-safe muted gray (`#B4BCC8`). Semantic colors are conventional (success green `#22C55E`, warning amber, danger red) and used sparingly — mostly the green ✓ pill and status badges.

**Backgrounds.** Never flat. The page sits on `--bg-deep`, with 2–3 large (`min(800px, 90vw)`) blurred radial **cosmic-glow** blobs fixed behind content (`filter: blur(120px)`), plus an animated canvas in the real product. Marketing photography (skill imagery in `assets/skills/`) is naturalistic, warm-neutral, documentary — real people doing real tasks (photographing shelves, filming streets). No stock-gloss, no duotone.

**Typography.** A single typeface: **Inter** (variable). Headings are extra-bold (800) for the hero, bold (700) for sections, with tight negative tracking (`-0.03em` hero, `-0.02em` H2). Body is 15px at `1.7` line-height in muted gray. Fluid `clamp()` sizing throughout. One signature move: the **gradient-text** treatment, reserved for the wordmark and a single highlighted phrase per headline — never whole sentences.

**Cards.** The **glass card** is the workhorse: `rgba(255,255,255,0.03)` fill, `1px` hairline white border at 7% opacity, `20px` radius, `40px` padding, `backdrop-filter: blur(16px)`. Hover deepens the shadow rather than moving the card. A **highlight** variant tints the border and background purple for the lead option. In light mode the blur is dropped for a soft drop shadow.

**Borders & radii.** Hairline borders (white at 5–12% on dark; purple-tinted in light). Radius scale: `10px` chips/code → `12px` buttons/badges → `16px` compact cards → `20px` glass cards → `24px` modals → full pills for badges and the green check. Nothing is sharp-cornered.

**Shadows & glow.** Two systems coexist: ordinary drop shadow (`--shadow-card`, deep and soft) **and** purple glow (`--shadow-glow` on primary buttons, intensifying to `--shadow-glow-hover`). Glow is the brand's light source — buttons and highlighted cards emit it.

**Buttons.** Primary = gradient fill + glow + 12px radius + 600 weight; lifts `translateY(-1px)` on hover, settles on active. Secondary = transparent with a hairline border. Link = muted text that brightens to white on hover. Three sizes (small / default / large).

**Motion.** Restrained and quick. Page-enter fades/slides (`0.35s ease-out`), button hover transforms (`0.2s`), border-color transitions on cards (`0.3s`). A `cubic-bezier(.17,.67,.35,1.1)` pop is reserved for overlays/modals. Everything respects `prefers-reduced-motion` (glows hidden, animations disabled). No infinite decorative loops on content.

**Hover / press states.** Hover: brighten text (muted → white), deepen card shadow, intensify button glow. Press: buttons return to baseline `translateY(0)`; control buttons scale to `0.92`. No color inversion.

**Transparency & blur.** Core to the look — glass cards, nav bars (`blur(20px)`), and overlays (`blur(10px)`) all use backdrop blur, but **only at ≥768px** (it's an expensive paint; mobile drops it). Translucency is layered: 3% card fills, 5% inputs, 8–12% borders.

**Layout.** Centered, max-width `1200px` (→`1400px` on ultrawide), with a percentage gutter (`--section-pad-x`, 4–8% by breakpoint) and `~100px` vertical section rhythm. Sticky/fixed blurred nav at `72px` (→`60px` mobile). Grids collapse 4→2→1 and 3→2→1 across breakpoints.

---

## Iconography

**Two complementary systems, both lifted from the product — do not hand-draw SVG icons.**

1. **Lucide** (`lucide-react@1.7` in the product) is the UI icon set — thin, consistent stroke, used in the platform app and inline UI. When you need a functional icon (chevrons, settings gear, plus, status glyphs), load Lucide from CDN and keep the default stroke weight:
   ```html
   <script src="https://unpkg.com/lucide@latest"></script>
   <script>lucide.createIcons();</script>
   <!-- usage: <i data-lucide="arrow-right"></i> -->
   ```
2. **Emoji** are a deliberate, brand-sanctioned part of the *marketing* visual language — used as section/category markers, never inside running text:
   - The 5-step "how it works" flow: 🤖 📱 🔍 📸 ✅
   - Trust cards: 🛡️ ⚡ 📋 🔐 — Trust pills: 🇩🇪 🔒 ⚡
   - Skill/use-case categories: 🚗 🏠 (vehicle inspection, property repair)

**Unicode glyphs** carry recurring micro-roles: the arrow `→` ends CTAs and links; the green ✓ (inside a gradient pill, `.check-badge`) marks benefits and confirmations; the star `★` shows ratings; the middot `·` separates meta.

**Logo.** A glossy, dimensional violet mark (a stylized interlocked "a"/link glyph) — `assets/logo-linkyourskill.png` (680×680, transparent). Pair it with the **gradient-text** "LinkYourSkill" wordmark (Inter 700, `-0.02em`). The maskable app icon is `assets/icon-512.png`. There is no monochrome lockup in the source — keep the colored mark on dark backgrounds.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point (import-only). Consumers link this.
- `README.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible front-matter for use in Claude Code.

**`tokens/`** — imported by `styles.css` in order:
- `fonts.css` — Inter via Google Fonts; `--font-inter` alias.
- `colors.css` — dark-cosmic palette + `html.light` theme scope.
- `typography.css` — families, weights, fluid sizes, tracking, leading.
- `spacing.css` — 4px scale + layout frame variables (responsive).
- `effects.css` — radii, gradients, shadows/glow, blur, easing + `.gradient-text`.
- `base.css` — reset + signature classes (`.glass-card`, `.btn-*`, `.code-snippet`, `.inverse-surface`, `.check-badge`, `.eyebrow`, `.cosmic-glow`).

**`foundations/`** — 14 specimen cards (Design System tab): Colors (brand ramp, backgrounds & text, glass & surfaces, semantic), Type (display, body & labels, mono & code), Spacing (scale, radius), Brand (buttons, glass card, shadows & glow, logo, cosmic backdrop).

**`components/`** — reusable React primitives (exported on `window.LinkYourSkillDesignSystem_da1488`):
- `core/` — **Button**, **GlassCard**, **Badge**, **CodeBlock**
- `forms/` — **Input**
- `data/` — **StatTile**, **CheckItem**, **TrustBadge**

**`ui_kits/`** — full-screen product recreations:
- `website/` — marketing landing (hero, interactive showcase, audience cards, trust, CTA, footer).
- `platform/` — agent-owner app shell (dashboard, agents, orders).

**`assets/`** — `logo-linkyourskill.png`, `icon-512.png`, and `skills/` (sample marketing photography).

---

## Caveats & substitutions

- **Fonts:** Inter is loaded from **Google Fonts** rather than shipping `.woff2` binaries (the product uses `next/font`). This is the genuine typeface, not a substitute — but if you need self-hosted binaries for an offline build, add them and flag it.
- **Icons:** Lucide is referenced from CDN (matching the product's `lucide-react`); no icon binaries are vendored here.
- The component `_ds_bundle.js` is generated automatically by the compiler — component cards and UI kits resolve it at runtime.
