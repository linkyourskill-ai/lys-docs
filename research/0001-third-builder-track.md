# Research: Welcher Builder-Track fehlt? (Kandidaten für Track 3)

> Status: **Research-Notiz** (keine Kurs-Entscheidung, nichts committet/geplant).
> Methode: Repo-Bestand als Primärquelle für „was existiert"; externe Kandidaten ausschließlich
> gegen **First-Party-Dokumentation** geprüft (Hersteller-Docs, keine Blog-Sekundärquellen).
> Recherchiert: 2026-07-09. Alle externen Quellen an diesem Datum abgerufen.

---

## 1. Ist-Stand: Was existiert heute

Fünf Kurse, alle vollständig de+en, je 4 Lektionen (Quelle: `README.md`, Persona-Tabelle;
Landing `index.html`, „5 Kurse · Deutsch & English · je 4 Lektionen"):

| Kurs | Ordner | Zielgruppe / Werkbank |
|---|---|---|
| Skillanbieter | `skillanbieter/{de,en}/` | Anbieter-Seite (Mensch) |
| Kunde | `customer/{de,en}/` | direkte Nachfrage (Mensch) |
| Agentowner | `agentowner/{de,en}/` | agenten-vermittelte Nachfrage, **untechnisch** („Token = Schlüssel", siehe `agentowner/learning-records/0001-agent-acts-you-approve.md`) |
| Builder-Track 1: „Dein Agent in n8n" | `n8n/{de,en}/` | Agentowner im **Builder-Mode**, visuelle Automatisierungs-Werkbank (n8n Cloud oder self-hosted) |
| Builder-Track 2: „Dein Agent in Claude Code" | `claude-code/{de,en}/` | Agentowner im Builder-Mode, **Terminal** |

### Das gemeinsame Muster der beiden Builder-Tracks

Aus `n8n/learning-records/0001-deliberate-altitude-split.md`,
`claude-code/learning-records/0001-deliberate-altitude-split.md` sowie beiden `de/MISSION.md`:

- **Gleicher Lernender, kein neues Persona:** der Agentowner im Builder-Mode; Voraussetzung ist
  jeweils der Agentowner-Kurs (Token/Schlüssel existiert bereits).
- **Gleiche Leitachse:** „Dein Agent handelt — du behältst die Kontrolle." Jeder Track braucht
  eine **Kontroll-Oberfläche**: n8n = Tool-Whitelist im Node, Claude Code = nativer
  Erlaubnis-Dialog + `/permissions`.
- **Gleicher technischer Kern:** beide verbinden ein Chat-Model mit dem **MCP-Zugang von
  LinkYourSkill** — Endpunkt `linkyourskill.ai/mcp`, Transport HTTP-Streamable, Auth =
  **statischer Bearer-Token** (`Authorization: Bearer <dein-schlüssel>`; sichtbar in
  `n8n/de/lessons/0001-connect.html` und `claude-code/de/lessons/0001-connect.html`).
  Primärquelle beider Tracks: `linkyourskill.ai/{de,en}/docs/mcp-integration` (siehe
  `RESOURCES.md`, „Externe Quellen (nur Builder-Tracks)").
- **Gleiche Arc-Sequenz:** 1) Verbinden (deterministischer Beweis ohne LLM: `tools/list` bzw.
  `/mcp`) → 2) Dein Agent sucht → 3) Dein Agent beauftragt (Ablehnen-Drill, „Test:"-Auftrag)
  → 4) Verfolgen & Grenzen (Status, Whitelist, 401/429).
- **Gleiche fünf Tools**, `prepare_orders`/`task_execute`/`auto_approve` bewusst außen vor
  (`n8n/learning-records/0001-deliberate-altitude-split.md`).
- **Genre:** lys-teach-Kurs (4 Lektionen + MISSION + Index + Quizze), ausdrücklich **kein
  Entwickler-Kurs** — „Eigene MCP-Server oder Plattform-Entwicklung" ist in beiden MISSIONs
  out of scope. Der früher erwogene `ai-agent`-/SDK-Kurs wurde verworfen (README führt ihn
  nicht; beide MISSIONs grenzen ihn aus).
