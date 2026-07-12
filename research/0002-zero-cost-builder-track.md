# Research: Der Null-Kosten-Builder-Track (Free-only-Bedingung für Track 3)

> Status: **Research-Notiz** (keine Kurs-Entscheidung, nichts committet/geplant).
> Folgt auf `research/0001-third-builder-track.md`; Ist-Stand, Gap-Analyse und die
> Anforderungen **R1–R6** gelten unverändert und werden hier nicht wiederholt.
> Methode: ausschließlich **First-Party-Dokumentation** (Hersteller-Pricing, -Docs,
> -Changelogs; keine Blog-Sekundärquellen).
> Recherchiert: **2026-07-09**. Alle externen Quellen an diesem Datum abgerufen.

---

## 1. Fragestellung und neue Bedingung

Der Grill zum settled Plan („Track 3 = Dein Agent in Make") hat eine harte Bedingung
ergänzt, die 0001 nicht geprüft hat:

> **NK — Null-Kosten:** Der Lernende zahlt **nichts**, Ende-zu-Ende. Das heißt:
> (a) dauerhafter Free-Plan der Plattform (kein ablaufender Trial, keine Kreditkarte)
> **und** (b) ein kostenloses LLM-Gehirn (kein bezahlter API-Key, kein Abo).

Zur Einordnung: **beide bestehenden Tracks erfüllen NK heute nicht.** n8n braucht einen
Chat-Model-API-Key (in den Lektionen als bezahlter Key gedacht), Claude Code braucht
Claude-Abo oder API-Key. Ein echt kostenloser Track wäre also zusätzlich ein
Differenzierer („der kostenlose Einstieg"). Bekanntes Risiko aus 0001: die
GA-Release-Note der klassischen Make-Agents sagt „available now for all paid plans" —
nur die neue AI-Agents-App verspricht „all plans using Make's AI provider". Wenn auf
Makes Free-Plan kein Agent läuft, wird der Track geparkt (**Gate 0**).

Der technische Kern bleibt: Der Agent muss den LYS-MCP-Endpunkt
(`linkyourskill.ai/mcp`, HTTP-Streamable, statischer Bearer-Token im
Authorization-Header) erreichen — ersatzweise als schlichter HTTP-POST
(JSON-RPC `tools/list`), wie in n8n L1 bewiesen.

---

## 2. Kandidaten-Bewertung (gegen First-Party-Docs)

### Überblick

| Kandidat | Free-Plan dauerhaft? | Agent + MCP/HTTP im Free? | Statischer Bearer? | Freies LLM-Gehirn? | NK-Verdikt | R6 (neues Publikum)? |
|---|---|---|---|---|---|---|
| Make Free | ✅ (1.000 Credits/Mo) | ✅ laut Docs (Beta) | Feld vorhanden (Spike) | ✅ Makes AI-Provider | ✅ aus Docs | ✅ No-Code-SaaS |
| Mistral Le Chat / Vibe Free | ✅ (keine Kreditkarte) | ✅ Custom-MCP-Connectors | ✅ dokumentiert | ✅ Mistral-Modelle inklusive | ✅✅ voll | ✅ Chat-first (bisher „blockiert") |
| Google Gemini CLI | ✅ (persönl. Google-Konto) | ✅ MCP nativ | ✅ dokumentiert | ✅ 1.000 Req/Tag | ✅✅ voll | ⛔ Terminal = Claude-Code-Publikum |
| Dify Cloud Sandbox | ✅ Plattform, aber… | ✅ MCP mit Custom Headers | ✅ dokumentiert | ⚠️ nur 200 One-time-Credits | ⚠️ nur mit Fremd-Key | ⛔ (0001 §3.6) |
| Zapier Agents Free | ✅ (400 Activities/Mo) | ⛔ Webhook-POST = paid | — | (eigenes Modell) | ⛔ | ⛔ (0001 §3.5) |
| ChatGPT Free | ✅ | ⛔ Developer Mode = paid | ⛔ nur OAuth | ✅ | ⛔ | — |
| claude.ai Free | ✅ | ✅ 1 Custom Connector, aber… | ⛔ nur OAuth | ✅ | ⛔ | — |
| n8n self-hosted + Gemini-Free-Key | ✅ (Community Edition) | ✅ (bewiesen, Track 1) | ✅ (bewiesen) | ✅ Gemini-API-Free-Tier | ✅ | ⛔ kein *neuer* Track — macht Track 1 kostenlos |

### 2.1 Make Free-Plan — **Gate 0 sieht aus den Docs grün aus**

- **Free-Plan-Inhalt:** „Up to 1,000 credits/mo", maximal **2 aktive Szenarien**,
  „15-minute minimum interval between runs"; visueller Builder, 3000+ Apps, Router &
  Filter inklusive (<https://www.make.com/en/pricing>). Eine Kreditkartenpflicht wird
  auf der Pricing-Seite nicht genannt.
- **AI Agents auf dem Free-Plan:** Die Pricing-Seite listet „Make AI Agents (beta)"
  mit „Make's AI Provider **(all plans)**" — also inkl. Free
  (<https://www.make.com/en/pricing>). Der Credits-Artikel bestätigt: „Users on all
  plans can use Make's AI provider", nur eigene Provider-Verbindungen (OpenAI,
  Anthropic Claude) sind Paid-Plänen vorbehalten
  (<https://help.make.com/credit-usage-for-ai-agents>). Damit löst sich die Spannung
  aus 0001: die GA-Note („all paid plans") betraf die klassischen Agents; die **neue
  AI-Agents-App** läuft laut
  <https://help.make.com/meet-the-new-make-ai-agents-app> „on all plans using Make's
  AI provider" — Status **Open Beta**.
- **Freies Gehirn:** Makes eingebauter AI-Provider ist das Gehirn; er wird nicht extra
  bezahlt, sondern **in Credits abgerechnet**: Agent-Lauf = „1 credit per operation +
  credits based on AI tokens" (<https://help.make.com/credit-usage-for-ai-agents>).
  Das Monatsbudget von 1.000 Credits ist also zugleich das Token-Budget — für einen
  4-Lektionen-Kurs plausibel ausreichend, aber **im Spike zu messen** (Credit-Burn pro
  Lektion, Puffer für Wiederholer).
- **MCP-Tools:** Der MCP-Tools-Artikel nennt **keine Plan-Beschränkung**
  (<https://help.make.com/mcp-tools-for-ai-agents>); das Token-Feld der
  MCP-Client-App ist in 0001 §3.1 belegt.
- **NK-Verdikt: ✅ aus den Docs.** **Gate 0 = grün auf Papier.** Live-Spike bleibt
  Pflicht: (a) MCP-Verbindung mit statischem Bearer **auf einem Free-Konto**,
  (b) Credit-Verbrauch je Lektion, (c) Beta-Drift („functionality and pricing may
  evolve") — der Free-Zugang zur Beta-App ist eine **Beta-Zusage, kein
  Pricing-Versprechen**.

### 2.2 Mistral Le Chat / Vibe (Free) — **der Fund dieser Recherche**

0001 hatte das Chat-first-Segment als „technisch blockiert" markiert — geprüft wurden
aber nur ChatGPT und claude.ai. **Le Chat wurde nie geprüft, und es erfüllt alles:**

- **Custom-MCP-Connectors existieren und können statisch-Bearer:** Pflichtfelder sind
  Connector-Name und „Server URL: the full URL of your MCP-compatible server";
  Transport: „Streamable HTTP is the current standard"; Auth-Optionen: No Auth,
  **„HTTP Bearer Token / Basic Auth: for servers that require credentials in the
  Authorization header"**, OAuth 2.1 mit DCR
  (<https://docs.mistral.ai/le-chat/knowledge-integrations/connectors/mcp-connectors>).
  → **R2 dokumentiert erfüllt** — als einzige Chat-Oberfläche am Markt.
- **Free-Plan:** Die Ankündigung (2025-09-02) sagt wörtlich „Everything available on
  the Free plan" — Connectors inkl. eigener MCP-Server für alle Le-Chat-Nutzer, ohne
  Kreditkarte (<https://mistral.ai/news/le-chat-mcp-connectors-memories/>). Die
  Docs bestätigen indirekt: Custom Connectors sind „an administrator-only feature. On
  **Free**, Pro, and Student plans, the account owner is the administrator by default"
  (MCP-Connectors-Doc, s. o.) — der Free-Plan ist also ausdrücklich vorgesehen.
  Pricing heute: Free = „Limited messages and web searches", „100+ connectors";
  Pro $14.99/Mo (<https://mistral.ai/pricing>). Konkrete Tageslimits nennt Mistral
  nicht — Spike-Frage, ob das Limit eine Lektion durchhält.
- **Freies Gehirn: eingebaut.** Das Modell ist Mistrals eigenes („Mistral's SOTA
  models" im Free-Plan, Pricing s. o.) — kein API-Key, kein Abo. → NK **vollständig**.
- **Kontroll-Oberfläche (R3):** je Funktion ein „Always allow"-Toggle; Docs
  unterscheiden Read-Funktionen (geringes Risiko) von Write-Funktionen — d. h.
  Bestätigungsdialog vor Aktionen, pro Funktion vorab autorisierbar
  (MCP-Connectors-Doc, s. o.). Das ist dieselbe Story wie Claude Codes
  Erlaubnis-Dialog, nur im Chat.
- **Deterministischer Erstkontakt (R4):** Die Funktionsliste des verbundenen Servers
  erscheint in den Connector-Einstellungen (dort werden die Toggles gesetzt) — ein
  Tool-Katalog-Moment ohne LLM. **Im Spike zu verifizieren**, ob die Liste sofort nach
  dem Verbinden sichtbar ist.
- **EU (R5):** Mistral ist ein EU-Unternehmen; Training-Opt-out dokumentiert
  (<https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training>).
  DSGVO-seitig die stärkste Position aller Kandidaten.
- **Publikum (R6):** Chat-first-Nutzer — exakt die Lücke aus 0001 §2, die dort als
  blockiert galt. Kein Overlap mit n8n (Low-Code) oder Claude Code (Terminal).
  **Maximaler Publikumsgewinn.**
- **Risiken:** (a) **Rebrand-Drift:** Le Chat heißt seit 2026-06-05 **Vibe** (Modi
  Vibe Work / Vibe Code / Vibe Chat); „Same URL, same login" (chat.mistral.ai),
  „Your account, plan, conversations, and saved content all move with you"
  (<https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe>). Die
  Connector-Docs liegen noch unter `le-chat`-Pfaden und beschreiben Custom Connectors
  als Teil von „Work" — ob der Free-Plan den Work-Modus voll umfasst und wie die UI
  nach dem Rebrand aussieht: **Spike-Fragen**; Live-Stempel-Pflicht wie gehabt.
  (b) Free-Limits sind unbeziffert („Limited messages"). (c) Kein separates
  Agent-Objekt wie in Make/n8n — der „Agent" ist die Konversation selbst; die
  Arc-Sequenz muss darauf gemappt werden (Verbinden = Connector anlegen +
  Funktionsliste; Suchen/Beauftragen = Chat; Grenzen = Toggles + Ablehnen-Drill).

### 2.3 Google Gemini CLI — technisch perfekt, aber falsches Publikum

- **Frei mit persönlichem Google-Konto:** „60 requests/min and 1,000 requests/day",
  Open Source unter Apache 2.0 (<https://github.com/google-gemini/gemini-cli>).
  Keine Kreditkarte. Das ist die großzügigste freie Quote aller Kandidaten — aber
  einseitig von Google änderbar (Adoption-Förderung, kein Vertragsversprechen).
- **MCP vollständig, inkl. Bearer:** Konfiguration in `settings.json` mit `httpUrl`
  (Streamable HTTP) und `headers` — „Custom HTTP headers when using `url` or
  `httpUrl`", Beispiel im Doc: `"Authorization": "Bearer your-api-token"`. Whitelist
  über `includeTools` („only the tools listed here will be available") / `excludeTools`;
  `/mcp` zeigt Server, „Available tools" und Verbindungsstatus — deterministischer
  Katalog wie Claude Codes `/mcp`
  (<https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md>).
  → R2, R3, R4 komplett dokumentiert erfüllt.
- **Aber R6 ⛔:** Terminal-Werkbank = dasselbe Publikum wie der Claude-Code-Track,
  bis hin zur identischen Lektionsstruktur. Ein eigener Track kannibalisiert statt zu
  erweitern. **Kein Track** — aber als Wissen festhalten: Gemini CLI ist der
  **Null-Kosten-Terminal-Pfad**, falls je ein Lernender im Claude-Code-Track am Abo
  scheitert.

### 2.4 Dify Cloud Sandbox — Plattform frei, Gehirn nicht

- **Sandbox-Plan:** „200 message credits" (Modelle von OpenAI, Anthropic, Gemini u. a.),
  5 Apps, 1 Team-Member (<https://dify.ai/pricing>). Die Credits sind eine
  **einmalige** Probe-Zuteilung; danach „option to switch to your own API key" (ebd.).
  NK nur erreichbar, wenn der Lernende zusätzlich einen **Gemini-Free-Key** (s. 2.7)
  einhängt — zwei Anbieter-Konten für einen Einsteiger-Track.
- **MCP mit Bearer dokumentiert:** externe MCP-Server (nur HTTP-Transport) mit
  „Custom headers: … Commonly used for servers that authenticate with a static token
  or API key (e.g., `Authorization: Bearer <token>`)"
  (<https://docs.dify.ai/en/cloud/use-dify/build/mcp>). Technisch also machbar.
- **R5-Minus:** In den geprüften Cloud-Docs ist **keine EU-Hosting-Aussage**
  auffindbar (geprüft: <https://docs.dify.ai/getting-started/cloud>,
  <https://docs.dify.ai/en/use-dify/workspace/subscription-management>) — gegenüber
  Makes EU-Zonen und Mistrals EU-Sitz ein klarer Nachteil.
- **R6 ⛔ bleibt** (0001 §3.6: gleiche Zielgruppe wie n8n). **Kein Track.**

### 2.5 Zapier Agents Free — an R2 gescheitert

- Free-Plan: „up to 400 activities per month" für Agents; Tests zählen aufs Kontingent
  (<https://help.zapier.com/hc/en-us/articles/26559132765325-How-is-Zapier-Agents-usage-measured>).
- **Aber:** Webhooks **senden** (der nötige JSON-RPC-POST) ist laut Plan-Tabelle des
  Artikels auf dem Free-Plan **nicht verfügbar** — nur Professional/Team/Enterprise
  (<https://help.zapier.com/hc/en-us/articles/8496326446989-Send-webhooks-in-Zaps>).
  Kein MCP-Client für externe Server in Agents (0001 §3.5). → R2 unter NK ⛔.
  **Raus.**

### 2.6 Re-Check der geparkten Chat-Oberflächen — beide weiter blockiert

- **ChatGPT Free:** Developer Mode (voller MCP-Client) bleibt „Pro, Plus, Business,
  Enterprise, and Education accounts on the web" — Free ausgeschlossen; Auth weiterhin
  nur OAuth / No Auth / Mixed, kein statischer Header
  (<https://developers.openai.com/api/docs/guides/developer-mode>). Unverändert ⛔.
- **claude.ai Free:** „Custom connectors using remote MCP are available … for users on
  Free, Pro, Max, Team, and Enterprise plans. **Free users are limited to one custom
  connector.**" Auth weiterhin nur OAuth (Advanced Settings = OAuth Client ID/Secret)
  (<https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp>).
  Die OAuth-Mauer aus 0001 §3.4 steht. **Neues Detail fürs Plattform-Backlog:** sobald
  der LYS-Endpunkt OAuth 2.1 spricht, reicht schon der claude.ai-**Free**-Plan für
  genau einen Connector — LYS wäre der eine.

### 2.7 Die Free-Variante der bestehenden Tracks — Track 1 ist fast kostenlos

Die ehrlichste Alternative zu einem neuen Track: **Track 1 (n8n) kostenlos machen.**

- **Plattform:** n8n self-hosted ist als Community Edition frei („Without a license
  key, n8n runs as the free Community edition",
  <https://docs.n8n.io/hosting/community-edition-features/>; Sustainable Use License:
  frei für interne/persönliche Zwecke, <https://docs.n8n.io/sustainable-use-license/>).
  Der Track dokumentiert Self-Hosting bereits als Option.
- **Freies Gehirn:** Die Gemini-API hat einen echten Free-Tier — diverse
  Flash-Modelle sind „Free of charge" für Input und Output; Zweck: „For developers
  and small projects getting started with the Gemini API"
  (<https://ai.google.dev/gemini-api/docs/pricing>). Konkrete RPM/RPD-Werte zeigt
  Google nur noch im AI-Studio-Dashboard
  (<https://ai.google.dev/gemini-api/docs/rate-limits>) — Spike-Notiz statt
  Kurs-Zitat. **Privacy-Caveat, für EU-Lernende erwähnenswert:** im Free-Tier werden
  Inhalte laut Pricing-Seite zur Produktverbesserung genutzt.
- **n8n-Anbindung existiert first-party:** Google Gemini Chat Model Node
  (<https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/>)
  mit Google-AI-Credential — API-Key aus Google AI Studio
  (<https://docs.n8n.io/integrations/builtin/credentials/googleai/>).
- **Einordnung:** Das ist **kein neuer Track** (R6 ⛔ per Definition), sondern ein
  kleiner Doku-Baustein: „Kostenlos starten: Gemini-Free-Key statt bezahltem
  OpenAI-Key" im bestehenden n8n-Track. Aufwand minimal, Wirkung: der Satz „der
  kostenlose Einstieg" wird schon heute wahr — unabhängig von Track 3.

---

## 3. Empfehlung

1. **Gate 0 für Make: aus den Docs grün — Spike fortsetzen.** Pricing-Seite und
   Credits-Artikel sagen übereinstimmend: die neue AI-Agents-App läuft mit Makes
   eigenem AI-Provider **auf allen Plänen**, der Free-Plan bringt 1.000 Credits/Monat
   mit (2.1). Der settled Plan „Track 3 = Dein Agent in Make" hält also auch unter
   NK — auf Papier. Der Live-Spike muss drei Dinge zeigen: Bearer-MCP auf einem
   Free-Konto, Credit-Burn pro Lektion (Budget-Deckel!), Beta-Stabilität.
2. **Mistral Le Chat / Vibe als dokumentierten Fallback und Track-4-Kandidaten
   festhalten.** Es ist die **einzige** gefundene End-User-Oberfläche, die NK
   vollständig erfüllt (Free-Plan ohne Karte, Modell inklusive) **und** Custom-MCP
   mit statischem Bearer-Header first-party dokumentiert (2.2) **und** ein neues
   Publikum erschließt — das Chat-first-Segment, das 0001 fälschlich für komplett
   blockiert hielt, weil nur ChatGPT/claude.ai geprüft wurden. EU-Firma als
   DSGVO-Plus obendrauf. Fällt der Make-Spike rot aus, wird das hier Track 3;
   andernfalls ist es der natürliche Track 4 („der kostenlose Einstieg").
   Vor dem Autorieren: eigener Spike (Free-Konto, Funktionsliste als R4-Moment,
   Vibe-Rebrand-UI, Tageslimits).
3. **Track 1 nebenbei kostenlos machen:** den Gemini-Free-Key als dokumentierte
   Gehirn-Option in den n8n-Track aufnehmen (2.7) — kleiner Eingriff, kein neuer
   Kurs, und das Kostenargument gilt sofort. Privacy-Hinweis (Free-Tier-Daten) gehört
   dazu.
4. **Gemini CLI nicht als Track bauen** (R6-Kollision mit Claude Code), aber als
   Null-Kosten-Terminal-Wissen ablegen (2.3). **Dify und Zapier bleiben raus**
   (2.4, 2.5). Die Plattform-Abhängigkeit aus 0001 (OAuth 2.1 am LYS-MCP öffnet
   ChatGPT/claude.ai) bleibt bestehen — verschärft um das Detail, dass claude.ai
   schon im Free-Plan einen Custom Connector erlaubt (2.6).

**Stabilitäts-Einschätzung der Free-Tiers:** Mistral Free = Produktstrategie eines
Consumer-Angebots (stabil, aber Limits unbeziffert); Make Free = stabiler Pricing-Plan,
doch der Agent-Zugang hängt an einer **Open Beta**; Gemini (CLI wie API) = großzügig,
aber einseitig änderbares Förder-Kontingent; Dify Sandbox = Probe-Charakter
(One-time-Credits). Für Kurs-Copy heißt das: Zahlen und Plan-Zusagen nur mit
Live-Stempel, wie in beiden bestehenden Tracks.

---

## Quellen

**Repo (Ist-Stand):** `research/0001-third-builder-track.md` (R1–R6, Gap-Analyse,
Make-Empfehlung) · `n8n/de/lessons/0001-connect.html` (HTTP-POST-`tools/list`-Beweis)

**Extern (First-Party, abgerufen 2026-07-09):**

- Make: <https://www.make.com/en/pricing> ·
  <https://help.make.com/credit-usage-for-ai-agents> ·
  <https://help.make.com/meet-the-new-make-ai-agents-app> ·
  <https://help.make.com/mcp-tools-for-ai-agents>
- Mistral: <https://mistral.ai/news/le-chat-mcp-connectors-memories/> ·
  <https://docs.mistral.ai/le-chat/knowledge-integrations/connectors/mcp-connectors> ·
  <https://mistral.ai/pricing> ·
  <https://help.mistral.ai/en/articles/682992-le-chat-is-now-vibe> ·
  <https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training>
- Google Gemini CLI: <https://github.com/google-gemini/gemini-cli> ·
  <https://github.com/google-gemini/gemini-cli/blob/main/docs/tools/mcp-server.md>
- Google Gemini API: <https://ai.google.dev/gemini-api/docs/pricing> ·
  <https://ai.google.dev/gemini-api/docs/rate-limits>
- Dify: <https://dify.ai/pricing> ·
  <https://docs.dify.ai/en/cloud/use-dify/build/mcp> ·
  <https://docs.dify.ai/getting-started/cloud> ·
  <https://docs.dify.ai/en/use-dify/workspace/subscription-management>
- Zapier: <https://help.zapier.com/hc/en-us/articles/26559132765325-How-is-Zapier-Agents-usage-measured> ·
  <https://help.zapier.com/hc/en-us/articles/8496326446989-Send-webhooks-in-Zaps>
- OpenAI/ChatGPT: <https://developers.openai.com/api/docs/guides/developer-mode>
- Anthropic/Claude: <https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp>
- n8n: <https://docs.n8n.io/hosting/community-edition-features/> ·
  <https://docs.n8n.io/sustainable-use-license/> ·
  <https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatgooglegemini/> ·
  <https://docs.n8n.io/integrations/builtin/credentials/googleai/>
