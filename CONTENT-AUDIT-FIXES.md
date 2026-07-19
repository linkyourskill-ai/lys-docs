# Content Audit — fixes for the high-severity rows

> **Status (2026-07-18):** Fixes **A, B, C are APPLIED** to the DE + EN files (unpushed — review the diff before pushing; the agentowner model in A still wants a check against the live Rechnungen UI). Fix **D is deferred to a re-spike** (see checklist at the bottom) — the builder-finale files are unchanged.
>
> Companion to `CONTENT-AUDIT.md`. Below is the record of what each fix changed. Each fix lists the exact current text and a proposed replacement for **both** the DE canonical and its EN twin (they are faithful mirrors, so both must move together). Provenance comments at the top of each file should get a one-line "revised 2026-07-18" note when a fix lands; those edits are omitted below for brevity.
>
> **Two fixes are fact-dependent (⚠︎ flagged).** The messenger-delivery findings rest on a 5-day-old ground-truth note ("approval delivery broken on prod, works on staging") and on whether a web/dashboard reject path now exists (`architecture.md` hints "via WhatsApp or web"). Confirm both against live prod before shipping the builder-finale fix — ideally a short re-spike.

Order below = the audit's high band: **A** agentowner payment (COURSE-WRONG), **B** search omission, **C** tax-ID gate, **D** builder finales.

---

## FIX A — agentowner L4 · payment timing is inverted **(COURSE-WRONG, high)**

**Files:** `agentowner/de/lessons/0004-pay-and-comply.html` + `agentowner/en/…`
**Why:** The lesson teaches "you don't pay upfront; the invoice comes only after completion." Per `journeys/agentowner.md` Step 8 the buyer funds the **order amount at assignment** — *before* the provider may start (`isOrderFunded`) — and the platform **brokerage fee** is billed **monthly** as a Sammelrechnung. The lesson's whole thesis is wrong, and the quiz reinforces it.
**⚠︎ Confirm before shipping:** ground-truth measured order semantics but not agentowner *billing timing* directly — verify the corrected model against the live billing UI (Rechnungen / Zahltag).

This is the biggest change — it rewrites the lesson's spine. Proposed passages:

**A1 · Lead paragraph** (DE lines 30–35 / EN 30–35)
- DE now: *"Auf LinkYourSkill begleichst du eine Rechnung sicher über die Plattform, erst nach Abschluss."*
- DE → *"Auf LinkYourSkill läuft alles Geld sicher über die Plattform: den Auftragsbetrag zahlst du, sobald ein Anbieter zugewiesen ist, die Plattform-Gebühr gesammelt einmal im Monat."*
- EN now: *"you settle an invoice (Rechnung) securely through the platform, only after completion."*
- EN → *"all money runs securely through the platform: you pay the order amount once a provider is assigned, and the platform fee once a month as a single bill."*

**A2 · Section "Wann die Rechnung kommt" → "Zwei Arten von Zahlung"** (DE lines 47–53 / EN 47–53)
- DE now: *"Du zahlst nicht im Voraus. Erst wenn ein Auftrag abgeschlossen und geschlossen ist, stellt die Plattform dir dafür eine Rechnung. … für Arbeit, die bereits erledigt ist."*
- DE →
  > **Zwei Arten von Zahlung**
  > Auf LinkYourSkill trennst du zwei Dinge. Den **Auftragsbetrag** zahlst du, sobald ein **Skillanbieter** zugewiesen ist — also *bevor* die Arbeit beginnt; erst wenn dein Geld da ist, darf der Anbieter loslegen. Die **Plattform-Gebühr** für die Vermittlung rechnet die Plattform dagegen *einmal im Monat* gesammelt ab — nicht pro Auftrag. Beides findest du unter **Rechnungen**.
- EN → mirror:
  > **Two kinds of payment**
  > On LinkYourSkill you keep two things apart. You pay the **order amount** (Auftragsbetrag) as soon as a **Skillanbieter** is assigned — that is, *before* the work starts; the provider may only begin once your money is in. The platform **brokerage fee** (Plattform-Gebühr), by contrast, is billed *once a month* as a single bill — not per order. You find both under **"Rechnungen"** ("Invoices").

