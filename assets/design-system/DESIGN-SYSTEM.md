# LinkYourSkill Design System — for `lys-teach`

Every lesson and reference document this skill produces is built on the
**LinkYourSkill Design System** ("Dark Cosmic"). This folder is the
self-contained copy that `lys-teach` ships with.
Source: <https://github.com/linkyourskill-ai/lys-design-system>.

The point: a learner returns to these lessons again and again, so they must
look like **one coherent, beautiful course** — not a pile of one-offs. The
LinkYourSkill system is that visual foundation.

## What's in this folder

```
design-system/
  styles.css            ← the brand entry point. Imports every token + the
                          base layer (glass cards, buttons, eyebrows…). Verbatim upstream.
  tokens/               ← CSS custom properties: colors, typography, spacing, effects, fonts, base.
  README.md             ← the full upstream brand guide (product context, voice, foundations).

  lessons.css           ← lys-teach's shared stylesheet. Imports styles.css, adds the
                          teaching components. THIS is the file lessons link.
  quiz.js               ← zero-dependency retrieval-practice quiz widget.
  lesson-template.html  ← a starter lesson in the full LinkYourSkill brand. Copy it.
  DESIGN-SYSTEM.md      ← you are here.

  foundations/          ← specimen cards: colors, type, spacing, brand (reference).
  components/           ← React primitives (Button, GlassCard, Badge…). Reference only —
                          lessons are static HTML and build from CSS classes, not React.
  ui_kits/              ← full-screen recreations of the marketing site + platform app.
  assets/               ← logo-linkyourskill.png, icon-512.png, sample skill imagery.
```

## Install into a teaching workspace (do this once per workspace)

Copy the whole folder into the workspace's assets, then build from it:

```sh
mkdir -p assets
cp -R "<this skill>/design-system" assets/design-system
```

After that, **every lesson and reference document links one stylesheet**:

```html
<link rel="stylesheet" href="../assets/design-system/lessons.css">
<!-- add at the end of <body> if the lesson uses a quiz: -->
<script src="../assets/design-system/quiz.js"></script>
```

`lessons.css` `@import`s `styles.css`, which pulls in the tokens and the
brand base layer (and loads Inter). Don't link `styles.css` separately;
`lessons.css` already pulls it in.

The fastest way to start a lesson is to **copy `lesson-template.html`** into
`./lessons/0001-<name>.html` and replace the placeholders.

**Dark is the default** — the brand's home turf. For a light variant, add
`class="light"` to `<html>`; the brand's light-theme tokens cascade and
`lessons.css` adapts for free. **Print always flips to a clean light page.**

## Tokens — use these, never invent

Read `tokens/` for the full set. The ones you reach for most:

| Token | Value | Use |
|---|---|---|
| `--accent-1` / `--accent-2` | `#a855f7` / `#7c3aed` | Brand violet; the `--gradient-brand` runs between them |
| `--accent-light` | `#c084fc` | Links, eyebrows, accents on dark |
| `--gradient-brand` / `--gradient-brand-bright` | 135° violet | Buttons, `.gradient-text`, the section divider |
| `--bg` / `--bg-deep` | `#0a0a18` / `#06060f` | Page canvas (dark) |
| `--text` / `--muted` | `#ffffff` / `#b4bcc8` | Body ink / secondary text |
| `--card-bg` / `--card-border` | white 3% / white 7% | Glass surfaces |
| `--success` | `#22c55e` | The green ✓ check-badge (outcome lists, correct answers) |
| `--font-sans` | Inter (system-ui fallback) | All type |
| `--space-1 … --space-25` | 4 → 100px | Spacing — snap to these, base unit 4 |
| `--radius-md` / `--radius-xl` / `--radius-full` | 12 / 20 / 9999px | Buttons / glass cards / pills |
| `--shadow-glow` / `--shadow-card` | purple glow / deep shadow | Glow is the brand's light source |

Type: **Inter** throughout. `h1` is **extra-bold 800** with tight tracking;
`h2`/`h3` **bold 700**; lesson body is the long-form step (`--text-body-lg`,
`--leading-relaxed`), white ink. Reserve **`.gradient-text` for exactly one
highlighted phrase per headline** — never whole sentences.

