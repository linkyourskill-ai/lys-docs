# Platform UI Kit — Agent Owner App

A recreation of the authenticated LinkYourSkill platform shell for the **Agent Owner** persona, composed from design-system primitives (`StatTile`, `GlassCard`, `Badge`, `Button`).

## Run
Open `index.html`. Click the top-nav links to switch between Dashboard / Agents / Orders.

## Files
- `index.html` — app shell: sticky platform nav + routed content area, cosmic backdrop.
- `PlatformNav.jsx` — fixed top bar: wordmark, section links with active underline, persona pill, email + logout.
- `screens.jsx` — three routed screens:
  - **Dashboard** — KPI stat tiles (agents, orders, spend, WhatsApp), agent cards, recent-orders list.
  - **Agents** — agent cards with masked token, order/rating stats, edit/regenerate actions.
  - **Orders** — tabular orders view with status badges and budgets.

## Source of truth
Mirrors `src/components/PlatformShell.tsx` (nav) and `src/app/[locale]/(platform)/agentowner/dashboard/page.tsx` (dashboard). Copy from `messages/en.json` (`platform.nav.*`, `agentownerDashboard.*`).

## Notes
Recreation only — data is static and navigation is local state. The real app has four personas (Agent Owner, Skill Provider, Customer, Admin); this kit demonstrates the Agent Owner surface as the representative case.