**A3 · Kerngedanke callout** (DE 55–62 / EN 55–62)
- DE last sentence now: *"Und du zahlst für Erledigtes: Die Rechnung kommt nach Abschluss, nicht vorher."*
- DE → *"Den Auftragsbetrag zahlst du bei der Zuweisung, damit der Anbieter starten kann; die Plattform-Gebühr sammelt die Plattform und rechnet sie monatlich ab. Immer über die Plattform, per Karte (Stripe) oder PayPal — nie bar und ohne Bankdaten an Fremde."*
- EN → *"You pay the order amount at assignment so the provider can start; the platform collects its fee and bills it monthly. Always through the platform, by card (Stripe) or PayPal — never cash or bank details to strangers."*

**A4 · "So bezahlst du" step 1** (DE 66 / EN 66)
- DE now: *"Öffne unter Rechnungen die Rechnung zu deinem abgeschlossenen Auftrag …"*
- DE → *"Öffne unter **Rechnungen** die offene Zahlung — den Auftragsbetrag bei der Zuweisung oder die monatliche Plattform-Gebühr — und sieh dir die Posten im Detail an."*
- EN → *"Under **„Rechnungen"** open the open payment — the order amount at assignment, or the monthly platform fee — and see the line items in detail."*

**A5 · Quiz** (DE 96–107 / EN 96–107) — the current correct answer is the wrong fact.
- DE →
  > Q: *"Wann zahlst du den Betrag für einen Auftrag?"*
  > ✓ *"Bei der Zuweisung — dein Geld muss da sein, bevor der Anbieter startet"*
  > ✗ *"Erst nach dem Abschluss, für bereits getane Arbeit"*
  > ✗ *"Gar nicht direkt — alles läuft über die monatliche Sammelrechnung"*
  > Feedback: *"Den Auftragsbetrag zahlst du bei der Zuweisung: Erst wenn dein Geld da ist, darf der Skillanbieter loslegen. Gesammelt — einmal im Monat — kommt nur die Plattform-Gebühr für die Vermittlung."*
- EN →
  > Q: *"When do you pay the amount for an order?"*
  > ✓ *"At assignment — your money must be in before the provider starts"*
  > ✗ *"Only after completion, for work already done"*
  > ✗ *"Never directly — everything runs through the monthly combined bill"*
  > Feedback: *"You pay the order amount at assignment: the Skillanbieter may only start once your money is in. Only the platform's brokerage fee is combined — billed once a month."*

Also update the objectives (DE 43 / EN 43) — "Eine Rechnung nach Abschluss …" → "Den Auftragsbetrag bei der Zuweisung und die monatliche Plattform-Gebühr sicher über die Plattform zahlen."

---

## FIX B — skillanbieter L1 · search taught without its literal-match reality **(MISLEADING-OMISSION, high)**

**Files:** `skillanbieter/de/lessons/0001-get-found.html` + `skillanbieter/en/…`
**Why:** The lesson tells providers they're matched on *description, category, tags, relevance*. On prod, `search_skillanbieter` matches **literally** on the words in the skill **name/title** (+ location) — no synonyms, descriptions not searched. To be found, the plain words a customer types must sit in the **title**. (The "matches on description/relevance" wording is itself docs-blessed, so leave it — this is an *additive* caveat, not a rewrite. The "Tags" claim is a separate low-sev item, see note.)

**B1 · Add a callout** after the "Ein auffindbarer Skill kann drei Dinge" list (DE after line 72 / EN after line 69):
- DE →
  > ```html
  > <div class="callout callout--note">
  >   <p class="callout__label">Nimm die Wörter, die dein Käufer tippt</p>
  >   <p>
  >     Der Agent sucht wörtlich — er denkt sich keine Synonyme aus. Frag dich: Welches
  >     <em>eine</em> Wort tippt jemand, der genau dich sucht? Dieses Wort gehört in deinen
  >     <strong>Titel</strong>. „Fensterreinigung" wird gefunden; „Ich sorge für Durchblick"
  >     nicht. Schreib schlicht und benenn die Leistung beim Namen — nicht werblich.
  >   </p>
  > </div>
  > ```