- **Prozess:** Spike vor dem Autorieren, Live-Verifikations-Stempel je Lektion, inverse
  Verbatim-Regel (englische Werkzeug-Strings bleiben buchstabengetreu in deutscher Copy),
  RESOURCES.md-Ausnahme pro Track eng begrenzt.

### Abgeleitete Anforderungen an einen dritten Track

- **R1 — Mensch als Lernender:** eine End-User-Werkbank, kein SDK/Framework (Genre-Entscheidung).
- **R2 — LYS-Anbindung:** muss den LYS-MCP-Endpunkt (HTTP-Streamable) **mit statischem
  Bearer-Header** aufrufen können — oder ersatzweise denselben Endpunkt als schlichten
  HTTP-POST (das hat n8n L1 mit dem HTTP-Request-Node bereits bewiesen).
- **R3 — Kontroll-Oberfläche:** Tool-Whitelist oder Freigabe-Dialog, sonst trägt die Leitachse nicht.
- **R4 — deterministischer Erstkontakt:** der Tool-Katalog muss ohne LLM sichtbar zu machen sein.
- **R5 — Deutsch/EU-tauglich, niedrige Einstiegshürde** für eine Privatperson (Agentowner,
  kein IT-Department).
- **R6 — neues Publikum:** ein Segment, das n8n und Claude Code noch nicht abdecken.

---

## 2. Gap-Analyse: Wer ist noch nicht bedient?

