# Content Audit — lys-docs vs. platform docs

> **Run header** · Sources: `~/workspace/linkyourskill.ai/docs/` (platform internal docs) + live-verified ground truth (`lys-platform-ground-truth`, prod 2026-07-11/13) · Date: 2026-07-18 · Files audited: 34 in-scope DE files (5 tracks × [4 lessons + MISSION.md + index.html] + GLOSSARY.md, RESOURCES.md, README.md, index.html) + 20 EN twins checked for drift.

**Report-only.** No lesson file was modified. All findings below name no token, workspace/connector ID, account email, or staging host. Verdict legend: **COURSE-WRONG** (docs refute the course, docs agree with ground truth) · **SOURCE-CONFLICT** (docs disagree with live ground truth — course left alone) · **MISLEADING-OMISSION** (taught topic drops a caveat that trips a learner) · **UNVERIFIABLE**. OK claims are omitted.

Every EN twin was a faithful mirror of its DE original — **no EN-specific factual drift** was found in any track. Consequently every finding below applies to **both** language editions; fixes must be applied to the DE file and its EN twin together.

---

## HIGH severity

### Cross-track

| File(s) | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **skillanbieter/de L1** `get-found` (high stakes) · **n8n/de L2** `search` · **claude-code/de L2** `search` · **customer/de L1** `find-on-marketplace` (this site med) | Teaches search / "getting found" as generous keyword-or-relevance matching. skillanbieter L1: *"gleicht ab über deine Wörter — Titel, Beschreibung, Kategorie, Tags … ordnet nach Relevanz"*. Builders teach the prompt *"Finde eine Reinigungskraft in Münster"* as reliably returning hits. No literal-match caveat anywhere. | Ground truth: `search_skillanbieter` matches **literally** — an AND over substrings of skill **names** (+ location); no synonyms/word-forms, **descriptions not searched**, hyphens are one token. Because the **model** picks `query`, a plausible mapping (`"Reinigungskraft"`, not a substring of a seed name like *Reinigung*) silently returns zero hits. To *be found*, a Skillanbieter's skill **name** must contain the literal words customers type. | **MISLEADING-OMISSION** | high |
| **agentowner journey · messenger-adapter · mcp-guide** (docs side — course left alone) | — (the course teaches around this where it uses the web/dashboard path) | Docs assert both approval channels are **fully functional** via a **reliable `notify()` pipeline with a durable retry reconciler**. Ground truth: **messenger/WhatsApp approval delivery is BROKEN on prod** — `prepare_order` reports the notification was sent, but nothing arrives (staging delivered an interactive reject button; prod does not). | **SOURCE-CONFLICT** | high |
| **n8n/de L3** `prepare-order` + **L4** `track-and-limits` · **claude-code/de L3** `prepare-order` · **agentowner/de L3** `approve-orders` (has working web fallback → see note) | The lesson **finale** rests on a delivered approval message: *"die Freigabe erreicht dich als Nachricht (Messenger) mit einem Ablehnen-Knopf — tippe auf ablehnen"* (builders); L4: *"die Messenger-Nachricht ist unterwegs"*. Presented as reliably working, no caveat. | Same broken-delivery ground truth as above. On prod the message never arrives, so the builder finales are **blocked** — the learner is left waiting. (agentowner L3 also teaches the Dashboard confirm walkthrough, which *does* work — so that track has a working fallback, but still presents the message path as reliable.) | **MISLEADING-OMISSION** | high |

### agentowner

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **agentowner/de L4** `pay-and-comply` | *"Du zahlst **nicht im Voraus**. Erst wenn ein Auftrag abgeschlossen und geschlossen ist, stellt die Plattform dir dafür eine Rechnung."* — reinforced by the lesson quiz (correct answer: *"Erst nach dem Abschluss"*). | agentowner journey Step 8: the buyer receives a pay-link **at assignment** and funds the order **before** the provider may start (`isOrderFunded` gate). The platform **brokerage fee** accrues in `fee_ledger` and is invoiced **once per month** (Sammelrechnung, due +14 days). Payment timing is **inverted** vs. the current two-lane billing model. | **COURSE-WRONG** | high |

### skillanbieter

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **skillanbieter/de L2** `ready-for-money` + **L4** `get-paid` | Reaching *Vollständig* framed as relaxed follow-up: *"Ab hier trägst du deine Steuer-ID nach … Du musst die Schwellen nicht überwachen und nichts umstellen."* | skillanbieter journey §2/§6 + Edge: at the **≥256 € Freigrenze** without complete tax data (full level **and** a `taxId` on file), taking on **new** work is **BLOCKED** (TAX-GATE-1, 403 on accept/propose). The Steuer-ID is a hard earning gate, not a casual "nachtragen." | **MISLEADING-OMISSION** | high |

