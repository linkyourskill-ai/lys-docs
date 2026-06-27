# LinkYourSkill — Lern-Ressourcen

> Geteilte, kuratierte Quellen für alle Personas-Kurse (Skillanbieter zuerst, dann Customer …).
> **v1 ist docs-only**: Lektionen werden ausschließlich gegen die folgenden Dokumente geprüft,
> nie gegen parametrisches Wissen und (in v1) nicht gegen die Live-App.

## Wissen (Quellen, gegen die Lektionen geprüft werden)

- [Skillanbieter Journey — `docs/journeys/skillanbieter.md`](../linkyourskill.ai/docs/journeys/skillanbieter.md)
  Kanonischer Ablauf: Klassifizierung → Skill anlegen → Aufträge → Ausführung → Einnahmen.
  Use for: die faktische Achse jeder Skillanbieter-Lektion.
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
  Wie Skills öffentlich erscheinen und von KI-Agenten durchsucht werden.
  Use for: Primärquelle von „Gefunden werden".
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