| Segment | heutiger Track | Lücke? |
|---|---|---|
| Low-Code-Automatisierer, self-host-affin | n8n | ✅ bedient |
| Terminal-/CLI-Nutzer | Claude Code | ✅ bedient |
| **No-Code-SaaS-Nutzer** (will weder hosten noch Terminal öffnen; klickt in einer Cloud-Oberfläche) | — | ❌ **größte Lücke** |
| **Chat-first-Nutzer** (nur ChatGPT/Claude.ai/Copilot-Chat, will gar nichts „bauen") | — | ❌ Lücke, aber heute **technisch blockiert** (siehe 3.3/3.4) |
| Microsoft-365-/Unternehmens-Nutzer | — | ❌ Lücke, aber anderes Kaufmodell (Tenant, Credits) |
| Python-/JS-Entwickler (SDK) | — | ⛔ bewusst kein Kurs (Genre-Entscheidung, s. o.) |

Die beiden bestehenden Tracks decken die *technischeren* Ränder des Agentowner-Spektrums ab.
Was fehlt, ist die Mitte: der Agentowner, der eine **gehostete No-Code-Oberfläche** erwartet —
Konto anlegen, klicken, fertig. Genau dieses Segment ist im DACH-Raum typischerweise bei
Make (und Zapier) zu Hause.

---

## 3. Kandidaten-Bewertung (gegen First-Party-Docs)

### 3.1 Make (AI Agents) — **Empfehlung für Track 3**

- **Agenten-Feature existiert und ist breit verfügbar.** Make AI Agents: „available now for
  all paid plans" (Release-Note 2026-01-19,
  <https://help.make.com/make-ai-agents-the-next-step-in-automation>). Die neue
  AI-Agents-App ist „currently available in open beta … available on all plans using Make's
  AI provider, with the option to connect your own AI provider on paid plans"
  (<https://help.make.com/meet-the-new-make-ai-agents-app>).
- **MCP-Anbindung existiert in beide Richtungen.** Agenten können Tools von externen
  MCP-Servern nutzen: „MCP tools connect AI agents to MCP servers to access additional tools"
  — Konfiguration je Agent, Tools einzeln zuschaltbar (Whitelist-Charakter → R3, R4)
  (<https://help.make.com/mcp-tools-for-ai-agents>). Die MCP-Client-App bietet neben OAuth
  ein Feld „API key / access token" für Server, die Credentials verlangen
  (<https://apps.make.com/c5ZhYquO55e90hoCJ0rzt>) → R2 voraussichtlich erfüllt,
  **im Spike zu verifizieren** (exakte Header-Semantik, Streamable-HTTP vs. SSE).
- **Robuster Fallback ohne MCP-Client:** Agent-Tools können normale Make-Szenarien sein
  (<https://help.make.com/tools-for-ai-agents>); ein Szenario mit HTTP-Modul + Bearer-Header
  entspricht 1:1 dem in `n8n/de/lessons/0001-connect.html` live verifizierten
  JSON-RPC-`tools/list`-Beweis. R2/R4 sind damit in jedem Fall erreichbar.
- **EU/DSGVO:** Make-Organisationen laufen in expliziten Zonen, u. a. `eu1.make.com` /
  `eu2.make.com` (<https://developers.make.com/api-documentation/getting-started/api-structure>);
  DSGVO-Selbstauskunft unter <https://www.make.com/en/privacy-and-gdpr> → R5.
- **Einstiegshürde:** SaaS-Konto, keine Installation, kein Terminal; bezahlter Einstiegsplan
  genügt laut Release-Note → R5.
- **Publikum:** genau das unbediente No-Code-SaaS-Segment; Make-UI ist englisch → die
  bewährte inverse Verbatim-Regel greift unverändert → R6.
- **Passung ans Kursmuster:** die 4-Arc-Sequenz mappt direkt (Verbinden = MCP-Verbindung
  bzw. Szenario-`tools/list`; Suchen = Agent + Tool; Beauftragen = `prepare_order` +
  Ablehnen-Drill; Verfolgen & Grenzen = Tool-Zuschaltung je Agent + Ausführungs-Logs — die
  neue App verspricht „full visibility into agent decision-making",
  <https://help.make.com/meet-the-new-make-ai-agents-app>).
- **Risiken / Spike-Fragen:** (a) akzeptiert die MCP-Verbindung den LYS-Endpunkt
  (Streamable HTTP) mit statischem Token, und in welchem Feld? (b) Open-Beta-Status der neuen
  App → Versions-/UI-Drift, also Live-Stempel-Pflicht wie gehabt; (c) welcher Plan genau für
  den Spike-Account nötig ist; (d) wo der Lernende nachliest, was der Agent wirklich tat
  (Log-Äquivalent zu n8ns Execution-Log / Claude Codes `Ctrl+O`).

### 3.2 Microsoft Copilot Studio — technisch machbar, aber falsche Einstiegshürde

- **MCP-Support ist da und ausgereift:** „Copilot Studio supports the Streamable transport
  type" (SSE seit August 2025 abgekündigt); Onboarding-Wizard mit Auth-Optionen **None /
  API key / OAuth 2.0**, wobei API key als **Header oder Query mit frei benennbarem Feld**
  konfigurierbar ist
  (<https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent>).
  → R2 voraussichtlich erfüllt (ob der Wert „Bearer …" enthalten darf, wäre Spike-Frage).
- Tools eines MCP-Servers werden einzeln dem Agenten hinzugefügt → Whitelist (R3)
  (<https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-components-to-agent>);
  Voraussetzung generative Orchestration
  (<https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp>).
- **Aber:** Bezahlmodell und Betriebsumfeld sind auf Organisationen zugeschnitten —
  Copilot Credits per Prepaid-Pack (25 000 Credits/Monat) oder Azure-Pay-as-you-go,
  Power-Platform-/Tenant-Kontext, Data-Policies über Power-Platform-Connectoren
  (<https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing>).
  Für den privaten Agentowner (R5) ist das die falsche Tür; der Kurs würde unweigerlich
  Richtung Unternehmens-IT driften.
- **Fazit:** starker Kandidat für einen späteren **„Business/M365"-Track**, falls
  LinkYourSkill dieses Segment strategisch will — nicht der nächste Schritt.

### 3.3 ChatGPT (Custom Connectors / Developer Mode) — heute blockiert

- Developer Mode bringt vollen MCP-Client-Support (read+write) für „Pro, Plus, Business,
  Enterprise, and Education accounts on the web"
  (<https://developers.openai.com/api/docs/guides/developer-mode>).
- **Auth-Optionen: nur OAuth, No Authentication oder Mixed** — kein statischer API-Key/
  Custom-Header (ebd.; MCP-Server-Guide erwartet OAuth 2.1 gemäß MCP-Autorisierungs-Spec:
  <https://developers.openai.com/api/docs/mcp>).
- Der LYS-MCP-Zugang ist statisch-Bearer (siehe Abschnitt 1) → **Auth-Mauer**, derselbe
  Blocker, wegen dem der zweite Builder-Track als Claude **Code** (CLI mit
  `--header "Authorization: Bearer …"`) und nicht als claude.ai-Connector gebaut wurde.
- **Fazit:** kein Kurs möglich, solange die Plattform kein OAuth 2.1 (+ Dynamic Client
  Registration) am MCP-Endpunkt anbietet. **Als Plattform-Abhängigkeit festhalten** — siehe
  Empfehlung.

### 3.4 Claude.ai / Claude Desktop (Custom Connectors) — heute blockiert

- Custom Connectors via Remote MCP sind auf allen Plänen verfügbar (Free/Pro/Max/Team/
  Enterprise; <https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp>).
- Auth: die MCP-Spec verlangt **OAuth 2.1** für geschützte Remote-Server; Claude implementiert
  genau das (PKCE etc.) (<https://claude.com/docs/connectors/building/authentication>).
  In der UI gibt es nur Server-URL + optional OAuth Client-ID/Secret — **kein Feld für einen
  statischen Bearer-Header** (bestätigt im offiziellen Tracker:
  <https://github.com/anthropics/claude-ai-mcp/issues/112>).
- Zusätzlich verbindet sich Claude aus Anthropics Cloud, nicht vom Gerät (Support-Artikel
  oben) — private/interne Endpunkte sind damit ohnehin unerreichbar.
- **Fazit:** identische Auth-Mauer wie ChatGPT; wird durch dieselbe Plattform-Maßnahme
  (OAuth am LYS-MCP) frei.

### 3.5 Zapier Agents — machbar, aber schwächer als Make für dieses Publikum

- Agent-Tools sind Zapier-App-Actions („Tools this agent can use" → *Add Tool*;
  <https://help.zapier.com/hc/en-us/articles/26028298697485-Use-actions-on-Zapier-Agents>).
- Beliebige HTTP-APIs gehen über Webhooks by Zapier / API by Zapier / API-Request-Actions
  (<https://help.zapier.com/hc/en-us/articles/44391646192397-Choosing-the-right-way-to-make-API-requests-in-Zapier>)
  — also R2 über den HTTP-Fallback, wie bei Make.
- **Kein MCP-Client für externe Server in Agents:** Zapier MCP ist die Gegenrichtung
  (Zapier-Actions werden KI-Clients als MCP-Server angeboten;
  <https://help.zapier.com/hc/en-us/articles/36265392843917-Use-Zapier-MCP-with-your-client>).
  Der „Tool-Katalog"-Moment (R4) wäre nur über den HTTP-Umweg erlebbar.
- US-zentriert, kein EU-Zonen-Angebot wie Make; Publikum überschneidet sich fast vollständig
  mit Make. **Fazit:** kein eigener Track; Make bedient dasselbe Segment besser (EU, MCP-Client).

### 3.6 Früh aussortiert (Repo-interne Gründe)

- **LangGraph / LangChain / OpenAI Agents SDK:** Entwickler-SDK-Genre = der bewusst
  verworfene `ai-agent`-Kurs; beide MISSIONs schließen „Plattform-Entwicklung" aus (R1 ⛔).
- **Dify / Flowise (self-hosted Open Source):** gleiche Zielgruppe wie n8n-Self-Hoster —
  kaum Publikumsgewinn (R6 ⛔).
- **Claude Desktop:** braucht für Bearer-MCP eine `npx mcp-remote`-Brücke, also doch wieder
  Terminal — das deckt der Claude-Code-Track bereits ab (R6 ⛔).

---

## 4. Empfehlung

1. **Track 3 = „Dein Agent in Make."** Schließt die größte Publikumslücke (No-Code-SaaS,
   kein Hosting, kein Terminal — die Mitte des Agentowner-Spektrums), erfüllt alle sechs
   Anforderungen mit dem geringsten Neu-Aufwand: gleiche 4-Arc-Sequenz, gleiche fünf Tools,
   gleiche Leitachse, inverse Verbatim-Regel unverändert, EU-Zonen als DSGVO-Plus gegenüber
   jedem US-SaaS. Einziger struktureller Unterschied zur n8n-Vorlage: die Kontroll-Story
   heißt hier „Tools je Agent zuschalten" statt Node-Whitelist. **Wie immer: Spike vor dem
   Autorieren** (Kernfragen in 3.1; Protokoll analog `n8n`-/`claude-code`-Spike).
2. **Als Plattform-Abhängigkeit notieren, nicht als Kurs:** Sobald der LYS-MCP-Endpunkt
   **OAuth 2.1 + Dynamic Client Registration** spricht, werden ChatGPT- und
   claude.ai-Connectors frei — das wäre der reichweitenstärkste denkbare Track
   („Dein Agent in ChatGPT / in Claude"), heute aber hart blockiert (3.3, 3.4). Diese
   Abhängigkeit gehört ins Plattform-Backlog, nicht in lys-docs.
3. **Copilot Studio zurückstellen**, bis ein Business-/M365-Segment strategisch gewollt ist —
   technisch bewiesen machbar (MCP + API-Key-Header), aber Tenant-/Credits-Einstieg passt
   nicht zum privaten Agentowner der bisherigen Kurse.

---

## Quellen

**Repo (Ist-Stand):** `README.md` · `index.html` · `RESOURCES.md` ·
`n8n/de/MISSION.md` · `claude-code/de/MISSION.md` ·
`n8n/learning-records/0001-deliberate-altitude-split.md` ·
`claude-code/learning-records/0001-deliberate-altitude-split.md` ·
`agentowner/learning-records/0001-agent-acts-you-approve.md` ·
`n8n/de/lessons/0001-connect.html` · `claude-code/de/lessons/0001-connect.html`

**Extern (First-Party, abgerufen 2026-07-09):**

- Make: <https://help.make.com/make-ai-agents-the-next-step-in-automation> ·
  <https://help.make.com/meet-the-new-make-ai-agents-app> ·
  <https://help.make.com/mcp-tools-for-ai-agents> ·
  <https://help.make.com/tools-for-ai-agents> ·
  <https://apps.make.com/c5ZhYquO55e90hoCJ0rzt> (MCP Client) ·
  <https://developers.make.com/api-documentation/getting-started/api-structure> ·
  <https://www.make.com/en/privacy-and-gdpr>
- Microsoft Copilot Studio:
  <https://learn.microsoft.com/en-us/microsoft-copilot-studio/agent-extend-action-mcp> ·
  <https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-existing-server-to-agent> ·
  <https://learn.microsoft.com/en-us/microsoft-copilot-studio/mcp-add-components-to-agent> ·
  <https://learn.microsoft.com/en-us/microsoft-copilot-studio/billing-licensing>
- OpenAI/ChatGPT: <https://developers.openai.com/api/docs/guides/developer-mode> ·
  <https://developers.openai.com/api/docs/mcp>
- Anthropic/Claude: <https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp> ·
  <https://claude.com/docs/connectors/building/authentication> ·
  <https://github.com/anthropics/claude-ai-mcp/issues/112>
- Zapier: <https://help.zapier.com/hc/en-us/articles/26028298697485-Use-actions-on-Zapier-Agents> ·
  <https://help.zapier.com/hc/en-us/articles/44391646192397-Choosing-the-right-way-to-make-API-requests-in-Zapier> ·
  <https://help.zapier.com/hc/en-us/articles/36265392843917-Use-Zapier-MCP-with-your-client>