---

## MED severity

### Cross-track

| File(s) | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **customer/de L1 · skillanbieter/de L1 · n8n/de L2 · claude-code/de L2** (docs side of the search finding — course left alone) | Lessons repeat the docs' happy-path: search matches on description/keywords and ranks by relevance. | Docs (`matching-and-search.md` §2.1, `database.md`) describe FTS with **German stemming** over a `search_vector` weighted **A=name, B=category, C=description, D=service_area** — descriptions *are* indexed, word-forms handled. Ground truth measured production as **literal, names+location only, descriptions not searched**. The docs are the stale side. | **SOURCE-CONFLICT** | med |
| **n8n/de L4** `track-and-limits` · **claude-code/de L4** `track-and-limits` | Both list `approval_requested` as an order **status** ("feste Stationen" / "Stationen des Agenten-Wegs") read via `get_order_status` / `list_orders`, alongside `pending_approval`. | `architecture.md:100` is explicit: *"`approval_requested` is **not** an order status. It exists as an `order_events.event_type` … the corresponding status is `pending_approval`."* The whitelisted tools return `pending_approval`, never `approval_requested` (which only surfaces via `get_order_events`, a tool the course never enables). Docs **and** ground truth agree it is an event, not a status — so this is course-side, not a source conflict. (It is legitimate inside a `get_order_events` *timeline*, which L3 uses correctly.) | **COURSE-WRONG** | med |

### agentowner

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **agentowner/de L4** `pay-and-comply` | *"Datenschutz — Unter **Einstellungen → Datenschutz** verwaltest du deine Einwilligungen …"* — points the learner to a specific consent screen. | agentowner journey Step 10 (FLAG, still current 2026-07-17): *"There is currently **no dedicated consent page under `agentowner/settings`** … not yet implemented in the frontend."* The `/agentowner/settings` page carries *Benachrichtigungen*, not a Datenschutz/consent screen. Sends the learner to a non-existent UI. | **COURSE-WRONG** | med |
| **agentowner/de L4** `pay-and-comply` | Frames billing as a single per-order invoice; the **recurring monthly platform fee** is never mentioned. | The buyer-side brokerage fee is invoiced **monthly** as a Sammelrechnung (Step 8). A learner is never told they receive a recurring monthly bill. | **MISLEADING-OMISSION** | med |
| **agentowner/de L2** `set-limits` | *"Einen Messenger verknüpfen, damit dich Freigaben bequem **per Nachricht** erreichen"* — sets the expectation that linking a messenger yields convenient message approvals. | Broken-delivery ground truth (see HIGH cross-track). The message never arrives on prod. | **MISLEADING-OMISSION** | med |

### skillanbieter

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **skillanbieter/de L2** `ready-for-money` + **L3** `win-and-deliver` | Payout setup framed only as *"damit aus Aufträgen echtes Geld wird"*; L3 teaches Annehmen/Gegenvorschlag/Ablehnen with **no** preconditions. Options given as *"Banküberweisung (SEPA) oder PayPal"* — Stripe Connect not mentioned. | journey §6/§10 + Edge: payout-readiness is a **hard gate** — you cannot accept/propose until a settlement rail is live (Stripe Connect with payouts+charges, or PayPal payee email), else PAYOUT-3, 402 `payout_not_ready`. Course omits the gate and omits Stripe Connect. | **MISLEADING-OMISSION** | med |
| **skillanbieter/de L3** `win-and-deliver` | *"Annehmen — du nimmst zur angebotenen Preisspanne an. Der Auftrag wechselt auf **In Bearbeitung** und gehört dir."* — accept jumps straight to in-progress. | journey §6.5: accept → **assigned** (not in_progress); you may only start (assigned → in_progress) once the buyer's payment arrived (PAY-GATE-1, 402 `payment_not_received`). Course skips the `assigned` state and the payment gate. | **COURSE-WRONG** | med |
| **skillanbieter/de L4** `get-paid` | Teaches the Gutschrift/Einnahmen topic (net/gross by tax level) but never states a processing fee is deducted. | journey §9: the Gutschrift records **gross − processing fee** (`PROVIDER_PROCESSING_FEE_RATE`, default 3%). Learner is not told 3% comes off the top. | **MISLEADING-OMISSION** | med |

### GLOSSARY

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **GLOSSARY.md** — *Steuerprofil* | *"**nicht wählbar**, die Plattform setzt sie automatisch."* | skillanbieter journey §2/§10: the tier auto-escalates as a **floor**, but a provider **may raise the tier manually/proactively** (never below the floor). The floor is automatic; the tier is not "nicht wählbar." | **COURSE-WRONG** | med |

