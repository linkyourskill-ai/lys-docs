# Claude-Code-Kurs: Der zweite Builder-Track — Terminal statt Canvas

Der Kurs „Dein Agent in Claude Code" ist die **Terminal-Variante** von „Dein Agent in n8n"
(siehe `../../n8n/learning-records/0001-deliberate-altitude-split.md`). Er teilt dessen
Grundentscheidung — ein bewusster Altitude-Bruch, kein vierter Persona: Der Lernende ist
derselbe **Agentowner im Builder-Mode**, nur die Werkbank ist eine andere. Der Supervisor-Kurs
bleibt unberührt auf der „Schlüssel"-Höhe; MCP, Bearer und CLI leben ausschließlich in den
Builder-Tracks. Zwei Tracks, gleiche Fakten, gleiche Leitachse: „Dein Agent handelt — du behältst
die Kontrolle."

Warum überhaupt ein **zweiter** Builder-Track, wenn n8n den Bau schon lehrt? Weil Claude Code
etwas hat, das n8n nicht hat, und das genau die Leitachse trägt:

## Das tragende Argument: der eingebaute Erlaubnis-Dialog

In n8n kam die Kontrolle aus zwei Quellen, die der Lernende selbst verdrahten musste (Tool-Whitelist
im Node) bzw. nachgelagert einholte (Freigabe im Messenger). In Claude Code fragt das Werkzeug
**von sich aus** vor jedem Tool-Aufruf: „Do you want to proceed?" Diese native Nachfrage *ist* die
Kontrolle — sie fängt einen Auftrag ab, **bevor** er echt wird. Das macht den Kurs nicht redundant,
sondern zu einer eigenständigen, stärkeren Erzählung derselben Leitidee.

Kehrseite und darum **die Kernwarnung des Kurses**: Der `⏵⏵`-Auto-Modus schaltet genau diesen
Dialog ab (live im Spike beobachtet — die erste Suche lief ohne Nachfrage durch). L2 und L4 lehren
daher ausdrücklich, im Standard-Modus zu bleiben; Auto-Modus ist das Anti-Muster, vor dem der Kurs warnt.

## Arc-Sequenz (Spiegel von n8n)

1. **Verbinden** — deterministischer Beweis zuerst: `claude mcp add --transport http` + `/mcp`
   zeigt den Katalog ohne LLM; der eigene Token stammt aus dem Agentowner-Kurs.
2. **Dein Agent sucht** — erster Erlaubnis-Dialog; Mitlesen per `Ctrl+O`; Auto-Modus-Warnung.
3. **Dein Agent beauftragt** — das **Zwei-Netze-Finale** (s. u.).
4. **Verfolgen & Grenzen** — Status/Verlauf lesen; Whitelist über Dialog + `/permissions`.

## Entscheidungen im Detail

- **Zwei Netze statt einem.** n8ns Finale hatte ein Netz (die Freigabe fängt den echten Auftrag).
  Claude Code hat eins mehr: erst im Dialog ablehnen (Netz 1, es entsteht **kein** Auftrag), dann
  bewusst freigeben und im Messenger verwerfen (Netz 2 → `rejected`). Live end-to-end verifiziert.
- **`-s user` als empfohlene Voreinstellung.** Der Spike zeigte: Projekt-Scope schreibt eine
  committbare `.mcp.json` **und** verlangt eine Server-Freigabe (`⏸ Pending approval`); User-Scope
  ist sofort `✔ connected` und legt nichts Teilbares an. Projekt-Scope wird nur als Team-Variante
  erwähnt. Schlüssel-Hygiene bleibt Thema: `claude mcp get` zeigt den Token im Klartext.
- **Inverse Verbatim-Regel.** Wie n8n hält dieser Kurs die englischen Werkzeug-Strings in deutscher
  Copy — hier CLI-Befehle, `/mcp`, `/permissions` und die Tool-Namen `mcp__lys__…` — buchstabengetreu.
  Zwei Namensformen: Dialog nennt `lys - prepare_order`, Konfiguration `mcp__lys__prepare_order`.
- **Kein Sandkasten → Ablehnen-Drill.** Identisch zu n8n: `prepare_order` erzeugt echte Aufträge;
  der Übungsauftrag trägt „Test:", Beschreibung „bitte ablehnen", und wird abgelehnt. Fluchtweg:
  echter Auftrag → freigeben. Wire-Status `rejected`, Badge „Abgelehnt", live bestätigt.
- **Whitelist = Präzisionskontrolle.** Dieselben fünf Kurs-Tools; `prepare_orders` (Batch) und die
  `task_*`-Tools bleiben aus. In Claude Code fängt der Dialog die Batch-Falle zusätzlich ab: Er nennt
  den genauen Tool-Namen, also sieht der Lernende ein unerwartetes `mcp__lys__prepare_orders` und
  sagt Nein.
- **Docs-only-Ausnahme, erweitert.** RESOURCES.md-Abschnitt von „nur n8n-Kurs" zu „nur
  Builder-Tracks" verbreitert; sanktionierte externe Quelle hier = `docs.claude.com/claude-code`.
  Provenance-Stempel zusätzlich `verified live against Claude Code <X.Y> @ <Datum>`.
- **Ehrlich über Nicht-Erfasstes.** Die Spike-Sitzung endete vor der L4-Erfassung. `/permissions`-Panel
  und exakte 401/429-Fehlertexte sind **funktional beschrieben, nicht erfunden** (kein Fake-Terminal),
  mit OPEN-Vermerk im HTML-Kommentar — im L4-Recapture gegenzuprüfen. Rate-Limit-Zahlen bewusst
  unbeziffert (Doku-Verweis statt brüchiger Zahl — dieselbe Lehre wie n8ns „18 → 22 Tools"-Drift).