- EN →
  > ```html
  > <div class="callout callout--note">
  >   <p class="callout__label">Use the words your buyer types</p>
  >   <p>
  >     The agent searches literally — it doesn't invent synonyms. Ask yourself: which
  >     <em>one</em> word would someone type who is looking for exactly you? That word belongs
  >     in your <strong>title</strong>. "Fensterreinigung" (window cleaning) gets found; "I keep
  >     your view clear" does not. Write plainly and name the work — not marketing.
  >   </p>
  > </div>
  > ```

**Note (low-sev bonus, optional):** the same lesson lists **Tags** among searched fields (DE 51 / EN 50) and `index.html` line 44 echoes it; tags aren't in the search vector. If you want the low-sev tidy too, drop "Tags" from that "gleicht ab über …" clause. Not required for the high fix.

---

## FIX C — skillanbieter L2 + L4 · the Steuer-ID is a hard gate, not a casual "nachtragen" **(MISLEADING-OMISSION, high)**

**Files:** `skillanbieter/de/lessons/0002-ready-for-money.html` + `…/0004-get-paid.html` + both EN twins
**Why:** Both lessons frame the Steuer-ID as a relaxed follow-up ("du trägst sie nach", "du musst die Schwellen nicht überwachen"). Per `journeys/skillanbieter.md` §2/§6 + Edge, at the ≥256 € Freigrenze **without** a Steuer-ID on file, taking on **new** work is **blocked** (TAX-GATE-1, 403 on accept/propose). It's a stop-earning gate.

**C1 · L2, the Vollständig bullet** (DE 64 / EN 64)
- DE now: *"Vollständig — … sobald du die Freigrenze von 256 € überschreitest. Ab hier trägst du deine Steuer-ID nach, und Geschäftsangaben werden relevant."*
- DE → *"**Vollständig** — wird automatisch gesetzt, sobald du die Freigrenze von 256 € erreichst. Ab hier ist deine **Steuer-ID Pflicht**: Ohne sie nimmt die Plattform keine neuen Aufträge mehr für dich an. Trag sie gleich ein, dann läuft alles weiter; Geschäftsangaben werden jetzt ebenfalls relevant."*
- EN → *"**Vollständig** (full) — assigned automatically once you reach the 256 € Freigrenze. From here your **Steuer-ID is required**: without it the platform stops accepting new orders for you. Enter it right away and everything keeps running; business details now become relevant too."*

**C2 · L2, add a callout** after the three-levels list (DE after line 69 / EN after line 69):
- DE →
  > ```html
  > <div class="callout callout--note">
  >   <p class="callout__label">Ab „Vollständig" ist die Steuer-ID Pflicht</p>
  >   <p>
  >     Die Einstufung läuft automatisch — die Steuer-ID nicht. Erreichst du die Freigrenze,
  >     <strong>brauchst du sie, um weiter Aufträge annehmen zu können</strong>: Fehlt sie,
  >     stoppt die Plattform neue Aufträge, bis du sie einträgst. Am besten gleich erledigen,
  >     dann bremst dich später nichts.
  >   </p>
  > </div>
  > ```
- EN →
  > ```html
  > <div class="callout callout--note">
  >   <p class="callout__label">From "Vollständig" on, the Steuer-ID is required</p>
  >   <p>
  >     The classification is automatic — the Steuer-ID is not. Once you reach the Freigrenze,
  >     <strong>you need it to keep accepting orders</strong>: without it the platform stops new
  >     orders until you enter it. Best done right away, so nothing slows you down later.
  >   </p>
  > </div>
  > ```
  - Also soften the "Du musst die Schwellen nicht überwachen und nichts umstellen." line (DE 67 / EN 67) with a trailing clause: *"— nur die Steuer-ID musst du selbst nachtragen, sobald du auf Vollständig stehst."* / *"— only the Steuer-ID you must add yourself once you're on Vollständig."*
  - And the Kerngedanke (DE 82 / EN 83): *"Wirst du hochgestuft, trägst du die Steuer-ID nach."* → append *"— ohne sie stoppen neue Aufträge."* / EN *"— without it, new orders stop."*
  - And the quiz feedback (DE 111 / EN 111) closing clause: after "dann trägst du deine Steuer-ID nach" add *" (Pflicht — sonst stoppen neue Aufträge)"* / *" (required — otherwise new orders stop)"*.

