# LinkYourSkill — Lern-Ressourcen

> Geteilte, kuratierte Quellen für alle Personas-Kurse (Skillanbieter zuerst, dann Customer …).
> **v1 ist docs-only**: Lektionen werden ausschließlich gegen die folgenden Dokumente geprüft,
> nie gegen parametrisches Wissen und (in v1) nicht gegen die Live-App.

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

## Wisdom (Communities)

## Gaps

- Noch keine kuratierte Community erfasst.
- Offizieller Support-Kanal (für den `ask-teacher`-Block der Lektionen) noch nicht bestätigt — Platzhalter „LinkYourSkill-Support".

## Hinweise

- Interne Dev-Artefakte (`e2e.sh`, Seed-Logins, Migrationsnummern, DB-Spalten) gehören **nicht**
  in nutzerseitige Lektionen. Übersetzen, nicht transkribieren.
- Jede Lektion trägt einen Provenance-Stempel (`grounded against: <doc> @ <Datum>`).