### n8n

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **n8n/de L4** `track-and-limits` | *"429 — zu schnell … Rate-Limit erreicht … Kurz warten, dann läuft es weiter."* Treats every 429 as a pacing problem. | `mcp-guide.md` L481: `prepare_order` also returns **429** when a **daily order limit** (`max_orders_per_day` / `max_order_amount`) is hit — not fixable by waiting. The course collapses two distinct 429 causes into one wrong remedy. | **MISLEADING-OMISSION** | med |

### claude-code

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **claude-code/de L4** `track-and-limits` | *"`task_execute`, `auto_approve` und der `⏵⏵`-Auto-Modus überspringen deine Freigabe."* — treats `auto_approve` as a peer tool that bypasses approval. | `mcp-guide.md`: `auto_approve` is a boolean **parameter** of `task_execute`, **advisory only** — *"you cannot skip approval yourself; whether an action is auto-approved is decided solely by the owner's autonomy setting."* Not a standalone tool; does not skip approval. | **COURSE-WRONG** | med |

---

## LOW severity

| File | Course says | Docs / ground truth say | Verdict | Sev |
|---|---|---|---|---|
| **customer/de L4** `track-and-rate` | State chain ends at *storniert* as the only early exit. | customer journey Step 6/7: a consumer **Widerruf** (§355 BGB, 14-day window) is a distinct terminal status `withdrawn`. State list omits it. (Lesson does hedge the list isn't exhaustive.) | **MISLEADING-OMISSION** | low |
| **skillanbieter/de L1** `get-found` + **index.html** (line 44) | Lists **Tags** as a field the search matches on: *"gleicht ab über … Tags"*; index echoes *"Titel, Tags, … für eine Maschine auffindbar"*. | Tags exist as a skill field but are **not** in the search vector (name/category/description/service_area only — `database.md`; and per ground truth only names+location). Tags are never searched. | **COURSE-WRONG** | low |
| **skillanbieter/de L4** `get-paid` | *"Netto oder brutto — deine **Steuerprofil-Stufe** entscheidet."* | journey §9.5 still says net/gross depends on `provider_type` (trader/private), not the tax tier — an internal doc inconsistency; the revised three-tier model plausibly supports the course. Recorded; course left alone. | **SOURCE-CONFLICT** | low |
| **skillanbieter/de L2** `ready-for-money` | Thresholds framed as strictly *überschreitet* (>200 € / >256 €). | journey §2: floors are **≥200 €** / **≥256 €**. At exactly the boundary the course shows the lower tier. Trivial boundary drift. | **COURSE-WRONG** | low |
| **n8n/de L4** `track-and-limits` | *"401 … 'Bearer token required'. Der Token fehlt, **stimmt nicht oder wurde widerrufen**."* Attributes the message to all three cases. | Ground truth: only the **no-token** case returns `{"error":"unauthorized","message":"Bearer token required"}`; an invalid/revoked token returns a blank `{"error":"unauthorized"}` with no message. Minor mis-attribution. | **MISLEADING-OMISSION** | low |
| **n8n/de L1** `connect` + **claude-code/de L1** `connect` | Both suggest a public read-only demo key for use against the production endpoint `https://app.linkyourskill.ai/mcp`. | `mcp-guide.md` Demo Token: read-only scopes are correct, but the token *"lives in the E2E/test seed plane … registered only with `E2E_MODE=true` and never in production."* Against the prod host the course targets, it would 401. (No leak — the value is not reproduced.) | **MISLEADING-OMISSION** | low |
| **README.md** | Structure tree lists only `skillanbieter/`, `n8n/`, `claude-code/` as track folders. | The repo also contains `customer/` and `agentowner/` (both on disk, both linked from index.html). The tree omits 2 of the 5 tracks. Repo-internal completeness. | **COURSE-WRONG** | low |

---

### Not flagged (checked and OK — recorded so you know they were considered)
- **customer L2 required fields** (Titel + Beschreibung required; Ort/Zeitrahmen/Budget optional) — matches the customer **web form**; the ground-truth `prepare_order` required set is the MCP **agent** surface (different surface, not a conflict).
- **Builder MCP endpoint** `https://app.linkyourskill.ai/mcp`, `claude mcp add --transport http`, tool names/args (`search_skillanbieter`, `prepare_order` + its 6 required fields, `get_order_status`, …), and **count-free** tool-catalog phrasing — all correct.
- **customer payment mechanics** (Stripe/PayPal redirect, no escrow claim), **rating-affects-ranking**, **agentowner token/limits/multi-step confirm**, **GLOSSARY tags 3–8 lowercase**, **dropped Mistral/Make tracks absent from all top-level files** — all correct.
- **Leak check:** clean across all 34 DE files + 20 EN twins — no token, workspace/connector ID, account email, or staging host appears anywhere.