## Components in `lessons.css` (and reused brand classes)

| Class | Purpose |
|---|---|
| `.lesson`, `.reference` | The readable glass reading surface floating on the cosmic backdrop |
| `.lesson__eyebrow` / `h1` + `.gradient-text` / `.lesson__lead` | Header: mission kicker → title with one highlight → why |
| `.objectives` | "Das kannst du danach" list, green ✓ check-badge markers |
| `.lesson__divider` | The glowing gradient bar that marks a section beat |
| `.callout` / `.callout--note` | Key-insight box (violet-tinted) / neutral note |
| `.primary-source` | The one best resource to read/watch next |
| `.cite` | Inline citation that backs up a claim |
| `.quiz` (+ `quiz.js`) | Retrieval-practice MCQ with instant feedback |
| `.ask-teacher` | Closing reminder to ask the agent (the teacher) |
| `.lesson__nav` / `.lesson__brand` | Prev / next / reference footer + brand strip |
| `.btn-primary` / `.btn-secondary` (from `styles.css`) | Gradient+glow button / outline button |

Reuse the brand base classes directly where they fit: `.glass-card`,
`.btn-primary`, `.btn-secondary`, `.eyebrow`, `.check-badge`, `.gradient-text`,
`.code-snippet`, `.cosmic-glow`.

## The look — "Dark Cosmic" (the signature device)

There is no single line-graphic; the brand's signature is the **environment**:
a near-black canvas (`--bg-deep`) lit by **blurred purple cosmic glows**, with
**translucent glass cards** floating over it and a single **violet 135°
gradient** doing all the accent work (buttons, `.gradient-text`, the section
divider). `lessons.css` bakes the cosmic glow behind every lesson
automatically. Glow is the light source — let buttons and the divider emit it.
Where Atruvia used the VIA Line to *connect* two ideas, here the
`.lesson__divider` (a short glowing gradient bar) marks the beat between
sections.

## Brand voice — full LinkYourSkill brand (chosen for this skill)

Lessons read like LinkYourSkill surfaces. Apply consistently:

- **Confident, technical, benefit-led.** Concrete over abstract; real numbers,
  real names. Calm and direct — no hype.
- **Direct second person** — »du«, »dein Agent«, »du entscheidest«. **German-first**
  (the platform is German-first); English when the topic is inherently English
  (e.g. code keywords) or the learner asks — keep the same register.
- **Keep German domain nouns** even in English copy: *Skillanbieter, Agentowner,
  Auftraggeber, Vor-Ort-Check*. Don't translate them away.
- **Headlines in sentence case** with **exactly one `.gradient-text` phrase** —
  never a whole highlighted sentence.
- **Arrows (`→`) end CTAs and key links**; the middot (`·`) separates meta items.
- **Emoji are deliberate section/category markers, never inside running text.**
  The green ✓ check pill is the recurring motif for outcome lists and confirmations.
- Pair the violet logo mark (`assets/logo-linkyourskill.png`) with the
  gradient-text "LinkYourSkill" wordmark; keep the colored mark on dark.

## Caveats (flag, don't hide)

- **Fonts now load online.** Inter comes from **Google Fonts** (`tokens/fonts.css`),
  not vendored `.woff2`. Lessons fall back to `system-ui` offline, but the brand
  face needs a network. If you need a fully offline build, self-host Inter woff2
  and point `--font-inter` at it — and flag it. (This is a change from the old
  Atruvia bundle, which was fully offline.)
- **Icons via CDN.** The brand uses **Lucide** from a CDN for UI icons
  (`<script src="https://unpkg.com/lucide@latest"></script>`); none are vendored.
  The template doesn't require it — `→`, `·` and the ✓ pill cover most needs.
- **Mono** is the system monospace stack (`ui-monospace, SFMono-Regular, Menlo…`).
- `components/` are **React** primitives and `_ds_bundle.js` is a generated
  artifact for the upstream Design-System pane. Lessons are static HTML and
  build from the CSS classes above — treat React/ui_kits as reference.
