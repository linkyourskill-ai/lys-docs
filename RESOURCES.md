# LinkYourSkill — Lern-Ressourcen

> Geteilte, kuratierte Quellen für alle Personas-Kurse (Skillanbieter, Customer, Agentowner …).
> **v1 ist docs-only**: Lektionen werden ausschließlich gegen die folgenden Dokumente geprüft,
> nie gegen parametrisches Wissen und (in v1) nicht gegen die Live-App.
> Einzige, bewusst begrenzte Ausnahme: die beiden Builder-Tracks (n8n und Claude Code)
> — siehe „Externe Quellen (nur Builder-Tracks)" unten.

## Wissen (Quellen, gegen die Lektionen geprüft werden)

- [Skillanbieter Journey — `docs/journeys/skillanbieter.md`](../linkyourskill.ai/docs/journeys/skillanbieter.md)
  Kanonischer Ablauf: Klassifizierung → Skill anlegen → Aufträge → Ausführung → Einnahmen.
  Use for: die faktische Achse jeder Skillanbieter-Lektion.
- [Customer Journey — `docs/journeys/customer.md`](../linkyourskill.ai/docs/journeys/customer.md)
  Kanonischer Ablauf des direkten Nachfrage-Wegs: Marktplatz durchsuchen → beauftragen →
  sicher bezahlen → Aufträge verfolgen & bewerten.
  Use for: die faktische Achse jeder Kunden-Lektion. Achtung Altitude: „held until completed"
  ist Onboarding-Copy, nicht der Zahlschritt — Zahlung nur als „sicher über die Plattform"
  lehren, ohne Treuhand-Garantie.
- [Agentowner Journey — `docs/journeys/agentowner.md`](../linkyourskill.ai/docs/journeys/agentowner.md)
  Kanonischer Ablauf des agenten-vermittelten Nachfrage-Wegs: Agenten verstehen → Token →
  Grenzen (Auftrags-Limits) → Aufträge freigeben → Rechnungen bezahlen → konform bleiben.
  Use for: die faktische Achse jeder Agentowner-Lektion. Achtung Altitude: Token nur als
  „Schlüssel" lehren (kein MCP/Bearer/curl); Kanal als „Messenger" statt Produktname; Zahlung
  nach Abschluss, sicher über die Plattform, ohne Treuhand-Garantie.
- [AI Domain — Skill Quality Standards — `docs/ai-domain-skill-standards.md`](../linkyourskill.ai/docs/ai-domain-skill-standards.md)
  Was einen Skill auffindbar und hochwertig macht: Name, Beschreibung (WAS + WANN),
  Kategorie, Tags, Einsatzgebiet; AI-Challenge-Kriterien (vage, fehlender Scope …).
  Use for: die Handwerks-Substanz von „Gefunden werden".
- [Project Context — `project-context.md`](../linkyourskill.ai/project-context.md)
  Plattform-Überblick, Personas, agentenseitige Oberflächen (REST, MCP, SDK).
  Use for: Einordnung und Begriffe.
- [Docs-Hub — `docs/index.md`](../linkyourskill.ai/docs/index.md)
  Einstieg in die Tiefendokumente (Architektur, Frontend, API-Referenz).

## Nutzer-Oberflächen (Primärquellen in den Lektionen)

- **Öffentlicher Marktplatz — `/skills`**
  Wie Skills öffentlich erscheinen, von KI-Agenten durchsucht und von Kunden durchsucht,
  gefiltert und sortiert werden.
  Use for: Primärquelle von „Gefunden werden" (Skillanbieter) und „Auf dem Marktplatz finden" (Kunde).
- **In-App: Meine Skills → Neuen Skill erstellen**
  Der echte Anlegen-Flow, in dem Lernende handeln.

## Externe Quellen (nur Builder-Tracks)

Die Builder-Tracks „Dein Agent in n8n" und „Dein Agent in Claude Code" sind die einzige,
bewusst begrenzte Ausnahme von docs-only:

- [MCP Integration (de)](https://app.linkyourskill.ai/de/docs/mcp-integration)
  ([en](https://app.linkyourskill.ai/en/docs/mcp-integration)) — Primärquelle **beider**
  Builder-Tracks: Endpunkt, Tools, Token-Scopes, Limits.
- [n8n-Dokumentation — docs.n8n.io](https://docs.n8n.io/) — **(nur n8n-Kurs)** sanktionierte
  externe Quelle (Nodes: „HTTP Request", „AI Agent", „MCP Client Tool"). n8n-UI-Strings bleiben
  auch in deutscher Kurs-Copy englisch, damit Lernende sie in der n8n-Oberfläche wortgleich
  wiederfinden.
- [Claude Code — docs.claude.com/claude-code](https://docs.claude.com/claude-code) — **(nur
  Claude-Code-Kurs)** sanktionierte externe Quelle (MCP-Server verbinden, Berechtigungen/Modi,
  Slash-Befehle). Claude-Code-CLI-Strings (`claude mcp add`, `/mcp`, `/permissions`,
  `mcp__lys__…`) bleiben auch in deutscher Kurs-Copy englisch, damit Lernende sie im Terminal
  wortgleich wiederfinden.
- **Live-Verifikation zusätzlich zu docs:** Jede Builder-Lektion trägt einen Live-Stempel —
  `verified live against n8n <X.Y> @ <Datum>` bzw. `verified live against Claude Code <X.Y> @ <Datum>`.
  Klickwege/Befehle, Fehlertexte und Statuswerte sind in einer echten Instanz gegen die
  Plattform verifiziert.

Für alle anderen Kurse gilt weiterhin docs-only.

## Wisdom (Communities)

## Gaps

- Noch keine kuratierte Community erfasst.
- Offizieller Support-Kanal (für den `ask-teacher`-Block der Lektionen) noch nicht bestätigt — Platzhalter „LinkYourSkill-Support".

## Hinweise

- Interne Dev-Artefakte (`e2e.sh`, Seed-Logins, Migrationsnummern, DB-Spalten) gehören **nicht**
  in nutzerseitige Lektionen. Übersetzen, nicht transkribieren.
- Jede Lektion trägt einen Provenance-Stempel (`grounded against: <doc> @ <Datum>`).
