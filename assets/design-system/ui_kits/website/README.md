# Website UI Kit — Marketing Landing

A high-fidelity recreation of the LinkYourSkill public homepage (`src/app/[locale]/(public)/page.tsx`), composed entirely from this design system's primitives.

## Run
Open `index.html`. It loads `../../styles.css` + the compiled `_ds_bundle.js`, then mounts the screen modules.

## Files
- `index.html` — page shell: fixed cosmic-glow backdrop, composition, responsive grid rules.
- `SiteHeader.jsx` — sticky nav, gradient wordmark, active underline, Get-Started CTA.
- `Hero.jsx` — gradient headline, lead, validation badges, live-stat row, guest search, role CTA cluster.
- `Showcase.jsx` — **interactive** 5-step "how it works in practice" stepper (click a step or use Back/Next).
- `IntroCards.jsx` — three-audience grid (Developers highlighted, Providers, Customers).
- `Trust.jsx` — four security cards + Made-in-Germany / GDPR / MCP trust pills.
- `CtaFooter.jsx` — closing developer CTA on an inverse surface + flat link footer.

## Source of truth
Mirrors `Hero.tsx`, `Showcase` (i18n `showcase.*`), `IntroCards.tsx`, `Trust.tsx`, `CtaSection.tsx`, `Footer.tsx`, `Header.tsx` from the repo. Copy is lifted verbatim from `messages/en.json`.

## Notes
This is a recreation, not production code — interactions are cosmetic. Sections present in the real site but omitted here for focus: the customer landing variant, the contact form, and the Buddy CTA.