**C3 · L4, the "du musst nur nachlegen" line** (DE 54–56 / EN 54–56)
- DE now: *"Du musst nur nachlegen, was die neue Stufe verlangt: ab Vollständig deine Steuer-ID."*
- DE → *"Was die neue Stufe verlangt, trägst du selbst nach: ab **Vollständig** ist deine **Steuer-ID Pflicht** — ohne sie kannst du keine neuen Aufträge mehr annehmen."*
- EN → *"What the new level asks for you add yourself: from **Vollständig** on, your **Steuer-ID is required** — without it you can no longer accept new orders."*

---

## FIX D — builder finales rest on a delivered approval message ⚠︎ **(MISLEADING-OMISSION, high — fact-dependent)**

**Files:** `n8n/de/lessons/0003-prepare-order.html`, `n8n/de/lessons/0004-track-and-limits.html`, `claude-code/de/lessons/0003-prepare-order.html` + all three EN twins
**Why:** Each finale ends "the approval message reaches you in Messenger — tap reject." Verified on **staging** (delivers); learners run on **production**, where delivery is on the backlog as broken. On prod the message may never arrive, so the capstone can strand the learner — with a **real order** left in `pending_approval` (n8n has no pre-creation net; claude-code's Net 1 dialog-decline does still fully work).

**⚠︎ Decide the approach first (needs a live-prod check today):**
1. **Messenger still broken, no web reject path** → the reliable fix is to teach an in-app fallback. For **claude-code**, lean the finale on **Net 1** (permission-dialog decline — creates no order, fully works) and treat Net 2's message-reject as "best effort." For **n8n** (no Net 1), this likely means adding `task_cancel` to the whitelist as the escape hatch, or not approving at all — a **real redesign + re-spike**, your call.
2. **A web/dashboard reject path now exists** (`architecture.md` hints it) → update the "Messenger ist der einzige interaktive Ablehnen-Weg" claim and route the reject through the web approval UI. Smaller change.
3. **Unsure / ship-safe now** → add the honest caveat below (works regardless of 1 vs 2) and schedule the spike.

Drafted **Option 3** caveat (shippable immediately):

**D1 · n8n L3** — insert before "Lies nach, dann lehne ab" (DE before line 112 / EN before 111):
- DE →
  > ```html
  > <div class="callout callout--note">
  >   <p class="callout__label">Wenn die Freigabe-Nachricht ausbleibt</p>
  >   <p>
  >     Auf der Produktion kann die Zustellung der Freigabe-Nachricht gerade hängen — dann kommt
  >     sie verspätet oder gar nicht. Dein Übungsauftrag bleibt trotzdem sicher: Ohne deine
  >     Freigabe wird er nie wirksam. Prüf seinen Status in der nächsten Lektion mit
  >     <code>get_order_status</code> — steht er auf <code>pending_approval</code>, wartet er
  >     weiter und läuft von selbst ab. Im Zweifel hilft der Support.
  >   </p>
  > </div>
  > ```
- EN → mirror ("If the approval message doesn't arrive … your practice order stays safe … check its status with `get_order_status` … it waits and expires on its own … support can help.")
- **Also** fix the troubleshooting bullet that blames the learner (DE 134 / EN 133): *"Keine Freigabe-Nachricht im Messenger — prüfe die Messenger-Verknüpfung …"* → append *"Kommt sie trotz korrekter Verknüpfung nicht, kann die Zustellung auf der Produktion selbst hängen — dann liegt es nicht an dir."* / EN equivalent.

**D2 · n8n L4** — the `approval_requested` line (DE 84 / EN 84)
- DE now: *"approval_requested — die Plattform hat deine Freigabe angefordert; die Messenger-Nachricht ist unterwegs."*
- DE → *"<code>approval_requested</code> — die Plattform hat deine Freigabe angefordert; die Freigabe-Nachricht wurde ausgelöst (auf der Produktion kann sie verzögert sein oder ausbleiben)."*
- EN → *"<code>approval_requested</code> — the platform has requested your Freigabe; the approval message was triggered (on production it can be delayed or fail to arrive)."*
- **Adjacent med finding (same list):** this line also presents `approval_requested` as a **status**, but `architecture.md:100` says it's an `order_events.event_type`; the status is `pending_approval`. If you fix that too, reword the list intro (DE 80 / EN 79) from "die Stationen des Agenten-Wegs" to "die Ereignisse und Status auf dem Agenten-Weg" and mark `approval_requested` as an *event*.

**D3 · claude-code L3** — Net 2 paragraph (DE 99–105 / EN 98–104)
- DE now: *"… und die Freigabe erreicht dich als Nachricht (Messenger) mit einem Ablehnen-Knopf. Tippe auf ablehnen."*
- DE → append after that sentence: *"Kommt die Nachricht auf der Produktion nicht an, ist das kein Beinbruch — **Netz 1 hat den Auftrag ohnehin schon abgefangen**. Der echte Auftrag aus diesem Schritt bleibt dann auf <code>pending_approval</code> stehen; du prüfst ihn gleich per Status und lässt ihn von selbst ablaufen."*
- EN → *"If the message doesn't arrive on production, it's no disaster — **Net 1 already caught the order anyway**. The real order from this step then stays at <code>pending_approval</code>; you check it via status next and let it expire on its own."*
- (claude-code is the least exposed track — Net 1 fully works — so Option 3 is arguably sufficient here even long-term.)

---

## Re-spike checklist for D (builder finales)

Run against **production** (`https://app.linkyourskill.ai/mcp`), with a real agent token, mirroring the original n8n/Claude-Code spikes. Use a `Test:`-titled order and follow the wrap-proof credential rule (secret from `.scratch/`, never pasted inline). Capture answers to:

1. **Does the messenger/WhatsApp approval message actually arrive on prod?** Prepare a `Test:` order, watch the linked messenger. Record: arrives / delayed / never. (Memory 2026-07-13 said "never" — confirm it's still true.)
2. **Is there an in-app / web reject path?** Log in as the agentowner on the web after preparing the order — is there a dashboard/approval screen where the pending order can be rejected without the messenger message? (`architecture.md` hints "via WhatsApp or web".)
3. **What status does the taught toolset show for a waiting order?** Call `get_order_status` / `list_orders` — does it read `pending_approval`? Does `list_orders` include the waiting order at all? (This also settles the L4 `approval_requested`-as-status med finding.)
4. **Does the order expire on its own, and after how long?** Leave the `Test:` order unapproved; confirm it self-expires (and the TTL) so the "let it expire" fallback in the D3 caveat is true.
5. **Does `task_cancel` work as the escape hatch on prod?** If the finale needs a reliable reject, confirm `task_cancel(order_id)` → `cancelled` on prod (memory says yes on staging). If so, adding it to the n8n whitelist is a candidate real fix.

**Then choose:** answers (1 arrives, 2 no) → keep the finale, drop Option 3. (1 never) + (2 yes) → route reject through web (Option 2), fix the "Messenger ist der einzige … Weg" claim. (1 never) + (2 no) → n8n needs a real redesign (Option 1: `task_cancel`, or don't approve at all); claude-code leans on Net 1 + Option 3. Update all three finale files' provenance with the fresh prod date either way.

---

## Not drafted here (deliberately)

- **Messenger SOURCE-CONFLICT** (docs say "fully functional"): per precedence the **course is left alone**; the stale side is the docs. No course edit. (The D-fixes above add real-world caveats — that's teaching around the bug, not rewriting to match docs.)
- **Med/low rows** (`approval_requested`-as-status beyond the note in D2, `auto_approve` framing, 429 conflation, 401 attribution, tags, thresholds ≥ vs >, README tree, GLOSSARY Steuerprofil, withdrawn/Widerruf, processing fee): these are quick, self-contained edits — happy to draft them next once the high band is settled.
